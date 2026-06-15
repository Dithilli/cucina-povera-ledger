import type { Recipe } from "../types";

export const pastel: Recipe = {
  slug: "pastel",
  title: "Pastel de Feira",
  cuisine: "brazilian",
  blurb:
    "The Saturday-market pastry — a paper-thin rectangle of dough sealed around savory beef or molten cheese and deep-fried until it bubbles up blistered and glassy-crisp.",
  servings: 2,
  perServing: { calories: 610, protein: 22 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "all-purpose flour", qty: "1 1/2 cups", cost: 0.3 },
    { item: "splash of cachaça (or vinegar)", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "neutral oil (dough + frying)", qty: "1 tbsp + for frying", cost: 0.5, spansWeeks: true },
    { item: "ground beef", qty: "5 oz", cost: 1.1 },
    { item: "onion, garlic, tomato, parsley", qty: "1/2 onion + aromatics", cost: 0.3 },
    { item: "mozzarella (for cheese pasteis)", qty: "2 oz", cost: 0.5 },
    { item: "salt, pepper, water", qty: "to season", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Knead flour, salt, oil, the cachaça, and warm water into a smooth dough; rest it covered 30 minutes so the gluten relaxes and rolls out thin.",
    "Brown the beef with onion, garlic, and tomato into a tight, well-seasoned refogado; let it cool so it won't tear the dough.",
    "Roll the dough sheet-thin, cut rectangles, spoon filling onto one half, brush the edges with water and press sealed with a fork.",
    "Fry in hot oil, spooning oil over the top so it puffs and blisters, until golden and crisp on both sides. Drain and serve at once.",
  ],
  modernMove:
    "The shot of cachaça in the dough fries off and leaves micro-bubbles — that's the secret to the lacquered, blistered pastel-de-feira crust instead of a flat shell.",
  zeroWasteHero: false,
  tags: ["feira", "boteco", "fried", "brazilian"],
  sources: [
    {
      title: "Brazilian Pastel — Olivia's Cuisine",
      url: "https://www.oliviascuisine.com/brazilian-pastel/",
      note: "cachaça in the dough; thin-rolled, blistered fried turnover technique",
    },
  ],
};
