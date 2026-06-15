import type { Recipe } from "../types";

export const mahshiKoosa: Recipe = {
  slug: "mahshi-koosa",
  title: "Mahshi Koosa",
  cuisine: "levantine",
  blurb:
    "Small zucchini hollowed out and stuffed with herbed rice, then braised standing in a light tomato broth until meltingly soft — and the scooped flesh never goes to waste.",
  servings: 4,
  perServing: { calories: 500, protein: 11 },
  estCostPerServing: 0.9,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "small/medium zucchini (koosa)", qty: "8", cost: 2.4 },
    { item: "short-grain rice, rinsed", qty: "1 cup", cost: 0.5 },
    { item: "tomatoes, grated", qty: "3", cost: 0.75 },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "onion, finely chopped", qty: "1", cost: 0.3 },
    { item: "parsley and mint, chopped", qty: "1/2 cup", cost: 0.4 },
    {
      item: "olive oil",
      qty: "1/4 cup",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "garlic cloves, sliced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "dried mint and allspice", qty: "1 tsp each", cost: 0.15, spansWeeks: true },
    { item: "lemon, salt, black pepper", qty: "to taste", cost: 0.3 },
  ],
  method: [
    "Cut the tops off the zucchini and hollow them with a corer or small spoon, leaving thin walls. Save every scrap of the flesh.",
    "Make the filling: rinsed rice, one grated tomato, onion, half the herbs, dried mint, allspice, half the oil, salt, and pepper. Loosely fill each zucchini two-thirds full — the rice needs room to swell.",
    "Soften the chopped zucchini flesh and garlic in the rest of the oil, then add the remaining grated tomato and the tomato paste loosened with 2 cups water to make the braising broth.",
    "Stand the stuffed koosa upright (or pack them snugly) in the broth, weight with a plate, cover, and simmer low 40–45 minutes until the rice is cooked and the squash is tender. Finish with lemon and the remaining fresh herbs.",
  ],
  modernMove:
    "The scooped-out zucchini cores become the base of the braising broth, so nothing is thrown away — the shell and its insides cook the same dish from two angles.",
  zeroWasteHero: true,
  tags: ["zucchini", "stuffed", "rice", "tomato", "vegan", "zero-waste"],
};
