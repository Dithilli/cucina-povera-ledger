import type { Recipe } from "../types";

export const mofongo: Recipe = {
  slug: "mofongo",
  title: "Mofongo",
  cuisine: "puerto-rican",
  blurb:
    "Green plantains fried in rounds, then pounded in the pilón with garlic, olive oil, and salty chicharrón until the mash turns dense, savory, and shot through with pork crackle — the African fufu reborn on a Caribbean island.",
  servings: 2,
  perServing: { calories: 610, protein: 21 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "green plantains, peeled and cut in 1-inch rounds", qty: "3", cost: 1.2 },
    { item: "chicharrón (pork cracklings) or bacon", qty: "2 oz", cost: 1.0 },
    { item: "garlic cloves, mashed to a paste", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "olive oil", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "neutral oil for frying", qty: "2 cups", cost: 0.4, spansWeeks: true },
    { item: "salt", qty: "to taste", cost: 0.02, spansWeeks: true },
    { item: "warm chicken broth, to moisten", qty: "1/4 cup", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Soak the plantain rounds in salted water 10 minutes while the oil heats to about 350°F — this keeps them from drying out and helps them fry up tender, not glassy.",
    "Fry the rounds 5–7 minutes until soft and lightly golden but not browned; you want them cooked through and mashable, not crisp. Drain on paper.",
    "In a pilón (or sturdy bowl), pound the garlic with the olive oil and a pinch of salt into a rough paste. Add a handful of hot plantain and the chicharrón and mash.",
    "Keep adding plantain and pounding, working the garlic oil and pork crackle all the way through, until you have a dense, cohesive mash flecked with crackling. Loosen with a splash of warm broth if stiff.",
    "Pack the warm mofongo into a small bowl or measuring cup and unmold onto the plate as a dome. Serve at once, with extra garlic oil or a cup of broth alongside.",
  ],
  modernMove:
    "The pilón isn't optional theater — pounding (not blending) keeps the garlic raw and aromatic and leaves the plantain with texture, so the chicharrón stays as distinct crunchy specks rather than dissolving into paste.",
  notes:
    "Use only green (unripe) plantains; yellow ones turn the mash sweet and gummy. Bacon stands in cleanly for chicharrón when you can't find good cracklings.",
  zeroWasteHero: false,
  tags: ["dinner", "plantain", "pork", "garlic", "fried", "puerto-rican"],
  sources: [
    {
      title: "Salima Benkhalti — Salima's Kitchen",
      url: "https://salimaskitchen.com/mofongo/",
      note: "Green-plantain fry-then-pound method with garlic, olive oil, and chicharrón in the pilón",
    },
  ],
};
