import type { Recipe } from "../types";

export const hummus: Recipe = {
  slug: "hummus",
  title: "Hummus",
  cuisine: "levantine",
  blurb:
    "Warm chickpea-and-tahini purée whipped silk-smooth, flooded with olive oil — a dinner in its own right when scooped with bread, not just a dip.",
  servings: 4,
  perServing: { calories: 560, protein: 19 },
  estCostPerServing: 0.78,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "dried chickpeas (soaked overnight) plus a pinch of baking soda",
      qty: "1 1/2 cups dried",
      cost: 0.95,
    },
    { item: "tahini", qty: "2/3 cup", cost: 1.1, spansWeeks: true },
    { item: "lemons, juiced", qty: "2", cost: 0.5 },
    { item: "garlic clove, crushed with salt", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "ground cumin", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "olive oil to finish", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "salt, paprika, parsley, warm flatbread to serve", qty: "to serve" },
  ],
  method: [
    "Cook the soaked chickpeas with the baking soda in plenty of water, skimming the foam and loose skins, 45–60 minutes, until they're almost falling apart — overcooked is the goal, not al dente. Save a cup of the hot cooking liquid.",
    "Whisk the lemon juice with the garlic-salt paste and let it sit a minute to mellow, then beat in the tahini; it will seize, then loosen — thin it with a little hot cooking liquid until pale and pourable.",
    "Blend the warm, drained chickpeas to a paste, then run in the tahini-lemon mixture and cumin. Keep blending, adding hot liquid by the spoonful, a full few minutes, until it's fluffy and aerated.",
    "Spread warm into a wide bowl, swoosh the back of the spoon through it, flood the well with olive oil, and dust with paprika and parsley. Serve with hot flatbread.",
  ],
  modernMove:
    "Overcooking the chickpeas with baking soda dissolves the skins, and blending the purée warm for several minutes whips air in — that's the difference between gritty dip and airy restaurant hummus.",
  notes: "Mounding a spoonful of whole warm chickpeas and cumin on top turns it toward msabbaha — a heartier dinner.",
  tags: ["legumes", "chickpeas", "tahini", "lemon", "no-cook-finish"],
};
