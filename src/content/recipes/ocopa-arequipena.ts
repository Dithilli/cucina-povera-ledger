import type { Recipe } from "../types";

export const ocopaArequipena: Recipe = {
  slug: "ocopa-arequipena",
  title: "Ocopa Arequipeña",
  cuisine: "andean",
  blurb:
    "Arequipa's haunting green-tinged sauce — toasted peanuts, ají mirasol, and the wild mint huacatay blended with cheese into a creamy, herbaceous blanket poured over warm boiled potatoes.",
  servings: 4,
  perServing: { calories: 490, protein: 16 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "yellow/waxy potatoes", qty: "1.5 lb", cost: 0.8 },
    { item: "roasted peanuts", qty: "1/2 cup", cost: 0.6 },
    { item: "ají mirasol or amarillo paste", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "huacatay (black mint) paste, or fresh", qty: "1 tbsp", cost: 0.4, spansWeeks: true },
    { item: "fresh cheese (queso fresco)", qty: "4 oz", cost: 0.9 },
    { item: "evaporated milk", qty: "1/2 cup", cost: 0.4, spansWeeks: true },
    { item: "saltine crackers", qty: "4", cost: 0.1, spansWeeks: true },
    { item: "onion + garlic", qty: "1/2 + 1 clove", cost: 0.2 },
    { item: "eggs, black olives, to garnish", qty: "to serve", cost: 0.7 },
    { item: "oil, salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Boil the potatoes whole until tender, then peel and slice into thick rounds; hard-boil the eggs alongside.",
    "Sear the onion and garlic in a dry pan or with a little oil until charred at the edges, then fry the ají paste briefly to take off the raw bite.",
    "Blend the charred aromatics with the roasted peanuts, huacatay, cheese, crackers, and evaporated milk until thick and pourable, loosening with a little oil or more milk as needed.",
    "Warm the sauce gently if you like, then lay the potato slices over lettuce and ladle the ocopa generously over the top.",
    "Garnish each plate with boiled egg and a black olive.",
  ],
  modernMove:
    "Charring the onion and garlic before blending — a nod to the old habit of grinding everything on a hot batán stone — gives ocopa its smoky backbone, and the huacatay is what separates it from huancaína: don't skip the black mint, it's the soul of the dish.",
  notes: "Named for the ocopa, the portable pouch Inca chasquis carried ground ají-and-nut pastes in; a frugal sauce that turns plain boiled potatoes into a destination.",
  zeroWasteHero: false,
  tags: ["potato", "peanut", "huacatay", "aji", "cheese", "peruvian", "andean"],
  sources: [
    {
      title: "Peru Delights — Ocopa Sauce",
      url: "https://perudelights.com/ocopa-sauce/",
      note: "Peanut, ají, huacatay, and cheese sauce over boiled potatoes with egg and olive garnish.",
    },
  ],
};
