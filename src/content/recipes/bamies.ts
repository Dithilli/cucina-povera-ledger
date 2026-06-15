import type { Recipe } from "../types";

export const bamies: Recipe = {
  slug: "bamies",
  title: "Bamies (Okra in Tomato & Olive Oil)",
  cuisine: "greek",
  blurb:
    "Okra stewed gently in tomato and olive oil until silky, never slimy — a high-summer ladero eaten as the main with bread and feta, sharpened with a squeeze of lemon or a splash of vinegar.",
  servings: 4,
  perServing: { calories: 290, protein: 9 },
  estCostPerServing: 1.4,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "okra, small pods, stems trimmed (not cut into the cap)", qty: "1 1/4 lb", cost: 3.2 },
    { item: "onion, finely chopped", qty: "1", cost: 0.4 },
    { item: "garlic cloves, sliced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "ripe tomatoes, grated (or 1 cup canned, crushed)", qty: "3", cost: 0.9 },
    {
      item: "olive oil",
      qty: "6 tbsp",
      cost: 1.0,
      spansWeeks: true,
    },
    { item: "red wine vinegar (to de-slime the okra)", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "parsley, chopped, and a lemon to serve", qty: "handful / 1", cost: 0.4, spansWeeks: true },
    { item: "salt, black pepper", qty: "to taste", spansWeeks: true },
    { item: "to serve: feta and bread", qty: "for the table", cost: 0.6 },
  ],
  method: [
    "Trim the okra stems carefully without cutting into the pod, toss with the vinegar and a little salt, and leave 30 minutes — this firms them up and stops the sliminess. Rinse and pat dry.",
    "Soften the onion in the olive oil over medium-low heat until sweet, add the garlic for a minute, then stir in the grated tomato and a little salt; cook down to a loose sauce.",
    "Lay the okra in the pan in one layer, spoon the sauce over, and add a small splash of water. Cover and simmer very gently, shaking the pan rather than stirring, for 30–40 minutes until the okra is tender and the sauce is thick and glossy.",
    "Off the heat, scatter with parsley and black pepper. Serve warm or at room temperature with a wedge of lemon, feta, and bread.",
  ],
  modernMove:
    "The vinegar soak is the trick that lets okra braise long enough to go silky without turning ropey — and shaking the pan instead of stirring keeps the pods whole.",
  notes:
    "A classic August ladero, made when okra is cheap and abundant. Protein on the plate is modest by design; the feta and bread round out the meal. Frozen okra works off-season — skip the soak and add it straight to the sauce.",
  tags: ["ladera", "bamies", "okra", "vegetable", "olive-oil", "summer", "vegetarian"],
};
