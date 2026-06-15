import type { Recipe } from "../types";

export const roti: Recipe = {
  slug: "roti",
  title: "Roti",
  cuisine: "north-indian",
  blurb:
    "The unleavened whole-wheat flatbread cooked daily across the North — two ingredients, no oven, puffed over an open flame. The edible plate and spoon that carries every dal to the mouth.",
  servings: 4,
  perServing: { calories: 240, protein: 8 },
  estCostPerServing: 0.18,
  roles: ["base"],
  ingredients: [
    { item: "atta (whole-wheat chapati flour)", qty: "2 cups", cost: 0.55 },
    { item: "warm water", qty: "~3/4 cup", cost: 0 },
    { item: "salt, optional", qty: "1/2 tsp", spansWeeks: true },
    { item: "ghee, to finish (optional)", qty: "1 tbsp", cost: 0.13, spansWeeks: true },
  ],
  method: [
    "Mix the flour and salt, then add warm water a little at a time, bringing it together into a soft, slightly sticky dough. Knead 5–8 minutes until smooth and springy.",
    "Cover and rest 20–30 minutes. This relaxes the gluten so the rounds roll out thin without snapping back — skip it and the rotis fight you.",
    "Divide into 8 balls. On a floured surface, roll each into a thin 6–7 inch circle, dusting with flour to stop sticking.",
    "Heat a dry tawa or skillet over medium-high. Cook a roti ~30 seconds until pale bubbles form, flip, cook until brown spots appear underneath.",
    "Then the puff: lift it with tongs straight onto the open flame (or press the cooked side down on the hot pan) and it balloons as the trapped steam inflates it. Flip back briefly.",
    "Brush with a little ghee if you like and stack under a cloth to stay soft.",
  ],
  modernMove:
    "The puff is steam, not skill: an even thin roll plus a fully hot surface traps water as a steam pocket that inflates the bread and cooks the inside in seconds. If yours won't puff, your pan isn't hot enough or the round is uneven — fix those two and it works every time.",
  notes:
    "Atta is hard durum-style wheat ground with the bran in, so a roti is genuinely whole-grain and cheap. No yeast, no oven, no oil needed — the most frugal bread in the book.",
  tags: ["base", "roti", "flatbread", "whole-wheat", "bread"],
};
