import type { Recipe } from "../types";

export const shahiPaneer: Recipe = {
  slug: "shahi-paneer",
  title: "Shahi Paneer",
  cuisine: "north-indian",
  blurb:
    "An everyday, frugal take on the 'royal' paneer — a light cashew-tomato gravy that tastes far richer than the handful of nuts and modest cheese it's built on.",
  servings: 4,
  perServing: { calories: 600, protein: 22 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "paneer, cut in cubes", qty: "7 oz", cost: 2.3 },
    { item: "ripe tomatoes, chopped", qty: "4 medium", cost: 1.4 },
    { item: "onion, chopped", qty: "1 large", cost: 0.4 },
    { item: "raw cashews", qty: "2 tbsp", cost: 0.6 },
    { item: "garlic + ginger", qty: "1 tbsp each", cost: 0.3, spansWeeks: true },
    { item: "green cardamom + a small piece of cinnamon", qty: "2 pods + 1", cost: 0.2, spansWeeks: true },
    { item: "turmeric, red chili powder, garam masala", qty: "to taste", cost: 0.25, spansWeeks: true },
    { item: "neutral oil or ghee", qty: "2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "plain yogurt or a splash of milk to finish", qty: "3 tbsp", cost: 0.25, spansWeeks: true },
    { item: "pinch of sugar", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Simmer the tomatoes, onion, cashews, ginger, garlic, cardamom and cinnamon in a cup of water until everything is soft, about 12 minutes. Fish out the cinnamon and blend the rest to a silky purée; pass through a sieve if you want it truly smooth.",
    "Pan-fry the paneer cubes lightly, then rest them in warm water so they stay soft.",
    "Heat the oil, pour in the purée (stand back — it spits) with the ground spices, and cook it down 8–10 minutes until thick and glossy and the raw tomato edge is gone.",
    "Lower the heat and whisk in the yogurt a spoon at a time so it doesn't split, loosen with a little water to a pourable gravy, and add the pinch of sugar to round it out.",
    "Fold in the paneer, warm through, finish with garam masala. Serve with naan, roti, or jeera rice.",
  ],
  modernMove:
    "A spoon of cashews blended into the gravy does the work of cream — the 'royal' richness comes from emulsified nuts and a late splash of yogurt, not an expensive pour of cream.",
  tags: ["paneer", "cashew-gravy", "tomato", "vegetarian", "north-indian"],
};
