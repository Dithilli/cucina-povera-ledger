import type { Recipe } from "../types";

export const fishChowderIe: Recipe = {
  slug: "fish-chowder-ie",
  title: "Irish Fish Chowder",
  cuisine: "irish",
  blurb:
    "Smoked and white fish poached in milk and folded through soft potato and onion — a thick, ivory chowder that turns a small bag of fish off the pier into a whole pot of supper.",
  servings: 4,
  perServing: { calories: 470, protein: 26 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "smoked haddock fillet (undyed), skin on", qty: "1/2 lb", cost: 2.6 },
    { item: "white fish (pollock or whiting), in chunks", qty: "1/2 lb", cost: 1.8 },
    { item: "floury potatoes, diced", qty: "1 lb", cost: 0.7 },
    { item: "onion, finely chopped", qty: "1 large", cost: 0.3 },
    { item: "whole milk", qty: "3 cups", cost: 0.9 },
    { item: "streaky bacon, diced", qty: "2 oz", cost: 0.6 },
    { item: "butter, flour, bay leaf, parsley, pepper", qty: "to taste", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Lay the smoked haddock skin-side up in a wide pan with the bay leaf, pour over the milk, and bring to a bare simmer for 4 minutes. Take off the heat and let it finish poaching in the warm milk; lift out, peel off skin, and flake. Strain and keep the milk.",
    "In the rinsed pan, render the bacon in a knob of butter until its fat runs, then soften the onion in it without colouring, 5–6 minutes. Stir in a tablespoon of flour and cook a minute.",
    "Pour in the reserved poaching milk a little at a time, stirring smooth, then add the diced potatoes and a splash of water if needed to cover. Simmer 10–12 minutes until the potato is tender and starting to fray and thicken the broth.",
    "Slide in the raw white fish chunks and the flaked haddock and poach gently 4 minutes, just until the fish is set — don't let it boil hard or it shreds.",
    "Season with plenty of black pepper (the smoked fish and bacon bring the salt) and a shower of parsley. Serve with brown soda bread to mop the bowl.",
  ],
  modernMove:
    "Crush a few of the cooked potato dice against the side of the pan before adding the fish — the released starch bodies the chowder without a heavy roux or any cream.",
  notes:
    "Use undyed smoked haddock if you can; the bright-yellow dyed kind colours the whole pot. The bacon and smoked fish do all the seasoning, so taste before reaching for salt.",
  zeroWasteHero: false,
  tags: ["fish", "chowder", "smoked-haddock", "potato", "milk", "dinner", "irish"],
  sources: [
    {
      title: "Caroline's Cooking — Irish Fish Chowder",
      url: "https://www.carolinescooking.com/irish-fish-chowder/",
      note: "smoked haddock poached in milk, then a milk-and-potato chowder with onion and bacon",
    },
  ],
};
