import type { Recipe } from "../types";

export const lenticchieInUmido: Recipe = {
  slug: "lenticchie-in-umido",
  title: "Lenticchie in Umido",
  cuisine: "italian",
  blurb:
    "Braised lentils with soffritto and tomato — the cheapest protein and calories there are, stewed into something deeply savory.",
  servings: 4,
  perServing: { calories: 360, protein: 22 },
  estCostPerServing: 0.55,
  roles: ["dinner", "lunch", "side"],
  ingredients: [
    {
      item: "dried lentils (brown or castelluccio), rinsed",
      qty: "1 1/2 cups",
      cost: 0.9,
    },
    {
      item: "onion, carrot, celery (soffritto), finely diced",
      qty: "1 onion, 1 carrot, 1 celery stalk",
      cost: 0.5,
    },
    { item: "garlic cloves; bay leaf", qty: "2 cloves, 1 bay", cost: 0.15, spansWeeks: true },
    {
      item: "tomato paste",
      qty: "2 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "olive oil, salt, pepper",
      qty: "3 tbsp oil",
      cost: 0.45,
      spansWeeks: true,
    },
  ],
  method: [
    "Build the soffritto slowly in olive oil until sweet. Add the garlic and tomato paste and cook until the paste darkens.",
    "Add the lentils and bay, then water (or brodo) to cover by a couple of inches.",
    "Simmer gently 25–35 minutes until the lentils are tender and the liquid has reduced to a loose sauce, mashing a few against the pot for body. Salt only once tender.",
    "Rest, finish with raw olive oil and pepper. Serve as is, on bread, or under a fried egg.",
  ],
  modernMove:
    "Cook the tomato paste until it caramelizes and toast the lentils briefly in the soffritto before adding water — that fond is the difference between flat and deep.",
  tags: ["legumes", "lentils", "stew", "protein-forward", "one-pot"],
};
