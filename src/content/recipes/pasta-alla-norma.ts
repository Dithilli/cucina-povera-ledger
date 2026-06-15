import type { Recipe } from "../types";

export const pastaAllaNorma: Recipe = {
  slug: "pasta-alla-norma",
  title: "Pasta alla Norma",
  cuisine: "italian",
  blurb:
    "The Sicilian eggplant classic — fried eggplant, tomato, basil, and salty ricotta salata (or pecorino on a budget).",
  servings: 4,
  perServing: {
    calories: 520,
    protein: 14,
  },
  estCostPerServing: 2.08,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "eggplant, cubed",
      qty: "1 large",
      cost: 2.0,
    },
    {
      item: "tomato sugo",
      qty: "3 cups",
      cost: 2.5,
    },
    {
      item: "garlic cloves",
      qty: "2",
      cost: 0.05,
      spansWeeks: true,
    },
    {
      item: "short pasta (rigatoni, casarecce)",
      qty: "12 oz",
      cost: 1.5,
    },
    {
      item: "basil",
      qty: "to taste",
      cost: 0.25,
    },
    {
      item: "ricotta salata or pecorino, grated",
      qty: "to finish",
      cost: 1.0,
      spansWeeks: true,
    },
    {
      item: "olive oil, salt",
      qty: "for frying",
      cost: 1.0,
      spansWeeks: true,
    },
  ],
  method: [
    "Salt the eggplant 20 minutes, pat dry, and fry in olive oil until deep golden and tender. Drain.",
    "Warm the garlic in oil, add the sugo, and simmer; fold in most of the eggplant.",
    "Toss with al dente pasta and torn basil.",
    "Finish with the rest of the eggplant on top and a heavy grating of ricotta salata or pecorino.",
  ],
  modernMove:
    "Frying the eggplant properly (not steaming it) gives silky interiors and a roasted depth that a quick sauté never reaches — worth the oil.",
  tags: ["eggplant", "tomato", "pasta", "sicilian", "vegetarian"],
  sources: [
    {
      title: "Pasta alla Norma — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Pasta_alla_Norma",
      note: "Catania dish of pasta, fried eggplant, tomato, basil, and ricotta salata",
    },
  ],
};
