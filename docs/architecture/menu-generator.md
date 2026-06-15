# AI Menu Generator (hybrid) — Architecture

> Pillar: **AI menu generator (hybrid).** Status: design, buildable v1.
> Hard constraints honored: `src/core/ledger.ts` stays PURE and is reused (not forked) as the scoring oracle; the `Ledger`/`Entry` shape is canonical; runtime client deps stay `react`+`react-dom`; the LLM never authors a cost or macro number.

## Recommendation (one paragraph)

Treat weekly-menu generation as a **deterministic constraint-satisfaction search over the curated `Recipe[]` library, with the existing pure ledger engine as the feasibility oracle**, and use Claude **only as a downstream stylist** for sequencing, flavor variety, and prose — never as a source of any number and never as the feasibility judge. A new pure module `src/core/planner.ts` (sibling to `ledger.ts`, same no-I/O discipline) runs a branch-and-bound/beam search that assembles candidate weeks from real library dishes, projects each day into an `Entry`-shaped object, and certifies it with the **unforked, imported** `dayPasses()` + `summarize()`. The solver emits a small set of feasible week skeletons; Claude picks/orders among them and writes the blurbs through a strict `output_config.format` schema whose dish fields are an **enum of real library slugs** — so a hallucinated calorie count has no field to live in. A bounded LLM repair loop (grafted from the generate-validate-repair lens) exists only as a fallback for the rare case where the solver's top skeletons are all culinarily poor; the server **re-certifies** every returned week through `core` before responding. This makes the feature buildable today (we have 9 vetted pasta recipes), testable (Vitest over the pure planner), cheap (the LLM does taste, not arithmetic), and structurally incapable of shipping a week that silently breaks the challenge — which is the entire point of the app.

## Why this spine, and what's grafted

Three lenses were proposed. We take **Lens 3 (solver owns correctness, LLM owns taste)** as the spine and graft the strongest parts of the other two:

- **Spine — deterministic solver (Lens 3).** The product's moat is `dayPasses`: the single definition of a "kept" day. If the LLM can't author numbers (everyone agrees on this), then it also shouldn't *decide feasibility*, because "which 7 dishes satisfy calorie-ceiling AND protein-floor AND weekly-budget AND no-repeat AND zero-waste" is a small combinatorial search where branch-and-bound is strictly better than an LLM: it backtracks reliably, it can *prove* infeasibility, and it runs in milliseconds with the exact code that scores hand-logged days. With a finite vetted catalog (hundreds of dishes at most), this is tractable and deterministic.

- **Graft 1 — grounding by omission of the lying surface (Lens 2).** The LLM's structured-output schema references **library slugs only**; there is no `calories`/`cost`/`protein` field anywhere in its contract. Built with a `z.enum(librarySlugs)`, an invented slug fails validation at parse time. This is belt-and-suspenders on top of the solver: even the *stylist* step cannot smuggle in an off-menu dish, and the server re-runs the scorer on whatever the LLM returns.

- **Graft 2 — bounded repair loop as a fallback, not the primary path (Lens 1).** Lens 1's generate→validate→repair loop is the right shape when the solver legitimately can't find a *good-tasting* feasible week (feasible-but-monotonous: chickpeas five nights). We keep it as an explicit, capped (≤3 round) fallback that re-opens only failing/weak days, feeds **structured per-day + week-level failure facts** back to Claude, and pins passing days — but it is gated behind the solver, never the entry point. Lens 1's other disciplines (prompt-cache the serialized library, check `stop_reason` before reading output, graceful "6/7 days" degradation) are adopted wholesale.

- **Also from Lens 2 — provenance + drift-check.** Macros/cost in the library carry source metadata and are recomputed from an ingredient table by a vetting CLI, so "is this number real?" is always answerable. v1 ships this thin; the hooks are designed in now.

The one thing we explicitly **reject** from all three: letting the LLM "just plan the week" when the library is sparse. That re-introduces invented numbers. When the solver finds nothing, we report the **binding constraint** ("protein floor unreachable under $55 with this catalog") — a feature, not a failure.

## Architecture

```
            ┌──────────────────────────────────────────────────────────────┐
            │  POST /api/menu/generate   (serverless fn — the ONLY I/O)     │
            │                                                               │
 request →  │  load library (Recipe[])                                      │
  {Settings,│        │                                                      │
   cuisine, │        ▼                                                      │
   prefs}   │  preflightFeasible(library, settings)  ── infeasible ──┐      │
            │        │ feasible                                       │     │
            │        ▼                                                ▼     │
            │  planWeek(library, settings, prefs)            { binding     │
            │   = branch-and-bound + beam search              constraint } │
            │   each candidate DAY → Entry-shaped → dayPasses()│   → 422    │
            │   each candidate WEEK → summarize() + budget/repeat checks    │
            │        │                                                      │
            │        ▼  top-K feasible skeletons (slugs only)               │
            │  ┌──────────────────────────────┐                            │
            │  │ Claude claude-opus-4-8        │  stylist: pick 1 of K,     │
            │  │ output_config.format (strict) │  order days, write prose   │
            │  │ dish fields = enum(librarySlugs)                           │
            │  └──────────────────────────────┘                            │
            │        │ {chosenSkeletonId, dayOrder, prose}                  │
            │        ▼                                                      │
            │  assembleWeek(skeleton, library) → WeekPlan                   │
            │        │                                                      │
            │        ▼  RE-CERTIFY: every day dayPasses() + week under budget│
            │        │  (fail → deterministic fallback ordering, plain prose)│
            │        ▼                                                      │
            │   WeekPlan  (+ contentVersion, ValidationReport)              │
            └──────────────────────────────────────────────────────────────┘

  PURE (no I/O, reused/added under src/core, src/content):
    src/core/ledger.ts    dayPasses, summarize, validateEntry   ← UNCHANGED, the moat
    src/core/planner.ts   preflightFeasible, planWeek, assembleWeek, certifyWeek  ← NEW
    src/content/index.ts  recipes: Recipe[]   ← existing curated catalog
```

`react`/`react-dom` remain the only **client** runtime deps. The Anthropic SDK and Zod are **server-only** — they never enter the static client bundle (the moat runs identically client- or server-side because it's pure).

### The four pure functions (the kernel)

```ts
// src/core/planner.ts — PURE. No DOM, no Node, no fetch, no Anthropic import.
// Same discipline as ledger.ts. Unit-tested in planner.test.ts.

import type { Entry, Settings } from "../types";
import type { Recipe } from "../content/types";
import { dayPasses, summarize } from "./ledger"; // ← reuse the moat, do not fork

/** Cross-day rules the per-day ledger does not encode. Hardcoded in v1; later → Settings. */
export interface WeekRules {
  weeklyBudget: number;     // from Settings.weeklyBudget
  noDinnerRepeats: boolean; // true
  vegMinDays: number;       // e.g. 3 — days that must include a veg-tagged dish
}

/** One assembled day, before it becomes an Entry. Numbers are SUMMED from the library. */
export interface DayPlan {
  day: Weekday;
  /** Library slugs chosen for this day + servings. The LLM only ever touches THIS. */
  slots: { slug: string; servings: number }[];
  isCookDay?: boolean;
}

export interface WeekSkeleton {
  id: string;                 // stable hash of (ordered slugs) — referenced by the LLM
  days: DayPlan[];            // Sun..Sat
  contentVersion: string;     // library hash this was built against (reproducibility)
}

export interface BindingConstraint {
  metric: "protein" | "calories" | "budget" | "variety" | "coverage";
  message: string;            // "protein floor 100g unreachable under $55 with current library"
  shortfall?: number;
}

export type PlanResult =
  | { ok: true; skeletons: WeekSkeleton[] }       // top-K distinct feasible weeks
  | { ok: false; binding: BindingConstraint };    // proven infeasible — do NOT ask the LLM to fudge

/** Cheap gate: does the catalog even THEORETICALLY contain enough to pass? */
export function preflightFeasible(
  library: Recipe[],
  settings: Settings,
  rules: WeekRules,
): { feasible: boolean; binding?: BindingConstraint } { /* ... */ }

/** The search. Pure. Returns proven-infeasible or top-K feasible skeletons. */
export function planWeek(
  library: Recipe[],
  settings: Settings,
  rules: WeekRules,
  opts?: { beamWidth?: number; topK?: number },
): PlanResult { /* ... */ }

/** Deterministic: resolve a chosen, ordered skeleton into a WeekPlan with REAL numbers. */
export function assembleWeek(
  skeleton: WeekSkeleton,
  ordered: Weekday[],          // day order the LLM chose
  library: Recipe[],
  prose: WeekProse,            // LLM free-text — never touches scoring
): WeekPlan { /* sums perServing × servings; builds Entry-shaped days */ }

/** Defense in depth: re-run the scorer on the FINAL week. Returns a typed report. */
export function certifyWeek(
  week: WeekPlan,
  settings: Settings,
  rules: WeekRules,
): ValidationReport { /* every day dayPasses() AND week summarize() under budget */ }
```

### How a day becomes an `Entry` (the seam to the moat)

`assembleWeek` / `planWeek`'s day filter both project a `DayPlan` into the canonical `Entry` shape and call the **unmodified** `dayPasses(entry, settings)`. The projection sums curated per-serving values — the code supplies totals, never the LLM:

```ts
function projectDay(day: DayPlan, library: Recipe[], settings: Settings): Entry {
  const dishes = day.slots.map(s => ({ recipe: bySlug(library, s.slug), servings: s.servings }));
  const calories = dishes.reduce((a, d) => a + d.recipe.perServing.calories * d.servings, 0);
  const protein  = dishes.reduce((a, d) => a + d.recipe.perServing.protein  * d.servings, 0);
  const cost     = dishes.reduce((a, d) => a + (d.recipe.estCostPerServing ?? 0) * d.servings, 0);
  // zeroWaste is a property of how dishes CHAIN, not of macros — derived from the
  // curated zeroWasteHero flag + the week's batch-cook engine, never invented.
  const zeroWaste = isWasteFreeByConstruction(day, library);
  return {
    id: makeId(), date: /* assigned at assemble time */ "", week: /* theme label */ "",
    dish: dishes.map(d => d.recipe.title).join(", "),
    calories, protein, cost, zeroWaste,
  };
}
const kept = dayPasses(projectDay(day, library, settings), settings); // ← byte-identical to logged-day scoring
```

> **Invariant.** The thing that grades a generated week is the *same function* that grades a hand-logged week. The planner must accept exactly the days the ledger will later score as kept. Forking `dayPasses` into the planner is the single worst thing this feature could do (per `AGENTS.md`'s golden rule).

## The LLM contract (Claude as stylist only)

- **Model:** `claude-opus-4-8`, `thinking: { type: "adaptive" }`, `output_config: { effort: "medium" }`. The hard combinatorics are already solved deterministically; the LLM is choosing among a handful of *valid* options and writing prose, so `medium` is the cost/quality sweet spot for this non-interactive batch job (bump to `high` only if eval shows weak sequencing). Adaptive thinking only — `budget_tokens` is removed on Opus 4.8 and 400s.
- **Structured output:** `client.messages.parse()` with a Zod schema → `zodOutputFormat`, `strict: true`. The schema is **references-only**:

```ts
// server-only. Built fresh from the live library each request.
const slug = z.enum(librarySlugs as [string, ...string[]]);  // real slugs ONLY
const StylistOutput = z.object({
  chosenSkeletonId: z.string(),                 // one of the K solver skeletons
  dayOrder: z.array(z.enum(["Sun","Mon","Tue","Wed","Thu","Fri","Sat"])).length(7),
  // prose fields — free text, do NOT affect scoring, never fact-checked against macros:
  intro: z.string(),
  preciousThread: z.string(),                   // the one allowed luxury this week
  dayBlurbs: z.array(z.object({ day: z.string(), blurb: z.string() })),
  // OPTIONAL escape hatch used only in the repair-loop fallback:
  swaps: z.array(z.object({ day: z.string(), out: slug, in: slug })).optional(),
});
```

  There is no `calories`, `cost`, or `protein` field for the model to populate — grounding by omission. `swaps` reference `slug` enums, so even a repair can't go off-catalog.
- **Prompt caching:** the system prompt + the serialized dish library (sorted by slug for byte-stability) is a large stable prefix — put one `cache_control: { type: "ephemeral" }` breakpoint there; the volatile `{settings, cuisine, prefs, skeletons}` go after it. Across the 7 themed weeks and any repair rounds this dominates input cost. Verify with `usage.cache_read_input_tokens`.
- **Safety:** check `response.stop_reason` (refusal is low-probability for cooking, but handle it) and `parsed_output === null` (schema miss) as repair-worthy events, not crashes.
- **Re-certify, always.** Whatever the LLM returns is re-run through `certifyWeek` (which calls `dayPasses`/`summarize`) before the server responds. A reorder/swap that breaks feasibility is rejected; the server falls back to the solver's own best ordering with plain blurbs. **The server never returns a `WeekPlan` that `core` hasn't certified as all-kept and under budget.**

## API surface (the IO contract)

```
POST /api/menu/generate
  body:  { settings: Settings, cuisine: Cuisine, prefs?: MenuPrefs }
  200:   { week: WeekPlan, report: ValidationReport, contentVersion: string }
  422:   { binding: BindingConstraint }   // proven infeasible — surfaces "what to add" to a curator
  200 (degraded): week with report.failingDays populated → UI shows "AI got 6/7; Thursday is 40 kcal over"
```

```ts
interface MenuPrefs {
  avoidSlugs?: string[];      // dishes the user dislikes
  maxRepeatsPerWeek?: number; // default 1 (no dinner repeats)
  varietyBias?: number;       // 0..1 — how hard the objective weights flavor diversity vs lowest cost
}

interface ValidationReport {
  allKept: boolean;
  weekUnderBudget: boolean;
  failingDays: { day: Weekday; metric: string; actual: number; target: number; shortfall: number }[];
  weekSummary: Summary;       // straight from summarize()
}
```

The route is the **only** place with I/O (loads library, calls Anthropic, persists). Multi-user persistence of generated plans rides whatever the **accounts pillar** lands; this pillar just needs the route + the pure kernel. A generated plan stores the `contentVersion` it was built against so its numbers are reproducible/auditable later even if the library changes.

## How it reuses `src/core/ledger.ts`

| Need | Reuse (unchanged) | Notes |
|---|---|---|
| Is a generated day "kept"? | `dayPasses(entry, settings)` | The candidate-day filter in `planWeek` and the final `certifyWeek` both call it. One definition of "kept", shared with UI + CLI. |
| Week totals / cost-per-kcal / cost-per-protein | `summarize(entries)` | Week-level budget check and the `report.weekSummary` come straight from it — no re-derived math. |
| Entry shape sanity | `validateEntry` / `makeId` | `assembleWeek` builds real `Entry` objects; reuses `makeId()` for ids. |

`ledger.ts` is imported verbatim, server-side, with zero edits — exactly as `AGENTS.md` → *Extending* prescribes ("Keep `core/ledger.ts` untouched — it already has no I/O"). `planner.ts` sits beside it under the same purity rule and is the second pure kernel the server reuses.

> **Documented divergence to join later:** `dayPasses` scores *days*; the new cross-day rules (weekly budget sum, no-dinner-repeat, veg-minimum) are scored in `planner.ts`, not `ledger.ts`. v1 defines them once in `planner.ts` and documents that ledger scores days while planner scores weeks. A future `weekPasses()` in `core` could unify them — deferred (see Open seams).

## Phased build order

1. **Pure planner kernel, no LLM.** `src/core/planner.ts` + `planner.test.ts`. `projectDay` → `dayPasses`, `planWeek` greedy/beam over the 9 existing pasta recipes, `certifyWeek`. Property tests: every returned skeleton's every day passes `dayPasses`; week is under budget; no dinner repeats. Ship a coverage report. *This alone produces valid weeks deterministically — the feature works before any API call.*
2. **`preflightFeasible` + binding-constraint reporting.** Distinguish "impossible week (content gap)" from "bad draft". 422 path.
3. **Serverless route, solver-only.** `POST /api/menu/generate` returns the solver's top skeleton assembled with deterministic ordering + plain blurbs. No LLM yet. End-to-end WeekPlan from real numbers.
4. **Add Claude as stylist.** `messages.parse()` with the references-only schema; pick/order/prose among top-K; prompt-cache the library; **re-certify** before responding; deterministic fallback on schema miss or certify failure.
5. **Repair-loop fallback (Lens 1 graft).** When all top-K skeletons score poorly on the variety objective, run ≤3 rounds: structured per-day + week-level failure facts → `swaps` → re-assemble → re-certify. Best-scoring draft kept across rounds; graceful "6/7 days" degradation.
6. **Provenance + drift-check (Lens 2 graft).** `scripts/content.ts` recomputes each recipe's `perServing`/`estCostPerServing` from an ingredient table, warns on drift; add `{source, asOf, region}` to numbers; stamp `verifiedAt`. Warn-only first, build gate later.

Phases 1–3 are shippable on their own and require no Anthropic key. Each later phase is additive.

## Open seams / to join later

- **`weekPasses()` in `core`.** No-dinner-repeat, veg-minimum, and the weekly-budget sum live in `planner.ts`, not `ledger.ts`, so the per-day ledger scorer doesn't enforce them — a documented divergence with a risk of the two layers disagreeing on "a valid week." Promote these (and `WeekRules`) into the `Ledger`/`Settings` shape with a `version` bump + migration when they need to be user/curator-tunable. Until then they're constants in `planner.ts`.
- **Zero-waste chaining is stateful and under-modeled.** `zeroWaste` is a property of how dishes chain across days (the frittata-di-pasta hero pattern), not derivable from macros. v1 drives it off the curated `zeroWasteHero` flag + the week's batch-cook `engine[]` and treats days as mostly independent. A real cross-day leftover/ingredient inventory carried Sun→Sat is later work; get this wrong and assembled days fail `dayPasses` on the `zeroWaste` term and the loop never converges.
- **Pantry amortization (`spansWeeks`).** v1's week cost sums `estCostPerServing`; the precise first-shop-vs-steady-state model (`IngredientLine.spansWeeks` / `ShoppingItem.spansWeeks`, `firstShopTotal` vs `steadyStateWeekly` already on `WeekPlan`) is hand-waved. Staples (oil, cheese, anchovy) should be counted once at first shop, or cheap weeks get spuriously declared over budget. Fast-follow with a `spansWeeks`-aware basket roll-up that de-dups shared ingredients.
- **Library depth / feasibility cliffs.** 9 pasta dishes can't fill 7 themed weeks with no repeats; the solver will legitimately report `coverage` binding constraints. "Grow the library" is the real backlog — the binding-constraint output tells curators exactly which role/macro band is short. Combinatorial blow-up is fine at hundreds of dishes; revisit (or swap in a real MILP/OR-Tools solver server-side) only at thousands.
- **Culinary-quality eval.** We certify *constraint satisfaction* (the engine); we do not certify *deliciousness*. A separate rubric / LLM-judge pass over generated weeks — or a `user.define_outcome`-style graded loop if this ever moves to Managed Agents — is undesigned. The solver guarantees correctness; taste rides entirely on library quality + the LLM's tie-breaking, the weakest link.
- **Free-text `WeekDay` dinner strings.** The content model lets `WeekDay.dinner` be free text "for dishes not yet in the library." In AI mode this must be **disabled** — generation is slug-only; free text stays a human-authoring affordance, never an AI output path, or its numbers are unvetted.
- **Cost / latency of the repair fallback + scale.** A 3-round Opus loop is real money + multi-second latency; acceptable for an async "generate my week" action, painful for instant regeneration. Single-region SDK-default-retry call with no queue/rate-limit backpressure if many users generate at once — a batch/queue is later infra. Prompt caching mitigates input cost, not output/thinking tokens.
- **Provenance backfill.** v1 ships single-region (US) `estCostPerServing` with provenance fields present but sparse; macro overrides (hand-vetted value supersedes computed, with a note) are a simple optional field first, not a review-workflow UI. Price staleness (`asOf` thresholds downgrading a plan's confidence) and licensable-vs-scraped sourcing are deferred.
- **Persistence + auth.** This pillar defines the pure kernel + the `POST /api/menu/generate` IO contract; storing generated plans per user rides the accounts pillar's backend.
