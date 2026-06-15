import type { Recipe } from "../types";

export const pasteles: Recipe = {
  slug: "pasteles",
  title: "Pasteles",
  cuisine: "puerto-rican",
  blurb:
    "A grated masa of green banana and root vegetables, dyed gold with achiote, packed with seasoned pork and steamed in banana leaves — the labor-of-love parcel that means Christmas on the island.",
  servings: 2,
  perServing: { calories: 560, protein: 19 },
  estCostPerServing: 1.8,
  roles: ["dinner"],
  ingredients: [
    { item: "green bananas (guineos verdes), peeled", qty: "4", cost: 0.6 },
    { item: "yautía (taro root), peeled", qty: "1/4 lb", cost: 0.3 },
    { item: "pork shoulder, diced", qty: "5 oz", cost: 1.1 },
    { item: "sofrito (recaíto)", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "achiote (annatto) oil", qty: "3 tbsp", cost: 0.15, spansWeeks: true },
    { item: "tomato sauce + olives", qty: "2 tbsp + 1 tbsp", cost: 0.2 },
    { item: "banana leaves + parchment", qty: "for wrapping", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Stew the diced pork with sofrito, tomato sauce, olives and a little achiote oil until tender and saucy; cool the filling.",
    "Grate the green bananas and yautía to a smooth masa, beat in achiote oil and salt until it glows golden-orange.",
    "On a wilted banana leaf set over parchment, spread a thin rectangle of masa, spoon pork filling down the middle, fold the leaf to enclose, and tie into a flat bundle with kitchen string.",
    "Simmer the tied pasteles in salted water 45–60 minutes, then unwrap and serve hot — discarding the leaf.",
  ],
  modernMove:
    "Pass the banana leaf briefly over a flame to soften it so it folds without cracking and perfumes the masa as it steams.",
  notes: "Make a big batch and freeze them tied; they go straight from freezer to pot in 75–90 minutes.",
  zeroWasteHero: false,
  tags: ["navideño", "masa", "puerto-rican"],
  sources: [
    {
      title: "Sense & Edibility — Authentic Puerto Rican Pasteles",
      url: "https://senseandedibility.com/pasteles-puerto-rican/",
      note: "grated green-banana/yautía masa with achiote, pork filling, leaf-wrapped and boiled",
    },
  ],
};
