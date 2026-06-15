import type { Recipe } from "../types";

export const feijoadaTransmontana: Recipe = {
  slug: "feijoada-transmontana",
  title: "Feijoada Transmontana",
  cuisine: "portuguese",
  blurb:
    "The mountain feijoada of Trás-os-Montes — white beans slow-stewed with whatever smoked pork scraps the pig-killing left behind, far humbler than the famous Brazilian black-bean version.",
  servings: 6,
  perServing: { calories: 620, protein: 34 },
  estCostPerServing: 1.85,
  roles: ["dinner"],
  ingredients: [
    {
      item: "dried white beans, soaked overnight (or 4 cups cooked, with their liquid)",
      qty: "1 lb",
      cost: 1.6,
    },
    {
      item: "smoked pork scraps — a chunk of presunto bone, an ear, a tail, or a few rib tips",
      qty: "about 12 oz total",
      cost: 4.0,
    },
    { item: "chouriço, sliced", qty: "5 oz", cost: 2.5, spansWeeks: true },
    { item: "streaky smoked bacon, diced", qty: "4 oz", cost: 1.5 },
    { item: "onions, chopped", qty: "2", cost: 0.6 },
    { item: "garlic cloves, crushed", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "ripe tomatoes (or canned), chopped", qty: "2", cost: 0.7 },
    { item: "carrots, in chunks", qty: "2", cost: 0.4 },
    { item: "bay leaves", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "sweet pimentão / paprika", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "olive oil", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "salt, black pepper", qty: "to taste" },
  ],
  method: [
    "Cover the smoked pork scraps and bacon with cold water, bring to a boil, and simmer 30 minutes to render fat and tame the salt; skim and keep the broth.",
    "In olive oil, sweat the onions, garlic, carrots, and bay until soft, then stir in paprika and tomatoes and cook to a loose refogado.",
    "Add the beans, the smoked meats, and enough of their broth to cover. Simmer gently, half-covered, 1 to 1 1/2 hours until the beans are creamy and the scraps surrender their meat off the bone.",
    "Twenty minutes before the end, drop in the sliced chouriço so it scents the pot without dissolving. Pull the bones, shred any clinging meat back in, season, and rest before serving with broa or rice.",
  ],
  modernMove:
    "Boiling the salted scraps first and reserving that smoky broth lets you build the whole stew on rendered pig flavour — a few ounces of bone and skin season six bowls.",
  tags: ["legumes", "white-beans", "pork", "chouriço", "stew", "one-pot"],
};
