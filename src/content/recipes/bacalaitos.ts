import type { Recipe } from "../types";

export const bacalaitos: Recipe = {
  slug: "bacalaitos",
  title: "Bacalaítos",
  cuisine: "puerto-rican",
  blurb:
    "Thin, lacy salt-cod fritters fried wide and crisp at the edges — the splatter-and-crackle kiosko snack that turns a few flakes of bacalao into a plate big as your hand.",
  servings: 2,
  perServing: { calories: 540, protein: 20 },
  estCostPerServing: 1.5,
  roles: ["dinner"],
  ingredients: [
    { item: "salt cod (bacalao), desalted and flaked", qty: "4 oz", cost: 1.6 },
    { item: "all-purpose flour", qty: "1 cup", cost: 0.2 },
    { item: "sofrito (recaíto)", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "baking powder", qty: "1 tsp", cost: 0.03, spansWeeks: true },
    { item: "sazón + adobo + black pepper", qty: "1/2 tsp each", cost: 0.05, spansWeeks: true },
    { item: "cold water", qty: "1 cup", cost: 0.0 },
    { item: "neutral oil for frying", qty: "for frying", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Soak the salt cod in cold water overnight (or boil and drain twice), then flake it, picking out any skin and bone.",
    "Whisk flour, baking powder, sazón, adobo and pepper, then beat in cold water to a thin, pourable batter — looser than pancake batter — and fold in the flaked cod and sofrito.",
    "Heat oil to about 360°F. Ladle the batter in so it spreads into wide, thin discs.",
    "Fry until the edges go lacy and deep golden, flip once, then drain on paper and serve at once while shatteringly crisp.",
  ],
  modernMove:
    "Keep the batter thin and the oil hot so the fritters spread and crackle at the rim instead of puffing into doughy pillows.",
  notes: "The overnight soak does the seasoning work — taste a flake before salting the batter.",
  zeroWasteHero: false,
  tags: ["fritura", "bacalao", "puerto-rican"],
  sources: [
    {
      title: "Delish D'Lites — Bacalaitos (Puerto Rican Salt Cod Fritters)",
      url: "https://www.delishdlites.com/course/snack-recipes/bacalaitos-puerto-rican-salt-cod-fritters/",
      note: "thin seasoned batter with sofrito and adobo, fried wide and lacy",
    },
  ],
};
