import type { Recipe } from "../types";

export const knish: Recipe = {
  slug: "knish",
  title: "Potato Knish",
  cuisine: "ashkenazi",
  blurb:
    "Mashed potato and deeply fried onion wrapped in a thin, oil-rich dough and baked golden — the Lower East Side street supper, sold from pushcarts for a few pennies and eaten warm in the hand. Frugal stuffing in a thrifty wrapper, more than the sum of its parts.",
  servings: 6,
  perServing: { calories: 450, protein: 12 },
  estCostPerServing: 0.75,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "all-purpose flour", qty: "2 cups", cost: 0.4, spansWeeks: true },
    { item: "neutral oil", qty: "1/3 cup (plus more for the onions)", cost: 0.4, spansWeeks: true },
    { item: "warm water", qty: "1/2 cup", cost: 0 },
    { item: "egg (1 in dough, plus 1 for wash)", qty: "2", cost: 0.5 },
    { item: "russet potatoes", qty: "1 1/2 lb", cost: 1.05 },
    { item: "onions, chopped", qty: "2 large", cost: 0.8 },
    { item: "salt and pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Make the dough: whisk the flour with a little salt, then stir in the oil, 1 egg, and the warm water to a soft dough. Knead briefly until smooth, oil it lightly, cover, and let it rest at least 30 minutes — the rest is what lets it stretch thin.",
    "Boil the peeled potatoes until very tender, drain well, and mash smooth. Meanwhile fry the chopped onions in oil over medium heat until deep golden and soft, 15–20 minutes.",
    "Beat the fried onions and their oil into the mash with lots of salt and pepper. Taste hard — the filling should be assertively seasoned. Cool slightly.",
    "Roll the dough out on a floured cloth as thin as you can, almost translucent. Lay a log of filling along one edge and roll it up into a long stuffed tube.",
    "Pinch and twist the tube at intervals to portion it, then cut and tuck the ends under to seal each knish. Set on a lined sheet, brush with beaten egg.",
    "Bake at 375°F (190°C) for 35–40 minutes until the pastry is golden and crisp. Eat warm, ideally with a smear of mustard.",
  ],
  modernMove:
    "Rest the oil dough, then roll it nearly see-through so the wrapper bakes into a thin, crisp shell rather than a bready crust — the filling should outweigh the dough. Frying the onions hard before they meet the potato is what lifts the plain mash into something worth a pushcart.",
  notes:
    "Kept pareve with oil throughout, so it rides a meat or a dairy meal alike. A pan of these is the perfect home for yesterday's leftover mashed potato — thrift folded inside thrift.",
  tags: ["potato", "pastry", "knish", "pareve"],
  sources: [
    {
      title: "Wikipedia — Knish",
      url: "https://en.wikipedia.org/wiki/Knish",
      note: "Dough-wrapped filled pastry of Ashkenazi Jewish cuisine; potato-and-onion filling.",
    },
    {
      title: "Claudia Roden — The Book of Jewish Food",
      note: "Potato knish dough and the Lower East Side pushcart tradition.",
    },
  ],
};
