import type { Recipe } from "../types";

export const chickenAndDumplingsAp: Recipe = {
  slug: "chicken-and-dumplings-ap",
  title: "Chicken & Slick Dumplings",
  cuisine: "appalachian",
  blurb:
    "A stewing hen simmered to tenderness, then flat strips of rolled dough — \"slicks\" — dropped into the rich broth until they go silky and the whole pot thickens into mountain comfort.",
  servings: 6,
  perServing: { calories: 540, protein: 26 },
  estCostPerServing: 1.5,
  roles: ["dinner"],
  ingredients: [
    { item: "whole chicken or stewing hen", qty: "1 (about 4 lb)", cost: 6.0 },
    { item: "onion, halved", qty: "1", cost: 0.3 },
    { item: "celery rib", qty: "1", cost: 0.15 },
    { item: "salt and black pepper", qty: "to taste", cost: 0.1, spansWeeks: true },
    { item: "all-purpose flour", qty: "2 cups", cost: 0.3, spansWeeks: true },
    { item: "baking powder", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "lard or butter, cut into the flour", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "milk or reserved broth", qty: "3/4 cup", cost: 0.2 },
  ],
  method: [
    "Simmer the whole chicken with the onion, celery, and a good pinch of salt in water to cover, about an hour until the meat falls off the bone. Lift out the chicken, strain the broth, and keep it at a low simmer — this broth is the dish.",
    "Pull the meat from the bones in big shreds and set aside; discard skin and bones (or save the carcass for stock).",
    "Make the slicks: cut the lard into the flour, baking powder, and a pinch of salt, then stir in just enough milk or broth to make a stiff dough. Roll it out thin, about 1/8 inch, on a floured board and cut into 1-by-2-inch strips.",
    "Bring the broth to a gentle simmer and drop the slicks in a few at a time, stirring softly so they don't clump. Don't let it boil hard — a bare simmer keeps them tender, not gummy.",
    "Simmer 15–20 minutes until the slicks are cooked through and the broth has thickened from their flour. Fold the shredded chicken back in, taste for salt, and grind plenty of black pepper over the top.",
  ],
  modernMove:
    "Rolling and cutting the dough into flat strips (not dropped biscuit puffs) is the Appalachian distinction — the flour cooking off the slicks is what thickens the broth into a velvety, almost gravy-like body.",
  notes:
    "Let the slicks rest a few minutes after cutting so they hold their shape. A spoonful of the chicken fat skimmed from the broth, stirred back in at the end, makes it richer.",
  zeroWasteHero: true,
  tags: ["appalachian", "chicken", "dumplings", "one-pot", "comfort"],
  sources: [
    {
      title: "Hillbilly Slang — Chicken and Slicks (Appalachian Flat Dumplings)",
      url: "https://www.hillbillyslang.com/southern-recipes/chicken-and-slicks/",
      note: "Flat rolled 'slick' dumplings simmered in chicken broth; roll thin and cut into strips",
    },
  ],
};
