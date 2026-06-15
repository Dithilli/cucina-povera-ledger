import type { Recipe } from "../types";

export const tempeBacem: Recipe = {
  slug: "tempe-bacem",
  title: "Tempe Bacem",
  cuisine: "indonesian",
  blurb:
    "Central Javanese sweet-soy braise: tempe simmered in coconut water, palm sugar, and tamarind with coriander and garlic until the liquid is gone and the spices soak deep, then fried to a caramelized crust. The braise-then-fry trick makes a block of fermented soybean taste like candy and meat at once.",
  servings: 4,
  perServing: { calories: 470, protein: 26 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "tempe, cut into 1/2-inch slabs", qty: "1 lb", cost: 2.4 },
    { item: "garlic cloves", qty: "5", cost: 0.25, spansWeeks: true },
    { item: "shallots", qty: "4", cost: 0.5, spansWeeks: true },
    { item: "coriander seed (or 1 tsp ground)", qty: "1 1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "palm sugar (or brown sugar)", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "kecap manis (sweet soy sauce)", qty: "2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "tamarind pulp", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "bay leaves (or Indonesian salam)", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "coconut water (or plain water)", qty: "2 cups", cost: 0.5 },
    { item: "salt", qty: "1 tsp", spansWeeks: true },
    { item: "oil for shallow frying", qty: "1/4 cup", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Grind the garlic, shallots, and coriander to a paste in a mortar or blender.",
    "Lay the tempe slabs in a single layer in a wide pan. Add the paste, palm sugar, kecap manis, salt, bay, the strained tamarind water, and the coconut water — enough to nearly cover.",
    "Bring to a gentle simmer and braise uncovered 30 to 40 minutes, turning the slabs once, until the liquid has cooked down to a sticky glaze and the tempe has drunk up the spice. Coconut water is the traditional braising liquid; its natural sugar deepens the caramel.",
    "Lift the slabs out and let them drain and dry a few minutes (they keep days at this stage and only get better).",
    "Just before eating, shallow-fry the braised tempe in hot oil until the sugary surface caramelizes to a dark, glossy crust on both sides. Serve hot with nasi putih and sambal terasi.",
  ],
  modernMove:
    "Braise-then-fry (bacem) is the move: the slow simmer drives sweet-savory spice into the porous tempe all the way through, and the final fry caramelizes the sugar on the surface into a lacquered crust — flavor inside and crunch outside, from one cheap protein.",
  notes:
    "Braised tempe keeps 3–4 days refrigerated, so braise a big batch on cook day and fry to order through the week. The same braise works for firm tofu (tahu bacem) or hard-boiled eggs in the same pot.",
  tags: ["dinner", "tempe", "javanese", "sweet-soy", "protein", "make-ahead"],
  sources: [
    { title: "Anita Jacobson — Daily Cooking Quest", url: "https://dailycookingquest.com/tahu-tempeh-bacem.html", note: "Central Javanese braise in coconut water and palm sugar, then fry (bacem)" },
  ],
};
