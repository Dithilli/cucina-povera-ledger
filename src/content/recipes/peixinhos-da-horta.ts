import type { Recipe } from "../types";

export const peixinhosDaHorta: Recipe = {
  slug: "peixinhos-da-horta",
  title: "Peixinhos da Horta (Battered Green Beans)",
  cuisine: "portuguese",
  blurb:
    "The 'little fish of the garden' — green beans in a light, lacy batter, fried until crisp. The lenten Portuguese dish that taught Japan tempura, all the meal of fish from a handful of beans.",
  servings: 4,
  perServing: { calories: 380, protein: 9 },
  estCostPerServing: 0.65,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "green beans, topped & tailed", qty: "1 lb", cost: 1.2 },
    { item: "plain flour", qty: "1 cup", cost: 0.2 },
    { item: "egg", qty: "1", cost: 0.2 },
    {
      item: "cold sparkling water or beer",
      qty: "about 3/4 cup",
      cost: 0.3,
    },
    {
      item: "neutral oil for frying",
      qty: "for frying",
      cost: 0.6,
      spansWeeks: true,
    },
    { item: "garlic clove, grated (into batter)", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "lemon wedges to serve", qty: "1", cost: 0.3 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Blanch the beans 2–3 minutes in salted boiling water until just tender but still bright, then drain well and pat completely dry.",
    "Whisk the flour, egg, grated garlic, and salt with just enough ICE-cold fizzy water to make a thin batter that barely coats — lumps are fine, do not overwork it, and keep it cold.",
    "Heat 1 inch of oil to about 180°C / 350°F. Dip the beans in batter a few at a time and lower into the oil; fry until pale gold and crisp, 2–3 minutes, turning once.",
    "Drain on paper, salt while hot, and serve straight away with lemon — they go soft as they sit, so eat them as they come out of the pan.",
  ],
  modernMove:
    "Cold fizzy water and a barely-mixed, lumpy batter give the lacy, blistered crust — this is literally the dish Portuguese missionaries carried to Japan, where it became tempura. Treat it like tempura: cold batter, hot oil, eat immediately.",
  notes:
    "A meat-free lenten dish — peixinhos da horta means 'little garden fish', eaten on fast days in place of fish. Works as a light dinner with bread and salad, or as a side to grilled fish or a tomato rice.",
  tags: ["green-beans", "fried", "batter", "lenten", "tempura-ancestor"],
};
