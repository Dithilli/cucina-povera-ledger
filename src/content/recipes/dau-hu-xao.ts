import type { Recipe } from "../types";

export const dauHuXao: Recipe = {
  slug: "dau-hu-xao",
  title: "Đậu Hũ Xào Rau",
  cuisine: "vietnamese",
  blurb:
    "Pan-crisped tofu stir-fried with whatever vegetables are cheap that week — a meatless, protein-solid wok dinner that leans on browning and fish sauce for depth.",
  servings: 4,
  perServing: { calories: 560, protein: 24 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    {
      item: "firm tofu, pressed and cubed",
      qty: "14 oz block",
      cost: 1.6,
    },
    { item: "cabbage, carrot, and/or whatever vegetable is cheapest, sliced", qty: "4 cups", cost: 1.5 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "shallot, sliced", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "fish sauce (or soy for fully vegetarian)", qty: "1 1/2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "sugar", qty: "1 tsp", cost: 0.03, spansWeeks: true },
    { item: "neutral oil", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "scallion, cut in lengths", qty: "2", cost: 0.2 },
    { item: "steamed rice, to serve", qty: "for 4", cost: 0.6 },
    { item: "black pepper, chili", qty: "to taste" },
  ],
  method: [
    "Press the tofu dry, then fry the cubes in the oil over medium-high, undisturbed, until a deep golden crust forms on several sides; lift out and set aside.",
    "In the same pan fry the shallot and garlic until fragrant, then add the firmest vegetables (carrot, cabbage stems) and stir-fry hard for a minute.",
    "Add the leafier vegetables, then the fish sauce, soy, and sugar mixed with a splash of water; toss over high heat until just crisp-tender.",
    "Return the tofu, add the scallion, and toss to coat and warm through. Finish with black pepper and chili and serve over rice.",
  ],
  modernMove:
    "Brown the tofu hard and pull it before it goes back in at the end — that crust holds up against the sauce instead of turning to mush, and a press beforehand is the difference between frying and steaming.",
  tags: ["stir-fry", "xao", "tofu", "vegetables", "vegetarian-option", "rice"],
};
