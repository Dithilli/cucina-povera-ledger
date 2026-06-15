import type { Recipe } from "../types";

export const kimchiJjigae: Recipe = {
  slug: "kimchi-jjigae",
  title: "Kimchi-Jjigae (Sour Kimchi Stew)",
  cuisine: "korean",
  blurb:
    "The dish that gives old kimchi its second, better life — overripe sour kimchi simmered with a little pork and tofu until the broth turns deep red, tangy, and rich. This is frugal cooking at its sharpest: a handful of meat, a jar of kimchi gone too sour to eat raw, and you have the most-cooked stew in Korea.",
  servings: 4,
  perServing: { calories: 320, protein: 18 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "well-fermented sour kimchi, chopped (with its juice)", qty: "2 cups", cost: 0.9, spansWeeks: true },
    { item: "pork shoulder or belly, thinly sliced", qty: "6 oz", cost: 2.0 },
    { item: "firm tofu, sliced", qty: "1/2 block (7 oz)", cost: 0.9 },
    { item: "onion, sliced", qty: "1/2", cost: 0.2 },
    { item: "gochugaru (Korean chili flakes)", qty: "1 tbsp", cost: 0.25, spansWeeks: true },
    { item: "gochujang (Korean chili paste)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "garlic cloves, minced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "toasted sesame oil", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "anchovy-kelp stock or water", qty: "2 1/2 cups", cost: 0.4, spansWeeks: true },
    { item: "sugar", qty: "1/2 tsp", cost: 0.02, spansWeeks: true },
    { item: "scallions, sliced", qty: "2", cost: 0.2 },
  ],
  method: [
    "Heat the sesame oil in a pot and brown the sliced pork over medium-high until the edges crisp and the fat renders — this rendered fat is the backbone of the broth's richness, so let it really color.",
    "Add the chopped kimchi, onion, garlic, gochugaru, and gochujang. Stir-fry it all together with the pork for 5 to 7 minutes. Frying the kimchi in the pork fat before adding any liquid is the key step: it sweetens the sour cabbage and blooms the chili into a deep, glossy red base.",
    "Pour in the kimchi juice and the stock, add the sugar to round the sourness, and bring to a boil. Then drop to a steady simmer.",
    "Simmer 20 to 30 minutes, partly covered, until the kimchi is meltingly soft and the broth has turned a deep, savory red. The longer it goes the better it gets, so don't rush it.",
    "Lay the sliced tofu on top, nudge it under the surface, and simmer 5 minutes more just to heat through.",
    "Scatter the scallions over and serve bubbling hot with a bowl of steamed rice. Like most jjigae, it's even better reheated the next day.",
  ],
  modernMove:
    "Frying the sour kimchi in rendered pork fat before any liquid goes in is the move that makes this stew — it caramelizes the cabbage, tames the harsh acidity into deep tang, and blooms the chili, so six ounces of pork tastes like a feast.",
  notes:
    "The whole point is using kimchi too sour to enjoy raw — the sourer the better here. No pork? Canned tuna (drained, stirred in near the end) or a few dried anchovies in the broth make a leaner version. A splash of the kimchi brine is free seasoning; never waste it.",
  zeroWasteHero: true,
  tags: ["dinner", "stew", "jjigae", "kimchi", "pork", "tofu", "fermented", "make-ahead"],
  sources: [
    {
      title: "Korean Bapsang (Hyosun Ro) — Kimchi Jjigae (Kimchi Stew)",
      url: "https://www.koreanbapsang.com/kimchi-jjigae-kimchi-stew/",
      note: "Cooking sour kimchi with pork before adding liquid; using kimchi juice in the broth",
    },
  ],
};
