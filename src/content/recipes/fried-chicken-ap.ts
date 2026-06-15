import type { Recipe } from "../types";

export const friedChickenAp: Recipe = {
  slug: "fried-chicken-ap",
  title: "Skillet Fried Chicken",
  cuisine: "appalachian",
  blurb:
    "One cut-up bird dredged in seasoned flour and pan-fried in a screaming-hot cast-iron skillet — shatter-crisp crust, juicy meat, and a Sunday-dinner smell that filled the whole holler.",
  servings: 6,
  perServing: { calories: 560, protein: 27 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "whole chicken, cut into 8 pieces", qty: "1 (about 4 lb)", cost: 6.0 },
    { item: "buttermilk", qty: "2 cups", cost: 0.9 },
    { item: "all-purpose flour", qty: "2 cups", cost: 0.3, spansWeeks: true },
    { item: "salt", qty: "2 tsp", cost: 0.05, spansWeeks: true },
    { item: "black pepper", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "lard or vegetable shortening for frying", qty: "3 cups (reusable)", cost: 1.0, spansWeeks: true },
  ],
  method: [
    "Soak the chicken pieces in the buttermilk for at least an hour, or overnight in the icebox — the acid tenderizes the meat and helps the crust grip.",
    "Whisk the flour, salt, and pepper in a paper sack or shallow pan. Lift each piece straight from the buttermilk and shake it in the flour until heavily coated, then set on a rack to rest 10 minutes so the dredge sets.",
    "Melt the lard in a deep cast-iron skillet to about 325–350°F — it should reach roughly halfway up the chicken. Lay in the dark meat first, skin-side down, without crowding.",
    "Fry uncovered, turning once, 12–15 minutes a side until deeply golden and the thickest pieces read 165°F. Add the white meat a few minutes later since it cooks faster.",
    "Drain on a brown paper sack or rack — never on a plate, which steams the crust soft. Rest 5 minutes and serve hot, warm, or cold from the basket the next day.",
  ],
  modernMove:
    "Hold the oil at a true 325–350°F with a thermometer: hot enough to crisp instantly, gentle enough to cook a thick thigh through without scorching the crust. The single move that separates greasy-pale from shatter-golden.",
  notes:
    "Strain and save the frying fat after it cools — Appalachian cooks reused it for the next batch and for frying potatoes. The pan drippings make milk gravy for biscuits.",
  zeroWasteHero: false,
  tags: ["skillet", "appalachian", "chicken", "cast-iron", "sunday-dinner"],
  sources: [
    {
      title: "Grandmaws — The Cast Iron Skillet in Appalachian Cooking",
      url: "https://www.grandmaws.com/the-cast-iron-skillet-in-appalachian-cooking/",
      note: "Pan-fried (not deep-fried) in cast iron as the mountain standard; one-skillet tradition",
    },
  ],
};
