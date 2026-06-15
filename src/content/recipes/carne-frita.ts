import type { Recipe } from "../types";

export const carneFrita: Recipe = {
  slug: "carne-frita",
  title: "Carne Frita",
  cuisine: "puerto-rican",
  blurb:
    "Cubes of pork shoulder marinated in garlic, sazón, oregano, and orange, then fried until each chunk wears a crackling cuerito edge over juicy meat — the lechonera classic, masitas de cerdo, piled next to crisp tostones.",
  servings: 3,
  perServing: { calories: 620, protein: 30 },
  estCostPerServing: 2.0,
  roles: ["dinner"],
  ingredients: [
    { item: "pork shoulder, cut in large cubes (skin on if possible)", qty: "1 1/2 lb", cost: 4.0 },
    { item: "garlic cloves, mashed", qty: "5", cost: 0.25, spansWeeks: true },
    { item: "sazón con achiote", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "dried oregano", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "orange, juiced", qty: "1", cost: 0.3, spansWeeks: true },
    { item: "olive oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
    { item: "oil for frying", qty: "2 cups", cost: 0.4, spansWeeks: true },
    { item: "green plantains for tostones", qty: "2", cost: 0.8 },
  ],
  method: [
    "Toss the pork cubes with the olive oil, then the mashed garlic, sazón, oregano, orange juice, salt, and pepper. Marinate at least 1 hour, or overnight.",
    "Heat about 2 inches of oil in a deep pan to roughly 350°F. Fry the pork in batches without crowding, 5–7 minutes a side, until deeply browned, crisp at the edges, and cooked through. Drain on paper.",
    "In the same oil, fry plantain rounds until pale and soft, smash them flat, and fry again until golden and crisp — your tostones. Salt while hot.",
    "Pile the carne frita with the tostones and a small dish of mayo-ketchup (mayoketchup) for dipping.",
  ],
  modernMove:
    "Leaving a little skin or fat cap on the cubes is what gives carne frita its signature cuerito crackle — the fat renders and crisps in the fry, turning a humble shoulder into something that shatters.",
  notes:
    "Also called masitas de cerdo or masitas de puerco. For extra-tender chunks, some cooks simmer the pork briefly before frying; the orange in the marinade brightens the rich meat.",
  zeroWasteHero: false,
  tags: ["dinner", "pork", "fried", "tostones", "garlic", "puerto-rican"],
  sources: [
    {
      title: "Andrea — Mexican Appetizers and More!",
      url: "https://mexicanappetizersandmore.com/carne-frita-fried-pork-chunks/",
      note: "Garlic-sazón-oregano-orange marinade and the deep-fry of pork chunks served with tostones",
    },
  ],
};
