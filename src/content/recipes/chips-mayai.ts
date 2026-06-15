import type { Recipe } from "../types";

export const chipsMayai: Recipe = {
  slug: "chips-mayai",
  title: "Chips Mayai",
  cuisine: "east-african",
  blurb:
    "Tanzania's beloved chipsi mayai — golden french fries bound into a thick omelette, flipped whole and cut into wedges, served with kachumbari and a slick of ketchup.",
  servings: 4,
  perServing: { calories: 560, protein: 18 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "potatoes, cut into chips", qty: "1 1/2 lb", cost: 1.0 },
    { item: "eggs", qty: "6", cost: 1.2 },
    { item: "onion, finely diced", qty: "1/2", cost: 0.15 },
    { item: "tomato, diced", qty: "1", cost: 0.3 },
    { item: "fresh dhania (cilantro), chopped", qty: "2 tbsp", cost: 0.15 },
    { item: "green chili, minced (optional)", qty: "1", cost: 0.15 },
    { item: "neutral oil for frying", qty: "for frying", cost: 0.6 },
    { item: "salt and black pepper", qty: "to taste" },
  ],
  method: [
    "Fry the chips in hot oil until cooked through and pale golden; drain off all but a thin film of oil.",
    "Beat the eggs with onion, tomato, dhania, chili, salt, and pepper.",
    "Spread the chips evenly in the pan over medium heat and pour the egg over, nudging it between the fries so it sets into one solid round.",
    "When the bottom is golden, slide onto a plate, invert the pan over it, and flip to cook the second side.",
    "Cut into wedges and serve with kachumbari and ketchup or pili-pili.",
  ],
  modernMove:
    "Pour the egg over fries that are already hot and barely oiled — the omelette grips the chips into a sliceable cake instead of a greasy scramble.",
  notes: "A handful of cooked minced beef turned through the egg makes it a fuller meal.",
  zeroWasteHero: false,
  tags: ["street", "eggs", "potato", "east-african", "tanzanian"],
  sources: [
    {
      title: "The Kitchn — Kiano Moju's Chips Mayai (French Fry Omelet)",
      url: "https://www.thekitchn.com/chips-mayai-recipe-23158689",
      note: "Layering fries with a tomato-onion-dhania egg and the plate-flip technique.",
    },
  ],
};
