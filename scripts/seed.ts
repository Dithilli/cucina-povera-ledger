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

interface ChallengeMeta {
  slug: string;
  name: string;
  tagline: string;
}

// One challenge per cuisine. Each Recipe/WeekTheme/ContentDoc is routed to its
// cuisine's challenge by its `cuisine` field — so cuisines never mix.
const CHALLENGES: Record<string, ChallengeMeta> = {
  italian: {
    slug: "cucina-povera",
    name: "Cucina Povera Challenge",
    tagline: "Eat beautifully inside hard limits, wasting nothing.",
  },
  mexican: {
    slug: "cocina-del-maiz",
    name: "La Cocina del Maíz",
    tagline: "Magnificence from corn, beans, and chiles — nothing wasted.",
  },
  ethiopian: {
    slug: "beyaynetu",
    name: "Beyaynetu",
    tagline:
      "Lentils, split peas, and injera under berbere — the fasting table, a feast from almost nothing.",
  },
  greek: {
    slug: "magirefti",
    name: "Mageireftá",
    tagline:
      "Olive oil, a pot of beans, foraged greens, lemon — the fasting table of the Aegean, cheap and sun-bright.",
  },
  levantine: {
    slug: "sufra",
    name: "Sufra",
    tagline:
      "Olive oil, lentils, chickpeas, and bread — the Levantine table where a few cheap plates make a feast.",
  },
  "north-indian": {
    slug: "dal-roti",
    name: "Dāl Roṭī",
    tagline:
      "Lentils, rice, and roti under a spoon of ghee — vegetarian home cooking that feeds a family for pennies.",
  },
  "american-south": {
    slug: "soul-creole",
    name: "Soul & Creole",
    tagline:
      "Rice, beans, greens, and cornbread under a smoked-pork bone — making do, made magnificent.",
  },
  "indonesian": {
    slug: "nasi-tempe",
    name: "Nasi & Tempe",
    tagline:
      "Rice, fermented soy, and sambal — a fistful of chili and peanuts turns pennies into a vivid table.",
  },
  "west-african": {
    slug: "jollof",
    name: "Jollof & Soup",
    tagline:
      "Rice, beans, egusi, and palm oil — a communal pot and a fistful of crayfish, nothing wasted.",
  },
  "filipino": {
    slug: "lutong-bahay",
    name: "Lutong Bahay",
    tagline:
      "Rice, vinegar, and a little fish — home cooking that turned no refrigeration into flavor, wasting nothing.",
  },
  "vietnamese": {
    slug: "com-nha",
    name: "Cơm Nhà",
    tagline:
      "Rice, fish sauce, and a caramel braise — eat less meat, more rice, and waste nothing.",
  },
  "persian": {
    slug: "chelo-khoresh",
    name: "Chelo & Khoresh",
    tagline:
      "Rice, herbs, and legumes under dried lime — a little meat stretched across many bowls, the burnt crust the prize.",
  },
  "portuguese": {
    slug: "cozinha-pobre",
    name: "Cozinha Pobre",
    tagline:
      "Bread, olive oil, salt cod, and beans — the faithful friend with 365 preparations, nothing wasted.",
  },
  "korean": {
    slug: "bapsang",
    name: "Bapsang",
    tagline:
      "Rice, the jang trinity, and kimchi — a rotating cast of banchan from one fermented brick, nothing wasted.",
  },
  "andean": {
    slug: "papa-y-aji",
    name: "Papa y Ají",
    tagline:
      "Three thousand potatoes, freeze-dried chuño, quinoa, and a fistful of ají — the highland table that wastes nothing.",
  },
  "brazilian": {
    slug: "feijao-e-farinha",
    name: "Feijão e Farinha",
    tagline:
      "Rice, the daily pot of beans, toasted cassava farofa, and a refogado — the comida caseira plate that stretches and wastes nothing.",
  },
  "puerto-rican": {
    slug: "arroz-y-habichuelas",
    name: "Arroz y Habichuelas",
    tagline:
      "Sofrito, a pot of rice, the daily beans, and a shake of adobo — comida criolla that turns an island's scarcity into an abundant plate, wasting nothing.",
  },
  "senegalese": {
    slug: "ceebu-jen",
    name: "Ceebu Jën",
    tagline:
      "Broken rice, a piece of fish, and the nététou-deep nokoss — the shared bowl of teranga, where the prized crust is scraped up and nothing is wasted.",
  },
  "east-african": {
    slug: "ugali-na-sukuma",
    name: "Ugali na Sukuma",
    tagline:
      "Maize pap, a pan of greens, a coconut-deep stew, and the Swahili spice trade — bara thrift meets pwani coast, wasting nothing.",
  },
  "moroccan": {
    slug: "khobz-w-tajine",
    name: "Khobz w Tajine",
    tagline:
      "A round of bread, a slow clay pot, preserved lemon and ras el hanout — a little meat stretched by vegetables under one shared tagine, wasting nothing.",
  },
  "polish": {
    slug: "chleb-i-ziemniaki",
    name: "Chleb i Ziemniaki",
    tagline:
      "Rye bread, a sack of potatoes, a crock of soured cabbage, and a spoon of śmietana — the long-winter larder that stretches a little meat and wastes nothing.",
  },
  "irish": {
    slug: "prata-agus-aran",
    name: "Prátaí agus Arán",
    tagline:
      "A pot of floury spuds, a soda loaf, a knob of butter, and a little bacon to flavour the lot — the cottage hearth that made plenty from want, wasting nothing.",
  },
  "appalachian": {
    slug: "beans-n-cornbread",
    name: "Beans n' Cornbread",
    tagline:
      "A pot of soup beans, a skillet of cornbread, a little sidemeat to season the lot, and the garden put up for winter — mountain thrift that makes do and wastes nothing.",
  },
  "cantonese": {
    slug: "faahn-sung",
    name: "Faahn Sung",
    tagline:
      "A pot of steamed rice and the dishes that go with it — a scrap of meat for a wok of greens, a master stock kept for years, and congee for the scraps. Nothing wasted.",
  },
  "south-indian": {
    slug: "saadam-sambar",
    name: "Sāadam & Sambar",
    tagline:
      "Rice, a pot of dal, a crackle of mustard seed and curry leaf, coconut and tamarind — the banana-leaf meal that feeds a family on legumes and ferment, wasting nothing.",
  },
  "japanese": {
    slug: "ichiju-sansai",
    name: "Ichijū Sansai",
    tagline:
      "Rice, miso, and dashi — soybeans in every form and mottainai thrift, nothing wasted.",
  },
  ashkenazi: {
    slug: "schmaltz-and-onions",
    name: "Schmaltz & Onions",
    tagline:
      "The shtetl larder — potato, herring, schmaltz, and rye — bent all week toward the Shabbos table.",
  },
};

/** A doc's cuisine, defaulting to italian for legacy untagged docs. */
const docCuisine = (d: ContentDoc) => d.cuisine ?? "italian";

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
    sources: r.sources ?? [],
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
  // Content is fully derived from the fixtures, so wipe-and-reinsert keeps the DB
  // exactly in sync — and clears any rows seeded under the wrong challenge before
  // content was cuisine-scoped. (No FKs between these tables; entries reference a
  // text challenge_slug, not these rows, so they're untouched.)
  for (const table of ["content_docs", "week_themes", "recipes"] as const) {
    const { error } = await db.from(table).delete().not("id", "is", null);
    if (error) throw error;
  }

  const cuisines = [
    ...new Set([
      ...recipes.map((r) => r.cuisine),
      ...weekThemes.map((w) => w.cuisine),
      ...docs.map(docCuisine),
    ]),
  ];

  const summary: string[] = [];

  for (const cuisine of cuisines) {
    const meta = CHALLENGES[cuisine];
    if (!meta) {
      console.warn(`No challenge defined for cuisine "${cuisine}" — skipping its content.`);
      continue;
    }

    const { data: challenge, error: cErr } = await db
      .from("challenges")
      .upsert(
        {
          slug: meta.slug,
          name: meta.name,
          tagline: meta.tagline,
          default_calorie_target: DEFAULT_SETTINGS.calorieTarget,
          default_protein_floor: DEFAULT_SETTINGS.proteinFloor,
          default_weekly_budget: DEFAULT_SETTINGS.weeklyBudget,
        },
        { onConflict: "slug" },
      )
      .select("id")
      .single();
    if (cErr || !challenge) throw cErr ?? new Error(`no challenge id for ${cuisine}`);
    const id = challenge.id as string;

    const rs = recipes.filter((r) => r.cuisine === cuisine);
    const ws = weekThemes.filter((w) => w.cuisine === cuisine);
    const ds = docs.filter((d) => docCuisine(d) === cuisine);

    if (rs.length) {
      const r = await db.from("recipes").insert(rs.map((x) => recipeRow(id, x)));
      if (r.error) throw r.error;
    }
    if (ws.length) {
      const w = await db.from("week_themes").insert(ws.map((x) => weekRow(id, x)));
      if (w.error) throw w.error;
    }
    if (ds.length) {
      const dd = await db.from("content_docs").insert(ds.map((x) => docRow(id, x)));
      if (dd.error) throw dd.error;
    }

    summary.push(`${meta.slug}: ${rs.length} recipes, ${ws.length} weeks, ${ds.length} docs`);
  }

  console.log("Seeded —\n  " + summary.join("\n  "));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
