import type { Recipe } from "../types";

export const lentejasAndinas: Recipe = {
  slug: "lentejas-andinas",
  title: "Lentejas Andinas",
  cuisine: "andean",
  blurb:
    "A soft, ají-warmed lentil stew ladled over steamed rice — the Monday plate of the Andes, where a handful of cheap legumes feeds the whole table.",
  servings: 4,
  perServing: { calories: 560, protein: 23 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "brown lentils, rinsed", qty: "1 1/2 cups", cost: 1.0 },
    { item: "rice, to serve", qty: "1 1/2 cups dry", cost: 0.6 },
    { item: "onion, finely diced", qty: "1", cost: 0.3 },
    { item: "carrot, diced", qty: "1", cost: 0.2 },
    { item: "tomato, chopped", qty: "1", cost: 0.3 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "ají amarillo paste", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "cumin, oregano, bay, salt, pepper", qty: "to taste", cost: 0.2, spansWeeks: true },
    { item: "oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "cilantro, chopped", qty: "1 small handful", cost: 0.25 },
  ],
  method: [
    "Start the rice steaming separately so it's ready when the stew is.",
    "Soften the onion and carrot in the oil, add garlic, then the ají amarillo paste, cumin, and oregano and fry until fragrant. Stir in the tomato and cook to a thick base.",
    "Add the rinsed lentils, a bay leaf, and water to cover by two inches. Simmer 25–30 minutes until the lentils are tender but still hold their shape.",
    "Salt only in the last ten minutes so the skins stay soft. Crush a little against the pot to thicken, finish with cilantro, and spoon over the rice.",
  ],
  modernMove:
    "Salting late keeps lentil skins from toughening, and the ají amarillo is bloomed in oil rather than stirred in raw — that's what gives the stew its rounded, golden heat instead of a sharp bite.",
  notes:
    "Eaten with rice on Mondays across Peru. A spoon of salsa criolla over the top is the classic finish, and a fried egg makes it a full plate.",
  zeroWasteHero: false,
  tags: ["lentils", "legumes", "stew", "rice", "andean"],
  sources: [
    {
      title: "Morena Cuadra — Peru Delights",
      url: "https://perudelights.com/how-to-make-a-basic-lentil-soup/",
      note: "Peruvian ají-amarillo lentil base served over rice, the Monday lentejas tradition.",
    },
  ],
};
