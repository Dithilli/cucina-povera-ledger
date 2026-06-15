import type { Recipe } from "../types";

export const alooMethi: Recipe = {
  slug: "aloo-methi",
  title: "Aloo Methi",
  cuisine: "north-indian",
  blurb:
    "Potatoes and fresh fenugreek greens stir-fried dry until the methi crisps at the edges and turns faintly bitter-sweet — a fast, fragrant everyday sabzi.",
  servings: 4,
  perServing: { calories: 480, protein: 11 },
  estCostPerServing: 0.66,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "potatoes, peeled and cut into small cubes", qty: "1 1/4 lb", cost: 0.6 },
    { item: "fresh fenugreek leaves (methi), picked and chopped", qty: "1 large bunch", cost: 0.9 },
    { item: "onion, sliced (optional)", qty: "1", cost: 0.25 },
    { item: "garlic cloves, sliced", qty: "4", cost: 0.15, spansWeeks: true },
    { item: "green chilies, slit", qty: "2", cost: 0.15 },
    { item: "neutral oil or ghee", qty: "3 tbsp", cost: 0.25, spansWeeks: true },
    { item: "cumin seeds + a pinch of asafoetida (hing)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "turmeric, ground coriander, red chili powder, amchur", qty: "spice blend", cost: 0.25, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Chop the methi and toss it with a little salt; let it sit 10 minutes, then squeeze out the dark liquid — this removes the harsh bitterness while keeping the aroma.",
    "Bloom cumin and hing in hot oil, add garlic and green chili, then the potatoes with turmeric, coriander and chili powder. Toss to coat.",
    "Cook the potatoes covered on low, stirring occasionally, until almost tender — let them catch a little color on the pan for flavor. Add the onion partway through if using.",
    "Fold in the squeezed methi and stir-fry uncovered on higher heat until the greens dry out, soften and the edges crisp. Finish with amchur for a sour lift; serve with roti.",
  ],
  modernMove:
    "Salting and wringing the fenugreek before it hits the pan tames its bitterness and keeps the dish dry, so the methi roasts and concentrates instead of stewing into a wet, acrid mush.",
  tags: ["vegetables", "potato", "fenugreek", "methi", "dry-sabzi"],
};
