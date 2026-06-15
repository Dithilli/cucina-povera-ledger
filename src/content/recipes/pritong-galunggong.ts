import type { Recipe } from "../types";

export const pritongGalunggong: Recipe = {
  slug: "pritong-galunggong",
  title: "Pritong Galunggong",
  cuisine: "filipino",
  blurb:
    "Fried galunggong (mackerel scad) — the Filipino 'poor man's fish' — rubbed with salt and fried hard until the skin crackles and the tail goes crisp, eaten with rice and a sawsawan of vinegar.",
  servings: 4,
  perServing: { calories: 520, protein: 34 },
  estCostPerServing: 1.05,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "galunggong (mackerel scad), whole, cleaned",
      qty: "1 1/2 lb (about 6 small fish)",
      cost: 3.2,
    },
    { item: "salt", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "garlic powder or crushed garlic (optional)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "neutral oil for frying", qty: "1/2 cup", cost: 0.5, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "4 cups cooked", cost: 0.6 },
    {
      item: "sawsawan: vinegar with crushed garlic, chili, and pepper",
      qty: "to serve",
      cost: 0.2,
      spansWeeks: true,
    },
  ],
  method: [
    "Score the fish twice on each side to the bone, rub all over with salt (and garlic if using), and let them sit 15 minutes. Then pat completely dry — wet fish steams and sticks, dry fish crackles.",
    "Heat the oil until it shimmers; it must be hot before the fish goes in or the skin tears. Lay the fish away from you and don't touch them.",
    "Fry undisturbed until the underside is deep brown and lifts off the pan on its own, then turn once and fry the other side. Small fish fry long enough that the fins and tail go crisp and edible.",
    "Drain on a rack. Serve with hot rice and the vinegar sawsawan for dipping every bite.",
  ],
  modernMove:
    "Salting and thoroughly drying the fish before a hot, hands-off fry is the whole technique — it gives shattering skin and crunchable tails so even the cheapest fish on the market eats like a treat, nothing wasted.",
  zeroWasteHero: true,
  tags: ["fish", "fried", "galunggong", "crispy", "sawsawan", "everyday"],
};
