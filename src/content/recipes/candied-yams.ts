import type { Recipe } from "../types";

export const candiedYams: Recipe = {
  slug: "candied-yams",
  title: "Candied Yams",
  cuisine: "american-south",
  blurb:
    "Sweet potatoes braised stovetop in their own caramelized syrup of brown sugar, butter, and warm spice until glossy and tender — the cheap root made festive.",
  servings: 6,
  perServing: { calories: 280, protein: 3 },
  estCostPerServing: 0.65,
  roles: ["side"],
  ingredients: [
    {
      item: "sweet potatoes (Southern 'yams'), peeled, in thick rounds",
      qty: "2 1/2 lb",
      cost: 2.0,
    },
    { item: "brown sugar", qty: "1/2 cup", cost: 0.3, spansWeeks: true },
    { item: "butter", qty: "4 tbsp", cost: 0.6, spansWeeks: true },
    {
      item: "cinnamon, nutmeg, pinch of salt",
      qty: "to taste",
      spansWeeks: true,
    },
    {
      item: "splash of vanilla (optional)",
      qty: "1 tsp",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "water", qty: "1/2 cup" },
  ],
  method: [
    "Lay the sweet potato rounds in a wide heavy skillet. Scatter over the brown sugar, dot with butter, add the spices, salt, and water.",
    "Bring to a simmer, cover, and cook gently 20 minutes, turning once, until a knife slides in easily.",
    "Uncover, raise the heat, and let the liquid reduce to a thick, bubbling syrup — baste the rounds as it thickens so they glaze evenly, 8–10 minutes.",
    "Off the heat, stir in the vanilla and spoon the syrup over. Serve warm as a side; it sits happily next to greens, beans, or smoked pork.",
  ],
  modernMove:
    "Glazing on the stovetop rather than baking lets you reduce the syrup precisely and baste — the rounds come out lacquered and caramelized at the edges, not dried out.",
  notes:
    "A stovetop method uses far less fuel and sugar than the casserole version, and keeps the potato's own flavor forward instead of burying it under marshmallow.",
  tags: ["sweet-potato", "yams", "side", "caramel", "frugal"],
};
