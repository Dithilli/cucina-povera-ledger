import type { Recipe } from "../types";

export const loMeinCt: Recipe = {
  slug: "lo-mein-ct",
  title: "Cantonese Lo Mein",
  cuisine: "cantonese",
  blurb:
    "Springy egg noodles boiled and tossed — never deep-fried — in a glossy soy-and-oyster sauce with crisp greens and a little sliced char siu, the home-cook's quick noodle that turns a few slivers of roast pork into a full bowl.",
  servings: 4,
  perServing: { calories: 540, protein: 22 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "lo mein egg noodles", qty: "14 oz", cost: 1.8 },
    { item: "char siu (Cantonese roast pork), sliced", qty: "6 oz", cost: 2.4 },
    { item: "gai lan or napa cabbage, cut", qty: "1 small bunch", cost: 0.7 },
    { item: "mung bean sprouts", qty: "2 cups", cost: 0.6 },
    { item: "scallions, cut in lengths", qty: "3", cost: 0.2 },
    { item: "garlic, minced", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "light soy, dark soy, oyster sauce, sugar (sauce)", qty: "to season", cost: 0.3, spansWeeks: true },
    { item: "sesame oil", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Boil the egg noodles until just al dente, drain, and rinse briefly under hot water to wash off surface starch so they don't clump; drain well.",
    "Stir the sauce: light soy, dark soy, oyster sauce, sugar, and sesame oil with a splash of water until the sugar dissolves.",
    "Heat oil in a wok over high heat, fry the garlic a few seconds, then add the tougher greens (gai lan stems first) and the sliced char siu to warm through.",
    "Add the drained noodles and pour the sauce around the rim. Toss continuously with tongs or chopsticks so every strand picks up colour and gloss without breaking.",
    "Fold in the bean sprouts, leafy greens, and scallions at the end and toss just until hot and crisp-tender. Serve straight from the wok.",
  ],
  modernMove:
    "Lo mein literally means 'tossed noodles' — the noodles are boiled, not fried, then lifted and folded through the sauce so they stay soft and slippery. Rinsing the par-cooked noodles strips surface starch so they coat evenly instead of gumming together.",
  notes:
    "The frugal trick is char siu as seasoning, not centrepiece: a few ounces of roast pork — or the trimmings and end-bits of a slab — flavour the whole bowl. Any firm vegetable in the crisper drawer works; the sauce and the toss are what make it Cantonese.",
  zeroWasteHero: false,
  tags: ["noodles", "lo-mein", "cantonese", "char-siu", "tossed", "greens"],
  sources: [
    {
      title: "The Woks of Life — Roast Pork Lo Mein",
      url: "https://thewoksoflife.com/pork-lo-mein/",
      note: "Boiling and rinsing the noodles, then tossing (not frying) through a soy-and-oyster sauce with char siu and greens.",
    },
  ],
};
