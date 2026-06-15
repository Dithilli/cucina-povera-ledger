import type { Recipe } from "../types";

export const soponDePescado: Recipe = {
  slug: "sopon-de-pescado",
  title: "Sopón de Pescado (Fish and Rice Soup)",
  cuisine: "puerto-rican",
  blurb:
    "A bright, brothy soup of white fish poached in a sofrito-and-tomato base with rice, olives and a whisper of saffron — frugal, fast, and built to stretch a little fish into a full bowl.",
  servings: 4,
  perServing: { calories: 440, protein: 27 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "firm white fish fillet, cut in chunks", qty: "3/4 lb", cost: 4.2 },
    { item: "medium-grain rice", qty: "1/2 cup", cost: 0.2, spansWeeks: true },
    { item: "sofrito (recaíto)", qty: "1/3 cup", cost: 0.5, spansWeeks: true },
    { item: "tomato sauce", qty: "3/4 cup", cost: 0.4 },
    { item: "fish or vegetable broth", qty: "5 cups", cost: 0.7, spansWeeks: true },
    { item: "manzanilla olives + capers (alcaparrado)", qty: "1/4 cup", cost: 0.5, spansWeeks: true },
    { item: "saffron or sazón, garlic, oregano, bay leaf, olive oil", qty: "to taste", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Season the fish with salt, pepper, and a squeeze of lime and set aside while you build the base.",
    "Heat olive oil in a pot and cook the sofrito and garlic until fragrant, then stir in the tomato sauce, alcaparrado, oregano, bay leaf, and saffron or sazón.",
    "Pour in the broth, bring to a simmer, add the rice, and cook until the rice is nearly tender, about 15 minutes.",
    "Slip the fish chunks into the simmering soup and poach gently 4–6 minutes, just until the fish turns opaque and flakes — keep it at a bare simmer so the pieces stay whole.",
    "Taste, adjust salt and lime, and serve hot with crusty bread or a side of tostones.",
  ],
  modernMove:
    "Add the fish only at the very end and let the residual heat finish it off the flame: poaching at a hard boil shreds the fillet, but easing it in last keeps the chunks intact and the broth clear.",
  notes:
    "A lighter cousin of asopao — less rice, more broth. It's the thrifty way to cook fish: three-quarters of a pound, poached in a seasoned broth, turns into four bowls of dinner.",
  zeroWasteHero: false,
  tags: ["fish", "soup", "rice", "sopon", "sofrito", "brothy", "dinner", "puerto-rican"],
  sources: [
    {
      title: "Food Network — Puerto Rican Seafood Soup (Asopao de Mariscos)",
      url: "https://www.foodnetwork.com/recipes/puerto-rican-seafood-soup-asopao-de-mariscos-recipe-1939327",
      note: "sofrito-and-tomato seafood broth with rice, olives and saffron; fish added near the end to poach",
    },
  ],
};
