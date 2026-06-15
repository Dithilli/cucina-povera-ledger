import type { Recipe } from "../types";

export const frijolesDeLaOlla: Recipe = {
  slug: "frijoles-de-la-olla",
  title: "Frijoles de la Olla",
  cuisine: "mexican",
  blurb:
    "A pot of beans simmered slow with onion and epazote — about a dollar, days of meals, and the cheapest near-complete protein there is when eaten with corn. The bank the whole week draws on.",
  servings: 6,
  perServing: { calories: 230, protein: 14 },
  estCostPerServing: 0.3,
  roles: ["base"],
  ingredients: [
    { item: "dried pinto or black beans", qty: "1 lb (about 2 1/2 cups)", cost: 1.1 },
    { item: "white onion, halved", qty: "1/2", cost: 0.2 },
    { item: "garlic cloves", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "epazote sprig (or a bay leaf)", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Sort and rinse the beans (no need to soak, though it speeds things up). Cover with plenty of water in a heavy pot.",
    "Add the onion, garlic, and epazote. Bring to a boil, then drop to a gentle simmer.",
    "Cook 1.5–2.5 hours, adding hot water as needed to keep the beans submerged, until creamy and tender.",
    "Salt only once the beans are soft (early salt can keep them firm). Keep the brothy cooking liquid — it's half the point.",
  ],
  modernMove:
    "Hold the salt until the beans are tender, then season the broth aggressively — the bean liquor (the 'caldo de frijol') is a stock in its own right for soups and rice.",
  notes: "Eat with tortillas for the complete-protein pairing. Day-two beans become refritos; the broth becomes soup.",
  tags: ["beans", "legumes", "base", "protein", "one-pot"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen, Frijoles de la Olla",
      url: "https://www.mexicoinmykitchen.com/mexican-beans-recipe/",
      note: "Pot beans with onion and epazote; salting only once tender.",
    },
  ],
};
