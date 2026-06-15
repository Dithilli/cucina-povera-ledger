import { useEffect, useState } from "react";
import { getChallenge, type Challenge as ChallengeMeta } from "../data/content";
import { money } from "./format";

/**
 * The landing page — what this is, before the numbers. Reads the active
 * challenge's tagline and dials from the DB (challenge-agnostic), and hands the
 * two CTAs back up so they switch tabs. Pure prose otherwise.
 */
export function About({
  slug,
  onStartLedger,
  onBrowseChallenge,
}: {
  slug: string;
  onStartLedger: () => void;
  onBrowseChallenge: () => void;
}) {
  const [meta, setMeta] = useState<ChallengeMeta | null>(null);

  useEffect(() => {
    let alive = true;
    getChallenge(slug)
      .then((m) => alive && setMeta(m))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [slug]);

  return (
    <div className="about-view">
      <section className="ch-intro">
        <div className="eyebrow">What this is</div>
        <p className="ch-tagline">
          {meta?.tagline ??
            "An account book for cooking well on almost nothing — calories, protein, and cost, reckoned day by day."}
        </p>
        {meta && (
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
        )}
      </section>

      <section className="ch-block">
        <h2>The idea</h2>
        <p className="about-prose">
          Cucina povera — “poor kitchen” — is the art of eating well on little:
          beans, bread, greens, the cheap cuts, nothing wasted. This is its
          ledger. You log what you cook each day; the app keeps the score.
        </p>
        <p className="about-prose">
          A day is <b>kept</b> when it lands at or under the calorie target,
          meets the protein floor, and wastes nothing. Keep enough days in a row
          and a streak builds. The real test isn’t the cheapest day — it’s the
          cheapest <i>gram of protein</i>.
        </p>
      </section>

      <section className="ch-block">
        <h2>Two tabs</h2>
        <div className="about-steps">
          <button className="about-step" onClick={onStartLedger}>
            <span className="about-step-k">The ledger</span>
            <span className="about-step-d">
              Enter each day — dish, calories, protein, cost, zero-waste — and
              watch the streak, the weekly budget, and the cost per 100g of
              protein settle. Sign in to save it to the cloud, or keep it local.
            </span>
            <span className="about-step-go">Open the ledger →</span>
          </button>
          <button className="about-step" onClick={onBrowseChallenge}>
            <span className="about-step-k">The challenge</span>
            <span className="about-step-d">
              Browse the themed weeks, the recipe library, and the writing — then
              let the planner assemble a passing week, or ask Claude to compose
              the tastiest one from the same vetted dishes.
            </span>
            <span className="about-step-go">Browse the challenge →</span>
          </button>
        </div>
      </section>

      <section className="ch-block about-final">
        <p className="about-prose">
          Everything here is challenge-agnostic — the weeks, recipes, and targets
          come from the database, not the code. Cucina povera is just the first.
        </p>
        <button className="btn solid" onClick={onStartLedger}>
          Start the ledger →
        </button>
      </section>
    </div>
  );
}
