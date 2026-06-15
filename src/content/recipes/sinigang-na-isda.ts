import type { Recipe } from "../types";

export const sinigangNaIsda: Recipe = {
  slug: "sinigang-na-isda",
  title: "Sinigang na Isda (Sour Fish Soup)",
  cuisine: "filipino",
  blurb:
    "The lighter, faster sinigang — a whole cheap fish or fish heads poached in a clean tamarind-sour broth with radish and greens, done in twenty minutes.",
  servings: 4,
  perServing: { calories: 380, protein: 31 },
  estCostPerServing: 1.45,
  roles: ["dinner"],
  ingredients: [
    {
      item: "whole milkfish (bangus), tilapia, or any cheap whole fish / fish heads & collars, in steaks",
      qty: "1 1/4 lb",
      cost: 3.5,
    },
    {
      item: "tamarind (fresh pods, or 2 tbsp tamarind paste / 1 sinigang sachet)",
      qty: "1/2 lb pods",
      cost: 0.8,
      spansWeeks: true,
    },
    { item: "onion, quartered", qty: "1", cost: 0.3 },
    { item: "tomatoes, quartered", qty: "2", cost: 0.5 },
    { item: "daikon radish (labanos), sliced", qty: "1 small", cost: 0.6 },
    { item: "long green chili (siling haba)", qty: "1-2", cost: 0.2, spansWeeks: true },
    { item: "kangkong (water spinach), mustard greens, or spinach", qty: "1 bunch", cost: 0.6 },
    { item: "okra or long beans (optional)", qty: "1 handful", cost: 0.5 },
    { item: "fish sauce (patis), salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Simmer the onion, tomatoes, and daikon in water to cover until the radish softens, about 8 minutes. Mash the tomatoes against the side of the pot to thicken the broth slightly.",
    "Sour the broth: press boiled-and-sieved fresh tamarind in, or stir in the paste/sachet, until it is sharply sour.",
    "Slide in the fish pieces and simmer very gently 6-10 minutes — barely a tremble, so the fish stays whole and the broth stays clear.",
    "Season with fish sauce. Add the okra or beans for the last 3 minutes, then the chilies and greens off the heat to wilt. Serve hot with steamed rice.",
  ],
  modernMove:
    "Keeping the broth at a bare poach (never a hard boil) gives a crystal-clear, clean-tasting sour soup and fish that holds its shape instead of shredding.",
  notes:
    "Built for the cheapest fish at the market — whole bangus, tilapia, or the fish heads and collars others leave behind, which give the most flavor for the least money.",
  tags: ["soup", "fish", "tamarind", "sour", "whole-fish", "one-pot"],
};
