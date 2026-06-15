import type { Recipe } from "../types";

export const caponata: Recipe = {
  slug: "caponata",
  title: "Caponata",
  cuisine: "italian",
  blurb:
    "Sicilian sweet-and-sour eggplant — fried until silky, then balanced with celery, capers, olives, and an agrodolce of vinegar and a little sugar.",
  servings: 4,
  perServing: { calories: 280, protein: 5 },
  estCostPerServing: 1.45,
  roles: ["side", "lunch"],
  ingredients: [
    {
      item: "eggplant, cubed",
      qty: "2 medium",
      cost: 2.5,
    },
    { item: "celery, sliced", qty: "2 stalks", cost: 0.4 },
    { item: "onion, sliced", qty: "1", cost: 0.3 },
    {
      item: "canned tomatoes or passata",
      qty: "1 cup",
      cost: 0.8,
    },
    {
      item: "capers and green olives",
      qty: "2 tbsp capers, 1/3 cup olives",
      cost: 1.0,
      spansWeeks: true,
    },
    {
      item: "red wine vinegar and sugar (agrodolce)",
      qty: "3 tbsp vinegar, 1 tbsp sugar",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "olive oil, salt, basil; toasted pine nuts (optional)",
      qty: "5 tbsp oil",
      cost: 0.9,
      spansWeeks: true,
    },
  ],
  method: [
    "Salt the eggplant cubes, rest, pat dry, then fry in olive oil until deeply golden and soft. Drain.",
    "In the same pan, soften the onion and celery; add the tomato, capers, and olives and cook a few minutes.",
    "Return the eggplant. Add the vinegar and sugar and cook until the sharpness mellows and the mixture is glossy and jammy.",
    "Cool to room temperature — caponata is always better the next day. Finish with basil and pine nuts.",
  ],
  modernMove:
    "Fry the eggplant separately and add it back at the end so it stays distinct and silky rather than dissolving — and serve it cool, when the agrodolce has fully come together.",
  notes: "Best made a day ahead; keeps well and improves.",
  tags: ["sicilian", "eggplant", "agrodolce", "vegetable", "make-ahead", "side"],
};
