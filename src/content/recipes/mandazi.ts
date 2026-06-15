import type { Recipe } from "../types";

export const mandazi: Recipe = {
  slug: "mandazi",
  title: "Mandazi",
  cuisine: "east-african",
  blurb:
    "Lightly sweet, coconut-rich fried bread perfumed with cardamom, cut into puffy triangles and torn open over a mug of milky chai.",
  servings: 4,
  perServing: { calories: 460, protein: 8 },
  estCostPerServing: 0.55,
  roles: ["dinner"],
  ingredients: [
    { item: "all-purpose flour", qty: "3 cups", cost: 0.4 },
    { item: "coconut milk", qty: "1 cup", cost: 0.6 },
    { item: "sugar", qty: "1/3 cup", cost: 0.15, spansWeeks: true },
    { item: "ground cardamom", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "instant yeast", qty: "1 1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "pinch of salt", qty: "1/2 tsp" },
    { item: "neutral oil for deep-frying", qty: "for frying", cost: 0.6 },
  ],
  method: [
    "Whisk flour, sugar, cardamom, yeast, and salt; pour in the coconut milk and bring together into a soft, smooth dough.",
    "Knead a few minutes, then cover and let rise until doubled, about an hour.",
    "Roll the dough about 1 cm thick and cut into triangles or diamonds.",
    "Fry in medium-hot oil, turning once, until each piece puffs and turns deep golden — 1–2 minutes a side.",
    "Drain and serve warm with chai; they are meant to be less sweet and lighter than a Western doughnut.",
  ],
  modernMove:
    "Coconut milk for all the liquid is what gives mandazi their fragrant, tender crumb — water makes them bready and dull.",
  notes: "Cinnamon or nutmeg can stand in for, or join, the cardamom.",
  zeroWasteHero: false,
  tags: ["street", "fried", "bread", "coconut", "east-african", "swahili-coast"],
  sources: [
    {
      title: "Immaculate Bites — Mandazi (East African Doughnuts)",
      url: "https://www.africanbites.com/mandazi-east-african-doughnuts/",
      note: "Coconut-milk dough, cardamom, and the triangular cut and fry.",
    },
  ],
};
