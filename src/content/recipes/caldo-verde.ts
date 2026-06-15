import type { Recipe } from "../types";

export const caldoVerde: Recipe = {
  slug: "caldo-verde",
  title: "Caldo Verde",
  cuisine: "portuguese",
  blurb:
    "Portugal's national soup — potatoes simmered soft and crushed into a velvety base, then ribbons of finely shredded kale dropped in at the last minute and a single coin of chouriço for perfume.",
  servings: 4,
  perServing: { calories: 480, protein: 16 },
  estCostPerServing: 0.82,
  roles: ["dinner"],
  ingredients: [
    {
      item: "floury potatoes, peeled and roughly chopped",
      qty: "1 1/4 lb",
      cost: 0.6,
    },
    {
      item: "couve / collard or kale, stems stripped, rolled and sliced into the finest possible ribbons",
      qty: "8 oz",
      cost: 0.7,
    },
    {
      item: "onion, sliced",
      qty: "1",
      cost: 0.3,
    },
    {
      item: "garlic cloves",
      qty: "2",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "chouriço, sliced into thin coins (just a few per bowl)",
      qty: "3 oz",
      cost: 1.0,
    },
    {
      item: "olive oil",
      qty: "3 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "water", qty: "6 cups" },
    { item: "salt and pepper", qty: "to taste" },
  ],
  method: [
    "Soften the onion and garlic in the olive oil in a deep pot until translucent. Add the potatoes and water, season, and simmer until the potatoes are completely tender.",
    "Crush or blend the pot smooth so the potato thickens the broth into a pale, velvety base — no pieces, just body.",
    "Meanwhile, fry the chouriço coins in a dry pan to render their fat and crisp the edges; their orange oil is part of the garnish.",
    "Bring the potato base back to a strong simmer, drop in the finely shredded greens, and cook just 3–5 minutes — they should stay bright green and barely tender, never stewed.",
    "Ladle into bowls, lay a few chouriço coins on top with a little of their fat, and finish each bowl with a thread of raw olive oil.",
  ],
  modernMove:
    "Slicing the greens into hair-thin ribbons and adding them only at the end keeps them green and grassy against the smooth potato — and a single ounce of chouriço per person perfumes the whole bowl, stretching the precious meat.",
  notes:
    "The classic frugal trade: potatoes and greens do the feeding, a sliver of sausage does the flavouring. Serve with broa (corn bread) to mop the bowl.",
  tags: ["soup", "potato", "kale", "greens", "chourico", "national-dish"],
};
