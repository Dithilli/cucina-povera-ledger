import type { Recipe } from "../types";

export const savoryOatPudding: Recipe = {
  slug: "savory-oat-pudding",
  title: "Savory Oat & Onion Pudding",
  cuisine: "irish",
  blurb:
    "Toasted oatmeal stirred through sweet fried onion and a little bacon, then baked into a savoury herbed pudding — the thrift cook's whole dinner built from a handful of oats and what's in the press.",
  servings: 4,
  perServing: { calories: 540, protein: 18 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "medium oatmeal (pinhead)", qty: "2 cups", cost: 0.8 },
    { item: "onions, finely chopped", qty: "2 large", cost: 0.6 },
    { item: "streaky bacon, diced", qty: "3 oz", cost: 0.9 },
    { item: "whole milk", qty: "1 1/2 cups", cost: 0.45 },
    { item: "egg", qty: "1", cost: 0.25 },
    { item: "butter, thyme, parsley, salt, pepper", qty: "to taste", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Heat the oven to 375°F. Fry the diced bacon in a wide ovenproof pan until its fat runs, then add a knob of butter and the onions and cook gently until soft, golden and sweet, 10 minutes.",
    "Stir in the oatmeal and a good pinch of thyme and toast it in the fat for 4–5 minutes, stirring, until it smells nutty and turns a shade darker.",
    "Beat the egg into the milk with plenty of salt and pepper, pour it over the oats, and stir to a loose, porridge-like batter — it should still pour.",
    "Smooth it level in the pan (or scrape into a buttered dish), dot the top with butter, and bake 30–35 minutes until set, with a crisp golden crust and a soft, savoury centre.",
    "Scatter with parsley and cut into wedges. Eat hot as a supper, with a green salad or a fried egg on top.",
  ],
  modernMove:
    "Toasting the oats in the bacon fat before the liquid goes in is the whole trick — it keeps the grain distinct and nutty instead of letting it slump into plain porridge.",
  notes:
    "A close cousin of Scottish skirlie, baked rather than pan-fried so it becomes a full dinner. Almost free to make: the bacon is a seasoning, not the main event, so leave it out for a meatless night.",
  zeroWasteHero: true,
  tags: ["oats", "oatmeal", "onion", "bacon", "baked", "dinner", "irish"],
  sources: [
    {
      title: "Scottish Scran — Traditional Scottish Skirlie Recipe",
      url: "https://scottishscran.com/scottish-skirlie-recipe/",
      note: "oatmeal toasted with onion and fat and seasoned with thyme — the savoury-oats base adapted into a baked pudding",
    },
  ],
};
