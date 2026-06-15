import type { Recipe } from "../types";

export const matzoBrei: Recipe = {
  slug: "matzo-brei",
  title: "Matzo Brei",
  cuisine: "ashkenazi",
  blurb:
    "Broken matzo softened in hot water, bound with beaten egg, and fried in oil until set and lacy-crisp at the edges — the dish that rescues the shattered sheets at the bottom of the box.",
  servings: 2,
  perServing: { calories: 480, protein: 20 },
  estCostPerServing: 0.65,
  roles: ["dinner", "breakfast"],
  ingredients: [
    { item: "matzo sheets (broken pieces are perfect)", qty: "3 sheets", cost: 0.45, spansWeeks: true },
    { item: "eggs", qty: "4 large", cost: 0.7 },
    { item: "neutral oil", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
    { item: "black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Break the matzo into rough, bite-sized pieces into a bowl. Pour over hot water (or hot milk, if you're making a dairy meal) just to cover, swish once, and drain almost immediately — you want it pliable and softened, not turned to mush.",
    "Beat the eggs with a good pinch of salt and pepper. Pour over the damp matzo and fold until every shard is coated.",
    "Heat the oil in a skillet over medium-high until it shimmers. Add the matzo-egg mixture and let it sit untouched to set and brown before stirring.",
    "For a soft, custardy brei, fold gently as it cooks like a loose scramble. For a crisp, pancake-style brei, press flat and let it brown into a slab, then flip. Eat the moment the egg is just set.",
  ],
  modernMove:
    "The whole thing turns on the soak: dunk and drain fast so the matzo stays in distinct, tender pieces with a little structure. Drowned matzo goes gluey; barely-wet matzo fries up with crisp, lacy edges and a custardy center.",
  notes:
    "Pareve as written (oil), so it can sit beside a meat or dairy meal either way. Go savory with salt, pepper, and fried onion, or sweet with cinnamon-sugar and a dab of jam. For a dairy breakfast, soak in hot milk and fry in butter — but then keep it off the meat table.",
  zeroWasteHero: true,
  tags: ["matzo", "egg", "passover", "pareve"],
  sources: [
    {
      title: "Wikipedia — Matzah brei",
      url: "https://en.wikipedia.org/wiki/Matzah_brei",
      note: "Matzah fried with eggs; an Ashkenazi Passover breakfast in savory and sweet versions.",
    },
    {
      title: "Joan Nathan — Jewish Cooking in America",
      note: "Soak-and-drain method for tender vs. crisp matzo brei.",
    },
  ],
};
