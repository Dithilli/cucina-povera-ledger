# Leaderboards & Social — Architecture

## Recommendation

Build leaderboards as a **precompute-on-write standings model** (Designer B's spine) whose competitive rankings are **fenced by data provenance** (Designer A's anchor): every leaderboard-eligible day must reference a curated `Recipe` slug + servings so the **server** — not the client — derives calories/protein/cost and runs the *same untouched* `src/core/ledger.ts` to decide what is a "kept" day and what the efficiency stats are. Free-text days keep working (the single-user app must not break) but are marked `unverified` and ranked only on a separate, clearly-labeled Honor board. On top of this trusted scoring substrate we graft Designer C's retention loop: small invite-only **Friend Leagues**, the **existing themed weeks as Seasons**, and a server-rendered **"plated day" share card** as the viral atom. Storage is Neon Postgres (truth) + Upstash Redis (hot top-N / rank-of-me), all on Vercel Functions, with Clerk for identity — every new piece is additive and the static localStorage app keeps building untouched.

## Chosen architecture & why

Three forces had to be reconciled, and they map cleanly onto the three proposals:

1. **Fairness is a data-provenance problem, not a math problem (A).** `summarize()` will faithfully rank fabricated numbers. The cure already exists in the repo: `src/content/types.ts` carries vetted `perServing` macros and `estCostPerServing` the user did not type. So competitive boards rank only **recipe-anchored** entries; the server recomputes from the recipe and ignores client-sent numbers for ranking. This is the backbone, not a bolt-on trust system.

2. **Reads vastly outnumber writes (B).** People log ~1 day then refresh the board many times, and the engine is cheap + deterministic. So we **fold each write into a denormalized `standings` row** by re-running the engine over the user's season entries, and serve ranks from an index / Redis ZSET. No scan-on-read aggregation. Seasons = the existing "Week N — Theme" cadence, which keeps every board small and self-archiving.

3. **Retention comes from other people (C).** A correct board nobody looks at is dead. Friend Leagues give you a populated, winnable room; the themed week gives a shared clock and vocabulary; the plated-day OG card is the share/acquisition atom. We rank on the challenge's *virtue* (kept-day rate, then cheapest protein, then streak) so a frugal player can beat a rich one.

**Why this spine over the alternatives:** B alone scores lies; A alone ships a correct-but-lonely board; C alone ships a fun-but-cheatable board. The graft keeps the moat (`core/ledger.ts` is the *only* scorer everywhere), makes the competitive number defensible (provenance), makes reads scale flat (precompute), and gives the thing a reason to exist socially (leagues + seasons + cards).

### The one rule that ties it together: the server is the only scorer

`core/ledger.ts` is pure and isomorphic (no DOM, no Node, no I/O — confirmed in the file header). We import it **verbatim** server-side. SQL stores the *outputs* of `summarize()` / `currentStreak()` and only ever `ORDER BY` them; SQL never recomputes "kept" or cost-per-kcal. If a rule changes, it changes in one file and a backfill cron re-rolls standings. This is both the moat and the fairness guarantee in one.

---

## Reusing the pure engine (`src/core/ledger.ts`)

No fork, no reimplementation. The server depends on the same functions the UI and CLI already call:

- `dayPasses(entry, settings)` — the single definition of a kept day. Used both at write time (to set `kept` on a `standings` recompute) and inside `currentStreak`.
- `summarize(entries)` — produces `cost`, `calories`, `protein`, `costPerKcal`, `costPerProtein`. These become the stored, sortable columns. We never re-derive `$/1000kcal` in SQL.
- `currentStreak(ledger)` — the streak column.
- `validateEntry`, `upsertEntry`, `removeEntry`, `sortedByDate`, `weekSummary` — reused on the server for the same reasons the CLI uses them.

To share it without forking, extract the `core/` + `types.ts` into a tiny internal workspace package (e.g. `@cucina/core`) that the Vite client, the `scripts/ledger.ts` CLI, **and** the Vercel Functions all import. Until that refactor lands, a path-import / `tsconfig` path alias works. The package stays dep-free (the AGENTS.md lean-deps invariant applies to it).

**One additive pure function** belongs in core so Redis and SQL can never disagree on tiebreaks (this is Designer B's chief risk). It is pure, testable, and lives next to `dayPasses`:

```ts
// src/core/ledger.ts  (ADDITIVE — keep pure, add a test in ledger.test.ts)

/** Inputs a board needs to rank one user within one season. Derived from
 *  summarize() + dayPasses() over that user's season entries — never typed. */
export interface RankStats {
  keptDays: number;       // count of dayPasses() === true in the season
  loggedDays: number;     // total entries in the season
  currentStreak: number;
  costPerProtein: number | null; // $/100g — LOWER is better
  costPerKcal: number | null;    // $/1000kcal — LOWER is better
}

/**
 * Canonical leaderboard ordering. ONE definition, consumed by both the SQL
 * ORDER BY (mirror these columns/directions) and the Redis ZSET score encoder.
 * Primary: kept-day RATE (rewards consistency, not volume).
 * Tiebreak: cheaper protein wins; then longer streak; then more kept days.
 * Returns <0 if a outranks b. Pure, total, deterministic.
 */
export function rankCompare(a: RankStats, b: RankStats): number {
  const rate = (s: RankStats) => (s.loggedDays ? s.keptDays / s.loggedDays : 0);
  const ra = rate(a), rb = rate(b);
  if (ra !== rb) return rb - ra;                 // higher rate first
  const ca = a.costPerProtein ?? Infinity;
  const cb = b.costPerProtein ?? Infinity;
  if (ca !== cb) return ca - cb;                 // cheaper protein first
  if (a.currentStreak !== b.currentStreak) return b.currentStreak - a.currentStreak;
  return b.keptDays - a.keptDays;
}

/** Single sortable Redis ZSET score derived from the same comparator’s
 *  priority order. Higher score = better rank. Bit-packs the tiers so the
 *  ZSET ordering can never disagree with rankCompare(). */
export function rankScore(s: RankStats): number {
  const rate = s.loggedDays ? s.keptDays / s.loggedDays : 0;            // 0..1
  const cheap = s.costPerProtein == null ? 0 : 1 / (1 + s.costPerProtein); // 0..1, higher=cheaper
  const streak = Math.min(s.currentStreak, 999) / 1000;                 // 0..~1
  // weight tiers so primary always dominates tiebreaks
  return rate * 1e6 + cheap * 1e3 + streak;
}
```

> Eligibility gate (Designer A's volume gate) lives in the API, not core: efficiency placement requires `keptDays >= 5` in the season; below that a user appears on the board but is sorted into an "unranked / keep going" bucket.

---

## Data model & provenance (additive to the canonical `Entry`)

The `Ledger` / `Entry` shape from `src/types.ts` stays canonical. Server rows ARE `Entry` plus provenance columns. Bump `Ledger.version` to `2` with a `migrate()` that defaults legacy rows to `source: 'freetext'` (per the AGENTS.md invariant on shape changes).

```ts
// Additive provenance fields. Optional so existing ledger.json stays valid.
export interface EntryProvenance {
  source: 'recipe' | 'freetext';   // legacy + off-library default to 'freetext'
  recipeSlug?: string;             // FK into the curated content library
  servings?: number;              // multiplier, server-bounded 0.25..4
  verifiedMacros: boolean;         // true only when source === 'recipe' & recomputed
  recipeVersion?: number;          // pin to the recipe row version logged against
}
// Entry2 = Entry & Partial<EntryProvenance>  (client may send; server is authoritative)
```

For a `source: 'recipe'` entry the server **derives** the scored numbers and overwrites whatever the client sent:

```
calories = recipe.perServing.calories * servings
protein  = recipe.perServing.protein  * servings
cost     = recipe.estCostPerServing   * servings   // best-effort; see risks
zeroWaste = recipe.zeroWasteHero ? true : clientClaim   // recipe can attest waste
```

### SQL schema (Neon Postgres — truth)

```sql
create table users (
  id           text primary key,          -- Clerk user id
  handle       text unique not null,
  tz           text not null default 'UTC',
  created_at   timestamptz not null default now()
);

-- Server-authoritative mirror of src/content (Recipe). Versioned so a logged
-- entry’s displayed numbers can’t drift when the library is edited.
create table recipes (
  slug             text not null,
  version          int  not null,
  title            text not null,
  per_serving_cal  int  not null,
  per_serving_pro  numeric not null,
  est_cost_serving numeric,               -- nullable: best-effort
  zero_waste_hero  boolean not null default false,
  primary key (slug, version)
);

-- Canonical Entry shape + provenance. One row per (user, calendar date).
create table ledger_entries (
  id            text primary key,          -- entry.makeId(), idempotency key
  user_id       text not null references users(id),
  date          date not null,             -- local YYYY-MM-DD
  week          text not null,             -- season key, e.g. "Week 1 — Pasta"
  dish          text not null,
  calories      int  not null,             -- server-derived when source='recipe'
  protein       numeric not null,
  cost          numeric not null,
  zero_waste    boolean not null,
  -- provenance
  source        text not null check (source in ('recipe','freetext')),
  recipe_slug   text,
  recipe_version int,
  servings      numeric,
  verified      boolean not null default false,
  -- audit: keep what the client originally sent next to derived numbers
  client_calories int, client_protein numeric, client_cost numeric,
  flag_count    int not null default 0,
  created_at    timestamptz not null default now(),
  foreign key (recipe_slug, recipe_version) references recipes(slug, version),
  unique (user_id, date)                   -- one entry per calendar day per user
);

-- Denormalized, precomputed standings. Re-rolled on every write to that
-- user's season. Columns mirror RankStats + summarize() outputs.
create table standings (
  user_id        text not null references users(id),
  season_id      text not null,            -- = week label
  cohort_id      text not null,            -- bounded room (~200) or league id
  kept_days      int  not null,
  logged_days    int  not null,
  current_streak int  not null,
  cost           numeric not null,
  calories       int  not null,
  protein        numeric not null,
  cost_per_kcal  numeric,
  cost_per_protein numeric,
  verified       boolean not null,         -- true if ALL season entries recipe-anchored
  rank_score     numeric not null,         -- = rankScore(stats), mirror of comparator
  updated_at     timestamptz not null default now(),
  primary key (user_id, season_id, cohort_id)
);

create table leagues (
  id          text primary key,
  name        text not null,
  join_code   text unique not null,        -- single shareable invite link
  tz          text not null default 'UTC', -- creator tz for weekly rollover
  is_house    boolean not null default false, -- default room so solo signup isn't empty
  created_by  text references users(id),
  created_at  timestamptz not null default now()
);
create table league_members (
  league_id text references leagues(id),
  user_id   text references users(id),
  joined_at timestamptz not null default now(),
  primary key (league_id, user_id)
);

-- Frozen, immutable end-of-season snapshot (bragging rights can’t be retro-edited).
create table challenge_runs (
  league_id  text references leagues(id),
  season_id  text not null,
  standings_json jsonb not null,           -- ordered final board
  closed_at  timestamptz not null,
  primary key (league_id, season_id)
);
```

Redis (Upstash) holds one ZSET per `(season_id, cohort_id)` scored by `rankScore`, plus a small cron-built global "efficiency hall of fame" (top-100 best `cost_per_protein` among `verified` standings). Postgres is always authoritative; a lost cache costs one rebuild query, never data.

---

## API surface (Vercel Functions)

```
POST   /api/entries                      upsert a day (idempotent by entry.id);
                                         server derives+verifies if recipeSlug set,
                                         then re-rolls this user's season standings
DELETE /api/entries/:id                  remove + re-roll standings
GET    /api/seasons/current              active season id + theme (from activeWeek/WeekPlan)

GET    /api/leagues/:id/board?season=…   top-N + rank-of-me (ZSET; verified board)
GET    /api/leagues/:id/board/honor?…    free-text / unverified board (clearly labeled)
POST   /api/leagues                       create league -> join_code
POST   /api/leagues/join                  body { joinCode }  (auto-joins house league on signup)

GET    /api/cards/day/:entryId.png        OG "plated day" card (server-rendered PNG)
GET    /api/cards/league/:id.png          OG "league standings" card

POST   /api/entries/:id/flag             peer flag (soft-hide at 3+, min account age/volume)

# cron (vercel.json)
POST   /api/cron/season-rollover         Sun: freeze challenge_runs, open next season, notify
POST   /api/cron/reconcile               nightly: rebuild active ZSETs from standings
POST   /api/cron/hall-of-fame            rebuild global verified top-100
```

### Write-path contract (the only scoring path)

```ts
// POST /api/entries — pseudo-contract; reuses core verbatim
async function postEntry(req): Promise<EntryResult> {
  const claim = req.body as Entry2;                 // client-sent
  let e: Entry & EntryProvenance;

  if (claim.recipeSlug) {                            // RECIPE-ANCHORED -> verified
    const r = await getRecipe(claim.recipeSlug);     // server mirror, pinned version
    const servings = clamp(claim.servings ?? 1, 0.25, 4);
    e = deriveFromRecipe(r, servings, claim);        // overwrites cal/pro/cost
  } else {                                           // FREE-TEXT -> unverified
    e = { ...claim, source: 'freetext', verified: false };
  }

  const v = validateEntry(e);                        // <-- core/ledger.ts
  if (!v.ok) return badRequest(v.errors);
  if (!plausible(e)) e.flag_count = 1;               // server sanity bounds

  await advisoryLock(user.id, e.week);               // serialize per-user/season
  await upsertRow(e);                                // unique(user_id,date) enforces 1/day
  const ledger = await loadSeasonLedger(user.id, e.week);
  const stats  = computeRankStats(ledger);           // dayPasses + summarize + currentStreak
  await writeStandings(stats);                        // Postgres first…
  await zsetUpdate(e.week, cohortOf(user), rankScore(stats)); // …then Redis
  return { entry: e, stats };
}
```

`computeRankStats` is a thin wrapper that calls the pure core (`sortedByDate` → `dayPasses` per entry → `summarize` → `currentStreak`) and assembles a `RankStats`. SQL `ORDER BY rank_score DESC` mirrors `rankScore`; any "explain my rank" UI uses `rankCompare` so the explanation can never disagree with the order.

---

## Phased build order

1. **Engine-sharing + identity.** Extract `core/` + `types.ts` into `@cucina/core`; add `rankCompare` / `rankScore` / `RankStats` with tests in `ledger.test.ts`. Wire Clerk. No boards yet. (De-risks the moat refactor before anything depends on it.)
2. **Trusted write path.** Neon schema, server recipe mirror seeded from the 7 Italian weeks, `POST/DELETE /api/entries` deriving recipe-anchored numbers and re-rolling `standings`. `unique(user_id,date)` + plausibility bounds. API-backed sibling of `browserStore.ts` that POSTs entries (single-user localStorage path stays intact).
3. **Boards.** Redis ZSET cache; `GET league board` (verified) + `/honor` (free-text). Default **house league** so a solo signup sees a populated, winnable room. Volume gate (`keptDays >= 5`).
4. **Seasons & cadence.** `season-rollover` + `reconcile` crons; `challenge_runs` snapshots; season = `activeWeek` / `WeekPlan` label.
5. **Social loop.** `@vercel/og` plated-day + standings cards; invite-by-`join_code` leagues; flag button + audit fields; email-on-rollover.
6. **Hardening.** Hall-of-fame cron; recipe-version pinning; honor-board soft-hide moderation; backfill cron for when a `core` rule changes.

---

## Open seams / to join later

- **Accounts pillar owns Clerk wiring** and the API-backed `browserStore` sibling; here they are named dependencies, not specified. The `users` table assumes a stable Clerk id.
- **Content/AI pillar owns the recipe library & its versioning.** Provenance is only as good as **library coverage** — if the curated library is thin, most real meals fall to free-text and the verified board looks sparse. The `recipes` mirror + `recipe_version` pin is the join point; backfill of legacy `ledger.json` days to `verified` is left as a manual opt-in, never auto-guessed.
- **Cost is the softest number even when recipe-anchored** (`estCostPerServing` is best-effort, pantry staples amortized via `spansWeeks`). Cost boards measure the *plan you followed*, not who is poorest; frame copy accordingly. Ranking primary is kept-rate, not cost, partly to dodge this.
- **Cross-cuisine normalization deferred.** Efficiency boards are scoped within a themed-week season; comparing `$/1000kcal` across cuisines once non-Italian weeks exist is murky and punted.
- **Tiebreak encoding is the load-bearing risk.** `rankScore` bit-packing must stay in lockstep with `rankCompare` and the SQL `ORDER BY`; a single golden test set should assert all three agree. Switching the *primary* metric per board would need multiple ZSETs / a rebuild — one default ordering ships, metric-toggle boards later.
- **Timezone / season-boundary correctness.** Entries are local `YYYY-MM-DD` with no tz; season is derived from the `week` label (canonical) not wall-clock to avoid mis-bucketing. League rollover uses the creator's tz, accepting edge unfairness near Sunday midnight; late/backdated writes into a closed season are frozen-rank (append allowed, rank not).
- **Anti-cheat is honest, not airtight.** Provenance + plausibility bounds + one-entry-per-day + volume gates + audit trail + peer-flag soft-hide. No receipt/photo verification, no anti-sybil beyond Clerk, plausibility constants hand-tuned. You cannot verify someone *ate* the food — leagues are kept small so social accountability does the rest.
- **Privacy.** Plated-day cards and standings expose what/how cheaply someone eats plus a handle; sharing is explicit per-card, leagues invite-only by default, a private mode is required before any global/open division ships.
- **Lean-deps invariant.** This is a real backend (Postgres + Redis + auth + OG rendering) — a sanctioned, conscious jump from "react + react-dom only" per AGENTS.md's "don't add a backend unless asked." It is isolated so the static single-user path still builds; `@cucina/core` itself stays dep-free.
