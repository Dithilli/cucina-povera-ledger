import type { Recipe } from "../types";

export const moteConQueso: Recipe = {
  slug: "mote-con-queso",
  title: "Mote con Queso",
  cuisine: "andean",
  blurb:
    "The plainest highland supper there is — big, chewy hominy kernels, slow-simmered until tender, spooned hot against slabs of fresh white cheese that soften into them.",
  servings: 4,
  perServing: { calories: 410, protein: 16 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "dried mote (hominy / nixtamalized corn)", qty: "2 cups", cost: 1.2 },
    { item: "fresh cheese (queso fresco), sliced thick", qty: "8 oz", cost: 2.0, spansWeeks: true },
    { item: "onion, halved (for the cooking water)", qty: "1/2", cost: 0.1 },
    { item: "salt", qty: "to taste", cost: 0.02, spansWeeks: true },
    { item: "ají or a little chopped chili, to serve (optional)", qty: "to taste", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Soak the dried mote overnight in plenty of cold water — it will swell and soften.",
    "Drain, cover with fresh water, add the onion half and a little salt, and simmer 1.5–2 hours until the kernels are tender and chewy but no longer chalky at the center, topping up the water as needed.",
    "Drain the hot mote, discard the onion, and check the salt.",
    "Pile the steaming hominy into bowls and lay the thick slices of fresh cheese over the top so they warm and soften against the corn. Pass ají for those who want heat.",
  ],
  modernMove:
    "Don't melt the cheese in — let the residual heat of the hominy soften it just to the edge of melting, so you still get cool, salty curds against the warm, nubbly kernels.",
  notes:
    "Cook a big pot of mote at once: what isn't eaten with cheese tonight goes into soup, salads, or alongside a stew all week. It freezes well, too.",
  zeroWasteHero: false,
  tags: ["mote", "hominy", "corn", "cheese", "bolivia", "andean"],
  sources: [
    {
      title: "Amigofoods Blog — Choclo con Queso (Peruvian Corn & Cheese)",
      url: "https://blog.amigofoods.com/index.php/peruvian-foods/choclo-con-queso/",
      note: "Andean corn-and-fresh-cheese pairing where the cheese softens against the hot corn",
    },
  ],
};
