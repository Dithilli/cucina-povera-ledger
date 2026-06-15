import type { Recipe } from "../types";

export const karedok: Recipe = {
  slug: "karedok",
  title: "Karedok",
  cuisine: "indonesian",
  blurb:
    "The Sundanese raw-vegetable salad — crisp uncooked beans, cucumber, cabbage, and Thai basil tossed in a rough peanut sauce built around kencur and raw chili.",
  servings: 4,
  perServing: { calories: 450, protein: 18 },
  estCostPerServing: 1.25,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "long beans, thinly sliced raw", qty: "6 oz", cost: 0.7 },
    { item: "cabbage, finely shredded", qty: "1/4 head", cost: 0.4 },
    { item: "cucumber, diced", qty: "1", cost: 0.5 },
    { item: "bean sprouts", qty: "1 1/2 cups", cost: 0.4 },
    { item: "small eggplant or baby eggplant, sliced thin", qty: "1", cost: 0.6 },
    { item: "Thai basil (kemangi) leaves", qty: "1 handful", cost: 0.4 },
    {
      item: "roasted peanuts (or unsweetened peanut butter)",
      qty: "1 cup",
      cost: 1.2,
    },
    { item: "garlic clove", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "fresh red chilies", qty: "2", cost: 0.2, spansWeeks: true },
    { item: "kencur (aromatic ginger) or fresh ginger", qty: "1 tsp", cost: 0.2, spansWeeks: true },
    { item: "palm sugar (or brown sugar)", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "tamarind paste", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "kaffir lime juice or regular lime", qty: "1/2", cost: 0.15 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Pound the peanuts with garlic, raw chilies, kencur, palm sugar, tamarind, and salt into a thick, rough paste — karedok sauce is deliberately coarse and pungent.",
    "Slacken the paste with a splash of warm water and lime juice until just spoonable. Taste for a sharp sweet-sour-hot balance.",
    "Slice all the vegetables thin and raw, including the eggplant, so they stay crunchy and drink up the sauce.",
    "Toss everything together with the basil right before serving — karedok is dressed à la minute so nothing weeps or wilts.",
  ],
  modernMove:
    "Kencur and raw chili pounded into the peanut base give karedok a cool, almost menthol heat you only get from a raw sauce — cooking it would flatten exactly the thing that defines the dish.",
  notes:
    "If kencur is unavailable, fresh ginger plus a pinch of galangal approximates its sharp, camphor edge.",
  tags: ["peanut-sauce", "raw", "salad", "sundanese", "vegetables"],
  sources: [
    { title: "Marvellina — What To Cook Today", url: "https://whattocooktoday.com/karedok-west-javanese-vegetable-salad-with-sweet-and-sour-dressing.html", note: "raw Sundanese vegetable mix and kencur in the dressing" },
    { title: "Wikipedia — Karedok", url: "https://en.wikipedia.org/wiki/Karedok", note: "Sundanese origin, kencur peanut sauce, and contrast with gado-gado" },
  ],
};
