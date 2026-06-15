import type { Recipe } from "../types";

export const arrozConGandules: Recipe = {
  slug: "arroz-con-gandules",
  title: "Arroz con Gandules",
  cuisine: "puerto-rican",
  blurb:
    "Puerto Rico's national dish — long-grain rice stained marigold with achiote and sazón, simmered with pigeon peas, recaíto, and a handful of olives until the bottom crisps into pegao.",
  servings: 2,
  perServing: { calories: 620, protein: 18 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "long-grain white rice", qty: "1 cup", cost: 0.35 },
    { item: "gandules (pigeon peas), canned or cooked", qty: "1 cup", cost: 0.7 },
    { item: "sofrito / recaíto", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "tomato sauce", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "achiote (annatto) oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "sazón con culantro y achiote", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "manzanilla olives + a spoon of brine", qty: "6", cost: 0.2, spansWeeks: true },
    { item: "salt, oregano, bay leaf", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Warm the achiote oil in a caldero, then sauté the sofrito until fragrant, 2–3 minutes.",
    "Stir in the tomato sauce, sazón, olives with a splash of brine, oregano, and bay leaf; let it bubble into a thick base.",
    "Add the gandules with a little of their liquid and 1 3/4 cups water; bring to a hard boil and taste for salt — it should taste slightly seasoned.",
    "Stir in the rinsed rice, let the liquid boil down to the surface, then cover and steam on low 20–25 minutes.",
    "Resist stirring at the end so a golden crust of pegao forms on the bottom; fluff and serve.",
  ],
  modernMove:
    "Don't stir once it's covered — the crackly pegao at the bottom is the prize, and it only forms in an undisturbed, dry-bottomed pot.",
  notes: "A can of gandules and a spoon of homemade sofrito carry a whole pot; the olives season far past their cost.",
  zeroWasteHero: true,
  tags: ["rice", "gandules", "sofrito", "dinner", "puerto-rican"],
  sources: [
    {
      title: "Sense & Edibility — Arroz con Gandules",
      url: "https://senseandedibility.com/arroz-con-gandules-rice-pigeon-peas-puerto-rico/",
      note: "Achiote oil, sofrito, sazón, tomato sauce, olives, and gandules built into the national-dish rice with pegao.",
    },
  ],
};
