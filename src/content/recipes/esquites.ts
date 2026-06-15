import type { Recipe } from "../types";

export const esquites: Recipe = {
  slug: "esquites",
  title: "Esquites",
  cuisine: "mexican",
  blurb:
    "Street corn off the cob — kernels toasted with epazote, then dressed with lime, chile, and a little crema and cheese. Corn made craveable for pennies.",
  servings: 4,
  perServing: { calories: 180, protein: 5 },
  estCostPerServing: 0.6,
  roles: ["side"],
  ingredients: [
    { item: "corn kernels (fresh, or off leftover cobs)", qty: "4 cups", cost: 1.2 },
    { item: "epazote sprig", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "crema + a little mayo", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "cotija or queso fresco, crumbled", qty: "1/4 cup", cost: 0.6, spansWeeks: true },
    { item: "lime, chile powder, salt", qty: "to taste", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Toast the corn in a dry or lightly oiled hot pan with the epazote until some kernels char and pop.",
    "Off the heat, stir through the crema and a little mayo.",
    "Spoon into cups or bowls; finish with lime, crumbled cheese, chile powder, and salt.",
  ],
  modernMove:
    "Get real color on the kernels — the toasting (almost a dry sear) is what turns plain corn into something with smoke and depth before the creamy, tangy dressing goes on.",
  notes: "A perfect home for corn cut off cobs you'd otherwise discard.",
  tags: ["maíz", "corn", "side", "street-food", "zero-waste"],
};
