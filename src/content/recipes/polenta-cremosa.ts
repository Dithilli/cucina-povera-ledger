import type { Recipe } from "../types";

export const polentaCremosa: Recipe = {
  slug: "polenta-cremosa",
  title: "Polenta Cremosa",
  cuisine: "brazilian",
  blurb:
    "Loose, pourable fubá cooked low and slow until it falls off the spoon, spooned into a pool under a saucy braise — the Brazilian-Italian comfort that warms a cold night.",
  servings: 2,
  perServing: { calories: 560, protein: 19 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "fubá (fine cornmeal)", qty: "3/4 cup", cost: 0.3 },
    { item: "water or light broth", qty: "4 cups", cost: 0.1 },
    { item: "butter", qty: "1 Tbsp", cost: 0.25, spansWeeks: true },
    { item: "ground beef or sliced calabresa sausage", qty: "150 g", cost: 1.4 },
    { item: "tomatoes, diced", qty: "2", cost: 0.5 },
    { item: "onion, garlic, oil, grated cheese, salt", qty: "to taste", cost: 0.35, spansWeeks: true },
  ],
  method: [
    "Dissolve the fubá in 1 cup of the cold water; bring the rest to a boil with the butter and a good pinch of salt.",
    "Stream the slurry into the boiling liquid whisking, then drop to low and stir often for about 15 minutes until creamy and glossy — keep it loose enough to pour.",
    "Brown the meat with onion and garlic, add the tomato and a splash of water, and simmer into a thick braise.",
    "Ladle the polenta into shallow bowls, top with the braise, and shower with grated cheese.",
  ],
  modernMove:
    "Pull it off the heat while it's still slack — polenta keeps thickening in the bowl, and you want it spoonably soft when it hits the table.",
  notes: "Calabresa sausage makes a richer, cheaper braise than beef; either way one small amount of protein sauces both bowls.",
  zeroWasteHero: false,
  tags: ["corn", "fubá", "polenta", "braise", "brazilian"],
  sources: [
    {
      title: "Receitas Nestlé — Polenta Cremosa",
      url: "https://www.receitasnestle.com.br/receitas/polenta-cremosa-com-queijo",
      note: "creamy fubá polenta dissolved cold then simmered, served under a meat or sausage sauce",
    },
  ],
};
