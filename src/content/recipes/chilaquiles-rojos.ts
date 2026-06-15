import type { Recipe } from "../types";

export const chilaquilesRojos: Recipe = {
  slug: "chilaquiles-rojos",
  title: "Chilaquiles Rojos",
  cuisine: "mexican",
  blurb:
    "Yesterday's stale tortillas, fried to chips and simmered in red salsa until just softened, crowned with an egg and a little cheese. The patron saint of Mexican zero-waste breakfast.",
  servings: 2,
  perServing: { calories: 480, protein: 17 },
  estCostPerServing: 0.9,
  roles: ["breakfast", "lunch"],
  ingredients: [
    { item: "stale corn tortillas, cut in wedges (or leftover totopos)", qty: "8" },
    { item: "salsa roja asada", qty: "2 cups" },
    { item: "eggs", qty: "2", cost: 0.5 },
    { item: "queso fresco, crumbled", qty: "1/4 cup", cost: 0.6, spansWeeks: true },
    { item: "white onion + crema to finish", qty: "to taste", cost: 0.3, spansWeeks: true },
    { item: "oil for frying", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Fry the tortilla wedges in a little oil until crisp (or use day-old totopos). Drain.",
    "Bring the salsa roja to a brisk simmer in a wide pan.",
    "Fold the chips through the hot salsa just until they begin to soften but still hold some bite — 30–60 seconds, no longer, or they go soggy.",
    "Slide onto plates; top with a fried or poached egg, crumbled queso fresco, rings of raw onion, and a drizzle of crema.",
  ],
  modernMove:
    "Time the toss: chilaquiles want the chips coated and barely softened, not stewed. Pull them while there's still texture, then the runny egg yolk becomes the sauce's second emulsion.",
  zeroWasteHero: true,
  tags: ["zero-waste", "tortilla", "eggs", "salsa", "breakfast"],
};
