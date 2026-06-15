import type { Recipe } from "../types";

export const azifa: Recipe = {
  slug: "azifa",
  title: "Azifa (Green Lentil Salad)",
  cuisine: "ethiopian",
  blurb:
    "A cool, sharp lentil salad — green lentils tossed with mustard, lemon, onion, and green chile. The bright, no-cook-once-the-lentils-are-done counterpoint to all the long-simmered wots.",
  servings: 4,
  perServing: { calories: 230, protein: 13 },
  estCostPerServing: 0.55,
  roles: ["side", "lunch"],
  ingredients: [
    { item: "green or brown lentils", qty: "1 1/2 cups cooked", cost: 0.9 },
    { item: "red onion, finely diced", qty: "1/2", cost: 0.2 },
    { item: "green chile (jalapeño/serrano), minced", qty: "1", cost: 0.2 },
    { item: "lemon or lime juice", qty: "2–3 tbsp", cost: 0.3 },
    { item: "mustard (Dijon or Ethiopian senafich)", qty: "1 tsp", cost: 0.15, spansWeeks: true },
    { item: "oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Cook the green lentils in plenty of water until just tender but still holding their shape, 20–25 minutes; drain and cool.",
    "Whisk the mustard, lemon juice, oil, and salt into a sharp dressing.",
    "Toss the cooled lentils with the dressing, diced onion, and minced green chile.",
    "Let it sit 15 minutes for the flavors to meld; serve cool, scooped with injera.",
  ],
  modernMove:
    "The acid and mustard do the work here — dress the lentils while barely warm so they drink in the vinaigrette, then chill. It's the Ethiopian table's built-in palate-cleanser against the rich wots.",
  notes:
    "A fasting-day favorite that needs no cooked sauce: cheap lentils plus pantry mustard and a lemon turn into something fresh and bracing.",
  tags: ["lentils", "salad", "azifa", "cold", "fasting"],
  sources: [
    { title: "Urban Farmie — Azifa (Ethiopian Lentil Salad)", url: "https://urbanfarmie.com/azifa-ethiopian-lentil-salad/", note: "Cold green-lentil salad dressed with senafich mustard, lemon, onion, and chile — a fasting-day favorite." },
    { title: "Fetlework Tefferi (Brundo Spice Co.) — Azifa", url: "https://www.brundo.com/blogs/recipes/azifa-ethiopian-lentil-salad", note: "Ethiopian chef's mustard-and-lemon lentil salad." },
  ],
};
