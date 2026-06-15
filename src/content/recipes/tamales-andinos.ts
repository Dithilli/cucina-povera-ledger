import type { Recipe } from "../types";

export const tamalesAndinos: Recipe = {
  slug: "tamales-andinos",
  title: "Tamales Andinos",
  cuisine: "andean",
  blurb:
    "Highland tamales built on coarse-ground Andean corn and queso andino, scented with cilantro and ají, wrapped in husks and steamed slow until the masa sets firm and fragrant.",
  servings: 5,
  perServing: { calories: 470, protein: 14 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh corn (choclo), kernels cut off", qty: "8 ears", cost: 4.0 },
    { item: "dried corn husks (or the fresh husks reserved)", qty: "1 packet", cost: 0.5 },
    { item: "fresh cheese (queso andino / fresco), diced", qty: "6 oz", cost: 1.5, spansWeeks: true },
    { item: "lard", qty: "1/4 cup", cost: 0.5, spansWeeks: true },
    { item: "onion, finely chopped", qty: "1", cost: 0.3 },
    { item: "garlic, ground ají amarillo, cumin", qty: "to taste", cost: 0.15, spansWeeks: true },
    { item: "cilantro (or culantro), chopped", qty: "1 handful", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste", cost: 0.02, spansWeeks: true },
  ],
  method: [
    "Soak dried husks in warm water until pliable (skip if using fresh husks). Grind the corn kernels to a coarse, creamy masa.",
    "Soften the onion, garlic, and ají in the lard, then beat this seasoned fat into the corn masa with the cumin, chopped cilantro, and salt until it is rich and spreadable.",
    "Lay a husk flat, spread a few spoonfuls of masa, press a cube or two of cheese into the center, then fold the sides and ends over into a snug parcel and tie with a strip of husk.",
    "Stand the tamales upright in a steamer over salted water, cover, and steam 1 to 1.5 hours until the masa is firm and lifts cleanly from the husk.",
    "Rest a few minutes, then unwrap and eat hot — with a spoon of ají sauce alongside.",
  ],
  modernMove:
    "Whipping the warm, seasoned lard into the masa before wrapping aerates it, so the tamales steam up light and tender rather than dense — the difference between a leaden parcel and a pillowy one.",
  notes:
    "Make a big batch on a cook day and steam the rest later: wrapped tamales freeze raw and go straight from freezer to steamer, a built-in dinner for a busy night. Husks are reused or composted.",
  zeroWasteHero: false,
  tags: ["corn", "choclo", "tamales", "steamed", "cheese", "peru", "andean"],
  sources: [
    {
      title: "Beyond Mere Sustenance — Peruvian Tamales",
      url: "https://beyondmeresustenance.com/peruvian-tamales/",
      note: "Andean corn masa enriched with seasoned lard and cheese, wrapped in husks and steamed",
    },
  ],
};
