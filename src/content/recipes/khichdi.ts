import type { Recipe } from "../types";

export const khichdi: Recipe = {
  slug: "khichdi",
  title: "Khichdi",
  cuisine: "north-indian",
  blurb:
    "Rice and split moong lentils cooked soft together in one pot, finished with a spiced ghee tempering — India's most forgiving comfort dinner and its best way to use up odds and ends.",
  servings: 4,
  perServing: { calories: 470, protein: 17 },
  estCostPerServing: 0.6,
  roles: ["dinner"],
  zeroWasteHero: true,
  ingredients: [
    { item: "rice", qty: "1 cup", cost: 0.4 },
    { item: "split yellow moong dal", qty: "1/2 cup", cost: 0.4 },
    {
      item: "stray vegetables — peas, carrot, tomato, spinach stems, whatever needs using",
      qty: "1 1/2 cups",
      cost: 0.5,
    },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    {
      item: "ghee or oil",
      qty: "2 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "tempering: cumin seeds, asafoetida (hing), ginger, dried red chile",
      qty: "1 tsp + aromatics",
      cost: 0.15,
      spansWeeks: true,
    },
    { item: "salt", qty: "to taste", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Rinse the rice and moong dal together until the water runs clear, then drain.",
    "In a pot or pressure cooker, heat the ghee and crackle the cumin with the hing, ginger, and dried chile until fragrant — this tarka at the start flavors the whole pot.",
    "Add the chopped vegetables and turmeric, stir a minute, then tip in the rice and dal with salt and about 4 1/2 cups water.",
    "Cook until everything is very soft and porridge-like: 3 whistles in a pressure cooker, or ~25 minutes covered on the stove, adding hot water to keep it loose. Khichdi should be soupy, not dry.",
    "Optional second tempering: a fresh spoon of ghee with cumin poured over each bowl. Serve with yogurt or raita.",
  ],
  modernMove:
    "Khichdi is the kitchen's clearing-out dish — built to absorb whatever vegetables and stems are on their way out — and the double tempering (start and finish) layers the same spice raw and bloomed for depth from almost nothing.",
  tags: ["rice", "lentils", "moong-dal", "one-pot", "comfort", "zero-waste"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/moong-dal-khichdi-recipe/",
      note: "One-pot rice and moong dal cooked soft with a cumin-ghee tempering",
    },
  ],
};
