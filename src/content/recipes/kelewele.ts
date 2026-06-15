import type { Recipe } from "../types";

export const kelewele: Recipe = {
  slug: "kelewele",
  title: "Kelewele (Spiced Fried Plantain)",
  cuisine: "west-african",
  blurb:
    "Ghana's spiced cousin to dodo — ripe plantain cubes tossed in ginger, chilli and warm spice before frying, so each piece is sweet, fiery and aromatic. A street-corner snack that doubles as a frugal dinner with groundnuts.",
  servings: 4,
  perServing: { calories: 500, protein: 8 },
  estCostPerServing: 1.0,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "very ripe plantains, cubed", qty: "4", cost: 2.4 },
    { item: "fresh ginger, grated", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "cayenne or ground dried chilli", qty: "1–2 tsp", cost: 0.2, spansWeeks: true },
    { item: "ground nutmeg and cloves (or calabash nutmeg)", qty: "1/4 tsp each", cost: 0.2, spansWeeks: true },
    { item: "onion, grated, with its juice", qty: "1/2", cost: 0.2 },
    { item: "neutral oil for frying", qty: "1/2 cup", cost: 0.6, spansWeeks: true },
    { item: "salt", qty: "to taste" },
    { item: "roasted groundnuts, to serve", qty: "1/2 cup", cost: 0.5, spansWeeks: true },
  ],
  method: [
    "Use plantains ripe to the point of blackening skins — soft and sweet. Peel and cut into thick cubes.",
    "Make a wet spice paste: mix the grated ginger, chilli, nutmeg, cloves, grated onion with its juice, and salt. Toss the plantain cubes in it and let them marinate 10 to 15 minutes so the spice penetrates, not just coats.",
    "Heat the oil to medium. Lift the cubes from the marinade (let excess drip off, as wet paste can spit) and fry in batches.",
    "Fry, turning, until the spiced edges char-caramelize and the centres go soft — 3 to 4 minutes. Drain on paper.",
    "Serve hot, scattered with roasted groundnuts. With the nuts it's a full small supper; without, it's a spiced side beside stew or beans.",
  ],
  modernMove:
    "Marinating the plantain in a wet ginger-chilli paste before frying is the leap from plain dodo — the spice caramelizes onto each cube in the oil, so the heat and aromatics are built into the crust rather than dusted on after.",
  notes:
    "A Ghanaian night-market staple. Pairing it with roasted groundnuts adds the protein that turns a snack into a frugal dinner.",
  tags: ["plantain", "fried", "ginger", "chilli", "ghanaian", "groundnut", "side"],
  sources: [
    {
      title: "Kelewele — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Kelewele",
      note: "Ghanaian spiced fried plantain seasoned with ginger, cayenne and salt; an Accra street food served with peanuts.",
    },
    {
      title: "Ghanaian Kelewele Recipe — GhanaianRecipes.com",
      url: "https://www.ghanaianrecipes.com/ghanaian-kelewele-recipe/",
      note: "Choosing ripe (yellow, black-spotted) plantains and the wet-spice marinade before frying.",
    },
  ],
};
