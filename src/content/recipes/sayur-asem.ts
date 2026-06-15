import type { Recipe } from "../types";

export const sayurAsem: Recipe = {
  slug: "sayur-asem",
  title: "Sayur Asem",
  cuisine: "indonesian",
  blurb:
    "Tamarind-sour vegetable soup — the clear, bracing Sundanese broth that turns the ragged ends of the vegetable drawer into dinner.",
  servings: 4,
  perServing: { calories: 450, protein: 19 },
  estCostPerServing: 0.82,
  roles: ["dinner"],
  zeroWasteHero: true,
  ingredients: [
    {
      item: "mixed vegetables and trimmings (corn, long beans, chayote, cabbage cores, eggplant, raw peanuts)",
      qty: "6 cups",
      cost: 1.8,
    },
    { item: "firm tofu or tempeh, cubed", qty: "6 oz", cost: 0.6 },
    {
      item: "tamarind pulp, soaked and strained",
      qty: "2 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "shallots", qty: "4", cost: 0.4 },
    { item: "garlic cloves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "red chilies", qty: "2", cost: 0.2, spansWeeks: true },
    { item: "galangal, smashed", qty: "1 thumb", cost: 0.2, spansWeeks: true },
    {
      item: "bay leaves (salam)",
      qty: "2",
      cost: 0.1,
      spansWeeks: true,
    },
    { item: "palm sugar", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Pound the shallots, garlic, and chilies to a rough paste. Bring a pot of water (about 8 cups) to a boil with the paste, galangal, and bay.",
    "Add the densest, slowest things first — raw peanuts, corn, chayote, tofu — and simmer until they begin to soften.",
    "Add the rest of the vegetables and any clean trimmings (cabbage cores, bean ends), keeping the tenderest greens for the last few minutes.",
    "Stir in the tamarind, palm sugar, and salt. Taste: it should land sour first, then sweet and salty behind it. Serve as a brothy companion to rice and fried tofu.",
  ],
  modernMove:
    "The tamarind goes in at the end, off the boil, so the sourness stays bright and fruity instead of cooking flat — and the layered-in vegetables each keep their own texture.",
  notes:
    "Built to absorb leftovers and trim: corn cobs, bean ends, cabbage cores and stems, leftover peanuts. Almost nothing edible from prep needs to be thrown away.",
  tags: ["tamarind", "soup", "vegetables", "zero-waste", "sundanese", "scraps"],
};
