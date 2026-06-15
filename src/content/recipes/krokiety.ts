import type { Recipe } from "../types";

export const krokiety: Recipe = {
  slug: "krokiety",
  title: "Krokiety",
  cuisine: "polish",
  blurb:
    "Thin naleśniki crêpes wrapped around a savory tangle of sauerkraut and mushrooms, rolled like little cigars, breaded, and fried until the shell shatters and the sour-earthy filling steams inside. The thrifty cook's trick: a cup of leftover bigos or kapusta stretched into a golden supper.",
  servings: 4,
  perServing: { calories: 540, protein: 16 },
  estCostPerServing: 1.2,
  roles: ["dinner"],
  ingredients: [
    { item: "flour (for crêpe batter)", qty: "1 1/4 cups", cost: 0.25, spansWeeks: true },
    { item: "milk", qty: "1 1/2 cups", cost: 0.4 },
    { item: "eggs (1 for batter, 1 for breading)", qty: "2", cost: 0.5 },
    { item: "sauerkraut (kiszona kapusta), drained and chopped", qty: "2 cups", cost: 0.8 },
    { item: "dried mushrooms, soaked, or fresh mushrooms", qty: "1 oz dried (or 8 oz fresh)", cost: 0.9 },
    { item: "onion, finely diced", qty: "1 medium", cost: 0.4 },
    { item: "breadcrumbs", qty: "1 cup", cost: 0.4, spansWeeks: true },
    { item: "oil or lard (smalec), for frying", qty: "1/4 cup", cost: 0.3, spansWeeks: true },
    { item: "salt, pepper, marjoram", qty: "to taste", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Whisk the flour, milk, one egg, and a pinch of salt into a thin, runny batter; rest 20 minutes. Fry pale, lacy crêpes in a lightly greased pan, one ladle each, cooking only until set — about 8 thin crêpes. Stack and cool.",
    "Soak dried mushrooms 20 minutes in hot water (save the liquor), then chop. Fry the onion in a little fat until golden, add the mushrooms, then the chopped, well-squeezed sauerkraut. Cook down 10 minutes until dry and savory; season hard with salt, pepper, and marjoram. Cool the filling.",
    "Spoon filling along one edge of each crêpe, fold in the sides, and roll tight into a fat little log — keep them firm so they don't burst.",
    "Beat the second egg in a bowl, spread breadcrumbs on a plate. Roll each krokiet through egg, then breadcrumbs, pressing to coat all over.",
    "Fry in 1/4 inch of hot fat, turning, until deeply golden and crisp on every side, about 2 minutes per side. Drain and serve hot, classically alongside clear barszcz (beet broth).",
  ],
  modernMove:
    "Cook the filling until it's genuinely dry — any free moisture turns to steam and splits the breadcrumb shell mid-fry. A bone-dry, well-seasoned kraut-and-mushroom core is what lets the crust stay crackling.",
  notes:
    "The meatless sauerkraut-and-mushroom version is the Christmas Eve (Wigilia) classic; a meat or leftover-bigos filling works any other night. This is the canonical way to turn a leftover pot of stewed cabbage into a second, better dinner.",
  zeroWasteHero: true,
  tags: ["polish", "fried", "sauerkraut", "mushroom", "crepe", "leftovers"],
  sources: [
    {
      title: "Polonist (Kasia Nowacka) — Polish Krokiety with Sauerkraut",
      url: "https://www.polonist.com/polish-krokiety-sauerkraut/",
      note: "Crêpe-wrapped sauerkraut-and-mushroom croquettes, rolled, breaded, and pan-fried; Wigilia context",
    },
  ],
};
