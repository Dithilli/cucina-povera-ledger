import type { Recipe } from "../types";

export const kottuRoti: Recipe = {
  slug: "kottu-roti",
  title: "Kottu Roti",
  cuisine: "sri-lankan",
  blurb:
    "Day-old godamba roti chopped on a hot griddle with cabbage, leek, egg and a splash of curry gravy — the clatter-and-scrape street dish that turns last night's leftovers into dinner.",
  servings: 4,
  perServing: { calories: 620, protein: 19 },
  estCostPerServing: 1.35,
  roles: ["dinner"],
  ingredients: [
    { item: "godamba roti, day-old, sliced into ribbons", qty: "5 roti", cost: 1.2 },
    { item: "eggs", qty: "3", cost: 0.6 },
    { item: "cabbage, finely shredded", qty: "3 cups", cost: 0.6 },
    { item: "leek, thinly sliced", qty: "1", cost: 0.4 },
    { item: "carrot, julienned", qty: "1", cost: 0.2 },
    { item: "onion, sliced", qty: "1", cost: 0.2 },
    { item: "leftover curry gravy (kiri hodi or dhal)", qty: "1/2 cup", cost: 0.3 },
    { item: "garlic & ginger, minced", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "green chilies, sliced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "roasted curry powder & chili powder", qty: "2 tsp", cost: 0.1, spansWeeks: true },
    { item: "coconut or neutral oil", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Stack the roti and slice into thin ribbons; have everything else chopped and within reach, because kottu cooks fast once the pan is hot.",
    "Heat oil in a wide flat pan or griddle over high heat. Fry onion, leek, carrot, garlic-ginger, green chili and curry leaves until softened and fragrant, then the shredded cabbage until just wilted.",
    "Push the veg aside, crack in the eggs and scramble loosely, then dust the roasted curry powder and chili over everything.",
    "Tip in the roti ribbons and the leftover curry gravy. Now chop and toss continuously with two flat blades or spatulas — the rhythmic chopping is the dish — until the roti is coated, steaming and lightly crisped.",
    "Taste for salt and serve hot, with extra gravy on the side.",
  ],
  modernMove:
    "The leftover curry gravy is the secret: it carries the day-old roti and binds the whole pan, so kottu is engineered to use up exactly what's already in the fridge.",
  notes:
    "Any protein scraps — a few shreds of leftover chicken or fish — go in with the cabbage. Vegetable kottu stands on its own.",
  zeroWasteHero: true,
  tags: ["kottu", "roti", "leftovers", "street-food", "sri-lankan"],
  sources: [
    {
      title: "Dini Kodippili — The Flavor Bender",
      url: "https://www.theflavorbender.com/sri-lankan-chicken-kottu-roti-koththu/",
      note: "Method and the role of curry gravy binding chopped roti, egg and vegetables on a hot griddle",
    },
  ],
};
