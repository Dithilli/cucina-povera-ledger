// Challenge-agnostic content reads. The ONLY place the app talks to the content
// tables. Maps snake_case DB rows back to the camelCase domain types in
// src/content/types.ts, so the UI doesn't care that data now comes from Supabase
// instead of a hardcoded import. Keep this thin — no ORM, just supabase-js.

import { supabase } from "../lib/supabase";
import type { Database } from "../lib/database.types";
import type {
  Recipe,
  RecipeSource,
  WeekTheme,
  WeekPlan,
  ContentDoc,
  IngredientLine,
  DishRole,
  WeekDay,
  ShoppingItem,
} from "../content/types";

type Tables = Database["public"]["Tables"];
type ChallengeRow = Tables["challenges"]["Row"];
type RecipeRow = Tables["recipes"]["Row"];
type WeekRow = Tables["week_themes"]["Row"];
type DocRow = Tables["content_docs"]["Row"];

/** A challenge: the top-level container. The app is generic over these. */
export interface Challenge {
  slug: string;
  name: string;
  tagline?: string;
  defaultCalorieTarget: number;
  defaultProteinFloor: number;
  defaultWeeklyBudget: number;
}

// --- row → domain mappers -------------------------------------------------------

function toChallenge(r: ChallengeRow): Challenge {
  return {
    slug: r.slug,
    name: r.name,
    tagline: r.tagline ?? undefined,
    defaultCalorieTarget: r.default_calorie_target,
    defaultProteinFloor: r.default_protein_floor,
    defaultWeeklyBudget: Number(r.default_weekly_budget),
  };
}

function toRecipe(r: RecipeRow): Recipe {
  return {
    slug: r.slug,
    title: r.title,
    cuisine: r.cuisine,
    blurb: r.blurb,
    servings: r.servings,
    perServing: { calories: r.per_serving_calories, protein: r.per_serving_protein },
    estCostPerServing:
      r.est_cost_per_serving == null ? undefined : Number(r.est_cost_per_serving),
    roles: (r.roles ?? []) as DishRole[],
    ingredients: (r.ingredients ?? []) as unknown as IngredientLine[],
    method: r.method ?? [],
    modernMove: r.modern_move ?? undefined,
    notes: r.notes ?? undefined,
    zeroWasteHero: r.zero_waste_hero,
    tags: r.tags ?? [],
    sources: (r.sources ?? []) as unknown as RecipeSource[],
  };
}

function toWeekTheme(r: WeekRow): WeekTheme {
  return {
    slug: r.slug,
    number: r.number,
    cuisine: r.cuisine,
    theme: r.theme,
    title: r.title,
    description: r.description,
    context: r.context ?? undefined,
    dishes: r.dishes ?? [],
    proteinNote: r.protein_note ?? undefined,
    preciousThread: r.precious_thread,
    bonus: r.bonus,
  };
}

/** A week row is a full plan only when its `days` column is populated. */
function toWeekPlan(r: WeekRow): WeekPlan | null {
  if (r.days == null) return null;
  return {
    ...toWeekTheme(r),
    engine: (r.engine ?? []) as string[],
    days: r.days as unknown as WeekDay[],
    shopping: (r.shopping ?? []) as unknown as ShoppingItem[],
    firstShopTotal: r.first_shop_total == null ? undefined : Number(r.first_shop_total),
    steadyStateWeekly:
      r.steady_state_weekly == null ? undefined : Number(r.steady_state_weekly),
  };
}

function toDoc(r: DocRow): ContentDoc {
  return {
    slug: r.slug,
    title: r.title,
    kind: r.kind as ContentDoc["kind"],
    body: r.body,
  };
}

// --- reads ----------------------------------------------------------------------

export async function listChallenges(): Promise<Challenge[]> {
  const { data, error } = await supabase
    .from("challenges")
    .select("*")
    .order("created_at");
  if (error) throw error;
  return (data ?? []).map(toChallenge);
}

export async function getChallenge(slug: string): Promise<Challenge | null> {
  const { data, error } = await supabase
    .from("challenges")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw error;
  return data ? toChallenge(data) : null;
}

export async function listWeeks(challengeSlug: string): Promise<WeekTheme[]> {
  const { data, error } = await supabase
    .from("week_themes")
    .select("*, challenges!inner(slug)")
    .eq("challenges.slug", challengeSlug)
    .order("number");
  if (error) throw error;
  return (data ?? []).map((r) => toWeekTheme(r as unknown as WeekRow));
}

export async function getWeek(
  challengeSlug: string,
  weekSlug: string,
): Promise<WeekTheme | null> {
  const { data, error } = await supabase
    .from("week_themes")
    .select("*, challenges!inner(slug)")
    .eq("challenges.slug", challengeSlug)
    .eq("slug", weekSlug)
    .maybeSingle();
  if (error) throw error;
  return data ? toWeekTheme(data as unknown as WeekRow) : null;
}

/** The full executable plan for a week, or null if it's still theme-only. */
export async function getWeekPlan(
  challengeSlug: string,
  weekSlug: string,
): Promise<WeekPlan | null> {
  const { data, error } = await supabase
    .from("week_themes")
    .select("*, challenges!inner(slug)")
    .eq("challenges.slug", challengeSlug)
    .eq("slug", weekSlug)
    .maybeSingle();
  if (error) throw error;
  return data ? toWeekPlan(data as unknown as WeekRow) : null;
}

export async function listRecipes(challengeSlug: string): Promise<Recipe[]> {
  const { data, error } = await supabase
    .from("recipes")
    .select("*, challenges!inner(slug)")
    .eq("challenges.slug", challengeSlug)
    .order("title");
  if (error) throw error;
  return (data ?? []).map((r) => toRecipe(r as unknown as RecipeRow));
}

export async function getRecipe(
  challengeSlug: string,
  recipeSlug: string,
): Promise<Recipe | null> {
  const { data, error } = await supabase
    .from("recipes")
    .select("*, challenges!inner(slug)")
    .eq("challenges.slug", challengeSlug)
    .eq("slug", recipeSlug)
    .maybeSingle();
  if (error) throw error;
  return data ? toRecipe(data as unknown as RecipeRow) : null;
}

export async function listDocs(challengeSlug: string): Promise<ContentDoc[]> {
  const { data, error } = await supabase
    .from("content_docs")
    .select("*, challenges!inner(slug)")
    .eq("challenges.slug", challengeSlug)
    .order("slug");
  if (error) throw error;
  return (data ?? []).map((r) => toDoc(r as unknown as DocRow));
}

export async function getDoc(
  challengeSlug: string,
  docSlug: string,
): Promise<ContentDoc | null> {
  const { data, error } = await supabase
    .from("content_docs")
    .select("*, challenges!inner(slug)")
    .eq("challenges.slug", challengeSlug)
    .eq("slug", docSlug)
    .maybeSingle();
  if (error) throw error;
  return data ? toDoc(data as unknown as DocRow) : null;
}
