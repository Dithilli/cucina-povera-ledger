import type { Recipe } from "../types";

export const sopaDeFeijaoBr: Recipe = {
  slug: "sopa-de-feijao-br",
  title: "Sopa de Feijão",
  cuisine: "brazilian",
  blurb:
    "Cooked feijão blended into a thick, creamy base, then simmered with a handful of small macarrão until the soup turns velvety — the Brazilian way to stretch yesterday's beans into tonight's dinner.",
  servings: 4,
  perServing: { calories: 440, protein: 20 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "cooked feijão (carioca or black beans) with their broth", qty: "2 cups", cost: 0.6 },
    { item: "small macarrão (or stale bread for croutons)", qty: "1/2 cup", cost: 0.2 },
    { item: "onion, chopped", qty: "1", cost: 0.2 },
    { item: "carrot, diced (optional)", qty: "1", cost: 0.2 },
    { item: "garlic, oil, bay leaf, parsley, salt", qty: "to taste", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Blend about half the beans with a cup of hot water until smooth — this is what gives the soup its creamy body without any cream.",
    "Sweat the onion, garlic and carrot in oil with the bay leaf, then pour in the blended beans, the remaining whole beans, and enough water for a brothy soup.",
    "Bring to a simmer and drop in the macarrão; cook about 10 minutes until the pasta is tender and the soup has thickened around it.",
    "Season, finish with parsley, and serve hot — with fried bread croutons instead of pasta if you prefer.",
  ],
  modernMove:
    "Blending only half the beans gives you both a creamy base and whole beans for texture in one pot — leftover feijão is the perfect starting point.",
  notes: "Built to use up a pot of beans and their broth; the pasta or croutons turn a side of feijão into a full bowl.",
  zeroWasteHero: true,
  tags: ["beans", "feijão", "soup", "pasta", "brazilian"],
  sources: [
    {
      title: "Receiteria — Sopa de Feijão com Macarrão",
      url: "https://www.receiteria.com.br/receita/sopa-de-feijao-com-macarrao/",
      note: "part of the beans blended for a creamy base, the rest left whole, finished with small pasta",
    },
  ],
};
