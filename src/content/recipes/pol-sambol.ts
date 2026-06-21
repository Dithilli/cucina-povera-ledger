import type { Recipe } from "../types";

export const polSambol: Recipe = {
  slug: "pol-sambol",
  title: "Pol Sambol",
  cuisine: "sri-lankan",
  blurb:
    "The relish on every Sri Lankan plate — freshly scraped coconut pounded with red chili, onion, lime, and a pinch of Maldive fish until it turns brick-red and tastes of all five notes at once.",
  servings: 4,
  perServing: { calories: 190, protein: 5 },
  estCostPerServing: 0.55,
  roles: ["base", "side"],
  ingredients: [
    { item: "freshly scraped coconut (or moistened desiccated)", qty: "2 cups", cost: 1.2 },
    { item: "dried red chilies or chili flakes", qty: "1–2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "red onion or shallots, finely chopped", qty: "1 small", cost: 0.3 },
    { item: "Maldive fish flakes (umbalakada)", qty: "1 tbsp", cost: 0.25, spansWeeks: true },
    { item: "lime", qty: "1", cost: 0.2 },
    { item: "salt", qty: "1/2 tsp", cost: 0.02, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "On a miris gala (grinding stone) or in a mortar, pound the chilies, onion, Maldive fish, and salt together into a coarse rough paste — you want texture, not a purée.",
    "Work in the scraped coconut a handful at a time, pounding and turning so the red of the chili and the fish stains the coconut evenly to a warm brick color.",
    "Squeeze in the lime and pound a few more turns. Taste: it should hit hot, sour, salty, sweet, and savory all at once. Adjust chili and lime to balance.",
    "Pinch a knuckle of it onto every plate of rice and curry. It is the seasoning that ties the whole meal together.",
  ],
  modernMove:
    "No grinding stone? Pulse chili, onion, and Maldive fish in a small processor first, then fold in the coconut by hand — machining the coconut turns it to wet paste and kills the texture.",
  notes:
    "If using desiccated coconut, soak it in a few tablespoons of warm water or coconut milk first so it plumps and won't be dry. Keeps two days in the fridge but is best the hour it's made.",
  zeroWasteHero: false,
  tags: ["sri-lankan", "sambol", "coconut", "no-cook", "side", "maldive-fish"],
  sources: [
    {
      title: "Island Smile — Sri Lankan Authentic Coconut Sambol (Pol Sambol)",
      url: "https://www.islandsmile.org/make-sri-lankan-coconut-sambolpol-sambol/",
      note: "Grinding-stone method and the five-note balance of chili, lime, onion, Maldive fish",
    },
  ],
};
