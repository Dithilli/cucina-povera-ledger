import type { Recipe } from "../types";

export const bacalhauGomesDeSa: Recipe = {
  slug: "bacalhau-gomes-de-sa",
  title: "Bacalhau à Gomes de Sá (Salt Cod with Potato, Onion, Egg and Olives)",
  cuisine: "portuguese",
  blurb:
    "Porto's beloved baked casserole: soaked salt cod layered with sliced potato and sweet stewed onion, soaked in good olive oil and baked, then crowned with hard-boiled egg, black olives, and parsley.",
  servings: 6,
  perServing: { calories: 560, protein: 28 },
  estCostPerServing: 1.45,
  roles: ["dinner"],
  ingredients: [
    { item: "salt cod (bacalhau), soaked 24–36 hrs, water changed often", qty: "3/4 lb", cost: 3.5 },
    { item: "waxy potatoes", qty: "2 lb", cost: 1.4 },
    { item: "onions, thinly sliced", qty: "3 large", cost: 0.9 },
    { item: "garlic cloves, sliced", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "hard-boiled eggs", qty: "3", cost: 0.75 },
    { item: "olive oil", qty: "1/2 cup", cost: 0.9, spansWeeks: true },
    { item: "black olives", qty: "1/3 cup", cost: 0.6 },
    { item: "milk (to steep the cod)", qty: "1 cup", cost: 0.3, spansWeeks: true },
    { item: "bay leaf, parsley, salt, black pepper", qty: "to taste", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Soak the salt cod 24–36 hours in cold water in the fridge, changing it often, until only gently salty. Poach gently 10 minutes, then drain, skin, bone, and flake into large pieces. Optionally steep the flaked cod in warm milk for 1–2 hours to soften and sweeten it.",
    "Boil the potatoes in their skins until just tender, cool slightly, peel, and slice into rounds.",
    "Stew the onions, garlic, and bay slowly in plenty of olive oil until soft, sweet, and golden — a true refogado.",
    "In an oiled baking dish, layer the potatoes, the flaked cod, and the stewed onions, seasoning lightly with pepper as you go. Pour over the oil from the onions plus a little more so it glistens.",
    "Bake at 200°C/400°F for about 30–40 minutes, until the edges crisp and turn golden. Finish with quartered hard-boiled eggs, black olives, and chopped parsley.",
  ],
  modernMove:
    "Steep the flaked cod in warm milk before baking: it draws out the last harsh salt and leaves the fish silky, so the casserole tastes rich rather than briny.",
  notes:
    "Created by José Luís Gomes de Sá, a Porto cod merchant. A textbook of frugality — three quarters of a pound of fish, a few eggs, and a bag of potatoes feed six.",
  tags: ["fish", "salt-cod", "bacalhau", "potato", "egg", "olives", "baked", "dinner"],
  sources: [
    { title: "David Leite — Bacalhau a Gomes de Sá (Leite's Culinaria)", url: "https://leitesculinaria.com/112173/recipes-bacalhau-a-gomes-de-sa.html", note: "Porto salt cod-potato-onion casserole with hard-boiled egg and olives" },
    { title: "196 flavors — Bacalhau à Gomes de Sá", url: "https://www.196flavors.com/portugal-bacalhau-a-gomes-de-sa/", note: "named after Porto cod merchant José Luís Gomes de Sá; layered cod, potato, onion, egg, olives" },
  ],
};
