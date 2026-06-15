import type { Recipe } from "../types";

export const schmaltzAndGribenes: Recipe = {
  slug: "schmaltz-and-gribenes",
  title: "Schmaltz & Gribenes",
  cuisine: "ashkenazi",
  blurb:
    "Chicken or goose fat rendered low and slow with onion until the skin shards turn deep amber — the liquid gold is schmaltz, the cracklings are gribenes. The olive oil of the Ashkenazi kitchen, made from what a thriftier cook would have thrown away.",
  servings: 12,
  perServing: { calories: 110, protein: 2 },
  estCostPerServing: 0.15,
  roles: ["base", "side"],
  ingredients: [
    { item: "chicken (or goose) fat and skin, diced small", qty: "1 lb", cost: 1.2 },
    { item: "onion, thinly sliced", qty: "1 large", cost: 0.4 },
    { item: "water", qty: "1/4 cup", cost: 0 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Trim the fat and skin from a chicken (or save it in the freezer over weeks until you have a pound) and chop it into small, even pieces — the smaller the dice, the more fat renders out.",
    "Put the fat, skin, and a splash of water into a cold heavy pot. The water keeps the fat from browning too fast at the start and gives it time to render gently.",
    "Set over low heat and let it go, stirring now and then, for 20–30 minutes as the water cooks off and the fat turns clear and golden. Patience here is everything; high heat scorches the schmaltz and turns it bitter.",
    "When the skin pieces start to shrink and color, add the sliced onion. Cook another 15–25 minutes, stirring, until the gribenes are deep brown and crisp and the onion is jammy and dark at the edges.",
    "Strain through a sieve: the clear rendered fat is your schmaltz, the crisp solids are the gribenes. Salt the gribenes while hot. Cool the schmaltz and keep it covered in the fridge for weeks.",
  ],
  modernMove:
    "Start cold with a splash of water and never let the pot run hot — you want a slow render, not a fry. The onion goes in only in the second half so it caramelizes into the gribenes instead of burning. That low, unhurried heat is the whole secret to clean-tasting schmaltz.",
  notes:
    "Nothing is wasted: the fat that would have been scrap becomes the cooking medium for the whole week — kasha, kugel, fried eggs, soup — and the gribenes are a salted snack or a crown for chopped liver and mashed potato. Strictly fleishig; never let it near dairy.",
  zeroWasteHero: true,
  tags: ["base", "schmaltz", "fat", "fleishig", "zero-waste"],
};
