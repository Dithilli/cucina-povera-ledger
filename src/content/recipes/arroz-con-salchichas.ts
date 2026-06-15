import type { Recipe } from "../types";

export const arrozConSalchichas: Recipe = {
  slug: "arroz-con-salchichas",
  title: "Arroz con Salchichas",
  cuisine: "puerto-rican",
  blurb:
    "The thrifty pantry supper every boricua grew up on — canned Vienna sausages browned in sofrito and folded into achiote-yellow rice with olives, ready in half an hour.",
  servings: 2,
  perServing: { calories: 600, protein: 17 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "Vienna sausages, sliced into rounds", qty: "1 can (5 oz)", cost: 0.9 },
    { item: "long-grain white rice", qty: "1 cup", cost: 0.35 },
    { item: "sofrito / recaíto", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "tomato sauce", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "achiote oil + sazón", qty: "1 tbsp + 1 tsp", cost: 0.2, spansWeeks: true },
    { item: "manzanilla olives", qty: "6", cost: 0.2, spansWeeks: true },
    { item: "salt, oregano", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Brown the sliced Vienna sausages in achiote oil in a caldero until lightly caramelized.",
    "Add the sofrito and sauté until fragrant, then stir in tomato sauce, sazón, and olives.",
    "Pour in 1 3/4 cups water, bring to a boil, and taste the liquid for salt.",
    "Stir in the rinsed rice, let it boil down to the surface, then cover and steam on low 20 minutes.",
    "Fluff and serve — a complete one-pot dinner from the pantry shelf.",
  ],
  modernMove:
    "Sear the sausage rounds hard before the sofrito goes in — the browning gives a tinned, mild sausage a meaty depth it doesn't have straight from the can.",
  notes: "A genuine despensa dinner: a shelf-stable can plus rice and sofrito feeds two for under a dollar a plate.",
  tags: ["rice", "sausage", "pantry", "dinner", "puerto-rican"],
  sources: [
    {
      title: "Budget Bytes — Arroz con Salchichas (Puerto Rican Rice with Sausage)",
      url: "https://www.budgetbytes.com/arroz-con-salchichas-puerto-rican-rice-with-sausage/",
      note: "Vienna sausages browned and cooked into yellow rice with sofrito, tomato sauce, and olives.",
    },
  ],
};
