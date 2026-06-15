import type { Recipe } from "../types";

export const skordalia: Recipe = {
  slug: "skordalia",
  title: "Skordalia (Garlic & Potato Pound)",
  cuisine: "greek",
  blurb:
    "Raw garlic pounded into boiled potato and emulsified with olive oil and vinegar into a fierce, fluffy sauce for fried fish, beets, or bread.",
  servings: 6,
  perServing: { calories: 220, protein: 3 },
  estCostPerServing: 0.45,
  roles: ["side", "base"],
  ingredients: [
    { item: "floury potatoes, peeled", qty: "1 lb", cost: 0.7 },
    {
      item: "garlic cloves (more if you're brave)",
      qty: "4–6",
      cost: 0.25,
      spansWeeks: true,
    },
    {
      item: "olive oil",
      qty: "1/2 cup",
      cost: 0.9,
      spansWeeks: true,
    },
    {
      item: "red wine vinegar (or lemon)",
      qty: "2 tbsp",
      cost: 0.15,
      spansWeeks: true,
    },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Boil the potatoes whole until tender, then peel while warm. Reserve a little of the cooking water.",
    "Pound the garlic with a good pinch of salt in a mortar to a smooth paste — this raw-garlic paste is what gives skordalia its bite.",
    "Mash the warm potato into the garlic with a fork or pestle, never a blender or it turns to glue. Work in the olive oil a little at a time, alternating with the vinegar, until fluffy and emulsified.",
    "Loosen with a spoon of the warm cooking water to a soft, spoonable consistency. Taste for salt and sharpness — it should be punchy. Serve at room temperature.",
  ],
  modernMove:
    "Mash by hand and drizzle the oil in slowly like a mayonnaise — a food processor overworks the potato starch and you get wallpaper paste instead of a light, airy pound.",
  notes:
    "Often eaten on fasting days with fried salt cod or beetroot. Stretch it further (and milder) by working in a handful of stale bread soaked and squeezed, the older bread-based version of the sauce.",
  tags: ["sauce", "garlic", "potato", "skordalia", "meze", "vegan"],
  sources: [
    {
      title: "My Greek Dish — Skordalia (Greek Potato and Garlic Dip)",
      url: "https://www.mygreekdish.com/recipe/greek-skordalia-recipe-potato-garlic-dip/",
      note: "Confirms potato pounded with raw garlic and olive oil into a thick meze dip.",
    },
  ],
};
