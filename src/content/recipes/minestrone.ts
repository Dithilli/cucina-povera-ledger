import type { Recipe } from "../types";

export const minestrone: Recipe = {
  slug: "minestrone",
  title: "Minestrone",
  cuisine: "italian",
  blurb:
    "The big garden pot — whatever vegetables are cheapest, beans, and a little pasta, deepened by a Parmesan rind simmered in.",
  servings: 4,
  perServing: { calories: 380, protein: 16 },
  estCostPerServing: 1.0,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "onion, carrot, celery (soffritto), diced",
      qty: "1 onion, 1 carrot, 1 celery stalk",
      cost: 0.5,
    },
    {
      item: "seasonal vegetables (zucchini, greens, potato, whatever's cheap)",
      qty: "4 cups, chopped",
      cost: 2.0,
    },
    {
      item: "cooked cannellini or borlotti (with liquid)",
      qty: "2 cups",
      cost: 0.85,
    },
    {
      item: "canned tomatoes",
      qty: "1/2 can",
      cost: 0.6,
    },
    {
      item: "Parmesan rind",
      qty: "1",
      cost: 0.5,
      spansWeeks: true,
    },
    {
      item: "small pasta or rice",
      qty: "1/2 cup",
      cost: 0.25,
    },
    {
      item: "olive oil, garlic, salt, pepper, basil or pesto to finish",
      qty: "3 tbsp oil",
      cost: 0.6,
      spansWeeks: true,
    },
  ],
  method: [
    "Build the soffritto in olive oil; add garlic, then the tomato.",
    "Add the harder vegetables and the Parmesan rind with water to cover; simmer until tender, adding softer vegetables and greens partway.",
    "Stir in the beans with their liquid and the pasta; cook until the pasta is done and the soup is thick.",
    "Fish out the rind, season, and finish each bowl with raw olive oil, pepper, and a spoon of basil or pesto.",
  ],
  modernMove:
    "Let the Parmesan rind dissolve slowly into the pot — it seasons the whole soup with savory depth and is exactly the kind of scrap this week is built to use.",
  zeroWasteHero: true,
  tags: ["garden", "soup", "legumes", "vegetable", "zero-waste", "one-pot"],
  sources: [
    {
      title: "Minestrone — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Minestrone",
      note: "Thick Italian vegetable-and-bean soup of seasonal odds and ends with pasta",
    },
  ],
};
