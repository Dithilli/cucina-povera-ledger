import { useEffect, useMemo, useState } from "react";
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
import type { Settings } from "../types";

interface AiDayView {
  dinner: string;
  blurb: string;
  calories: number;
  protein: number;
  cost: number;
}
import { money } from "./format";
import { renderMarkdown } from "./markdown";
import { Close } from "./icons";

/**
 * The challenge browser — reads everything live from Supabase via the data layer.
 * Challenge-agnostic: give it a challenge slug and it renders that challenge's
 * weeks, recipes, and prose. Dishes drill down into the full recipe.
 */
export function Challenge({ slug }: { slug: string }) {
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

  if (!loaded) return <div className="loading">Loading the challenge…</div>;
  if (error) return <div className="empty">Couldn’t reach the challenge: {error}</div>;

  return (
    <div className="challenge-view">
      {meta && (
        <section className="ch-intro">
          <div className="eyebrow">
            {recipes.length} dishes · {weeks.length} weeks
          </div>
          {meta.tagline && <p className="ch-tagline">{meta.tagline}</p>}
          <div className="ch-dials">
            <span>
              <b>{meta.defaultCalorieTarget.toLocaleString()}</b> kcal/day
            </span>
            <span className="dot">·</span>
            <span>
              <b>{meta.defaultProteinFloor}g</b> protein floor
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

      {docs.length > 0 && (
        <section className="ch-block">
          <h2>The writing</h2>
          <div className="doc-list">
            {docs.map((d) => (
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
}: {
  meta: ChallengeMeta;
  recipes: Recipe[];
  recipesBySlug: Map<string, Recipe>;
  onOpenRecipe: (slug: string) => void;
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

  const aiTotal = ai ? ai.days.reduce((a, d) => a + d.cost, 0) : 0;

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
}: {
  challengeSlug: string;
  week: WeekTheme;
  recipesBySlug: Map<string, Recipe>;
  onOpenRecipe: (slug: string) => void;
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
                <h4>The Sunday engine</h4>
                <ul>
                  {plan.engine.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </div>
              <div className="plan-days">
                <h4>The week · dinners</h4>
                {plan.days.map((d) => (
                  <div className="plan-day" key={d.day}>
                    <span className="pd-day">{d.day}</span>
                    <DinnerCell dinner={d.dinner} recipesBySlug={recipesBySlug} onOpen={onOpenRecipe} />
                    <span className="pd-num">
                      {d.estCalories} kcal · {d.estProtein}g
                    </span>
                  </div>
                ))}
              </div>
              {(plan.firstShopTotal != null || plan.steadyStateWeekly != null) && (
                <div className="plan-cost">
                  {plan.firstShopTotal != null && <span>First shop {money(plan.firstShopTotal)}</span>}
                  {plan.steadyStateWeekly != null && (
                    <span>Steady state {money(plan.steadyStateWeekly)}/wk</span>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </article>
  );
}

/** A dinner cell: a clickable link into the recipe when the value is a known
 *  recipe slug, otherwise plain prose (e.g. dishes not yet in the library). */
function DinnerCell({
  dinner,
  recipesBySlug,
  onOpen,
}: {
  dinner: string;
  recipesBySlug: Map<string, Recipe>;
  onOpen: (slug: string) => void;
}) {
  const recipe = recipesBySlug.get(dinner);
  if (recipe) {
    return (
      <button className="pd-dinner recipe-link" onClick={() => onOpen(recipe.slug)}>
        {recipe.title}
      </button>
    );
  }
  return <span className="pd-dinner">{dinner}</span>;
}

function RecipeModal({ recipe, onClose }: { recipe: Recipe; onClose: () => void }) {
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
            Serves {recipe.servings} · {recipe.perServing.calories} kcal · {recipe.perServing.protein}g
            {recipe.estCostPerServing != null && <> · {money(recipe.estCostPerServing)}/serving</>}
          </span>
        </div>
        <div className="recipe-body">
          <p className="recipe-blurb">{recipe.blurb}</p>
          <div className="recipe-cols">
            <div>
              <h4>Ingredients</h4>
              <ul className="ingredients">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i}>
                    <span className="ing-qty">{ing.qty}</span> {ing.item}
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
        </div>
      </div>
    </div>
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
