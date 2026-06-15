# Cucina Povera — System Architecture

> Master overview. Composes the four pillar design docs into one product, maps
> the dependencies/seams between them, and sequences a phased roadmap from
> **where we are now** (single-user static site) to **multi-user + AI generator
> + leaderboards**. Read this first; then the pillar docs for depth.

Pillar docs:

- [`backend-data.md`](./backend-data.md) — persistence, the server-side scoring authority, the storage seam, the read/write API.
- [`auth-multiuser.md`](./auth-multiuser.md) — identity, per-user ownership, the public-safe projection.
- [`menu-generator.md`](./menu-generator.md) — the hybrid AI weekly-menu generator (deterministic solver + Claude stylist).
- [`leaderboards-social.md`](./leaderboards-social.md) — competitive boards, seasons, leagues, share cards.

---

## 1. The one idea that holds it all together

The product's moat is **`src/core/ledger.ts`**: a pure, I/O-free module that is
the *single definition of a "kept" day* (`dayPasses`) and the *single source of
the efficiency stats* (`summarize`, `currentStreak`). Today it is imported by
exactly two consumers — the React UI and the `scripts/ledger.ts` CLI — "so they
can never disagree" (AGENTS.md golden rule).

**Every one of the four pillars is, at bottom, the same move: add a third (and
fourth) consumer of that same pure engine, and change nothing else about how a
day is scored.** The server becomes a consumer (backend pillar). The leaderboard
ranks by calling it, never by re-deriving in SQL (leaderboards pillar). The
projection that feeds public boards is computed by it (auth pillar). The menu
generator *certifies* its output with it (generator pillar). All four docs
independently land on the same first concrete step — **extract `core/` +
`types.ts` into a dep-free `@cucina/core` workspace package** — because all four
need to import the engine without forking it.

> If you read nothing else: the scoring engine is never copied, never
> re-implemented in SQL, never authored by an LLM. It is imported verbatim into
> every new surface. That invariant is what makes scores trustworthy enough to
> rank competitively and menus safe enough to auto-generate.

The second unifying idea is the **storage seam**. `storage/browserStore.ts`
already exposes an async `loadLedger()/saveWorkingCopy()` contract that the UI
calls. Going multi-user is — deliberately — *one new file behind that same
contract* (`apiStore.ts`), plus an auth provider. Nothing above `storage/`
changes.

---

## 2. How the four pieces compose into one product

```
                         ┌───────────────────────────────────────────────┐
                         │  @cucina/core  (UNCHANGED ledger.ts + types.ts │
                         │  + constants.ts) — pure, dep-free, isomorphic. │
                         │  dayPasses · summarize · currentStreak ·       │
                         │  validateEntry · makeId  (+ pure additions)    │
                         └───────────────────────────────────────────────┘
            imported verbatim by ALL of:    ▲     ▲      ▲        ▲
              ┌──────────────────────────────┘     │      │        └───────────────┐
              │                  ┌─────────────────┘      └──────────┐             │
              │                  │                                   │             │
        React SPA           scripts/ledger.ts                 serverless /api    planner.ts
        (UI, unchanged       (CLI, seed path)                 (the new backend)  (NEW pure
         above storage/)            │                                │            kernel, sits
              │                     │ writes                         │            beside ledger)
              │ swaps               ▼                                │
        browserStore.ts ──►   public/ledger.json  ◄── seed ──────────┤
              │  for                (frozen fixture +                 │
              ▼  apiStore.ts         anon/offline fallback)           ▼
        localStorage cache ──HTTPS+JWT──────────────────────►  Postgres (Neon) — truth
        (anon fallback)                                        Redis (Upstash) — hot board cache
                                                                      ▲
                                                  Clerk (identity) ───┘
                                                  Anthropic (server-only, menu drafts)
```

**Backend & data (the spine all others stand on).** Promotes the engine into
`@cucina/core`; stands up Neon Postgres behind ~6 thin serverless functions; the
**server is the sole scoring authority** (`writeLedger` runs `validateEntry` +
`dayPasses` on every write, persists a derived `passed`, ignores client-sent
scores). The client's only change is `browserStore.ts → apiStore.ts` behind the
same contract; `public/ledger.json` survives as seed + anonymous/offline
fallback. This pillar owns the storage layout, the auth-scoped read/write API,
and the IO contracts the other pillars plug into.

**Auth & multi-user.** Rents identity (Clerk) rather than building it; the
verified, opaque `userId` is the partition key for a user's data. Ownership
becomes a property of the data. Crucially it defines the **public-safe
`LeaderboardRow` projection** — a type with *no `entries` field at all*, so
day-level data is structurally incapable of leaking onto a board — and the pure
`projectLeaderboardRow()` that computes it via the same `summarize`/
`currentStreak`. This is the privacy fence the leaderboards pillar builds on.

**AI menu generator (hybrid).** A new pure module `src/core/planner.ts` runs a
deterministic branch-and-bound/beam search over the curated `Recipe[]` library,
projects each candidate day into the canonical `Entry` shape, and **certifies it
with the unforked, imported `dayPasses()`/`summarize()`**. Claude
(`claude-opus-4-8`) is *only* a downstream stylist: it picks/orders among
already-valid skeletons and writes prose, through a strict structured-output
schema whose dish fields are an **enum of real library slugs** — there is no
calorie/cost/protein field for it to hallucinate into ("grounding by omission").
The server re-certifies every returned week through core before responding.

**Leaderboards & social.** Precompute-on-write standings, fenced by data
provenance: competitive boards rank only **recipe-anchored** entries (the server
derives macros/cost from the curated library, never trusting client numbers) and
score everyone through the *same untouched* engine. Free-text days still work but
land on a separate, labeled Honor board. One additive pure comparator
(`rankCompare`/`rankScore`) lives in core so the Redis ZSET, the SQL `ORDER BY`,
and any "explain my rank" UI can never disagree. Seasons = the existing themed
weeks; invite-only Friend Leagues + `@vercel/og` share cards drive retention.

**The product they compose into:** sign in (Clerk) → log days against a
recipe-anchored library (server scores them via core) → ask the AI to draft next
week's menu from real, vetted dishes (solver guarantees it passes, Claude makes
it taste good) → compete on themed-week leaderboards and in friend leagues, all
ranked by the one scoring engine that has graded every day since the single-user
version.

---

## 3. Dependency & seam map — what each pillar needs from the others

The pillars were designed independently and **mostly agree**, but each leans on
contracts the others own. This is the explicit map of those edges. (The places
they *don't* line up yet are consolidated in §5.)

### The shared substrate everyone depends on

| Artifact | Owned by | Consumed by |
|---|---|---|
| `@cucina/core` package (the engine, dep-free) | Backend pillar stands it up | **All four** import it verbatim |
| `Entry` / `Settings` / `Ledger` canonical shapes | `src/types.ts` (existing) | All four; nobody reshapes them |
| `dayPasses` / `summarize` / `currentStreak` | core (unchanged) | Backend (scoring authority), Leaderboards (ranking), Auth (projection), Generator (certification) |
| Neon Postgres + serverless `/api` + Clerk auth | Backend + Auth pillars | Leaderboards, Generator (for persistence) |
| Curated `Recipe[]` / `WeekPlan` library | Content model (existing) + Generator pillar grows it | Backend (mirrors to tables), Leaderboards (provenance anchor), Generator (the search space) |

### Edge-by-edge

- **Auth → everyone.** Provides the stable `userId` (Clerk subject) used as the
  row partition key. The leaderboards `users` table, the backend `entries.user_id`
  FK, and per-user generated-menu storage all assume this id exists and is
  verified server-side (never read from a request body).

- **Backend → Generator.** Backend fixes the generator's IO contract and storage:
  `POST /api/menus/generate`, the `GeneratedMenuRequest`/`GeneratedMenuDraft`
  shapes, the `generated_menus` table, and the **numbers-from-recipes guarantee
  enforced by FK** (a draft day is a recipe slug; macros come from the `recipes`
  table, never the model). The generator pillar owns everything *inside* that
  route (prompt, Claude wiring, retry, library-only fallback).

- **Backend → Leaderboards.** Backend owns the relational `entries` storage and
  the derived `passed` cache the board reads for speed; the leaderboard API is
  one more auth-scoped function computing rows via `summarize`/`currentStreak`.

- **Generator → Leaderboards / Backend.** The generator pillar grows the curated
  library. **Verified leaderboards are only as rich as library coverage** — thin
  library ⇒ most real meals fall to free-text ⇒ sparse verified board. The
  `recipes` server-mirror + a `recipe_version` pin is the join point. The
  generator also owns the cross-day constraint logic (no-dinner-repeats, weekly
  budget sum, veg-minimum) that *both* it and the board need.

- **Auth → Leaderboards.** Auth's `LeaderboardRow` projection (no `entries`
  field) + per-doc `visibility` is the privacy fence; the board only ever serves
  projections, never docs.

- **Leaderboards → core.** Needs the `rankCompare`/`rankScore` comparator to be a
  **pure addition to core**, not board-only SQL, so Redis and Postgres can't
  diverge on tiebreaks.

---

## 4. Phased roadmap — from here to there

### Where we are now (ground truth, verified in-repo)

- Single-user **Vite + React 18 + TS** static site; runtime deps are `react` +
  `react-dom` only; tests in Vitest; CLI in tsx.
- Data is `public/ledger.json` (currently `version: 1`, **zero entries** — clean
  slate) + a localStorage working copy. Two write paths: CLI (canonical) and
  browser export.
- **`src/core/ledger.ts` is already pure** and imported by both UI and CLI.
- **Content model already exists and is in progress:** `src/content/types.ts`
  (`Recipe`, `WeekPlan`, `ContentDoc`); **9 curated pasta recipes**;
  `week-1-pasta.ts`; docs (manifesto/budget/challenge). Week 1 import in progress.
- Architecture already chosen: **hybrid generator** (solver owns correctness,
  Claude owns taste) and **content-model-first** (numbers live in the library).

This is the ideal launch point: the engine is pure, the library has begun, and
no production user data exists to migrate.

### Hosting decision to settle first (a real fork between the docs)

The pillars disagree on hosting and it must be resolved before Phase 1, because
it changes CI and deploy:

- **Backend pillar:** keep the Vite SPA static; deploy framework-free functions
  under `/api` alongside it (no framework migration).
- **Auth & Leaderboards pillars:** assume **Next.js App Router on Vercel** (Clerk
  middleware, `@vercel/og`, co-located API routes pinned to the Node runtime).

**Recommendation:** adopt the Auth/Leaderboards stack — **Next.js App Router on
Vercel** — as the platform, because Clerk's middleware model, `@vercel/og` cards,
and co-located Node-runtime functions are the path of least resistance for *two*
of the four pillars, and the SPA's components/styles/core port into the App
Router with no logic change. Keep the backend pillar's *discipline* (the storage
seam is the only client change; framework-free handler logic; greppable
`requireUserId()` authz rather than RLS) inside that platform. Either way, **pin
API routes to the Node runtime** so core's `structuredClone`/`Date.now`/
`Math.random` work. This migration (GitHub Pages → Vercel: deploy + CI + storage)
is the single largest cost and is front-loaded into Phase 0/2.

### Phase 0 — Extract `@cucina/core` (no behavior change)

All four docs name this as step 1. Stand up the pnpm/Turborepo workspace; move
`ledger.ts` + `types.ts` + `constants.ts` verbatim into `@cucina/core`; repoint
`web` and the CLI at the package; keep `npm test` green. Pure refactor, zero
behavior change. **De-risks the moat before anything depends on it.** The package
stays dep-free (AGENTS.md lean-deps invariant).

### Phase 1 — Pure additions to core (still no backend)

Land the new **pure, tested** functions every later phase needs, while the static
site keeps working:

- `migrate(v1 → v2)` and the version bump for whatever envelope/provenance wins
  (see §5 reconciliation).
- `projectLeaderboardRow()` + `SCORING_VERSION` (auth pillar).
- `rankCompare` / `rankScore` / `RankStats` with a **single golden test set**
  asserting Redis-score order == comparator order == SQL order (leaderboards).
- `src/core/planner.ts` + `planner.test.ts`: `preflightFeasible`, `planWeek`
  (solver), `assembleWeek`, `certifyWeek`, with property tests (every returned
  day passes `dayPasses`; week under budget; no dinner repeats). **The generator
  works deterministically here with no Anthropic key.**
- Decide where cross-day rules (`WeekRules`: no-repeat, weekly budget, veg-min)
  live — see §5; land them as pure functions, not SQL.

Outcome: the AI generator's correctness kernel and all board math exist and are
tested *before* any server, database, or LLM is wired.

### Phase 2 — Platform + per-user ledger (the multi-user jump)

The largest phase; the hosting migration lands here.

- Scaffold Next.js App Router on Vercel; provision Clerk + Neon Postgres via the
  Vercel Marketplace; drop in sign-in UI + `middleware.ts`; prove `GET /api/me`.
- Create the relational schema (`users`, `user_settings`, `entries` with derived
  `passed`); write the idempotent migration that lifts `public/ledger.json` into
  a seed user (cheap today — the ledger is empty).
- Implement the auth-scoped ledger API: `GET/PUT /api/ledger`, `POST /api/entries`,
  `PATCH /api/settings` — each derives `userId` from the verified token, runs
  `validateEntry` + server-side `dayPasses`, and uses the optimistic-concurrency
  version/`updatedAt` guard (409 on stale). Integration test: `POST /api/entries`
  returns the same `passed` that `core.dayPasses` computes locally.
- Swap `browserStore.ts → apiStore.ts` behind the existing contract; keep
  `public/ledger.json` as anonymous/offline fallback. `App.tsx` unchanged except
  the frontend's 409 reconcile UI ("your data changed on another device").

Outcome: real accounts, multi-device writes, server as sole scoring authority.

### Phase 3 — Content tables + trusted write path

- Seed the server `recipes` / `week_plans` / `content_docs` mirror from
  `src/content` (versioned, so logged numbers can't drift when the library is
  edited).
- Add provenance to the write path: a `recipeSlug` + `servings` entry is
  **derived and verified** server-side (macros/cost from the recipe, client
  numbers kept only for audit); free-text entries are marked `unverified`.
- `unique(user_id, date)` + plausibility bounds + one-entry-per-day.

Outcome: the provenance anchor both the generator and the leaderboards need.

### Phase 4 — AI generator end-to-end

- `POST /api/menu/generate`, solver-only first: returns the top deterministic
  skeleton assembled with plain ordering/blurbs. Real numbers, no LLM, no key.
- Add Claude as stylist: `messages.parse()` with the slug-enum structured schema,
  prompt-cache the serialized library, **re-certify through core** before
  responding, deterministic fallback on schema miss or certify failure.
- Bounded ≤3-round repair loop as a fallback only when top-K skeletons are
  culinarily weak; proven-infeasible weeks return the binding constraint (a
  curator signal), never an LLM fudge.
- Frontend owns the draft → accept → activate-week loop; backend persists the
  draft (`generated_menus`) keyed to the user.

### Phase 5 — Leaderboards & seasons

- Redis ZSET cache; precompute-on-write standings re-rolled per user/season;
  `GET league board` (verified) + `/honor` (free-text). Volume gate
  (`keptDays >= 5`). A default **house league** so a solo signup sees a populated
  room.
- Seasons = `activeWeek`/`WeekPlan` label; `season-rollover` + `reconcile` crons;
  `challenge_runs` frozen snapshots.
- The board's privacy fence is the auth pillar's `visibility` + projection-only
  read path.

### Phase 6 — Social loop & hardening

- `@vercel/og` plated-day + standings share cards; invite-by-`join_code`
  leagues; peer-flag soft-hide + audit fields; email-on-rollover.
- Provenance drift-check CLI (`scripts/content.ts`) recomputes recipe numbers
  from an ingredient table (warn-only first, build gate later); macro
  hand-overrides; `verifiedAt` stamps.
- Hall-of-fame cron; recipe-version pinning; `user.deleted` webhook →
  cascade-delete; rate limits / per-user quotas on the Anthropic route.

**Dependency ordering:** 0 → 1 are pure and unblock everything. 2 unlocks 3.
3 (the recipe mirror + provenance) is a hard prerequisite for **both** 4 and 5
being trustworthy. 4 and 5 can then proceed in parallel. 6 is additive hardening
on top of either.

---

## 5. Rough seams to join later

The integration points where the independently-designed pillars **don't yet line
up**. These are the conscious decisions the master phase must make; the pillar
docs each note their side of these but none owns the reconciliation.

### A. Hosting platform conflict (must resolve before Phase 2)
Backend pillar says "Vite SPA stays, framework-free functions." Auth &
Leaderboards assume Next.js/Vercel. **Resolution (§4): adopt Next.js App Router
on Vercel, keep the backend pillar's discipline inside it.** Pin API routes to
the Node runtime so core's `structuredClone`/`Date.now`/`Math.random` work. This
is the single largest cost (deploy + CI + storage change at once).

### B. Storage layout conflict: relational vs single jsonb doc
The **backend & leaderboards pillars normalize** entries into rows
(`entries(user_id, date, …)` with a derived `passed`) — required for per-entry
leaderboard queries and "no dinner repeats." The **auth pillar stores one
`jsonb` `LedgerDoc` per user** (so `Ledger.version` migrations keep working
verbatim) and explicitly defers normalization. These are incompatible as written.
**Resolution: go relational from Phase 2** (the board needs per-entry SQL and the
ledger is empty today, so there's nothing to lose), reassembling the canonical
`Ledger` at the storage boundary; treat the auth pillar's jsonb-doc as the
*conceptual* envelope, not the physical row. Keep the auth pillar's `migrate()`
for the one-time seed import.

### C. Version-bump collision: three pillars want `version: 2` for different reasons
Auth wants v2 = the `LedgerDoc` envelope (ownership/visibility wrapper).
Leaderboards wants v2 = `Entry` + provenance fields (`source`, `recipeSlug`,
`servings`, `verifiedMacros`). Generator wants `WeekRules` promoted into
`Settings` with a bump. **There can be only one `version: 2`.** Resolution: land
**one consolidated v2** in Phase 1 that adds (a) the ownership/visibility
envelope, (b) entry provenance, and (c) leaves `WeekRules` as planner constants
until they must be user-tunable (then a later, deliberate v3). Write one
`migrate()` covering all of it.

### D. Cross-day constraints live in the wrong place
`dayPasses` scores *days*; "no dinner repeats," weekly-budget-sum, and
veg-minimum are cross-day and currently live only in `planner.ts`. If the
leaderboard or a future `weekPasses()` enforces them by any other path, the
engine and the board will disagree on "a valid week." **Resolution: define them
once as pure functions in `@cucina/core` (Phase 1), consumed by planner, board,
and UI alike.** Promote to `Settings` with a version bump only when curator/user-
tunable.

### E. The `userId` contract is assumed, not specified, by three pillars
Backend, Leaderboards, and Generator-persistence all assume "a stable, verified
Clerk `userId` exists as the partition key." **The auth pillar owns wiring it**
(Clerk middleware, `requireUserId()`, the `user.created` webhook upserting
profiles/handles). Until that lands, the others can't store rows. The vendor
lock-in is intentionally thin: only a stable id string + standard JWT
verification, no Clerk-specific columns, so swapping OIDC providers is a column
remap.

### F. Library coverage gates everything downstream
Both the **generator** (9 pasta dishes can't fill 7 no-repeat themed weeks → the
solver will report `coverage` binding constraints) and the **verified
leaderboards** (thin library ⇒ most meals fall to free-text ⇒ sparse verified
board) are throttled by how rich the curated `Recipe[]` library is. "Grow the
library" is the real backlog; the solver's binding-constraint output tells
curators exactly which role/macro band to add. The `recipes` mirror +
`recipe_version` pin is the shared join point.

### G. Leaderboard fairness across different personal settings
`costPerKcal` / streak / kept-rate are **not apples-to-apples** across users with
different `calorieTarget`/`proteinFloor`/`weeklyBudget` — a user can game rank by
lowering their own floor. **Resolution (deferred): a canonical "challenge mode"**
(fixed target/floor/budget) required to appear on the *global* board; custom
settings only on self/private views. Publish `weeklyBudget` on the row meanwhile
so ranks stay interpretable. Cross-cuisine `$/1000kcal` normalization is punted
until non-Italian weeks exist; efficiency boards stay scoped within a themed-week
season.

### H. Tiebreak encoding is the load-bearing leaderboard risk
`rankScore` (Redis ZSET bit-packing), `rankCompare` (the comparator), and the SQL
`ORDER BY` must agree exactly. **One golden test set in Phase 1 asserts all three
order identically.** Metric-toggle boards (rank by a different primary metric)
need multiple ZSETs and are deferred.

### I. Generated-plan persistence rides the accounts backend
The generator pillar defines only the pure kernel + the `POST /api/menu/generate`
IO contract; **storing generated plans per user is the backend/auth pillar's job**
(`generated_menus` keyed to `userId`). Free-text `WeekDay.dinner` strings must be
**disabled in AI mode** (slug-only generation) or their numbers are unvetted; free
text stays a human-authoring affordance only.

### J. Scoring-input integrity (the honest limit)
v1 accepts self-reported calories/protein/cost; **scoring is unforgeable but
inputs are trusted.** Recipe-anchored entries tighten this (server derives
numbers from the library). Anti-cheat is honest, not airtight: provenance +
plausibility bounds + one-entry-per-day + volume gates + peer-flag soft-hide; no
receipt verification, no anti-sybil beyond Clerk. Privacy: cards/standings expose
what/how cheaply someone eats + a handle — explicit per-card sharing, invite-only
leagues, and a private mode are required before any global/open division.

### K. Deferred operational seams (named, not built in v1)
- **Zero-waste cross-day chaining** is stateful and under-modeled; v1 drives
  `zeroWaste` off the curated `zeroWasteHero` flag + batch-cook engine and treats
  days as mostly independent. A real Sun→Sat leftover inventory is later work.
- **Pantry amortization (`spansWeeks`)** — v1 sums `estCostPerServing`; staples
  counted once at first shop is a fast-follow, or cheap weeks read as over budget.
- **CLI repointing** — `scripts/ledger.ts` stays the committed-`ledger.json`
  seed path; authenticating it to write a user's rows via `/api` with a service
  token is a later small add (the core it calls is identical).
- **localStorage → cloud import on first login** — a one-button add, not built
  now.
- **Cost/latency at scale** — the ≤3-round Opus repair loop is real money +
  multi-second latency; fine async, painful for instant regen. A batch/queue and
  per-user quotas on the generate route are later infra.
- **Culinary-quality eval** — we certify constraint *satisfaction*, not
  *deliciousness*; an LLM-judge/rubric pass over generated weeks is undesigned.
