import type { Recipe } from "../types";

export const frangoEnsopado: Recipe = {
  slug: "frango-ensopado",
  title: "Frango Ensopado",
  cuisine: "brazilian",
  blurb:
    "The most everyday of Brazilian dinners: chicken pieces stewed gently in a tomato-and-onion refogado with chunks of potato and carrot until the broth is golden and the potatoes half-dissolve to thicken it — weeknight comfort poured over rice.",
  servings: 2,
  perServing: { calories: 520, protein: 27 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in chicken pieces", qty: "3/4 lb", cost: 1.6 },
    { item: "potatoes, cut in chunks", qty: "2 medium", cost: 0.4 },
    { item: "carrots, sliced", qty: "2", cost: 0.3 },
    { item: "onion, chopped", qty: "1 small", cost: 0.2 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "tomato, chopped", qty: "2", cost: 0.5 },
    { item: "annatto (colorau)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "scallions and parsley (cheiro-verde)", qty: "small handful", cost: 0.2 },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Season and brown the chicken in oil, then set it aside.",
    "Build a refogado: soften onion and garlic in the fat, add the tomato and annatto, and cook to a thick, rust-red base.",
    "Return the chicken, pour in hot water to nearly cover, cover the pot, and simmer 20 minutes.",
    "Add the potato and carrot and cook another 20–25 minutes until everything is tender and the broth has thickened from the breaking potato.",
    "Adjust the salt, stir through cheiro-verde, and serve loose and brothy over white rice with a side of feijão.",
  ],
  modernMove:
    "Cut one of the potatoes much smaller than the rest — it disintegrates into the broth and thickens the ensopado naturally, no flour or cornstarch needed.",
  notes:
    "The blueprint Brazilian home stew — no frills, infinitely flexible, built to feed a family from one pot and stretch a little chicken across a lot of vegetables and rice.",
  zeroWasteHero: false,
  tags: ["dinner", "chicken", "stew", "potato", "weeknight", "brazilian"],
  sources: [
    {
      title: "Brazilian Kitchen Abroad — Brazilian Stew Chicken (Ensopado de Frango)",
      url: "https://braziliankitchenabroad.com/brazilian-stew-chicken-recipe/",
      note: "One-pot braised chicken in a tomato-onion broth with potatoes and carrots",
    },
  ],
};
