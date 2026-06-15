import type { Recipe } from "../types";

export const acordaAlentejana: Recipe = {
  slug: "acorda-alentejana",
  title: "Açorda Alentejana",
  cuisine: "portuguese",
  blurb:
    "The Alentejo's bread-and-water dinner — stale bread sopped in a garlic-coriander broth, crowned with a poached egg. Poverty made luxurious by smashing raw garlic and coriander into a paste.",
  servings: 4,
  perServing: { calories: 520, protein: 18 },
  estCostPerServing: 0.74,
  roles: ["dinner"],
  ingredients: [
    {
      item: "stale country bread (broa or sturdy white), torn into chunks",
      qty: "10 oz",
      cost: 0.7,
    },
    {
      item: "garlic cloves",
      qty: "4",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "big bunch fresh coriander (cilantro), stems and all",
      qty: "1",
      cost: 0.6,
    },
    {
      item: "eggs, for poaching",
      qty: "4",
      cost: 0.8,
    },
    {
      item: "olive oil",
      qty: "4 tbsp",
      cost: 0.5,
      spansWeeks: true,
    },
    { item: "boiling water", qty: "5 cups" },
    { item: "coarse salt and black pepper", qty: "to taste" },
  ],
  method: [
    "In a mortar (or large bowl), pound the garlic and a big pinch of coarse salt to a paste, then work in most of the coriander and the olive oil until you have a rough green pesto. This raw paste is the whole dish — it is never cooked, only scalded.",
    "Pile the torn stale bread into a wide tureen or serving bowl and spoon the garlic-coriander paste over it.",
    "Poach the eggs in barely simmering salted water until the whites are just set; lift them out and reserve the water.",
    "Pour the hot poaching water (about 5 cups, topped up if needed) over the bread and paste, stirring once so the bread drinks it and the garlic-coriander blooms into a fragrant green broth.",
    "Slide a poached egg onto each portion, scatter the last coriander leaves, and finish with a thread of olive oil and plenty of black pepper. Eat at once, while the bread still has bite.",
  ],
  modernMove:
    "Pounding the garlic and coriander raw and only scalding it with the egg water keeps the herb electric and the garlic sweet-hot — the broth tastes built, not boiled.",
  notes:
    "A zero-waste classic: the staler the bread the better it drinks the broth. The egg poaching water IS the soup base — never thrown out.",
  zeroWasteHero: true,
  tags: ["bread", "garlic", "coriander", "egg", "soup", "alentejo", "stale-bread"],
  sources: [
    { title: "Easy Portuguese Recipes — Alentejo Bread and Egg Soup (Açorda Alentejana)", url: "https://www.easyportugueserecipes.com/alentejo-bread-egg-soup-acorda-alentejana/", note: "raw garlic-coriander paste, bread, and poached egg scalded with hot broth" },
    { title: "196 flavors — Açorda", url: "https://www.196flavors.com/portugal-acorda/", note: "Alentejo origin and cozinha pobre frugality" },
  ],
};
