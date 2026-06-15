import type { Recipe } from "../types";

export const labneh: Recipe = {
  slug: "labneh",
  title: "Labneh",
  cuisine: "levantine",
  blurb:
    "Plain yogurt salted and hung in cloth overnight until it thickens to a tangy, spreadable cheese — pooled with olive oil, it's the cornerstone of every Levantine table.",
  servings: 4,
  perServing: { calories: 180, protein: 11 },
  estCostPerServing: 0.7,
  roles: ["side", "base"],
  ingredients: [
    {
      item: "whole-milk yogurt",
      qty: "4 cups (2 lb)",
      cost: 2.2,
    },
    { item: "salt", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    {
      item: "olive oil to finish",
      qty: "2 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "dried mint or za'atar (optional)",
      qty: "to finish",
      cost: 0.2,
      spansWeeks: true,
    },
  ],
  method: [
    "Stir the salt into the yogurt.",
    "Line a sieve or colander with a clean cloth or doubled cheesecloth, scrape in the yogurt, gather the corners, and set over a bowl.",
    "Refrigerate and let it drain 12–24 hours — the longer it hangs, the firmer it gets, from spoonable to roll-into-balls.",
    "Spread on a plate, swirl a well of olive oil, and dust with dried mint or za'atar. Eat with warm bread, or use as the base under fatteh and grilled vegetables.",
  ],
  modernMove:
    "The drained whey isn't waste — it's a gentle acid for marinating chicken or brightening a soup, so the one tub of yogurt does double duty.",
  notes:
    "Rolled into balls and submerged in olive oil, labneh keeps for weeks in the fridge — a make-ahead base for the week.",
  tags: ["yogurt", "labneh", "dairy", "base", "make-ahead", "no-cook"],
  sources: [
    {
      title: "Maureen Abood — maureenabood.com",
      url: "https://maureenabood.com/homemade-yogurt-straining-for-laban-labne-and-labne-preserved-in-oil/",
      note: "Straining salted yogurt in cloth to labneh, with longer hangs for firmer texture and balls preserved in oil.",
    },
  ],
};
