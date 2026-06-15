import type { Recipe } from "../types";

export const kategna: Recipe = {
  slug: "kategna",
  title: "Kategna",
  cuisine: "ethiopian",
  blurb:
    "Fresh injera toasted crisp on the griddle and smeared with niter kibbeh and berbere — the simplest possible snack, and a perfect lesson in how two pantry staples carry the whole cuisine.",
  servings: 2,
  perServing: { calories: 280, protein: 7 },
  estCostPerServing: 0.4,
  roles: ["side", "breakfast"],
  ingredients: [
    { item: "injera (fresh, or trimmed edges)", qty: "2 pieces", cost: 0.5 },
    { item: "niter kibbeh", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "berbere", qty: "1–2 tsp", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "a pinch", spansWeeks: true },
  ],
  method: [
    "Lay a piece of injera flat on a dry hot griddle or skillet and toast it until it firms up and crisps at the edges.",
    "Brush or smear niter kibbeh generously over the surface so it melts in.",
    "Dust with berbere and a pinch of salt, pressing it gently into the warm fat.",
    "Cut into wedges and eat hot, while crisp.",
  ],
  modernMove:
    "Kategna is a demonstration of the two-ingredient flavor engine: spiced butter plus berbere on a crisp carb. Toast the injera hard enough to get real crackle, then let the niter kibbeh soak into the hot surface.",
  zeroWasteHero: true,
  notes:
    "A classic use for the offcut edges of injera, or a quick snack while the wots cook. Same two staples — niter kibbeh and berbere — that power every stew on the arc.",
  tags: ["injera", "snack", "zero-waste", "berbere", "niter-kibbeh"],
};
