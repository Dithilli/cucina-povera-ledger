import type { Recipe } from "../types";

export const fishCurrySl: Recipe = {
  slug: "fish-curry-sl",
  title: "Sri Lankan Fish Curry (Maalu Hodi)",
  cuisine: "sri-lankan",
  blurb:
    "Fish poached in a red coconut-milk gravy bloomed with roasted curry powder, rampe, and curry leaves — the everyday rice-and-curry centerpiece, creamy, tart with goraka, and warm with chili.",
  servings: 4,
  perServing: { calories: 480, protein: 28 },
  estCostPerServing: 2.2,
  roles: ["dinner"],
  ingredients: [
    { item: "firm white fish or tuna, in chunks", qty: "1 1/4 lb", cost: 5.5 },
    { item: "coconut milk (thin and thick, separated)", qty: "1 1/2 cups", cost: 1.0 },
    { item: "red onion, sliced", qty: "1", cost: 0.3 },
    { item: "garlic and ginger, crushed", qty: "1 tbsp each", cost: 0.2, spansWeeks: true },
    { item: "roasted curry powder", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "chili powder and turmeric", qty: "1 tsp + 1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "goraka or tamarind", qty: "2 pieces / 1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "pandan (rampe) and curry leaves", qty: "1 sprig each", cost: 0.2, spansWeeks: true },
    { item: "cinnamon stick", qty: "1 small", cost: 0.05, spansWeeks: true },
    { item: "oil", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "to taste", cost: 0.02, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "Warm the oil and crackle the cinnamon, pandan, and curry leaves. Add onion, garlic, and ginger and soften without browning.",
    "Stir in the curry powder, chili, and turmeric and cook a minute until fragrant and the oil reddens.",
    "Pour in the thin coconut milk with the goraka or tamarind and salt. Bring to a gentle simmer.",
    "Slide in the fish chunks and simmer gently, spooning the gravy over them, until just cooked through — about 8 to 10 minutes. Don't boil hard or the fish toughens.",
    "Pour in the thick coconut milk last and warm through without letting it boil, so it stays creamy and doesn't split. Serve with rice and sambol.",
  ],
  modernMove:
    "Add the thick coconut milk at the very end and keep it below a boil — high heat splits coconut milk into oily curds. The late, gentle finish is what keeps the hodi silky.",
  notes:
    "Goraka gives the most authentic sour note, but a spoon of tamarind works in a pinch. Use the firmest fish you can afford so the chunks survive the simmer intact.",
  zeroWasteHero: false,
  tags: ["sri-lankan", "fish", "coconut-milk", "curry", "rice-and-curry", "goraka"],
  sources: [
    {
      title: "The Flavor Bender — Sri Lankan Fish Curry",
      url: "https://www.theflavorbender.com/sri-lankan-fish-curry-recipe/",
      note: "Tempering aromatics, simmering fish in thin coconut milk, finishing with thick milk off the boil",
    },
  ],
};
