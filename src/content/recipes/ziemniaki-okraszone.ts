import type { Recipe } from "../types";

export const ziemniakiOkraszone: Recipe = {
  slug: "ziemniaki-okraszone",
  title: "Ziemniaki Okraszone",
  cuisine: "polish",
  blurb:
    "Boiled potatoes dressed in okrasa — sizzling cracklings and golden onion fried out of a little lard or bacon — then tossed with a fistful of dill. The plainest plate in the Polish repertoire and, with a bowl of soured milk or kiszona kapusta alongside, a whole frugal dinner.",
  servings: 4,
  perServing: { calories: 430, protein: 9 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "potatoes", qty: "2 lb", cost: 1.4 },
    { item: "slab bacon or salt pork, diced", qty: "4 oz", cost: 1.0 },
    { item: "lard (smalec) or oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "onion, diced", qty: "1 medium", cost: 0.4 },
    { item: "fresh dill, chopped", qty: "3 tbsp", cost: 0.3 },
    { item: "salt and pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Peel the potatoes (or scrub young ones) and boil in well-salted water until tender, 20–25 minutes. Drain and return to the warm pot.",
    "Meanwhile, render the diced bacon in a little lard over medium heat until the bits turn crisp and brown and their fat runs out — these golden cracklings are the okrasa.",
    "Add the onion to the bacon fat and fry until soft and golden at the edges.",
    "Pour the hot cracklings, onion, and their fat over the drained potatoes. Toss so every potato is glossed.",
    "Fold through the dill, grind over pepper, taste for salt, and serve at once while the okrasa still sizzles.",
  ],
  modernMove:
    "Pour the cracklings over hot, just-drained potatoes — the residual heat lets the potatoes drink up the rendered fat and onion sweetness instead of sitting greasy on top.",
  notes:
    "Okrasa simply means the fried fat-and-cracklings garnish that made plain food a meal in lean times. Serve with a glass of zsiadłe mleko (soured milk) or a forkful of sauerkraut for the full peasant plate. Skip the bacon and use only browned onion in lard for a leaner version.",
  zeroWasteHero: false,
  tags: ["polish", "potatoes", "cracklings", "dill", "everyday"],
  sources: [
    {
      title: "Polish Housewife (Lois Britton) — Polish Potatoes with Dill",
      url: "https://polishhousewife.com/polish-potatoes-with-dill/",
      note: "Boiled potatoes dressed with rendered fat/cracklings (okrasa) and fresh dill",
    },
  ],
};
