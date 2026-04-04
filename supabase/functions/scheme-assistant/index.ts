import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages, profile, matchedSchemes, allSchemes } = await req.json();
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
      ? `\n\nPRIMARY ELIGIBLE SCHEMES (matched to user profile - ${matchedSchemes.length} schemes):\n` +
        matchedSchemes
          .map(
            (s: any, i: number) =>
              `${i + 1}. **${s.name}** (${s.category}) - ${s.description}\n   Benefits: ${s.benefits}\n   How to Apply: ${s.howToApply?.join(", ")}\n   Official URL: ${s.officialUrl}`
          )
          .join("\n\n")
      : "\n\nNo pre-matched schemes available.";

    const allSchemesSummary = allSchemes?.length
      ? `\n\nALL AVAILABLE GOVERNMENT SCHEMES (${allSchemes.length} total — ALWAYS search this list to find schemes matching the user's QUESTION/PROBLEM, regardless of their profile):\n` +
        allSchemes
          .map(
            (s: any, i: number) =>
              `${i + 1}. **${s.name}** (${s.category}) - ${s.description}\n   Benefits: ${s.benefits}\n   How to Apply: ${s.howToApply?.join(", ") || 'N/A'}\n   Official URL: ${s.officialUrl || 'N/A'}\n   Eligibility: Age ${s.eligibility?.minAge || 'any'}-${s.eligibility?.maxAge || 'any'}, Income ≤₹${s.eligibility?.maxIncome || 'any'}, Occupations: ${s.eligibility?.occupations?.join(', ') || 'any'}`
          )
          .join("\n")
      : "";

    const systemPrompt = `You are JanSewa AI Scheme Assistant — a personalized government scheme advisor for Indian citizens.

${profileSummary}
${schemeSummary}
${allSchemesSummary}

YOUR ROLE:
1. **Listen to the user's SPECIFIC PROBLEM/QUESTION first** — they may say "I lost my job", "I want to grow wheat", "I need money for my daughter's education", "I want to open a shop", "I need health insurance", etc.
2. **ALWAYS recommend schemes from the FULL SCHEMES LIST that match the user's QUESTION** — not just their profile-matched schemes:
   - A FARMER asking about BUSINESS → show business/startup/MUDRA/Stand-Up India schemes + agriculture schemes
   - A FARMER asking about HEALTH → show health/insurance/Ayushman Bharat schemes + agriculture schemes  
   - A STUDENT asking about BUSINESS → show business/startup schemes + education/scholarship schemes
   - A WOMAN asking about BUSINESS → show business schemes + women-specific schemes
   - ANY person asking about ANY topic → search ALL schemes for that topic + include their profile schemes
3. **DUAL APPROACH**: For EVERY query, provide:
   a) Schemes directly solving their asked problem (from ALL schemes list — ANY category)
   b) Their profile-eligible schemes that may also help
4. **NEVER limit to profile category only** — if a farmer asks about health, show ALL health schemes. If a student asks about business, show ALL business schemes. The user's occupation does NOT restrict which schemes to show.
5. **Provide practical, actionable advice** alongside scheme recommendations:
   - Farming → cultivation tips + agriculture schemes
   - Business → startup steps + business/financial schemes  
   - Health → health guidance + health/insurance schemes
   - Education → study guidance + scholarship/education schemes
6. **Format responses clearly**: scheme names in **bold**, benefits highlighted, official URLs, and step-by-step application guidance.
7. **Only recommend real schemes from the lists provided** — never invent schemes.

GUIDELINES:
- Be conversational, warm, and accessible
- Respond in the same language the user writes in (Hindi, English, etc.)
- For each scheme, explain WHY it solves their specific problem
- If user describes a complex problem, break it down and recommend schemes for each aspect
- Always provide the official URL for schemes you recommend
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
