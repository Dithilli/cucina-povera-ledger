import type { Recipe } from "../types";

export const limaBeanSoup: Recipe = {
  slug: "lima-bean-soup",
  title: "Lima Bean Soup",
  cuisine: "ashkenazi",
  blurb:
    "Dried lima (butter) beans cooked to a creamy collapse with onion, carrot, and a little tomato — the cheapest, most filling pot in the cupboard, the kind of thick bean soup that stretched a few cents of dried beans across a cold week.",
  servings: 6,
  perServing: { calories: 440, protein: 20 },
  estCostPerServing: 0.5,
  roles: ["dinner"],
  ingredients: [
    { item: "dried lima or butter beans", qty: "1 lb (about 2 1/2 cups)", cost: 1.4 },
    { item: "onion, chopped", qty: "1 large", cost: 0.3 },
    { item: "carrots, diced", qty: "2", cost: 0.2 },
    { item: "celery, diced (optional)", qty: "1 stalk", cost: 0.1 },
    { item: "tomato (canned or paste)", qty: "1/2 cup or 1 tbsp paste", cost: 0.3, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "water", qty: "9 cups", cost: 0.0 },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Sort and rinse the beans, then soak overnight in plenty of cold water (or do a quick soak: boil 2 minutes, sit covered 1 hour). Drain.",
    "In a heavy pot, sweat the onion, carrot, and celery in the oil until softened, about 8 minutes. Stir in the tomato and cook a minute.",
    "Add the drained beans, the water, and the bay leaf. Bring to a boil, then drop to a low simmer, partly covered.",
    "Simmer 1 1/2–2 hours, stirring now and then, until the beans collapse and the soup turns thick and creamy on its own — lima beans break down and thicken the pot as they go. Add hot water if it gets too stodgy. Salt only once the beans are fully soft, then pepper generously.",
  ],
  modernMove:
    "Let the beans do the thickening — no flour, no blender needed. Limas dissolve at the edges as they cook, so simmering them long and stirring near the end releases enough starch to turn watery broth into a velvety, spoon-standing soup.",
  notes:
    "Pareve — oil and beans only — so it sits at any meal, dairy or meat. Salt late: early salt keeps the bean skins tough and you'll wait twice as long for that creamy collapse.",
  tags: ["beans", "lima", "soup", "pareve"],
};
