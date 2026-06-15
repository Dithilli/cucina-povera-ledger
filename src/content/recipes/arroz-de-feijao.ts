import type { Recipe } from "../types";

export const arrozDeFeijao: Recipe = {
  slug: "arroz-de-feijao",
  title: "Arroz de Feijão",
  cuisine: "portuguese",
  blurb:
    "Soupy Portuguese bean rice — red beans simmered into a tomato refogado, then rice cooked loose in the bean broth until it drinks up the colour. Pure pantry frugality.",
  servings: 4,
  perServing: { calories: 520, protein: 18 },
  estCostPerServing: 0.75,
  roles: ["dinner"],
  ingredients: [
    {
      item: "cooked red or pinto beans, with about 2 cups of their liquid",
      qty: "1 1/2 cups",
      cost: 0.7,
    },
    { item: "short or medium-grain rice", qty: "1 cup", cost: 0.5 },
    { item: "onion, finely chopped", qty: "1", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "ripe tomatoes (or canned), chopped", qty: "2", cost: 0.7 },
    {
      item: "chouriço end or bacon scrap (optional, for depth)",
      qty: "2 oz",
      cost: 0.9,
      spansWeeks: true,
    },
    { item: "sweet pimentão / paprika", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "olive oil", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "chopped coriander", qty: "1 handful", cost: 0.3 },
    { item: "salt, black pepper", qty: "to taste" },
  ],
  method: [
    "Build a refogado: soften the onion, garlic, and bay in olive oil with the optional pork scrap, add paprika and tomatoes, and cook down until thick and sweet.",
    "Tip in the beans and their liquid plus enough water to make a generous brothy base. Simmer 10 minutes so the flavours marry, mashing a few beans against the pot to thicken it.",
    "Stir in the rice and cook uncovered at a lively simmer, stirring now and then and topping up with hot water, until the rice is just tender and the whole thing stays loose and soupy — malandrinho, not dry.",
    "Pull the pork scrap, season, fold in the coriander, and serve at once in deep bowls; it tightens as it sits.",
  ],
  modernMove:
    "Cooking the rice directly in the bean broth and mashing a handful of beans gives a creamy, self-saucing pot from nothing but pantry staples.",
  tags: ["legumes", "red-beans", "rice", "one-pot", "frugal"],
};
