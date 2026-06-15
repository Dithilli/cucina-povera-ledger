import type { Recipe } from "../types";

export const okraGumbo: Recipe = {
  slug: "okra-gumbo",
  title: "Okra Gumbo",
  cuisine: "american-south",
  blurb:
    "The original gumbo — thickened by okra itself (gumbo is the West African word for okra) instead of a heavy roux, brightened with tomato and the trinity, with shrimp if you have it or all-vegetable if you don't.",
  servings: 6,
  perServing: { calories: 520, protein: 26 },
  estCostPerServing: 1.8,
  roles: ["dinner"],
  ingredients: [
    {
      item: "okra, sliced into rounds (fresh or frozen)",
      qty: "1 1/2 lb",
      cost: 2.5,
    },
    {
      item: "shrimp, peeled (save the shells), OR more okra and beans for a veg pot",
      qty: "3/4 lb",
      cost: 3.0,
    },
    { item: "neutral oil", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "onion, diced", qty: "1 large", cost: 0.4 },
    { item: "green bell pepper, diced", qty: "1", cost: 0.5 },
    { item: "celery, diced", qty: "2 ribs", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "canned diced tomatoes", qty: "1 can (14 oz)", cost: 0.8 },
    {
      item: "shrimp-shell or vegetable stock (simmer the shells for 15 min)",
      qty: "6 cups",
      cost: 0.4,
    },
    { item: "bay leaves", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "fresh thyme", qty: "few sprigs", cost: 0.2, spansWeeks: true },
    { item: "cayenne, paprika, black pepper", qty: "to taste", cost: 0.2, spansWeeks: true },
    { item: "scallions and parsley", qty: "1 bunch", cost: 0.5 },
    { item: "long-grain white rice, to serve", qty: "2 cups dry", cost: 0.7 },
    { item: "salt, hot sauce, splash of vinegar", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Smother the okra: cook the sliced okra in the oil over medium heat, stirring often, 15 to 20 minutes until the slippery ropiness cooks off and it browns slightly. A splash of vinegar speeds this. This is what lets okra thicken without going slimy.",
    "Add the trinity (onion, bell pepper, celery) and garlic; sweat until soft.",
    "Stir in the tomatoes and cook them down a few minutes, then add stock, bay, thyme, cayenne, and paprika.",
    "Simmer 30 to 40 minutes — the okra dissolves and naturally thickens the pot to a glossy body, no roux needed.",
    "If using shrimp, stir them in for the last 5 minutes just until pink and curled; for a veg pot, fold in cooked beans to warm through instead.",
    "Finish with scallions, parsley, hot sauce, and a splash of vinegar. Serve over white rice.",
  ],
  modernMove:
    "Okra is the thickener AND the vegetable, so you skip the long roux entirely — patiently 'smother' the slices first to cook out the slime, and the pot bodies itself, seafood optional.",
  tags: ["gumbo", "okra", "holy-trinity", "shrimp", "tomato", "vegetarian-option", "no-roux", "creole", "rice"],
};
