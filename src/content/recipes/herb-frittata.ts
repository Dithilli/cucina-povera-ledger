import type { Recipe } from "../types";

export const herbFrittata: Recipe = {
  slug: "herb-frittata",
  title: "Herb Frittata",
  cuisine: "italian",
  blurb:
    "A green frittata thick with whatever herbs and tender greens are on hand — the simplest, fastest way to turn eggs into a meal.",
  servings: 4,
  perServing: { calories: 300, protein: 19 },
  estCostPerServing: 1.15,
  roles: ["dinner", "lunch", "breakfast"],
  ingredients: [
    { item: "eggs", qty: "8", cost: 3.0 },
    {
      item: "mixed soft herbs and tender greens (parsley, basil, chard tops, scallion)",
      qty: "2 cups, chopped",
      cost: 1.0,
    },
    {
      item: "pecorino or Parmesan, grated",
      qty: "1/2 cup",
      cost: 1.3,
      spansWeeks: true,
    },
    { item: "garlic clove, grated", qty: "1", cost: 0.05, spansWeeks: true },
    {
      item: "olive oil, salt, pepper",
      qty: "3 tbsp oil",
      cost: 0.45,
      spansWeeks: true,
    },
  ],
  method: [
    "Soften the greens briefly in a little oil with the garlic if they're sturdy; leave delicate herbs raw.",
    "Beat the eggs with the cheese, herbs, salt, and pepper.",
    "Heat oil in a nonstick or well-seasoned pan, pour in the eggs, and cook low and slow, drawing the set edges inward.",
    "When mostly set, flip (or finish under a broiler) until just done — keep the center soft. Rest and cut into wedges.",
  ],
  modernMove:
    "Keep most of the herbs raw and folded in at the end so they stay bright green and aromatic instead of cooking to khaki.",
  zeroWasteHero: true,
  tags: ["eggs", "herbs", "greens", "one-pan", "quick", "protein-forward"],
  sources: [
    {
      title: "Frittata — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Frittata",
      note: "Egg-based Italian dish enriched with herbs and greens",
    },
  ],
};
