import type { Recipe } from "../types";

export const bibimbap: Recipe = {
  slug: "bibimbap",
  title: "Bibimbap",
  cuisine: "korean",
  blurb:
    "A bowl of warm rice crowned with a handful of seasoned namul, a fried egg, and a spoon of gochujang — the everyday way Korea turns three small vegetable dishes into one whole dinner.",
  servings: 4,
  perServing: { calories: 620, protein: 19 },
  estCostPerServing: 1.65,
  roles: ["dinner"],
  ingredients: [
    { item: "short-grain white rice", qty: "2 cups (dry)", cost: 1.0 },
    {
      item: "spinach, blanched and seasoned (sigeumchi-namul)",
      qty: "1 bunch",
      cost: 1.2,
    },
    {
      item: "soybean sprouts, parboiled and seasoned (kongnamul-muchim)",
      qty: "1/2 lb",
      cost: 0.8,
    },
    {
      item: "carrot, julienned and quickly stir-fried",
      qty: "1 large",
      cost: 0.4,
    },
    {
      item: "zucchini, julienned and quickly stir-fried",
      qty: "1",
      cost: 0.6,
    },
    { item: "eggs (one per bowl)", qty: "4", cost: 1.5 },
    {
      item: "gochujang, loosened with a little sesame oil and sugar",
      qty: "4 tbsp",
      cost: 0.8,
      spansWeeks: true,
    },
    {
      item: "toasted sesame oil and toasted sesame seeds, to finish",
      qty: "to taste",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "garlic, soy sauce, salt for seasoning the namul",
      qty: "to taste",
      cost: 0.3,
      spansWeeks: true,
    },
  ],
  method: [
    "Cook the rice and keep it warm. Prepare each vegetable as its own little namul: blanch the spinach and dress it with garlic, sesame oil, and salt; parboil the soybean sprouts and dress them likewise; stir-fry the carrot and zucchini separately in a film of oil with a pinch of salt so each keeps its own color and flavor.",
    "Loosen the gochujang into a glossy sauce with a teaspoon each of sesame oil and sugar and a splash of water — it should drizzle, not clump.",
    "Fry the eggs sunny-side up, leaving the yolks runny.",
    "Mound warm rice in each bowl, arrange the namul and stir-fried vegetables in separate piles around the edge, and set the egg in the center. Add a spoon of gochujang sauce, sesame seeds, and a few drops of sesame oil.",
    "At the table, break the yolk and mix everything together hard until the rice is evenly coated and warmed through — bibim means 'mixed,' and the dish only exists once it's stirred.",
  ],
  modernMove:
    "Season and cook each vegetable separately rather than tossing them together — the whole point is that every namul reads as itself until the moment you stir, so the bowl tastes layered instead of muddy.",
  notes:
    "Endlessly flexible: any leftover seasoned vegetable becomes a namul here, which is why bibimbap is the classic way to clear the week's banchan into one dinner.",
  tags: ["rice", "namul", "egg", "gochujang", "rice-bowl"],
};
