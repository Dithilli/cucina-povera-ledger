import type { Recipe } from "../types";

export const boxtyFeast: Recipe = {
  slug: "boxty-feast",
  title: "Boxty Boxty Boxty",
  cuisine: "irish",
  blurb:
    "Three boxty to a plate — the Leitrim potato pancake of half raw-grated, half mashed spud, fried in bacon fat until lace-edged and crisp — stacked up with rashers and a fried egg for a proper supper.",
  servings: 4,
  perServing: { calories: 600, protein: 21 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "raw potatoes, peeled and grated", qty: "450g", cost: 0.6 },
    { item: "cold mashed potato", qty: "450g", cost: 0.6 },
    { item: "plain flour", qty: "1 cup", cost: 0.2 },
    { item: "buttermilk", qty: "3/4 cup", cost: 0.3 },
    { item: "egg (in the batter)", qty: "1", cost: 0.2 },
    { item: "bicarbonate of soda", qty: "1/2 tsp", cost: 0.02, spansWeeks: true },
    { item: "back bacon rashers", qty: "8", cost: 2.4 },
    { item: "eggs (to top)", qty: "4", cost: 0.8 },
    { item: "butter or bacon dripping for frying", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Wrap the grated raw potato in a clean cloth and wring out as much liquid as you can — dry potato is the secret to crisp boxty. Tip into a bowl with the mashed potato.",
    "Stir in the flour, soda and salt, then beat the egg into the buttermilk and fold it through to a thick, spoonable batter.",
    "Fry the rashers in a hot pan until crisp; lift out and keep warm, leaving the fat behind.",
    "Drop heaped spoons of batter into the bacon fat, flatten to rounds, and fry 3–4 minutes a side until deep golden and crisp at the edges. Work in batches, three per person.",
    "Fry the eggs to finish. Plate three boxty per portion, draped with rashers and crowned with a fried egg.",
  ],
  modernMove:
    "Grate the raw potato straight into water to stop it browning, then wring it bone-dry — the starch left clinging is what binds the cake, while the squeezed-out water would only steam it soft.",
  notes:
    "'Boxty on the griddle, boxty on the pan; if you can't make boxty, you'll never get a man.' The old rhyme insists on three things: grated potato, mashed potato, and a hot greased pan.",
  zeroWasteHero: false,
  tags: ["irish", "boxty", "potato", "bacon", "dinner"],
  sources: [
    {
      title: "Christina's Cucina — Boxty: the Best Ever Irish Potato Pancakes",
      url: "https://www.christinascucina.com/traditional-irish-boxty-best-ever/",
      note: "the raw-grated plus mashed potato ratio and wringing the grated potato dry",
    },
  ],
};
