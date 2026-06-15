import type { Recipe } from "../types";

export const pastaConLeSarde: Recipe = {
  slug: "pasta-con-le-sarde",
  title: "Pasta con le Sarde",
  cuisine: "italian",
  blurb:
    "Sicily's signature: pasta with sardines, wild fennel, raisins, and pine nuts, finished with toasted breadcrumbs standing in for cheese.",
  servings: 4,
  perServing: { calories: 560, protein: 24 },
  estCostPerServing: 2.1,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "bucatini or spaghetti", qty: "12 oz", cost: 1.5 },
    {
      item: "tinned sardines (or fresh, boned)",
      qty: "2 tins",
      cost: 3.0,
    },
    {
      item: "fennel (bulb and fronds, or wild fennel)",
      qty: "1 bulb",
      cost: 1.5,
    },
    { item: "onion, sliced", qty: "1", cost: 0.3 },
    {
      item: "raisins and pine nuts",
      qty: "3 tbsp each",
      cost: 1.2,
      spansWeeks: true,
    },
    {
      item: "saffron or pinch of fennel seed; anchovy",
      qty: "pinch; 2 fillets",
      cost: 0.6,
      spansWeeks: true,
    },
    {
      item: "breadcrumbs toasted in oil (pangrattato)",
      qty: "1/2 cup",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "olive oil, chili, salt",
      qty: "4 tbsp oil",
      cost: 0.6,
      spansWeeks: true,
    },
  ],
  method: [
    "Blanch the fennel; reserve its water to cook the pasta. Chop the fennel.",
    "Soften the onion in oil with the anchovy until it melts. Add the fennel, raisins, pine nuts, and saffron; cook to a soft base.",
    "Flake in the sardines and warm through gently, keeping some pieces whole.",
    "Cook the pasta in the fennel water, then toss with the sauce and a little pasta water. Finish each plate with toasted pangrattato and chili — no cheese.",
  ],
  modernMove:
    "Cook the pasta in the fennel blanching water so the fennel perfume is in the noodle itself, and use pangrattato as the crunchy, savory 'cheese' the dish was built without.",
  tags: ["sicilian", "sardines", "pasta", "fennel", "pangrattato", "fish"],
};
