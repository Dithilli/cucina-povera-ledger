import type { Recipe } from "../types";

export const sardelesStoFourno: Recipe = {
  slug: "sardeles-sto-fourno",
  title: "Sardeles sto Fourno (Baked Sardines)",
  cuisine: "greek",
  blurb:
    "Fresh sardines laid in a tin with tomato, oregano, garlic, olive oil, and lemon and roasted hot — the cheapest oily fish turned into a fragrant, jammy bake.",
  servings: 4,
  perServing: { calories: 520, protein: 30 },
  estCostPerServing: 1.3,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh sardines, gutted, heads left or removed", qty: "1 1/2 lb", cost: 3.6 },
    { item: "ripe tomatoes, sliced (or canned)", qty: "3", cost: 0.9 },
    { item: "garlic cloves, sliced", qty: "3", cost: 0.2, spansWeeks: true },
    { item: "lemons (juice of 1, plus wedges)", qty: "2", cost: 0.6, spansWeeks: true },
    { item: "dried oregano (rigani)", qty: "2 tsp", cost: 0.15, spansWeeks: true },
    { item: "olive oil, generous", qty: "4 tbsp", cost: 0.6, spansWeeks: true },
    { item: "salt, black pepper, parsley", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Heat the oven to 425°F / 220°C. Rinse the sardines and pat dry.",
    "Oil a baking dish and lay half the tomato slices and garlic across the bottom. Arrange the sardines on top in a single layer, side by side.",
    "Cover with the remaining tomato and garlic. Pour over the lemon juice and a generous slick of olive oil, then season hard with salt, pepper, and most of the oregano.",
    "Bake 25–30 minutes until the fish is cooked through, the tomatoes have collapsed into a sauce, and the edges are caramelized. Splash a little water in if it looks dry.",
    "Finish with the rest of the oregano, parsley, and lemon wedges. Best warm or at room temperature with bread to mop the tomato-oil.",
  ],
  modernMove:
    "A hard, dry oven and a generous pour of olive oil let the tomato reduce to a jammy sauce while the oily sardines roast — the lemon and rigani cut the richness so it tastes bright, not heavy.",
  notes:
    "Sardines are among the cheapest, most sustainable, most omega-rich fish in the Mediterranean; baking a whole tin of them is classic island peasant cooking.",
  tags: ["fish", "sardines", "baked", "tomato", "oregano", "lemon"],
  sources: [
    {
      title: "The Glutton Life — Sardeles ston Fourno (Greek Oven-Baked Sardines)",
      url: "https://www.thegluttonlife.com/2019/09/10/sardeles-ston-fourno-greek-oven-baked-sardines/",
      note: "Confirms sardines baked with olive oil, oregano, and lemon.",
    },
  ],
};
