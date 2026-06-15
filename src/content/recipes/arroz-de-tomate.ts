import type { Recipe } from "../types";

export const arrozDeTomate: Recipe = {
  slug: "arroz-de-tomate",
  title: "Arroz de Tomate (Soupy Tomato Rice)",
  cuisine: "portuguese",
  blurb:
    "The Portuguese soupy rice — arroz malandrinho — where a long-cooked tomato refogado is loosened into a brothy, spoonable rice that should never be dry. A whole pantry dinner from an onion and a tin of tomatoes.",
  servings: 4,
  perServing: { calories: 520, protein: 11 },
  estCostPerServing: 0.78,
  roles: ["dinner"],
  ingredients: [
    { item: "ripe tomatoes (or a tin), grated/chopped", qty: "1 1/4 lb", cost: 1.1 },
    { item: "short or medium-grain rice", qty: "1 1/4 cups", cost: 0.7 },
    { item: "onion, finely diced", qty: "1", cost: 0.3 },
    { item: "garlic cloves, sliced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    {
      item: "olive oil",
      qty: "1/4 cup",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "flat-leaf parsley or coriander, chopped", qty: "1 handful", cost: 0.3 },
    { item: "salt, black pepper, pinch of sugar", qty: "to taste" },
    { item: "egg per person to poach in (optional)", qty: "4", cost: 0.8 },
  ],
  method: [
    "Make a proper refogado: soften the onion, garlic, and bay leaf low and slow in the olive oil until sweet and golden, never browned.",
    "Add the tomato, a pinch of sugar, salt and pepper, and cook it right down to a dark jammy base — this long reduction is where all the flavour comes from.",
    "Pour in about 5 cups of hot water and bring to a rolling simmer, then add the raw rice. Cook uncovered 12–15 minutes, stirring now and then.",
    "Pull it off while it is still distinctly soupy — malandrinho means a touch sloppy, the rice swimming in tomato broth, not a dry pilaf. If poaching eggs, crack them straight into the surface for the last 4 minutes. Finish with parsley and a thread of olive oil.",
  ],
  modernMove:
    "Cook the tomato refogado far longer than feels necessary, then flood it with water so the rice finishes loose and brothy. The contrast of a deep reduced base in a thin broth is what makes arroz de tomate taste like more than its three ingredients.",
  notes:
    "Serve immediately in deep bowls — soupy rice keeps cooking and tightens fast, so it is a make-and-eat dish, not a leftover one. A fried egg or a little grilled fish on top turns it into a full plate.",
  tags: ["tomato", "rice", "soupy", "refogado", "one-pot"],
};
