import type { Recipe } from "../types";

export const batboutMahshi: Recipe = {
  slug: "batbout-mahshi",
  title: "Batbout Mahshi",
  cuisine: "moroccan",
  blurb:
    "Stuffed Moroccan pocket bread — chewy semolina rounds puffed hollow on a dry griddle, then split and packed with spiced onions, kefta, or a smoky vegetable filling.",
  servings: 4,
  perServing: { calories: 540, protein: 22 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "plain flour", qty: "1 1/2 cups", cost: 0.3 },
    { item: "fine semolina", qty: "1 cup", cost: 0.55 },
    { item: "instant yeast", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "1 tsp" },
    { item: "warm water", qty: "about 1 cup" },
    { item: "ground beef or lamb for kefta (or extra veg)", qty: "1/2 lb", cost: 2.2 },
    { item: "onions, finely chopped", qty: "2", cost: 0.5 },
    { item: "tomato, diced", qty: "1", cost: 0.3 },
    {
      item: "cumin, paprika, cinnamon, cilantro, parsley, oil",
      qty: "to taste",
      cost: 0.6,
      spansWeeks: true,
    },
  ],
  method: [
    "Mix the flour, semolina, yeast, and salt, then knead with warm water to a soft, smooth dough. Cover and prove about 1 hour until doubled.",
    "Divide into balls, flatten into rounds about 1/4 inch thick on a semolina-dusted board, and prove again 20 minutes until puffy.",
    "Cook on a dry, medium griddle 2–3 minutes a side, pressing gently with a spatula; the steam trapped inside inflates each round into a hollow pocket. Cool on a towel.",
    "Meanwhile brown the kefta with the onions, tomato, cumin, paprika, a pinch of cinnamon, and the herbs until juicy and well-seasoned (or sauté the same spices into chopped vegetables).",
    "Split each batbout at the seam, stuff generously with the hot filling, and eat at once while the bread is warm and the pocket still soft.",
  ],
  modernMove:
    "A dry griddle, not oil, is what makes batbout puff — the bread cooks fast enough that steam blows a hollow pocket open inside, giving you a built-in pita to stuff without ever turning on the oven.",
  notes:
    "Stuffed batbout is classic Ramadan iftar and Marrakech street food, sold warm with spiced kefta and onions. Keep the filling juicy but not wet so it doesn't sog the pocket.",
  zeroWasteHero: false,
  tags: ["bread", "moroccan", "stuffed", "kefta", "griddle", "pocket"],
  sources: [
    {
      title: "Taste of Maroc — Batbout (Moroccan Pita Bread)",
      url: "https://tasteofmaroc.com/batbout-moroccan-pita-bread/",
      note: "Semolina dough, dry-griddle cooking that puffs the pocket, and stuffing with kefta and onions.",
    },
  ],
};
