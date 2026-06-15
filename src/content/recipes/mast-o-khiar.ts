import type { Recipe } from "../types";

export const mastOKhiar: Recipe = {
  slug: "mast-o-khiar",
  title: "Mast-o-Khiar",
  cuisine: "persian",
  blurb:
    "Cool Persian yogurt and cucumber, loosened with dried mint and a whisper of dried rose and walnut — the calm, tart counterweight set on every table beside the rice and stews.",
  servings: 4,
  perServing: { calories: 130, protein: 7 },
  estCostPerServing: 0.55,
  roles: ["side", "base"],
  ingredients: [
    { item: "plain whole-milk yogurt", qty: "2 cups", cost: 1.2 },
    { item: "cucumbers, finely diced", qty: "2", cost: 0.7 },
    { item: "dried mint", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "walnuts, chopped (optional)", qty: "2 tbsp", cost: 0.4 },
    { item: "dried rose petals, crushed (optional)", qty: "1 tsp", cost: 0.2, spansWeeks: true },
    { item: "garlic clove, grated (optional)", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste", cost: 0 },
  ],
  method: [
    "If your yogurt is thin, drain it for an hour in a cloth-lined sieve so the finished dish stays scoopable rather than soupy.",
    "Dice the cucumbers small — a fine dice gives more refreshing crunch in every spoonful than big chunks. Salt them lightly and let them sit 10 minutes, then pat off the released water.",
    "Stir the yogurt smooth, then fold in the cucumber, dried mint, optional grated garlic, and most of the walnuts. Season with salt and pepper.",
    "Chill at least 30 minutes for the mint to bloom into the yogurt. Serve cold, scattered with the reserved walnuts and crushed rose petals.",
  ],
  modernMove:
    "Rubbing dried mint between your palms as it goes in releases far more aroma than fresh here — and salting then draining the cucumber keeps the yogurt thick instead of watering it down as it sits.",
  notes:
    "Doubles as a dip with barbari bread or a light lunch over rice. Thicker, it becomes the spoon-firm borani style.",
  tags: ["side", "base", "yogurt", "cucumber", "mint", "vegetarian", "no-cook"],
};
