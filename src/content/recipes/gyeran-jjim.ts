import type { Recipe } from "../types";

export const gyeranJjim: Recipe = {
  slug: "gyeran-jjim",
  title: "Gyeran-jjim",
  cuisine: "korean",
  blurb:
    "Steamed egg custard — eggs whisked with anchovy-kelp stock and gently cooked into a soft, soufflé-like cloud in a single earthenware pot. A few cents of egg turned into the most comforting thing on the table.",
  servings: 4,
  perServing: { calories: 470, protein: 24 },
  estCostPerServing: 0.65,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "eggs", qty: "4", cost: 1.0 },
    {
      item: "anchovy-kelp stock (or water), warm",
      qty: "1 1/4 cups",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "scallion, finely sliced",
      qty: "1",
      cost: 0.1,
    },
    {
      item: "soup soy sauce or salted shrimp (saeujeot) to season",
      qty: "1 tsp",
      cost: 0.15,
      spansWeeks: true,
    },
    {
      item: "toasted sesame oil",
      qty: "1/2 tsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "toasted sesame seeds and gim, to finish",
      qty: "to garnish",
      cost: 0.1,
      spansWeeks: true,
    },
    { item: "steamed rice, to serve", qty: "for 4", cost: 0.6 },
  ],
  method: [
    "Beat the eggs thoroughly with the warm anchovy-kelp stock and the seasoning, then strain the mixture through a sieve — straining out the chalazae and bubbles is what gives the custard its smooth, silky set.",
    "Pour into an earthenware pot (ttukbaegi) or a heatproof bowl, skim off surface foam, and cover.",
    "Steam gently: set the pot over low-medium heat or in a covered steamer and cook 10–12 minutes, stirring the first couple of minutes so it sets into soft curds, then leaving it undisturbed to puff. Low and slow is the rule — high heat makes it weep and turn rubbery.",
    "When it has risen like a soufflé and just set in the center, scatter scallion, sesame seeds, and crumbled gim, drizzle with sesame oil, and serve bubbling-hot with rice.",
  ],
  modernMove:
    "Whisking the eggs with savory anchovy-kelp stock rather than plain water — and straining the mix, then keeping the heat low — turns four eggs into a quivering, custardy cloud instead of a tough scramble; the ttukbaegi holds its heat so it keeps puffing on its way to the table.",
  tags: ["egg", "jjim", "steamed", "custard", "anchovy-kelp-stock", "side"],
};
