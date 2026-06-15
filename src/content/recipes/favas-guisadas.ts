import type { Recipe } from "../types";

export const favasGuisadas: Recipe = {
  slug: "favas-guisadas",
  title: "Favas Guisadas",
  cuisine: "portuguese",
  blurb:
    "Spring fava beans stewed low with chouriço and a little smoked bacon — a Lisbon-tavern dish that turns a cheap glut of broad beans into a fragrant pork-flecked supper.",
  servings: 4,
  perServing: { calories: 480, protein: 24 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    {
      item: "fresh or frozen fava (broad) beans, podded",
      qty: "1 1/2 lb",
      cost: 2.5,
    },
    { item: "chouriço, sliced", qty: "4 oz", cost: 2.0, spansWeeks: true },
    { item: "smoked bacon or toucinho, diced", qty: "3 oz", cost: 1.1 },
    { item: "onion, chopped", qty: "1", cost: 0.3 },
    { item: "garlic cloves, sliced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "ripe tomatoes, chopped", qty: "2", cost: 0.7 },
    { item: "white wine", qty: "1/2 cup", cost: 0.5, spansWeeks: true },
    { item: "olive oil", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "chopped coriander or parsley", qty: "1 handful", cost: 0.3 },
    { item: "eggs to finish (optional)", qty: "4", cost: 0.8 },
    { item: "salt, black pepper", qty: "to taste" },
  ],
  method: [
    "Render the bacon in olive oil, then add the chouriço and let it colour and bleed its red fat. Lift out half the sausage to keep it firm for serving.",
    "Soften the onion, garlic, and bay in that fat, add the tomatoes, and cook to a jammy refogado.",
    "Pour in the wine, let it bubble away, then fold in the favas with a splash of water. Cover and stew gently 20–30 minutes until the beans are tender and the sauce clings.",
    "Return the reserved chouriço, season, and stir in the herbs. For a fuller supper, make hollows and poach an egg into each, covered, until just set.",
  ],
  modernMove:
    "Pulling out half the chouriço early keeps two textures — sausage that has melted into the sauce and slices that stay snappy on top.",
  tags: ["legumes", "fava-beans", "chouriço", "pork", "stew", "spring"],
};
