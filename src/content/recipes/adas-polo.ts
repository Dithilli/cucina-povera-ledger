import type { Recipe } from "../types";

export const adasPolo: Recipe = {
  slug: "adas-polo",
  title: "Adas Polo",
  cuisine: "persian",
  blurb:
    "Lentil-and-rice polo layered with caramelized onions, raisins, and dates — a sweet-savory frugal classic crowned with a crisp tahdig.",
  servings: 4,
  perServing: { calories: 600, protein: 18 },
  estCostPerServing: 1.05,
  roles: ["dinner"],
  ingredients: [
    { item: "long-grain basmati rice", qty: "2 cups", cost: 1.4 },
    { item: "brown or green lentils", qty: "3/4 cup", cost: 0.5 },
    { item: "large onions, thinly sliced", qty: "2", cost: 0.6 },
    { item: "raisins", qty: "1/3 cup", cost: 0.45 },
    { item: "pitted dates, chopped", qty: "6", cost: 0.7 },
    {
      item: "neutral oil or butter (for frying and the tahdig)",
      qty: "4 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "ground cinnamon and cumin",
      qty: "1 tsp each",
      cost: 0.15,
      spansWeeks: true,
    },
    {
      item: "saffron, bloomed in 2 tbsp hot water (optional)",
      qty: "pinch",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Simmer the lentils in plenty of salted water until just tender but not mushy, 15–20 minutes, then drain. Separately, soak the rinsed rice in salted water for 30 minutes.",
    "Fry the sliced onions slowly in half the oil until deep golden and sweet, 20 minutes. Stir the raisins and dates in for the last 2 minutes just to plump, then set aside; dust with the cinnamon and cumin.",
    "Parboil the soaked rice in a big pot of boiling salted water for about 6 minutes, until the grains are soft outside but firm in the center, then drain.",
    "Build the tahdig: heat the rest of the oil in the pot, add a thin layer of rice pressed flat, then layer the remaining rice with the lentils and the onion-fruit mixture, mounding into a pyramid.",
    "Poke a few steam holes with a spoon handle, drizzle the saffron water over the top, cover the lid with a towel, and steam on the lowest heat 35–45 minutes until a golden crust forms underneath.",
    "Invert onto a platter or scoop gently to keep the crisp tahdig intact, folding the lentils and fruit through as you serve.",
  ],
  modernMove:
    "Toasting the dried fruit in the spiced onion oil before layering caramelizes its sugars, so the sweetness reads as depth rather than candy against the savory lentils.",
  tags: ["rice", "polo", "tahdig", "lentils", "legumes", "dried-fruit"],
};
