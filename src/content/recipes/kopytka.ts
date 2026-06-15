import type { Recipe } from "../types";

export const kopytkaPl: Recipe = {
  slug: "kopytka",
  title: "Kopytka",
  cuisine: "polish",
  blurb:
    "Mashed potato kneaded with flour and an egg into a soft dough, rolled into ropes and cut on the slant into little hoof-shaped pillows, boiled till they bob, then rolled in nutty browned butter or golden fried onion — the thriftiest dumpling in Poland, made from yesterday's potatoes.",
  servings: 4,
  perServing: { calories: 560, protein: 13 },
  estCostPerServing: 0.8,
  roles: ["dinner"],
  ingredients: [
    { item: "starchy potatoes (or 2 cups leftover mash)", qty: "1 1/2 lb", cost: 1.0 },
    { item: "flour", qty: "1 1/2 cups", cost: 0.3, spansWeeks: true },
    { item: "egg", qty: "1", cost: 0.25 },
    { item: "butter", qty: "4 tbsp", cost: 0.6, spansWeeks: true },
    { item: "onion, sliced (optional, for frying)", qty: "1", cost: 0.3 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Boil the potatoes whole until tender, peel while warm, and rice or mash them smooth. Cool until just warm and spread them out so the dough won't be wet.",
    "Make a mound of the mash, add the flour, egg, and salt, and knead lightly into a soft, just-tacky dough. Work it as little as possible — over-kneading turns kopytka tough and gummy.",
    "Divide and roll into ropes about a thumb thick. Cut on a diagonal into 1-inch lozenges, the slanted ends giving them their little-hoof shape.",
    "Drop in batches into well-salted boiling water; they're done a minute or two after they float to the top. Lift out with a slotted spoon.",
    "Melt the butter in a pan and cook until it smells nutty and turns golden-brown, then toss the kopytka to coat — or fry them with sliced onion until the edges crisp. Salt and serve hot.",
  ],
  modernMove:
    "Riced warm potato and a barely-kneaded dough are everything: handle it only until it holds, because gluten worked too hard makes leaden dumplings. Then push the butter past melted into browned — those toasted milk solids give plain potato a deep, nutty finish.",
  notes:
    "Kopytka means 'little hooves,' for the slanted shape. A perfect home for leftover mashed potato; pan-fried with onion they double as a side for gulasz.",
  zeroWasteHero: true,
  tags: ["potato", "dumpling", "polish"],
  sources: [
    {
      title: "Polonist — Kopytka: Polish Potato Dumplings",
      url: "https://www.polonist.com/polish-kopytka-dumplings/",
      note: "Mashed-potato dough, hoof-shaped cut, boiled then browned-butter or fried-onion finish.",
    },
  ],
};
