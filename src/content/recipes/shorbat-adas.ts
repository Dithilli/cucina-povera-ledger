import type { Recipe } from "../types";

export const shorbatAdas: Recipe = {
  slug: "shorbat-adas",
  title: "Shorbat Adas",
  cuisine: "levantine",
  blurb:
    "The golden red-lentil soup of every Levantine table at Ramadan — lentils cooked to a silky purée, warmed with cumin, and snapped awake by a squeeze of lemon at the bowl.",
  servings: 5,
  perServing: { calories: 320, protein: 16 },
  estCostPerServing: 0.55,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "red/orange lentils, rinsed until water runs clear", qty: "1 1/2 cups", cost: 1.0 },
    { item: "onion, chopped", qty: "1", cost: 0.3 },
    { item: "garlic, sliced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "carrot, chopped (optional, for body)", qty: "1", cost: 0.2 },
    { item: "olive oil", qty: "3 tbsp", cost: 0.45, spansWeeks: true },
    { item: "ground cumin", qty: "1 1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "ground turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste" },
    { item: "lemons, cut in wedges, to serve", qty: "2", cost: 0.6 },
    { item: "fried bread or pita, to serve (optional)", qty: "to serve", cost: 0.3 },
  ],
  method: [
    "Sweat the onion, garlic, and carrot in 2 tbsp of the olive oil over medium heat until soft and just golden, about 8 minutes. Stir in the cumin and turmeric for 30 seconds until fragrant.",
    "Add the rinsed red lentils and about 6 cups water. Bring to a boil, skim the foam, then simmer partly covered until the lentils have completely collapsed and dissolved — 25 to 30 minutes. Red lentils are supposed to fall apart; that's the soup.",
    "Blend smooth with a stick blender (or leave it rustic). Loosen with hot water to a pourable, silky consistency. Season well with salt and pepper — it needs more salt than you'd think.",
    "Finish the pot with the last tablespoon of olive oil. Ladle into bowls.",
    "Serve scalding hot with a lemon wedge to squeeze in at the table — the acid is what lifts the whole bowl from heavy to bright — and crisp fried pita on top.",
  ],
  modernMove:
    "Red lentils need no soaking and dissolve on their own, so the 'purée' is just patience, not a trick. The real move is finishing acid: cumin builds the warmth, but lemon squeezed in at the very last second is what makes it taste alive instead of muddy.",
  notes:
    "The most frugal soup in the region — almost all pantry. Thicken it for a stew or thin it for a starter; it reheats for days and only deepens.",
  tags: ["dinner", "soup", "legumes", "red-lentils", "cumin", "lemon", "vegan"],
};
