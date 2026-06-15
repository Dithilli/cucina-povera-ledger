import type { Recipe } from "../types";

export const lontongSayur: Recipe = {
  slug: "lontong-sayur",
  title: "Lontong Sayur",
  cuisine: "indonesian",
  blurb:
    "Compressed rice cakes drowned in a gentle coconut vegetable curry — chayote and long beans simmered in a turmeric-lemongrass santan, a classic Indonesian breakfast eaten for dinner.",
  servings: 4,
  perServing: { calories: 590, protein: 16 },
  estCostPerServing: 1.2,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "lontong / compressed rice cakes (or firm cooked rice)", qty: "4 cups", cost: 0.7 },
    { item: "chayote or green papaya, julienned", qty: "2 cups", cost: 0.7 },
    { item: "long beans or green beans, cut", qty: "6 oz", cost: 0.7 },
    { item: "firm tofu, cubed", qty: "7 oz", cost: 0.9 },
    { item: "coconut milk", qty: "1 1/2 cups", cost: 0.9 },
    { item: "shallots", qty: "4", cost: 0.5 },
    { item: "garlic cloves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "red chilies", qty: "3", cost: 0.25, spansWeeks: true },
    { item: "fresh turmeric (or 1 tsp ground)", qty: "1 thumb", cost: 0.2, spansWeeks: true },
    { item: "galangal, sliced", qty: "1 thumb", cost: 0.2, spansWeeks: true },
    { item: "lemongrass stalk, bruised", qty: "1", cost: 0.3, spansWeeks: true },
    { item: "salam (Indonesian bay) or bay leaves", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "candlenuts or macadamia (optional, thickens)", qty: "2", cost: 0.3, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "fried shallots, sambal, salt", qty: "to serve", cost: 0.4 },
  ],
  method: [
    "Pound the shallots, garlic, chilies, turmeric, and candlenuts into a smooth spice paste (bumbu).",
    "Fry the bumbu in oil with the bruised lemongrass, galangal, and salam until the paste darkens and smells toasty and the raw turmeric edge cooks off.",
    "Add water and the firmer vegetables, simmer until nearly tender, then add the tofu and coconut milk.",
    "Cook the coconut curry on a bare simmer, stirring, so the santan thickens without splitting; season with salt to a mellow, savory broth.",
    "Slice the lontong into the bowls and ladle the hot vegetable curry over. Finish with fried shallots and a spoon of sambal.",
  ],
  modernMove:
    "Frying the turmeric bumbu before the coconut milk goes in cooks out the raw, chalky note and sets the curry's color and depth — then keeping it at a bare simmer stops the santan from breaking into oil.",
  notes:
    "No lontong? Press firm cooked rice into a tight block, chill, and slice — it holds in the broth like the real rice cake.",
  tags: ["coconut-curry", "rice-cake", "lontong", "santan", "vegetables", "tofu"],
};
