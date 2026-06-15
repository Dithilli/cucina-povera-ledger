import type { Recipe } from "../types";

export const pinakbet: Recipe = {
  slug: "pinakbet",
  title: "Pinakbet",
  cuisine: "filipino",
  blurb:
    "The Ilocano vegetable stew — bitter melon, eggplant, okra, squash, and long beans steamed down and seasoned with bagoong, the fermented shrimp or fish paste.",
  servings: 4,
  perServing: { calories: 470, protein: 16 },
  estCostPerServing: 1.05,
  roles: ["dinner"],
  ingredients: [
    { item: "kabocha or squash, cubed", qty: "2 cups", cost: 0.8 },
    { item: "bitter melon (ampalaya), sliced", qty: "1", cost: 0.7 },
    { item: "eggplant, sliced", qty: "1", cost: 0.5 },
    { item: "okra", qty: "8 pods", cost: 0.6 },
    { item: "long beans (sitaw), cut", qty: "1 handful", cost: 0.5 },
    {
      item: "bagoong (fermented shrimp or fish paste)",
      qty: "2 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "pork belly OR a little dried fish, diced",
      qty: "2 oz",
      cost: 0.6,
    },
    { item: "garlic, minced", qty: "4 cloves", cost: 0.15, spansWeeks: true },
    { item: "onion, sliced", qty: "1", cost: 0.3 },
    { item: "tomato, chopped", qty: "1", cost: 0.25 },
    { item: "ginger, slivered", qty: "1 thumb", cost: 0.15 },
    { item: "cooking oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Render the pork (or dried fish) in oil, then build the ginisa base: garlic, onion, ginger, and tomato until soft and saucy.",
    "Stir the bagoong into the base and let it sizzle to bloom — this is the soul of the dish.",
    "Layer the hardest vegetables in first (squash, long beans), add a splash of water, cover and steam.",
    "Add eggplant, bitter melon, and okra in order of toughness; cover and steam, shaking the pan rather than stirring so the vegetables don't turn to mush.",
    "Taste and adjust with more bagoong; serve over hot rice, with the savory liquor spooned over.",
  ],
  modernMove:
    "Steam by shaking the pan, never stirring — each vegetable keeps its shape and its own bite, the opposite of a sad boiled mush.",
  notes:
    "Bitter melon's bitterness is the point — it's the Ilocano contrast that makes the bagoong taste sweeter.",
  tags: ["vegetables", "bagoong", "ginisa", "ilocano", "frugal"],
  sources: [
    { title: "Vanjo Merano — Panlasang Pinoy (Pinakbet Ilocano)", url: "https://panlasangpinoy.com/pakbet/", note: "Ilocano vegetable stew seasoned with bagoong isda; blooming the paste in the base" },
    { title: "Bebs — Foxy Folksy", url: "https://www.foxyfolksy.com/pinakbet/", note: "Layering vegetables by toughness and steaming rather than stirring" },
  ],
};
