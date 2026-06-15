import type { Recipe } from "../types";

export const tlayuda: Recipe = {
  slug: "tlayuda",
  title: "Tlayuda",
  cuisine: "oaxacan",
  blurb:
    "The great Oaxacan supper-on-a-disc: a 16-inch comal-blistered tortilla smeared with asiento and refried black beans, blanketed in melting quesillo, draped with thin tasajo, then folded over the coals until it crackles like a charred quesadilla the size of a dinner plate.",
  servings: 4,
  perServing: { calories: 560, protein: 22 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "tlayudas (large semi-dried Oaxacan tortillas)", qty: "4", cost: 1.6 },
    { item: "refried black beans (cooked with hoja de aguacate)", qty: "2 cups", cost: 0.8 },
    { item: "asiento (unrendered pork-lard residue)", qty: "1/4 cup", cost: 0.4, spansWeeks: true },
    { item: "quesillo (Oaxaca string cheese), shredded", qty: "1 1/2 cups", cost: 2.4, spansWeeks: true },
    { item: "tasajo (thin air-dried beef)", qty: "1/2 lb", cost: 2.2 },
    { item: "cabbage or lettuce, shredded; avocado; salsa roja", qty: "to dress", cost: 0.9 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Warm a tlayuda on a wide comal until it loses its chill and turns pliable, then smear the center with a film of asiento.",
    "Spread a generous layer of refried black beans, scatter shredded quesillo over the top, and lay on the cheese while the disc is still flat.",
    "Sear the salted tasajo hard and fast on the comal until it chars at the edges, slice it into strips, and arrange it over the cheese.",
    "Fold the tlayuda in half over the filling and set it back over the fire, turning once, until the masa crackles and blisters and the quesillo runs.",
    "Open it at the table and dress with shredded cabbage, sliced avocado, and a spoon of salsa roja.",
  ],
  modernMove:
    "Use semi-dried tlayudas, not fresh tortillas — the partial drying is what lets the disc crisp to a true crackle over coals without turning to leather, the textural signature that separates a tlayuda from a giant quesadilla.",
  notes:
    "Drop the tasajo and it is a vegetarian tlayuda; the beans plus quesillo still carry the protein. One disc genuinely feeds one hungry person.",
  zeroWasteHero: false,
  tags: ["masa", "oaxacan", "frijoles", "quesillo", "dinner"],
  sources: [
    {
      title: "Authentic Food Quest — Tlayudas Oaxaca Style",
      url: "https://authenticfoodquest.com/oaxaca-tlayudas-recipe/",
      note: "asiento + refried black beans + quesillo + tasajo layering and fold-over-coals method",
    },
  ],
};
