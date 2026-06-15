import type { Recipe } from "../types";

export const bolinhoDeBacalhau: Recipe = {
  slug: "bolinho-de-bacalhau",
  title: "Bolinho de Bacalhau",
  cuisine: "brazilian",
  blurb:
    "Quenelles of desalted salt cod folded into fluffy mashed potato with parsley, fried into golden ovals — the boteco fritter that turns a scrap of preserved fish into a feast.",
  servings: 2,
  perServing: { calories: 480, protein: 26 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "salt cod (bacalhau), desalted and flaked", qty: "5 oz", cost: 2.0 },
    { item: "potatoes, boiled and mashed", qty: "2 medium", cost: 0.5 },
    { item: "onion and garlic, minced", qty: "1/2 onion + 1 clove", cost: 0.2 },
    { item: "egg", qty: "1", cost: 0.25 },
    { item: "parsley, salt, pepper", qty: "to season", cost: 0.1, spansWeeks: true },
    { item: "neutral oil for frying", qty: "for frying", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Soak the salt cod in cold water 24 hours, changing the water several times, then poach briefly and flake it, picking out skin and bones.",
    "Mash the boiled potato while warm and fold in the flaked cod, sautéed onion and garlic, the egg, and a fistful of chopped parsley.",
    "Using two spoons, shape the mixture into football-shaped quenelles (bolinhos) about 1 1/2 inches long.",
    "Fry at 350°F, turning, until deep golden and crisp. Drain on paper and serve hot with a wedge of lime.",
  ],
  modernMove:
    "Quenelle with two spoons rather than rolling balls — the rough surface fries crispier, and keep the potato-to-cod ratio generous so the inside stays cloud-light.",
  notes: "The 24-hour soak is the whole job; do it ahead and the fritters come together in minutes.",
  zeroWasteHero: false,
  tags: ["boteco", "bacalhau", "fritter", "brazilian"],
  sources: [
    {
      title: "Bolinho de Bacalhau — Today / Chef Leticia Moreinos Schwartz",
      url: "https://www.today.com/recipes/bolinho-de-bacalhau-brazilian-salt-cod-fritters-t36661",
      note: "24-hour desalting soak and cod-and-potato quenelle method",
    },
  ],
};
