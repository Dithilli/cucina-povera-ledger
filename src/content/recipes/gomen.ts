import type { Recipe } from "../types";

export const gomen: Recipe = {
  slug: "gomen",
  title: "Gomen (Collard Greens)",
  cuisine: "ethiopian",
  blurb:
    "Collard greens stewed soft with onion, garlic, and ginger until grassy and restorative — the green that balances the legume-heavy plate, garlicky and bright.",
  servings: 4,
  perServing: { calories: 150, protein: 5 },
  estCostPerServing: 0.55,
  roles: ["side", "lunch", "dinner"],
  ingredients: [
    { item: "collard greens (or kale), stemmed and chopped", qty: "1 large bunch", cost: 1.5 },
    { item: "onion, chopped", qty: "1", cost: 0.4 },
    { item: "garlic + ginger, minced", qty: "4 cloves / 1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "green chile, slivered", qty: "1", cost: 0.2 },
    { item: "oil or niter kibbeh", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Blanch or steam the chopped greens briefly to soften and set their color, then drain and squeeze.",
    "Soften the onion in the oil over medium heat, then add garlic, ginger, and chile and cook until fragrant.",
    "Add the greens and a splash of water, cover, and stew gently 15–25 minutes until completely tender and the harshness cooks out.",
    "Salt to taste and finish with a little niter kibbeh for richness. Serve on the platter alongside the wots.",
  ],
  modernMove:
    "Don't over-brown the aromatics — gomen should taste fresh and garlicky, not muddy. A blanch first keeps the greens vivid, and a knob of niter kibbeh at the end gives them a savory, buttery gloss.",
  notes:
    "Often served with a wedge of fresh ayib (a mild crumbly cheese), 'gomen be ayib,' which cools the greens and adds protein on a feast day.",
  tags: ["greens", "collards", "gomen", "side", "vegetable"],
};
