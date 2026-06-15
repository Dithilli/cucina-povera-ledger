import type { Recipe } from "../types";

export const cabbagePoriyal: Recipe = {
  slug: "cabbage-poriyal",
  title: "Cabbage Poriyal",
  cuisine: "south-indian",
  blurb:
    "Shredded cabbage cooked thoran-style in coconut oil with green chili and curry leaves, no water added, then heaped with fresh grated coconut — the cheapest, sweetest vegetable on the Onam plate.",
  servings: 4,
  perServing: { calories: 165, protein: 5 },
  estCostPerServing: 0.55,
  roles: ["dinner"],
  ingredients: [
    { item: "cabbage, finely shredded", qty: "1 small head (~1 lb)", cost: 0.9 },
    { item: "grated coconut (fresh or frozen)", qty: "1/2 cup", cost: 0.6 },
    { item: "green chilies, slit", qty: "2", cost: 0.1 },
    { item: "mustard seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "urad dal", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.15, spansWeeks: true },
    { item: "turmeric, salt", qty: "to taste", cost: 0.1, spansWeeks: true },
    { item: "coconut oil", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Crush the grated coconut lightly with the green chilies, a pinch of turmeric, and a few curry leaves — the Kerala thoran move that scents the coconut before it ever hits the pan.",
    "Heat the coconut oil and pop the mustard seeds, then fry the urad dal to gold and add the remaining curry leaves.",
    "Add the shredded cabbage and salt, cover, and cook over medium heat 6–8 minutes — no water, the cabbage steams in its own moisture until tender but still with a little bite.",
    "Fold in the chili-coconut mixture, toss for two minutes until fragrant, and serve hot with rice and dal.",
  ],
  modernMove:
    "Bruising the coconut with chili and curry leaf before cooking — the classic thoran step — perfumes the whole dish, so a head of plain cabbage tastes layered and green rather than boiled.",
  notes:
    "Coconut oil is non-negotiable for the Kerala character here. Cabbage releases plenty of water, so resist adding any; cook it covered and let it steam.",
  tags: ["vegetable", "south-indian", "poriyal", "thoran", "coconut"],
  sources: [
    {
      title: "Dassana Amit — Veg Recipes of India",
      url: "https://www.vegrecipesofindia.com/cabbage-thoran/",
      note: "Informed the Kerala thoran method: crushing coconut with green chili and turmeric, coconut-oil tadka, and cooking the cabbage covered with no added water.",
    },
  ],
};
