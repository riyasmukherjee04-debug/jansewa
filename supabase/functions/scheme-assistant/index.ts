import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages, profile, matchedSchemes } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const profileSummary = profile
      ? `User Profile:
- Age: ${profile.age}
- Gender: ${profile.gender}
- State: ${profile.state}
- Annual Income: ₹${profile.income}
- Occupation: ${profile.occupation}
- Category: ${profile.category}
- Education: ${profile.education}`
      : "No profile provided.";

    const schemeSummary = matchedSchemes?.length
      ? `\n\nEligible Government Schemes for this user (${matchedSchemes.length} schemes):\n` +
        matchedSchemes
          .map(
            (s: any, i: number) =>
              `${i + 1}. **${s.name}** (${s.category}) - ${s.description}\n   Benefits: ${s.benefits}\n   How to Apply: ${s.howToApply?.join(", ")}\n   Official URL: ${s.officialUrl}`
          )
          .join("\n\n")
      : "\n\nNo pre-matched schemes available.";

    const systemPrompt = `You are JanSewa AI Scheme Assistant — a personalized government scheme advisor for Indian citizens.

${profileSummary}
${schemeSummary}

YOUR ROLE:
1. **Understand the user's specific needs** — they may be a farmer wanting cultivation tips, a student wanting to start a business, a woman entrepreneur, etc.
2. **Recommend relevant government schemes** from the eligible schemes list above that match their stated requirements. Be smart about cross-matching:
   - If a student wants to start a business → recommend BOTH education schemes AND business/startup schemes
   - If a farmer needs financial help → recommend BOTH agriculture schemes AND financial inclusion schemes
   - If a woman wants employment → recommend BOTH women-specific schemes AND employment schemes
3. **Provide practical guidance** — tips, steps, and actionable advice related to their goals
4. **Only recommend schemes from the eligible list** — don't invent schemes. If no scheme matches a specific need, say so honestly.
5. **Format responses clearly** with scheme names in bold, benefits highlighted, and step-by-step application guidance.

GUIDELINES:
- Be conversational, warm, and accessible
- Respond in the same language the user writes in (Hindi, English, etc.)
- For each recommended scheme, briefly explain WHY it's relevant to their specific requirement
- If the user asks about something outside schemes (like farming tips, business advice), provide helpful general guidance AND link it to relevant schemes
- Keep responses focused and practical — avoid lengthy bureaucratic language`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Too many requests, please try again in a moment." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI service limit reached. Please try again later." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service temporarily unavailable" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("scheme-assistant error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
