import type { Recipe } from "../types";

export const dagaa: Recipe = {
  slug: "dagaa",
  title: "Dagaa (Omena)",
  cuisine: "east-african",
  blurb:
    "Protein for pennies — tiny dried silver fish from Lake Victoria dry-fried until nutty, then folded into a quick onion-tomato sauce so a cheap handful of fish becomes a savoury, mineral-rich relish for ugali.",
  servings: 4,
  perServing: { calories: 440, protein: 26 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "dried dagaa / omena (small dried fish)", qty: "2 cups (about 5 oz)", cost: 1.2 },
    { item: "onion, sliced", qty: "1 large", cost: 0.4 },
    { item: "tomatoes, chopped", qty: "2", cost: 0.5 },
    { item: "garlic and ginger, grated", qty: "2 cloves + thumb", cost: 0.15, spansWeeks: true },
    { item: "bird's-eye chilli (pilipili), minced", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "curry powder", qty: "1/2 tsp", cost: 0.03, spansWeeks: true },
    { item: "oil and salt", qty: "2 tbsp + to taste", cost: 0.15, spansWeeks: true },
    { item: "ugali (white maize meal), to serve", qty: "1 1/2 cups dry", cost: 0.6 },
    { item: "sukuma wiki (collards), shredded, to serve", qty: "1/2 lb", cost: 0.4 },
  ],
  method: [
    "Pick over the dagaa, removing any grit, then soak in warm water for 10 minutes and drain — this softens them and washes off excess salt and dust.",
    "Dry-fry the drained fish in a hot pan without oil until lightly browned and nutty, then set aside.",
    "In oil, fry the onion until golden, add garlic, ginger, chilli and curry powder and cook until fragrant.",
    "Add the tomatoes and cook to a soft sauce, then fold in the fish with a splash of water and simmer gently 5 minutes, stirring carefully so they don't break up.",
    "Salt to taste and serve with ugali and a side of sukuma wiki.",
  ],
  modernMove:
    "Soak then dry-fry before saucing — the soak pulls the harsh salt and the dry-fry toasts the fish so the finished relish reads nutty rather than fishy or bitter.",
  notes:
    "Omena is among the cheapest animal protein in Kenya, sun-dried on the shores of Lake Victoria; a small handful per person carries a whole plate of ugali and greens.",
  zeroWasteHero: false,
  tags: ["fish", "dried-fish", "kenyan", "lake-victoria", "east-african"],
  sources: [
    {
      title: "We Eat At Last — Dagaa / Omena Recipe",
      url: "https://weeatatlast.com/dagaa-omena-recipe/",
      note: "Soaking and dry-frying the dried fish, then simmering in an onion-tomato-chilli sauce; served with ugali and greens.",
    },
  ],
};
