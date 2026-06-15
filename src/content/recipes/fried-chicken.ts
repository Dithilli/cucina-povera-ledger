import type { Recipe } from "../types";

export const friedChicken: Recipe = {
  slug: "fried-chicken",
  title: "Skillet Fried Chicken",
  cuisine: "american-south",
  blurb:
    "Cut-up bone-in chicken brined in buttermilk, dredged in seasoned flour, and shallow-fried in a covered cast-iron skillet — the Sunday-table standard done the frugal, old-fashioned way.",
  servings: 4,
  perServing: { calories: 610, protein: 42 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "whole chicken, cut into 8 pieces (or cheap bone-in thighs/legs)", qty: "3 1/2 lb", cost: 5.5 },
    { item: "buttermilk (or soured milk)", qty: "2 cups", cost: 0.9 },
    { item: "all-purpose flour", qty: "2 cups", cost: 0.6, spansWeeks: true },
    { item: "neutral oil (plus a spoon of bacon drippings for flavor)", qty: "2 cups", cost: 1.4, spansWeeks: true },
    {
      item: "salt, black pepper, paprika, garlic powder, cayenne",
      qty: "to season generously",
      cost: 0.4,
      spansWeeks: true,
    },
  ],
  method: [
    "Brine the chicken in salted buttermilk for at least 2 hours (overnight is better). This seasons the cheap cuts through and keeps the lean meat juicy.",
    "Season the flour hard with salt, pepper, paprika, garlic powder, and cayenne. Lift each piece from the buttermilk, letting it drip, and dredge heavily — press the flour on, then let the pieces sit 10 minutes so the coating turns pasty and grips.",
    "Heat 1/2 inch of oil with the drippings in a cast-iron skillet to 335°F. Lay the dark meat in first, skin down, then the white meat. Don't crowd; fry in two batches if needed.",
    "Cover for the first 5–6 minutes to steam the inside, then uncover, turn, and fry uncovered until deep mahogany and 165°F at the bone, about 12–15 minutes total. Drain on a rack and rest before serving.",
  ],
  modernMove:
    "The cover-then-uncover skillet method cooks bone-in pieces through in shallow oil — no deep fryer, far less oil — while the buttermilk brine makes the cheapest legs and thighs taste like a fryer's prize.",
  tags: ["chicken", "fried", "cast-iron", "buttermilk", "skillet"],
  sources: [
    {
      title: "Southern Cast Iron — Master Class: Classic Fried Chicken",
      url: "https://southerncastiron.com/master-class-classic-fried-chicken/",
      note: "Buttermilk brine and a cast-iron skillet fry, frying dark and white meat separately — the method this recipe uses.",
    },
  ],
};
