import type { Recipe } from "../types";

export const asaro: Recipe = {
  slug: "asaro",
  title: "Asaro (Yam Porridge)",
  cuisine: "west-african",
  blurb:
    "Yoruba yam pottage — yam cubes simmered in a fried pepper base until some collapse and thicken the pot into a soft, savoury porridge. A one-pot dinner that turns a single tuber and a little smoked fish into a meal.",
  servings: 6,
  perServing: { calories: 480, protein: 14 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "white yam (or sweet potato), peeled and cubed", qty: "2 lb", cost: 3.0 },
    { item: "blended red pepper base (tomato, red bell pepper, scotch bonnet, onion)", qty: "2 cups", cost: 1.4 },
    { item: "red palm oil", qty: "1/4 cup", cost: 0.5, spansWeeks: true },
    { item: "smoked fish or dried fish, flaked", qty: "4 oz", cost: 1.6 },
    { item: "onion, sliced", qty: "1", cost: 0.3 },
    { item: "ground crayfish", qty: "1 tbsp", cost: 0.4, spansWeeks: true },
    { item: "stock cube / bouillon", qty: "1–2", cost: 0.2, spansWeeks: true },
    { item: "fresh spinach or pumpkin leaves, chopped", qty: "2 cups", cost: 0.6 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Rinse the yam cubes (use ends, offcuts and any odd-shaped pieces — they cook down anyway). Cover with water in a pot and start them simmering.",
    "Meanwhile sweat the onion in the palm oil, tip in the blended pepper base and fry it down until the oil splits — about 12 minutes.",
    "Stir the fried base, crayfish, crushed stock cube and flaked smoked fish into the yam pot. Top up water just to the level of the yam.",
    "Simmer until the yam is tender and some cubes break down. Mash a few against the side of the pot — this releasing of starch is what thickens asaro from a soup into a porridge.",
    "Fold in the greens for the last two minutes so they wilt but stay green. Taste for salt; it should be soft, thick and spoonable.",
  ],
  modernMove:
    "Deliberately mashing a portion of the yam into the broth is the technique: the released starch turns watery stock into a velvety pottage, so the dish thickens itself without flour or extra fat.",
  notes:
    "A true zero-waste hero — built to use up yam offcuts, the last of a smoked fish, and whatever greens are wilting, all melted into one comforting pot. Endlessly forgiving of quantities.",
  zeroWasteHero: true,
  tags: ["yam", "porridge", "pottage", "pepper-stew", "palm-oil", "smoked-fish", "one-pot"],
};
