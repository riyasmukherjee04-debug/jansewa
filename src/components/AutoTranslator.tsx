import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";

// Marks an attribute on text nodes' parent elements so we can restore originals.
const ORIG_ATTR = "data-orig-text";
const PLACEHOLDER_ORIG = "data-orig-placeholder";
const TITLE_ORIG = "data-orig-title";
const ARIA_ORIG = "data-orig-aria";
const SKIP_TAGS = new Set([
  "SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "SVG", "PATH",
]);

const cacheKey = (lang: string) => `jansewa_tx_cache_${lang}`;

function loadCache(lang: string): Record<string, string> {
  try {
    const raw = localStorage.getItem(cacheKey(lang));
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function saveCache(lang: string, cache: Record<string, string>) {
  try {
    localStorage.setItem(cacheKey(lang), JSON.stringify(cache));
  } catch {
    /* ignore quota */
  }
}

function isTranslatable(text: string) {
  const t = text.trim();
  if (!t) return false;
  if (t.length < 2) return false;
  // Skip pure numbers/symbols/urls
  if (/^[\d\s\W_]+$/.test(t)) return false;
  if (/^https?:\/\//i.test(t)) return false;
  return true;
}

function collectTextNodes(root: Node): Text[] {
  const out: Text[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      const parent = (node as Text).parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (parent.closest("[data-no-translate]")) return NodeFilter.FILTER_REJECT;
      if (parent.isContentEditable) return NodeFilter.FILTER_REJECT;
      if (!isTranslatable((node as Text).nodeValue || "")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  let n: Node | null;
  while ((n = walker.nextNode())) out.push(n as Text);
  return out;
}

interface Job {
  apply: (translated: string) => void;
  original: string;
}

async function translateBatch(texts: string[], target: string): Promise<string[]> {
  const { data, error } = await supabase.functions.invoke("translate", {
    body: { texts, target },
  });
  if (error || !data?.translations) return texts;
  return data.translations as string[];
}

const AutoTranslator = () => {
  const { i18n } = useTranslation();
  const runIdRef = useRef(0);
  const lastLangRef = useRef<string>("");

  useEffect(() => {
    const lang = i18n.language?.split("-")[0] || "en";
    lastLangRef.current = lang;
    const myRun = ++runIdRef.current;

    // Restore originals first
    document.querySelectorAll(`[${ORIG_ATTR}]`).forEach((el) => {
      const orig = el.getAttribute(ORIG_ATTR);
      if (orig != null) {
        // Only restore if element has a single text node child (best effort).
        for (const child of Array.from(el.childNodes)) {
          if (child.nodeType === Node.TEXT_NODE) {
            (child as Text).nodeValue = orig;
            break;
          }
        }
        el.removeAttribute(ORIG_ATTR);
      }
    });
    document.querySelectorAll(`[${PLACEHOLDER_ORIG}]`).forEach((el) => {
      const o = el.getAttribute(PLACEHOLDER_ORIG);
      if (o != null) (el as HTMLInputElement).placeholder = o;
      el.removeAttribute(PLACEHOLDER_ORIG);
    });
    document.querySelectorAll(`[${TITLE_ORIG}]`).forEach((el) => {
      const o = el.getAttribute(TITLE_ORIG);
      if (o != null) (el as HTMLElement).title = o;
      el.removeAttribute(TITLE_ORIG);
    });
    document.querySelectorAll(`[${ARIA_ORIG}]`).forEach((el) => {
      const o = el.getAttribute(ARIA_ORIG);
      if (o != null) el.setAttribute("aria-label", o);
      el.removeAttribute(ARIA_ORIG);
    });

    if (lang === "en") return;

    let cancelled = false;
    let observer: MutationObserver | null = null;
    let debounceTimer: number | null = null;

    const cache = loadCache(lang);

    const runTranslation = async () => {
      if (cancelled || runIdRef.current !== myRun) return;

      const jobs: Job[] = [];

      // Text nodes
      const nodes = collectTextNodes(document.body);
      for (const node of nodes) {
        const original = node.nodeValue || "";
        const parent = node.parentElement!;
        if (parent.hasAttribute(ORIG_ATTR)) continue; // already translated
        const trimmed = original.trim();
        const leading = original.match(/^\s*/)?.[0] ?? "";
        const trailing = original.match(/\s*$/)?.[0] ?? "";
        jobs.push({
          original: trimmed,
          apply: (translated) => {
            parent.setAttribute(ORIG_ATTR, original);
            node.nodeValue = leading + translated + trailing;
          },
        });
      }

      // Placeholders, titles, aria-labels
      document.querySelectorAll<HTMLElement>("[placeholder]").forEach((el) => {
        if (el.hasAttribute(PLACEHOLDER_ORIG)) return;
        const v = (el as HTMLInputElement).placeholder;
        if (!isTranslatable(v)) return;
        jobs.push({
          original: v.trim(),
          apply: (t) => {
            el.setAttribute(PLACEHOLDER_ORIG, v);
            (el as HTMLInputElement).placeholder = t;
          },
        });
      });
      document.querySelectorAll<HTMLElement>("[title]").forEach((el) => {
        if (el.hasAttribute(TITLE_ORIG)) return;
        const v = el.title;
        if (!isTranslatable(v)) return;
        jobs.push({
          original: v.trim(),
          apply: (t) => {
            el.setAttribute(TITLE_ORIG, v);
            el.title = t;
          },
        });
      });
      document.querySelectorAll<HTMLElement>("[aria-label]").forEach((el) => {
        if (el.hasAttribute(ARIA_ORIG)) return;
        const v = el.getAttribute("aria-label") || "";
        if (!isTranslatable(v)) return;
        jobs.push({
          original: v.trim(),
          apply: (t) => {
            el.setAttribute(ARIA_ORIG, v);
            el.setAttribute("aria-label", t);
          },
        });
      });

      if (!jobs.length) return;

      // Apply cached immediately, collect uncached
      const uncached: { idx: number; text: string }[] = [];
      jobs.forEach((j, idx) => {
        const c = cache[j.original];
        if (c) j.apply(c);
        else uncached.push({ idx, text: j.original });
      });

      // Dedup uncached
      const uniqueMap = new Map<string, number[]>();
      uncached.forEach(({ idx, text }) => {
        if (!uniqueMap.has(text)) uniqueMap.set(text, []);
        uniqueMap.get(text)!.push(idx);
      });
      const uniqueTexts = Array.from(uniqueMap.keys());

      // Batch in chunks of 40
      const CHUNK = 40;
      for (let i = 0; i < uniqueTexts.length; i += CHUNK) {
        if (cancelled || runIdRef.current !== myRun) return;
        const slice = uniqueTexts.slice(i, i + CHUNK);
        const translated = await translateBatch(slice, lang);
        if (cancelled || runIdRef.current !== myRun) return;
        slice.forEach((src, k) => {
          const dst = translated[k] ?? src;
          cache[src] = dst;
          const targetIdxs = uniqueMap.get(src) || [];
          targetIdxs.forEach((idx) => {
            try {
              jobs[idx].apply(dst);
            } catch {
              /* ignore */
            }
          });
        });
        saveCache(lang, cache);
      }
    };

    const schedule = () => {
      if (debounceTimer) window.clearTimeout(debounceTimer);
      debounceTimer = window.setTimeout(runTranslation, 250);
    };

    schedule();

    observer = new MutationObserver((mutations) => {
      // Ignore mutations we caused (text changes on elements already marked).
      let relevant = false;
      for (const m of mutations) {
        if (m.type === "childList" && m.addedNodes.length) {
          for (const n of Array.from(m.addedNodes)) {
            if (n.nodeType === Node.ELEMENT_NODE || n.nodeType === Node.TEXT_NODE) {
              relevant = true;
              break;
            }
          }
        } else if (m.type === "characterData") {
          const parent = (m.target as Text).parentElement;
          if (parent && !parent.hasAttribute(ORIG_ATTR)) relevant = true;
        }
        if (relevant) break;
      }
      if (relevant) schedule();
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      cancelled = true;
      if (observer) observer.disconnect();
      if (debounceTimer) window.clearTimeout(debounceTimer);
    };
  }, [i18n.language]);

  return null;
};

export default AutoTranslator;
