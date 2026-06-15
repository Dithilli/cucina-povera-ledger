import type { Recipe } from "../types";

export const caramelizedOnions: Recipe = {
  slug: "caramelized-onions",
  title: "Jammy Fried Onions",
  cuisine: "ashkenazi",
  blurb:
    "Onions cooked down in neutral oil until they collapse into sweet, brown jam — the pareve flavor foundation that lives under nearly everything: kasha, kugel, knish, a plate of eggs. In a kitchen with almost nothing, a heap of onions melted patiently is the whole seasoning.",
  servings: 8,
  perServing: { calories: 70, protein: 1 },
  estCostPerServing: 0.25,
  roles: ["base", "side"],
  ingredients: [
    { item: "onions, thinly sliced", qty: "4 large (about 2 lb)", cost: 1.6 },
    { item: "neutral oil", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt", qty: "1/2 tsp", spansWeeks: true },
  ],
  method: [
    "Slice the onions thin and even — root to tip holds their shape, but for jam any thin slice works.",
    "Warm the oil in a wide heavy skillet over medium heat, add the onions and salt, and toss to coat. The salt pulls out water and helps them collapse.",
    "Cook, stirring every few minutes, for 30–45 minutes. They'll go translucent, then pale gold, then deep brown and sticky. Lower the heat as they darken so they melt rather than scorch.",
    "If they catch on the pan, splash in a little water and scrape up the browned bits — that fond is pure flavor stirred right back in.",
    "Cook until you have a glossy, mahogany jam. Cool and keep covered in the fridge; they only get better the next day.",
  ],
  modernMove:
    "Resist the urge to crank the heat. Real caramelization is slow — a deglaze with a spoon of water whenever the pan goes dry rescues the browning without burning it, and you get even, jammy onions instead of crisp-and-raw.",
  notes:
    "Made in oil, these stay pareve, so they slide into a dairy kugel or a fleishig soup with equal ease — the one base that goes anywhere on the Shabbos table.",
  tags: ["base", "onion", "pareve"],
};
