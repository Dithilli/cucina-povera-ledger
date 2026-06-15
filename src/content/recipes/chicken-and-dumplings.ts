import type { Recipe } from "../types";

export const chickenAndDumplings: Recipe = {
  slug: "chicken-and-dumplings",
  title: "Chicken and Dumplings",
  cuisine: "american-south",
  blurb:
    "A whole cheap chicken simmered into broth, the meat pulled back in, and flat rolled dumplings slid into the pot to thicken it — one bird stretched to feed a table all week.",
  servings: 6,
  perServing: { calories: 540, protein: 36 },
  estCostPerServing: 1.45,
  roles: ["dinner"],
  ingredients: [
    { item: "whole chicken (or backs, thighs, and a leftover carcass)", qty: "1 (~3 1/2 lb)", cost: 5.5 },
    { item: "onion, carrot, and celery for the broth", qty: "1 each", cost: 0.8 },
    { item: "all-purpose flour (for the dumplings)", qty: "2 cups", cost: 0.6, spansWeeks: true },
    { item: "baking powder", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "butter or chicken fat skimmed from the broth", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "milk", qty: "3/4 cup", cost: 0.3 },
    { item: "bay leaf, black pepper, salt, parsley", qty: "to season", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Cover the chicken with cold water, add the halved onion, carrot, celery, bay, and a big pinch of salt, and simmer gently 1 to 1 1/2 hours until the meat falls off. Lift the chicken out; strain and keep every drop of broth. Pull the meat, discard the bones (or simmer them again for stock).",
    "Skim some fat from the top. Rub the flour and baking powder with the butter or chicken fat, then stir in just enough milk to make a stiff dough. Rest it 10 minutes, then roll thin on a floured board and cut into ragged 1-inch squares.",
    "Bring the strained broth back to a low boil, season it well, and drop the dumplings in a few at a time so they don't clump. The flour on them thickens the broth into gravy as they cook — about 12–15 minutes.",
    "Fold the pulled chicken back in, warm through, and finish with cracked pepper and parsley. It thickens further as it sits.",
  ],
  modernMove:
    "Rolling the dumplings thin and dropping them straight into the simmering broth means the flour clinging to them does double duty — it both forms the dumplings and thickens the whole pot into gravy, so nothing is wasted and no separate roux is needed.",
  zeroWasteHero: true,
  notes:
    "Built to use a leftover roast-chicken carcass: simmer the bones for the broth and stretch the last scraps of meat across six bowls.",
  tags: ["chicken", "one-pot", "dumplings", "broth", "stretch", "finale"],
};
