import type { Recipe } from "../types";

export const acquacotta: Recipe = {
  slug: "acquacotta",
  title: "Acquacotta",
  cuisine: "italian",
  blurb:
    "\"Cooked water\" — the Maremma poverty soup of onions, greens, and stale bread, made a meal by a poached egg slipped in at the end.",
  servings: 4,
  perServing: { calories: 380, protein: 15 },
  estCostPerServing: 1.25,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "onions, thinly sliced",
      qty: "2 large",
      cost: 0.8,
    },
    {
      item: "celery and a handful of greens (chard, chicory, or what's wilting)",
      qty: "1 stalk + 1 handful",
      cost: 0.7,
    },
    {
      item: "ripe tomatoes or canned tomato",
      qty: "2 tomatoes or 1/2 can",
      cost: 0.9,
    },
    { item: "garlic cloves", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "eggs", qty: "4", cost: 1.5 },
    { item: "stale bread, grilled", qty: "4 slices", cost: 0.5 },
    {
      item: "pecorino, grated; olive oil, chili, salt",
      qty: "to finish",
      cost: 0.8,
      spansWeeks: true,
    },
  ],
  method: [
    "Sweat the onions slowly in olive oil with the celery and garlic until completely soft and sweet — this base is the flavor.",
    "Add the tomato and the greens, then cover with hot water. Simmer 20–30 minutes and season well; it should taste rich despite being mostly water.",
    "Lower to a bare simmer and slip in the eggs to poach gently in the broth until the whites set.",
    "Put a slice of grilled bread in each bowl, ladle the soup and an egg over, and finish with pecorino, raw oil, and chili.",
  ],
  modernMove:
    "Cook the onions down patiently until jammy before the water goes in — that slow base is what turns 'cooked water' into something with real depth.",
  tags: ["bread", "eggs", "greens", "soup", "protein-forward"],
};
