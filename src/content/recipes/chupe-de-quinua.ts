import type { Recipe } from "../types";

export const chupeDeQuinua: Recipe = {
  slug: "chupe-de-quinua",
  title: "Chupe de Quinua",
  cuisine: "andean",
  blurb:
    "The altiplano's hearty quinoa chowder — toasted quinoa simmered to creaminess with floury potato, sweet choclo, and a slick of ají, finished with melting fresh cheese and an egg poached right in the pot.",
  servings: 4,
  perServing: { calories: 420, protein: 17 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "quinoa, rinsed well until the water runs clear", qty: "1 cup", cost: 1.2 },
    { item: "yellow/floury potatoes, peeled and diced", qty: "3 medium", cost: 0.8 },
    { item: "choclo or sweet corn kernels", qty: "1 cup", cost: 0.5 },
    { item: "onion + garlic", qty: "1 + 2 cloves", cost: 0.3 },
    { item: "ají amarillo paste", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "fresh cheese (queso fresco), cubed", qty: "4 oz", cost: 0.9 },
    { item: "eggs", qty: "2", cost: 0.5 },
    { item: "milk", qty: "1/2 cup", cost: 0.2, spansWeeks: true },
    { item: "oil, cumin, oregano, salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Toast the rinsed quinoa dry in a pot until it smells nutty and starts to pop, then set aside — this is what gives the chupe its depth.",
    "In the same pot soften the onion and garlic in oil with a little cumin and oregano, then stir in the ají amarillo paste and let it fry until fragrant.",
    "Add about 6 cups of water, the potatoes, the choclo, and the toasted quinoa. Simmer 18–20 minutes until the potatoes are soft and the quinoa has bloomed and thickened the broth.",
    "Stir in the milk and slip in the cubed cheese. Crack the eggs straight into the simmering chupe and poach them for 3–4 minutes.",
    "Season with salt and serve at once, each bowl getting an egg and a few pillows of half-melted cheese.",
  ],
  modernMove:
    "Dry-toasting the quinoa before it ever touches water is the move — it turns a bland grain into something nutty and deep, and the released starch quietly thickens the broth so you need no cream.",
  notes: "A whole satisfying dinner from a cup of quinoa; the egg and cheese are the only protein and they go a long way.",
  zeroWasteHero: false,
  tags: ["quinoa", "potato", "soup", "cheese", "egg", "andean"],
  sources: [
    {
      title: "Christopher Kimball's Milk Street — Peruvian Quinoa and Corn Chowder (Chupe de Quinoa)",
      url: "https://www.177milkstreet.com/recipes/peruvian-quinoa-and-corn-chowder-chupe-de-quinoa",
      note: "Toasted quinoa, potato, and corn chowder thickened by the grain itself, with ají and cheese.",
    },
  ],
};
