import type { Recipe } from "../types";

export const falafel: Recipe = {
  slug: "falafel",
  title: "Falafel",
  cuisine: "levantine",
  blurb:
    "Fried patties of ground raw chickpeas (or chickpea-fava) packed with herbs and spice — crackly outside, fluffy green inside, from one cheap bag of dried beans.",
  servings: 4,
  perServing: { calories: 560, protein: 20 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    {
      item: "dried chickpeas, soaked overnight (NOT cooked)",
      qty: "1 1/2 cups",
      cost: 0.7,
    },
    {
      item: "dried split fava beans, soaked (optional, classic in Egypt)",
      qty: "1/2 cup",
      cost: 0.3,
    },
    { item: "onion, quartered", qty: "1", cost: 0.3 },
    { item: "garlic cloves", qty: "4", cost: 0.2, spansWeeks: true },
    {
      item: "parsley and cilantro, big handfuls",
      qty: "1 bunch each",
      cost: 1.4,
    },
    {
      item: "cumin, coriander, salt, pinch of baking soda",
      qty: "2 tsp each spice",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "neutral oil for frying",
      qty: "for frying",
      cost: 0.8,
      spansWeeks: true,
    },
    { item: "sesame seeds (optional crust)", qty: "2 tbsp", cost: 0.2 },
  ],
  method: [
    "Drain the soaked beans well — do not cook them. Pulse with the onion, garlic, herbs, and spices to a coarse, sandy paste that just holds together; don't purée to a smear.",
    "Rest the mix 30 minutes, then stir in salt and a pinch of baking soda for lift (add it late so it doesn't deflate).",
    "Shape into small balls or patties, pressing firmly; coat in sesame seeds if you like.",
    "Fry in 350°F oil until deep brown and crisp, 3–4 minutes. Drain and serve hot with tahini sauce, pita, and pickles.",
  ],
  modernMove:
    "Use soaked-but-raw beans, never canned or cooked — only the raw starch fries up shatteringly crisp and stays fluffy inside; cooked beans turn to a dense, oily mush.",
  notes:
    "Salt and baking soda go in just before frying so the batter stays light. Leftover paste freezes well raw.",
  tags: ["chickpeas", "fava", "fried", "herbs", "legumes", "street-food"],
};
