import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const LANG_NAMES: Record<string, string> = {
  hi: "Hindi",
  mr: "Marathi",
  ta: "Tamil",
  bn: "Bengali",
  en: "English",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { texts, target } = await req.json() as { texts: string[]; target: string };
    if (!Array.isArray(texts) || !texts.length) {
      return new Response(JSON.stringify({ translations: [] }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const langName = LANG_NAMES[target] ?? target;
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const system = `You are a professional translator for an Indian government schemes portal (JanSewa). Translate each input string to ${langName}. Rules:
- Preserve meaning, tone, and any numbers, dates, currency symbols, emojis, URLs, and proper nouns/scheme names exactly.
- Keep translations natural and concise so they fit UI elements.
- Do NOT add quotes, prefixes, explanations, or extra punctuation.
- Return ONLY a JSON array of strings of the same length and order as the input array.`;

    const user = JSON.stringify(texts);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
      }),
    });

    if (!response.ok) {
      const t = await response.text();
      console.error("translate gateway error", response.status, t);
      return new Response(JSON.stringify({ error: "translate failed", translations: texts }), {
        status: response.status === 429 || response.status === 402 ? response.status : 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const content: string = data?.choices?.[0]?.message?.content ?? "[]";
    let translations: string[] = [];
    try {
      const cleaned = content.replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
      const parsed = JSON.parse(cleaned);
      if (Array.isArray(parsed)) translations = parsed.map((x) => String(x));
    } catch (err) {
      console.error("parse error", err, content);
    }
    if (translations.length !== texts.length) translations = texts;

    return new Response(JSON.stringify({ translations }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("translate error", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "unknown" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
