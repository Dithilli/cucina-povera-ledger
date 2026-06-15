import type { Recipe } from "../types";

export const shrimpEtouffee: Recipe = {
  slug: "shrimp-etouffee",
  title: "Shrimp Étouffée",
  cuisine: "american-south",
  blurb:
    "Shrimp 'smothered' in a blond-roux trinity gravy and spooned over rice — Cajun-Creole étouffée that stretches a half-pound of shrimp into dinner for four by building stock from their own shells.",
  servings: 4,
  perServing: { calories: 520, protein: 26 },
  estCostPerServing: 1.85,
  roles: ["dinner"],
  ingredients: [
    {
      item: "shell-on shrimp (peel, keep the shells for stock)",
      qty: "8 oz",
      cost: 4.0,
    },
    { item: "onion, diced", qty: "1", cost: 0.4 },
    { item: "green bell pepper, diced", qty: "1", cost: 0.5 },
    { item: "celery ribs, diced", qty: "2", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "all-purpose flour", qty: "1/4 cup", cost: 0.08, spansWeeks: true },
    {
      item: "butter or neutral oil",
      qty: "3 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "tomato paste",
      qty: "1 tbsp",
      cost: 0.15,
      spansWeeks: true,
    },
    {
      item: "water (for the shell stock)",
      qty: "2 1/2 cups",
      cost: 0,
    },
    {
      item: "bay leaf, thyme, cayenne, smoked paprika, black pepper",
      qty: "to taste",
      cost: 0.25,
      spansWeeks: true,
    },
    { item: "cooked white rice, to serve", qty: "for 4", cost: 0.9 },
    { item: "scallions and parsley to finish", qty: "a handful", cost: 0.3 },
    { item: "salt and hot sauce", qty: "to taste" },
  ],
  method: [
    "Simmer the shrimp shells in the water with a bay leaf for 15 minutes, then strain — this free stock is what makes a half-pound of shrimp taste like a pound of seafood.",
    "Melt the butter and stir in the flour, cooking a peanut-coloured roux over medium heat, stirring constantly 5–6 minutes until it smells toasty.",
    "Add the trinity straight into the roux (it will hiss and stop cooking the roux), and cook until soft. Stir in garlic, tomato paste, thyme, smoked paprika and cayenne and cook a minute more.",
    "Whisk in the warm shell stock a little at a time to keep it smooth, then simmer the gravy gently 15 minutes until silky and the raw-flour taste is gone.",
    "Slide the peeled shrimp in and poach just 3–4 minutes until pink and curled — no longer, or they toughen. Season, fold through scallions and parsley, and serve over rice with hot sauce.",
  ],
  modernMove:
    "Building a quick stock from the shrimp shells before they hit the gravy doubles the seafood flavour for free — the étouffée tastes generous even though the shrimp are rationed.",
  tags: ["shrimp", "smothered", "roux", "trinity", "gravy", "rice", "creole", "etouffee"],
};
