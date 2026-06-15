import type { Recipe } from "../types";

export const kukuSibzamini: Recipe = {
  slug: "kuku-sibzamini",
  title: "Kuku Sibzamini",
  cuisine: "persian",
  blurb:
    "The thriftiest kuku of all — boiled potato grated and bound with egg, turmeric and a little saffron into a golden, tender cake that fries up crisp at the edges.",
  servings: 4,
  perServing: { calories: 510, protein: 17 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    {
      item: "potatoes, boiled and cooled",
      qty: "1 lb (about 3 medium)",
      cost: 0.7,
    },
    { item: "eggs", qty: "5", cost: 1.25 },
    {
      item: "onion, grated and squeezed dry",
      qty: "1",
      cost: 0.3,
    },
    {
      item: "garlic clove, grated",
      qty: "1",
      cost: 0.05,
      spansWeeks: true,
    },
    {
      item: "turmeric",
      qty: "1 tsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "saffron, bloomed in 1 tbsp hot water (optional)",
      qty: "pinch",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "baking powder",
      qty: "1/2 tsp",
      cost: 0.05,
      spansWeeks: true,
    },
    {
      item: "parsley or chives, chopped (optional)",
      qty: "1/4 cup",
      cost: 0.3,
    },
    {
      item: "oil or ghee",
      qty: "4 tbsp",
      cost: 0.5,
      spansWeeks: true,
    },
    { item: "salt and black pepper", qty: "to taste" },
  ],
  method: [
    "Peel and coarsely grate or mash the cooled boiled potatoes — cooling first keeps them from going gluey.",
    "Beat the eggs with the turmeric, saffron water, baking powder, grated onion and garlic, salt and pepper.",
    "Fold the potato and herbs into the eggs until evenly combined; the mix should be thick and scoopable.",
    "Heat the oil in a wide nonstick pan over medium heat, spread the mixture flat and press to an even cake.",
    "Cover and cook 10–12 minutes until set and deeply golden underneath, then flip with a plate and cook the second side 6–8 minutes until crisp.",
    "Cut into wedges and serve hot or room-temperature with yogurt, flatbread and pickles.",
  ],
  modernMove:
    "Grating cooled, already-boiled potato (instead of raw) lets the kuku set quickly and stay fluffy inside while the egg-coated edges crisp — a fried-potato-and-egg dinner for under a dollar a plate.",
  zeroWasteHero: true,
  tags: ["kuku", "frittata", "eggs", "potato", "saffron", "meatless", "frugal"],
  sources: [
    {
      title: "Shadi Hasanzadenemati — Unicorns in the Kitchen",
      url: "https://www.unicornsinthekitchen.com/persian-potato-patties-recipe-kuku-sibzamini/",
      note: "Supports boiled-potato-and-egg kuku with turmeric and saffron, fried until golden.",
    },
  ],
};
