import type { Recipe } from "../types";

export const pastaEPatate: Recipe = {
  slug: "pasta-e-patate",
  title: "Pasta e Patate",
  cuisine: "italian",
  blurb:
    "Neapolitan one-pot pasta and potato — the deepest comfort for almost no money, cooked until sticky and creamy (azzeccata).",
  servings: 4,
  perServing: { calories: 550, protein: 14 },
  estCostPerServing: 0.98,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "onion, carrot, celery, diced (soffritto)",
      qty: "1 onion, 1 carrot, 1 celery stalk",
      cost: 0.5,
    },
    { item: "garlic cloves", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "potatoes, in small cubes", qty: "1 lb", cost: 1.25 },
    { item: "Parmesan rind", qty: "1", cost: 0.3, spansWeeks: true },
    {
      item: "mixed pasta (traditionally odds and ends)",
      qty: "10 oz",
      cost: 1.25,
    },
    {
      item: "olive oil, black pepper, pecorino to finish",
      qty: "to finish",
      cost: 0.5,
      spansWeeks: true,
    },
  ],
  method: [
    "Build a deep, slow soffritto in olive oil. Add garlic, then the potatoes, coating them well.",
    "Add the Parmesan rind and just enough hot water to cover. Simmer until the potatoes start breaking down.",
    "Cook the pasta directly in the pot, adding water as needed, until everything is thick and sticky.",
    "Heavy black pepper, pecorino, a thread of raw oil.",
  ],
  modernMove:
    "A long soffritto plus the rind builds umami depth; cooking the pasta in the starchy potato brodo makes it cling without any dairy.",
  tags: ["pasta", "potato", "one-pot", "soffritto", "neapolitan"],
  sources: [
    {
      title: "Pasta e patate — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Pasta_e_patate",
      note: "One-pot pasta and potatoes cooked starchy and creamy, not drained",
    },
  ],
};
