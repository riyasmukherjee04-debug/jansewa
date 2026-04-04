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
1. First understand the user's CURRENT PROBLEM from their latest message — for example business, farming, health, education, loan, housing, insurance, job, training, etc.
2. Then ALWAYS recommend REAL schemes from the provided lists that match that problem.
3. If a user profile is available, ALSO include schemes from their profile-matched list that may help them.
4. Problem-based schemes and profile-based schemes should BOTH be shown in the same answer.
5. Never give an advice-only answer. Advice can be brief, but scheme recommendations are mandatory.
6. Use the EXACT scheme names from the provided lists so they can be recognized correctly.
7. Only recommend real schemes from the lists provided — never invent schemes.

MANDATORY RESPONSE FORMAT:
## Schemes for your problem
List 2-5 schemes relevant to what the user asked.
For each scheme include:
- **Exact scheme name**
- Why it is relevant to the user's asked problem
- Benefits
- How to apply
- Official URL

## Schemes related to your profile
If profile data is available, list 1-3 additional schemes from the profile-matched list that suit the user's profile, even if they are different from the asked problem.
If there are no extra profile schemes, say so briefly.

## Quick advice
Give 1-3 short practical bullets only after listing schemes.

IMPORTANT DECISION RULES:
- A farmer asking about business → show business schemes first, then farmer/profile schemes.
- A farmer asking about health → show health schemes first, then farmer/profile schemes.
- A student asking about business → show business schemes first, then education/profile schemes.
- A woman asking about business → show business schemes first, then women/profile schemes.
- For every query, answer in the same language as the user.
- Never say "you did not provide a profile" when profile data exists above.
- Keep the answer practical, clear, and focused on schemes first.`;
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
