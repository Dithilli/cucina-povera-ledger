import type { Recipe } from "../types";

export const fagioliAllUccelletto: Recipe = {
  slug: "fagioli-all-uccelletto",
  title: "Fagioli all'Uccelletto",
  cuisine: "italian",
  blurb:
    "Tuscan beans stewed with sage, garlic, and tomato — 'cooked like little birds,' meaning with the same aromatics you'd use for game.",
  servings: 4,
  perServing: { calories: 340, protein: 16 },
  estCostPerServing: 0.7,
  roles: ["dinner", "side", "lunch"],
  ingredients: [
    {
      item: "cooked cannellini (plus a little of their liquid)",
      qty: "3 cups",
      cost: 1.1,
    },
    { item: "garlic cloves, smashed", qty: "3", cost: 0.15, spansWeeks: true },
    {
      item: "fresh sage leaves",
      qty: "8",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "can chopped tomatoes (or passata)",
      qty: "1/2 can",
      cost: 0.6,
    },
    {
      item: "olive oil, chili flakes, salt, pepper",
      qty: "4 tbsp oil",
      cost: 0.6,
      spansWeeks: true,
    },
  ],
  method: [
    "Warm the olive oil with the smashed garlic, sage, and chili until very fragrant — let the sage crisp slightly.",
    "Add the tomato and cook down a few minutes until it loses its raw edge.",
    "Tip in the beans with a splash of their liquid. Simmer gently 15 minutes, stirring, until thick and glossy.",
    "Season, rest off the heat, and finish with raw olive oil. Excellent on grilled bread.",
  ],
  modernMove:
    "Bloom the sage and garlic in the oil first so the fat itself is perfumed — the beans then carry that aroma all the way through.",
  tags: ["legumes", "beans", "sage", "tomato", "side"],
  sources: [
    {
      title: "Fagioli all'uccelletto — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Fagioli_all%27uccelletto",
      note: "Tuscan cannellini stewed with sage, garlic, tomato; the 'little bird' name",
    },
  ],
};
