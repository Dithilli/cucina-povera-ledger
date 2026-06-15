import type { Recipe } from "../types";

export const jeyukBokkeum: Recipe = {
  slug: "jeyuk-bokkeum",
  title: "Jeyuk Bokkeum",
  cuisine: "korean",
  blurb:
    "Spicy gochujang pork stir-fry — a little thin-sliced pork stretched with onion and a fiery marinade into a glossy, rice-devouring dinner.",
  servings: 4,
  perServing: { calories: 640, protein: 30 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    {
      item: "thinly sliced pork shoulder or belly, in bite-size pieces",
      qty: "12 oz",
      cost: 4.2,
    },
    {
      item: "onion, sliced thick",
      qty: "1 large",
      cost: 0.4,
    },
    { item: "green onions, cut into batons", qty: "3", cost: 0.3 },
    {
      item: "garlic cloves, minced + grated ginger",
      qty: "4 + 1 tsp",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "gochujang (Korean chili paste)",
      qty: "2 tbsp",
      cost: 0.5,
      spansWeeks: true,
    },
    {
      item: "gochugaru (Korean chili flakes)",
      qty: "1 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    {
      item: "rice syrup or sugar + a splash of mirin",
      qty: "1 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "neutral oil + sesame oil to finish",
      qty: "1 tbsp + drizzle",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "toasted sesame seeds", qty: "to finish", cost: 0.1 },
    { item: "steamed short-grain rice, to serve", qty: "for 4", cost: 0.6 },
  ],
  method: [
    "Mix gochujang, gochugaru, soy, garlic, ginger, rice syrup and mirin into a marinade. Toss the pork through it and let it sit 20 minutes (or overnight) while you cut the vegetables.",
    "Get a wide pan or wok smoking hot with the neutral oil. Spread the pork in a single layer and leave it to sear before stirring — you want browning, not a stew.",
    "Once the pork is nearly cooked and the marinade is caramelizing on the pan, add the onion and stir-fry hard so it softens but keeps a little bite.",
    "Throw in the green onion batons at the very end, kill the heat, and finish with sesame oil and seeds. Serve over rice with lettuce leaves to wrap. Leftovers keep 3 days and reheat into a fast second dinner.",
  ],
  modernMove:
    "Marinate the pork in the gochujang itself, then cook it screaming-hot and undisturbed: the sugar in the paste caramelizes onto the meat, so 12 oz of pork eats like twice that.",
  tags: ["pork", "bokkeum", "gochujang", "spicy", "stir-fry"],
};
