import type { Recipe } from "../types";

export const hiyayakko: Recipe = {
  slug: "hiyayakko",
  title: "Hiyayakko",
  cuisine: "japanese",
  blurb:
    "Chilled silken tofu under a pile of toppings — the cheapest, fastest protein supper in the Japanese kitchen, dressed up by what you scatter on it.",
  servings: 2,
  perServing: { calories: 470, protein: 24 },
  estCostPerServing: 1.05,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "block silken (kinugoshi) tofu, very cold",
      qty: "1 (about 12 oz)",
      cost: 1.2,
    },
    { item: "scallions, thinly sliced", qty: "2", cost: 0.2 },
    { item: "fresh ginger, grated", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    {
      item: "katsuobushi (bonito flakes) or toasted sesame",
      qty: "a small handful",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "soy sauce", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    {
      item: "toasted sesame oil, to finish",
      qty: "1 tsp",
      cost: 0.15,
      spansWeeks: true,
    },
    {
      item: "steamed short-grain rice, to serve",
      qty: "2 bowls",
      cost: 0.4,
    },
  ],
  method: [
    "Drain the tofu, then chill it hard — 30 minutes in the freezer if it isn't cold from the fridge. Cold is the whole point; a lukewarm block tastes of nothing.",
    "Tip the block onto a folded towel for a minute to shed surface water, then slide it onto a small plate or cut it into two thick squares.",
    "Pile on the scallions and a small mound of grated ginger. Scatter the katsuobushi or sesame so it drapes over the curd.",
    "Pour the soy sauce around the base rather than over the top so the toppings stay crisp, add a thread of sesame oil, and eat at once with hot rice alongside.",
  ],
  modernMove:
    "Treat the cold block as a blank canvas and lean on contrast — grated ginger, a bristle of bonito, the snap of raw scallion against soft curd. The technique is restraint: nothing is cooked, so freshness and temperature do all the work.",
  tags: ["tofu", "soybean", "no-cook", "chilled", "five-minute"],
  sources: [
    {
      title: "Namiko Chen — Just One Cookbook, Japanese Cold Tofu (Hiyayakko)",
      url: "https://www.justonecookbook.com/japanese-tofu-cold-tofu-hiyayakko/",
      note: "Chilled silken tofu draining and the classic ginger, scallion, and bonito toppings.",
    },
  ],
};
