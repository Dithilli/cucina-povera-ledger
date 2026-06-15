import type { Recipe } from "../types";

export const fishCutletsSl: Recipe = {
  slug: "fish-cutlets-sl",
  title: "Fish Cutlets",
  cuisine: "sri-lankan",
  blurb:
    "Spiced fish and mashed potato bound with onion, green chili, and curry leaf, rolled into balls and fried crisp — a tin of fish and a few potatoes stretched into a whole plate of crunch.",
  servings: 4,
  perServing: { calories: 420, protein: 22 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "canned mackerel or tuna (or cooked fresh fish), flaked", qty: "2 cans (10 oz)", cost: 2.4 },
    { item: "potatoes, boiled and mashed", qty: "3 medium", cost: 0.9 },
    { item: "red onion, finely chopped", qty: "1", cost: 0.3 },
    { item: "green chilies, minced", qty: "2", cost: 0.2 },
    { item: "garlic, ginger, and curry leaves, chopped", qty: "1 tbsp each", cost: 0.2, spansWeeks: true },
    { item: "black pepper, curry powder, turmeric", qty: "1 tsp each", cost: 0.15, spansWeeks: true },
    { item: "lime", qty: "1/2", cost: 0.1 },
    { item: "egg, beaten", qty: "1", cost: 0.25 },
    { item: "breadcrumbs", qty: "1 cup", cost: 0.3, spansWeeks: true },
    { item: "oil for shallow frying", qty: "1/2 cup", cost: 0.4, spansWeeks: true },
    { item: "salt", qty: "to taste", cost: 0.02, spansWeeks: true },
  ],
  method: [
    "Soften the onion, chili, garlic, ginger, and curry leaves in a little oil, then stir in the pepper, curry powder, and turmeric for a minute.",
    "Fold in the flaked fish and warm through, then take off the heat and mix into the mashed potato with the lime and salt. Taste — it should be punchy and well-seasoned.",
    "Roll the mixture into walnut-sized balls, pressing firmly so they hold together.",
    "Dip each ball in beaten egg and roll in breadcrumbs to coat all over.",
    "Shallow-fry in batches over medium heat, turning, until deep golden and crisp. Drain and serve hot with a wedge of lime, as part of a rice plate.",
  ],
  modernMove:
    "Season the potato-fish mix aggressively before shaping — the bland breadcrumb shell mutes everything, so the inside has to taste loud on its own. Brushed with oil and baked at 425°F they crisp up nearly as well with far less fat.",
  notes:
    "Canned fish makes these genuinely cheap and pantry-friendly, but cooked leftover fish works just as well — a classic way to use up yesterday's curry fish. The mix can be shaped ahead and fried to order.",
  zeroWasteHero: true,
  tags: ["sri-lankan", "fish", "potato", "fried", "canned-fish", "snack", "leftover-friendly"],
  sources: [
    {
      title: "The Flavor Bender — Sri Lankan Fish Cutlets (Spicy Fish Croquettes)",
      url: "https://www.theflavorbender.com/sri-lankan-fish-cutlets-spicy-fish-croquettes/",
      note: "Potato-and-canned-fish filling, spicing, and the egg-and-breadcrumb crust",
    },
  ],
};
