import type { Recipe } from "../types";

export const plackiZiemniaczanePl: Recipe = {
  slug: "placki-ziemniaczane",
  title: "Placki Ziemniaczane",
  cuisine: "polish",
  blurb:
    "Raw potato grated fine with onion, wrung dry and bound with just egg and its own reclaimed starch, then fried in hot fat until the edges go lacy and the centers stay tender — eaten lazy with a cold dollop of sour cream, or smothered po węgiersku under a ladle of paprika goulash.",
  servings: 4,
  perServing: { calories: 520, protein: 12 },
  estCostPerServing: 0.8,
  roles: ["dinner"],
  ingredients: [
    { item: "russet potatoes", qty: "2 lb", cost: 1.4 },
    { item: "onion", qty: "1 small", cost: 0.3 },
    { item: "eggs", qty: "2", cost: 0.5 },
    { item: "flour", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "neutral oil or lard, for frying", qty: "1/2 cup", cost: 0.6, spansWeeks: true },
    { item: "sour cream (to serve)", qty: "1/2 cup", cost: 0.5 },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Peel and finely grate the potatoes and onion together — the onion slows the potato from browning. Tip into a strainer set over a bowl and press out as much liquid as you can.",
    "Let the drained liquid settle a minute, then pour off the water but scrape the white starch left at the bottom back into the potato.",
    "Mix in the eggs, flour, salt, and pepper. The drier the batter, the crisper the pancake.",
    "Heat a 1/4 inch of fat in a heavy skillet until a shred sizzles on contact. Drop in mounds, flatten thin, and fry 3–5 minutes a side until deep golden and crisp at the edges.",
    "Drain briefly, salt, and serve hot — with sour cream for the everyday version, or stacked under goulash for placki po węgiersku.",
  ],
  modernMove:
    "Save the starch that settles out of the squeezed potato liquid and stir it back in — that reclaimed starch is the real binder, letting you keep flour to a whisper so the placki crisp instead of turning to dough.",
  notes:
    "Made in Poland since the 16th century. Po węgiersku ('Hungarian style') drowns them in goulash for a full dinner; plain with sour cream is the homier serve.",
  zeroWasteHero: false,
  tags: ["potato", "fried", "polish"],
  sources: [
    {
      title: "Polonist — Placki Ziemniaczane: Polish Potato Pancakes",
      url: "https://www.polonist.com/placki-polish-potato-pancakes/",
      note: "Grated potato and onion, reclaimed starch binder, sour cream and goulash serves.",
    },
  ],
};
