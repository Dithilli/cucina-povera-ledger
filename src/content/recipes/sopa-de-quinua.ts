import type { Recipe } from "../types";

export const sopaDeQuinua: Recipe = {
  slug: "sopa-de-quinua",
  title: "Sopa de Quinua",
  cuisine: "andean",
  blurb:
    "The everyday brothy soup of the Andes — quinoa simmered with potato, carrot, and a whisper of cumin and oregano until the grains burst their little white spirals into a warming, protein-rich bowl.",
  servings: 4,
  perServing: { calories: 320, protein: 11 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "quinoa, rinsed well", qty: "3/4 cup", cost: 0.9 },
    { item: "potato, peeled and diced", qty: "2 medium", cost: 0.6 },
    { item: "carrot, diced", qty: "1", cost: 0.2 },
    { item: "onion, finely chopped", qty: "1", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "tomato, chopped", qty: "1", cost: 0.3 },
    { item: "cumin, dried oregano, salt, pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
    { item: "vegetable or chicken stock (or water)", qty: "6 cups", cost: 0.3 },
    { item: "fresh cilantro, chopped, to finish", qty: "1 small handful", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Rinse the quinoa thoroughly under cold water to strip its bitter saponin coating — rub the grains and rinse until the water runs clear.",
    "In a soup pot, soften the onion and garlic in a little oil, then add the tomato, cumin, and oregano and cook until jammy.",
    "Add the stock, potato, carrot, and quinoa, bring to a simmer, and cook gently 20–25 minutes until the quinoa unfurls its translucent ring and the potato is tender.",
    "Season with salt and pepper, slacken with more hot water if it has thickened too much, and finish each bowl with cilantro.",
  ],
  modernMove:
    "Blooming the cumin and oregano in the sofrito before the liquid goes in — rather than dumping them into the broth — builds the deep, toasty backbone that distinguishes a great Andean quinoa soup from a thin one.",
  notes:
    "Endlessly forgiving: any odd vegetable (cabbage, leek, a heel of squash) goes in, and yesterday's cooked quinoa can be stirred in at the end to stretch the pot further.",
  zeroWasteHero: false,
  tags: ["quinoa", "soup", "potato", "vegetable", "one-pot", "peru", "andean"],
  sources: [
    {
      title: "Eat Peru — Sopa de Quinoa",
      url: "https://www.eatperu.com/sopa-de-quinoa/",
      note: "Andean one-pot of quinoa, potato, and vegetables seasoned with cumin and oregano",
    },
  ],
};
