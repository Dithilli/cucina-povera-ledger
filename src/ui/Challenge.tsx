import { useEffect, useState } from "react";
import type { WeekTheme, WeekPlan, Recipe, ContentDoc } from "../content/types";
import {
  listWeeks,
  listRecipes,
  listDocs,
  getChallenge,
  getWeekPlan,
  type Challenge as ChallengeMeta,
} from "../data/content";
import { money } from "./format";

/**
 * The challenge browser — reads everything live from Supabase via the data layer.
 * Challenge-agnostic: give it a challenge slug and it renders that challenge's
 * weeks, recipes, and prose.
 */
export function Challenge({ slug }: { slug: string }) {
  const [meta, setMeta] = useState<ChallengeMeta | null>(null);
  const [weeks, setWeeks] = useState<WeekTheme[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [docs, setDocs] = useState<ContentDoc[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  if (!loaded) return <div className="loading">Loading the challenge…</div>;
  if (error)
    return (
      <div className="empty">
        Couldn’t reach the challenge: {error}
      </div>
    );

  return (
    <div className="challenge-view">
      {meta && (
        <section className="ch-intro">
          <div className="eyebrow">{recipes.length} dishes · {weeks.length} weeks</div>
          {meta.tagline && <p className="ch-tagline">{meta.tagline}</p>}
          <div className="ch-dials">
            <span><b>{meta.defaultCalorieTarget.toLocaleString()}</b> kcal/day</span>
            <span className="dot">·</span>
            <span><b>{meta.defaultProteinFloor}g</b> protein floor</span>
            <span className="dot">·</span>
            <span><b>{money(meta.defaultWeeklyBudget)}</b>/week</span>
          </div>
        </section>
      )}

      <section className="ch-block">
        <h2>The themed weeks</h2>
        <div className="week-cards">
          {weeks.map((w) => (
            <WeekCard key={w.slug} challengeSlug={slug} week={w} />
          ))}
        </div>
      </section>

      <section className="ch-block">
        <h2>The dishes</h2>
        <div className="recipe-list">
          {recipes.map((r) => (
            <RecipeItem key={r.slug} recipe={r} />
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
    </div>
  );
}

function WeekCard({ challengeSlug, week }: { challengeSlug: string; week: WeekTheme }) {
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
      <button className="week-card-head" onClick={toggle}>
        <span className="week-num">{week.number}</span>
        <span className="week-card-title">
          {week.title}
          {week.bonus && <span className="badge">bonus</span>}
        </span>
      </button>
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
                <h4>The week</h4>
                {plan.days.map((d) => (
                  <div className="plan-day" key={d.day}>
                    <span className="pd-day">{d.day}</span>
                    <span className="pd-dinner">{d.dinner}</span>
                    <span className="pd-num">
                      {d.estCalories} kcal · {d.estProtein}g
                    </span>
                  </div>
                ))}
              </div>
              {(plan.firstShopTotal != null || plan.steadyStateWeekly != null) && (
                <div className="plan-cost">
                  {plan.firstShopTotal != null && (
                    <span>First shop {money(plan.firstShopTotal)}</span>
                  )}
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

function RecipeItem({ recipe }: { recipe: Recipe }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`recipe-item ${open ? "open" : ""}`}>
      <button className="recipe-head" onClick={() => setOpen((v) => !v)}>
        <span className="recipe-title">{recipe.title}</span>
        <span className="recipe-macros">
          {recipe.perServing.calories} kcal · {recipe.perServing.protein}g
          {recipe.estCostPerServing != null && (
            <> · {money(recipe.estCostPerServing)}/serving</>
          )}
        </span>
      </button>
      {open && (
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
        </div>
      )}
    </article>
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
      {open && <div className="doc-body">{doc.body}</div>}
    </article>
  );
}
