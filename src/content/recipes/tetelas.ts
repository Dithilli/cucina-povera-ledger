import type { Recipe } from "../types";

export const tetelas: Recipe = {
  slug: "tetelas",
  title: "Tetelas",
  cuisine: "oaxacan",
  blurb:
    "Neat masa triangles from the Mixteca: a thin round of tortilla dough hiding a smear of black bean paste and a leaf of hoja santa, folded into a three-cornered pocket and griddled dry until the masa toasts and the beans steam inside.",
  servings: 4,
  perServing: { calories: 420, protein: 15 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh masa (or masa harina)", qty: "2 cups", cost: 0.7 },
    { item: "black bean paste (frijoles refritos, with hoja de aguacate)", qty: "1 1/4 cups", cost: 0.5 },
    { item: "hoja santa leaves", qty: "8 small", cost: 0.4, spansWeeks: true },
    { item: "quesillo (Oaxaca string cheese), shredded", qty: "1/2 cup", cost: 0.8, spansWeeks: true },
    { item: "salsa roja or salsa verde, to serve", qty: "3/4 cup", cost: 0.4 },
    { item: "salt, warm water", qty: "as needed", spansWeeks: true },
  ],
  method: [
    "Knead the masa with salt and warm water to a smooth dough and press into thin rounds between plastic.",
    "Spoon black bean paste into the center of each round, lay on a torn piece of hoja santa and a little quesillo, and keep the filling well inside the edges.",
    "Fold the round into a triangle: bring up one side, then the second, then the third, overlapping the edges to seal the filling in three corners.",
    "Griddle the tetelas on a dry medium-hot comal, turning, until both faces are firm and freckled and the beans are steaming hot within.",
    "Slit the top, spoon in salsa, and eat off your hand.",
  ],
  modernMove:
    "Tuck a piece of hoja santa right against the beans before you fold — sealed inside the pocket its anise-and-sassafras perfume steams into the bean paste, the herbal note that marks a Oaxacan tetela apart from a plain bean turnover.",
  notes:
    "A pre-Hispanic Mixteca antojito; the triangle is structural, sealing the filling on three sides so nothing leaks while it toasts.",
  zeroWasteHero: false,
  tags: ["masa", "oaxacan", "frijoles", "antojito", "dinner"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen, Tetelas Oaxaca Recipe",
      url: "https://www.mexicoinmykitchen.com/tetelas-oaxaca-recipe/",
      note: "triangular fold of masa over black bean paste with hoja santa, griddled on a comal",
    },
  ],
};
