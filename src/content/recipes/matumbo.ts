import type { Recipe } from "../types";

export const matumbo: Recipe = {
  slug: "matumbo",
  title: "Matumbo (Utumbo)",
  cuisine: "east-african",
  blurb:
    "The thrifty tripe stew: cheap offcuts scrubbed clean, boiled long until silky, then wet-fried into a tomato-onion gravy with curry, ginger and dhania — proof that the cheapest cut, given time, eats like a feast with ugali.",
  servings: 4,
  perServing: { calories: 520, protein: 30 },
  estCostPerServing: 1.3,
  roles: ["dinner"],
  ingredients: [
    { item: "beef or goat tripe (matumbo), cleaned", qty: "2 lb", cost: 3.5 },
    { item: "lemon (for cleaning)", qty: "1", cost: 0.4 },
    { item: "onions, sliced", qty: "2", cost: 0.5 },
    { item: "tomatoes, chopped", qty: "3", cost: 0.9 },
    { item: "tomato paste", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "garlic cloves, minced", qty: "3", cost: 0.1, spansWeeks: true },
    { item: "fresh ginger, grated", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "curry powder", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "pilipili hoho (chili), minced", qty: "1", cost: 0.15, spansWeeks: true },
    { item: "dhania (cilantro), chopped", qty: "small bunch", cost: 0.3, spansWeeks: true },
    { item: "vegetable oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
    { item: "ugali, to serve", qty: "to serve" },
  ],
  method: [
    "Scrub the tripe well with salt and lemon to clean it, rinse, and cut into bite-size pieces.",
    "Boil the matumbo in salted water 1 1/2–2 hours (or 30 minutes in a pressure cooker) until tender and silky, then drain, keeping a little of the liquor.",
    "Fry the onions in oil until golden, then add garlic, ginger and curry powder and cook until fragrant.",
    "Stir in the tomatoes and tomato paste and cook down to a thick base, then add the boiled tripe and a splash of its liquor.",
    "Simmer (wet-fry) 10–15 minutes so the gravy clings to every piece, stir in chili and most of the dhania, check the salt, and serve hot with ugali.",
  ],
  modernMove:
    "Boil first, season second: tripe needs long water-cooking to turn tender, but the flavor goes in at the wet-fry stage — so the gravy stays bright and the cheapest cut on the counter carries the meal.",
  notes:
    "A handful of cubed potato or peas can stretch it further. Nothing is wasted — the offal others discard becomes the centerpiece.",
  zeroWasteHero: true,
  tags: ["meat", "east-african", "tripe", "offal", "stew", "zero-waste"],
  sources: [
    {
      title: "Jikoni Secrets — How to Cook Kenyan Matumbo Stew (Tripe Stew)",
      url: "https://jikonisecrets.co.ke/how-to-cook-kenyan-matumbo-stew/",
      note: "Lemon-clean, long boil to tender, then wet-fry in tomato-onion-curry gravy",
    },
  ],
};
