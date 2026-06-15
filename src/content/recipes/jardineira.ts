import type { Recipe } from "../types";

export const jardineira: Recipe = {
  slug: "jardineira",
  title: "Jardineira",
  cuisine: "portuguese",
  blurb:
    "The 'gardener's stew' — a little beef braised slow with a whole garden of potatoes, carrots, peas, and beans in a tomato-wine base. The meat is the seasoning; the vegetables are the meal.",
  servings: 4,
  perServing: { calories: 560, protein: 26 },
  estCostPerServing: 1.55,
  roles: ["dinner"],
  ingredients: [
    {
      item: "cheap stewing beef (shin or chuck), cubed small",
      qty: "3/4 lb",
      cost: 3.5,
    },
    { item: "potatoes, in chunks", qty: "1 lb", cost: 0.6 },
    { item: "carrots, sliced thick", qty: "3", cost: 0.4 },
    { item: "frozen or fresh peas", qty: "1 cup", cost: 0.6 },
    { item: "green beans, cut in lengths", qty: "1 cup", cost: 0.7 },
    { item: "onion, chopped", qty: "1", cost: 0.3 },
    {
      item: "garlic and bay leaf",
      qty: "3 cloves / 1 leaf",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "ripe tomato or a spoon of tomato paste", qty: "1", cost: 0.3 },
    { item: "splash of white wine", qty: "1/2 cup", cost: 0.4, spansWeeks: true },
    {
      item: "olive oil, salt, pepper, parsley",
      qty: "to taste",
      cost: 0.3,
      spansWeeks: true,
    },
  ],
  method: [
    "Brown the small cubes of beef in olive oil, then lift out — they only need color, not to be cooked through yet.",
    "In the same pot soften the onion and garlic, add the tomato, and cook to a jammy refogado before deglazing with the white wine.",
    "Return the beef, cover with water, add the bay leaf, and braise gently about 1 hour until the meat is nearly tender — slow and low so a little beef gives a lot of flavor.",
    "Add the potatoes, carrots, and green beans and simmer until tender, then fold in the peas for the last few minutes so they stay sweet and green.",
    "Season, slacken with a little of the braising liquid into a light sauce, and scatter with parsley. Serve with bread or rice to catch the broth.",
  ],
  modernMove:
    "Browning the beef and building a proper tomato-and-wine refogado before the water goes in gives a stew with deep meaty flavor from only three-quarters of a pound — the garden does the rest.",
  notes:
    "Endlessly forgiving: whatever vegetables are tired in the drawer go in. Leftovers thicken overnight into an even better second-day stew.",
  tags: ["stew", "beef", "vegetables", "peas", "carrots", "refogado", "braise"],
  sources: [
    {
      title: "Food From Portugal — Jardineira (Portuguese Beef Stew)",
      url: "https://www.foodfromportugal.com/recipes/meat-jardineira/",
      note: "Supports the 'gardener's stew' frame — beef braised in a tomato-wine base with potatoes, carrots, green beans, and peas.",
    },
  ],
};
