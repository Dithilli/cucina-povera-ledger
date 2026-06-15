import type { Recipe } from "../types";

export const kalaChana: Recipe = {
  slug: "kala-chana",
  title: "Kala Chana",
  cuisine: "north-indian",
  blurb:
    "Nutty black chickpeas in a thin, peppery tamarind broth — high-protein, ultra-cheap, the kind of everyday dal-adjacent curry that lives on a tight budget.",
  servings: 4,
  perServing: { calories: 470, protein: 23 },
  estCostPerServing: 0.62,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "dried black chickpeas (kala chana), soaked overnight",
      qty: "1 1/4 cups",
      cost: 0.8,
    },
    { item: "onion, finely chopped", qty: "1", cost: 0.25 },
    { item: "ripe tomatoes, chopped", qty: "2", cost: 0.45 },
    { item: "garlic + ginger, crushed to a paste", qty: "4 cloves + 1 thumb", cost: 0.2, spansWeeks: true },
    { item: "tamarind pulp (or lemon)", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "neutral oil or ghee", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "cumin seeds + a pinch of asafoetida (hing)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "coriander, turmeric, chili powder, garam masala", qty: "spice blend", cost: 0.25, spansWeeks: true },
    { item: "salt; cilantro to finish", qty: "to taste", cost: 0.1 },
  ],
  method: [
    "Pressure-cook the soaked black chickpeas in salted water until tender but still holding their shape — they stay firmer and nuttier than white chana. Reserve the dark cooking liquid.",
    "Temper cumin and a pinch of hing in hot oil, then fry the onion until golden. Add ginger-garlic and cook off.",
    "Add the tomatoes with coriander, turmeric and chili and cook to a soft masala. Stir the tamarind through for a sour, almost smoky depth.",
    "Add the chickpeas with plenty of their cooking liquid — this curry is meant to be looser and brothier than rajma. Simmer 15 minutes, finish with garam masala and cilantro; serve with rice or roti.",
  ],
  modernMove:
    "The black chickpea's near-black cooking water isn't waste — built back in with tamarind it becomes the body of the broth, a free, savory stock most cooks pour down the drain.",
  tags: ["legumes", "black-chickpeas", "curry", "tamarind", "high-protein"],
  sources: [
    {
      title: "Swasthi Shreekanth — Swasthi's Recipes",
      url: "https://www.indianhealthyrecipes.com/kala-chana/",
      note: "Black chickpeas cooked tender in a spiced onion-tomato base, served brothy",
    },
  ],
};
