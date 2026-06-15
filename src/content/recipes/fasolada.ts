import type { Recipe } from "../types";

export const fasolada: Recipe = {
  slug: "fasolada",
  title: "Fasolada (Greek White Bean Soup)",
  cuisine: "greek",
  blurb:
    "Dried white beans simmered with carrot, celery, and tomato under a flood of olive oil — the soup so central to Greek poverty it's called the national dish.",
  servings: 6,
  perServing: { calories: 480, protein: 19 },
  estCostPerServing: 0.72,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "dried cannellini or other small white beans, soaked overnight",
      qty: "1 lb",
      cost: 1.6,
    },
    { item: "onion, finely chopped", qty: "1", cost: 0.4 },
    { item: "carrots, sliced into coins", qty: "2", cost: 0.4 },
    { item: "celery stalks with leaves, sliced", qty: "2", cost: 0.3 },
    { item: "garlic cloves, sliced", qty: "2", cost: 0.1, spansWeeks: true },
    {
      item: "ripe tomato, grated (or 2 tbsp tomato paste)",
      qty: "1",
      cost: 0.3,
    },
    {
      item: "good olive oil, half in the pot and half to finish",
      qty: "1/2 cup",
      cost: 0.9,
      spansWeeks: true,
    },
    { item: "bay leaf, dried oregano", qty: "1 + pinch", spansWeeks: true },
    { item: "salt, black pepper, lemon or vinegar to serve", qty: "to taste" },
  ],
  method: [
    "Drain the soaked beans, cover with fresh cold water, bring to a boil, skim, then drain again — this first boil tames the foam and any bitterness.",
    "Return the beans to the pot with fresh water to cover by two inches, the onion, carrot, celery, garlic, bay, and half the olive oil. Simmer gently, lid ajar, until the beans are starting to soften, about 45 minutes.",
    "Stir in the grated tomato and a pinch of oregano and continue cooking until the beans are creamy and the broth has thickened from the released starch, 30–45 minutes more. Salt only now, once the beans are tender.",
    "Off the heat, beat in the remaining raw olive oil so the broth turns silky. Serve hot with a squeeze of lemon or a splash of vinegar, black pepper, bread, and olives.",
  ],
  modernMove:
    "Hold the salt until the beans are soft and finish with raw olive oil off the heat — salted-early beans stay grainy, while the cold oil emulsifies the starchy broth into something glossy.",
  notes:
    "Greece's everyday winter pot — cheap, vegan, and built entirely from the pantry. It only gets better the next day as the broth thickens.",
  tags: ["legumes", "white-beans", "soup", "fasolada", "one-pot", "vegan"],
};
