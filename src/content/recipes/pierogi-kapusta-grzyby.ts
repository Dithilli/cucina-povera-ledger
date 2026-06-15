import type { Recipe } from "../types";

export const pierogiKapustaGrzyby: Recipe = {
  slug: "pierogi-kapusta-grzyby",
  title: "Pierogi z Kapustą i Grzybami",
  cuisine: "polish",
  blurb:
    "The Wigilia dumpling: soured cabbage and a few foraged dried mushrooms cooked down dark and savoury, sealed in dough — pure thrift turned festive.",
  servings: 4,
  perServing: { calories: 500, protein: 14 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "plain flour", qty: "3 cups", cost: 0.5, spansWeeks: true },
    { item: "boiling water + a splash of oil (for the dough)", qty: "1 cup", cost: 0.05 },
    { item: "kiszona kapusta (sauerkraut), rinsed and chopped", qty: "1 lb", cost: 0.9 },
    { item: "dried wild mushrooms (borowiki / porcini), soaked", qty: "1/2 oz", cost: 0.8 },
    { item: "onion, finely diced", qty: "1 large", cost: 0.35 },
    { item: "butter or lard (smalec)", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt, pepper; mushroom soaking water", qty: "to season", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Soak the dried mushrooms in hot water 30 minutes; lift out and chop, keeping the dark soaking liquid.",
    "Make a hot-water dough: stir boiling water and oil into the flour, knead smooth, and rest under a bowl.",
    "Fry the onion in butter until soft, add the rinsed sauerkraut and the mushrooms, and stew with a little soaking water until the cabbage is tender and nearly dry. Season and cool — wet filling tears the dough.",
    "Roll the dough thin, cut rounds, fill, and pinch tightly closed.",
    "Boil in salted water until they float plus a minute. Drain and finish with a little melted butter or more fried onion.",
  ],
  modernMove:
    "Reduce the filling until it's almost dry and let the mushroom soaking water carry the umami — a wet filling is the one thing that splits these dumplings in the pot.",
  notes:
    "The Christmas Eve version, eaten meatless; a half-ounce of dried porcini perfumes the whole batch.",
  zeroWasteHero: true,
  tags: ["pierogi", "kiszona-kapusta", "mushrooms", "polish", "dumplings"],
  sources: [
    {
      title: "Polonist — Pierogi & Polish Sauerkraut Dishes",
      url: "https://www.polonist.com/golabki-polish-stuffed-cabbage-rolls/",
      note: "rinsing sauerkraut and stewing it down with mushrooms before filling",
    },
  ],
};
