import type { Recipe } from "../types";

export const potOfCannellini: Recipe = {
  slug: "pot-of-cannellini",
  title: "A pot of cannellini",
  cuisine: "italian",
  blurb: "White beans simmered soft with sage and their broth — the meat of the poor.",
  servings: 6,
  perServing: { calories: 190, protein: 11 },
  estCostPerServing: 0.45,
  roles: ["base"],
  ingredients: [
    { item: "dried cannellini (or borlotti)", qty: "1 lb (about 2 1/2 cups)", cost: 2.5 },
    { item: "garlic, smashed", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "sage", qty: "a few leaves" },
    { item: "olive oil", qty: "2 tbsp", cost: 0.35, spansWeeks: true },
    { item: "salt", qty: "to taste (added late)" },
  ],
  method: [
    "Soak the beans in cold water overnight (8–12 hours). Drain.",
    "Cover with fresh water by 2 inches, add the garlic, sage, and oil — but no salt yet (it toughens the skins).",
    "Bring to a boil, lower to a bare, lazy simmer, and cook partly covered until fully tender and creamy, 1 to 1 1/2 hours, topping up with hot water as needed.",
    "Salt in the last 10 minutes; cool in the liquid.",
    "Store the beans in their broth, refrigerated, up to 4 days — the broth thickens soups and sauces. They freeze well too.",
  ],
  modernMove:
    "A gentle simmer (never a rolling boil) keeps them whole and silky. Mash a portion against the pot and stir back in to thicken pasta e fagioli without a drop of cream.",
  tags: ["base", "legumes", "beans", "make-ahead"],
};
