// AI menu stylist (Supabase Edge Function, Deno).
//
// The client runs the pure deterministic planner and sends the VALID candidate
// days here. Claude only SELECTS and SEQUENCES 7 distinct dinners and writes
// prose — the dish field is an enum of real candidate slugs, so the model
// physically cannot invent a calorie/cost/protein number ("grounding by
// omission"). The client re-certifies the selection against the engine.
//
// Secret required:  supabase secrets set ANTHROPIC_API_KEY=sk-ant-...
// Deploy:           supabase functions deploy generate-week

import Anthropic from "npm:@anthropic-ai/sdk";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface CandidateDay {
  dinner: string;
  dinnerTitle: string;
  calories: number;
  protein: number;
  cost: number;
  tags: string[];
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { candidates, settings } = await req.json();
    if (!Array.isArray(candidates) || candidates.length < 7) {
      return json({ error: "need at least 7 candidate days" }, 400);
    }

    const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!apiKey) return json({ error: "ANTHROPIC_API_KEY is not configured" }, 500);

    const client = new Anthropic({ apiKey });
    const slugs = [...new Set((candidates as CandidateDay[]).map((c) => c.dinner))];

    const tool = {
      name: "compose_week",
      description: "Compose a 7-day cucina povera menu from the provided candidate dinners.",
      input_schema: {
        type: "object",
        additionalProperties: false,
        properties: {
          intro: {
            type: "string",
            description: "One or two sentences capturing the week's character.",
          },
          days: {
            type: "array",
            minItems: 7,
            maxItems: 7,
            description: "Seven days, each a distinct dinner chosen from the candidates.",
            items: {
              type: "object",
              additionalProperties: false,
              properties: {
                dinner: {
                  type: "string",
                  enum: slugs,
                  description: "Slug of the chosen dinner — MUST be one of the candidates.",
                },
                blurb: {
                  type: "string",
                  description: "A short, appetizing one-line note for the day.",
                },
              },
              required: ["dinner", "blurb"],
            },
          },
        },
        required: ["intro", "days"],
      },
    };

    const menu = (candidates as CandidateDay[])
      .map(
        (c) =>
          `- ${c.dinner} — "${c.dinnerTitle}" — ${c.calories} kcal, ${c.protein}g protein, $${c.cost}` +
          (c.tags?.length ? ` — ${c.tags.join(", ")}` : ""),
      )
      .join("\n");

    const prompt =
      `You are composing a 7-day cucina povera challenge week. Choose SEVEN DISTINCT dinners ` +
      `from the candidate list below, optimizing for variety (don't cluster similar dishes back to ` +
      `back), a satisfying arc across the week, and overall appeal. Every candidate already satisfies ` +
      `the day's rules (at/under ${settings?.calorieTarget ?? 2000} kcal, at least ` +
      `${settings?.proteinFloor ?? 100}g protein, zero waste), so you only select and sequence — ` +
      `never invent numbers. Aim to keep the week near a $${settings?.weeklyBudget ?? 55} budget. ` +
      `Write a one-line intro and a short, vivid blurb per day. Each day's dinner must be a distinct ` +
      `slug drawn from the candidates.\n\nCandidates:\n${menu}`;

    const message = await client.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 2000,
      output_config: { effort: "low" },
      tools: [tool],
      tool_choice: { type: "tool", name: "compose_week" },
      messages: [{ role: "user", content: prompt }],
    });

    const block = message.content.find((b: { type: string }) => b.type === "tool_use");
    if (!block) return json({ error: "model returned no menu" }, 502);

    return json((block as { input: unknown }).input, 200);
  } catch (e) {
    return json({ error: String((e as Error)?.message ?? e) }, 500);
  }
});

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "content-type": "application/json" },
  });
}
