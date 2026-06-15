import type { Recipe } from "../types";

export const potatoKugel: Recipe = {
  slug: "potato-kugel",
  title: "Potato Kugel",
  cuisine: "ashkenazi",
  blurb:
    "Grated potato and onion bound with egg, slicked with hot oil, and baked until the top shatters like glass and the inside sets to a savory custard. The dish that stretches a sack of potatoes across a Shabbos table — humble, golden, and quietly grand.",
  servings: 6,
  perServing: { calories: 430, protein: 11 },
  estCostPerServing: 0.55,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "russet potatoes", qty: "2 1/2 lb", cost: 1.75 },
    { item: "onion", qty: "1 large", cost: 0.4 },
    { item: "eggs", qty: "3", cost: 0.75 },
    { item: "neutral oil (or schmaltz)", qty: "1/3 cup", cost: 0.4, spansWeeks: true },
    { item: "matzo meal", qty: "1/4 cup", cost: 0.4, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Heat the oven to 400°F (205°C). Pour the oil into a 9x13 baking dish (or a 10-inch skillet) and slide it into the oven to get screaming hot.",
    "Peel and grate the potatoes and onion — fine for a smooth, custardy kugel, coarse for a more rustic one. Grate the onion in with the potato to keep it from browning.",
    "Squeeze the gratings hard in a towel to wring out the water, saving and stirring back the starch that settles out. Mix with the eggs, matzo meal, plenty of salt, and pepper.",
    "Carefully pour most of the smoking-hot oil from the dish into the potato mix and stir fast — it half-sets the edges and seasons the whole batter. Scrape everything back into the hot, oiled dish; it should hiss.",
    "Bake 60–75 minutes until the top is deep brown and crackly and a knife comes out clean. Let it rest 10 minutes before cutting so the custard sets.",
  ],
  modernMove:
    "Preheat the oil in the pan until it smokes, then stir most of it straight into the batter before baking. That blast of hot fat sets a crust on contact and gives you the prized shatter-top and a creamy, set interior instead of a soggy middle.",
  notes:
    "Made with oil it's pareve and goes with anything; made with schmaltz it's fleishig and richer — pick one and keep it off the dairy table either way. A cold slab the next morning, fried in a little oil, is its own quiet reward.",
  tags: ["potato", "baked", "kugel", "pareve"],
  sources: [
    {
      title: "Wikipedia — Kugel",
      url: "https://en.wikipedia.org/wiki/Kugel",
      note: "Baked casserole made from shredded potato; the savory pareve/fleishig version.",
    },
    {
      title: "Gil Marks — Encyclopedia of Jewish Food",
      note: "Potato kugel history and the hot-oil crust technique.",
    },
  ],
};
