import type { Recipe } from "../types";

export const pastaEFagioli: Recipe = {
  slug: "pasta-e-fagioli",
  title: "Pasta e Fagioli",
  cuisine: "italian",
  blurb:
    "Pasta and beans — the canonical mangiafagioli dish. Brothy or thick, always cheap, always satisfying.",
  servings: 4,
  perServing: {
    calories: 600,
    protein: 25,
  },
  estCostPerServing: 1.49,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "cooked cannellini or borlotti (plus their liquid)",
      qty: "2 cups",
      cost: 0.85,
    },
    {
      item: "onion, carrot, celery stalk, finely diced (soffritto)",
      qty: "1 small onion, 1 carrot, 1 celery stalk",
      cost: 0.5,
    },
    {
      item: "garlic cloves",
      qty: "2",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "Parmesan rind (optional, big umami)",
      qty: "1",
      cost: 0.5,
      spansWeeks: true,
    },
    {
      item: "can chopped tomatoes or tomato paste",
      qty: "1 can or 2 tbsp",
      cost: 2.5,
    },
    {
      item: "small pasta (ditalini, broken spaghetti)",
      qty: "6 oz",
      cost: 0.75,
    },
    {
      item: "olive oil, rosemary, salt, pepper",
      qty: "to taste",
      cost: 0.75,
      spansWeeks: true,
    },
  ],
  method: [
    "Build the soffritto slowly in olive oil until sweet. Add garlic, then the tomato.",
    "Add the beans with their liquid and the Parmesan rind; simmer 15–20 minutes, mashing some beans against the pot for body.",
    "Cook the pasta in the brodo until al dente, loosening with hot water as needed.",
    "Rest 5 minutes, finish with raw olive oil and pepper. Fish out the rind.",
  ],
  modernMove: `The Parmesan rind and a portion of mashed beans do the work of cream — thick, glossy, and entirely from scraps.`,
  tags: ["legumes", "pasta", "soup", "one-pot", "tomato"],
  sources: [
    {
      title: "Pasta e fagioli — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Pasta_e_fagioli",
      note: "Italian pasta-and-bean soup with regional cannellini/borlotti variants",
    },
  ],
};
