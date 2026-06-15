import type { Recipe } from "../types";

export const bigos: Recipe = {
  slug: "bigos",
  title: "Bigos",
  cuisine: "polish",
  blurb:
    "The great thrift pot: soured and fresh cabbage stewed for hours with whatever meat the week left behind, deepening every time it's reheated.",
  servings: 4,
  perServing: { calories: 470, protein: 24 },
  estCostPerServing: 1.5,
  roles: ["dinner"],
  ingredients: [
    { item: "kiszona kapusta (sauerkraut), rinsed and chopped", qty: "1 lb", cost: 0.9 },
    { item: "fresh white cabbage, shredded", qty: "1/2 small head", cost: 0.6 },
    { item: "odds of meat (kiełbasa ends, boczek, leftover roast)", qty: "12 oz", cost: 2.2 },
    { item: "onion, diced", qty: "1 large", cost: 0.35 },
    { item: "dried mushrooms, soaked", qty: "1/3 oz", cost: 0.6 },
    { item: "tomato paste; a few prunes", qty: "1 tbsp + 4", cost: 0.4 },
    { item: "bay, juniper, marjoram, pepper; lard (smalec)", qty: "to season", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Render the boczek and brown the meat and sausage in a heavy pot, then lift it out. Soften the onion in the fat.",
    "Add the rinsed sauerkraut, the fresh cabbage, and the soaked mushrooms with their dark liquor. Stir in tomato paste, prunes, bay, crushed juniper, and marjoram.",
    "Return the meat, barely cover with water, and stew low and slow for at least two hours — longer is better — until everything is meltingly soft and the liquid is dark and scant.",
    "Cool, then reheat the next day and, ideally, the day after: bigos genuinely improves on its second and third life.",
  ],
  modernMove:
    "Don't aim to finish it in one sitting — bigos is built to be reheated. Each return to the simmer over two or three days marries the meats and rounds the sour edge.",
  notes:
    "The classic clean-out-the-fridge dish: any cured or roast meat scrap belongs here. Serve with rye bread.",
  zeroWasteHero: true,
  tags: ["bigos", "kiszona-kapusta", "cabbage", "leftovers", "polish", "stew"],
  sources: [
    {
      title: "Eating European — Bigos, Polish Hunter Stew",
      url: "https://eatingeuropean.com/bigos-polish-hunter-stew/",
      note: "rinsing sauerkraut, mix of meats and mushrooms, and reheating over 2–3 days",
    },
  ],
};
