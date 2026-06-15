import type { Recipe } from "../types";

export const panzanella: Recipe = {
  slug: "panzanella",
  title: "Panzanella",
  cuisine: "italian",
  blurb:
    "Tuscan bread salad — stale bread soaked just enough to drink up ripe tomato juices, with onion, basil, and a sharp vinaigrette.",
  servings: 4,
  perServing: { calories: 360, protein: 9 },
  estCostPerServing: 1.1,
  roles: ["lunch", "side", "dinner"],
  ingredients: [
    {
      item: "stale country bread, torn into bite-size pieces",
      qty: "5 thick slices",
      cost: 0.65,
    },
    {
      item: "ripe tomatoes, cut into chunks (juices reserved)",
      qty: "1 1/2 lb",
      cost: 3.0,
    },
    {
      item: "red onion, thinly sliced and rinsed",
      qty: "1/2",
      cost: 0.3,
    },
    { item: "cucumber, sliced (optional)", qty: "1", cost: 0.6 },
    {
      item: "fresh basil, torn",
      qty: "1 handful",
      cost: 0.5,
      spansWeeks: true,
    },
    {
      item: "red wine vinegar",
      qty: "3 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "olive oil, salt, pepper",
      qty: "5 tbsp oil",
      cost: 0.75,
      spansWeeks: true,
    },
  ],
  method: [
    "Salt the tomato chunks and let them sit 10 minutes to draw out their juice into the bowl.",
    "Soften the bread: dampen with a splash of water and vinegar (or for very dry bread, dunk briefly), then squeeze out excess so it's moist, not soggy.",
    "Toss the bread with the tomatoes and their juices, onion, cucumber, and basil.",
    "Dress with olive oil, the rest of the vinegar, salt, and pepper. Rest 20–30 minutes so the bread drinks the dressing before serving.",
  ],
  modernMove:
    "Salt the tomatoes first and let the bread soak in their juices, not water — every bite tastes of concentrated tomato instead of wet crumb.",
  zeroWasteHero: true,
  tags: ["bread", "tomato", "salad", "zero-waste", "summer", "no-cook"],
  sources: [
    {
      title: "Panzanella — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Panzanella",
      note: "Tuscan/Umbrian summer salad of soaked stale bread, tomatoes, and onion",
    },
  ],
};
