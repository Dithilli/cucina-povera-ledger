import type { Recipe } from "../types";

export const kapustaZasmazana: Recipe = {
  slug: "kapusta-zasmazana",
  title: "Kapusta Zasmażana",
  cuisine: "polish",
  blurb:
    "Stewed cabbage made into supper: soured kapusta softened with caraway and bound glossy by a browned roux, with a little smoky boczek for ballast.",
  servings: 4,
  perServing: { calories: 480, protein: 16 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "kiszona kapusta (sauerkraut), rinsed and chopped", qty: "1 1/2 lb", cost: 1.3 },
    { item: "boczek (smoked pork belly / bacon), diced", qty: "5 oz", cost: 1.4 },
    { item: "onion, diced", qty: "1 large", cost: 0.35 },
    { item: "flour and lard for the zasmażka (roux)", qty: "2 tbsp each", cost: 0.3, spansWeeks: true },
    { item: "caraway seeds, bay, pepper", qty: "1 tsp + to taste", cost: 0.1, spansWeeks: true },
    { item: "potatoes or rye bread, to serve", qty: "1 lb", cost: 0.5 },
  ],
  method: [
    "Render the diced boczek slowly until the fat runs and the pieces crisp; lift some out to finish with, leaving the fat behind.",
    "Soften the onion in that fat, add the rinsed sauerkraut with caraway, bay, and a splash of water, and stew covered 30–40 minutes until mellow and tender.",
    "Make a zasmażka: brown the flour in lard until nut-coloured, whisk in a ladle of the cabbage liquid to a smooth paste, then stir it back into the pot to thicken and gloss the whole thing.",
    "Season with pepper, scatter the reserved crisp boczek on top, and serve with boiled potatoes or rye bread.",
  ],
  modernMove:
    "Take the roux past blond to a true nut-brown before it meets the pot — that toasted flour is what gives zasmażana cabbage its savoury depth, not just its body.",
  notes:
    "Rinse the kiszona kapusta first if it's fiercely sour; the roux and caraway round out what's left.",
  zeroWasteHero: false,
  tags: ["kapusta", "kiszona-kapusta", "boczek", "caraway", "polish"],
  sources: [
    {
      title: "Everyday Healthy Recipes — Polish Stewed Sauerkraut",
      url: "https://www.everydayhealthyrecipes.com/authentic-polish-bigos-stew-recipe/",
      note: "rinsing sauerkraut, caraway seasoning, and the browned-flour zasmażka thickening",
    },
  ],
};
