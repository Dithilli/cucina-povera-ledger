import type { Recipe } from "../types";

export const frittataDiPasta: Recipe = {
  slug: "frittata-di-pasta",
  title: "Frittata di Pasta",
  cuisine: "italian",
  blurb:
    "Leftover pasta bound with egg and fried into a golden cake — the iconic zero-waste dish, and the Week 1 finale.",
  servings: 4,
  perServing: {
    calories: 500,
    protein: 24,
  },
  estCostPerServing: 1.2,
  roles: ["dinner", "lunch", "breakfast"],
  ingredients: [
    {
      item: "cooked leftover pasta (sauced or plain)",
      qty: "3 cups",
      cost: 1.0,
    },
    {
      item: "eggs",
      qty: "5",
      cost: 1.88,
    },
    {
      item: "pecorino, grated",
      qty: "1/2 cup",
      cost: 1.3,
      spansWeeks: true,
    },
    {
      item: "parsley, black pepper",
      qty: "to taste",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "olive oil",
      qty: "for the pan",
      cost: 0.3,
      spansWeeks: true,
    },
  ],
  method: [
    "Beat the eggs with the pecorino, parsley, and pepper. Fold in the pasta.",
    "Heat oil in a nonstick or well-seasoned pan. Add the mixture, press flat, and cook low and slow until the bottom is set and golden.",
    "Flip (use a plate) and cook the second side until just set — you want a custardy, not dry, interior.",
    "Rest, then cut into wedges. Herb oil and a little aged pecorino to finish.",
  ],
  modernMove:
    "Cook it low and slow to a custardy French set rather than a dry one, and aim for clean edges so a humble scrap dish plates like a tasting course.",
  zeroWasteHero: true,
  tags: ["eggs", "pasta", "zero-waste", "leftovers", "one-pan"],
  sources: [
    {
      title: "Frittata — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Frittata",
      note: "Egg-based Italian dish bound with leftovers such as pasta",
    },
  ],
};
