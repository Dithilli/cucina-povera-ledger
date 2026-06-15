import type { Recipe } from "../types";

export const ashReshteh: Recipe = {
  slug: "ash-reshteh",
  title: "Ash-e Reshteh",
  cuisine: "persian",
  blurb:
    "The thick noodle-and-bean pottage of Persian New Year — beans, lentils, a mountain of greens and chewy reshteh noodles, crowned with kashk, fried mint and onion.",
  servings: 6,
  perServing: { calories: 620, protein: 26 },
  estCostPerServing: 1.35,
  roles: ["dinner"],
  ingredients: [
    {
      item: "dried chickpeas, soaked overnight",
      qty: "1/2 cup",
      cost: 0.4,
    },
    {
      item: "dried kidney or pinto beans, soaked overnight",
      qty: "1/2 cup",
      cost: 0.4,
    },
    { item: "brown or green lentils", qty: "1/2 cup", cost: 0.35 },
    {
      item: "spinach, chopped (fresh or frozen)",
      qty: "1 lb",
      cost: 1.5,
    },
    {
      item: "parsley, cilantro and chives, chopped",
      qty: "2 big bunches total",
      cost: 1.8,
    },
    { item: "dried dill", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "onions, thinly sliced", qty: "3 large", cost: 0.9 },
    {
      item: "garlic cloves, sliced",
      qty: "4",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "reshteh (Persian noodles) or linguine, broken",
      qty: "8 oz",
      cost: 1.2,
    },
    {
      item: "kashk (or thick yogurt thinned with a little water)",
      qty: "3/4 cup",
      cost: 1.5,
      spansWeeks: true,
    },
    {
      item: "turmeric",
      qty: "1 tsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "dried mint",
      qty: "2 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "oil or ghee",
      qty: "4 tbsp",
      cost: 0.5,
      spansWeeks: true,
    },
    { item: "salt and black pepper", qty: "to taste" },
  ],
  method: [
    "Simmer the soaked chickpeas and kidney beans in plenty of salted water with the turmeric until nearly tender, about an hour. Add the lentils and cook 20 minutes more.",
    "Meanwhile fry the sliced onions slowly in the oil until deep golden; lift out half and reserve for garnish, leaving the rest in the pot. Bloom half the garlic in the same fat.",
    "Pile all the chopped spinach and herbs and the dried dill into the pot. Cook down until the soup turns dark green and thick, 30–40 minutes; loosen with hot water as it tightens — it should stay pourable but heavy.",
    "Drop in the broken reshteh and simmer until soft and the starch has thickened the ash to a glossy, almost creamy body. Season generously.",
    "Make the na'na dagh: gently fry the dried mint and remaining garlic in a little hot oil for 20 seconds until fragrant — do not burn it.",
    "Ladle into bowls. Swirl in kashk, then scatter the reserved fried onion and spoon the mint oil over the top.",
  ],
  modernMove:
    "Pulling half the fried onions and the mint-garlic oil out as finishing garnishes turns a heavy bean stew into something layered — bitter-sweet allium and sharp kashk against the deep green base.",
  tags: ["pottage", "legumes", "noodles", "greens", "kashk", "ash", "one-pot"],
  sources: [
    {
      title: "Naz Deravian (Bottom of the Pot) — Aash-e Reshteh",
      url: "https://bottomofthepot.com/a-fresh-herb-bean-and-noodle-soup-aash-e-reshteh-azadi/",
      note: "The Nowruz noodle-and-bean pottage of chickpeas, beans, lentils and herbs crowned with kashk, fried mint and onion.",
    },
  ],
};
