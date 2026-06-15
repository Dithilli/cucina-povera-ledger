import type { Recipe } from "../types";

export const kashaWithMushroomGravy: Recipe = {
  slug: "kasha-with-mushroom-gravy",
  title: "Kasha with Mushroom Gravy",
  cuisine: "ashkenazi",
  blurb:
    "A mound of fluffy toasted buckwheat under a deep brown gravy of slow-fried onion and mushroom, thickened with a spoon of flour and slackened with mushroom water — plain grain made into a full supper by what you pour over it.",
  servings: 4,
  perServing: { calories: 480, protein: 15 },
  estCostPerServing: 0.65,
  roles: ["dinner"],
  ingredients: [
    { item: "kasha (roasted buckwheat groats)", qty: "1 cup", cost: 0.6 },
    { item: "egg", qty: "1", cost: 0.2 },
    { item: "water or stock for the kasha", qty: "2 cups", cost: 0.1 },
    { item: "onion, finely chopped", qty: "1 large", cost: 0.3 },
    { item: "fresh mushrooms, sliced", qty: "8 oz", cost: 1.2 },
    { item: "dried mushrooms (optional, for depth)", qty: "1/4 oz", cost: 0.3, spansWeeks: true },
    { item: "neutral oil (or schmaltz, see notes)", qty: "3 tbsp", cost: 0.15, spansWeeks: true },
    { item: "flour", qty: "1 1/2 tbsp", cost: 0.05, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "If using dried mushrooms, soak them in 1 cup just-boiled water; reserve the strained liquor for the gravy and chop the softened mushrooms.",
    "Beat the egg, stir in the dry kasha to coat every grain, and toast in a dry hot skillet, stirring, until the egg dries and the groats separate — 2–4 minutes. Add the hot water or stock and a pinch of salt, cover, and simmer on low until tender and the liquid is gone, about 10 minutes. Fluff and keep warm.",
    "For the gravy, fry the onion in the oil over medium heat until deep golden, 15–20 minutes. Add the fresh (and soaked) mushrooms and cook until browned and their liquid has cooked off.",
    "Scatter the flour over and stir a minute to cook off the raw taste, then pour in the reserved mushroom liquor (and water to make about 1 1/2 cups). Simmer, stirring, until it thickens into a glossy brown gravy. Season well with salt and pepper. Spoon over the mound of kasha.",
  ],
  modernMove:
    "Brown the onions and mushrooms hard before the flour goes in. The gravy gets its color and depth from real fond in the pan, not from browning the flour — a pale roux over under-cooked vegetables makes a beige gravy with nothing to say.",
  notes:
    "Pareve as written with oil. Made with rendered chicken schmaltz the gravy turns fleishig and tastes like it came off a roast — fine over kasha beside chicken, but then keep all dairy off the table.",
  tags: ["kasha", "buckwheat", "mushroom"],
  sources: [
    {
      title: "Gil Marks — Encyclopedia of Jewish Food",
      note: "Kasha (buckwheat) and the importance of foraged/dried mushrooms in the Ashkenazi kitchen.",
    },
    {
      title: "Claudia Roden — The Book of Jewish Food",
      note: "Kasha served under an onion-and-mushroom gravy as a meatless supper.",
    },
  ],
};
