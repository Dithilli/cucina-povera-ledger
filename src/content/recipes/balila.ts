import type { Recipe } from "../types";

export const balila: Recipe = {
  slug: "balila",
  title: "Balila",
  cuisine: "levantine",
  blurb:
    "The simplest chickpea supper — warm whole chickpeas dressed straight off the heat with cumin, raw garlic, lemon, and olive oil. No tahini, no blender, just bread.",
  servings: 4,
  perServing: { calories: 470, protein: 18 },
  estCostPerServing: 0.6,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "dried chickpeas (soaked overnight), plus their cooking liquid",
      qty: "1 3/4 cups dried",
      cost: 1.1,
    },
    { item: "garlic cloves, crushed to a paste with salt", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "lemons, juiced", qty: "2", cost: 0.5 },
    { item: "ground cumin", qty: "1 1/2 tsp", cost: 0.15, spansWeeks: true },
    { item: "olive oil, plus more to finish", qty: "4 tbsp", cost: 0.55, spansWeeks: true },
    { item: "parsley, chopped", qty: "small handful", cost: 0.25 },
    { item: "salt, black pepper, chili, flatbread to serve", qty: "to serve" },
  ],
  method: [
    "Cook the soaked chickpeas in plenty of water until tender but still whole, 50–60 minutes. Drain warm, reserving a ladle of the cooking liquid.",
    "While they're hot, toss the chickpeas with the garlic-salt paste, cumin, lemon juice, and olive oil, splashing in a little of the warm cooking liquid so the seasoning clings and loosens into a light sauce.",
    "Taste and balance — it wants to be garlicky, lemony, and warm, not dry. Add salt, pepper, and chili to taste.",
    "Tip into bowls, finish with more olive oil and a shower of parsley, and serve hot with flatbread to scoop.",
  ],
  modernMove:
    "Dressing the chickpeas while they're still hot, with a splash of their own cooking liquid, lets them drink in the garlic, cumin, and lemon the way pasta takes a dressing off the heat — seasoning from the inside, not just coated on.",
  notes:
    "Balila is the warm street-corner relative of msabbaha with the tahini left out — fastest and cheapest of the chickpea dinners. A spoonful of tahini stirred in at the end bridges the two.",
  tags: ["legumes", "chickpeas", "lemon", "cumin", "no-blender"],
  sources: [
    {
      title: "Plant Based Folk — Balila",
      url: "https://plantbasedfolk.com/balila/",
      note: "Confirms balila as warm whole chickpeas dressed off the heat with cumin and olive oil — the no-tahini chickpea supper.",
    },
  ],
};
