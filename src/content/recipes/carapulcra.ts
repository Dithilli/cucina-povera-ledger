import type { Recipe } from "../types";

export const carapulcra: Recipe = {
  slug: "carapulcra",
  title: "Carapulcra",
  cuisine: "andean",
  blurb:
    "Perhaps Peru's oldest stew: sun-dried potatoes (papa seca) toasted and rehydrated until earthy and chewy, simmered with a little pork in ají panca and ground peanut, scented with clove and cinnamon to a thick, smoky, brick-brown pot.",
  servings: 5,
  perServing: { calories: 620, protein: 22 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "papa seca (dried potato)", qty: "2 cups", cost: 2.0 },
    { item: "pork shoulder, cut in chunks", qty: "10 oz", cost: 2.6 },
    { item: "red onion, finely diced", qty: "1 large", cost: 0.4 },
    { item: "garlic, minced", qty: "4 cloves", cost: 0.2, spansWeeks: true },
    { item: "ají panca paste", qty: "2 tbsp", cost: 0.5, spansWeeks: true },
    { item: "roasted peanuts, ground", qty: "1/3 cup", cost: 0.5, spansWeeks: true },
    { item: "cinnamon stick", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "whole cloves", qty: "2", cost: 0.05, spansWeeks: true },
    { item: "ground cumin", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "white rice, to serve", qty: "to serve" },
  ],
  method: [
    "Toast the papa seca in a dry pan until it smells nutty, then rinse and soak in warm water for at least an hour until the pieces swell and soften.",
    "Brown the pork in oil, remove it, then build the aderezo: fry the onion, garlic, ají panca and cumin down to a dark, glossy paste.",
    "Return the pork with the drained papa seca, the cinnamon stick and cloves, and enough water or stock to cover. Bring to a simmer.",
    "Cover and cook low 45–60 minutes, stirring now and then so the potato doesn't catch, until the pork is tender and the stew has thickened.",
    "Stir in the ground peanuts and let it cook a few more minutes until rich and creamy. Serve thick over white rice.",
  ],
  modernMove:
    "Dry-toast the papa seca before soaking — that brief scorch deepens its earthy flavor and is the step that separates a true carapulcra from one that tastes merely of reconstituted potato.",
  notes:
    "Pre-Columbian in origin; papa seca was the Andean way of storing the harvest. A small amount of pork and a handful of peanuts thicken and enrich a whole pot. Better the next day.",
  zeroWasteHero: true,
  tags: ["dinner", "stew", "dried-potato", "pork", "peanut", "andean"],
  sources: [
    {
      title: "Eat Peru — Carapulcra Recipe",
      url: "https://www.eatperu.com/carapulcra-recipe/",
      note: "Toasted-and-soaked papa seca simmered with pork, ají panca, peanut, clove and cinnamon",
    },
  ],
};
