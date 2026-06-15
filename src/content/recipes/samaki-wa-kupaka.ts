import type { Recipe } from "../types";

export const samakiWaKupaka: Recipe = {
  slug: "samaki-wa-kupaka",
  title: "Samaki wa Kupaka",
  cuisine: "east-african",
  blurb:
    "Zanzibar's grilled fish painted with a thick tamarind-coconut sauce — the fish takes a quick char, then is basted and finished in a tangy, spiced coconut cream until it glazes a deep gold.",
  servings: 4,
  perServing: { calories: 520, protein: 28 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "whole tilapia or firm white fish fillets", qty: "1 1/4 lb", cost: 5.5 },
    { item: "coconut milk (thick / cream)", qty: "1 cup", cost: 0.7 },
    { item: "tamarind pulp", qty: "1 1/2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "onion, finely chopped", qty: "1", cost: 0.4 },
    { item: "garlic and ginger, grated", qty: "3 cloves + thumb", cost: 0.2, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.03, spansWeeks: true },
    { item: "curry powder", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "bird's-eye chilli (pilipili), minced", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "lemon or lime", qty: "1", cost: 0.25 },
    { item: "oil and salt", qty: "2 tbsp + to taste", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Soak the tamarind in a little warm water, then squeeze and strain to a sour juice; discard seeds and fibre.",
    "Rub the fish with salt, turmeric, half the garlic-ginger and a squeeze of citrus, then grill or sear until just charred and almost cooked through.",
    "Fry the onion in oil until golden, add the rest of the garlic-ginger, curry powder and chilli, then pour in the coconut milk and tamarind juice.",
    "Simmer the sauce until thick enough to coat a spoon, seasoning with salt.",
    "Lay the fish in the sauce (or spoon it over), baste, and simmer 3–4 minutes so it drinks up the coconut and glazes; serve over coconut rice.",
  ],
  modernMove:
    "Grill the fish first and finish it in the sauce — kupaka means 'to smear,' and the charred surface grips the tamarind-coconut glaze far better than a fish poached raw in it.",
  notes:
    "Tamarind is non-negotiable here: it's what keeps the rich coconut sauce bright and tangy rather than flat and heavy.",
  zeroWasteHero: false,
  tags: ["fish", "coconut", "tamarind", "zanzibar", "east-african"],
  sources: [
    {
      title: "Fauzia's Kitchen Fun — Samaki wa Kupaka (Grilled Fish in Coconut Sauce)",
      url: "https://fauziaskitchenfun.com/samaki-wa-kupaka-grilled-fish-in-coconut-sauce/",
      note: "Marinate and grill the fish, then baste and finish in a thick tamarind-spiced coconut sauce; coastal Swahili technique.",
    },
  ],
};
