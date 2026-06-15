import type { Recipe } from "../types";

export const vegPulao: Recipe = {
  slug: "veg-pulao",
  title: "Veg Pulao",
  cuisine: "north-indian",
  blurb:
    "Long-grain rice toasted in whole spices and steamed with a handful of vegetables — the everyday pilaf that turns plain rice into dinner without a single ground spice.",
  servings: 4,
  perServing: { calories: 540, protein: 12 },
  estCostPerServing: 0.72,
  roles: ["dinner"],
  ingredients: [
    { item: "basmati rice", qty: "1 1/2 cups", cost: 0.75 },
    {
      item: "mixed vegetables (carrot, peas, beans, potato), diced",
      qty: "2 cups",
      cost: 0.9,
    },
    { item: "onion, thinly sliced", qty: "1", cost: 0.2 },
    {
      item: "whole spices: bay leaf, cinnamon stick, cloves, green cardamom, cumin seeds",
      qty: "1 tbsp mixed",
      cost: 0.25,
      spansWeeks: true,
    },
    {
      item: "ginger-garlic paste",
      qty: "1 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "green chiles, slit", qty: "2", cost: 0.1, spansWeeks: true },
    {
      item: "ghee or oil",
      qty: "2 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "salt and cilantro", qty: "to taste", cost: 0.15 },
  ],
  method: [
    "Rinse the basmati well and soak 20 minutes, then drain — soaked grains cook longer and separate instead of breaking.",
    "Heat ghee and bloom the whole spices until they sizzle and smell toasty; add the onion and fry to pale gold.",
    "Stir in ginger-garlic paste and green chiles, then the vegetables, and sauté a couple of minutes.",
    "Add the drained rice and toast it gently in the fat for a minute so each grain is coated — this is what keeps a pulao fluffy rather than sticky.",
    "Pour in 2 1/4 cups hot water with salt, bring to a boil, then cover and steam on the lowest heat ~15 minutes. Rest off the heat 10 minutes, fluff with a fork, and scatter cilantro. Serve with raita.",
  ],
  modernMove:
    "Toasting whole spices in fat and then the soaked rice itself — rather than reaching for garam masala powder — gives a clean, aromatic pulao where you taste each spice, the technique that separates pulao from a muddy fried rice.",
  tags: ["rice", "basmati", "pilaf", "whole-spices", "vegetables"],
};
