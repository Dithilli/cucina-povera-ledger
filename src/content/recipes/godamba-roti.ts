import type { Recipe } from "../types";

export const godambaRoti: Recipe = {
  slug: "godamba-roti",
  title: "Godamba Roti",
  cuisine: "sri-lankan",
  blurb:
    "An oil-slicked dough rested, then slapped and stretched paper-thin before it blisters on the griddle — Sri Lanka's flaky, foldable flatbread for wrapping curry or chopping into kottu.",
  servings: 4,
  perServing: { calories: 500, protein: 12 },
  estCostPerServing: 0.6,
  roles: ["dinner"],
  ingredients: [
    { item: "all-purpose flour", qty: "3 cups", cost: 0.6 },
    { item: "egg", qty: "1", cost: 0.2 },
    { item: "salt", qty: "1 1/2 tsp" },
    { item: "sugar", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "warm water", qty: "about 1 cup" },
    { item: "oil, for the dough and griddle", qty: "1/2 cup", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Mix flour, salt and sugar, work in the beaten egg, then add warm water gradually and knead 10–12 minutes until the dough is smooth, soft and very elastic.",
    "Divide into balls and submerge them in oil to coat completely. Cover and rest at least 2 hours at room temperature — the oil bath relaxes the gluten so the dough will stretch translucent.",
    "On a well-oiled surface, flatten a ball, then slap and stretch it outward with your fingertips until it is nearly see-through; fold the thin edges back over the center into a square packet to build the flaky layers.",
    "Griddle on a hot, lightly oiled tawa, 30–40 seconds a side, until blistered and golden but still pliable.",
    "Eat hot, torn and dipped into curry, or wrapped around a spoonful of dhal — and save any extras to chop into kottu.",
  ],
  modernMove:
    "The long oil rest is what makes the stretch possible: gluten relaxed in oil pulls translucent without tearing, and folding the thin sheet traps air into flaky layers.",
  notes:
    "Godamba roti is the base for kottu — make a double batch and let some go a day old on purpose.",
  zeroWasteHero: false,
  tags: ["godamba", "roti", "flatbread", "kottu-base", "sri-lankan"],
  sources: [
    {
      title: "Island Smile — Sri Lankan Paratha (Godamba) Roti",
      url: "https://www.islandsmile.org/sri-lankan-paratha-godamba-roti/",
      note: "Oil-rested dough, the stretch-and-fold for flaky layers, and griddling pliable",
    },
  ],
};
