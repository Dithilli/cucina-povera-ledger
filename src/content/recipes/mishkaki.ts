import type { Recipe } from "../types";

export const mishkaki: Recipe = {
  slug: "mishkaki",
  title: "Mishkaki",
  cuisine: "east-african",
  blurb:
    "Cubes of beef marinated overnight in garlic, ginger, turmeric and cumin, then threaded on skewers and grilled fast over charcoal — the smoky street-corner skewer of the Swahili coast, basted as it cooks and served with kachumbari.",
  servings: 4,
  perServing: { calories: 540, protein: 32 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "beef chuck or sirloin, cut in 1-inch cubes", qty: "1 1/2 lb", cost: 6.5 },
    { item: "garlic cloves, minced", qty: "4", cost: 0.15, spansWeeks: true },
    { item: "fresh ginger, grated", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "ground turmeric", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "ground cumin", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "ground coriander", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "cayenne or chili powder", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "vegetable oil", qty: "3 tbsp", cost: 0.15, spansWeeks: true },
    { item: "lemon, juiced", qty: "1", cost: 0.4 },
    { item: "salt", qty: "1 tsp", cost: 0.02, spansWeeks: true },
    { item: "ugali or chapati, to serve", qty: "to serve" },
  ],
  method: [
    "Whisk garlic, ginger, turmeric, cumin, coriander, cayenne, half the oil, lemon juice and salt into a marinade. Toss the beef cubes through it to coat.",
    "Cover and marinate in the fridge at least 2 hours, ideally overnight, so the spices and acid tenderize the cheap cut and soak in.",
    "Thread the cubes onto skewers, leaving a little gap between pieces so they char rather than steam. Reserve the leftover marinade and stir the rest of the oil into it for basting.",
    "Grill over hot charcoal 12–15 minutes, turning every few minutes and basting with the reserved marinade each turn, until well-browned outside and just cooked through.",
    "Slide off the skewers and serve with kachumbari and ugali or warm chapati to wrap around the meat.",
  ],
  modernMove:
    "Basting with the reserved marinade on every turn builds a lacquered, spice-crusted exterior while the lemon and oil keep a lean street cut from drying out over fierce heat.",
  notes:
    "A splash of tamarind (ukwaju) in the marinade is the coastal touch. Soak wooden skewers first so they don't burn through.",
  zeroWasteHero: false,
  tags: ["meat", "east-african", "grill", "beef", "skewers", "street-food"],
  sources: [
    {
      title: "Beck & Bulow — Beef Mishkaki: A Tanzanian Street Food Favorite",
      url: "https://www.beckandbulow.com/blogs/beef/beef-mishkaki-recipe-a-tanzanian-street-food-favorite",
      note: "Garlic-ginger-turmeric-cumin marinade, overnight rest, and charcoal grilling with basting",
    },
  ],
};
