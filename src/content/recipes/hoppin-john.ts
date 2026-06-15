import type { Recipe } from "../types";

export const hoppinJohn: Recipe = {
  slug: "hoppin-john",
  title: "Hoppin' John",
  cuisine: "american-south",
  blurb:
    "Black-eyed peas and rice cooked together with smoked pork — the Lowcountry dish eaten on New Year's Day for luck, descended directly from West African rice-and-pea cookery.",
  servings: 5,
  perServing: { calories: 500, protein: 20 },
  estCostPerServing: 0.7,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "dried black-eyed peas, soaked 4 hours", qty: "1 cup", cost: 0.7 },
    { item: "smoked ham hock, smoked turkey, or slab bacon", qty: "1 piece (~6 oz)", cost: 1.4 },
    { item: "onion, diced", qty: "1", cost: 0.3 },
    { item: "celery, diced", qty: "1 rib", cost: 0.15, spansWeeks: true },
    { item: "green bell pepper, diced", qty: "1/2", cost: 0.2 },
    { item: "garlic, minced", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "long-grain white rice", qty: "1 cup", cost: 0.4 },
    { item: "bay leaf, thyme, cayenne", qty: "to taste", spansWeeks: true },
    { item: "salt, black pepper, green onions to finish", qty: "to taste" },
  ],
  method: [
    "In a heavy pot, render the smoked meat, then sweat the onion, celery, and bell pepper until soft, 8 minutes. Add the garlic for a minute.",
    "Drain the peas and add them with the bay, thyme, a pinch of cayenne, and the smoked meat. Cover with about 4 cups water and simmer, partly covered, until the peas are nearly tender — 35 to 45 minutes. Do NOT salt early.",
    "Pull the meat, shred the lean off the bone, and return it. You want the liquid reduced to just covering the peas — about 2 cups for the rice to drink.",
    "Stir in the rinsed rice and salt, level it, and make sure liquid sits about 1/2 inch above the rice; top up with hot water if needed. Bring to a boil, cover, drop to low, and cook 18 minutes.",
    "Rest off the heat, covered, 10 minutes, then fluff with a fork. The rice should be tender and separate, the peas creamy. Finish with black pepper and sliced green onions.",
    "Serve with greens and cornbread — peas for coins, greens for folding money, cornbread for gold.",
  ],
  modernMove:
    "Cooking the rice directly in the smoky, peppery pea liquor — rather than boiling it apart and stirring together — lets every grain absorb the pork and aromatics, so the pot tastes unified instead of assembled.",
  notes:
    "Hoppin' John is the South's New Year good-luck plate, but it's a frugal staple any night. The technique is straight from West African rice cookery carried over by enslaved cooks of the Carolina Lowcountry.",
  zeroWasteHero: true,
  tags: ["dinner", "legumes", "black-eyed-peas", "rice", "smoked-pork", "lowcountry"],
};
