import type { Recipe } from "../types";

export const pierogiMiesem: Recipe = {
  slug: "pierogi-miesem",
  title: "Pierogi z Mięsem",
  cuisine: "polish",
  blurb:
    "The leftover-meat dumpling: Sunday's boiled or roast scraps minced fine with fried onion and bound with a spoonful of broth, then sealed in dough.",
  servings: 4,
  perServing: { calories: 580, protein: 22 },
  estCostPerServing: 1.2,
  roles: ["dinner"],
  ingredients: [
    { item: "plain flour", qty: "3 cups", cost: 0.5, spansWeeks: true },
    { item: "boiling water + a splash of oil (for the dough)", qty: "1 cup", cost: 0.05 },
    { item: "cooked leftover meat (pork, beef, or rosół boiled chicken)", qty: "10 oz", cost: 1.4 },
    { item: "onions, finely diced", qty: "2 medium", cost: 0.5 },
    { item: "stale bread soaked in broth (to bind)", qty: "1 slice", cost: 0.1 },
    { item: "lard (smalec) or butter for frying", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt, pepper, marjoram; śmietana to serve", qty: "to finish", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Make a hot-water dough: stir boiling water and oil into the flour, knead until smooth and elastic, and rest under a bowl.",
    "Fry the onion in lard until golden. Grind or finely chop the leftover meat and mix with the onion and the broth-soaked bread; season well with salt, pepper, and marjoram so it isn't dry.",
    "Roll the dough thin, cut rounds, fill, and pinch the edges tightly shut.",
    "Boil in salted water until they float plus a minute, then lift out.",
    "Brown them in a little lard if you like, and serve with sour cream and the meaty pan juices.",
  ],
  modernMove:
    "A slice of stale bread soaked in the cooking broth keeps reground leftover meat juicy — without it, dry Sunday roast turns to sawdust inside the dumpling.",
  notes:
    "The classic way to finish a Sunday rosół: the boiled chicken or beef becomes Monday's pierogi.",
  zeroWasteHero: true,
  tags: ["pierogi", "leftovers", "meat", "polish", "dumplings"],
  sources: [
    {
      title: "Polish Housewife — Pierogi",
      url: "https://polishhousewife.com/pierogi-ruski/",
      note: "hot-water pierogi dough technique and meat-filling tradition from leftover roast",
    },
  ],
};
