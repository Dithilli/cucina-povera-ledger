# Auth & Multi-User Model

> Pillar design doc. Status: direction (rough edges intentional). Owner: David.
> Reuses the moat in `src/core/ledger.ts` verbatim — server-side, never forked.

## Recommendation

Make **ownership a property of the data, and rent the identity**. The canonical
unit becomes a per-user `LedgerDoc` — the existing `{ settings, entries }` shape
wrapped in a thin ownership/visibility envelope keyed by an opaque, external
`userId` — so `core/ledger.ts` keeps operating on the inner `Ledger` slice
byte-for-byte. Identity itself is **not built**: we adopt **Clerk** (hosted
sign-in, sessions, OAuth/email, recovery, GDPR-deletable user records) in front
of a thin **Next.js App Router app on Vercel**, mint the stable Clerk `userId`,
and use it as the partition key for one `LedgerDoc` per user persisted as a
single `jsonb` document in **Vercel Postgres (Neon)**. The server imports
`core/ledger.ts` unchanged and becomes a third consumer of the engine alongside
the UI and CLI. Leaderboards never read raw docs: they read a separate,
opt-in, **derived `LeaderboardRow` projection** computed by calling the same
`summarize`/`currentStreak` — so private day-level data is structurally
incapable of leaking. We bump `Ledger.version` 1→2 and add a `migrate()` arm
that wraps today's `public/ledger.json` into the founding user's seed doc.

## Why this spine (and what was grafted)

Three lenses were proposed. We took the **data-model-first spine** (Designer 3)
because it is the only one that respects the AGENTS.md invariants on its own
terms — version bump + migration, the `entries`/`settings` split as a real
boundary, and a leaderboard that is a *projection*, not shared raw data. That
lens, however, deliberately left the identity provider unspecified. So:

- **Grafted from the Clerk lens (Designer 1):** the concrete platform. Rent
  auth (Clerk), host on Next.js/Vercel, treat `userId` as an **opaque external
  partition key** we never mint and store no PII against. Authorization = "row
  owner is the verified token subject," full stop. This fills the exact hole the
  data-model lens left open and is the fastest credible path to shipping.
- **Grafted from the magic-link lens (Designer 2):** (a) **single-document
  `jsonb` storage** (persist the whole `LedgerDoc`, don't normalize entries yet)
  so `Ledger.version` migrations keep working verbatim; (b) **last-write-wins
  with an `updated_at` optimistic-concurrency check** for the two-tabs case;
  (c) the **route discipline** — the `userId` comes *only* from the verified
  session, every ledger route is gated by one middleware, and cross-user reads
  go through an explicitly separate, projection-only path that 401s/aggregates
  rather than reusing the per-user read.

What we explicitly did **not** do: build our own password/session/magic-link
stack (Designer 2's core) — correct and cheap, but it's net-new security
surface a solo maintainer owns forever, and Clerk gives the same `userId`
contract for ~10 lines of middleware. And we did **not** normalize entries into
their own table yet (a later optimization once leaderboards need cross-user SQL).

## Data model

`core/ledger.ts` consumes a `Ledger` = `{ version, settings, entries }`. We keep
that inner shape and wrap it. Add to `src/types.ts`:

```ts
// src/types.ts  (additions)

/** Opaque, provider-issued user id (e.g. Clerk "user_2abc…"). We never mint it. */
export type UserId = string;

/** Whole-doc privacy. Default 'private' → no leaderboard row exists. */
export type Visibility = "private" | "aggregate" | "public";

/**
 * The canonical multi-user unit: one per user. The inner { settings, entries }
 * is EXACTLY the Ledger slice core/ledger.ts already operates on — so every pure
 * function (summarize, currentStreak, upsertEntry, dayPasses, weekGroups) is
 * reused unchanged by passing the doc as its Ledger-shaped slice.
 */
export interface LedgerDoc {
  userId: UserId;
  /** Schema version of the DOC envelope. Was Ledger.version=1; envelope is v2. */
  version: 2;
  visibility: Visibility;
  settings: Settings;
  entries: Entry[];
  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp — drives optimistic concurrency
}

/**
 * Public-safe, DENORMALIZED projection. Note: NO `entries` field exists on this
 * type at all — the type system makes leaking day-level data impossible on the
 * public read path. Derived, never stored as truth.
 */
export interface LeaderboardRow {
  userId: UserId;
  displayName: string;     // read from the profile record at projection time
  activeWeek: string;
  daysKept: number;        // count of entries where dayPasses() is true
  currentStreak: number;   // from core/currentStreak
  costPerKcal: number | null;   // from core/summarize
  costPerProtein: number | null;
  weeklyBudget: number;    // published so ranks are interpretable (see Risks)
  scoringVersion: number;  // core scoring rev, for lazy re-projection on drift
  updatedAt: string;
}
```

Identity/profile data (display name, avatar) lives in a **separate thin profile
record owned by this pillar**, not inside `LedgerDoc` — so we don't couple
identity to the ledger and don't duplicate it into entries:

```ts
// profile is keyed by the SAME opaque userId; Clerk owns the auth record.
export interface Profile {
  userId: UserId;
  displayName: string;
  avatarUrl?: string;
  createdAt: string;
}
```

## SQL schema (Vercel Postgres / Neon)

Store the whole doc as `jsonb`. One row per user. No entries table yet.

```sql
-- profiles: our minimal mirror keyed by Clerk's opaque user id. No passwords/PII.
create table profiles (
  user_id      text primary key,         -- Clerk userId; never minted by us
  display_name text not null,
  avatar_url   text,
  created_at   timestamptz not null default now()
);

-- one LedgerDoc per user, persisted whole so Ledger.version migrations keep working
create table ledger_docs (
  user_id    text primary key references profiles(user_id) on delete cascade,
  doc        jsonb not null,             -- exactly the LedgerDoc JSON
  visibility text  not null default 'private',
  updated_at timestamptz not null default now()  -- optimistic-concurrency token
);

-- materialized public projection; ONLY rows for non-private docs land here.
create table leaderboard_rows (
  user_id         text primary key references profiles(user_id) on delete cascade,
  row             jsonb not null,         -- exactly the LeaderboardRow JSON
  scoring_version int  not null,
  updated_at      timestamptz not null default now()
);
create index leaderboard_active_week on leaderboard_rows ((row->>'activeWeek'));
```

Optimistic concurrency on save (the two-tabs guard grafted from Designer 2):

```sql
update ledger_docs
   set doc = $newDoc, visibility = $vis, updated_at = now()
 where user_id = $uid and updated_at = $expectedUpdatedAt;
-- 0 rows affected ⇒ 409 Conflict; client re-fetches and retries.
```

## API routes (Next.js App Router, Node runtime)

`userId` is read **only** from `auth().userId` (the verified Clerk session),
never from a body or query param. One middleware gates every `/api/ledger*`
route. Cross-user reads go through a **separate projection-only** path.

```
# Clerk-managed (prebuilt UI, no code): /sign-in, /sign-up, <UserButton/>

GET  /api/me                 -> { userId, displayName } | 401
GET  /api/ledger             -> { doc: LedgerDoc, updatedAt }   (own doc only)
PUT  /api/ledger             body { doc, expectedUpdatedAt }
                                -> 200 { doc, updatedAt } | 409 conflict
POST /api/ledger/entry       body { entry, expectedUpdatedAt }
                                -> validates via core, upserts, re-projects
DELETE /api/ledger/entry/:id body { expectedUpdatedAt }
PATCH /api/ledger/settings   body { patch, expectedUpdatedAt }
PATCH /api/ledger/visibility body { visibility }  -> publishes/redacts projection

# Cross-user — read-only, PROJECTION ONLY. Returns LeaderboardRow[], never docs.
GET  /api/leaderboard?scope=global|week:<label>  -> { rows: LeaderboardRow[] }
```

```ts
// middleware.ts (the entire authorization model)
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtected = createRouteMatcher(["/api/ledger(.*)", "/api/me"]);
export default clerkMiddleware((auth, req) => {
  if (isProtected(req)) auth().protect(); // 401s if no valid session
});
// Note: /api/leaderboard is public but only ever serves LeaderboardRow[].
```

```ts
// getUserId — the ONLY way a handler learns who is calling
import { auth } from "@clerk/nextjs/server";
export function requireUserId(): UserId {
  const { userId } = auth();
  if (!userId) throw new Response("unauthorized", { status: 401 });
  return userId; // opaque external id == row partition key == authorization
}
```

## How it reuses the pure engine (`src/core/ledger.ts`)

The engine is imported **unchanged** server-side. The doc's inner slice *is* a
`Ledger`, so every existing function takes it directly. Two small **pure**
additions land in core (with tests, per AGENTS.md), not new logic forks:

```ts
// src/core/ledger.ts — additions (still pure, no I/O)

import type { LedgerDoc, LeaderboardRow } from "../types";

/** v1 (bare Ledger) -> v2 (LedgerDoc): wrap, default to private. No data lost. */
export function migrate(raw: unknown, seedUserId: UserId): LedgerDoc {
  const v = (raw as { version?: number }).version;
  if (v === 2) return raw as LedgerDoc;
  const old = raw as Ledger; // version 1
  const now = new Date().toISOString();
  return {
    userId: seedUserId, version: 2, visibility: "private",
    settings: old.settings, entries: old.entries,
    createdAt: now, updatedAt: now,
  };
}

/** Public-safe projection. Calls the SAME summarize/currentStreak — one scoring
 *  definition, reused. Returns a type with no entries → cannot leak day data. */
export const SCORING_VERSION = 1;
export function projectLeaderboardRow(
  doc: LedgerDoc, displayName: string,
): LeaderboardRow {
  const ledger: Ledger = { version: 1, settings: doc.settings, entries: doc.entries };
  const s = summarize(doc.entries);
  const daysKept = doc.entries.filter((e) => dayPasses(e, doc.settings)).length;
  return {
    userId: doc.userId, displayName,
    activeWeek: doc.settings.activeWeek,
    daysKept, currentStreak: currentStreak(ledger),
    costPerKcal: s.costPerKcal, costPerProtein: s.costPerProtein,
    weeklyBudget: doc.settings.weeklyBudget,
    scoringVersion: SCORING_VERSION, updatedAt: doc.updatedAt,
  };
}
```

A write handler is then: load doc → run `validateEntry` + `upsertEntry`
(core) → bump `updatedAt` → if `visibility !== 'private'` re-run
`projectLeaderboardRow` and upsert `leaderboard_rows` → persist with the
optimistic-concurrency `update`. **The server computes scores by no path other
than calling core.** `core/ledger.ts` stays pure: `Date.now()`/`Math.random()`
in `makeId()` and `structuredClone` exist in the Node serverless runtime — pin
API routes to the **Node runtime** (not Edge) to be safe.

`browserStore.ts` becomes one implementation of a provider-agnostic
`StoreClient` interface (`loadDoc`, `saveDoc`, `setVisibility`,
`getLeaderboard`); the API client is another. The CLI keeps writing the
committed `public/ledger.json` as the founding/seed content user; wiring it to
the API with a service token is deferred.

## Phased build order

1. **Schema-first, no platform.** Add `LedgerDoc`/`LeaderboardRow`/`Profile`/
   `Visibility` to `src/types.ts`; add `migrate()` + `projectLeaderboardRow()` +
   `SCORING_VERSION` to `core/ledger.ts` with tests. Extend `scripts/ledger.ts`
   with a one-shot that wraps `public/ledger.json` into a seed v2 doc. **No
   backend yet** — the static site still works.
2. **Platform skeleton.** Scaffold Next.js App Router on Vercel; provision Clerk
   + Vercel Postgres via the Vercel Marketplace (env vars auto-injected). Drop
   in `<SignIn/>`/`<UserButton/>` and `middleware.ts`. Prove `GET /api/me`.
3. **Per-user ledger.** Create `profiles`/`ledger_docs`; implement
   `requireUserId`, `GET /api/ledger`, `PUT/POST/PATCH/DELETE` with core reuse
   and the `expectedUpdatedAt` optimistic-concurrency guard. Swap the React app
   from `fetch(ledger.json)` to the authenticated API client.
4. **Import + projection.** One-time "import my local ledger" (POST the
   localStorage doc to seed the row). Add `leaderboard_rows`, the visibility
   patch, and `GET /api/leaderboard` reading projections only.
5. **Hardening (later).** Clerk `user.deleted` webhook → cascade-delete the doc;
   rate-limit notes; a canonical "challenge mode" for fair ranks.

## Open seams / to join later

- **`displayName` source & profile sync.** A Clerk `user.created` webhook should
  upsert `profiles`; the leaderboard reads `displayName` at projection time.
  Until that webhook exists, seed profiles manually. Uniqueness/moderation of
  display names is punted to this pillar.
- **Leaderboard fairness.** `costPerKcal`/`streak` aren't apples-to-apples
  across users with different `calorieTarget`/`proteinFloor`/`weeklyBudget` — a
  user can game rank by lowering their own floor. Join later via a **canonical
  "challenge mode"** (fixed target/floor/budget) required to appear on the
  *global* board; custom settings only show on self/private views. We publish
  `weeklyBudget` on the row now so ranks stay interpretable in the interim.
- **Projection drift.** `scoringVersion` is on every row; when a core scoring
  rule changes, re-project lazily on read-mismatch or backfill on deploy. Never
  let the board score by any path but core.
- **Multi-tab / multi-device conflicts.** `updated_at` last-write-wins +
  `expectedUpdatedAt` 409 is v1. Entries already carry stable ids, so a future
  per-entry merge needs no reshape. No CRDT.
- **Entry normalization.** Single-`jsonb`-doc + LWW is fine until leaderboards/
  analytics need cross-user SQL; normalizing into an `entries(user_id, …)` table
  is a deferred optimization, not a reshape of the canonical type.
- **CLI auth.** `scripts/ledger.ts` stays the committed-`ledger.json` seed-user
  path; pointing it at the API with a service token is later.
- **Account lifecycle.** Clerk owns identity recovery/MFA/email-change. Our only
  obligation is the `user.deleted` webhook → `on delete cascade` already wired in
  the schema; the webhook handler itself is a stub.
- **Vendor lock-in.** We depend only on a stable `userId` string + standard JWT
  verification; no Clerk-specific data in our schema. Swapping OIDC providers is
  a remap of the `user_id` column, not a rewrite. Cost scales with MAU (unlike
  today's $0 static site) — a known, accepted trade.
- **Hosting migration is the real cost.** Moving GitHub Pages → Next.js/Vercel
  changes deploy, CI (`.github/workflows/deploy.yml`), and storage at once; the
  auth slice is small, the platform change is the bulk of the work.
