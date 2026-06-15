# Architecture Decisions (ADR)

> **This file supersedes the stack picks in the pillar docs and `README.md`.**
> The swarm explored the space; these are the decisions we're building on.
> Governing principle: **build as little as possible — lean on mature OSS.**

## Decisions (2026-06-14)

| Area | Decision | Supersedes |
|---|---|---|
| Backend | **Supabase** (Postgres + Auth + RLS + Storage + Edge Functions) | Neon + Clerk |
| Frontend / host | **Keep the Vite + React SPA.** No Next.js migration. | Next.js App Router on Vercel |
| AuthZ | **Postgres Row-Level Security** policies | hand-written `requireUserId()` API guards |
| Types | **`supabase gen types typescript`** — generated from the DB schema | Drizzle / drizzle-zod / any ORM |
| Validation | **Zod** at trusted boundaries (Edge Function input, LLM output) | — |
| AI | **Raw Anthropic SDK** (`@anthropic-ai/sdk`), Claude Opus 4.8, tool-use for structured output, server-side only | Vercel AI SDK |
| Tests | **Vitest** (unchanged) | — |
| Solver | bespoke pure `core/planner.ts` (tiny search space; no dep worth it) | — |

## Why this builds less

Choosing Supabase collapses the swarm's biggest cost. Because one platform covers
auth + database + authz + functions:

- **The Next.js/Vercel migration is deleted** (swarm seam §5-A — the single largest
  cost — evaporates). The SPA stays as-is on its static deploy; Supabase is the backend.
- **No bespoke auth, no bespoke API authz** — Supabase Auth + RLS policies.
- **No ORM** — `supabase-js` for queries, generated types for the shapes.
- **The only server code we write** is:
  1. one Edge Function for the **scored write path** (imports the pure
     `@cucina/core` so the server, not the client, decides `passed` and verified macros);
  2. one Edge Function for the **AI menu generator** (solver + Anthropic stylist).
- **Leaderboards** are SQL views over columns the core already wrote — ranking
  tiebreaks stay a pure `core` comparator so SQL and any cache can't disagree.

## What stays from the swarm (still true)

- The moat is `src/core/ledger.ts` — pure, imported verbatim everywhere, never
  re-implemented in SQL or authored by an LLM. (`README.md` §1.)
- Content is **seeded into Supabase tables** from `src/content/*`, not hardcoded —
  `WEEK_PRESETS` / `DEFAULT_SETTINGS` become rows. (`README.md` §5-B.)
- One consolidated `Ledger.version: 2` carries ownership + entry provenance;
  one `migrate()`. (`README.md` §5-C.)
- Cross-day rules (no-repeat, weekly budget, veg-min) are pure `core` functions,
  not SQL. (`README.md` §5-D.)
- Generator grounds numbers by omission: dish field is an enum of real recipe
  slugs; the model never emits a calorie/cost number. (`README.md` §2.)

## Open seam introduced by this choice

- **Sharing the pure core into Edge Functions (Deno).** `@cucina/core` must stay
  dep-free ESM so Deno can import it (via `npm:` or a vendored path). It already is
  pure TS — low risk, but it's the integration point to validate first.
