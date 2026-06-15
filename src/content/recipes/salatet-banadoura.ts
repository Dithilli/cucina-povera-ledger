import type { Recipe } from "../types";

export const salatetBanadoura: Recipe = {
  slug: "salatet-banadoura",
  title: "Salatet Banadoura",
  cuisine: "levantine",
  blurb:
    "The everyday Levantine tomato salad — ripe tomato, cucumber, and onion sharpened with sumac, lemon, and olive oil. Three minutes, no cooking, peak-summer eating.",
  servings: 4,
  perServing: { calories: 160, protein: 3 },
  estCostPerServing: 0.8,
  roles: ["side", "dinner"],
  ingredients: [
    { item: "ripe tomatoes, cut into chunks", qty: "1 1/2 lb", cost: 1.6 },
    { item: "cucumbers, chopped", qty: "2", cost: 0.8 },
    {
      item: "onion (red or white), thinly sliced",
      qty: "1/2",
      cost: 0.2,
    },
    {
      item: "parsley or mint, chopped (optional)",
      qty: "1 handful",
      cost: 0.4,
    },
    {
      item: "sumac",
      qty: "2 tsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "lemon, olive oil, salt",
      qty: "1 lemon, 3 tbsp oil",
      cost: 0.5,
      spansWeeks: true,
    },
  ],
  method: [
    "Cut the tomatoes into generous chunks over the bowl so you keep every drop of juice.",
    "Add the cucumber, sliced onion, and herbs if using.",
    "Dress with lemon juice, olive oil, a heavy pinch of salt, and plenty of sumac.",
    "Toss and serve right away, with bread to mop the tart pink juices at the bottom.",
  ],
  modernMove:
    "Sumac, not vinegar, is the acid that makes this read Levantine — its dusty-sour lemon edge clings to the tomato in a way liquid acid can't.",
  notes:
    "Make it a dinner by adding chickpeas or crumbled labneh; serve the leftover juices as a chilled drink-and-mop with bread.",
  tags: ["tomato", "cucumber", "sumac", "salad", "no-cook", "summer"],
  sources: [
    {
      title: "Plant Based Folk — plantbasedfolk.com",
      url: "https://plantbasedfolk.com/tomato-and-onion-salad/",
      note: "Levantine sumac tomato-and-onion salad — confirms sumac and lemon as the defining acid.",
    },
  ],
};
