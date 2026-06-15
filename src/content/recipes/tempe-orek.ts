import type { Recipe } from "../types";

export const tempeOrek: Recipe = {
  slug: "tempe-orek",
  title: "Tempe Orek",
  cuisine: "indonesian",
  blurb:
    "Crispy sweet-and-spicy tempe stir-fry: matchsticks of tempe fried hard, then tossed in a sticky kecap-manis glaze with chili and garlic until they lacquer. The classic frugal lauk — a small block of tempe stretches across a week of rice bowls.",
  servings: 4,
  perServing: { calories: 460, protein: 24 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "tempe, cut into thin matchsticks", qty: "12 oz", cost: 1.8 },
    { item: "garlic cloves, sliced", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "shallots, sliced", qty: "3", cost: 0.4, spansWeeks: true },
    { item: "fresh red chilies, sliced", qty: "3", cost: 0.4, spansWeeks: true },
    { item: "bird's-eye chilies (optional, for heat)", qty: "2", cost: 0.2, spansWeeks: true },
    { item: "kecap manis (sweet soy sauce)", qty: "3 tbsp", cost: 0.6, spansWeeks: true },
    { item: "palm sugar (or brown sugar)", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "tamarind pulp (or 1 tsp lime juice)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "bay leaf or salam leaf (optional)", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
    { item: "oil for frying", qty: "1/3 cup", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Fry the tempe matchsticks in hot oil in batches until deep golden and properly crisp, then lift out onto paper. Frying them hard now is what keeps them crunchy under the glaze later, instead of going soggy.",
    "Pour off all but a tablespoon of oil. Fry the shallots, garlic, and chilies (and the salam leaf) over medium until soft and fragrant.",
    "Add the kecap manis, palm sugar, a splash of the strained tamarind water, and a few tablespoons of water. Let it bubble and reduce until syrupy and glossy.",
    "Tip the fried tempe back in and toss fast over high heat, coating every piece, until the glaze clings and turns sticky-dry and the tempe re-crisps. Taste for salt and serve at once with hot rice.",
  ],
  modernMove:
    "Reduce the kecap-manis glaze to a syrup before the tempe goes back in, then toss only briefly over high heat — that way the sugar coats and re-crisps the tempe rather than steaming it limp. Sweet, salty, hot, and crunchy in one cheap dish.",
  notes:
    "Kept dry it stays crisp a couple of days and travels well in a lunchbox. Add a handful of fried peanuts or anchovies to the glaze to stretch it further, the way warung cooks do.",
  tags: ["dinner", "tempe", "stir-fry", "sweet-soy", "crispy", "protein"],
  sources: [
    { title: "Anita Jacobson — Daily Cooking Quest", url: "https://dailycookingquest.com/tempeh-kecap-fried-tempeh-in-sweet-soy-sauce.html", note: "crispy fried tempe sticks tossed in a sticky kecap-manis chili glaze" },
  ],
};
