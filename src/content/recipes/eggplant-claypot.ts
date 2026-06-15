import type { Recipe } from "../types";

export const eggplantClaypot: Recipe = {
  slug: "eggplant-claypot",
  title: "Eggplant Claypot",
  cuisine: "cantonese",
  blurb:
    "Long purple eggplant softened until silky and almost creamy, braised in a clay pot with a fistful of garlic and just a spoonful of minced pork for savor — the vegetable is the dish, the pork only the seasoning that makes a cheap aubergine taste rich.",
  servings: 4,
  perServing: { calories: 360, protein: 12 },
  estCostPerServing: 1.05,
  roles: ["dinner"],
  ingredients: [
    { item: "Chinese eggplant, cut in batons", qty: "1 1/2 lb (about 3)", cost: 1.8 },
    { item: "ground pork", qty: "4 oz", cost: 1.0 },
    { item: "garlic, minced", qty: "6 cloves", cost: 0.2, spansWeeks: true },
    { item: "fresh ginger, minced", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "scallions, sliced (whites and greens kept apart)", qty: "3", cost: 0.3 },
    { item: "oyster sauce", qty: "1 1/2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "light soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "Shaoxing wine", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "sugar", qty: "1/2 tsp", cost: 0.02, spansWeeks: true },
    { item: "stock or water", qty: "1/2 cup", cost: 0.1 },
    { item: "cornstarch slurried in water", qty: "1 tsp + 1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "peanut oil", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Soak the cut eggplant in salted water 10 minutes, then drain and pat dry — this keeps it from drinking up oil and seasons it through. Sear the batons in a hot pan with oil until the cut faces are browned and just collapsing, then set aside.",
    "In the clay pot (or the same pan), fry the pork hard until the bits brown and the fat renders, then add the garlic, ginger, and scallion whites and fry until fragrant.",
    "Return the eggplant, stir in the oyster sauce, soy, Shaoxing wine, and sugar, then add the stock and simmer covered a few minutes until the eggplant is meltingly soft.",
    "Stir in the cornstarch slurry to glaze, scatter the scallion greens, and bring the bubbling pot to the table over rice.",
  ],
  modernMove:
    "Searing the eggplant before braising gives it a creamy interior without the deep-frying restaurants use — and rendering the small bit of pork first builds a meaty base that lets four ounces season a dish for four.",
  notes:
    "A clay pot holds and radiates heat so the dish keeps bubbling at the table, but a small heavy pot or skillet works just as well.",
  tags: ["eggplant", "cantonese", "claypot", "pork", "garlic", "rice"],
  sources: [
    {
      title: "The Woks of Life — Braised Eggplant with Minced Pork",
      url: "https://thewoksoflife.com/braised-eggplant-pork/",
      note: "Searing the eggplant and braising it with a little rendered minced pork, garlic, and oyster-soy sauce.",
    },
  ],
};
