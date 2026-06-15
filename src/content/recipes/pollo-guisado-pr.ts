import type { Recipe } from "../types";

export const polloGuisadoPr: Recipe = {
  slug: "pollo-guisado-pr",
  title: "Pollo Guisado",
  cuisine: "puerto-rican",
  blurb:
    "Bone-in chicken braised in a sofrito-and-tomato broth with potatoes and olives until it falls off the bone — the weeknight guiso that gets ladled over white rice all across the island.",
  servings: 2,
  perServing: { calories: 560, protein: 30 },
  estCostPerServing: 1.5,
  roles: ["dinner"],
  ingredients: [
    { item: "chicken thighs and drumsticks, bone-in", qty: "1 lb", cost: 2.0 },
    { item: "potatoes, cubed", qty: "2 medium", cost: 0.5 },
    { item: "sofrito / recaíto", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "tomato sauce", qty: "1/4 cup", cost: 0.2, spansWeeks: true },
    { item: "manzanilla olives", qty: "8", cost: 0.25, spansWeeks: true },
    { item: "achiote oil, sazón, adobo, oregano, bay leaf", qty: "1 tbsp + to taste", cost: 0.2, spansWeeks: true },
    { item: "cooked white rice, to serve", qty: "2 cups", cost: 0.3 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Season the chicken with adobo and oregano and brown it in achiote oil; set aside.",
    "Sauté the sofrito in the same pot, then stir in tomato sauce, sazón, olives, and a bay leaf.",
    "Return the chicken, add the cubed potatoes, and pour in enough water to nearly cover.",
    "Cover and simmer gently 40–50 minutes, until the chicken is tender and the potatoes have softened into the thickening broth.",
    "Taste for salt and serve over white rice.",
  ],
  modernMove:
    "Cook it with bone-in pieces — the bones enrich the braising liquid into a real gravy, so the broth needs nothing but sofrito and water to taste like stock.",
  notes: "Potatoes simmered in the broth do double duty: they stretch the dish and thicken the sauce as they break down.",
  tags: ["chicken", "guiso", "potato", "dinner", "puerto-rican"],
  sources: [
    {
      title: "Budget Bytes — Pollo Guisado (Puerto Rican Chicken Stew)",
      url: "https://www.budgetbytes.com/pollo-guisado/",
      note: "Bone-in chicken braised with sofrito, tomato sauce, potatoes, and olives, served over rice.",
    },
  ],
};
