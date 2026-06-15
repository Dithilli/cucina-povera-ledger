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
            "An account book for cooking one good cucina povera dinner a night — calories, protein, and cost, reckoned night by night."}
        </p>
        {meta && (
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
        )}
      </section>

      <section className="ch-block">
        <h2>The idea</h2>
        <p className="about-prose">
          Cucina povera — “poor kitchen” — is the art of eating well on little:
          beans, bread, greens, the cheap cuts, nothing wasted. This is its
          ledger. Cook one cucina povera dinner a night; the app keeps the score.
        </p>
        <p className="about-prose">
          A night is <b>kept</b> when you cook the dinner and waste nothing. Keep
          enough nights in a row and a streak builds. Calories, protein, and cost
          are <i>targets to aim at</i> — logged beside each meal, never pass/fail.
          It’s less about dieting than about exploring the tradition, night after
          night, tight and cheap.
        </p>
      </section>

      <section className="ch-block">
        <h2>Two tabs</h2>
        <div className="about-steps">
          <button className="about-step" onClick={onStartLedger}>
            <span className="about-step-k">The ledger</span>
            <span className="about-step-d">
              Log each night’s dinner — dish, calories, protein, cost, zero-waste —
              and watch the streak, the weekly budget, and the cost per 100g of
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
          come from the database, not the code. Italian is just the first.
        </p>
        <button className="btn solid" onClick={onStartLedger}>
          Start the ledger →
        </button>
      </section>
    </div>
  );
}
