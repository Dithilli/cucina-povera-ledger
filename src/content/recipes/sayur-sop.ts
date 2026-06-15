import type { Recipe } from "../types";

export const sayurSop: Recipe = {
  slug: "sayur-sop",
  title: "Sayur Sop",
  cuisine: "indonesian",
  blurb:
    "A clear, gently sweet vegetable soup built on a garlic-and-pepper broth — the Indonesian household answer to whatever is cheapest in the basket that day.",
  servings: 4,
  perServing: { calories: 450, protein: 18 },
  estCostPerServing: 0.85,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "garlic cloves, crushed", qty: "5", cost: 0.25, spansWeeks: true },
    { item: "shallots, sliced", qty: "3", cost: 0.3 },
    { item: "carrots, sliced", qty: "2", cost: 0.4 },
    { item: "potatoes, cubed", qty: "2", cost: 0.5 },
    { item: "cabbage, chopped", qty: "1/4 head", cost: 0.4 },
    { item: "green beans, cut", qty: "1 cup", cost: 0.5 },
    { item: "scallions and celery leaf", qty: "1 handful", cost: 0.3 },
    { item: "ginger, smashed", qty: "1 thumb", cost: 0.15, spansWeeks: true },
    {
      item: "eggs (to poach in the broth) or a little shredded chicken",
      qty: "3 eggs",
      cost: 0.6,
    },
    { item: "nutmeg, freshly grated", qty: "pinch", cost: 0.1, spansWeeks: true },
    { item: "neutral oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    {
      item: "to finish: fried shallots, white pepper, lime",
      qty: "to finish",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "salt, sugar", qty: "to taste" },
  ],
  method: [
    "Sweat the shallots and crushed garlic in the oil until soft and sweet but not browned — a clear soup wants the aromatics coaxed, not caramelized. Add the smashed ginger.",
    "Pour in ~6 cups water and bring to a simmer. Add potatoes and carrots first and cook until nearly tender, seasoning with salt, a little sugar, white pepper, and a pinch of nutmeg.",
    "Add green beans, then cabbage, cooking just until bright and crisp-tender — the vegetables should keep their bite, not collapse. If using eggs, crack them gently into the simmering broth to poach; or stir in shredded chicken to warm through.",
    "Off the heat, fold in scallions and celery leaf. Finish each bowl with fried shallots, a crack of white pepper, and a squeeze of lime.",
  ],
  modernMove:
    "Building the broth on slowly-sweated garlic and shallots — then poaching eggs right in it — gives a meatless soup body and savor for pennies, and lets you swap in whatever vegetable is cheapest without changing the bones of the dish.",
  tags: ["vegetable", "soup", "clear-broth", "garlic", "flexible", "meatless"],
};
