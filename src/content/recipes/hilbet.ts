import type { Recipe } from "../types";

export const hilbet: Recipe = {
  slug: "hilbet",
  title: "Hilbet (Fava & Fenugreek Paste)",
  cuisine: "ethiopian",
  blurb:
    "An Eritrean smooth purée of fava beans (or lentils) whipped with soaked fenugreek, garlic, and chile — pale, creamy, gently bitter, and scooped cool with injera.",
  servings: 4,
  perServing: { calories: 250, protein: 14 },
  estCostPerServing: 0.55,
  roles: ["side", "lunch"],
  ingredients: [
    { item: "dried fava beans (or red lentils), cooked very soft", qty: "1 1/2 cups cooked", cost: 1.1 },
    { item: "fenugreek seeds, soaked overnight", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "garlic", qty: "2 cloves", cost: 0.15, spansWeeks: true },
    { item: "green chile", qty: "1", cost: 0.2 },
    { item: "onion, minced (raw, to finish)", qty: "1/4", cost: 0.15 },
    { item: "oil + lemon", qty: "2 tbsp / a squeeze", cost: 0.3, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soak the fenugreek seeds overnight; they swell and turn slippery, which gives hilbet its body and its gentle bitterness. Drain.",
    "Blend or pound the cooked favas with the soaked fenugreek, garlic, and chile to a smooth, pale, creamy paste, adding a little water as needed.",
    "Beat in the oil, lemon, and salt until light and whipped.",
    "Finish with raw minced onion and a drizzle of oil on top; serve cool with injera.",
  ],
  modernMove:
    "Soaked fenugreek is the secret — it's both the thickener and the signature flavor, lending a cooling, gently bitter edge that balances the rich wots. Whip the paste light, like a hummus, rather than leaving it dense.",
  notes:
    "A distinctly Eritrean dish that shows the Red-Sea accent on the shared legume table — fenugreek leans the cuisine toward the Arabian peninsula across the water.",
  tags: ["eritrean", "fava", "fenugreek", "puree", "side"],
  sources: [
    { title: "Hilbet — Wikipedia", url: "https://en.wikipedia.org/wiki/Hilbet", note: "The Tigrinya vegan paste of fava beans and fenugreek whipped to a cream and served with injera." },
  ],
};
