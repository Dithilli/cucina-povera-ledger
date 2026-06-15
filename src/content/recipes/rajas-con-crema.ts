import type { Recipe } from "../types";

export const rajasConCrema: Recipe = {
  slug: "rajas-con-crema",
  title: "Rajas con Crema",
  cuisine: "mexican",
  blurb:
    "Charred poblano strips with sweet onion, corn, and a swirl of crema — smoky, mellow, and rich enough to make a meal of a taco. The precious-thread week earns its cream.",
  servings: 4,
  perServing: { calories: 220, protein: 6 },
  estCostPerServing: 0.9,
  roles: ["side", "dinner"],
  ingredients: [
    { item: "poblano chiles, charred, peeled, sliced", qty: "4", cost: 1.2 },
    { item: "white onion, sliced", qty: "1", cost: 0.3 },
    { item: "corn kernels", qty: "1 cup", cost: 0.4 },
    { item: "crema (Mexican)", qty: "1/2 cup", cost: 0.8, spansWeeks: true },
    { item: "queso fresco or Oaxaca", qty: "1/3 cup", cost: 0.7, spansWeeks: true },
    { item: "oil, salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Char the poblanos directly over a flame or under a broiler until blackened; sweat in a covered bowl, then peel and slice into rajas (strips).",
    "Caramelize the onion slowly in a little oil; add the corn and the poblano strips.",
    "Lower the heat and stir in the crema; warm gently (don't boil) until it coats everything.",
    "Season, fold in cheese, and serve as a taco filling or a side.",
  ],
  modernMove:
    "Char the poblanos hard and steam-peel them — the roasting is the flavor. Add the crema off a hard boil so it stays silky and doesn't split.",
  notes: "The week's precious thread (crema + cheese) shows how a little dairy transforms cheap chiles and corn.",
  tags: ["verduras", "poblano", "crema", "rajas", "side"],
};
