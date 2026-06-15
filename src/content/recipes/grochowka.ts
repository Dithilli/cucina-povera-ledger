import type { Recipe } from "../types";

export const grochowkaPl: Recipe = {
  slug: "grochowka",
  title: "Grochówka",
  cuisine: "polish",
  blurb:
    "Yellow split peas simmered down with smoked bacon and sausage and a handful of root vegetables until the soup stands up thick enough to plant a spoon in — the army field-kitchen pea soup, scented with marjoram and made to feed a crowd for next to nothing.",
  servings: 6,
  perServing: { calories: 480, protein: 24 },
  estCostPerServing: 1.2,
  roles: ["dinner"],
  ingredients: [
    { item: "yellow split peas", qty: "2 cups (about 14 oz)", cost: 1.2 },
    { item: "smoked bacon (boczek), diced", qty: "4 oz", cost: 1.2 },
    { item: "smoked sausage (kiełbasa), sliced", qty: "8 oz", cost: 2.4 },
    { item: "potatoes, diced", qty: "2 medium", cost: 0.5 },
    { item: "carrot, diced", qty: "2", cost: 0.3 },
    { item: "onion, chopped", qty: "1", cost: 0.2 },
    { item: "bay leaf, allspice, peppercorns", qty: "2 / 4 / 6", cost: 0.1, spansWeeks: true },
    { item: "marjoram, dried", qty: "1 1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "garlic, minced", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Rinse the split peas and, if you have time, soak them an hour or two to shorten the cooking. Tip them into a big pot with about 8 cups of water, the bay, allspice, and peppercorns, and bring to a boil. Skim, then simmer partly covered.",
    "Meanwhile, render the diced bacon slowly in a dry pan until the fat runs and the bits crisp. Add the sausage and onion and fry until colored. Scrape the lot, fat and all, into the soup.",
    "Once the peas are starting to break down — 40 minutes or so — add the diced potatoes and carrots. Simmer until the vegetables are soft and the peas have collapsed into a thick, almost porridgey soup, topping up with water only if it threatens to catch.",
    "Stir in the garlic and marjoram and simmer 5 minutes more. Season hard with salt and pepper — split peas drink up a lot.",
    "Serve very thick and very hot, with rye bread on the side for mopping.",
  ],
  modernMove:
    "Marjoram is the line between real grochówka and bland pea mush — add a generous, near-reckless pinch near the end so its warm, slightly bitter note carries over the smoke. The diced bacon should be rendered until properly crisp before it joins the pot; that fond is half the flavor.",
  notes:
    "It thickens to a near-stew as it sits and overnight will set almost solid — loosen with a little water when reheating. Built to stretch, it's the classic use for a leftover smoked ham hock in place of (or alongside) the sausage.",
  zeroWasteHero: true,
  tags: ["legume", "split-pea", "smoked", "soup", "polish"],
  sources: [
    {
      title: "Polonist — Grochówka: Split Pea Soup with Ham Hock",
      url: "https://www.polonist.com/split-pea-soup-ham-hock-grochowka/",
      note: "Army-style thick split-pea soup with smoked meat, root vegetables, and the essential marjoram.",
    },
  ],
};
