import type { Recipe } from "../types";

export const sayurLodeh: Recipe = {
  slug: "sayur-lodeh",
  title: "Sayur Lodeh",
  cuisine: "indonesian",
  blurb:
    "A gentle Javanese coconut-milk stew of whatever vegetables and tofu you have — comfort food that stretches a little coconut a long way.",
  servings: 4,
  perServing: { calories: 480, protein: 18 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    {
      item: "mixed vegetables (cabbage, long beans, chayote, eggplant)",
      qty: "5 cups",
      cost: 2.0,
    },
    { item: "firm tofu, cubed", qty: "8 oz", cost: 0.8 },
    { item: "coconut milk", qty: "1 can (14 oz)", cost: 1.0, spansWeeks: true },
    { item: "shallots", qty: "4", cost: 0.4 },
    { item: "garlic cloves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "candlenuts or raw cashews", qty: "3", cost: 0.3, spansWeeks: true },
    { item: "galangal, smashed", qty: "1 thumb", cost: 0.2, spansWeeks: true },
    {
      item: "bay leaves (salam) and a stalk of lemongrass, bruised",
      qty: "2 + 1",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "ground coriander", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt and palm sugar", qty: "to taste" },
  ],
  method: [
    "Pound the shallots, garlic, candlenuts, and coriander into a paste and fry it in the oil with the galangal, bay, and lemongrass until fragrant and the oil splits.",
    "Add water (about 2 cups) and bring to a simmer, then add the firmer vegetables first and the tofu.",
    "Pour in the coconut milk and let it come barely to a simmer — stir often and keep it gentle so it never boils hard and curdles.",
    "Add the quick-cooking greens at the end. Season with salt and a pinch of palm sugar; the broth should taste mild, savory, and faintly sweet. Serve over rice.",
  ],
  modernMove:
    "Frying the spice paste until the oil splits, then keeping the coconut milk at a bare simmer, gives a silky unbroken broth instead of a greasy curdled one.",
  tags: ["coconut-milk", "vegetables", "tofu", "javanese", "stew", "clean-out-fridge"],
};
