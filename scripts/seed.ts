// Seed the Supabase content tables from the TS fixtures under src/content.
//
// This is the "fixtures behind the DB" bridge: src/content/* is the editable
// source of the seed, the database is what the app reads. Re-runnable (upsert on
// (challenge_id, slug)). Needs the service-role key (bypasses RLS for writes).
//
//   npm run seed
//
// Requires in .env.local: VITE_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY.

import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";
import { recipes, weekThemes, docs } from "../src/content";
import type { Recipe, WeekTheme, ContentDoc, WeekPlan } from "../src/content";
import { DEFAULT_SETTINGS } from "../src/core/constants";

// --- minimal .env.local loader (no dotenv dependency) ---------------------------
function loadEnv(path: string) {
  let text = "";
  try {
    text = readFileSync(path, "utf8");
  } catch {
    return;
  }
  for (const line of text.split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*"?(.*?)"?\s*$/);
    if (m && process.env[m[1]] === undefined) process.env[m[1]] = m[2];
  }
}
loadEnv(new URL("../.env.local", import.meta.url).pathname);

const url = process.env.VITE_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error(
    "Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local.\n" +
      "The service-role (secret) key is needed to seed — add it and re-run.",
  );
  process.exit(1);
}

const db = createClient(url, serviceKey, { auth: { persistSession: false } });

const CHALLENGE_SLUG = "cucina-povera";

function recipeRow(challengeId: string, r: Recipe) {
  return {
    challenge_id: challengeId,
    slug: r.slug,
    title: r.title,
    cuisine: r.cuisine,
    blurb: r.blurb,
    servings: r.servings,
    per_serving_calories: r.perServing.calories,
    per_serving_protein: r.perServing.protein,
    est_cost_per_serving: r.estCostPerServing ?? null,
    roles: r.roles,
    ingredients: r.ingredients,
    method: r.method,
    modern_move: r.modernMove ?? null,
    notes: r.notes ?? null,
    zero_waste_hero: r.zeroWasteHero ?? false,
    tags: r.tags,
  };
}

function weekRow(challengeId: string, t: WeekTheme) {
  const plan = t as Partial<WeekPlan>;
  return {
    challenge_id: challengeId,
    slug: t.slug,
    number: t.number,
    cuisine: t.cuisine,
    theme: t.theme,
    title: t.title,
    description: t.description,
    context: t.context ?? null,
    dishes: t.dishes,
    protein_note: t.proteinNote ?? null,
    precious_thread: t.preciousThread,
    bonus: t.bonus ?? false,
    engine: plan.engine ?? null,
    days: plan.days ?? null,
    shopping: plan.shopping ?? null,
    first_shop_total: plan.firstShopTotal ?? null,
    steady_state_weekly: plan.steadyStateWeekly ?? null,
  };
}

function docRow(challengeId: string, d: ContentDoc) {
  return {
    challenge_id: challengeId,
    slug: d.slug,
    title: d.title,
    kind: d.kind,
    body: d.body,
  };
}

async function main() {
  // 1. Upsert the challenge and get its id.
  const { data: challenge, error: cErr } = await db
    .from("challenges")
    .upsert(
      {
        slug: CHALLENGE_SLUG,
        name: "Cucina Povera Challenge",
        tagline: "Eat beautifully inside hard limits, wasting nothing.",
        default_calorie_target: DEFAULT_SETTINGS.calorieTarget,
        default_protein_floor: DEFAULT_SETTINGS.proteinFloor,
        default_weekly_budget: DEFAULT_SETTINGS.weeklyBudget,
      },
      { onConflict: "slug" },
    )
    .select("id")
    .single();
  if (cErr || !challenge) throw cErr ?? new Error("no challenge id");
  const id = challenge.id as string;

  // 2. Upsert the child content.
  const r = await db
    .from("recipes")
    .upsert(recipes.map((x) => recipeRow(id, x)), { onConflict: "challenge_id,slug" });
  if (r.error) throw r.error;

  const w = await db
    .from("week_themes")
    .upsert(weekThemes.map((x) => weekRow(id, x)), { onConflict: "challenge_id,slug" });
  if (w.error) throw w.error;

  const d = await db
    .from("content_docs")
    .upsert(docs.map((x) => docRow(id, x)), { onConflict: "challenge_id,slug" });
  if (d.error) throw d.error;

  console.log(
    `Seeded "${CHALLENGE_SLUG}": ${recipes.length} recipes, ` +
      `${weekThemes.length} week themes, ${docs.length} docs.`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
