import type { Recipe } from "../types";

export const ssamjang: Recipe = {
  slug: "ssamjang",
  title: "Ssamjang (Dipping & Wrapping Paste)",
  cuisine: "korean",
  blurb:
    "Two of the three jangs married in a bowl — earthy doenjang and spicy gochujang loosened with sesame oil, garlic, and scallion into the thick savory paste smeared inside every lettuce wrap. A spoonful turns plain rice, grilled meat, and a leaf of cabbage into a full bite; a jar costs pennies and lasts a fortnight.",
  servings: 12,
  perServing: { calories: 35, protein: 1 },
  estCostPerServing: 0.12,
  roles: ["side", "base"],
  ingredients: [
    { item: "doenjang (Korean soybean paste)", qty: "4 tbsp", cost: 0.6, spansWeeks: true },
    { item: "gochujang (Korean chili paste)", qty: "1 tbsp", cost: 0.25, spansWeeks: true },
    { item: "garlic clove, grated", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "scallion, finely minced", qty: "1", cost: 0.1 },
    { item: "toasted sesame oil", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "toasted sesame seeds", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "sugar or honey", qty: "1 tsp", cost: 0.03, spansWeeks: true },
  ],
  method: [
    "In a small bowl, stir the doenjang and gochujang together until smooth. The doenjang brings the deep fermented-bean savor and the gochujang a gentle chili sweetness — roughly four parts to one keeps it earthy rather than hot.",
    "Mix in the grated garlic, minced scallion, sesame oil, sesame seeds, and sugar until you have a thick, spreadable paste. Loosen with a teaspoon of water if it's stiff.",
    "Let it rest 10 minutes for the raw garlic to mellow into the pastes before serving.",
    "Serve a small mound alongside lettuce or cabbage leaves, rice, and anything grilled: lay a leaf in your palm, add rice, a dab of ssamjang, the meat or veg, then wrap and eat in one bite.",
  ],
  modernMove:
    "Cutting the punchy doenjang with a little gochujang, sesame oil, and sugar transforms a raw fermented paste — too sharp to eat alone — into a balanced condiment, the cheapest way to make a frugal table taste seasoned and complete.",
  notes:
    "Keeps two weeks covered in the fridge; the flavor settles and deepens after a day. Add a spoon of finely chopped onion or a few drops of plum syrup if you like it sweeter. Fully vegan as written.",
  zeroWasteHero: false,
  tags: ["side", "base", "condiment", "doenjang", "gochujang", "fermented", "make-ahead", "vegan"],
};
