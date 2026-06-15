import type { Recipe } from "../types";

export const borscht: Recipe = {
  slug: "borscht",
  title: "Borscht",
  cuisine: "ashkenazi",
  blurb:
    "Beets simmered down into a deep garnet soup, given heft with cabbage, potato, and a handful of white beans, then sharpened with vinegar and balanced with a little sugar — the cellar's whole winter in one ruby bowl, served hot.",
  servings: 6,
  perServing: { calories: 360, protein: 14 },
  estCostPerServing: 0.55,
  roles: ["dinner"],
  ingredients: [
    { item: "beets, peeled and grated or diced", qty: "4 medium (about 1 1/2 lb)", cost: 1.2 },
    { item: "green cabbage, shredded", qty: "1/4 small head", cost: 0.4 },
    { item: "potato, peeled and diced", qty: "1 large", cost: 0.4 },
    { item: "dried white beans, soaked (or 1 can, drained)", qty: "3/4 cup dry", cost: 0.5 },
    { item: "onion, chopped", qty: "1", cost: 0.3 },
    { item: "carrot, grated", qty: "1", cost: 0.2 },
    { item: "vinegar (cider or white)", qty: "2–3 tbsp", cost: 0.1, spansWeeks: true },
    { item: "sugar", qty: "1–2 tsp", cost: 0.05, spansWeeks: true },
    { item: "neutral oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "If using dried beans, simmer them in plenty of unsalted water until tender, an hour or more; keep the cooking liquid. (Canned beans skip this.)",
    "Sweat the onion and carrot in the oil in a big pot until soft. Add the grated beets and let them cook a few minutes — they'll stain everything a fierce magenta.",
    "Pour in about 8 cups of water (use the bean liquor for part of it), add the potato, cabbage, beans, and bay leaf. Bring to a boil, then simmer until the beets are fully tender and the broth runs deep red, 30–40 minutes.",
    "Now the balance: add the vinegar and sugar a little at a time, tasting, until the soup snaps bright and sweet-tart against the earthy beet. Acid also fixes the color, keeping it ruby rather than dull. Season with salt and pepper.",
    "Serve hot, with bread or a boiled potato. It deepens overnight and is arguably better on day two.",
  ],
  modernMove:
    "A splash of acid does double duty: it sets that shocking ruby color (beet pigment fades to brown without it) and it cuts the soup's earthy sweetness. Add it near the end and tune by taste — the beets, cabbage, and carrot all bring their own sugar, so the vinegar is what keeps borscht from going flat.",
  notes:
    "As written this is pareve — good alongside any meal. The classic finish is a cold dollop of sour cream swirled into the hot soup, but that makes it milchig: stir it in only at a dairy meal, never one with meat on the table.",
  tags: ["beet", "soup", "pareve"],
  sources: [
    {
      title: "Wikipedia — Borscht",
      url: "https://en.wikipedia.org/wiki/Borscht",
      note: "Beet-based Eastern European sour soup; ingredients, color, and acid balance.",
    },
    {
      title: "Claudia Roden — The Book of Jewish Food",
      note: "Ashkenazi borscht traditions, including the pareve and sour-cream finishes.",
    },
  ],
};
