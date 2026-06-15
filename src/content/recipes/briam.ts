import type { Recipe } from "../types";

export const briam: Recipe = {
  slug: "briam",
  title: "Briam (Oven-Roasted Summer Vegetables)",
  cuisine: "greek",
  blurb:
    "Zucchini, potato, and tomato sliced thin and roasted slow in olive oil until the edges caramelize and everything goes jammy — Greece's answer to ratatouille, made for one tray and a hot oven.",
  servings: 4,
  perServing: { calories: 380, protein: 9 },
  estCostPerServing: 1.1,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "potatoes, thinly sliced", qty: "3 medium", cost: 0.75 },
    { item: "zucchini, sliced into rounds", qty: "3", cost: 1.2 },
    { item: "onion, sliced", qty: "1", cost: 0.4 },
    { item: "garlic cloves, sliced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "ripe tomatoes, grated, plus a few sliced for the top", qty: "4", cost: 1.2 },
    {
      item: "olive oil — generous, it bastes the vegetables",
      qty: "1/2 cup",
      cost: 1.2,
      spansWeeks: true,
    },
    { item: "oregano (dried) and parsley", qty: "1 tsp / handful", cost: 0.2, spansWeeks: true },
    { item: "salt, black pepper", qty: "to taste", spansWeeks: true },
    { item: "to serve: feta and bread", qty: "for the table", cost: 0.6 },
  ],
  method: [
    "Heat the oven to 400°F (200°C). Toss the sliced potatoes, zucchini, onion, and garlic in a large roasting tray.",
    "Pour over the grated tomato, all the olive oil, the oregano, salt, and pepper, and toss with your hands until every slice is slick with oil. Spread out and lay a few tomato slices on top.",
    "Roast 60–75 minutes, stirring once or twice, until the potatoes are tender, the zucchini collapses, and the edges are browned and sticky. Add a splash of water if it dries before the potatoes soften.",
    "Scatter with parsley and rest 10 minutes. Serve warm or at room temperature with feta crumbled over and bread for the pan juices.",
  ],
  modernMove:
    "Slice everything to roughly the same thinness so it cooks evenly, and don't stir too often — the contact with the hot tray is what caramelizes the edges and turns a wet stew into something concentrated.",
  notes:
    "A baked ladero — the long roast in olive oil is the whole point. Like all ladera the protein is modest; lean on the feta and bread alongside. Keeps for days and tastes better cold.",
  zeroWasteHero: true,
  tags: ["ladera", "briam", "vegetable", "olive-oil", "roasted", "summer", "vegetarian"],
  sources: [
    {
      title: "My Greek Dish — Briam (Greek Mixed Roasted Vegetables)",
      url: "https://www.mygreekdish.com/recipe/briam-recipe-greek-mixed-roasted-vegetables/",
      note: "Confirms potatoes, courgettes, aubergines, and tomato roasted in olive oil; served with feta and bread.",
    },
  ],
};
