import type { ContentDoc } from "../types";

export const challenge: ContentDoc = {
  slug: "challenge",
  cuisine: "italian",
  title: "The Cucina Povera Challenge",
  kind: "challenge",
  body: `# The Cucina Povera Challenge

Cook one beautiful cucina povera dinner a night, using only humble ingredients,
wasting nothing. The constraint is the creativity. Cucina povera is the perfect
vehicle because constraint is literally its aesthetic — the whole cuisine exists
because someone had almost nothing and made it sing. You are not on a diet; you
are doing historical re-enactment with a scoreboard, one night at a time.

## The premise

Each night, cook a cucina povera dinner and waste nothing. That's the whole game.
Logging every meal for a week is a lot to ask — so the unit here is a single
dinner, the one you'd actually look forward to. A night is **kept** when you
cooked it and used every scrap. Keep enough nights in a row and a streak builds.

## The three numbers — targets, not lines

You log calories, protein, and cost for each dinner, but none of them pass or
fail you. They're there to aim at and to compare over time:

- **Cost** — the heart of it. Cucina povera is the kitchen of the poor; keep it
  cheap (aim around a couple of dollars a plate). But price is deeply regional and
  hard to pin down for one cook, so it's *your* honest estimate, not a cap. Down
  the line, that's what makes regional leaderboards possible — comparing cooks
  against their own market, not a single global number.
- **Calories** — a per-meal target (default ~700). A satisfying dinner, not a
  deprivation. Aim at it; don't obey it.
- **Protein** — a per-meal target (default ~15g). Legumes, eggs, anchovy, a little
  pecorino do the work. It's a nudge toward eating well, not a gate.

## House rules

1. Zero waste: rinds become brodo, stale bread becomes pangrattato or pappa, bean
   liquid becomes sauce. Authentic *and* it stretches the budget. This is the one
   rule that decides a kept night.
2. No dinner repeats within a week — forces invention.
3. One "precious thread" allowed per week: a great finishing oil, the anchovy tin,
   the aged pecorino. The contadino's one luxury, used sparingly.
4. Dinners get plated like you mean it. Cheap shouldn't show on the plate.

## The themed weeks

A rotating palette of dinners, so it never gets stale:

- **Week 1 — Pasta** (Southern pasta poverty: mollica, aglio e olio, pasta e patate)
- **Week 2 — Bread** (pappa al pomodoro, ribollita, panzanella, acquacotta)
- **Week 3 — Eggs** (frittate, uova in purgatorio, egg-enriched soups)
- **Week 4 — Legumes** (the Tuscan "bean-eater" week: fagioli, ceci, lenticchie)
- **Week 5 — Polenta** (the northern cornmeal week: polenta concia, e fagioli, with mushroom ragù)
- **Bonus — Sicilian** (sardines, anchovy, caponata)
- **Bonus — Garden** (cicoria, broccoli rabe, peperonata, minestrone)

## The scoreboard

Log each night: the dish, calories, protein, cost, and whether it wasted nothing.
The streak counts consecutive *kept* nights — cooked and zero-waste. Two efficiency
stats are worth optimizing for the sport of it — **cost per 1,000 kcal** and **cost
per 100g protein** — and a weekly budget shows how the dinners add up. The point
isn't to hit a number; it's to keep showing up to cook.

## Why it works

This isn't really a diet — it's a reason to cook the tradition every night, tight
and cheap, with nothing thrown away. Removing the pass/fail gates removes the
willpower tax; what's left is a game you're intrinsically motivated to play. The
calorie and protein targets do their quiet good-sense work underneath, while the
real pull is simple: what cheap, beautiful thing will you make tonight?
`,
};
