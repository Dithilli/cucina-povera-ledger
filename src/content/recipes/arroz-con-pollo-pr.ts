import type { Recipe } from "../types";

export const arrozConPolloPr: Recipe = {
  slug: "arroz-con-pollo-pr",
  title: "Arroz con Pollo",
  cuisine: "puerto-rican",
  blurb:
    "One-pot Puerto Rican chicken and rice — thighs browned in achiote, then nestled into recaíto-stained grains studded with olives and sweet peppers until everything steams together.",
  servings: 2,
  perServing: { calories: 660, protein: 30 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "chicken thighs, bone-in, cut into pieces", qty: "3/4 lb", cost: 1.8 },
    { item: "long-grain white rice", qty: "1 cup", cost: 0.35 },
    { item: "sofrito / recaíto", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "tomato sauce", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "green bell pepper, diced", qty: "1/2", cost: 0.3 },
    { item: "manzanilla olives + capers", qty: "8 + 1 tsp", cost: 0.25, spansWeeks: true },
    { item: "achiote oil, sazón, adobo", qty: "1 tbsp + 1 tsp each", cost: 0.2, spansWeeks: true },
    { item: "salt, oregano, bay leaf", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Season the chicken with adobo and oregano and brown it in achiote oil in a caldero; set aside.",
    "In the same pot, sauté the sofrito and diced bell pepper until soft, then stir in tomato sauce, sazón, olives, and capers.",
    "Return the chicken, add 1 3/4 cups water and a bay leaf, and bring to a boil; taste the liquid for salt.",
    "Stir in the rinsed rice, let it boil down to the surface, then cover and steam on low 20–25 minutes.",
    "Fluff and serve straight from the pot, scraping up any pegao.",
  ],
  modernMove:
    "Brown the chicken first and build the rice in its rendered fat and fond — the grains cook in chicken drippings, so three-quarters of a pound flavors the whole pot.",
  notes: "A classic Sunday one-pot stretched to a weeknight; the olives and capers do as much seasoning work as the meat.",
  tags: ["rice", "chicken", "sofrito", "dinner", "puerto-rican"],
  sources: [
    {
      title: "Sense & Edibility — Arroz con Pollo (Puerto Rican Chicken with Rice)",
      url: "https://senseandedibility.com/arroz-con-pollo-puerto-rican-chicken-with-rice/",
      note: "Browned chicken, recaíto, achiote, olives, and capers built into a one-pot arroz con pollo.",
    },
  ],
};
