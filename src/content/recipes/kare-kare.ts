import type { Recipe } from "../types";

export const kareKare: Recipe = {
  slug: "kare-kare",
  title: "Kare-Kare",
  cuisine: "filipino",
  blurb:
    "A thick, mild peanut stew built on annatto and toasted rice — the frugal table version leans on tripe and a parade of vegetables, so a little oxtail flavors the whole pot.",
  servings: 4,
  perServing: { calories: 620, protein: 28 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "oxtail, cut at the joints (or just beef shank)", qty: "3/4 lb", cost: 3.5 },
    { item: "beef tripe, cleaned (stretches the meat cheaply)", qty: "1/2 lb", cost: 1.5 },
    { item: "natural peanut butter (or ground roasted peanuts)", qty: "1/2 cup", cost: 0.8, spansWeeks: true },
    { item: "toasted rice, ground (the real thickener)", qty: "3 tbsp", cost: 0.1, spansWeeks: true },
    { item: "annatto/achuete seeds, steeped in hot water (or 1 tsp powder)", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "Chinese eggplant, sliced thick", qty: "2", cost: 0.7 },
    { item: "long beans (sitaw), cut", qty: "1 bunch", cost: 0.7 },
    { item: "bok choy or pechay", qty: "1 bunch", cost: 0.6 },
    { item: "banana heart or extra cabbage (optional)", qty: "1/2", cost: 0.5 },
    { item: "onion, garlic", qty: "1 onion, 4 cloves", cost: 0.45 },
    { item: "bagoong alamang (shrimp paste), to serve alongside", qty: "2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "oil, salt, steamed rice", qty: "to serve", cost: 0.5 },
  ],
  method: [
    "Simmer the oxtail and tripe in salted water with half the onion for 2–3 hours (or pressure-cook ~45 min) until fork-tender; keep the rich broth.",
    "Toast raw rice in a dry pan until deep golden and grind to a powder; steep the annatto seeds in hot broth and strain for the red color.",
    "In oil, soften the remaining onion and garlic, then whisk in the peanut butter, ground toasted rice, annatto liquid, and enough of the reserved broth to make a thick, velvety sauce.",
    "Slide in the cooked meat and simmer so the peanut sauce coats it; blanch or briefly simmer the eggplant, long beans, banana heart, and bok choy and arrange them in the pot.",
    "Season only with salt — kare-kare is deliberately bland on its own, because it's finished at the table with a spoonful of salty bagoong stirred in. Serve with rice.",
  ],
  modernMove:
    "Ground toasted rice, not just peanut butter, is what gives kare-kare its silky cling and nutty backbone — and leaving the stew under-seasoned on purpose lets the table-side bagoong do the salting, so the same gentle pot suits every eater.",
  tags: ["peanut", "oxtail", "tripe", "annatto", "vegetables", "stew"],
};
