import { useEffect, useMemo, useState, type ReactNode } from "react";
import type { WeekTheme, WeekPlan, Recipe, ContentDoc } from "../content/types";
import {
  listWeeks,
  listRecipes,
  listDocs,
  getChallenge,
  getWeekPlan,
  type Challenge as ChallengeMeta,
} from "../data/content";
import { planWeek, weekCandidates, type WeekPlanResult } from "../core/planner";
import { generateWeek } from "../data/generator";
import type { Settings, PlannedDinner, PlannedWeek } from "../types";

/** Lift a dinner (slug or prose) into a PlannedDinner, preferring the real
 *  recipe's macros and falling back to the plan's per-day estimates. */
function toPlannedDinner(
  dinner: string,
  fallback: { calories: number; protein: number; cost: number },
  bySlug: Map<string, Recipe>
): PlannedDinner {
  const r = bySlug.get(dinner);
  return {
    title: r?.title ?? dinner,
    calories: r?.perServing.calories ?? fallback.calories,
    protein: r?.perServing.protein ?? fallback.protein,
    cost: r?.estCostPerServing ?? fallback.cost,
  };
}

interface AiDayView {
  dinner: string;
  blurb: string;
  calories: number;
  protein: number;
  cost: number;
}
import { money } from "./format";
import { ShoppingList } from "./components/ShoppingList";
import { buildShoppingList, shoppingListFromAuthored, extractRecipeSlugs } from "../core/shopping";
import { scaleQty } from "./scale";
import { renderMarkdown } from "./markdown";
import { Close } from "./icons";

// The diner's preferred household size, remembered across recipes — set it once
// (e.g. to 1 if you cook for yourself) and every recipe opens scaled to it.
const SERVINGS_KEY = "cucina:preferred-servings";
function readPreferredServings(fallback: number): number {
  try {
    const v = Number(localStorage.getItem(SERVINGS_KEY));
    return Number.isFinite(v) && v >= 1 ? v : fallback;
  } catch {
    return fallback;
  }
}
function writePreferredServings(n: number): void {
  try {
    localStorage.setItem(SERVINGS_KEY, String(n));
  } catch {
    /* storage unavailable — fall back to per-session state */
  }
}

/**
 * The challenge browser — reads everything live from Supabase via the data layer.
 * Challenge-agnostic: give it a challenge slug and it renders that challenge's
 * weeks, recipes, and prose. Dishes drill down into the full recipe.
 */
export function Challenge({
  slug,
  onUseWeek,
}: {
  slug: string;
  onUseWeek?: (week: PlannedWeek) => void;
}) {
  const [meta, setMeta] = useState<ChallengeMeta | null>(null);
  const [weeks, setWeeks] = useState<WeekTheme[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [docs, setDocs] = useState<ContentDoc[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    Promise.all([getChallenge(slug), listWeeks(slug), listRecipes(slug), listDocs(slug)])
      .then(([m, w, r, d]) => {
        if (!alive) return;
        setMeta(m);
        setWeeks(w);
        setRecipes(r);
        setDocs(d);
        setLoaded(true);
      })
      .catch((e) => {
        if (!alive) return;
        setError(String(e?.message ?? e));
        setLoaded(true);
      });
    return () => {
      alive = false;
    };
  }, [slug]);

  const bySlug = useMemo(() => {
    const m = new Map<string, Recipe>();
    for (const r of recipes) m.set(r.slug, r);
    return m;
  }, [recipes]);

  const openRecipe = bySlug.get(openSlug ?? "") ?? null;
  const essay = docs.find((d) => d.kind === "essay");
  const writingDocs = docs.filter((d) => d.kind !== "essay");

  if (!loaded) return <div className="loading">Loading the challenge…</div>;
  if (error) return <div className="empty">Couldn’t reach the challenge: {error}</div>;

  return (
    <div className="challenge-view">
      {essay && <FeaturedEssay doc={essay} />}
      {meta && (
        <section className="ch-intro">
          <div className="eyebrow">
            {recipes.length} dishes · {weeks.length} weeks
          </div>
          {meta.tagline && <p className="ch-tagline">{meta.tagline}</p>}
          <div className="ch-dials">
            <span>
              <b>{meta.defaultCalorieTarget.toLocaleString()}</b> kcal/meal
            </span>
            <span className="dot">·</span>
            <span>
              <b>{meta.defaultProteinFloor}g</b> protein/meal
            </span>
            <span className="dot">·</span>
            <span>
              <b>{money(meta.defaultWeeklyBudget)}</b>/week
            </span>
          </div>
        </section>
      )}

      {meta && (
        <GenerateWeek
          meta={meta}
          recipes={recipes}
          recipesBySlug={bySlug}
          onOpenRecipe={setOpenSlug}
          onUseWeek={onUseWeek}
        />
      )}

      <section className="ch-block">
        <h2>The themed weeks</h2>
        <div className="week-cards">
          {weeks.map((w) => (
            <WeekCard
              key={w.slug}
              challengeSlug={slug}
              week={w}
              recipesBySlug={bySlug}
              onOpenRecipe={setOpenSlug}
              onUseWeek={onUseWeek}
            />
          ))}
        </div>
      </section>

      <section className="ch-block">
        <h2>The dishes</h2>
        <div className="recipe-list">
          {recipes.map((r) => (
            <button key={r.slug} className="recipe-row" onClick={() => setOpenSlug(r.slug)}>
              <span className="recipe-title">{r.title}</span>
              <span className="recipe-macros">
                {r.perServing.calories} kcal · {r.perServing.protein}g
                {r.estCostPerServing != null && <> · {money(r.estCostPerServing)}/serving</>}
              </span>
            </button>
          ))}
        </div>
      </section>

      {writingDocs.length > 0 && (
        <section className="ch-block">
          <h2>The writing</h2>
          <div className="doc-list">
            {writingDocs.map((d) => (
              <DocItem key={d.slug} doc={d} />
            ))}
          </div>
        </section>
      )}

      {openRecipe && <RecipeModal recipe={openRecipe} onClose={() => setOpenSlug(null)} />}
    </div>
  );
}

function GenerateWeek({
  meta,
  recipes,
  recipesBySlug,
  onOpenRecipe,
  onUseWeek,
}: {
  meta: ChallengeMeta;
  recipes: Recipe[];
  recipesBySlug: Map<string, Recipe>;
  onOpenRecipe: (slug: string) => void;
  onUseWeek?: (week: PlannedWeek) => void;
}) {
  const [result, setResult] = useState<WeekPlanResult | null>(null);
  const [ai, setAi] = useState<{ intro: string; days: AiDayView[] } | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const settings: Settings = {
    calorieTarget: meta.defaultCalorieTarget,
    proteinFloor: meta.defaultProteinFloor,
    weeklyBudget: meta.defaultWeeklyBudget,
    activeWeek: "generated",
  };

  const generate = () => {
    setAi(null);
    setAiError(null);
    setResult(planWeek(recipes, settings));
  };

  const aiGenerate = () => {
    setResult(null);
    setAiError(null);
    const res = weekCandidates(recipes, settings);
    if (!res.ok) {
      setAiError(res.reason ?? "no candidates");
      return;
    }
    const payload = res.candidates.map((c) => {
      const r = recipesBySlug.get(c.dinner);
      return {
        dinner: c.dinner,
        dinnerTitle: r?.title ?? c.dinner,
        calories: c.calories,
        protein: c.protein,
        cost: c.cost,
        tags: r?.tags ?? [],
      };
    });
    setAiLoading(true);
    setAi(null);
    generateWeek(payload, {
      calorieTarget: settings.calorieTarget,
      proteinFloor: settings.proteinFloor,
      weeklyBudget: settings.weeklyBudget,
    })
      .then((week) => {
        // Re-certify: keep only days whose dinner is a real, distinct candidate.
        const cand = new Map(res.candidates.map((c) => [c.dinner, c]));
        const seen = new Set<string>();
        const days: AiDayView[] = [];
        for (const d of week.days) {
          const c = cand.get(d.dinner);
          if (!c || seen.has(d.dinner)) continue;
          seen.add(d.dinner);
          days.push({ dinner: d.dinner, blurb: d.blurb, calories: c.calories, protein: c.protein, cost: c.cost });
        }
        setAi({ intro: week.intro, days });
      })
      .catch((e) => setAiError(String(e?.message ?? e)))
      .finally(() => setAiLoading(false));
  };

  // Round the accumulated total to cents, matching planner.totalCost — bare
  // float summation can drift a fraction of a cent before money() formats it.
  const aiTotal = ai ? Math.round(ai.days.reduce((a, d) => a + d.cost, 0) * 100) / 100 : 0;

  return (
    <section className="ch-block">
      <div className="gen-head">
        <h2>Generate a week</h2>
        <div className="gen-btns">
          <button className="btn ghost" onClick={generate}>
            {result ? "Regenerate" : "Deterministic"}
          </button>
          <button className="btn solid" onClick={aiGenerate} disabled={aiLoading}>
            {aiLoading ? "Composing…" : "✦ AI: make it tastier"}
          </button>
        </div>
      </div>
      <p className="gen-note">
        The deterministic planner assembles 7 non-repeating days from the {recipes.length}-recipe
        library, each certified by the same engine that scores your ledger. The AI option lets Claude
        pick the tastiest, most varied passing week from those same vetted dishes — it never invents a
        number.
      </p>

      {aiError && <div className="plan-empty">Couldn’t generate: {aiError}</div>}

      {result && !result.ok && (
        <div className="plan-empty">Couldn’t build a week: {result.reason}</div>
      )}

      {result && result.ok && (
        <div className="gen-result">
          <div className="plan-days">
            {result.days.map((d) => (
              <div className="plan-day" key={d.day}>
                <span className="pd-day">{d.day}</span>
                <DinnerCell dinner={d.dinner} recipesBySlug={recipesBySlug} onOpen={onOpenRecipe} />
                <span className="pd-num">
                  {d.calories} kcal · {d.protein}g · {money(d.cost)}
                </span>
              </div>
            ))}
          </div>
          <div className="plan-cost">
            <span>
              Week total {money(result.totalCost)} · budget {money(meta.defaultWeeklyBudget)}
            </span>
            {onUseWeek && (
              <button
                className="btn solid use-week"
                onClick={() =>
                  onUseWeek({
                    label: `${meta.name} · generated week`,
                    dinners: result.days.map((d) =>
                      toPlannedDinner(d.dinner, d, recipesBySlug)
                    ),
                  })
                }
              >
                Cook this week →
              </button>
            )}
          </div>
          <div className="plan-shopping">
            <h4>Shopping list</h4>
            <ShoppingList
              list={buildShoppingList(dinnerRecipes(result.days, recipesBySlug))}
              title={`${meta.name} · generated week`}
            />
          </div>
        </div>
      )}

      {ai && (
        <div className="gen-result">
          <p className="ai-intro">{ai.intro}</p>
          <div className="plan-days">
            {ai.days.map((d, i) => (
              <div className="plan-day ai" key={d.dinner}>
                <span className="pd-day">{i + 1}</span>
                <span className="ai-day-main">
                  <DinnerCell dinner={d.dinner} recipesBySlug={recipesBySlug} onOpen={onOpenRecipe} />
                  <span className="ai-blurb">{d.blurb}</span>
                </span>
                <span className="pd-num">
                  {d.calories} kcal · {d.protein}g · {money(d.cost)}
                </span>
              </div>
            ))}
          </div>
          <div className="plan-cost">
            <span>
              Week total {money(aiTotal)} · budget {money(meta.defaultWeeklyBudget)} · composed by Claude
            </span>
            {onUseWeek && (
              <button
                className="btn solid use-week"
                onClick={() =>
                  onUseWeek({
                    label: `${meta.name} · AI week`,
                    dinners: ai.days.map((d) =>
                      toPlannedDinner(d.dinner, d, recipesBySlug)
                    ),
                  })
                }
              >
                Cook this week →
              </button>
            )}
          </div>
          <div className="plan-shopping">
            <h4>Shopping list</h4>
            <ShoppingList
              list={buildShoppingList(dinnerRecipes(ai.days, recipesBySlug))}
              title={`${meta.name} · AI week`}
            />
          </div>
        </div>
      )}
    </section>
  );
}

function WeekCard({
  challengeSlug,
  week,
  recipesBySlug,
  onOpenRecipe,
  onUseWeek,
}: {
  challengeSlug: string;
  week: WeekTheme;
  recipesBySlug: Map<string, Recipe>;
  onOpenRecipe: (slug: string) => void;
  onUseWeek?: (week: PlannedWeek) => void;
}) {
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState<WeekPlan | null>(null);
  const [planLoaded, setPlanLoaded] = useState(false);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (next && !planLoaded) {
      getWeekPlan(challengeSlug, week.slug)
        .then((p) => {
          setPlan(p);
          setPlanLoaded(true);
        })
        .catch(() => setPlanLoaded(true));
    }
  };

  return (
    <article className={`week-card ${open ? "open" : ""}`}>
      <div
        className="week-card-summary"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
      >
        <div className="week-card-head">
          <span className="week-num">{week.number}</span>
          <span className="week-card-title">
            {week.title}
            {week.bonus && <span className="badge">bonus</span>}
          </span>
          <svg
            className="week-chevron"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        {week.context && <p className="week-context">{week.context}</p>}
        <p className="week-desc">{week.description}</p>
        {week.dishes.length > 0 && (
          <ul className="dishes">
            {week.dishes.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )}
        <div className="week-foot">
          {week.proteinNote && (
            <span className="thread">
              <i>Protein:</i> {week.proteinNote}
            </span>
          )}
          <span className="thread">
            <i>Precious thread:</i> {week.preciousThread}
          </span>
        </div>
      </div>

      {open && (
        <div className="week-plan">
          {!planLoaded && <div className="loading sm">Loading plan…</div>}
          {planLoaded && !plan && (
            <div className="plan-empty">
              No full plan yet — this week is a theme the generator will build out.
            </div>
          )}
          {plan && (
            <>
              <div className="plan-engine">
                <h4>Cook ahead — the Sunday engine</h4>
                <p className="engine-lead">
                  Batch-cook these once at the start of the week — the foundation every dinner that
                  follows is built on. Nothing is wasted.
                </p>
                <ul>
                  {plan.engine.map((e, i) => (
                    <li key={i}>{linkifyDishes(e, recipesBySlug, onOpenRecipe)}</li>
                  ))}
                </ul>
              </div>
              <div className="plan-days">
                <h4>The week · dinners</h4>
                {plan.days.map((d) => {
                  // Show the same macros "Cook this week" logs: a slug-backed
                  // dinner resolves to its recipe's perServing, otherwise the
                  // day's authored estimate. Keeps the week table and the ledger
                  // from disagreeing (e.g. Italian bare-slug days).
                  const m = toPlannedDinner(
                    d.dinner,
                    { calories: d.estCalories, protein: d.estProtein, cost: 0 },
                    recipesBySlug
                  );
                  return (
                    <div className="plan-day" key={d.day}>
                      <span className="pd-day">{d.day}</span>
                      <DinnerCell dinner={d.dinner} recipesBySlug={recipesBySlug} onOpen={onOpenRecipe} />
                      <span className="pd-num">
                        {m.calories} kcal · {m.protein}g
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="plan-cost">
                {plan.firstShopTotal != null && <span>First shop {money(plan.firstShopTotal)}</span>}
                {plan.steadyStateWeekly != null && (
                  <span>Steady state {money(plan.steadyStateWeekly)}/wk</span>
                )}
                {onUseWeek && (
                  <button
                    className="btn solid use-week"
                    onClick={() => {
                      // Free-text dinners have no recipe to price, so fall back to
                      // an even share of the week's steady-state spend instead of $0
                      // — otherwise the logged cost is zero for ~93% of weeks.
                      const fallbackCost =
                        plan.steadyStateWeekly != null
                          ? Math.round((plan.steadyStateWeekly / plan.days.length) * 100) / 100
                          : 0;
                      onUseWeek({
                        label: week.title,
                        dinners: plan.days.map((d) =>
                          toPlannedDinner(
                            d.dinner,
                            { calories: d.estCalories, protein: d.estProtein, cost: fallbackCost },
                            recipesBySlug
                          )
                        ),
                      });
                    }}
                  >
                    Cook this week →
                  </button>
                )}
              </div>
              <WeekShopping plan={plan} recipesBySlug={recipesBySlug} title={week.title} />
            </>
          )}
        </div>
      )}
    </article>
  );
}

/** Collect the distinct library recipes referenced across a set of dinners
 *  (each `dinner` may be a bare slug or prose with several embedded slugs). */
function dinnerRecipes(
  days: ReadonlyArray<{ dinner: string }>,
  recipesBySlug: Map<string, Recipe>
): Recipe[] {
  const slugKeys = Array.from(recipesBySlug.keys());
  const out: Recipe[] = [];
  const seen = new Set<string>();
  for (const d of days) {
    for (const slug of extractRecipeSlugs(d.dinner, slugKeys)) {
      if (seen.has(slug)) continue;
      const r = recipesBySlug.get(slug);
      if (r) {
        seen.add(slug);
        out.push(r);
      }
    }
  }
  return out;
}

/** The shopping list for a built-out curated week: the hand-authored list by
 *  default, with a toggle to generate one from the week's actual dinners. */
function WeekShopping({
  plan,
  recipesBySlug,
  title,
}: {
  plan: WeekPlan;
  recipesBySlug: Map<string, Recipe>;
  title: string;
}) {
  const generated = useMemo(
    () => buildShoppingList(dinnerRecipes(plan.days, recipesBySlug)),
    [plan, recipesBySlug]
  );
  const authored = useMemo(
    () => (plan.shopping && plan.shopping.length > 0 ? shoppingListFromAuthored(plan.shopping) : null),
    [plan]
  );
  const hasGenerated = generated.lines.length > 0;
  const [mode, setMode] = useState<"authored" | "generated">(authored ? "authored" : "generated");

  if (!authored && !hasGenerated) return null;
  const list = mode === "authored" && authored ? authored : generated;

  return (
    <div className="plan-shopping">
      <div className="shop-title-row">
        <h4>Shopping list</h4>
        {authored && hasGenerated && (
          <div className="shop-toggle" role="group" aria-label="Shopping list source">
            <button
              type="button"
              className={mode === "authored" ? "on" : ""}
              onClick={() => setMode("authored")}
            >
              Curated
            </button>
            <button
              type="button"
              className={mode === "generated" ? "on" : ""}
              onClick={() => setMode("generated")}
            >
              From these dinners
            </button>
          </div>
        )}
      </div>
      <ShoppingList list={list} title={title} />
    </div>
  );
}

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Turn a prose line ("zuppa-di-legumi with pecorino + fettunta") into mixed
 *  text + links by replacing every embedded recipe slug with a clickable link to
 *  that recipe (shown by its title). Slugs are matched whole-word, longest first,
 *  so multi-word slugs win over any shorter slug they contain. Plain text when
 *  the line names no known dish. */
function linkifyDishes(
  text: string,
  recipesBySlug: Map<string, Recipe>,
  onOpen: (slug: string) => void
): ReactNode {
  const slugs = Array.from(recipesBySlug.keys()).sort((a, b) => b.length - a.length);
  if (slugs.length === 0) return text;
  const re = new RegExp(`\\b(?:${slugs.map(escapeRegExp).join("|")})\\b`, "g");
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (let m = re.exec(text); m !== null; m = re.exec(text)) {
    const r = recipesBySlug.get(m[0]);
    if (!r) continue;
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      <button key={key++} type="button" className="recipe-link" onClick={() => onOpen(r.slug)}>
        {r.title}
      </button>
    );
    last = m.index + m[0].length;
  }
  if (out.length === 0) return text;
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/** A dinner cell: prose with every named library dish rendered as a link. */
function DinnerCell({
  dinner,
  recipesBySlug,
  onOpen,
}: {
  dinner: string;
  recipesBySlug: Map<string, Recipe>;
  onOpen: (slug: string) => void;
}) {
  return <span className="pd-dinner">{linkifyDishes(dinner, recipesBySlug, onOpen)}</span>;
}

function RecipeModal({ recipe, onClose }: { recipe: Recipe; onClose: () => void }) {
  const [servings, setServings] = useState(() => readPreferredServings(recipe.servings));
  const factor = servings / recipe.servings;

  const changeServings = (n: number) => {
    const v = Math.max(1, Math.min(99, n));
    setServings(v);
    writePreferredServings(v);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <Close size={16} />
        </button>
        <div className="modal-head">
          <h3>{recipe.title}</h3>
          <span className="recipe-macros">
            {recipe.perServing.calories} kcal · {recipe.perServing.protein}g per serving
            {recipe.estCostPerServing != null && (
              <> · {money(recipe.estCostPerServing * servings)} for {servings}</>
            )}
          </span>
          <div className="serving-stepper" role="group" aria-label="Servings">
            <span className="ss-label">Serves</span>
            <button
              type="button"
              className="ss-btn"
              onClick={() => changeServings(servings - 1)}
              disabled={servings <= 1}
              aria-label="Fewer servings"
            >
              −
            </button>
            <span className="ss-count" aria-live="polite">
              {servings}
            </span>
            <button
              type="button"
              className="ss-btn"
              onClick={() => changeServings(servings + 1)}
              aria-label="More servings"
            >
              +
            </button>
          </div>
        </div>
        <div className="recipe-body">
          <p className="recipe-blurb">{recipe.blurb}</p>
          <div className="recipe-cols">
            <div>
              <h4>Ingredients</h4>
              <ul className="ingredients">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i}>
                    <span className="ing-qty">{scaleQty(ing.qty, factor)}</span> {ing.item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Method</h4>
              <ol className="method">
                {recipe.method.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ol>
            </div>
          </div>
          {recipe.modernMove && (
            <p className="modern-move">
              <i>The modern move —</i> {recipe.modernMove}
            </p>
          )}
          {recipe.notes && (
            <p className="modern-move">
              <i>Notes —</i> {recipe.notes}
            </p>
          )}
          {recipe.sources && recipe.sources.length > 0 && (
            <div className="recipe-sources">
              <h4>Sources</h4>
              <ul>
                {recipe.sources.map((s, i) => (
                  <li key={i}>
                    {s.url ? (
                      <a href={s.url} target="_blank" rel="noopener noreferrer">
                        {s.title}
                      </a>
                    ) : (
                      s.title
                    )}
                    {s.note && <span className="src-note"> — {s.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FeaturedEssay({ doc }: { doc: ContentDoc }) {
  const [open, setOpen] = useState(false);
  return (
    <section className={`ch-essay ${open ? "open" : ""}`}>
      <button className="ch-essay-head" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span className="eyebrow">The cuisine · essay</span>
        <span className="ch-essay-title">{doc.title}</span>
        <span className="ch-essay-toggle">{open ? "Hide ▴" : "Read the essay ▾"}</span>
      </button>
      {open && (
        <div
          className="doc-body markdown ch-essay-body"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(doc.body) }}
        />
      )}
    </section>
  );
}

function DocItem({ doc }: { doc: ContentDoc }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`doc-item ${open ? "open" : ""}`}>
      <button className="doc-head" onClick={() => setOpen((v) => !v)}>
        <span className="doc-title">{doc.title}</span>
        <span className="doc-kind">{doc.kind}</span>
      </button>
      {open && (
        <div
          className="doc-body markdown"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(doc.body) }}
        />
      )}
    </article>
  );
}
