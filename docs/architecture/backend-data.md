# Backend & Data Layer

> Pillar design doc. Status: buildable direction, rough edges intentional.
> Owns: persistence, multi-user accounts, the server-side scoring authority,
> the storage seam, and the read/write API the leaderboard and AI menus build on.

## Recommendation (TL;DR)

Own a small, portable backend: **serverless Postgres (Neon) behind ~6 thin
serverless functions, with `src/core/ledger.ts` promoted verbatim into a shared
`@cucina/core` workspace package that runs in the browser AND on the server as
the single scoring authority.** Store the canonical `Ledger` shape relationally
(one `user_settings` row + one row per `entry`) and **reassemble the exact
`Ledger` object from `src/types.ts` at the storage boundary**, so nothing above
`storage/` changes — `App.tsx`, the `WeekChart`, and the core are untouched. The
client swaps `browserStore.ts` for an `apiStore.ts` that speaks the same async
`loadLedger()/saveWorkingCopy()` contract. This is Proposal #2's spine (server
owns scoring, control over cost/data, relational storage for leaderboards),
grafted with Proposal #3's discipline (the existing storage seam is the only
thing that changes; keep `public/ledger.json` as seed + anonymous fallback;
last-write-wins with a version guard) and Proposal #1's content/Edge ideas
(mirror the `Recipe/WeekPlan` library into read-only tables the AI drafter
queries; numbers come from `recipes`, never the model). We reject a JSONB blob
(it defeats per-entry leaderboard queries), reject Supabase RLS-as-authz (the
authz logic disappears into SQL policies, which is the one thing this product
can least afford to get subtly wrong), and reject a Next.js framework migration
(unnecessary — Vite SPA stays, functions are framework-free Route Handlers).

## Why this spine, and what got grafted

The product's moat is the **pure scoring engine**. The single most important
architectural decision is therefore: *who is allowed to decide a day is "kept"?*
A leaderboard makes scores a competitive surface, and a static client that POSTs
its own `streak` is worthless. So the **server must be the sole scoring
authority** — and because `core/ledger.ts` is already I/O-free (AGENTS.md golden
rule), reusing it server-side is nearly free. That is Proposal #2's core insight
and it wins.

What we take from the other lenses:

- **From #3 (thinnest API):** the migration blast radius must stay tiny.
  `storage/browserStore.ts` is *already* the only I/O seam and already exposes
  `loadLedger(): Promise<Ledger>` / `saveWorkingCopy(ledger)`. We honor that:
  the entire client-side change is one new file (`apiStore.ts`) plus an auth
  provider. We keep `public/ledger.json` as the seed for a new user's first
  ledger and as the **anonymous/offline fallback**, preserving the zero-backend
  path. We adopt **last-write-wins gated by a `version`/`updatedAt` check** (409
  on mismatch) instead of a CRDT — correct enough for a single-user-per-account
  app.
- **From #1 (BaaS reuse):** mirror the curated content library
  (`Recipe`/`WeekPlan`/`ContentDoc`) into **read-only tables** so the AI drafter
  can query vetted dishes by role/cuisine/macros server-side, and enforce the
  hybrid rule **at the schema level**: generated menus reference `recipes.slug`
  by FK and carry **no macro/cost numbers of their own**. We also keep #1's
  "run the engine in both places" framing — but via a shared package, not by
  pinning ourselves to one vendor's Edge runtime.

What we reject and why:

- **JSONB-blob storage (#3's main decision):** defeats the per-entry queries the
  leaderboard and "no dinner repeats" need, and forces whole-ledger PUTs. We
  keep #3's *philosophy* (Ledger is the wire contract) but normalize storage.
- **RLS-as-the-only-authz (#1):** the entire authorization story living in SQL
  policies is the highest-blast-radius place for a silent leak. We prefer a
  single `getUserId(req)` helper + `WHERE user_id = $session` on every query,
  which is greppable, testable in plain TS, and portable.
- **Next.js/framework migration (#2 as written):** not needed. The Vite SPA can
  stay on its current host; functions are deployed alongside as plain handlers.

## Chosen architecture

```
                         ┌─────────────────────────────────────────┐
  Browser (Vite SPA,     │  @cucina/core  (UNCHANGED ledger.ts +    │
  unchanged above        │  types.ts + constants.ts) — pure, shared │
  storage/)              └─────────────────────────────────────────┘
        │                          ▲                    ▲
        │ optimistic dayPasses()   │ import             │ import (verbatim)
        ▼                          │                    │
  apiStore.ts ──HTTPS+JWT──►  serverless functions  ──► Neon Postgres
   (replaces                  /api/*  (~6 handlers)      (relational; Ledger
    browserStore)             - sole SCORING authority    reassembled at the
        │                     - getUserId(req) authz      storage boundary)
        ▼                     - validateEntry + zod
  localStorage cache /        - calls Anthropic for
  anonymous fallback            menu DRAFTS (key server-only)
  (public/ledger.json)
```

- **Hosting:** the React+Vite SPA stays a static build. Serverless functions
  live under `/api/*` (Vercel Functions or Cloudflare Workers — both run TS ESM
  and import `@cucina/core` fine). No Express/Nest/Next required.
- **DB:** Neon Postgres via its driverless HTTP client
  (`@neondatabase/serverless`) so each invocation gets a connection without a
  long-lived pool — the right pattern for per-invocation serverless and avoids
  "too many connections" under leaderboard fan-out. Scales to zero for cost.
- **Auth:** Clerk (or any provider issuing a verifiable JWT). The function trusts
  the **verified** user id from the token, never a `userId` in the body. That id
  is the row key.
- **Migration:** one idempotent script lifts the committed `public/ledger.json`
  into a seed owner user (settings + entries), inside a transaction, skipping on
  `id` conflict so reruns are safe. `ledger.json` then becomes a frozen seed/
  fixture, no longer a write path for the app.

### SQL schema (the storage layout)

The Ledger shape stays the *contract*; this is just the *storage*.

```sql
-- Accounts (id comes from the auth provider's verified subject).
create table users (
  id          text primary key,            -- auth provider subject (Clerk userId)
  email       text unique,
  created_at  timestamptz not null default now()
);

-- 1:1 split of today's Settings.
create table user_settings (
  user_id        text primary key references users(id) on delete cascade,
  calorie_target int     not null default 2000,
  protein_floor  int     not null default 100,
  weekly_budget  numeric(8,2) not null default 55,
  active_week    text    not null default 'Week 1 — Pasta',
  -- optimistic-concurrency guard for the whole user-ledger (see PUT semantics)
  version        int     not null default 0,
  updated_at     timestamptz not null default now()
);

-- One row per Entry. Mirrors src/types.ts Entry exactly, plus owner + derived.
create table entries (
  id          text not null,               -- makeId() string from core
  user_id     text not null references users(id) on delete cascade,
  date        date not null,               -- YYYY-MM-DD, local
  week        text not null,
  dish        text not null default '',
  calories    int  not null check (calories >= 0),
  protein     int  not null check (protein  >= 0),
  cost        numeric(8,2) not null check (cost >= 0),
  zero_waste  boolean not null,
  -- DERIVED CACHE, written server-side by @cucina/core.dayPasses(). Never trusted
  -- from the client. Recomputed when this entry OR the user's settings change.
  passed      boolean not null,
  created_at  timestamptz not null default now(),
  primary key (user_id, id)                 -- scopes makeId() per user; no cross-user collision
);
create index entries_user_date on entries (user_id, date);

-- Curated content library, mirrored read-only from src/content (see #1's idea).
-- Cost/macro numbers live ONLY here; the AI drafter references slugs.
create table recipes (
  slug                  text primary key,
  cuisine               text not null,
  title                 text not null,
  blurb                 text not null,
  servings              int  not null,
  per_serving_calories  int  not null,
  per_serving_protein   int  not null,
  est_cost_per_serving  numeric(8,2),
  roles                 text[] not null,
  ingredients           jsonb not null,    -- IngredientLine[]
  method                jsonb not null,    -- string[]
  zero_waste_hero       boolean not null default false,
  tags                  text[] not null default '{}'
);
create table week_plans  ( slug text primary key, number int, cuisine text,
                           theme text, title text, body jsonb not null );
create table content_docs( slug text primary key, title text, kind text,
                           body text not null );

-- AI menu DRAFTS. References recipes by slug; carries NO macro/cost numbers.
-- The hybrid "AI never invents numbers" rule is enforced structurally: a day
-- slot is a recipe slug (FK), and the est macros shown come from recipes.
create table generated_menus (
  id          text primary key,
  user_id     text not null references users(id) on delete cascade,
  week_label  text not null,
  status      text not null default 'draft',     -- 'draft' | 'accepted'
  days        jsonb not null,                    -- [{day, dinnerSlug, lunchSlug?, ...}]
  created_at  timestamptz not null default now()
);
```

> Note: `entries.passed` is a denormalized cache, not a source of truth. It is
> recomputed on entry write and re-swept for a user whenever their `settings`
> change (raising `proteinFloor` invalidates old "passed" rows). Summaries on
> read are computed by `core.summarize`; only the leaderboard reads `passed` for
> speed.

### API surface (~6 functions, all auth-scoped)

Every route derives the user from the verified token; none trust a body `userId`.

```
GET    /api/ledger
       -> 200 { ledger: Ledger, version: number }
       Reassembles user_settings + entries into the canonical Ledger
       (src/types.ts). Seeds from public/ledger.json defaults if the user is new.

PUT    /api/ledger            body: { ledger: Ledger, baseVersion: number }
       -> 200 { ledger: Ledger, version: number }   (server re-scored)
       -> 409 { error: 'stale', ledger, version }   (baseVersion != current)
       Full-ledger save with optimistic guard (#3). Server runs
       core.validateEntry on every entry, recomputes core.dayPasses for each,
       writes derived `passed`, bumps version. Rejects invalid/impossible input.

POST   /api/entries           body: { date, week, dish, calories, protein, cost, zeroWaste }
       -> 201 { entry: Entry }
       Per-entry fast path (mirrors CLI `add`). zod + core.validateEntry,
       assigns makeId(), computes `passed` server-side, bumps user version.

PATCH  /api/settings          body: Partial<Settings>
       -> 200 { settings: Settings }
       Recomputes `passed` for all of the user's entries (see derived-cache note).

GET    /api/leaderboard?metric=streak|costPerKcal|costPerProtein[&week=]
       -> 200 { rows: LeaderboardRow[] }
       Server-computed ONLY, from trusted `passed` + raw entry rows via
       core.summarize / core.currentStreak. Never from client-sent scores.

POST   /api/menus/generate    body: { weekLabel, cuisine, days }
       -> 201 { menu: GeneratedMenu }
       Hybrid AI drafter: loads candidate `recipes` rows, calls Claude to
       SEQUENCE them, returns a draft referencing slugs. Anthropic key is a
       server secret. (Generation prompt/model wiring = AI pillar's job; this
       layer only guarantees numbers come from `recipes`, not the model.)
POST   /api/menus/:id/accept  -> 200 { menu }    (status draft -> accepted)
```

### Client storage seam (the only client change)

`apiStore.ts` implements the SAME contract `App.tsx` already calls, so the UI is
untouched. localStorage becomes an optimistic cache + anonymous/offline fallback.

```ts
// src/storage/apiStore.ts  — replaces browserStore.ts at the seam.
import type { Ledger } from "../types";
import { defaultLedger } from "../core/ledger";

let baseVersion = 0;

/** Same signature App.tsx already calls. Falls back to the committed seed. */
export async function loadLedger(): Promise<Ledger> {
  const token = await getAuthToken();           // from auth provider; null if logged out
  if (!token) return loadAnonymousSeed();        // public/ledger.json + localStorage overlay (today's behavior)
  const res = await fetch("/api/ledger", { headers: auth(token) });
  if (!res.ok) return loadAnonymousSeed();       // API down -> zero-backend path survives
  const { ledger, version } = await res.json();
  baseVersion = version;
  cacheLocally(ledger);                          // optimistic cache
  return ledger;
}

/** Same signature. Optimistic local write, then PUT with the version guard. */
export async function saveWorkingCopy(ledger: Ledger): Promise<void> {
  cacheLocally(ledger);                          // instant, survives refresh
  const token = await getAuthToken();
  if (!token) return;                            // anonymous: local-only, as today
  const res = await fetch("/api/ledger", {
    method: "PUT", headers: auth(token),
    body: JSON.stringify({ ledger, baseVersion }),
  });
  if (res.status === 409) {                      // stale -> refetch & let UI reconcile
    const { ledger: fresh, version } = await res.json();
    baseVersion = version; cacheLocally(fresh);
    throw new StaleLedgerError(fresh);           // App can prompt "your data changed elsewhere"
  }
  if (res.ok) baseVersion = (await res.json()).version;
}

// loadAnonymousSeed(), cacheLocally(), auth(), getAuthToken() are the small
// glue; export/clear/has helpers from browserStore.ts carry over unchanged.
```

### Reassembly at the storage boundary (server side)

```ts
// api/_lib/ledger-store.ts  — the rows <-> Ledger boundary. NOTHING above this knows storage is split.
import type { Entry, Ledger, Settings } from "@cucina/core/types";
import { dayPasses, validateEntry } from "@cucina/core";

export async function readLedger(userId: string): Promise<{ ledger: Ledger; version: number }> {
  const [s] = await sql`select * from user_settings where user_id = ${userId}`;
  const rows = await sql`select * from entries where user_id = ${userId} order by date`;
  const settings: Settings = {
    calorieTarget: s.calorie_target, proteinFloor: s.protein_floor,
    weeklyBudget: Number(s.weekly_budget), activeWeek: s.active_week,
  };
  const entries: Entry[] = rows.map(toEntry);
  return { ledger: { version: 1, settings, entries }, version: s.version };
}

export async function writeLedger(userId: string, ledger: Ledger, baseVersion: number) {
  // 1. validate every entry with the SAME core the client uses
  for (const e of ledger.entries) {
    const v = validateEntry(e);
    if (!v.ok) throw new BadRequest(v.errors);
  }
  // 2. score authoritatively server-side; client-sent "passed" is ignored
  const scored = ledger.entries.map((e) => ({ ...e, passed: dayPasses(e, ledger.settings) }));
  // 3. optimistic guard, then upsert settings(+version bump) and entries in a tx
  return tx(userId, ledger.settings, scored, baseVersion); // 409 if baseVersion stale
}
```

### Generator IO contract (hybrid, numbers-from-`recipes`)

The AI pillar owns the prompt; this layer guarantees the data contract.

```ts
// Input the drafter accepts (no numbers in -> the model can't smuggle macros in).
interface GenerateMenuRequest {
  weekLabel: string;
  cuisine: string;                 // e.g. "italian"
  days: number;                    // typically 7
  constraints?: { calorieTarget?: number; proteinFloor?: number; weeklyBudget?: number };
}
// Candidate set the server hands the model: vetted recipe rows ONLY.
interface RecipeCandidate { slug: string; title: string; roles: string[];
  perServing: { calories: number; protein: number }; estCostPerServing?: number; tags: string[]; }
// Output: the model returns SLUGS + sequencing only. Server re-attaches real
// macros/cost from `recipes` and validates the week against core thresholds.
interface GeneratedMenuDraft {
  id: string; weekLabel: string; status: "draft";
  days: { day: string; dinnerSlug: string; lunchSlug?: string; breakfastSlug?: string }[];
}
```

## How it reuses the pure engine (`src/core/ledger.ts`)

The engine is the moat; it is reused, never forked.

- **Promote, don't copy.** `core/ledger.ts` + `types.ts` + `constants.ts` move
  verbatim into a framework-free workspace package `@cucina/core` (pnpm/Turbo
  workspace). The browser, the CLI, and the `/api` functions all import the same
  compiled artifact. AGENTS.md's golden rule ("imported by both UI and CLI so
  they can never disagree") simply extends to a third consumer: the server. The
  file body does not change — it is already DOM/Node/React-free.
- **Server is the scoring authority.** `writeLedger` runs `validateEntry` and
  `dayPasses` on every write and persists the derived `passed`. The leaderboard
  ranks via `summarize` / `currentStreak`. The client may compute `dayPasses`
  optimistically for instant badge UX, but the leaderboard reads only
  server-computed values — so scoring is unforgeable (only the self-reported
  inputs are, which is acceptable for v1; tightened later by cross-checking
  against `recipes`).
- **Same tests, both sides.** `ledger.test.ts` runs against the packaged core in
  CI; an integration test asserts `POST /api/entries` returns the same `passed`
  flag that `core.dayPasses` computes locally — a tripwire against anyone
  "optimizing" scoring into raw SQL and causing the leaderboard to lie.

## Phased build order

1. **Extract `@cucina/core`.** Stand up the pnpm/Turbo workspace; move
   `ledger.ts`/`types.ts`/`constants.ts` verbatim; point `web` and the CLI at
   the package; keep `npm test` green. (No behavior change — pure refactor.)
2. **DB + migration.** Provision Neon; write the schema migration; write the
   idempotent `scripts/migrate-ledger.ts` that lifts `public/ledger.json` into a
   seed user. `ledger.json` becomes a frozen fixture.
3. **Functions: ledger read/write.** `GET/PUT /api/ledger` + `POST /api/entries`
   + `PATCH /api/settings`, with `getUserId`, zod, `validateEntry`, server-side
   `dayPasses`, and the version guard. Integration test for the `passed` parity.
4. **Auth + storage swap.** Wire Clerk; add `apiStore.ts`; keep `public/ledger.json`
   as anonymous/offline fallback. `App.tsx` unchanged. Ship multi-device writes.
5. **Leaderboard.** `GET /api/leaderboard` computed via `summarize`/`currentStreak`
   over trusted rows. In-memory/`GROUP BY` first; materialized view only if slow.
6. **Content tables + AI drafter shell.** Seed `recipes`/`week_plans`/`content_docs`
   from `src/content`; stand up `POST /api/menus/generate` returning slug-based
   drafts (model wiring handed to the AI pillar). Enforce numbers-from-`recipes`.

## Open seams / to join later

- **AI pillar — generator internals.** This doc fixes the schema, the
  `GenerateMenuRequest`/`GeneratedMenuDraft` IO contract, and the
  numbers-from-`recipes` guarantee. The prompt, model selection, ret(re)try, and
  the deterministic library-only fallback when the model call fails are the AI
  pillar's. Seam: `POST /api/menus/generate` + `generated_menus`.
- **Frontend pillar — draft→accept→activate loop & 409 reconcile UI.** The API
  returns drafts and throws `StaleLedgerError` on conflict; the UI for editing/
  accepting a drafted week, persisting it as the active week, and the
  "your data changed on another device" reconcile prompt are the frontend's.
- **New pure functions for cross-day constraints.** "No dinner repeats" and
  per-week budget are multi-entry/stateful; `core` scores a single day today.
  These must be added as PURE functions in `core/ledger.ts` (with tests), NOT as
  server-only SQL, or the leaderboard will diverge from the engine. Seam: new
  exports in `@cucina/core` consumed by both leaderboard and UI.
- **Ledger version migration story.** AGENTS.md mandates `migrate()` on load and
  `version: 1`. The client migration runs once before first upload; the SQL
  migrations become the new source of truth. A server-side ledger-version column
  + upgrade path is deferred until the first schema bump.
- **CLI repointing.** The CLI still writes `public/ledger.json` (agent/seed
  path). Wiring it to authenticate and write a specific user's rows via `/api`
  (with a service token) is a small later add — the core it calls is identical.
- **Scoring-input integrity.** v1 accepts self-reported calories/protein/cost
  (it's a personal challenge); scoring isn't forgeable but inputs are. Tighten by
  cross-checking logged entries against `recipes` macros/cost once the library is
  populated. Until then, leaderboard integrity is "scores honest, inputs trusted."
- **Rate limiting / quotas** on the Anthropic-backed `generate` route beyond
  provider defaults; per-user invocation caps are deferred.
- **localStorage→cloud import on first login** (bring an anonymous session's
  working copy into the account) is a later one-button add, not built now.
```

