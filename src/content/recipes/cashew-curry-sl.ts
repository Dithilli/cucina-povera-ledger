import type { Recipe } from "../types";

export const cashewCurrySl: Recipe = {
  slug: "cashew-curry-sl",
  title: "Cadju (Cashew Curry)",
  cuisine: "sri-lankan",
  blurb:
    "Soaked cashews simmered soft in spiced coconut milk until they plump into creamy, curry-soaked bites — the wedding-table luxury a frugal cook spreads thin over rice.",
  servings: 4,
  perServing: { calories: 470, protein: 14 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "raw cashews, soaked 2 hours", qty: "1 1/2 cups", cost: 4.0 },
    { item: "thin coconut milk", qty: "1 1/2 cups", cost: 0.5 },
    { item: "thick coconut milk", qty: "1/2 cup", cost: 0.4 },
    { item: "onion, finely chopped", qty: "1", cost: 0.2 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.1, spansWeeks: true },
    { item: "green chilies, slit", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "fenugreek seeds", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "roasted curry powder", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "chili powder", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "pandan (rampe) leaf", qty: "3-inch piece", cost: 0.15, spansWeeks: true },
    { item: "cinnamon stick", qty: "1 small", cost: 0.1, spansWeeks: true },
    { item: "coconut oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Soak the raw cashews in warm water for a couple of hours so they soften enough to drink in the gravy, then drain.",
    "In a pot, combine the cashews with the thin coconut milk, onion, garlic, green chili, fenugreek, turmeric, curry powder, chili powder, curry leaves, pandan and cinnamon.",
    "Simmer gently 20–25 minutes, topping up with a little water if needed, until the cashews are tender and creamy and the gravy has thickened.",
    "Stir in the thick coconut milk and a spoon of coconut oil, warm through without boiling hard, and season with salt.",
    "Serve over rice — a little goes a long way alongside dhal and a green.",
  ],
  modernMove:
    "Soaking the raw cashews before they simmer is the difference between hard nuts and plump, curry-saturated bites — they finish almost like a creamy bean.",
  notes:
    "A celebration dish made thrifty by stretching it across a full rice-and-curry plate rather than serving it solo.",
  zeroWasteHero: false,
  tags: ["cadju", "cashew", "curry", "coconut", "sri-lankan"],
  sources: [
    {
      title: "Vidya & Mike Benoit — 196 flavors",
      url: "https://www.196flavors.com/sri-lanka-kaju-maluwa-cashew-curry/",
      note: "Soaking cashews and simmering in spiced coconut milk with fenugreek and curry leaves",
    },
  ],
};
