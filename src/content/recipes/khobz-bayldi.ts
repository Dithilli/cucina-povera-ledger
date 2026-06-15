import type { Recipe } from "../types";

export const khobzBayldi: Recipe = {
  slug: "khobz-bayldi",
  title: "Khobz Bayldi",
  cuisine: "moroccan",
  blurb:
    "The round country loaf that lives on every Moroccan table — a semolina-heavy disc with a crackling crust and a soft, golden, faintly chewy crumb made to be torn, never sliced.",
  servings: 6,
  perServing: { calories: 240, protein: 8 },
  estCostPerServing: 0.35,
  roles: ["dinner"],
  ingredients: [
    { item: "fine semolina (smida)", qty: "1 1/2 cups", cost: 0.7 },
    { item: "plain or whole-wheat flour", qty: "1 1/2 cups", cost: 0.3 },
    { item: "instant yeast", qty: "2 tsp", cost: 0.15, spansWeeks: true },
    { item: "sugar", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "1 1/2 tsp" },
    { item: "olive oil", qty: "2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "warm water", qty: "about 1 1/4 cups" },
    { item: "extra semolina, for dusting", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Bloom the yeast with the sugar in a little of the warm water for 5 minutes until foamy. Mix the semolina, flour, and salt, then work in the oil, yeast, and enough warm water to make a soft dough.",
    "Knead 8–10 minutes until smooth and springy — semolina dough wants a thorough knead — adding a touch of flour or water to keep it soft but not sticky.",
    "Divide in two, shape into rounds no thicker than about 1/2 inch, and set on a semolina-dusted tray. Dust the tops with semolina, cover, and prove 1 hour until puffy.",
    "Dock each loaf with a fork in several places to stop it doming, then bake at 430°F (220°C) for 15–20 minutes until golden all over and hollow-sounding when tapped underneath.",
    "Cool slightly on a rack and serve torn into pieces — the spoon, scoop, and side for every Moroccan soup, tagine, and salad.",
  ],
  modernMove:
    "Going heavy on semolina (smida) rather than all wheat flour is the whole identity of the bayldi loaf — it bakes up more golden, chewier, and sturdier, exactly the crumb you want for sopping up harira and bissara.",
  notes:
    "Eaten at literally every meal; bread is the utensil of the Moroccan table. Bake two while the oven's hot — day-old khobz is the foundation of rfissa, so nothing goes to waste.",
  zeroWasteHero: false,
  tags: ["bread", "moroccan", "semolina", "loaf", "staple"],
  sources: [
    {
      title: "Taste of Maroc — Moroccan Bread (Khobz) Recipe",
      url: "https://tasteofmaroc.com/moroccan-bread-khobz-recipe/",
      note: "Semolina-and-flour ratio, soft-dough knead, round shaping, docking, and the 220°C bake.",
    },
  ],
};
