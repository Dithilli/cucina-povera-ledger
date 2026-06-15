import type { Recipe } from "../types";

export const kukuSabzi: Recipe = {
  slug: "kuku-sabzi",
  title: "Kuku Sabzi",
  cuisine: "persian",
  blurb:
    "A herb frittata that is more green than egg — parsley, cilantro, dill and chives bound with just enough egg, flecked with walnut and barberry, served the night of Nowruz and any frugal night after.",
  servings: 4,
  perServing: { calories: 470, protein: 19 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "eggs", qty: "6", cost: 1.5 },
    {
      item: "parsley, cilantro, dill and chives, very finely chopped",
      qty: "4 packed cups total",
      cost: 3.0,
    },
    {
      item: "walnuts, chopped",
      qty: "1/4 cup",
      cost: 0.8,
      spansWeeks: true,
    },
    {
      item: "barberries or dried cranberries (optional)",
      qty: "2 tbsp",
      cost: 0.5,
      spansWeeks: true,
    },
    {
      item: "garlic clove, grated",
      qty: "1",
      cost: 0.05,
      spansWeeks: true,
    },
    {
      item: "turmeric",
      qty: "1/2 tsp",
      cost: 0.05,
      spansWeeks: true,
    },
    {
      item: "baking powder (for lift)",
      qty: "1/2 tsp",
      cost: 0.05,
      spansWeeks: true,
    },
    {
      item: "flour",
      qty: "1 tbsp",
      cost: 0.05,
      spansWeeks: true,
    },
    {
      item: "oil or ghee",
      qty: "3 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "salt and black pepper", qty: "to taste" },
  ],
  method: [
    "Beat the eggs with the turmeric, baking powder, flour, grated garlic, salt and plenty of pepper.",
    "Fold in the huge volume of finely chopped herbs, the walnuts and the barberries — the mix should look like green batter barely held by egg.",
    "Heat the oil in a wide nonstick pan over low-medium heat. Pour in the mixture and spread flat.",
    "Cover and cook gently 12–15 minutes until set most of the way through and the bottom is deep brown — low and slow keeps the herbs from turning bitter.",
    "Slide onto a plate, invert the pan over it and flip, then cook the second side 5–8 minutes until firm.",
    "Cool a little and cut into wedges or diamonds; serve warm or room temperature with flatbread, yogurt and pickles.",
  ],
  modernMove:
    "The high herb-to-egg ratio plus a pinch of baking powder gives a kuku that's almost a savory herb cake — eaten room-temperature it travels and keeps for days, making it the best frugal protein of the week.",
  zeroWasteHero: true,
  tags: ["kuku", "frittata", "eggs", "herbs", "walnut", "barberry", "meatless"],
  sources: [
    {
      title: "Ayeh Manfre — Cooking With Ayeh",
      url: "https://cookingwithayeh.com/kuku-sabzi-persian-herb-frittata/",
      note: "Family recipe supporting the high herb-to-egg ratio, walnut and barberry, served at Nowruz.",
    },
  ],
};
