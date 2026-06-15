import type { Recipe } from "../types";

export const tamalesDeFrijol: Recipe = {
  slug: "tamales-de-frijol",
  title: "Tamales de Frijol",
  cuisine: "mexican",
  blurb:
    "Masa beaten light with a little fat, spread on a corn husk around a line of beans, and steamed — the original portable meal, made days ahead and reheated all week.",
  servings: 6,
  perServing: { calories: 320, protein: 9 },
  estCostPerServing: 0.7,
  roles: ["breakfast", "lunch", "dinner"],
  ingredients: [
    { item: "masa harina (or fresh masa)", qty: "3 cups", cost: 1.0 },
    { item: "lard (or oil)", qty: "1/2 cup", cost: 0.7, spansWeeks: true },
    { item: "refried or seasoned beans", qty: "2 cups" },
    { item: "dried corn husks, soaked", qty: "20", cost: 0.8 },
    { item: "salt, baking powder, broth", qty: "as needed", spansWeeks: true },
  ],
  method: [
    "Beat the lard until fluffy, then work in the masa, salt, a pinch of baking powder, and warm broth until a dollop of the dough floats in water.",
    "Spread a thin layer of masa on each soaked husk, lay a line of beans down the center, and fold the husk around it.",
    "Stand the tamales upright in a steamer and steam 60–75 minutes, until the masa peels cleanly from the husk.",
    "Eat warm; they reheat (steam or comal) beautifully for days.",
  ],
  modernMove:
    "The float test is the whole game — properly aerated masa (fat beaten in until light, dough loose with broth) steams into a tender tamal instead of a dense brick.",
  notes: "Make a big batch on a Sunday; tamales are the meal-prep of Mesoamerica.",
  tags: ["masa", "beans", "tamales", "make-ahead", "steamed"],
};
