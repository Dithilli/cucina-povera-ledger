import type { Recipe } from "../types";

export const kimchiJeon: Recipe = {
  slug: "kimchi-jeon",
  title: "Kimchi-jeon",
  cuisine: "korean",
  blurb:
    "The pancake that exists to rescue old kimchi — sour, over-fermented cabbage chopped into a thin batter and fried crisp-edged in a hot oiled pan. Nothing in the jar goes to waste, brine included.",
  servings: 4,
  perServing: { calories: 520, protein: 14 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  zeroWasteHero: true,
  ingredients: [
    {
      item: "well-fermented (sour) kimchi, chopped",
      qty: "1 1/2 cups",
      cost: 1.2,
    },
    {
      item: "kimchi brine from the jar",
      qty: "1/4 cup",
      cost: 0,
    },
    { item: "all-purpose flour", qty: "1 cup", cost: 0.3 },
    {
      item: "gochugaru (Korean chili flakes), for color",
      qty: "1 tsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "scallions, cut in 2-inch lengths",
      qty: "2",
      cost: 0.15,
    },
    { item: "egg (optional, for a richer batter)", qty: "1", cost: 0.25 },
    {
      item: "neutral oil, for frying",
      qty: "3 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "soy sauce, rice vinegar, sesame seeds (dipping sauce)",
      qty: "to serve",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "ice water", qty: "about 3/4 cup" },
  ],
  method: [
    "Chop the sour kimchi small and stir it together with the flour, the kimchi brine, gochugaru, and enough ice water to make a thin, pourable batter — looser than you think, so the pancake stays lacy and crisp, not bready. Beat in the egg if using.",
    "Fold in the scallions. Heat a generous slick of oil in a skillet until it shimmers — a hot, well-oiled pan is non-negotiable for the crackly edges.",
    "Pour the batter and spread it thin. Fry undisturbed 3–4 minutes until the underside is deep golden and crisp, then flip, press flat with the spatula, and add a little more oil down the sides to crisp the second face.",
    "Slide onto a board, cut into wedges, and serve hot with a soy–rice-vinegar dipping sauce scattered with sesame seeds.",
  ],
  modernMove:
    "The two frugal moves are using the sourest, most over-ripe kimchi (its acidity is a feature here, not a flaw) and pouring in the brine you'd otherwise throw away as the seasoning — then keeping the batter thin and the oil hot so it shallow-fries into lace instead of steaming into a thick cake.",
  tags: ["jeon", "pancake", "kimchi", "zero-waste", "pan-fried", "weeknight"],
  sources: [
    {
      title: "Maangchi — Kimchi pancake (Kimchijeon)",
      url: "https://www.maangchi.com/recipe/kimchijeon",
      note: "Using sour kimchi plus its brine in a thin batter, fried crisp in a well-oiled pan",
    },
  ],
};
