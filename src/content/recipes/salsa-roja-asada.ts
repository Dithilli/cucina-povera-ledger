import type { Recipe } from "../types";

export const salsaRojaAsada: Recipe = {
  slug: "salsa-roja-asada",
  title: "Salsa Roja Asada",
  cuisine: "mexican",
  blurb:
    "Charred tomatoes and toasted dried chile ground into a deep, smoky red sauce — almost free, endlessly useful, and the difference between subsistence and craving.",
  servings: 8,
  perServing: { calories: 30, protein: 1 },
  estCostPerServing: 0.18,
  roles: ["side"],
  ingredients: [
    { item: "ripe tomatoes", qty: "4", cost: 1.0 },
    { item: "chiles de árbol or guajillo (to taste)", qty: "3–6", cost: 0.4, spansWeeks: true },
    { item: "garlic cloves", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "white onion", qty: "1/4", cost: 0.15 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Char the tomatoes, garlic, and onion on a dry comal until blistered and blackened in spots.",
    "Toast the dried chiles briefly until fragrant (don't burn them — they turn bitter), then soak in hot water a few minutes to soften.",
    "Grind everything in a molcajete or blender with a little of the soaking water to a coarse sauce.",
    "Season with salt. Loosen with water to a spoonable consistency.",
  ],
  modernMove:
    "Toast the chiles to the edge of smoking and char the tomatoes hard — the controlled burn is the flavor. A molcajete gives a rustic, clinging texture a blender can't.",
  notes: "Base for chilaquiles, enchiladas, huevos rancheros. Salsa is itself an anti-waste tool — it makes any leftover delicious again.",
  tags: ["salsa", "chiles", "condiment", "side", "zero-waste"],
};
