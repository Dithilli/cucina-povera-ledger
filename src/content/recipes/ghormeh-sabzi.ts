import type { Recipe } from "../types";

export const ghormehSabzi: Recipe = {
  slug: "ghormeh-sabzi",
  title: "Ghormeh Sabzi",
  cuisine: "persian",
  blurb:
    "Iran's beloved herb stew — a deep green braise of long-fried parsley, cilantro, and fenugreek with kidney beans and a little lamb, soured with whole dried limes, ladled over chelo.",
  servings: 6,
  perServing: { calories: 540, protein: 24 },
  estCostPerServing: 1.85,
  roles: ["dinner"],
  ingredients: [
    { item: "lamb or beef stew meat, cubed", qty: "3/4 lb", cost: 4.0 },
    { item: "parsley, cilantro, and a little chive, finely chopped", qty: "6 packed cups", cost: 2.5 },
    { item: "dried fenugreek leaves", qty: "2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "cooked red kidney beans", qty: "1 1/2 cups", cost: 0.6 },
    { item: "large onion, diced", qty: "1", cost: 0.3 },
    { item: "dried limes (limoo amani), pierced", qty: "4", cost: 0.8, spansWeeks: true },
    { item: "turmeric", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "oil", qty: "1/4 cup", cost: 0.4, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", cost: 0 },
  ],
  method: [
    "Fry the diced onion in oil until golden, stir in the turmeric for 30 seconds, then add the meat and brown it on all sides. Add water to barely cover and leave it to simmer while you do the herbs.",
    "Fry the herbs: this is the soul of the dish. In a wide pan with plenty of oil, fry the chopped parsley, cilantro, chive, and fenugreek over medium heat, stirring, for a full 15 to 20 minutes until they darken from bright green to a deep, almost black-green and smell nutty and concentrated.",
    "Scrape the fried herbs into the meat pot. Pierce the dried limes and drop them in whole, along with the kidney beans. Top up with water to make a loose stew.",
    "Simmer gently, partly covered, for at least 1 1/2 to 2 hours, until the meat is spoon-tender and the stew has turned thick and dark. Press the dried limes against the side once or twice to release their sourness; fish them out if they threaten to turn bitter.",
    "Season with salt and pepper and let it rest. Serve over chelo with its tahdig.",
  ],
  modernMove:
    "Frying the herbs long and slow until they go dark is non-negotiable — it transforms raw, grassy greens into the deep, savory backbone of the stew. The pierced dried limes do the rest, lending the haunting fermented-citrus sourness that defines ghormeh sabzi.",
  notes:
    "A little meat goes a long way: under a pound feeds six because the beans and the mountain of herbs carry the bulk. Even better the next day.",
  tags: ["dinner", "stew", "herbs", "kidney-beans", "dried-lime", "lamb", "khoresh"],
  sources: [
    { title: "Wikipedia — Ghormeh sabzi", url: "https://en.wikipedia.org/wiki/Ghormeh_sabzi", note: "long-sauteed parsley/cilantro/chive with fenugreek, kidney beans, dried lime, and lamb" },
    { title: "Naz Deravian — Bottom of the Pot (cookbook)", note: "Azari-tradition ghormeh sabzi establishing the deep-fried-herb technique as the dish's backbone" },
  ],
};
