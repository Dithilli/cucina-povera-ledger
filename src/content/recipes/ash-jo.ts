import type { Recipe } from "../types";

export const ashJo: Recipe = {
  slug: "ash-jo",
  title: "Ash-e Jo",
  cuisine: "persian",
  blurb:
    "A gentle barley pottage thickened to a creamy porridge with pearl barley and white beans, brightened with herbs, lemon and kashk — Persian comfort in a bowl.",
  servings: 6,
  perServing: { calories: 480, protein: 18 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "pearl barley", qty: "3/4 cup", cost: 0.5 },
    {
      item: "white beans or chickpeas, soaked",
      qty: "1/2 cup",
      cost: 0.4,
    },
    {
      item: "green lentils",
      qty: "1/3 cup",
      cost: 0.25,
    },
    { item: "onions, thinly sliced", qty: "2 large", cost: 0.6 },
    {
      item: "carrot, finely diced",
      qty: "1",
      cost: 0.2,
    },
    {
      item: "parsley and cilantro, chopped",
      qty: "1 bunch each",
      cost: 1.2,
    },
    {
      item: "spinach, chopped",
      qty: "1/2 lb",
      cost: 0.75,
    },
    {
      item: "garlic cloves, minced",
      qty: "4",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "turmeric",
      qty: "1 tsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "kashk or thick yogurt to finish",
      qty: "1/2 cup",
      cost: 1.0,
      spansWeeks: true,
    },
    {
      item: "dried mint",
      qty: "1 tbsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "lemon juice",
      qty: "1 lemon",
      cost: 0.3,
    },
    {
      item: "oil or ghee",
      qty: "3 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "salt and black pepper", qty: "to taste" },
  ],
  method: [
    "Fry the onions in the oil until golden, reserving a third for garnish. Stir the turmeric and half the garlic into the pot.",
    "Add the soaked beans and barley with plenty of water and simmer until the beans soften and the barley begins to burst, about 50 minutes — stir now and then so it doesn't catch.",
    "Add the lentils and carrot and cook 20 minutes more, until everything is tender and the barley starch has turned the broth silky and thick.",
    "Fold in the spinach and chopped herbs and simmer 15 minutes until the ash is deep and porridge-like; thin with hot water if needed and season hard with salt and pepper.",
    "Fry the dried mint and remaining garlic in a little oil for a few seconds to make mint oil.",
    "Finish each bowl with a swirl of kashk, the reserved fried onion, the mint oil and a squeeze of lemon.",
  ],
  modernMove:
    "Letting the pearl barley overcook until its starch breaks gives the whole pottage a risotto-like cream without any dairy in the body — the kashk on top is then pure accent, not the only richness.",
  tags: ["pottage", "barley", "legumes", "greens", "kashk", "ash", "one-pot"],
  sources: [
    {
      title: "The Caspian Chef — Aash-e Jow",
      url: "https://thecaspianchef.com/2018/12/aash-e-jow/",
      note: "Barley-and-bean pottage simmered with herbs and spinach, finished with kashk, fried onion and a garlic-mint oil.",
    },
  ],
};
