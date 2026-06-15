import type { Recipe } from "../types";

export const tamagoyaki: Recipe = {
  slug: "tamagoyaki",
  title: "Tamagoyaki",
  cuisine: "japanese",
  blurb:
    "The rolled, layered sweet-savory omelette — eggs cooked in thin sheets and rolled over themselves into a tender block, served warm over rice or sliced cold into a bento.",
  servings: 2,
  perServing: { calories: 290, protein: 19 },
  estCostPerServing: 0.65,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "eggs", qty: "4", cost: 1.0 },
    { item: "dashi", qty: "3 tbsp", cost: 0.15, spansWeeks: true },
    { item: "sugar", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "soy sauce", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "mirin", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "1 pinch" },
    { item: "neutral oil for the pan", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "grated daikon and soy to serve (optional)", qty: "to serve", cost: 0.2 },
  ],
  method: [
    "Beat the eggs gently with the dashi, sugar, soy, mirin, and salt — beat to combine, not to froth, or the layers won't be smooth.",
    "Heat a square (or small round) nonstick pan over medium-low and wipe it with oil on a paper towel. Pour in a thin layer of egg, tilting to coat; pop any big bubbles.",
    "When the surface is just set but still moist, roll the sheet from the far side toward you into a log. Push the roll back to the far edge, oil the empty pan, and pour the next thin layer, lifting the roll so egg runs underneath it.",
    "Repeat until the egg is used, building a fat striped block. Tip onto a bamboo mat or paper towel and press briefly into shape, then slice into thick pieces. Serve warm with grated daikon and a drop of soy, or cool for a bento.",
  ],
  modernMove:
    "Layering thin sheets instead of scrambling builds those tender strata and folds the dashi into the egg — it's an omelette eaten like a small terrine.",
  notes:
    "No square pan? Roll in a small round skillet and square the block off in the bamboo mat at the end.",
  tags: ["eggs", "omelette", "dashi", "bento", "rolled"],
  sources: [
    {
      title: "Namiko Chen — Just One Cookbook, Classic Tamagoyaki (Japanese Rolled Omelette)",
      url: "https://www.justonecookbook.com/tamagoyaki/",
      note: "Rolling thin layered sheets seasoned with dashi, sugar, soy, and mirin into a striped block.",
    },
  ],
};
