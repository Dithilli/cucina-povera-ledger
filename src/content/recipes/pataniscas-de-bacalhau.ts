import type { Recipe } from "../types";

export const pataniscasDeBacalhau: Recipe = {
  slug: "pataniscas-de-bacalhau",
  title: "Pataniscas de Bacalhau (Salt Cod Fritters)",
  cuisine: "portuguese",
  blurb:
    "Flat, lacy salt cod fritters — flaked bacalhau, onion, garlic, and parsley folded into a loose batter and fried golden and craggy. The thriftiest use of cod scraps, classically eaten with tomato rice or beans.",
  servings: 4,
  perServing: { calories: 520, protein: 24 },
  estCostPerServing: 1.2,
  roles: ["dinner"],
  ingredients: [
    { item: "salt cod (bacalhau) or cod offcuts, soaked 24–36 hrs", qty: "1/2 lb", cost: 2.5 },
    { item: "plain flour", qty: "1 1/4 cups", cost: 0.3, spansWeeks: true },
    { item: "eggs", qty: "2", cost: 0.5 },
    { item: "onion, finely chopped", qty: "1", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "parsley, chopped", qty: "small bunch", cost: 0.3 },
    { item: "water or cod soaking/poaching liquid", qty: "about 3/4 cup", cost: 0 },
    { item: "olive or frying oil", qty: "for shallow frying", cost: 0.6, spansWeeks: true },
    { item: "salt, black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soak the salt cod 24–36 hours in cold water in the fridge, changing it often, until only gently salty. Poach a few minutes, drain (save the liquid), skin, bone, and shred finely.",
    "Whisk the flour, eggs, and enough water or saved cooking liquid to a thick pancake batter. Fold in the shredded cod, onion, garlic, and parsley; season with pepper and only a little salt.",
    "Heat a shallow layer of oil until shimmering. Drop in spoonfuls and spread to thin, ragged discs.",
    "Fry until deep golden and lacy at the edges, 2–3 minutes a side, turning once. Drain on paper.",
    "Serve hot with arroz de tomate or a pot of beans, and a squeeze of lemon or a drop of piri-piri.",
  ],
  modernMove:
    "Use the cod's own poaching water to slacken the batter — it carries the salt-fish savour right through the fritter, so nothing of the cod is wasted, not even the liquid it cooked in.",
  notes:
    "Pataniscas turn the smallest scraps and ends of bacalhau — too little to plate on their own — into a full, crowd-feeding dinner. Lisbon's classic frugal Friday meal.",
  zeroWasteHero: true,
  tags: ["fish", "salt-cod", "bacalhau", "fritters", "fried", "zero-waste", "dinner"],
};
