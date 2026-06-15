import type { Recipe } from "../types";

export const bolinhosDeBacalhau: Recipe = {
  slug: "bolinhos-de-bacalhau",
  title: "Bolinhos de Bacalhau (Salt Cod and Potato Cakes)",
  cuisine: "portuguese",
  blurb:
    "Portugal's national snack-turned-supper: flaked salt cod and riced potato bound with egg, parsley, and onion, shaped between two spoons into quenelles and fried crisp outside, fluffy within. A little cod stretched a very long way.",
  servings: 4,
  perServing: { calories: 540, protein: 26 },
  estCostPerServing: 1.25,
  roles: ["dinner"],
  zeroWasteHero: true,
  ingredients: [
    { item: "salt cod (bacalhau) or offcuts, soaked 24–36 hrs", qty: "1/2 lb", cost: 2.5 },
    { item: "floury potatoes", qty: "1 lb", cost: 0.7 },
    { item: "eggs, separated", qty: "2", cost: 0.5 },
    { item: "onion, very finely chopped", qty: "1 small", cost: 0.2 },
    { item: "garlic clove, minced", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "parsley, finely chopped", qty: "small bunch", cost: 0.3 },
    { item: "olive or frying oil", qty: "for deep frying", cost: 0.7, spansWeeks: true },
    { item: "salt, black pepper, nutmeg", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soak the salt cod 24–36 hours in cold water in the fridge, changing it often, until only gently salty. Poach a few minutes, drain, skin and bone it, then shred extremely finely — almost to threads.",
    "Boil the potatoes, drain very well, and pass through a ricer or mash dry and smooth (wet potato makes slack bolinhos).",
    "Combine the riced potato and shredded cod with the egg yolks, onion, garlic, and parsley; season with pepper and a little nutmeg. Whisk the egg whites to soft peaks and fold them through to lighten the mixture.",
    "Shape quenelles between two wet tablespoons. Deep-fry in oil at 180°C/350°F in batches until deep golden and puffed, about 3–4 minutes, turning. Drain on paper.",
    "Serve hot as a dinner with arroz branco and a tomato or green salad, or with a pot of beans; a drop of piri-piri alongside.",
  ],
  modernMove:
    "Fold whisked egg whites through the mix and rice the potato bone-dry: the trapped air and dry starch are what give bolinhos their famously light, almost soufflé interior instead of a dense fishcake.",
  notes:
    "Bolinhos (called pastéis in the south) are made wherever there are cod scraps and a few potatoes — the most frugal way to turn the last of the bacalhau into a proper meal.",
  tags: ["fish", "salt-cod", "bacalhau", "potato", "fritters", "fried", "zero-waste", "dinner"],
};
