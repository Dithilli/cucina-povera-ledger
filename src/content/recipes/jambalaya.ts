import type { Recipe } from "../types";

export const jambalaya: Recipe = {
  slug: "jambalaya",
  title: "Jambalaya",
  cuisine: "american-south",
  blurb:
    "One pot of rice cooked in a smoky trinity stock, a little sausage and chicken stretched to feed everyone — Louisiana's answer to making a handful of meat fill a table.",
  servings: 6,
  perServing: { calories: 600, protein: 28 },
  estCostPerServing: 1.45,
  roles: ["dinner"],
  ingredients: [
    {
      item: "smoked andouille or any smoked sausage, sliced into coins",
      qty: "8 oz",
      cost: 3.0,
    },
    {
      item: "bone-in chicken thigh, skinned and cut into chunks",
      qty: "1 (about 6 oz)",
      cost: 1.2,
    },
    { item: "long-grain white rice", qty: "2 cups", cost: 0.9 },
    { item: "onion, diced", qty: "1 large", cost: 0.4 },
    { item: "green bell pepper, diced", qty: "1", cost: 0.5 },
    { item: "celery ribs, diced", qty: "2", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "3", cost: 0.15, spansWeeks: true },
    {
      item: "canned crushed tomatoes (for Creole 'red' jambalaya)",
      qty: "1 cup",
      cost: 0.5,
    },
    {
      item: "chicken stock or water",
      qty: "3 cups",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "neutral oil",
      qty: "2 tbsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "bay leaf, thyme, cayenne, smoked paprika, black pepper",
      qty: "to taste",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "scallions and parsley to finish", qty: "a handful", cost: 0.3 },
    { item: "salt and hot sauce", qty: "to taste" },
  ],
  method: [
    "Brown the sausage coins in the oil in a heavy pot until their fat renders and the bottom begins to colour, then scoop them out. Brown the chicken in that fat and set it aside too — the fond left behind is the whole flavour base.",
    "Drop the trinity — onion, bell pepper, celery — into the fat and cook until soft and the fond has dissolved up into it. Stir in the garlic, thyme, bay, smoked paprika and cayenne for a minute.",
    "Add the tomatoes and cook them down for a few minutes, then return the meat, stir in the rice to coat it in the fat, and pour in the stock. Season assertively — under-seasoned jambalaya is bland jambalaya.",
    "Bring to a boil, then cover tight and drop to the lowest heat. Cook undisturbed 20–25 minutes until the rice has drunk the liquid. Resist stirring, which turns it gummy.",
    "Rest 10 minutes off the heat still covered, then fluff with a fork. Fold through scallions and parsley; pass hot sauce at the table.",
  ],
  modernMove:
    "Cooking the rice directly in the tomato-trinity stock — not boiling it separately — is what makes one sausage and one chicken thigh taste like a feast: every grain carries the meat's smoke.",
  tags: ["rice", "one-pot", "sausage", "trinity", "creole", "stretch-meat"],
};
