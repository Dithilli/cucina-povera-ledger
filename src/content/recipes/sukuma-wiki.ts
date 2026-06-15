import type { Recipe } from "../types";

export const sukumaWiki: Recipe = {
  slug: "sukuma-wiki",
  title: "Sukuma Wiki",
  cuisine: "east-african",
  blurb:
    "Collards shredded fine and fried down with onion and tomato until silky but still green — the everyday greens whose name means \"stretch the week,\" because a bunch and an onion feed a family for cents.",
  servings: 4,
  perServing: { calories: 180, protein: 6 },
  estCostPerServing: 0.5,
  roles: ["side", "base"],
  ingredients: [
    { item: "collard greens (sukuma), stacked and finely shredded", qty: "1 large bunch", cost: 0.9 },
    { item: "onion, sliced thin", qty: "1 medium", cost: 0.25 },
    { item: "tomatoes, chopped", qty: "2 medium", cost: 0.4 },
    { item: "cooking oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "Royco / beef cube (mchuzi mix)", qty: "1 cube", cost: 0.1, spansWeeks: true },
    { item: "salt + pinch pilipili (chili)", qty: "to taste", spansWeeks: true },
    { item: "dhania (cilantro), chopped", qty: "small handful", cost: 0.15 },
  ],
  method: [
    "Heat the oil in a wide pan and fry the onion until soft and just golden.",
    "Add the tomatoes and crumble in the Royco cube; cook down 4–5 minutes until they collapse into a loose sauce.",
    "Pile in the shredded collards and toss to coat, then fry, stirring, 5–8 minutes until wilted and glossy but still bright green and a little toothsome.",
    "Season with salt and a pinch of pilipili, fold through the dhania off the heat, and serve alongside ugali.",
  ],
  modernMove:
    "Shred the leaves as thin as ribbons and keep the heat high and the cook short — you want them collapsed and silky, not stewed grey, so they keep their green snap against the bland ugali.",
  notes:
    "The literal everyday green of Kenyan and Tanzanian tables; cheap, fast, and endlessly stretched, which is exactly what the Swahili name promises.",
  zeroWasteHero: false,
  tags: ["greens", "collards", "sukuma-wiki", "side", "east-african"],
  sources: [
    {
      title: "Tania Sheff — Low Carb Africa",
      url: "https://lowcarbafrica.com/sukuma-wiki-kenyan-collard-greens/",
      note: "Onion and tomato fried down first, then finely shredded collards tossed in and cooked just until silky.",
    },
  ],
};
