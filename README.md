# Cucina Povera Challenge — Il Libretto

A frugal **account book** for a cucina povera cooking challenge. Log each day's
**calories, cost, and protein** against a themed week; the ledger keeps your
streak of "kept" days, your weekly spend against budget, and two efficiency
stats — **dollars per 1,000 kcal** and **dollars per 100g of protein** — so you
can see which weeks feed you cheapest per gram of protein.

A day is **kept** when it lands at or under your calorie target, meets your
protein floor, and wastes nothing.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

Set your targets behind the gear icon (defaults: 2,000 kcal, 100 g protein,
$55/week). Pick the active week, then log days.

## Logging from the command line

The same data can be logged via a CLI — handy for scripting or for handing the
task to an agent:

```bash
npm run ledger -- add --date 2026-06-14 --week "Week 1 — Pasta" \
  --dish "pasta e ceci" --calories 1950 --protein 105 --cost 7.50 --waste
npm run ledger -- stats
```

Data lives in `public/ledger.json` (committed to the repo). See **AGENTS.md** for
the full architecture, data model, and command reference.

## Build & deploy

```bash
npm test           # core unit tests
npm run build      # typecheck + build to dist/
```

Pushing to `main` builds and deploys to GitHub Pages via GitHub Actions. For a
custom domain, add `public/CNAME` and keep `base: "/"` in `vite.config.ts`; for
project pages, set `base: "/<repo>/"`. Details in AGENTS.md.

## License

MIT.
