import type { Recipe } from "../types";

export const sinigangNaHipon: Recipe = {
  slug: "sinigang-na-hipon",
  title: "Sinigang na Hipon (Sour Shrimp Soup)",
  cuisine: "filipino",
  blurb:
    "Whole head-on shrimp simmered briefly in a tamarind-sour broth — the shells and heads enrich the soup, so a small amount of shrimp stretches across a whole pot.",
  servings: 4,
  perServing: { calories: 360, protein: 28 },
  estCostPerServing: 1.85,
  roles: ["dinner"],
  ingredients: [
    {
      item: "whole head-on shrimp (shells on)",
      qty: "1 lb",
      cost: 5.0,
    },
    {
      item: "tamarind (fresh pods, or 2 tbsp tamarind paste / 1 sinigang sachet)",
      qty: "1/2 lb pods",
      cost: 0.8,
      spansWeeks: true,
    },
    { item: "onion, quartered", qty: "1", cost: 0.3 },
    { item: "tomatoes, quartered", qty: "2", cost: 0.5 },
    { item: "daikon radish (labanos), sliced", qty: "1 small", cost: 0.6 },
    { item: "long beans or green beans, in lengths", qty: "1 handful", cost: 0.6 },
    { item: "kangkong (water spinach) or spinach", qty: "1 bunch", cost: 0.6 },
    { item: "long green chili (siling haba)", qty: "1-2", cost: 0.2, spansWeeks: true },
    { item: "fish sauce (patis), salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Optional but worth it: pull the heads off a few shrimp, simmer the heads in the water 10 minutes, then mash and strain — this builds a deeper shrimp stock from parts you'd otherwise toss.",
    "Simmer the onion, tomatoes, and daikon in the broth until the radish is tender, about 8 minutes, mashing the tomatoes in.",
    "Sour the broth with sieved fresh tamarind or paste/sachet until sharply sour. Add the beans and cook 3 minutes.",
    "Add the whole shrimp and simmer just 2-3 minutes, until they turn pink and curl — no longer, or they go rubbery. Season with fish sauce, drop in chilies and kangkong off the heat, and serve with rice.",
  ],
  modernMove:
    "Making a quick stock from the shrimp heads means the shells do real work, so a modest pound of shrimp flavors a full pot of soup for four.",
  notes:
    "Shrimp cook in minutes, so this is the fastest sinigang — keep the shells on for both flavor and the frugal ritual of peeling at the table.",
  tags: ["soup", "shrimp", "tamarind", "sour", "vegetables", "one-pot"],
  sources: [
    { title: "Vanjo Merano — Panlasang Pinoy", url: "https://panlasangpinoy.com/sinigang-na-hipon-sa-sampaloc/", note: "Shrimp in tamarind-sour broth; adding shrimp last so they don't overcook" },
    { title: "Bebs — Foxy Folksy", url: "https://www.foxyfolksy.com/sinigang-na-hipon-shrimp-in-sour-soup/", note: "Souring agents and the quick 2–3 minute shrimp simmer" },
  ],
};
