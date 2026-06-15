import type { Recipe } from "../types";

export const barbariBread: Recipe = {
  slug: "barbari-bread",
  title: "Barbari Bread",
  cuisine: "persian",
  blurb:
    "The thick, golden-crusted Persian flatbread of the morning bakery — ridged with deep finger-channels, glazed with a flour roomal paste, and showered with sesame and nigella.",
  servings: 6,
  perServing: { calories: 320, protein: 9 },
  estCostPerServing: 0.35,
  roles: ["base"],
  ingredients: [
    { item: "bread or all-purpose flour", qty: "4 cups", cost: 0.7 },
    { item: "instant yeast", qty: "1 1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "2 tsp", cost: 0.05, spansWeeks: true },
    { item: "warm water", qty: "1 1/2 cups", cost: 0 },
    { item: "sesame and nigella seeds", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "neutral oil (for the bowl and tray)", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Mix flour, yeast, and salt, then stir in the warm water to a shaggy dough. Knead 8 to 10 minutes until smooth and elastic. Oil a bowl, turn the dough to coat, cover, and let it rise until doubled, about 1 1/2 hours.",
    "Make the roomal glaze: whisk 1 tbsp flour and 1/2 tsp baking soda into 1/2 cup water in a small pan and cook to a thin, glossy paste; cool. This is what gives barbari its deep brown sheen.",
    "Knock the dough back, divide in two, and stretch each piece on an oiled tray into a long oval about 1/2 inch thick. Let it relax 15 minutes.",
    "Brush each loaf all over with the roomal paste, then run wet fingertips down the length to draw the signature parallel channels. Scatter generously with sesame and nigella.",
    "Bake in a fully preheated 475°F (245°C) oven, ideally on a hot stone or upturned tray, 12 to 15 minutes until deep golden and crackling. Cool on a rack so the crust stays crisp; eat the same day, warm.",
  ],
  modernMove:
    "The cooked flour-and-soda roomal glaze is the trick a home baker usually skips — it raises the surface pH so the crust browns fast and lacquer-deep in a hot oven, mimicking the heat of a bakery's tanoor.",
  notes:
    "Best within hours of baking. Day-old barbari is never wasted — it goes into soups, under stews, or torn into yogurt as a fitfit-style sop.",
  tags: ["base", "bread", "flatbread", "sesame", "nigella", "vegetarian", "vegan"],
};
