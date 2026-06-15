import type { Recipe } from "../types";

export const msabbaha: Recipe = {
  slug: "msabbaha",
  title: "Msabbaha",
  cuisine: "levantine",
  blurb:
    "Hummus's looser, heartier cousin — warm whole chickpeas swimming in a thin tahini-lemon sauce, hit hard with cumin and extra lemon. A proper dinner with bread.",
  servings: 4,
  perServing: { calories: 590, protein: 21 },
  estCostPerServing: 0.84,
  roles: ["dinner"],
  ingredients: [
    {
      item: "dried chickpeas (soaked overnight) plus a pinch of baking soda",
      qty: "1 3/4 cups dried",
      cost: 1.1,
    },
    { item: "tahini", qty: "1/2 cup", cost: 0.85, spansWeeks: true },
    { item: "lemons, juiced (generous — it should be sharp)", qty: "3", cost: 0.75 },
    { item: "garlic cloves, crushed with salt", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "ground cumin, plus more to finish", qty: "1 tsp", cost: 0.15, spansWeeks: true },
    { item: "olive oil to flood the top", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "salt, chili, chopped parsley, flatbread to serve", qty: "to serve" },
  ],
  method: [
    "Cook the soaked chickpeas with the baking soda until very soft, 50–60 minutes. Drain, but keep them warm and reserve a cup of the hot cooking liquid.",
    "Beat the tahini with the garlic-salt paste, most of the lemon juice, and cumin, then thin with hot cooking liquid until it pours like loose cream — looser than hummus, because it has to coat whole beans.",
    "Set aside a third of the warm chickpeas. Lightly crush the rest into the tahini sauce so the base turns thick and rough, loosening with more liquid as needed.",
    "Spread into bowls, pile the reserved whole chickpeas on top, and finish with a flood of olive oil, the remaining lemon, more cumin, chili, and parsley. Serve warm with flatbread.",
  ],
  modernMove:
    "Holding back a third of the whole chickpeas and only crushing the rest gives you two textures in one bowl — a creamy base and warm whole beans — with far more lemon and cumin than smooth hummus carries.",
  notes: "Msabbaha means 'swimming' — the chickpeas should look like they're floating in the sauce, not bound tight.",
  tags: ["legumes", "chickpeas", "tahini", "lemon", "cumin"],
  sources: [
    {
      title: "Vidar Bergum — vidarbergum.com",
      url: "https://vidarbergum.com/recipe/msabbaha-warm-chickpeas-tahini-sauce/",
      note: "Warm whole chickpeas in a loose tahini-lemon sauce, lightly mashed not blended — supports the two-texture method.",
    },
  ],
};
