import type { Recipe } from "../types";

export const mixedVegPakora: Recipe = {
  slug: "mixed-veg-pakora",
  title: "Mixed Veg Pakora",
  cuisine: "north-indian",
  blurb:
    "Whatever's in the vegetable drawer bound in spiced gram-flour batter and fried crisp — the original monsoon snack that stretches scraps into a meal.",
  servings: 4,
  perServing: { calories: 480, protein: 14 },
  estCostPerServing: 0.7,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "gram flour (besan)", qty: "1 1/2 cups", cost: 0.75 },
    {
      item: "mixed vegetables (onion, potato, spinach, cauliflower — whatever you have), sliced thin",
      qty: "4 cups",
      cost: 1.0,
    },
    {
      item: "rice flour (for extra crunch)",
      qty: "2 tbsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "ajwain (carom seeds) and cumin seeds",
      qty: "1 tsp each",
      cost: 0.1,
      spansWeeks: true,
    },
    { item: "turmeric and Kashmiri red chili powder", qty: "1 tsp each", cost: 0.1, spansWeeks: true },
    { item: "ginger-green chili paste", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    {
      item: "neutral oil for deep frying",
      qty: "for frying",
      cost: 0.5,
      spansWeeks: true,
    },
    { item: "salt and chaat masala to finish", qty: "to taste", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Toss the sliced vegetables with salt and let them sit 5 minutes — they'll weep, and that water is most of what you need to bind the batter.",
    "Add the besan, rice flour, ajwain, cumin, turmeric, chili, and ginger-chili paste. Mix with your hands, adding only a splash of water at a time, until everything is coated in a thick clinging batter (a stiff batter fries crisp; a thin one goes greasy).",
    "Heat oil to about 340°F / 170°C. Drop in irregular clusters — ragged edges mean more crunch — and fry in batches without crowding until deep gold.",
    "Drain on a rack, not paper, so the steam escapes and they stay crisp. Dust with chaat masala.",
    "Serve hot as dinner with boondi raita and chutney, or as a side alongside a dal.",
  ],
  modernMove:
    "Salting the vegetables to draw their own water (instead of adding it) and a spoon of rice flour in the besan are what separate shatter-crisp pakoras from soggy ones.",
  tags: ["gram-flour", "besan", "fritters", "vegetables", "fried", "frugal"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/mix-veg-pakora-recipe/",
      note: "Mixed vegetables in a thick clinging besan batter, fried crisp",
    },
  ],
};
