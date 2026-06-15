import type { Recipe } from "../types";

export const nemRan: Recipe = {
  slug: "nem-ran",
  title: "Nem Rán",
  cuisine: "vietnamese",
  blurb:
    "Northern fried spring rolls — a little ground pork bound with wood-ear mushroom, glass noodles, and shredded vegetables, rolled tight in rice paper and fried to a glassy crunch, eaten with lettuce, herbs, and nước chấm.",
  servings: 4,
  perServing: { calories: 620, protein: 23 },
  estCostPerServing: 1.35,
  roles: ["dinner"],
  ingredients: [
    { item: "ground pork", qty: "8 oz", cost: 2.0 },
    { item: "dried wood-ear mushrooms, soaked and chopped", qty: "1/4 cup", cost: 0.4, spansWeeks: true },
    { item: "dried glass (mung bean) noodles, soaked and cut", qty: "2 oz", cost: 0.4, spansWeeks: true },
    { item: "carrot, grated", qty: "1", cost: 0.3 },
    { item: "onion or shallot, minced", qty: "1 small", cost: 0.2 },
    { item: "egg", qty: "1", cost: 0.3 },
    { item: "rice paper rounds (bánh tráng)", qty: "16–20", cost: 1.0, spansWeeks: true },
    { item: "fish sauce, sugar, black pepper (to season the filling)", qty: "to taste", cost: 0.2, spansWeeks: true },
    { item: "neutral oil, for frying", qty: "for shallow/deep fry", cost: 0.8, spansWeeks: true },
    { item: "leaf lettuce + mixed herbs (mint, cilantro, perilla)", qty: "to serve", cost: 1.5 },
    { item: "fish sauce, sugar, lime, garlic, chili (for nước chấm)", qty: "to taste", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Mix the pork with the drained wood-ear, glass noodles, carrot, onion, egg, fish sauce, sugar, and plenty of black pepper. Keep the filling loose — packed too tight, the rolls fry up dense.",
    "Dip a rice paper briefly in warm water (a sugar-water dip helps it blister) until just pliable. Lay a tablespoon of filling near the edge, fold in the sides, and roll tight into a firm cigar.",
    "Heat about an inch of oil to a steady medium. Fry the rolls in batches without crowding, turning, until deep gold and crisp all over, ~6–8 minutes. Drain on a rack.",
    "Make a bright nước chấm of fish sauce, sugar, lime, water, minced garlic, and chili — sharper than you think you want.",
    "Serve the rolls hot, each one wrapped in lettuce with herbs and dunked in the sauce. Steamed rice or a nest of vermicelli alongside turns it into a full dinner.",
  ],
  modernMove:
    "Wood-ear and glass noodles stretch a half-pound of pork into 16+ rolls while adding crunch — the meat is a binder, not the bulk. A second, slower fry (or an air-fryer finish) just before serving brings back the shatter if you fry ahead.",
  notes:
    "Roll tight and fry at a steady medium so they cook through without burning. Fried rolls freeze well raw — fry from frozen.",
  tags: ["fried", "spring-rolls", "pork", "glass-noodles", "wood-ear", "northern", "wrap"],
  sources: [
    {
      title: "Helen's Recipes — Vietnamese Fried Spring Rolls (Chả Giò / Nem Rán)",
      url: "https://helenrecipes.com/recipe-vietnamese-fried-spring-roll-cha-gionem-ran/",
      note: "Pork filling bound with wood-ear and glass noodles, rolled and fried crisp",
    },
    {
      title: "RunAwayRice — Egg Rolls (Cha Gio / Nem Ran)",
      url: "https://runawayrice.com/appetizers/everyones-favorite-egg-rolls/",
      note: "Loose filling, rolling tight, and frying at steady heat for the shatter",
    },
  ],
};
