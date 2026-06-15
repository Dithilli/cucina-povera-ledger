import type { Recipe } from "../types";

export const couscousTfaya: Recipe = {
  slug: "couscous-tfaya",
  title: "Couscous Tfaya",
  cuisine: "moroccan",
  blurb:
    "Steamed couscous crowned with tfaya — onions cooked down with raisins, cinnamon, and honey until dark and jammy — over chickpeas and fried almonds, the Fassi sweet-savory showpiece.",
  servings: 4,
  perServing: { calories: 640, protein: 17 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "dry couscous", qty: "2 cups", cost: 0.8 },
    { item: "onions, thinly sliced", qty: "3 large", cost: 0.9 },
    { item: "raisins", qty: "1/2 cup", cost: 0.6 },
    { item: "dried chickpeas, soaked", qty: "3/4 cup", cost: 0.5 },
    { item: "whole almonds, blanched", qty: "1/3 cup", cost: 0.7, spansWeeks: true },
    { item: "honey", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "cinnamon and ground ginger", qty: "1 tsp each", cost: 0.15, spansWeeks: true },
    { item: "saffron threads", qty: "small pinch", cost: 0.4, spansWeeks: true },
    { item: "smen or butter", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "olive oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Simmer the chickpeas until tender and keep them warm in a little of their broth. Fry the almonds in oil until golden and set aside.",
    "Steam the couscous in stages over simmering water, raking in salted water, smen, and a pinch of saffron between steamings until the grains are light and separate.",
    "For the tfaya, cook the sliced onions slowly with the soaked raisins, cinnamon, ginger, and a splash of water until soft and deep golden, about half an hour, then stir in the honey and reduce until dark and jammy.",
    "Mound the couscous, scatter the chickpeas, blanket with the tfaya, and finish with the fried almonds and a dusting of cinnamon.",
  ],
  modernMove:
    "Letting the onions caramelize fully before the honey goes in builds the deep, almost toffee-like tfaya — adding honey too early just makes them sticky and pale.",
  notes:
    "A meatless take on the Fes classic; the chickpeas carry the protein and the tfaya delivers all the richness, so no chicken or lamb is needed.",
  tags: ["couscous", "tfaya", "caramelized-onion", "chickpeas", "moroccan"],
  sources: [
    {
      title: "Great British Chefs — Couscous Tfaya (Fes Couscous)",
      url: "https://www.greatbritishchefs.com/recipes/couscous-tfaya-recipe",
      note: "Caramelized onion-and-raisin tfaya with honey and cinnamon over steamed couscous and chickpeas",
    },
  ],
};
