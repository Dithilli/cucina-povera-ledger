import type { Recipe } from "../types";

export const kotopouloFricassee: Recipe = {
  slug: "kotopoulo-fricassee",
  title: "Kotopoulo Fricassée (Chicken with Greens)",
  cuisine: "greek",
  blurb:
    "Chicken braised down into a heap of lettuce and dill, then finished with egg and lemon — a spring stew where the greens stretch a few pieces of bird.",
  servings: 4,
  perServing: { calories: 520, protein: 31 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "chicken thighs/legs on the bone", qty: "1 1/4 lb", cost: 3.0 },
    { item: "romaine or cos lettuce, shredded", qty: "2 heads", cost: 1.2 },
    { item: "spring onions, sliced", qty: "1 bunch", cost: 0.6 },
    { item: "onion, chopped", qty: "1", cost: 0.3 },
    { item: "fresh dill, lots, chopped", qty: "1 large bunch", cost: 0.6 },
    { item: "eggs", qty: "2", cost: 0.6, spansWeeks: true },
    { item: "lemons (juice of)", qty: "1 1/2", cost: 0.5, spansWeeks: true },
    { item: "olive oil, salt, black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Brown the chicken lightly in olive oil in a wide pot, then set aside. Soften the chopped onion and spring onions in the same oil.",
    "Return the chicken, add a cup of water, cover, and simmer 25 minutes until almost tender.",
    "Pile in the shredded lettuce and most of the dill — it looks like far too much, then collapses. Cook covered another 15–20 minutes until the chicken is falling off the bone and the greens are silky. Season well.",
    "Pull the pot off the heat and let the bubbling stop.",
    "Whisk the eggs frothy, whisk in the lemon, temper with hot pan liquid ladle by ladle, then stir back into the pot off the heat. Swirl until the sauce is creamy and lemony — never boil it again. Scatter the reserved dill and serve.",
  ],
  modernMove:
    "Finishing the braise avgolemono turns the watery cooking liquid into a glossy lemon sauce that binds chicken and greens together — richness from two eggs, not from cream.",
  notes:
    "A spring dish built on whatever leafy greens are cheap and abundant; the lettuce and dill do most of the volume so the chicken goes a long way.",
  tags: ["chicken", "greens", "lettuce", "dill", "avgolemono", "braise"],
};
