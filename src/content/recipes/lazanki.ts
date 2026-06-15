import type { Recipe } from "../types";

export const lazanki: Recipe = {
  slug: "lazanki",
  title: "Łazanki z Kapustą",
  cuisine: "polish",
  blurb:
    "Little squares of egg noodle tossed through buttery cabbage and crisp boczek — the fastest, thriftiest way Poland turns cabbage into a full dinner.",
  servings: 4,
  perServing: { calories: 540, protein: 17 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "łazanki or wide egg noodles cut into squares", qty: "10 oz", cost: 0.9 },
    { item: "white cabbage, shredded (or half kiszona kapusta)", qty: "1/2 head", cost: 0.7 },
    { item: "boczek (smoked bacon), diced", qty: "5 oz", cost: 1.4 },
    { item: "onion, diced", qty: "1 large", cost: 0.35 },
    { item: "butter or lard", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "caraway, salt, pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Render the diced boczek until crisp, lift some out to finish with, and soften the onion in the fat.",
    "Add the shredded cabbage with a little caraway and a splash of water; cook covered, then uncovered, until it's soft and lightly browned at the edges, 15–20 minutes.",
    "Meanwhile boil the noodle squares in salted water until just tender; drain and tip them straight into the cabbage so they don't clump.",
    "Toss everything with a knob of butter, season with salt and pepper, and scatter the reserved crisp boczek over the top.",
  ],
  modernMove:
    "Stir the drained noodles into the cabbage the instant they're off the heat — a few seconds late and the little squares glue together; coated in cabbage fat they stay separate.",
  notes:
    "Use half sauerkraut for a sharper, more wintry version. A genuine pantry dinner — noodles, cabbage, a scrap of bacon.",
  zeroWasteHero: false,
  tags: ["lazanki", "noodles", "cabbage", "boczek", "polish"],
  sources: [
    {
      title: "Everyday Healthy Recipes — Łazanki z Kapustą",
      url: "https://www.everydayhealthyrecipes.com/polish-pasta-cabbage-lazanki-kapusta/",
      note: "square egg noodles with cabbage, fried bacon and onion, caraway seasoning",
    },
  ],
};
