import type { Recipe } from "../types";

export const kaszaZeSkwarkamiPl: Recipe = {
  slug: "kasza-ze-skwarkami",
  title: "Kasza ze Skwarkami",
  cuisine: "polish",
  blurb:
    "Fluffy toasted buckwheat showered with skwarki — crisp little cracklings of smoked pork fat — and the deep golden onions fried in their rendered fat: the oldest, plainest, most quietly delicious of Polish suppers, where almost nothing becomes nearly everything.",
  servings: 4,
  perServing: { calories: 520, protein: 17 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "kasza gryczana (roasted buckwheat groats)", qty: "1 1/2 cups", cost: 0.9 },
    { item: "smoked slab bacon or fatty salt pork (słonina), diced", qty: "6 oz", cost: 1.8 },
    { item: "onions, chopped", qty: "2 large", cost: 0.6 },
    { item: "garlic, minced (optional)", qty: "1 clove", cost: 0.05, spansWeeks: true },
    { item: "butter (optional, for the kasza)", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Rinse the kasza and tip it into 3 cups of boiling salted water. Bring back to a boil, cover, and cook on the lowest heat — without stirring — until the water is absorbed and the grains are tender, about 12–15 minutes. Pull off the heat and let it steam, covered, while you make the topping.",
    "Render the diced bacon or salt pork slowly in a cold dry pan over medium-low heat, so the fat melts out and the bits shrink and crisp into golden skwarki. Scoop the cracklings out with a slotted spoon, leaving the fat behind.",
    "Fry the onions in that rendered fat until deeply golden and sweet, 10–15 minutes; stir in the garlic, if using, for the last minute.",
    "Fork the buckwheat to fluff it (a knob of butter is welcome but not needed — there's plenty of pork fat). Season with salt and lots of black pepper.",
    "Mound the kasza in bowls, spoon over the fried onions and a little of their fat, and scatter the crisp skwarki on top.",
  ],
  modernMove:
    "Render the fat slow and from a cold pan so the skwarki crisp through without scorching, and keep every drop — frying the onions in that smoky fat is the whole point, and it doubles as your seasoning so the dish needs no oil. Cook the kasza untouched, then steam it covered for separate, fluffy grains.",
  notes:
    "The frugal heart of the Polish table: a little fatty pork stretches a bowl of cheap groats into a full meal. A spoon of soured milk or kefir poured over the top is the traditional, refreshing finish.",
  zeroWasteHero: true,
  tags: ["pork", "buckwheat", "kasza", "cracklings", "polish"],
  sources: [
    {
      title: "TasteAtlas — Kasza Gryczana ze Skwarkami",
      url: "https://www.tasteatlas.com/kasza-gryczana-ze-skwarkami",
      note: "Traditional buckwheat porridge topped with rendered pork cracklings (skwarki) and fried onion.",
    },
  ],
};
