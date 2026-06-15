import type { Recipe } from "../types";

export const nigerianStew: Recipe = {
  slug: "nigerian-stew",
  title: "Nigerian Stew (Obe Ata with Fish or Chicken)",
  cuisine: "west-african",
  blurb:
    "The Sunday-pot red stew — obe ata fried down hard in palm oil, then a few pieces of fish or chicken simmered in until they drink up the pepper. Spoon it over white rice and a little protein feeds a whole table.",
  servings: 6,
  perServing: { calories: 540, protein: 26 },
  estCostPerServing: 1.65,
  roles: ["dinner"],
  ingredients: [
    { item: "blended tomato-pepper-onion base (obe ata: tomatoes, red bell pepper, scotch bonnet, onion)", qty: "4 cups", cost: 2.2 },
    { item: "chicken thighs or drumsticks, bone-in (or mackerel/tilapia steaks)", qty: "1 1/2 lb", cost: 4.5 },
    { item: "red palm oil (or a blend with neutral oil)", qty: "1/3 cup", cost: 0.6, spansWeeks: true },
    { item: "onion, sliced", qty: "1", cost: 0.3 },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "ground crayfish", qty: "1 tbsp", cost: 0.4, spansWeeks: true },
    { item: "stock cube / bouillon", qty: "2", cost: 0.2, spansWeeks: true },
    { item: "curry powder and dried thyme", qty: "1 tsp each", cost: 0.2, spansWeeks: true },
    { item: "bay leaf, salt", qty: "to taste", cost: 0.1, spansWeeks: true },
    { item: "white rice, to serve", qty: "2 cups dry", cost: 1.0 },
  ],
  method: [
    "Season the chicken (or fish) with salt, half the curry, thyme, a crushed stock cube and the bay leaf. Simmer the chicken in just enough water to cover until cooked, 20 minutes, reserving the stock; fish needs only a brief poach. Lift the pieces out and pat dry.",
    "Fry the chicken or fish in a little oil until browned on the surface, then set aside — this skin colour adds depth and stops the pieces from breaking up in the pot.",
    "Boil the blended base, uncovered, until much of the water cooks off and it thickens — 15 minutes. Pre-reducing the raw blend is what keeps the fry that follows deep instead of watery.",
    "In a wide pot, sweat the sliced onion in the palm oil, add the tomato paste and let it darken a minute, then tip in the reduced base. Fry it down hard, stirring often, until the oil splits red at the edges and the colour turns brick — 20 to 30 minutes.",
    "Loosen with the reserved stock, add the remaining curry, the crayfish and stock cube, and slide the protein back in. Simmer gently 15 minutes so it drinks up the pepper. Taste for salt and serve over white rice.",
  ],
  modernMove:
    "Browning the protein before it goes back into the pot, and frying the base until the oil visibly splits, are the two cues that turn a watery red sauce into proper stew — flavour by reduction, not by adding more meat.",
  notes:
    "The classic Nigerian batch stew: a pot stretches across several dinners and only deepens by day three. Fish makes it cheaper than chicken; either way the pepper base is doing most of the work.",
  tags: ["pepper-stew", "obe-ata", "palm-oil", "chicken", "fish", "rice", "batch"],
};
