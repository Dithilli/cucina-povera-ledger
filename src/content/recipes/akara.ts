import type { Recipe } from "../types";

export const akara: Recipe = {
  slug: "akara",
  title: "Akara",
  cuisine: "west-african",
  blurb:
    "Crisp, airy fritters of peeled black-eyed peas whipped to a fluffy batter and deep-fried — the same bean, a different soul from moi moi.",
  servings: 4,
  perServing: { calories: 520, protein: 19 },
  estCostPerServing: 0.85,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "dried black-eyed peas, soaked and skins rubbed off",
      qty: "2 cups",
      cost: 1.2,
    },
    { item: "small onion", qty: "1", cost: 0.3 },
    { item: "scotch bonnet, to taste", qty: "1", cost: 0.25, spansWeeks: true },
    { item: "fresh ginger (optional)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    {
      item: "ground crayfish or a stock cube (optional)",
      qty: "1 tsp",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "neutral oil for deep-frying", qty: "for frying", cost: 0.7 },
    { item: "warm water", qty: "as needed", cost: 0.05 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Rub the soaked peas under water to remove every skin, leaving clean white beans.",
    "Blend the peas with the onion, scotch bonnet, and ginger using as little water as possible — the batter must stay thick enough to hold a spoon's shape.",
    "Whisk the batter vigorously by hand (or beat in a bowl) for several minutes to whip in air; it should lighten in colour and a spoonful should float in water. Fold in salt and crayfish.",
    "Heat the oil to a steady medium-high. Drop in spoonfuls of batter and fry, turning, until deep golden, puffed, and crisp — 3–4 minutes per batch.",
    "Drain on paper and serve hot, with the dark pepper sauce from ewa agoyin, pap, or bread.",
  ],
  modernMove:
    "Beating the skinned-bean batter until it traps air — so a dab floats — is the trick that makes akara explode into a light, hollow crumb instead of frying dense.",
  tags: [
    "legumes",
    "black-eyed-peas",
    "fritters",
    "fried",
    "street-food",
    "nigerian",
  ],
};
