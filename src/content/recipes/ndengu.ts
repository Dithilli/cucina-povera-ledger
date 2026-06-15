import type { Recipe } from "../types";

export const ndengu: Recipe = {
  slug: "ndengu",
  title: "Ndengu (Green Gram Stew)",
  cuisine: "east-african",
  blurb:
    "Kenya's everyday green-gram stew — tiny olive-green mung beans simmered to a soft, almost creamy collapse in a tomato-onion base loosened with coconut milk, the cheapest hot dinner in the country.",
  servings: 4,
  perServing: { calories: 480, protein: 21 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "dried green grams (ndengu / mung beans)", qty: "1 1/2 cups", cost: 0.85 },
    { item: "onion, finely diced", qty: "1 large", cost: 0.4 },
    { item: "tomatoes, chopped", qty: "3", cost: 0.6 },
    { item: "tomato paste", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "coconut milk (nazi)", qty: "1 cup", cost: 0.6 },
    { item: "garlic and ginger, grated", qty: "2 cloves + thumb", cost: 0.15, spansWeeks: true },
    { item: "curry powder", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "ground cumin (jeera)", qty: "1/2 tsp", cost: 0.03, spansWeeks: true },
    { item: "fresh coriander (dhania), chopped", qty: "small handful", cost: 0.2 },
    { item: "oil and salt", qty: "2 tbsp + to taste", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Rinse the green grams and boil in plenty of fresh water until tender and beginning to split, 30–40 minutes; reserve the liquid.",
    "In another pot, fry the onion in oil until soft and golden, then add garlic, ginger, curry powder and cumin and cook until fragrant.",
    "Add the tomatoes and tomato paste and cook down to a thick sauce.",
    "Tip in the cooked grams with some of their water, mash a portion against the pot, and stir in the coconut milk.",
    "Simmer 10–15 minutes until thick and creamy; salt, finish with dhania, and serve with chapati, rice or ugali.",
  ],
  modernMove:
    "Cook the grams a touch past done so a few burst — their starch is what gives ndengu its signature porridge-like body once the coconut goes in.",
  notes:
    "Whole green grams need no soaking; they cook faster than kidney beans and forgive a hard simmer.",
  zeroWasteHero: false,
  tags: ["beans", "mung", "coconut", "kenyan", "east-african"],
  sources: [
    {
      title: "Baking Hermann — Ndengu (Kenyan Mung Bean Curry)",
      url: "https://bakinghermann.com/ndengu-kenyan-mung-bean-curry/",
      note: "Boiling the grams then building a tomato-onion-spice base finished with coconut milk; inland bean meets coastal coconut.",
    },
  ],
};
