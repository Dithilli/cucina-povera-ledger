import type { Recipe } from "../types";

export const curdRiceSi: Recipe = {
  slug: "curd-rice-si",
  title: "Curd Rice (Thayir Sadam)",
  cuisine: "south-indian",
  blurb:
    "Soft rice folded into cool whisked yogurt and crowned with a sputtering mustard-and-curry-leaf tempering — the gentle, cooling close to a South Indian meal and a balm in the heat.",
  servings: 4,
  perServing: { calories: 380, protein: 12 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "rice, cooked soft", qty: "1 1/2 cups raw", cost: 0.6 },
    { item: "plain yogurt (curd)", qty: "1 1/2 cups", cost: 0.7 },
    { item: "milk", qty: "1/4 cup", cost: 0.15 },
    { item: "green chilies, minced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "ginger, grated", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "mustard seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "urad dal", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "chana dal", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "dried red chili", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "asafoetida (hing)", qty: "pinch", cost: 0.05, spansWeeks: true },
    { item: "oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "cilantro, chopped", qty: "small handful", cost: 0.15 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Mash the warm cooked rice lightly with the back of a spoon until it loses its grain — soft, overcooked rice is what makes curd rice creamy rather than clumpy.",
    "Let it cool to room temperature, then fold in the whisked yogurt, milk, and salt; the milk keeps it loose and stops the curd from turning sour as it sits.",
    "Heat oil and crackle mustard seeds, urad dal, chana dal, dried chili, green chilies, ginger, hing, and curry leaves until the dals turn golden.",
    "Pour the hot tempering over the curd rice, fold through with cilantro, and serve cool or at room temperature.",
  ],
  modernMove:
    "Cool the rice fully before adding the curd — fold yogurt into hot rice and it splits and turns acrid; the milk also buys you a day of fridge life before it sours.",
  notes: "Grated carrot, cucumber, or a few pomegranate arils are common household additions.",
  zeroWasteHero: false,
  tags: ["curd-rice", "yogurt", "rice", "tempering", "south-indian"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/curd-rice/",
      note: "Soft mashed rice cooled before folding in curd and milk, finished with mustard-curry-leaf tadka",
    },
  ],
};
