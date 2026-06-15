import type { Recipe } from "../types";

export const lemonRiceSi: Recipe = {
  slug: "lemon-rice-si",
  title: "Lemon Rice (Chitranna)",
  cuisine: "south-indian",
  blurb:
    "Turmeric-gold rice studded with crunchy fried peanuts and a sputtering lentil tadka, lifted at the last second by raw lemon juice off the heat — the fifteen-minute lunchbox staple of Karnataka and the Tamil country.",
  servings: 4,
  perServing: { calories: 430, protein: 9 },
  estCostPerServing: 0.6,
  roles: ["dinner"],
  ingredients: [
    { item: "cooked rice, cooled and fluffed", qty: "4 cups", cost: 0.8 },
    { item: "lemons, juiced", qty: "2", cost: 0.5 },
    { item: "peanuts", qty: "1/3 cup", cost: 0.4 },
    { item: "chana dal and urad dal", qty: "2 tbsp total", cost: 0.2, spansWeeks: true },
    { item: "green chilies, slit", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "dried red chili", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "mustard seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "asafoetida (hing)", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "curry leaves", qty: "2 sprigs", cost: 0.1, spansWeeks: true },
    { item: "neutral or coconut oil", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Spread the cooked rice to cool and fluff it so the grains stay loose — warm sticky rice clumps and won't take the seasoning evenly.",
    "Heat the oil and pop the mustard seeds, then fry the chana dal, urad dal, and peanuts until the dals are golden and the peanuts crisp. Add the dried red chili, green chilies, and curry leaves.",
    "Turn the heat off, then stir in the turmeric and asafoetida — turmeric scorches fast, so it goes in off the flame where it just blooms in the residual heat.",
    "Pour the warm tempering over the rice with salt and fold it through until every grain is yellow and glossy.",
    "Squeeze in the lemon juice last, off the heat, and toss once. Cooking the lemon would turn it flat and bitter; raw, it stays bright and sharp.",
  ],
  modernMove:
    "Killing the heat before the turmeric, asafoetida, and lemon go in is the whole craft here — each is destroyed by direct frying, so the dish is built in the pan's afterglow.",
  notes: "Day-old rice is ideal. The same tempering with grated raw mango instead of lemon makes the seasonal cousin, mavinakayi chitranna.",
  zeroWasteHero: true,
  tags: ["rice", "lemon", "karnataka", "peanuts", "tadka", "south-indian"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/lemon-rice/",
      note: "Chitranna — peanut-and-dal tempering, turmeric and asafoetida off heat, raw lemon folded in last",
    },
  ],
};
