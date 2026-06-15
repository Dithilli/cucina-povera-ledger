import type { Recipe } from "../types";

export const roastChickenWithSchmaltz: Recipe = {
  slug: "roast-chicken-with-schmaltz",
  title: "Roast Chicken with Schmaltz",
  cuisine: "ashkenazi",
  blurb:
    "The Shabbos bird rubbed with schmaltz, salt, and onion and roasted until the skin is burnished and crackling — the rendered fat saved back as more schmaltz, the carcass saved for next week's soup.",
  servings: 4,
  perServing: { calories: 520, protein: 40 },
  estCostPerServing: 1.8,
  roles: ["dinner"],
  ingredients: [
    { item: "whole chicken", qty: "1 (3 1/2–4 lb)", cost: 6.0 },
    { item: "schmaltz (rendered chicken fat)", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "yellow onions, thickly sliced", qty: "2 large", cost: 0.6 },
    { item: "garlic cloves", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "paprika", qty: "2 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Salt the chicken inside and out, ideally an hour ahead (or the night before, uncovered in the icebox) so the skin dries and the seasoning sinks in. Dry skin is the whole secret to crackling.",
    "Heat the oven to 425°F (220°C). Rub the bird all over with soft schmaltz, then dust with paprika, pepper, and a little more salt. Tuck garlic in the cavity.",
    "Scatter the sliced onions across the roasting pan as a bed and set the chicken breast-up on top, so the onions roast in the dripping fat and keep the bird off the pan.",
    "Roast 60–75 minutes, basting once or twice with the schmaltzy pan juices, until the skin is deep mahogany and the thigh juices run clear (165°F / 74°C). Rest 10 minutes before carving.",
    "Pour off and save the clear rendered fat from the pan — that's fresh schmaltz for the week. Keep the picked carcass for next week's soup pot.",
  ],
  modernMove:
    "Dry-brine the night before and roast it on a bed of onions: salting ahead pulls moisture out so the schmaltz-rubbed skin lacquers up crisp and burnished, while the onion bed both flavors the drippings and lifts the bird so it roasts instead of stews.",
  notes:
    "Schmaltz and chicken make this fleishig — no butter, no dairy at the table. The thrift is in the afterlife: the rendered pan fat is poured off as next week's schmaltz, and the stripped carcass becomes the foundation of the chicken soup. One bird does the work of three.",
  tags: ["chicken", "roast", "shabbos", "fleishig"],
};
