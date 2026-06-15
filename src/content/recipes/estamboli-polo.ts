import type { Recipe } from "../types";

export const estamboliPolo: Recipe = {
  slug: "estamboli-polo",
  title: "Estamboli Polo",
  cuisine: "persian",
  blurb:
    "Potato-and-tomato rice in one pot — diced potatoes stretch the rice into a filling, deeply savory dinner with a crisp tahdig.",
  servings: 4,
  perServing: { calories: 560, protein: 15 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "long-grain basmati rice", qty: "2 cups", cost: 1.4 },
    { item: "potatoes, peeled and diced", qty: "2 medium", cost: 0.6 },
    { item: "ripe tomatoes, chopped (or 3/4 cup passata)", qty: "3", cost: 0.75 },
    { item: "onion, diced", qty: "1", cost: 0.3 },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    {
      item: "neutral oil or butter (for frying and the tahdig)",
      qty: "4 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "turmeric and cinnamon", qty: "1 tsp / 1/2 tsp", cost: 0.15, spansWeeks: true },
    {
      item: "saffron, bloomed in 2 tbsp hot water (optional)",
      qty: "pinch",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "salt, black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Rinse the rice and soak in salted water 30 minutes. Parboil in plenty of boiling salted water about 6 minutes until soft outside, firm inside; drain.",
    "Meanwhile soften the onion in 2 tbsp oil with the turmeric, stir in the tomato paste and fry a minute, then add the chopped tomatoes, cinnamon, salt, and pepper and cook to a thick sauce.",
    "Brown the diced potatoes in the remaining oil until golden at the edges, then fold them through the tomato sauce.",
    "Build the tahdig: oil the pot, press a thin layer of potato slices or rice flat on the bottom, then layer the parboiled rice with the potato-tomato mixture, mounding into a pyramid.",
    "Poke steam holes, drizzle over the saffron water, cover the lid with a towel, and steam on the lowest heat 40–50 minutes until a golden crust forms underneath.",
    "Scoop gently to keep the rice loose, folding the potatoes through, and lift the crisp tahdig onto the platter in pieces.",
  ],
  modernMove:
    "Browning the potatoes before they steam means each cube holds its shape and adds a fried, almost-roasted note instead of dissolving into the rice.",
  tags: ["rice", "polo", "potato", "tomato", "tahdig", "one-pot", "vegan"],
  sources: [
    { title: "My Persian Kitchen — Estamboli (Eslamboli) Polow", url: "http://www.mypersiankitchen.com/eslamboli-polow-persian-tomato-rice/", note: "Persian tomato-and-potato rice parboiled, layered, and steamed with tahdig" },
  ],
};
