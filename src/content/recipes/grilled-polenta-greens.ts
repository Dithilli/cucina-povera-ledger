import type { Recipe } from "../types";

export const grilledPolentaGreens: Recipe = {
  slug: "grilled-polenta-greens",
  title: "Grilled Leftover Polenta with Bitter Greens",
  cuisine: "italian",
  blurb:
    "Set leftover polenta sliced and grilled crisp, topped with garlicky bitter greens — yesterday's pot reborn with crunchy edges.",
  servings: 4,
  perServing: { calories: 380, protein: 11 },
  estCostPerServing: 1.0,
  roles: ["dinner", "lunch", "side"],
  ingredients: [
    {
      item: "set leftover polenta, sliced into slabs",
      qty: "1 batch (~4 cups set)",
      cost: 0.6,
    },
    {
      item: "bitter greens (chicory, rapini, escarole), chopped",
      qty: "1 1/2 lb",
      cost: 2.5,
    },
    { item: "garlic cloves, sliced", qty: "3", cost: 0.15, spansWeeks: true },
    {
      item: "pecorino, grated",
      qty: "1/3 cup",
      cost: 0.85,
      spansWeeks: true,
    },
    {
      item: "olive oil, chili flakes, salt, pepper",
      qty: "4 tbsp oil",
      cost: 0.6,
      spansWeeks: true,
    },
  ],
  method: [
    "Brush the polenta slabs with oil and grill (or pan-sear, or broil) until deeply crisp and golden on both sides.",
    "Meanwhile, sauté the greens in oil with the garlic and chili until tender, seasoning well; if very bitter, blanch first.",
    "Pile the greens over the grilled polenta.",
    "Finish with pecorino, raw oil, and pepper.",
  ],
  modernMove:
    "Let the cut polenta dry uncovered in the fridge before grilling so it forms a real crust — the crisp-soft contrast is what turns a leftover into a dish.",
  zeroWasteHero: true,
  tags: ["polenta", "greens", "grilled", "leftovers", "zero-waste"],
};
