import type { Recipe } from "../types";

export const soySauceChowMein: Recipe = {
  slug: "soy-sauce-chow-mein",
  title: "Soy Sauce Pan-Fried Noodles",
  cuisine: "cantonese",
  blurb:
    "Thin egg noodles pressed flat and pan-fried until the bottom turns lacy and crisp, then tossed in a glossy dark-soy sauce with snappy bean sprouts and sweet scallion — the pantry noodle of the cha chaan teng, almost nothing in it but technique.",
  servings: 4,
  perServing: { calories: 470, protein: 14 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "thin Hong Kong egg noodles (chow mein)", qty: "14 oz", cost: 1.8 },
    { item: "mung bean sprouts", qty: "3 cups", cost: 0.8 },
    { item: "scallions, cut in 2-inch lengths", qty: "4", cost: 0.3 },
    { item: "onion, sliced (optional)", qty: "1/2", cost: 0.2 },
    { item: "dark soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "light soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "oyster sauce and sugar", qty: "1 tbsp + 2 tsp", cost: 0.2, spansWeeks: true },
    { item: "sesame oil", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "neutral oil", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Blanch the egg noodles for 20–30 seconds until just loosened, drain very well, and spread out to dry — wet noodles will steam instead of crisp.",
    "Stir the sauce: dark soy, light soy, oyster sauce, sugar, sesame oil, and a splash of water until the sugar dissolves.",
    "Heat oil in a wide pan over high heat. Lay the noodles in an even pad and pan-fry undisturbed until the underside is golden and crisp, then flip and crisp the other side.",
    "Push the noodles aside, throw in the scallion whites (and onion if using) for a few seconds, then return the noodles and pour the sauce around the rim. Toss fast to coat every strand.",
    "Add the bean sprouts and scallion greens last and toss just until the sprouts are hot but still snapping crisp. Serve immediately.",
  ],
  modernMove:
    "The whole dish lives or dies on dry noodles and a screaming-hot pan: pressing them into a still pad to crisp before you toss gives you that contrast of lacy-crunchy edges against soft strands. Adding the bean sprouts at the very end keeps them raw-crisp rather than limp.",
  notes:
    "About as frugal as a dinner gets — a packet of noodles, a fistful of sprouts, and the soy bottles already on the shelf. Dark soy does double duty here, lending both the mahogany colour and a faint sweetness, so you need almost nothing else.",
  zeroWasteHero: false,
  tags: ["noodles", "chow-mein", "cantonese", "pan-fried", "bean-sprouts", "vegetarian"],
  sources: [
    {
      title: "The Woks of Life — Cantonese Pan-fried Noodles with Soy Sauce",
      url: "https://thewoksoflife.com/cantonese-soy-sauce-pan-fried-noodles/",
      note: "Drying blanched noodles and crisping them in a still pad before tossing in a dark-and-light-soy sauce with sprouts added last.",
    },
  ],
};
