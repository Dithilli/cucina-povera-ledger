// Cucina Povera — MCP server.
//
// Exposes the app's read + write surface as MCP tools so an agent can *use* the
// app, not just look at it: browse weeks/recipes, generate a constraint-
// satisfying week, log a day, read stats, set targets. Reads use the public
// anon key; writes use the service-role key and act as a configured user
// (CUCINA_USER_EMAIL), bypassing RLS the same way the seed does.
//
//   npm run mcp        # stdio server (for Claude Desktop / Claude Code)
//
// Env (from .env.local next to this repo, or the MCP host's `env` config):
//   VITE_SUPABASE_URL / SUPABASE_URL          (required)
//   VITE_SUPABASE_ANON_KEY / SUPABASE_ANON_KEY (required — reads)
//   SUPABASE_SERVICE_ROLE_KEY                  (required for writes/stats)
//   CUCINA_USER_EMAIL                          (whose ledger to read/write)

import { readFileSync } from "node:fs";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Entry, Ledger, Settings } from "../src/types";
import type { Recipe } from "../src/content/types";
import {
  dayPasses,
  currentStreak,
  weekSummary,
  weekGroups,
  makeId,
  validateEntry,
} from "../src/core/ledger";
import { planWeek } from "../src/core/planner";
import { DEFAULT_SETTINGS } from "../src/core/constants";

// --- env (load .env.local relative to the repo, like scripts/seed.ts) ----------
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

const URL_ = process.env.VITE_SUPABASE_URL ?? process.env.SUPABASE_URL;
const ANON = process.env.VITE_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const USER_EMAIL = process.env.CUCINA_USER_EMAIL;
const DEFAULT_CHALLENGE = "cucina-povera";

if (!URL_ || !ANON) {
  console.error("Missing Supabase URL / anon key. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
  process.exit(1);
}

const anon = createClient(URL_, ANON, { auth: { persistSession: false } });
const admin: SupabaseClient | null = SERVICE
  ? createClient(URL_, SERVICE, { auth: { persistSession: false } })
  : null;

// --- helpers -------------------------------------------------------------------
const json = (obj: unknown) => ({ content: [{ type: "text" as const, text: JSON.stringify(obj, null, 2) }] });
const fail = (msg: string) => ({ content: [{ type: "text" as const, text: msg }], isError: true });

function requireAdmin(): SupabaseClient {
  if (!admin) throw new Error("Ledger access needs SUPABASE_SERVICE_ROLE_KEY in the environment.");
  return admin;
}

let cachedUserId: string | null = null;
async function userId(): Promise<string> {
  if (cachedUserId) return cachedUserId;
  const db = requireAdmin();
  if (!USER_EMAIL) throw new Error("Set CUCINA_USER_EMAIL to the email you sign into the app with.");
  const { data, error } = await db.auth.admin.listUsers();
  if (error) throw error;
  const u = data.users.find((x) => (x.email ?? "").toLowerCase() === USER_EMAIL.toLowerCase());
  if (!u) throw new Error(`No account for ${USER_EMAIL}. Open the app and "Save to account" once to create it.`);
  cachedUserId = u.id;
  return u.id;
}

function toRecipe(r: Record<string, unknown>): Recipe {
  return {
    slug: r.slug as string,
    title: r.title as string,
    cuisine: r.cuisine as string,
    blurb: r.blurb as string,
    servings: r.servings as number,
    perServing: { calories: r.per_serving_calories as number, protein: r.per_serving_protein as number },
    estCostPerServing: r.est_cost_per_serving == null ? undefined : Number(r.est_cost_per_serving),
    roles: (r.roles as Recipe["roles"]) ?? [],
    ingredients: (r.ingredients as Recipe["ingredients"]) ?? [],
    method: (r.method as string[]) ?? [],
    modernMove: (r.modern_move as string) ?? undefined,
    notes: (r.notes as string) ?? undefined,
    zeroWasteHero: Boolean(r.zero_waste_hero),
    tags: (r.tags as string[]) ?? [],
  };
}

async function fetchRecipes(challenge: string): Promise<Record<string, unknown>[]> {
  const { data, error } = await anon
    .from("recipes")
    .select("*, challenges!inner(slug)")
    .eq("challenges.slug", challenge)
    .order("title");
  if (error) throw error;
  return (data ?? []) as Record<string, unknown>[];
}

async function challengeSettings(challenge: string): Promise<Settings> {
  const { data } = await anon.from("challenges").select("*").eq("slug", challenge).maybeSingle();
  if (!data) return { ...DEFAULT_SETTINGS };
  return {
    calorieTarget: data.default_calorie_target,
    proteinFloor: data.default_protein_floor,
    weeklyBudget: Number(data.default_weekly_budget),
    activeWeek: DEFAULT_SETTINGS.activeWeek,
  };
}

async function loadUserLedger(): Promise<Ledger> {
  const db = requireAdmin();
  const uid = await userId();
  const [s, es] = await Promise.all([
    db.from("app_settings").select("*").eq("user_id", uid).maybeSingle(),
    db.from("entries").select("*").eq("user_id", uid).order("date"),
  ]);
  if (s.error) throw s.error;
  if (es.error) throw es.error;
  const settings: Settings = s.data
    ? {
        calorieTarget: s.data.calorie_target,
        proteinFloor: s.data.protein_floor,
        weeklyBudget: Number(s.data.weekly_budget),
        activeWeek: s.data.active_week,
      }
    : { ...DEFAULT_SETTINGS };
  const entries: Entry[] = (es.data ?? []).map((e) => ({
    id: e.id,
    date: e.date,
    week: e.week,
    dish: e.dish,
    calories: e.calories,
    protein: e.protein,
    cost: Number(e.cost),
    zeroWaste: e.zero_waste,
  }));
  return { version: 1, settings, entries };
}

// --- server --------------------------------------------------------------------
const server = new McpServer({ name: "cucina-povera", version: "1.0.0" });

const guard =
  <A>(fn: (args: A) => Promise<ReturnType<typeof json>>) =>
  async (args: A) => {
    try {
      return await fn(args);
    } catch (e) {
      return fail(String((e as Error)?.message ?? e));
    }
  };

server.tool(
  "list_challenges",
  "List the available cooking challenges (cuisines) and their default targets.",
  {},
  guard(async () => {
    const { data, error } = await anon.from("challenges").select("*").order("created_at");
    if (error) throw error;
    return json(data);
  }),
);

server.tool(
  "list_weeks",
  "List the themed weeks for a challenge (theme, cultural context, candidate dishes).",
  { challenge: z.string().default(DEFAULT_CHALLENGE) },
  guard(async ({ challenge }) => {
    const { data, error } = await anon
      .from("week_themes")
      .select("number,slug,title,theme,description,context,dishes,protein_note,precious_thread,bonus,days, challenges!inner(slug)")
      .eq("challenges.slug", challenge)
      .order("number");
    if (error) throw error;
    const weeks = (data ?? []).map((w) => ({ ...w, has_plan: w.days != null, days: undefined }));
    return json(weeks);
  }),
);

server.tool(
  "get_week",
  "Get one week including its full executable plan (Sunday engine, 7 days, shopping) when built out.",
  { challenge: z.string().default(DEFAULT_CHALLENGE), slug: z.string() },
  guard(async ({ challenge, slug }) => {
    const { data, error } = await anon
      .from("week_themes")
      .select("*, challenges!inner(slug)")
      .eq("challenges.slug", challenge)
      .eq("slug", slug)
      .maybeSingle();
    if (error) throw error;
    if (!data) return fail(`No week "${slug}" in challenge "${challenge}".`);
    return json(data);
  }),
);

server.tool(
  "list_recipes",
  "List the recipe library for a challenge (title, macros, cost, tags).",
  { challenge: z.string().default(DEFAULT_CHALLENGE) },
  guard(async ({ challenge }) => {
    const rows = await fetchRecipes(challenge);
    const recipes = rows.map((r) => ({
      slug: r.slug,
      title: r.title,
      blurb: r.blurb,
      per_serving_calories: r.per_serving_calories,
      per_serving_protein: r.per_serving_protein,
      est_cost_per_serving: r.est_cost_per_serving,
      tags: r.tags,
    }));
    return json(recipes);
  }),
);

server.tool(
  "get_recipe",
  "Get one recipe in full (ingredients, method, the modern move).",
  { challenge: z.string().default(DEFAULT_CHALLENGE), slug: z.string() },
  guard(async ({ challenge, slug }) => {
    const { data, error } = await anon
      .from("recipes")
      .select("*, challenges!inner(slug)")
      .eq("challenges.slug", challenge)
      .eq("slug", slug)
      .maybeSingle();
    if (error) throw error;
    if (!data) return fail(`No recipe "${slug}" in challenge "${challenge}".`);
    return json(data);
  }),
);

server.tool(
  "generate_week",
  "Deterministically assemble a 7-day plan from the challenge's recipe library — each day certified at/under the calorie target, over the protein floor, zero waste, no dinner repeated. Returns the plan or the binding constraint.",
  { challenge: z.string().default(DEFAULT_CHALLENGE) },
  guard(async ({ challenge }) => {
    const rows = await fetchRecipes(challenge);
    const pool: Recipe[] = rows.map(toRecipe);
    const settings = await challengeSettings(challenge);
    const result = planWeek(pool, settings);
    return json(result);
  }),
);

server.tool(
  "get_stats",
  "Read the configured user's ledger: streak of kept days, this week vs budget, and the efficiency stats.",
  {},
  guard(async () => {
    const ledger = await loadUserLedger();
    return json({
      settings: ledger.settings,
      entries: ledger.entries.length,
      streak_days_kept: currentStreak(ledger),
      this_week: weekSummary(ledger, ledger.settings.activeWeek),
      weeks: weekGroups(ledger).map((g) => ({ week: g.week, summary: g.summary })),
    });
  }),
);

server.tool(
  "log_day",
  "Log a day to the user's ledger. Returns whether the day is KEPT (at/under calorie target, at/over protein floor, zero waste).",
  {
    date: z.string().describe("YYYY-MM-DD"),
    calories: z.number().int().nonnegative(),
    protein: z.number().int().nonnegative().describe("grams"),
    cost: z.number().nonnegative().describe("USD"),
    dish: z.string().default(""),
    zeroWaste: z.boolean().default(true),
    week: z.string().optional().describe("defaults to the user's active week"),
    challenge: z.string().default(DEFAULT_CHALLENGE),
  },
  guard(async ({ date, calories, protein, cost, dish, zeroWaste, week, challenge }) => {
    const db = requireAdmin();
    const uid = await userId();
    const ledger = await loadUserLedger();
    const entry: Entry = {
      id: makeId(),
      date,
      week: week ?? ledger.settings.activeWeek,
      dish,
      calories,
      protein,
      cost,
      zeroWaste,
    };
    const v = validateEntry(entry);
    if (!v.ok) return fail(`Invalid entry: ${JSON.stringify(v)}`);
    const passed = dayPasses(entry, ledger.settings);
    const { error } = await db.from("entries").upsert(
      {
        id: entry.id,
        user_id: uid,
        challenge_slug: challenge,
        date: entry.date,
        week: entry.week,
        dish: entry.dish,
        calories: entry.calories,
        protein: entry.protein,
        cost: entry.cost,
        zero_waste: entry.zeroWaste,
      },
      { onConflict: "id" },
    );
    if (error) throw error;
    return json({ logged: entry, kept: passed });
  }),
);

server.tool(
  "set_targets",
  "Update the user's targets (calorie target, protein floor, weekly budget, active week).",
  {
    calorieTarget: z.number().int().positive().optional(),
    proteinFloor: z.number().int().nonnegative().optional(),
    weeklyBudget: z.number().nonnegative().optional(),
    activeWeek: z.string().optional(),
  },
  guard(async (patch) => {
    const db = requireAdmin();
    const uid = await userId();
    const ledger = await loadUserLedger();
    const next: Settings = {
      calorieTarget: patch.calorieTarget ?? ledger.settings.calorieTarget,
      proteinFloor: patch.proteinFloor ?? ledger.settings.proteinFloor,
      weeklyBudget: patch.weeklyBudget ?? ledger.settings.weeklyBudget,
      activeWeek: patch.activeWeek ?? ledger.settings.activeWeek,
    };
    const { error } = await db.from("app_settings").upsert(
      {
        user_id: uid,
        challenge_slug: DEFAULT_CHALLENGE,
        calorie_target: next.calorieTarget,
        protein_floor: next.proteinFloor,
        weekly_budget: next.weeklyBudget,
        active_week: next.activeWeek,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" },
    );
    if (error) throw error;
    return json(next);
  }),
);

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("cucina-povera MCP server ready (stdio).");
