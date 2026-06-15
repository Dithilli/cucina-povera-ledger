import type { Recipe } from "../types";

export const soupouNebbe: Recipe = {
  slug: "soupou-nebbe",
  title: "Soupou Ñebbe",
  cuisine: "senegalese",
  blurb:
    "Black-eyed peas simmered soft in an onion-tomato nokoss with a knob of sweet potato and a whisper of nététou — the cheapest, most quietly satisfying pot in the Senegalese kitchen.",
  servings: 4,
  perServing: { calories: 520, protein: 20 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "dried black-eyed peas (ñebbe), soaked", qty: "1 1/2 cups", cost: 0.9 },
    { item: "sweet potato, chunked", qty: "1 medium", cost: 0.5 },
    { item: "onion, chopped", qty: "1 large", cost: 0.4 },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "nététou (fermented locust bean)", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "Scotch bonnet (kaani), whole", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "garlic and stock cube (Maggi)", qty: "2 cloves + 1 cube", cost: 0.2, spansWeeks: true },
    { item: "palm or peanut oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "broken rice, to serve", qty: "1 1/2 cups dry", cost: 0.7 },
  ],
  method: [
    "Simmer the soaked black-eyed peas in fresh water until just tender but not bursting, then drain, saving the cooking liquor.",
    "Soften the onion and garlic in the oil, stir in the tomato paste and let it darken.",
    "Add the peas, sweet potato, rinsed nététou, whole Scotch bonnet and crumbled stock cube, with enough bean liquor to make a loose stew.",
    "Cook gently until the sweet potato is soft and some peas break down to thicken the pot, then check salt.",
    "Serve over broken rice, or eat as is with bread.",
  ],
  modernMove:
    "Cook the peas plain and salt them only after they soften — salting too early leaves the skins tough and the centres chalky.",
  notes: "A meatless everyday pot; a flake of dried fish or extra nététou deepens it without raising the cost.",
  zeroWasteHero: true,
  tags: ["black-eyed-peas", "legumes", "stew", "vegetarian", "senegalese"],
  sources: [
    {
      title: "Christopher Kimball's Milk Street — Black-Eyed Pea and Sweet Potato Stew (Ndambe)",
      url: "https://www.177milkstreet.com/recipes/black-eyed-pea-and-sweet-potato-stew-ndambe",
      note: "Pairing black-eyed peas with sweet potato in an onion-tomato base for a hearty Senegalese pulse stew.",
    },
  ],
};
