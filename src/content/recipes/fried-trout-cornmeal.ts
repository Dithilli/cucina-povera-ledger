import type { Recipe } from "../types";

export const friedTroutCornmeal: Recipe = {
  slug: "fried-trout-cornmeal",
  title: "Cornmeal Fried Trout",
  cuisine: "appalachian",
  blurb:
    "Small native brook trout shaken damp in a bag of salted cornmeal and fried whole in bacon grease until the skin shatters and the sweet flesh slips clean off the bone.",
  servings: 4,
  perServing: { calories: 470, protein: 32 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "whole trout, cleaned (6–10 in)", qty: "4 fish", cost: 5.5 },
    { item: "stone-ground cornmeal", qty: "3/4 cup", cost: 0.3 },
    { item: "salt and black pepper", qty: "to season", cost: 0.05, spansWeeks: true },
    { item: "bacon grease or lard", qty: "for the skillet", cost: 0.8, spansWeeks: true },
    { item: "lemon", qty: "1", cost: 0.3 },
  ],
  method: [
    "Clean the trout but leave them whole, heads on if you like; pat them only lightly so they stay damp enough to hold cornmeal.",
    "Shake the fish, one or two at a time, in a paper bag of cornmeal, salt, and pepper until well coated inside and out.",
    "Render bacon grease in a heavy cast-iron skillet over medium-high until a flick of cornmeal sizzles and browns.",
    "Fry the trout about 3 minutes a side, turning once, until the cornmeal crust is deep gold and crisp.",
    "Drain briefly, squeeze lemon over, and eat hot — the flesh lifts off the spine in one piece.",
  ],
  modernMove:
    "Use trout under ten inches and fry them whole; the bone conducts heat and keeps the thin flesh from drying, which is why mountain cooks never bothered to fillet a creek-caught fish.",
  notes: "A morning's catch from a high cold stream was supper that night — cornmeal and grease were the only things the kitchen had to add.",
  zeroWasteHero: false,
  tags: ["appalachian", "fish", "trout", "cornmeal", "fried"],
  sources: [
    {
      title: "Sporting Classics Daily — Simple Smoky-Mountain Fried Trout",
      url: "https://sportingclassicsdaily.com/wild-harvest-wednesday-smoky-mountain-trout/",
      note: "shake damp whole trout in bagged cornmeal, fry small fish in cast iron",
    },
  ],
};
