import type { Recipe } from "../types";

export const alcapurrias: Recipe = {
  slug: "alcapurrias",
  title: "Alcapurrias",
  cuisine: "puerto-rican",
  blurb:
    "A smooth masa of grated yautía and green banana wrapped around saucy beef picadillo, fried dark brown into the rugby-ball fritter sold from coolers up and down the island's beach roads.",
  servings: 2,
  perServing: { calories: 620, protein: 22 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "yautía (taro root), peeled", qty: "1/2 lb", cost: 0.6 },
    { item: "green bananas (guineos verdes), peeled", qty: "3", cost: 0.45 },
    { item: "ground beef", qty: "5 oz", cost: 1.0 },
    { item: "sofrito (recaíto)", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "tomato sauce", qty: "2 tbsp", cost: 0.1 },
    { item: "manzanilla olives, chopped", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "sazón con achiote + adobo", qty: "1/2 tsp each", cost: 0.05, spansWeeks: true },
    { item: "neutral oil for frying", qty: "for frying", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Brown the beef, drain the fat, then stir in sofrito, tomato sauce, olives, sazón and adobo and simmer until thick and saucy. Cool the picadillo.",
    "Grate the yautía and green bananas fine (a food processor works), season the masa with a little salt and a spoon of achiote oil so it turns golden.",
    "On an oiled banana leaf or parchment, spread a golf-ball of masa into a thin oval, spoon picadillo down the center, then fold the masa over to seal it into a rugby-ball shape with no gaps.",
    "Slide into 350°F oil and fry, turning once, until deep brown — not just golden — so the dense masa cooks all the way through. Drain and eat hot.",
  ],
  modernMove:
    "Fry to a true dark brown rather than pulling them pale; the thick root masa needs the extra minutes or the center stays gummy.",
  notes: "Yautía gives body and green banana gives flavor — keep both; banana alone fries greasy.",
  zeroWasteHero: false,
  tags: ["fritura", "puerto-rican"],
  sources: [
    {
      title: "Salima's Kitchen — Homemade Alcapurrias",
      url: "https://salimaskitchen.com/alcapurria/",
      note: "yautía-and-green-banana masa wrapped on a leaf and fried dark brown",
    },
  ],
};
