import type { Recipe } from "../types";

export const pierogiRuskie: Recipe = {
  slug: "pierogi-ruskie",
  title: "Pierogi Ruskie",
  cuisine: "polish",
  blurb:
    "The national dumpling: a thin wheat wrapper folded around mashed potato and tangy twaróg, boiled then crowned with onions fried golden in butter.",
  servings: 4,
  perServing: { calories: 560, protein: 18 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "plain flour", qty: "3 cups", cost: 0.5, spansWeeks: true },
    { item: "boiling water + a splash of oil (for the dough)", qty: "1 cup", cost: 0.05 },
    { item: "floury potatoes, boiled", qty: "1 lb", cost: 0.6 },
    { item: "twaróg (Polish farmer's curd cheese)", qty: "7 oz", cost: 1.4 },
    { item: "onions, finely diced", qty: "2 large", cost: 0.7 },
    { item: "butter and lard (smalec) for frying", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "śmietana (sour cream) to serve; salt, pepper", qty: "to finish", cost: 0.6, spansWeeks: true },
  ],
  method: [
    "Make a soft dough: pour boiling water and oil into the flour, stir, then knead a few minutes until smooth and elastic. Rest under a bowl while you make the filling.",
    "Fry half the onion in butter until deep gold and sweet. Mash it into the warm potato with the crumbled twaróg; season hard with salt and pepper — the filling should taste lively, not flat.",
    "Roll the dough thin, cut rounds, drop a spoon of filling in each, and pinch the edges tightly shut so none burst.",
    "Boil in batches of well-salted water; they're done about a minute after they float to the top. Lift out with a slotted spoon.",
    "Fry the rest of the onion in butter and lard until golden, then spoon it — and the buttery fat — over the dumplings. Serve with cold śmietana.",
  ],
  modernMove:
    "Pour boiling water into the flour rather than cold — the hot-water dough is forgiving and stays soft and pliable even reheated the next day fried crisp in butter.",
  notes:
    "Leftovers are arguably better: pan-fry boiled pierogi the next day until the bottoms are lacy and crisp.",
  zeroWasteHero: true,
  tags: ["pierogi", "potato", "twaróg", "polish", "dumplings"],
  sources: [
    {
      title: "Everyday Healthy Recipes — Pierogi Ruskie",
      url: "https://www.everydayhealthyrecipes.com/polish-cheese-potato-dumplings-pierogi-ruskie/",
      note: "potato + twaróg curd cheese + caramelised onion filling, served with sour cream",
    },
  ],
};
