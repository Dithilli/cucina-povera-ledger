import type { Recipe } from "../types";

export const ribollita: Recipe = {
  slug: "ribollita",
  title: "Ribollita",
  cuisine: "italian",
  blurb:
    "Tuscany's \"reboiled\" bread-and-bean soup — cavolo nero, cannellini, and stale bread cooked to a spoonable thickness, better the second day.",
  servings: 4,
  perServing: { calories: 480, protein: 19 },
  estCostPerServing: 1.35,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "cavolo nero (or kale), stemmed and chopped",
      qty: "1 large bunch",
      cost: 2.0,
    },
    {
      item: "cooked cannellini (plus ~2 cups of their liquid)",
      qty: "2 cups",
      cost: 0.85,
    },
    {
      item: "onion, carrot, celery (soffritto), finely diced",
      qty: "1 onion, 1 carrot, 1 celery stalk",
      cost: 0.5,
    },
    { item: "garlic cloves, sliced", qty: "3", cost: 0.15, spansWeeks: true },
    {
      item: "can chopped tomatoes (or 2 tbsp paste)",
      qty: "1 can",
      cost: 1.2,
    },
    { item: "stale country bread, torn", qty: "4 thick slices", cost: 0.5 },
    {
      item: "olive oil (plus a thread to finish), salt, pepper, chili",
      qty: "4 tbsp",
      cost: 0.6,
      spansWeeks: true,
    },
    { item: "Parmesan rind (optional)", qty: "1", cost: 0.5, spansWeeks: true },
  ],
  method: [
    "Build the soffritto slowly in olive oil until sweet. Add garlic, then the tomato, and cook down.",
    "Add the cavolo nero, the beans with their liquid, the Parmesan rind, and enough water to cover. Simmer 30–40 minutes until the greens are silky.",
    "Mash about a third of the beans against the pot for body. Stir in the torn bread and simmer until it dissolves into the soup.",
    "Rest off the heat — ideally cool and chill overnight, then 'ribollire' (reboil) the next day. Finish each bowl with raw olive oil and pepper.",
  ],
  modernMove:
    "The overnight rest and reboil is the whole point: the bread and beans collapse into a single glossy body, no cream needed.",
  zeroWasteHero: true,
  tags: ["bread", "legumes", "greens", "soup", "zero-waste"],
  sources: [
    {
      title: "Ribollita — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Ribollita",
      note: "Tuscan 'reboiled' bread-and-bean soup with cavolo nero, better the next day",
    },
  ],
};
