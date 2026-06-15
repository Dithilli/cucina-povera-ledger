import type { Recipe } from "../types";

export const misirAlicha: Recipe = {
  slug: "misir-alicha",
  title: "Misir Alicha",
  cuisine: "ethiopian",
  blurb:
    "The gentle, berbere-free twin of misir wot — red lentils simmered sunny-soft with turmeric, garlic, and ginger. Soothing, golden, and the dish you reach for when the heat needs a rest.",
  servings: 4,
  perServing: { calories: 300, protein: 15 },
  estCostPerServing: 0.6,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "split red lentils (or a pot of cooked red lentils)", qty: "1 1/2 cups dry", cost: 1.2 },
    { item: "white onion, finely chopped", qty: "1 large", cost: 0.4 },
    { item: "garlic + ginger, minced", qty: "3 cloves / 1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "turmeric", qty: "1 tsp", cost: 0.2, spansWeeks: true },
    { item: "oil or niter kibbeh", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "green chile (jalapeño/serrano), slivered", qty: "1", cost: 0.2 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soften the onion in the oil over medium-low heat until translucent and sweet — about 10 minutes. No browning; alicha is meant to stay pale and gentle.",
    "Stir in the garlic, ginger, and turmeric and cook a minute until fragrant.",
    "Add the rinsed lentils (or cooked-lentil base) and hot water to cover. Simmer until the lentils are soft and the dish thickens — 20–35 minutes.",
    "Fold in the slivered green chile near the end for a mild warmth. Salt to taste and serve over injera, often alongside a fiery wot for contrast.",
  ],
  modernMove:
    "Alicha is restraint: keep the heat low so nothing browns, letting the turmeric and aromatics stay clean and bright. The slivered green chile goes in late so it perfumes without turning the dish hot.",
  notes:
    "On the plate, alicha and a spicy wot are deliberate opposites — the cool and the fire, both built from the same cheap pot of lentils.",
  tags: ["alicha", "lentils", "turmeric", "dinner", "mild"],
};
