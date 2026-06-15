import type { Recipe } from "../types";

export const fonioAuxLegumes: Recipe = {
  slug: "fonio-aux-legumes",
  title: "Fonio aux Légumes",
  cuisine: "senegalese",
  blurb:
    "Featherlight steamed fonio — the ancient Sahel grain that cooks in minutes — under a clean stew of carrot, cabbage, and onion in a fish-stock nokoss.",
  servings: 4,
  perServing: { calories: 460, protein: 13 },
  estCostPerServing: 1.25,
  roles: ["dinner"],
  ingredients: [
    { item: "fonio", qty: "1 1/2 cups", cost: 1.6 },
    { item: "onions, sliced", qty: "2 medium", cost: 0.5 },
    { item: "carrots, cabbage, and turnip, chopped", qty: "4 cups total", cost: 1.4 },
    { item: "tomato paste", qty: "1 tbsp", cost: 0.1 },
    { item: "dried fish, flaked (for stock)", qty: "1 1/2 oz", cost: 0.5, spansWeeks: true },
    { item: "nététou and 1 maggi cube", qty: "1 tsp + 1 cube", cost: 0.2, spansWeeks: true },
    { item: "kaani (scotch bonnet), whole", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "garlic", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Wash the fonio by swirling it in warm water and pouring off the cloudy water two or three times until it runs clear, then drain.",
    "Steam the rinsed fonio over simmering water for about 10 minutes, fluffing once with a fork, until the tiny grains are tender and separate; cover and keep warm.",
    "Soften the onions and garlic in oil, stir in the tomato paste, then add water, the flaked dried fish, crushed nététou, maggi, and the whole scotch bonnet for a quick nokoss broth.",
    "Add the carrot, turnip, and cabbage and simmer 15–20 minutes until the vegetables are just tender and the broth is savory.",
    "Pile the steamed fonio in bowls and spoon the vegetables and broth over, letting the grain drink it up.",
  ],
  modernMove:
    "Fonio is the fastest grain in the Sahel — it steams tender in ten minutes — but it must be rinsed until the water runs clear first, or its dusty starch turns the dish gluey instead of fluffy.",
  notes:
    "A naturally light, gluten-free supper. Lift the whole scotch bonnet out before serving for aroma without scorch.",
  zeroWasteHero: false,
  tags: ["fonio", "vegetables", "grain", "gluten-free", "senegalese"],
  sources: [
    {
      title: "James Beard Foundation — Basic Fonio",
      url: "https://www.jamesbeard.org/recipes/basic-fonio",
      note: "Rinsing fonio until the water runs clear, then steaming it briefly for a fluffy, separate grain.",
    },
  ],
};
