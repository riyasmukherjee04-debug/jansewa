import { useState, useRef, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { schemes, UserProfile } from "@/data/schemes";
import { matchSchemes } from "@/lib/matchSchemes";
import SchemeCard from "@/components/SchemeCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, Sparkles, ArrowLeft } from "lucide-react";
import { toast } from "@/hooks/use-toast";

type Message = { role: "user" | "assistant"; content: string };

const STREAM_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/scheme-assistant`;

const SchemeAssistant = () => {
  const [searchParams] = useSearchParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const profile = useMemo((): UserProfile | null => {
    const age = searchParams.get("age");
    const gender = searchParams.get("gender");
    const state = searchParams.get("state");
    const income = searchParams.get("income");
    const occupation = searchParams.get("occupation");
    const category = searchParams.get("category");
    const education = searchParams.get("education");
    if (age && gender && state && income && occupation && category && education) {
      return {
        age: parseInt(age), gender: gender as any, state, income: parseInt(income),
        occupation: occupation as any, category: category as any, education: education as any,
      };
    }
    return null;
  }, [searchParams]);

  const matchedResults = useMemo(() => {
    if (!profile) return [];
    return matchSchemes(profile, schemes);
  }, [profile]);

  const matchedSchemeData = useMemo(() => {
    return matchedResults.map((r) => ({
      name: r.scheme.name,
      category: r.scheme.category,
      description: r.scheme.description,
      benefits: r.scheme.benefits,
      howToApply: r.scheme.howToApply,
      officialUrl: r.scheme.officialUrl,
    }));
  }, [matchedResults]);

  const allSchemeData = useMemo(() => {
    return schemes.map((s) => ({
      name: s.name,
      category: s.category,
      description: s.description,
      benefits: s.benefits,
      eligibility: s.eligibility,
      howToApply: s.howToApply,
      officialUrl: s.officialUrl,
    }));
  }, []);

  // Initial greeting
  useEffect(() => {
    if (profile) {
      const greeting = `Namaste! 🙏 I'm your JanSewa AI Assistant. Based on your profile (**${profile.occupation}**, **${profile.education}**, **${profile.state}**), I found **${matchedResults.length} eligible schemes** for you.\n\nTell me what you need — for example:\n- "I want to start a business"\n- "I need tips for farming"\n- "I'm a student looking for scholarships"\n- "I need housing loan help"\n\nI'll recommend the best schemes and give you practical guidance! 🎯`;
      setMessages([{ role: "assistant", content: greeting }]);
    }
  }, [profile, matchedResults.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    let assistantText = "";

    try {
      const resp = await fetch(STREAM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: updated.filter((m) => m.role !== "assistant" || updated.indexOf(m) > 0 ? true : false)
            .map((m) => ({ role: m.role, content: m.content })),
          profile,
          matchedSchemes: matchedSchemeData,
          allSchemes: allSchemeData,
        }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({ error: "Something went wrong" }));
        toast({ title: "Error", description: err.error, variant: "destructive" });
        setLoading(false);
        return;
      }

      if (!resp.body) throw new Error("No response body");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      const updateAssistant = (text: string) => {
        assistantText = text;
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last?.role === "assistant" && prev.length > 1 && prev[prev.length - 2]?.role === "user") {
            return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: text } : m));
          }
          return [...prev, { role: "assistant", content: text }];
        });
      };

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let newlineIdx: number;
        while ((newlineIdx = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, newlineIdx);
          buffer = buffer.slice(newlineIdx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantText += content;
              updateAssistant(assistantText);
            }
          } catch {
            buffer = line + "\n" + buffer;
            break;
          }
        }
      }

      // flush
      if (buffer.trim()) {
        for (let raw of buffer.split("\n")) {
          if (!raw.startsWith("data: ")) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === "[DONE]") continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantText += content;
              updateAssistant(assistantText);
            }
          } catch {}
        }
      }
    } catch (e) {
      console.error("Stream error:", e);
      toast({ title: "Error", description: "Failed to get response. Please try again.", variant: "destructive" });
    }

    setLoading(false);
  };

  const topSchemes = matchedResults.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-6">
        <div className="flex items-center gap-3 mb-6">
          <Link to={`/schemes?${searchParams.toString()}`}>
            <Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" /> AI Scheme Assistant
            </h1>
            {profile && (
              <p className="text-sm text-muted-foreground">
                {profile.occupation} • {profile.education} • {profile.state} • ₹{profile.income.toLocaleString()}/yr
              </p>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chat Panel */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <div className="p-4 border-b bg-primary/5 rounded-t-lg">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  <span className="font-semibold">JanSewa AI</span>
                  <Badge variant="secondary" className="text-xs">Personalized</Badge>
                </div>
              </div>

              <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.role === "assistant" && (
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-br-md"
                          : "bg-muted rounded-bl-md"
                      }`}
                    >
                      {msg.content}
                    </div>
                    {msg.role === "user" && (
                      <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <User className="h-4 w-4 text-secondary" />
                      </div>
                    )}
                  </div>
                ))}
                {loading && messages[messages.length - 1]?.role === "user" && (
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3 text-sm text-muted-foreground">
                      <span className="animate-pulse">Thinking...</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 border-t">
                <form
                  onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
                  className="flex gap-2"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Tell me what you need — e.g. 'I want to start farming'..."
                    disabled={loading}
                    className="flex-1"
                  />
                  <Button type="submit" disabled={loading || !input.trim()} size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
                <div className="flex flex-wrap gap-2 mt-3">
                  {profile?.occupation === "farmer" && (
                    <Badge variant="outline" className="cursor-pointer text-xs hover:bg-primary/10" onClick={() => { setInput("I need help with crop cultivation and farming tips"); }}>
                      🌾 Farming tips
                    </Badge>
                  )}
                  {profile?.occupation === "student" && (
                    <Badge variant="outline" className="cursor-pointer text-xs hover:bg-primary/10" onClick={() => { setInput("I want scholarships and education loans"); }}>
                      📚 Scholarships
                    </Badge>
                  )}
                  <Badge variant="outline" className="cursor-pointer text-xs hover:bg-primary/10" onClick={() => { setInput("I want to start a small business"); }}>
                    💼 Start business
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer text-xs hover:bg-primary/10" onClick={() => { setInput("I need financial assistance or loans"); }}>
                    💰 Financial help
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer text-xs hover:bg-primary/10" onClick={() => { setInput("What health insurance schemes am I eligible for?"); }}>
                    🏥 Health schemes
                  </Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar - Top Matched Schemes */}
          <div className="space-y-4">
            <h2 className="font-bold text-lg">Top Matched Schemes</h2>
            <p className="text-sm text-muted-foreground">
              {matchedResults.length} schemes match your profile. Ask the AI for personalized recommendations!
            </p>
            {topSchemes.map((r) => (
              <SchemeCard key={r.scheme.id} scheme={r.scheme} score={r.score} matchReasons={r.matchReasons} />
            ))}
            {matchedResults.length > 4 && (
              <Link to={`/schemes?${searchParams.toString()}`}>
                <Button variant="outline" className="w-full">
                  View All {matchedResults.length} Schemes
                </Button>
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SchemeAssistant;
