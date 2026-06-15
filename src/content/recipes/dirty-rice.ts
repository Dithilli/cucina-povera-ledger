import type { Recipe } from "../types";

export const dirtyRice: Recipe = {
  slug: "dirty-rice",
  title: "Dirty Rice",
  cuisine: "american-south",
  blurb:
    "Rice cooked 'dirty' with finely chopped chicken livers and giblets and the holy trinity — Cajun thrift turning the cheapest offal into the deepest, meatiest pot of rice you'll eat.",
  servings: 6,
  perServing: { calories: 480, protein: 22 },
  estCostPerServing: 0.95,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "chicken livers, finely chopped",
      qty: "6 oz",
      cost: 0.9,
    },
    {
      item: "chicken gizzards/hearts or any cheap ground pork, finely chopped",
      qty: "4 oz",
      cost: 0.6,
    },
    { item: "long-grain white rice", qty: "1 1/2 cups", cost: 0.7 },
    { item: "onion, finely diced", qty: "1", cost: 0.4 },
    { item: "green bell pepper, finely diced", qty: "1", cost: 0.5 },
    { item: "celery ribs, finely diced", qty: "2", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "3", cost: 0.15, spansWeeks: true },
    {
      item: "chicken stock or water",
      qty: "2 1/2 cups",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "neutral oil or rendered fat", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    {
      item: "bay leaf, thyme, cayenne, black pepper",
      qty: "to taste",
      cost: 0.25,
      spansWeeks: true,
    },
    { item: "scallions and parsley to finish", qty: "a handful", cost: 0.3 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Get the oil smoking-hot in a heavy pot and sear the chopped livers and giblets hard, letting them stick and brown — that scorched fond is what makes the rice 'dirty' and savoury rather than livery.",
    "Add the trinity and cook down until soft and the brown bits lift off the bottom. Stir in garlic, thyme, bay and a good hit of cayenne and black pepper.",
    "Stir the rice through the meat and vegetables so every grain glosses with fat, then pour in the stock and season with salt.",
    "Bring to a boil, cover tight, and cook on the lowest heat 18–20 minutes until the liquid is gone and the rice is tender. Rest covered 10 minutes.",
    "Fluff with a fork and fold through scallions and parsley. It should be brown-flecked and deeply meaty — a whole dinner from a few ounces of offal.",
  ],
  modernMove:
    "Hard-searing the chopped livers until they catch and form fond — not gently sweating them — is the trick: the Maillard crust reads as roasted meat, so the rice tastes far richer than its cost.",
  tags: ["rice", "one-pot", "offal", "chicken-liver", "trinity", "cajun", "nose-to-tail"],
};
