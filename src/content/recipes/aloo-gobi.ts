import type { Recipe } from "../types";

export const alooGobi: Recipe = {
  slug: "aloo-gobi",
  title: "Aloo Gobi",
  cuisine: "north-indian",
  blurb:
    "Dry-cooked potato and cauliflower in turmeric and cumin — the everyday North Indian sabzi that turns two cheap vegetables into a roti-and-dal dinner.",
  servings: 4,
  perServing: { calories: 520, protein: 9 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "potatoes, cut into 3/4-inch chunks", qty: "1 lb", cost: 0.7 },
    { item: "cauliflower, broken into small florets", qty: "1 small head", cost: 1.2 },
    { item: "onion, finely sliced", qty: "1", cost: 0.3 },
    { item: "tomato, chopped", qty: "1", cost: 0.4 },
    { item: "ginger-garlic, grated", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "green chili, slit", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "cumin seeds", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    {
      item: "turmeric, coriander powder, garam masala",
      qty: "1 tsp each",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "mustard or other neutral oil", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "cilantro to finish", qty: "small handful", cost: 0.2 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Heat the oil until shimmering and crackle the cumin seeds. Add the onion and fry until golden at the edges.",
    "Stir in the ginger-garlic and green chili for a minute, then the tomato, turmeric, and coriander powder. Cook down to a thick masala that releases oil.",
    "Add the potatoes and cauliflower with salt and toss to coat. Splash in a few tablespoons of water, cover, and steam on low — the key is to cook in their own moisture so the masala clings instead of boiling away.",
    "Uncover toward the end and let the pan dry out, turning gently so the florets catch a little color. Dust with garam masala, fold through cilantro, and serve dry with roti or dal.",
  ],
  modernMove:
    "Covered low-heat steaming with almost no added water keeps each vegetable distinct and lets the masala caramelize onto it — the difference between a dry sabzi and a wet stew.",
  tags: ["sabzi", "potato", "cauliflower", "dry-curry", "vegetable"],
};
