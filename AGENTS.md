# AGENTS.md

Guidance for AI agents (and humans) working on this repository. Read this before
making changes. It describes what the project is, where everything lives, the
invariants you must not break, and the exact commands for the two jobs you'll do
most: **modifying** the app and **using** it to log days.

> **Agents using the app at runtime** — browse the weeks, generate a week, log a
> day, read stats — should connect via the **MCP server** (`scripts/mcp-server.ts`),
> not screen-scrape the SPA. See **`docs/mcp.md`**. This repo ships a `.mcp.json`
> so Claude Code auto-registers it; it's standard MCP over stdio, so any MCP client
> (Claude Desktop, openclaw, Cline, …) works. `npm run mcp` runs it standalone.

## What this is

A single-user web app — an "account book" — for a cucina povera cooking
challenge. Each day the user logs **calories**, **cost**, and **protein**, tagged
to a themed week (Pasta, Bread, Eggs, Legumes…). The app tracks a streak of
"kept" days, weekly spend against a budget, and two efficiency stats: dollars per
1,000 kcal and dollars per 100g of protein. The point of the challenge is to eat
cheaply and well at a fixed calorie target; the app makes the trade-offs visible.

## Stack

- **Vite + React 18 + TypeScript** (strict). No CSS framework — one hand-written
  stylesheet. No charting library — the chart is plain divs.
- **Runtime dependencies: `react` and `react-dom` only.** Keep it that way unless
  there's a strong reason; fewer deps means less for an agent to break. Icons are
  inlined SVG (`src/ui/icons.tsx`).
- Tests: **Vitest**. CLI runner: **tsx**.

## Project map

```
public/ledger.json     CANONICAL DATA. The committed source of truth.
src/
  types.ts             Domain types. Single source of truth for the data shape.
  core/
    constants.ts       WEEK_PRESETS, DEFAULT_SETTINGS, EMPTY_LEDGER.
    ledger.ts          PURE logic: validate, upsert, summarize, streak, groups.
    ledger.test.ts     Unit tests for the core. Add to these when you change core.
  storage/
    browserStore.ts    Browser load/save (fetch ledger.json + localStorage copy).
  ui/
    App.tsx            The screen. Orchestrates state; calls core + storage.
    components/
      WeekChart.tsx     Dependency-free bar chart.
    icons.tsx           Inlined SVG icons.
    format.ts           money(), formatDate(), todayISO(), shortWeek().
    styles.css          All styling. Account-book theme via CSS variables.
  main.tsx             React entry point.
scripts/
  ledger.ts            CLI — the agent's surface for logging/reading days.
```

## The golden rule: all logic lives in `src/core/ledger.ts`

`core/ledger.ts` is **pure** — no DOM, no Node, no React, no I/O. Every meaningful
behaviour is defined there exactly once and imported by both the UI and the CLI,
so they can never disagree. In particular, **`dayPasses()` is the only definition
of a "kept" day** (at/under calorie target, at/over protein floor, zero waste).
If you change a rule or a stat, change it here and update `ledger.test.ts`.

When modifying:
- Keep core functions pure and immutable (they return new objects; they never
  mutate inputs — there are tests asserting this).
- Add or update a test in `ledger.test.ts` for any behaviour change. Run `npm test`.
- UI and CLI should call core functions, not re-implement logic.

## Data model & data flow

The canonical data is `public/ledger.json`, shape = `Ledger` from `src/types.ts`:

```jsonc
{
  "version": 1,
  "settings": { "calorieTarget": 2000, "proteinFloor": 100,
                "weeklyBudget": 55, "activeWeek": "Week 1 — Pasta" },
  "entries": [
    { "id": "...", "date": "2026-06-14", "week": "Week 1 — Pasta",
      "dish": "pasta e ceci", "calories": 1950, "protein": 105,
      "cost": 7.5, "zeroWaste": true }
  ]
}
```

Because this is a **static site with no backend**, there are two write paths:

1. **Agent path (canonical).** The CLI reads and writes `public/ledger.json`
   directly. After editing, commit the file; on the next deploy the site serves
   it. This is the primary path — agents log days here.
2. **Human path (local).** The browser UI keeps edits in `localStorage` as a
   working copy so a session survives refreshes. "Export ledger.json" downloads
   the working copy to commit back; "Reset to committed" discards it. The UI does
   not and cannot write to the repo on its own.

If you need true multi-device, real-time writes, see "Extending" below — but do
not add a backend unless asked.

### Invariants (do not break)

- `Ledger.version` is `1`. If you change the entry/settings shape, bump it and
  add a migration in `core/ledger.ts` that upgrades old files on load.
- Every entry needs a unique `id` (use `makeId()`), a `date` as `YYYY-MM-DD`
  (local, no time), and non-negative numeric `calories`/`protein`/`cost`.
- `public/ledger.json` must always be valid against `validateEntry`. Run
  `npm run ledger -- validate` after bulk edits.

## Commands

```bash
npm install            # once
npm run dev            # local dev server (http://localhost:5173)
npm test               # run the core unit tests
npm run build          # typecheck (tsc --noEmit) + production build to dist/
npm run preview        # serve the production build locally
```

### Logging a day — the task you'll do most

```bash
npm run ledger -- add \
  --date 2026-06-14 \
  --week "Week 1 — Pasta" \
  --dish "pasta e ceci, pangrattato" \
  --calories 1950 --protein 105 --cost 7.50 --waste
# omit --waste (or pass --no-waste) if the day wasted food
```

Other CLI commands:

```bash
npm run ledger -- list                       # all entries (with ids)
npm run ledger -- list --week "Week 1 — Pasta"
npm run ledger -- stats                       # streak + per-week reckoning
npm run ledger -- stats --week "Week 1 — Pasta"
npm run ledger -- remove --id <id>
npm run ledger -- add --id <id> ...           # amend: reuse an id to replace
npm run ledger -- set --budget 50 --protein 110   # change targets
npm run ledger -- validate
```

After any `add`/`remove`/`set`, **commit `public/ledger.json`.**

## Deploying

CI is configured in `.github/workflows/deploy.yml`: every push to `main` runs the
tests, builds, and publishes `dist/` to GitHub Pages.

- Enable Pages: repo Settings → Pages → Source = "GitHub Actions".
- **Custom domain** (you're buying one): set it in Settings → Pages, add a
  `public/CNAME` file containing the bare domain (e.g. `ledger.example.com`), and
  keep `base: "/"` in `vite.config.ts` (already the default).
- **No custom domain** (project pages at `…github.io/<repo>/`): set
  `base: "/<repo>/"` in `vite.config.ts`.

## Extending (only when asked)

- **Real backend / multi-device writes:** replace `src/storage/browserStore.ts`
  with a client that talks to an API, and add a server that persists the same
  `Ledger` shape. Keep `core/ledger.ts` untouched — it already has no I/O.
- **New efficiency stat:** add it to `summarize()` in `core/ledger.ts` (+ test),
  surface it in `App.tsx`'s reckoning tiles and/or `WeekChart.tsx`.
- **New themed week:** add the label to `WEEK_PRESETS` in `core/constants.ts`.

## Conventions

- TypeScript strict; no unused locals/params (the build enforces this).
- Prefer pure functions; keep side effects in `storage/` and `scripts/`.
- Currency is USD (`format.ts` → `CURRENCY`). Dates are local `YYYY-MM-DD`.
- Don't introduce a state library or CSS framework for this size of app.
