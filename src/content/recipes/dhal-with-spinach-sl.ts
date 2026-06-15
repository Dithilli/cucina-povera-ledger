import type { Recipe } from "../types";

export const dhalWithSpinachSl: Recipe = {
  slug: "dhal-with-spinach-sl",
  title: "Parippu with Spinach",
  cuisine: "sri-lankan",
  blurb:
    "Red lentils simmered soft in coconut milk and folded with wilted greens, then woken up with a sizzling tempering of mustard, chili and curry leaves — the everyday Sri Lankan dhal made into a meal.",
  servings: 4,
  perServing: { calories: 430, protein: 20 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "red lentils (masoor), rinsed", qty: "1 1/2 cups", cost: 0.9 },
    { item: "mature spinach, chopped", qty: "1 large bunch", cost: 0.8 },
    { item: "thin coconut milk", qty: "1 1/2 cups", cost: 0.5 },
    { item: "thick coconut milk", qty: "1/2 cup", cost: 0.4 },
    { item: "onion, sliced", qty: "1", cost: 0.2 },
    { item: "garlic, sliced", qty: "3 cloves", cost: 0.1, spansWeeks: true },
    { item: "green chilies, slit", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "—for the tempering—", qty: "" },
    { item: "coconut oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "mustard seeds", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "dried red chilies, broken", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "small onion, sliced", qty: "1/2", cost: 0.1 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Put the rinsed lentils in a pot with the thin coconut milk, sliced onion, garlic, green chili, turmeric and a cup of water. Simmer 15–20 minutes until the lentils are collapsing soft.",
    "Stir in the chopped spinach and cook a few minutes more until wilted and tender, then pour in the thick coconut milk, season with salt and warm through without a hard boil.",
    "For the tempering, heat coconut oil in a small pan and crackle the mustard seeds, dried chili, curry leaves and sliced small onion until the onion is golden and fragrant.",
    "Pour the sizzling tempering over the dhal and fold it through.",
    "Serve over rice or scooped up with pol roti.",
  ],
  modernMove:
    "The tempering (temperadu) goes in at the very end — blooming whole spices in hot oil and pouring them over finished dhal layers in aroma that boiling them in never would.",
  notes:
    "Use mature bunch spinach rather than tender baby leaves, which collapse to nothing. Any hardy green works.",
  zeroWasteHero: false,
  tags: ["parippu", "dhal", "lentils", "spinach", "sri-lankan"],
  sources: [
    {
      title: "Island Smile — Tempered Lentils & Spinach Curry",
      url: "https://www.islandsmile.org/tempered-lentils-spinach-curry/",
      note: "Coconut-simmered red lentils with spinach finished by a mustard-and-curry-leaf tempering",
    },
  ],
};
