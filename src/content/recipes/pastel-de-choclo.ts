import type { Recipe } from "../types";

export const pastelDeChoclo: Recipe = {
  slug: "pastel-de-choclo",
  title: "Pastel de Choclo",
  cuisine: "andean",
  blurb:
    "A homely Andean casserole — a savory beef-and-onion filling studded with hard egg and an olive, blanketed under a thick lid of ground choclo that bakes up golden and lightly caramelized.",
  servings: 5,
  perServing: { calories: 540, protein: 19 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh corn (choclo), kernels cut off", qty: "6 ears", cost: 3.0 },
    { item: "ground beef (or a little, stretched with onion)", qty: "8 oz", cost: 2.0 },
    { item: "onions, finely diced", qty: "2", cost: 0.6 },
    { item: "eggs, hard-boiled and quartered", qty: "2", cost: 0.6, spansWeeks: true },
    { item: "black olives, pitted", qty: "8", cost: 0.4, spansWeeks: true },
    { item: "raisins", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "milk", qty: "1/2 cup", cost: 0.25, spansWeeks: true },
    { item: "cumin, ground ají or paprika, dried oregano, salt, pepper", qty: "to taste", cost: 0.1, spansWeeks: true },
    { item: "lard or oil, plus sugar for the top", qty: "2 tbsp + 1 tsp", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Make the pino: cook the onions in lard until soft and sweet, add the beef, cumin, ají, and oregano, and cook until browned and well seasoned. Stir in the raisins.",
    "Grind the corn kernels to a coarse paste and cook it gently with the milk and a little lard, stirring, until it thickens to a spoonable masa; season with salt.",
    "Spread the beef filling in a baking dish, tuck the quartered eggs and olives into it, then spread the corn masa over the top in an even lid.",
    "Sprinkle the top with a little sugar and bake at 400°F (200°C) for 40–50 minutes until bubbling and the corn lid is golden and caramelized at the edges.",
    "Let it settle a few minutes before serving so the layers hold.",
  ],
  modernMove:
    "The pinch of sugar across the corn lid is the whole trick — it caramelizes under the heat into a thin, bittersweet crust that plays against the salty olive and savory pino below.",
  notes:
    "A frugal stretch dish: half a pound of beef feeds five because the onions and the thick corn lid carry the bulk. Reheats well, the flavors only deepening overnight.",
  zeroWasteHero: false,
  tags: ["corn", "choclo", "casserole", "beef", "olive", "egg", "andean"],
  sources: [
    {
      title: "Jewish Food Society — Pastel de Choclo (Peruvian Corn and Beef Casserole)",
      url: "https://www.jewishfoodsociety.org/recipes/pastel-de-choclo-peruvian-corn-and-beef-casserole",
      note: "Seasoned beef-onion pino layered with egg and olives under a ground-corn lid, baked golden",
    },
  ],
};
