import type { Recipe } from "../types";

export const tagineKhodra: Recipe = {
  slug: "tagine-khodra",
  title: "Tagine Khodra",
  cuisine: "moroccan",
  blurb:
    "A meatless seven-vegetable tagine arranged into a glowing dome — carrots, turnip, squash, and zucchini steamed over chickpeas in a turmeric-ginger broth, the thriftiest plate in the repertoire.",
  servings: 4,
  perServing: { calories: 480, protein: 16 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "dried chickpeas, soaked overnight", qty: "3/4 cup", cost: 0.5 },
    { item: "carrots, halved lengthwise", qty: "2", cost: 0.3 },
    { item: "turnip, in wedges", qty: "1", cost: 0.3 },
    { item: "pumpkin or butternut squash, in chunks", qty: "1/2 lb", cost: 0.6 },
    { item: "zucchini, in batons", qty: "1", cost: 0.4 },
    { item: "potato, quartered", qty: "1", cost: 0.3 },
    { item: "onion, sliced", qty: "1 large", cost: 0.3 },
    { item: "preserved lemon, slivered", qty: "1/2", cost: 0.25, spansWeeks: true },
    { item: "turmeric, ginger, ras el hanout", qty: "1 tsp each", cost: 0.2, spansWeeks: true },
    { item: "olive oil", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "cilantro and parsley", qty: "1 bunch", cost: 0.3 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Lay the sliced onion in the tagine with olive oil, turmeric, ginger, ras el hanout, the soaked chickpeas, and enough water to start a broth. Simmer covered until the chickpeas begin to soften, about 40 minutes.",
    "Add the slow vegetables first — carrots, turnip, potato — and continue cooking gently.",
    "Arrange the squash and zucchini standing up around the dome so they steam rather than collapse, tuck in the preserved lemon, and cook until everything is tender but holding its shape.",
    "Spoon the reduced broth over the vegetables, scatter chopped herbs, and serve with khobz or over a mound of couscous.",
  ],
  modernMove:
    "Arranging the vegetables in a cone and cooking them by steam from the broth keeps each one distinct and intact — a stew this thrifty earns its looks from the geometry, not from meat.",
  zeroWasteHero: true,
  notes:
    "Seven vegetables is the lucky number; use whatever the market is giving away cheap. The chickpeas carry the protein, so no meat is needed.",
  tags: ["tagine", "vegetable", "vegetarian", "chickpeas", "moroccan"],
  sources: [
    {
      title: "The Mediterranean Dish — Easy Moroccan Vegetable Tagine",
      url: "https://www.themediterraneandish.com/moroccan-vegetable-tagine-recipe/",
      note: "Layered seven-vegetable tagine with chickpeas in a turmeric-ginger broth, no meat",
    },
  ],
};
