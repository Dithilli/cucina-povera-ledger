import type { Recipe } from "../types";

export const baladoTeri: Recipe = {
  slug: "balado-teri",
  title: "Balado Teri Kacang",
  cuisine: "indonesian",
  blurb:
    "Tiny dried anchovies and peanuts fried crisp and tangled in a sweet-spicy chili glaze — the cheapest, most intense protein on the rice plate, and it keeps for days.",
  servings: 6,
  perServing: { calories: 320, protein: 16 },
  estCostPerServing: 0.55,
  roles: ["dinner", "side"],
  zeroWasteHero: true,
  ingredients: [
    {
      item: "teri (tiny dried anchovies)",
      qty: "5 oz",
      cost: 1.5,
      spansWeeks: true,
    },
    { item: "raw skinless peanuts", qty: "1 cup", cost: 0.6 },
    { item: "red chilies (cabe merah)", qty: "5", cost: 0.5 },
    { item: "shallots, sliced", qty: "5", cost: 0.45 },
    { item: "garlic cloves", qty: "3", cost: 0.15, spansWeeks: true },
    {
      item: "kecap manis (sweet soy sauce)",
      qty: "1 1/2 tbsp",
      cost: 0.25,
      spansWeeks: true,
    },
    {
      item: "tamarind paste in a splash of water",
      qty: "1 tsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "neutral oil for frying",
      qty: "4 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "palm or brown sugar", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "small pinch", cost: 0.05 },
  ],
  method: [
    "Fry the peanuts in cool oil that comes up to heat slowly, stirring, until evenly golden; scoop out before they darken. In the same oil, fry the dried teri until crisp and shatteringly dry, then lift out. Both should be bone-dry so they stay crunchy under the glaze.",
    "Pound or blitz the chilies, shallots, and garlic to a coarse paste and fry in the leftover oil until it darkens and smells sweet, 6–8 minutes.",
    "Add the kecap manis, tamarind, sugar, and a small pinch of salt — the teri is already salty — and cook to a sticky glaze.",
    "Off the heat, fold the crisp teri and peanuts through the sambal so everything is lacquered but still crunchy. Cool fully; it keeps a week in a jar and only gets better.",
  ],
  modernMove:
    "Frying the anchovies and peanuts completely dry, then glazing off the heat, makes a condiment that stays crisp for days — turning a near-free pantry fish into a week's worth of protein topping.",
  tags: ["anchovy", "teri", "peanuts", "sambal", "kecap-manis", "make-ahead"],
  sources: [
    { title: "Much Butter — Much Butter", url: "https://muchbutter.com/peanut-anchovy-sambal/", note: "frying anchovies and peanuts crisp, then tossing in a chili sambal glaze" },
  ],
};
