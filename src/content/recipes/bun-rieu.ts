import type { Recipe } from "../types";

export const bunRieu: Recipe = {
  slug: "bun-rieu",
  title: "Bún Riêu",
  cuisine: "vietnamese",
  blurb:
    "Tomato-and-crab-paste vermicelli soup — a tart, rust-red broth crowned with floating clouds of egg-bound crab and pork, stretched over rice noodles.",
  servings: 4,
  perServing: { calories: 560, protein: 30 },
  estCostPerServing: 2.1,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "jarred crab paste in soybean oil (gạch cua) — the soul of the broth",
      qty: "3 tbsp",
      cost: 1.8,
      spansWeeks: true,
    },
    { item: "ground pork", qty: "8 oz", cost: 2.0 },
    { item: "eggs", qty: "2", cost: 0.5 },
    { item: "ripe tomatoes, cut into wedges", qty: "4", cost: 1.2 },
    { item: "dried rice vermicelli (bún)", qty: "10 oz", cost: 1.3 },
    { item: "shallots, minced", qty: "2", cost: 0.3 },
    {
      item: "fermented shrimp paste (mắm tôm, optional but classic)",
      qty: "1 tsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "tamarind paste or rice vinegar for sourness",
      qty: "1 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "fish sauce",
      qty: "2 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "annatto oil for color (or paprika oil)",
      qty: "1 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "herbs to serve: shredded lettuce, perilla, bean sprouts, lime",
      qty: "1 platter",
      cost: 1.5,
    },
    { item: "salt, sugar to balance", qty: "to taste" },
  ],
  method: [
    "Beat the crab paste with the ground pork, eggs, minced shallots, and a little fish sauce into a loose batter — this is the riêu that will set into tender clouds in the broth.",
    "Sweat the tomato wedges in annatto oil until they slump and bleed their color, then add water (or a light pork or chicken broth) and bring to a gentle simmer.",
    "Season the broth tart and savory with tamarind, fish sauce, a pinch of sugar, and the optional shrimp paste — it should taste bright and a little funky.",
    "Lower the heat so the broth barely trembles, then spoon in the crab-pork mixture in dollops; let them poach undisturbed until they float up set and pillowy. Don't stir hard or they'll scatter.",
    "Soak or boil the vermicelli until just tender, drain, and divide among bowls.",
    "Ladle the red broth, tomatoes, and crab clouds over the noodles. Serve with the herb platter and lime so each person tears in greens and adjusts the sour at the table.",
  ],
  modernMove:
    "A few spoons of jarred crab paste whisked into pork and egg fakes the labor of hand-pounding live paddy crabs — you get the signature floating riêu and that ferrous, briny depth for a fraction of the cost and effort.",
  tags: ["noodles", "vermicelli", "soup", "tomato", "crab", "pork"],
};
