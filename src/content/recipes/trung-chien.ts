import type { Recipe } from "../types";

export const trungChien: Recipe = {
  slug: "trung-chien",
  title: "Trứng Chiên Nước Mắm",
  cuisine: "vietnamese",
  blurb:
    "Fish-sauce fried eggs — the cheapest, fastest Vietnamese dinner there is: eggs fried crisp-edged and seasoned with nothing but fish sauce and pepper.",
  servings: 2,
  perServing: { calories: 320, protein: 19 },
  estCostPerServing: 0.55,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "eggs", qty: "4", cost: 0.8 },
    { item: "fish sauce", qty: "2 tsp", cost: 0.1, spansWeeks: true },
    { item: "scallion, sliced", qty: "1", cost: 0.1 },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "steamed rice to serve", qty: "2 cups", cost: 0.3 },
    { item: "black pepper, sliced chili to finish", qty: "to taste" },
  ],
  method: [
    "Beat the eggs lightly with the fish sauce and most of the scallion — the fish sauce seasons from the inside and browns into the lacy edges as it fries.",
    "Get the oil genuinely hot in a small pan, then pour in the eggs. Let the underside blister and frill before you fold or flip, so you get crisp brown lace rather than a pale omelet.",
    "Slide onto a plate, scatter the rest of the scallion, and finish with lots of black pepper and chili.",
    "Serve over hot rice with a splash more fish sauce — or set it alongside a soup or vegetable as a side.",
  ],
  modernMove:
    "Seasoning the raw eggs with fish sauce instead of salt means the sugars in it caramelize in the hot oil, giving the crisp brown frill its savory depth — the whole dish from one bottle.",
  zeroWasteHero: true,
  tags: ["egg", "fish-sauce", "fast", "rice", "two-ingredient"],
};
