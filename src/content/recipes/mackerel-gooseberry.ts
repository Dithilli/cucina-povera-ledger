import type { Recipe } from "../types";

export const mackerelGooseberry: Recipe = {
  slug: "mackerel-gooseberry",
  title: "Grilled Mackerel",
  cuisine: "irish",
  blurb:
    "Oily mackerel grilled till the skin blisters, cut by a sharp green gooseberry sauce and eaten with thick brown bread — the summer hedgerow berry that the French literally named the mackerel berry.",
  servings: 4,
  perServing: { calories: 480, protein: 27 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "whole mackerel, gutted (or 8 fillets)", qty: "4 fish", cost: 3.6 },
    { item: "green gooseberries, topped and tailed", qty: "1/2 lb", cost: 1.2 },
    { item: "brown soda bread, to serve", qty: "4 thick slices", cost: 0.6 },
    { item: "sugar", qty: "1 tbsp", cost: 0.05 },
    { item: "butter", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "flour, salt, pepper, fennel or parsley", qty: "to taste", cost: 0.25, spansWeeks: true },
  ],
  method: [
    "Make the sauce first: simmer the gooseberries with the sugar and a splash of water in a small pan until they collapse, 8–10 minutes. Beat in the butter and crush to a rough, tart purée; keep warm.",
    "Heat the grill (broiler) to high. Slash each mackerel two or three times on each side so it cooks evenly, then dust lightly with seasoned flour.",
    "Lay the fish on a greased grill pan, brush with a little melted butter, and grill close to the heat 4–5 minutes a side, turning once, until the skin chars and crisps and the flesh flakes at the bone.",
    "Stir a little chopped fennel or parsley into the gooseberry sauce and taste — it should be sharp against the rich fish, with just enough sugar to take the harsh edge off.",
    "Serve each mackerel with a spoonful of the green sauce alongside and thick brown bread spread with butter.",
  ],
  modernMove:
    "Don't purée the gooseberries fully — leave it chunky and barely sweetened so the acidity, not the sugar, does the work of cutting the oily fish, the way a squeeze of lemon would.",
  notes:
    "Gooseberries and mackerel share a short early-summer season, which is why the pairing is traditional. If you can't find gooseberries, a sharp rhubarb compote does the same job.",
  zeroWasteHero: false,
  tags: ["fish", "mackerel", "gooseberry", "grilled", "brown-bread", "dinner", "irish"],
  sources: [
    {
      title: "RTÉ Lifestyle — Grilled Mackerel with Gooseberry Sauce",
      url: "https://www.rte.ie/lifestyle/recipes/2011/0923/747731-grilled-mackerel-with-gooseberry-sauce/",
      note: "floured mackerel fillets grilled and served with a tart cooked gooseberry sauce",
    },
  ],
};
