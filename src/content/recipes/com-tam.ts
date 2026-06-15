import type { Recipe } from "../types";

export const comTam: Recipe = {
  slug: "com-tam",
  title: "Cơm Tấm",
  cuisine: "vietnamese",
  blurb:
    "Broken-rice plate with lemongrass grilled pork — born frugal, from the fractured grains millers couldn't sell whole, now Saigon's signature dinner.",
  servings: 4,
  perServing: { calories: 640, protein: 32 },
  estCostPerServing: 1.35,
  roles: ["dinner"],
  ingredients: [
    { item: "broken rice (tấm), or rice pulsed once to crack", qty: "2 cups", cost: 0.6 },
    { item: "pork shoulder or thin pork chops", qty: "1 lb", cost: 3.2 },
    { item: "lemongrass stalks, minced", qty: "2", cost: 0.4, spansWeeks: true },
    { item: "shallots, minced", qty: "2", cost: 0.2 },
    { item: "garlic cloves, minced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "fish sauce", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "sugar (caramelized for color)", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "cucumber, tomato, pickled carrot to serve", qty: "to serve", cost: 0.6 },
    { item: "nước chấm (fish sauce, lime, sugar, chili, water)", qty: "to serve", cost: 0.3 },
    { item: "scallion oil (mỡ hành)", qty: "to finish", cost: 0.2 },
  ],
  method: [
    "Marinate the pork in lemongrass, shallots, garlic, fish sauce, sugar, and oil for at least an hour — the sugar is what gives the char its lacquered edge.",
    "Steam or simmer the broken rice with a touch less water than usual; the small fractured grains cook softer and faster than whole rice, which is the whole point of using them.",
    "Grill or pan-sear the pork hard over high heat until the lemongrass and sugar blacken at the edges and the inside stays juicy.",
    "Mound the broken rice, slice the pork over it, and spoon scallion oil across the top. Serve with cucumber, tomato, pickled carrot, and a bowl of nước chấm to pour over everything.",
  ],
  modernMove:
    "Broken grains aren't a downgrade — they drink up scallion oil and nước chấm where whole rice would shed it, so the cheap rice becomes the soul of the plate.",
  tags: ["broken-rice", "grilled-pork", "lemongrass", "nuoc-cham", "saigon"],
};
