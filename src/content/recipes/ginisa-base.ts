import type { Recipe } from "../types";

export const ginisaBase: Recipe = {
  slug: "ginisa-base",
  title: "Ginisa (Garlic-Onion-Tomato Sauté)",
  cuisine: "filipino",
  blurb:
    "Gisa: garlic, then onion, then tomato, sweated in oil in that exact order until jammy. The aromatic foundation under a huge share of Filipino home cooking — give a Filipino cook garlic and an onion and a pot has already started.",
  servings: 6,
  perServing: { calories: 60, protein: 1 },
  estCostPerServing: 0.17,
  roles: ["base"],
  ingredients: [
    { item: "garlic cloves, minced", qty: "6", cost: 0.25, spansWeeks: true },
    { item: "red onion, diced", qty: "1 large", cost: 0.45 },
    { item: "ripe tomatoes, diced", qty: "2", cost: 0.6 },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "fish sauce (patis)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt, black pepper", qty: "to taste" },
  ],
  method: [
    "Warm the oil over medium heat and add the garlic first. Let it sizzle and turn pale gold and fragrant — garlic always leads in a ginisa, blooming its flavor into the oil before anything wetter can stop it from browning.",
    "Add the onion and sweat, stirring, until soft and translucent, 3 to 4 minutes. Don't rush it brown; you want it melting and sweet.",
    "Add the tomatoes and a splash of patis. Cook, mashing them down with the back of the spoon, until they collapse into a loose jam and the oil separates and reddens at the edges, 5 to 8 minutes.",
    "Season with salt and pepper. This gisa is now the launch point: tip in shrimp, mung beans, sayote, fish, or greens and build the dish from here.",
  ],
  modernMove:
    "The strict order — garlic, then onion, then tomato — is the technique, not pedantry. Each goes in only once the last has given up its flavor, so you build three layers of aromatics in one pan instead of stewing them flat together.",
  notes:
    "The everyday workhorse base for monggo, ginisang sayote, ginisang munggo, and countless tinola-adjacent dishes. Some cooks bloom a little ginger alongside the garlic for fish and chicken.",
  zeroWasteHero: true,
  tags: ["base", "aromatics", "ginisa", "sofrito", "garlic", "make-ahead", "vegan"],
};
