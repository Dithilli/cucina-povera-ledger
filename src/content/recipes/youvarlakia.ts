import type { Recipe } from "../types";

export const youvarlakia: Recipe = {
  slug: "youvarlakia",
  title: "Youvarlakia (Meatballs in Egg-Lemon Broth)",
  cuisine: "greek",
  blurb:
    "Rice-and-mince meatballs poached in their own broth — the rice swells the meat so a little mince makes many — then the broth is finished avgolemono.",
  servings: 4,
  perServing: { calories: 560, protein: 30 },
  estCostPerServing: 1.35,
  roles: ["dinner"],
  ingredients: [
    { item: "ground beef or beef-pork mince", qty: "12 oz", cost: 3.0 },
    { item: "short-grain rice (raw, mixed into the meat)", qty: "1/3 cup", cost: 0.2 },
    { item: "onion, grated", qty: "1", cost: 0.3 },
    { item: "egg (for the meatballs)", qty: "1", cost: 0.3, spansWeeks: true },
    { item: "eggs (for the avgolemono)", qty: "2", cost: 0.6, spansWeeks: true },
    { item: "lemons (juice of)", qty: "1 1/2", cost: 0.5, spansWeeks: true },
    { item: "flour for dusting", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "olive oil, salt, pepper, parsley/mint, dill", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Mix the mince with the raw rice, grated onion, one egg, chopped herbs, salt, and pepper. Roll into walnut-sized balls and dust lightly with flour.",
    "Bring a pot of lightly salted water (about 5 cups) with a splash of olive oil to a gentle simmer. Lower the meatballs in, cover, and poach gently for 35–40 minutes — the rice cooks inside the meat and thickens the broth.",
    "Pull the pot off the heat so the broth stops bubbling.",
    "Whisk the two eggs frothy, whisk in the lemon juice, then temper with ladlefuls of the hot broth, whisking constantly.",
    "Stir the egg-lemon back into the pot off the heat, swirling to coat the meatballs in a glossy, lemony sauce. Do not boil again. Serve hot.",
  ],
  modernMove:
    "Raw rice worked into the mince swells as it poaches, stretching the meat and releasing starch that helps the avgolemono cling — one bowl of mince becomes a full pot.",
  notes:
    "Youvarlakia means 'little round ones.' A winter staple that turns the cheapest mince into a complete, protein-rich dinner.",
  tags: ["meatballs", "beef", "rice", "avgolemono", "egg-lemon", "one-pot"],
};
