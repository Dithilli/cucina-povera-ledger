# Claude / agent entry point

Read **AGENTS.md** for architecture + data-model depth, and
**docs/architecture/decisions.md** for the full stack rationale. This file is the
short version of the rules that override default behaviour.

## Operating rules (OSS-first)

1. **Build as little as possible — lean on mature open-source.** Prefer platform
   features, config, and maintained libraries over bespoke code. Every new file of
   custom logic is a liability to justify, not a default.
2. **The stack is decided — don't relitigate it or quietly add to it:**
   - Backend: **Supabase** — Postgres + Auth + Row-Level Security + Storage + Edge Functions.
   - Frontend: **Vite + React SPA**. **No Next.js migration.**
   - Types: generated from the DB via **`supabase gen types`**. **No ORM** (no Drizzle/Prisma).
   - Validation: **Zod** at trusted boundaries (Edge Function input, LLM output).
   - AI: **raw Anthropic SDK**, server-side only, Claude Opus 4.8.
   - Tests: **Vitest**.
   Adding Next.js, an ORM, an auth SaaS, or a second AI SDK requires an explicit
   decision recorded in `docs/architecture/decisions.md`.
3. **The app is challenge-agnostic.** "Cucina povera" is the first challenge, not
   the app. Challenges / recipes / weeks / docs come from the **database** — never
   hardcoded. `src/content/*` is SEED data only, loaded by `npm run seed`.
4. **The moat is `src/core/ledger.ts`** — pure, I/O-free scoring (`mealPasses`,
   `summarize`, `currentStreak`). Import it verbatim everywhere (UI, CLI, Edge
   Functions); never re-implement scoring in SQL or let an LLM author it.
5. **Secrets:** only `VITE_*` vars are client-safe. The `service_role` /
   `sb_secret_*` key, `ANTHROPIC_API_KEY`, and DB passwords live in `.env.local`
   (gitignored) and must never reach the client bundle or a chat transcript.
6. **Different cuisines need different builds — never clone the Italian week
   structure.** The seven-themed-week arc was shaped around Italian *cucina
   povera*, which genuinely rotates its staple week to week (pasta → bread →
   polenta → beans). That does **not** generalize. Most cuisines have a *constant
   foundation* present every week — injera + legumes (Ethiopian), corn + beans
   (Mexican), rice elsewhere. So:
   - **Themes may *emphasize* different facets even on a constant staple** — Mexico's
     masa / frijoles / chiles / huevos weeks read fine because each is a real dish you
     eat. The failure mode is making the *inedible* foundation the theme: an "injera
     week" breaks because injera is the plate and the spoon, not a dinner. A theme
     must be something you actually eat as that night's dinner; the foundation (injera,
     the base sofrito) stays the constant base shown once, never a week.
   - **Design each cuisine's week framing from how that tradition actually eats**
     (e.g. Ethiopian themes on fiery *key wot* ↔ gentle *alicha* under the
     fasting↔feast calendar), not by copying Italy's one-ingredient-per-week template.
   - Recipes are reusable data; the **week framing is per-cuisine** and is the part
     that must be redesigned for every new challenge. The challenge is "one cucina
     povera dinner a night," so a week is seven distinct, non-overlapping dinners —
     not a single ingredient stretched across seven days.

## Commands

    npm run dev     # Vite dev server (http://localhost:5173)
    npm test        # Vitest core tests
    npm run seed    # seed Supabase content tables from src/content fixtures
    npm run ledger -- <cmd>   # ledger CLI (logging a day, stats, …)
    supabase gen types typescript --linked > src/lib/database.types.ts   # after a schema change
