import type { Recipe } from "../types";

export const mofongoRelleno: Recipe = {
  slug: "mofongo-relleno",
  title: "Mofongo Relleno",
  cuisine: "puerto-rican",
  blurb:
    "A garlicky plantain mash molded into a deep cup and filled with sofrito-stewed chicken — the everyday mofongo turned into a full dinner, the savory guiso pooling into every crevice of the pounded plantain.",
  servings: 2,
  perServing: { calories: 660, protein: 31 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "green plantains, peeled and cut in 1-inch rounds", qty: "3", cost: 1.2 },
    { item: "chicharrón or bacon", qty: "1 1/2 oz", cost: 0.75 },
    { item: "boneless chicken thighs, cubed", qty: "10 oz", cost: 1.4 },
    { item: "sofrito", qty: "1/4 cup", cost: 0.5, spansWeeks: true },
    { item: "tomato sauce", qty: "1/3 cup", cost: 0.3, spansWeeks: true },
    { item: "sazón con achiote", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "garlic cloves, mashed", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "olive oil", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "neutral oil for frying", qty: "2 cups", cost: 0.4, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste", cost: 0.04, spansWeeks: true },
  ],
  method: [
    "Make the guiso first: brown the cubed chicken in a little oil, stir in the sofrito and sazón, then the tomato sauce and a splash of water. Simmer covered 25–30 minutes until tender and saucy, then shred coarsely in its sauce.",
    "Soak the plantain rounds in salted water 10 minutes, then fry at 350°F for 5–7 minutes until soft and pale-golden. Drain.",
    "Pound the garlic with olive oil and salt in the pilón, then mash in the hot plantain and chicharrón until dense and cohesive.",
    "Press the warm mash up the sides of a small bowl to form a thick-walled cup, leaving a hollow in the center.",
    "Spoon the stewed chicken into the well, mounding it high, and ladle a little extra sauce over. Serve immediately while both are piping hot.",
  ],
  modernMove:
    "Shred the chicken into its own sauce rather than leaving it cubed — the saucy threads pack into the plantain cup and the mofongo soaks up the guiso from the inside instead of sitting beside it.",
  notes:
    "Swap the filling freely: pollo guisado, carne guisada, or a garlicky shrimp al ajillo all belong in the cup. Make the mofongo cup the moment you serve — it stiffens as it cools.",
  zeroWasteHero: false,
  tags: ["dinner", "plantain", "chicken", "sofrito", "stuffed", "puerto-rican"],
  sources: [
    {
      title: "TasteAtlas — Mofongo Relleno with Stewed Chicken",
      url: "https://www.tasteatlas.com/mofongo/recipe/mofongo-relleno-with-stewed-chicken",
      note: "Molding the pounded plantain into a cup and filling it with sofrito-stewed chicken",
    },
  ],
};
