import type { Recipe } from "../types";

export const daboKolo: Recipe = {
  slug: "dabo-kolo",
  title: "Dabo Kolo",
  cuisine: "ethiopian",
  blurb:
    "Tiny fried, mildly spiced barley-or-wheat nuggets — the crunchy snack and travel food of the highlands, made from almost nothing and keeping for weeks in a jar.",
  servings: 6,
  perServing: { calories: 200, protein: 5 },
  estCostPerServing: 0.25,
  roles: ["side"],
  ingredients: [
    { item: "wheat flour (or barley flour)", qty: "2 cups", cost: 0.6 },
    { item: "oil or niter kibbeh", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "berbere or chile powder", qty: "1 tsp", cost: 0.15, spansWeeks: true },
    { item: "sugar + salt", qty: "1 tsp each", cost: 0.1, spansWeeks: true },
    { item: "water", qty: "about 1/2 cup" },
  ],
  method: [
    "Mix the flour with the salt, sugar, berbere, and oil, then add just enough water to form a stiff, smooth dough. Knead a few minutes and rest 15 minutes.",
    "Pinch off pieces and roll each into a thin rope, then cut the ropes into tiny pea-sized nuggets.",
    "Toast/fry the nuggets in a dry or lightly oiled pan over medium heat, stirring constantly, until golden, hard, and crunchy — 15–20 minutes. (They can also be baked.)",
    "Cool completely; they'll crisp up further. Store airtight — they keep for weeks.",
  ],
  modernMove:
    "Roll the ropes thin and cut them small so they cook evenly into hard little pellets; keep them moving in the pan like you're toasting nuts. Spice them up with extra berbere for a savory version or keep them barely sweet for tea.",
  notes:
    "The original shelf-stable travel snack of the highlands — a fistful of flour and spice that lasts the journey. A festive cousin of the everyday injera-and-wot table.",
  tags: ["snack", "barley", "wheat", "fried", "shelf-stable"],
};
