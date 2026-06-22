import type { Recipe } from "../types";

export const cheeseBlintzes: Recipe = {
  slug: "cheese-blintzes",
  title: "Cheese Blintzes",
  cuisine: "ashkenazi",
  blurb:
    "Thin, tender egg crepes wrapped around a pillow of sweetened farmer cheese, folded into neat parcels and pan-fried in butter until the seams turn lacy and golden — served with cool sour cream and a spoon of jam. The dairy table's gentle showpiece.",
  servings: 4,
  perServing: { calories: 520, protein: 24 },
  estCostPerServing: 1.19,
  roles: ["dinner"],
  ingredients: [
    { item: "farmer cheese", qty: "1 lb", cost: 3.0 },
    { item: "eggs", qty: "3 (1 for filling, 2 for batter)", cost: 0.75 },
    { item: "all-purpose flour", qty: "1 cup", cost: 0.2, spansWeeks: true },
    { item: "milk", qty: "1 1/4 cups", cost: 0.4 },
    { item: "butter", qty: "3 tbsp (plus more for frying)", cost: 0.5, spansWeeks: true },
    { item: "sugar", qty: "2–3 tbsp", cost: 0.1, spansWeeks: true },
    { item: "vanilla and a pinch of cinnamon, optional", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "pinch", spansWeeks: true },
    { item: "sour cream and jam, to serve", qty: "to taste", cost: 0.6 },
  ],
  method: [
    "Whisk 2 eggs with the flour, milk, a pinch of salt, and 1 tbsp melted butter into a thin, smooth batter — about the consistency of heavy cream. Let it rest 15–20 minutes so the flour relaxes.",
    "Heat a small skillet over medium, wipe with butter, and pour in just enough batter to coat the bottom in a thin film, swirling the pan. Cook until the top sets and the edges lift — about a minute — then turn out onto a towel, cooked-side up. These wrappers (bletlach) are cooked on one side only. Repeat to make 8 or so.",
    "Mash the farmer cheese with the remaining egg, the sugar, vanilla, cinnamon, and a pinch of salt into a smooth, sweet filling.",
    "Spoon a line of filling onto the cooked side of each crepe near one edge, fold that edge over, fold in the two sides, and roll into a snug rectangular parcel, seam-side down.",
    "Fry the blintzes in plenty of butter over medium heat, seam-side down first, turning once, until both sides are deep golden and crisp and the filling is hot through, 2–3 minutes a side. Serve at once with cold sour cream and a spoon of jam.",
  ],
  modernMove:
    "Cook the wrapper on one side only and fill it cooked-side-in: the raw side seals tight against the cheese, and the final butter-fry is what crisps and browns both faces. That two-stage approach — set the crepe, then later fry the filled parcel — is what gives a blintz its signature contrast of lacy gold outside and soft, warm cheese within.",
  notes:
    "Thoroughly milchig: butter in the batter, butter in the pan, cheese in the middle, sour cream on top — this is a dairy supper, served far from any meat. Farmer cheese is the authentic filling; drained cottage cheese stands in if you can't find it.",
  tags: ["blintz", "cheese", "dairy", "milchig", "shavuot"],
  sources: [
    {
      title: "Wikipedia — Blintz",
      url: "https://en.wikipedia.org/wiki/Blintz",
      note: "Rolled, filled Ashkenazi pancake; cheese filling, sautéing, and sour-cream service.",
    },
    {
      title: "Joan Nathan — Jewish Cooking in America",
      note: "Cheese blintz technique and its place on the dairy / Shavuot table.",
    },
  ],
};
