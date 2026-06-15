import type { Recipe } from "../types";

export const pastaAlPomodoroETonno: Recipe = {
  slug: "pasta-al-pomodoro-e-tonno",
  title: "Pasta al Pomodoro e Tonno",
  cuisine: "italian",
  blurb:
    "Southern pantry pasta — tomato sauce lifted with canned tuna. Cheap protein, big flavor, ten minutes once the sugo exists.",
  servings: 4,
  perServing: { calories: 550, protein: 28 },
  estCostPerServing: 2.23,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "pasta (spaghetti or short)", qty: "12 oz", cost: 1.5 },
    { item: "tomato sugo (from the week's batch)", qty: "3 cups", cost: 2.0 },
    { item: "good canned tuna in oil, drained", qty: "2 tins", cost: 5.0 },
    { item: "garlic cloves, sliced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "chili flakes", qty: "1/2 tsp" },
    {
      item: "olive oil, parsley, capers or olives (optional)",
      qty: "to taste",
      cost: 0.3,
      spansWeeks: true,
    },
  ],
  method: [
    "Warm the garlic and chili in oil, add the sugo, and simmer to thicken.",
    "Flake in the tuna and warm through gently — don't boil it to dust.",
    "Toss with al dente pasta and a little pasta water; finish with parsley and raw oil.",
  ],
  modernMove:
    "Stir the tuna in off the heat so it stays in soft flakes, and let the sugo's own gloss carry the dish — no cheese needed here.",
  tags: ["pasta", "tomato", "tuna", "pantry", "protein"],
};
