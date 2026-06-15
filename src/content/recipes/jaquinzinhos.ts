import type { Recipe } from "../types";

export const jaquinzinhos: Recipe = {
  slug: "jaquinzinhos",
  title: "Jaquinzinhos Fritos",
  cuisine: "portuguese",
  blurb:
    "Tiny horse-mackerel — the poor man's fish — dusted in flour and fried whole until crisp enough to eat bones and all. The smallest, cheapest catch nobody else wanted, turned into a feast.",
  servings: 4,
  perServing: { calories: 540, protein: 30 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  zeroWasteHero: true,
  ingredients: [
    {
      item: "small whole horse mackerel / jack (jaquinzinhos), gutted, heads on",
      qty: "1 1/2 lb",
      cost: 3.5,
    },
    { item: "plain flour for dredging", qty: "1 cup", cost: 0.3 },
    { item: "coarse salt", qty: "for salting", cost: 0.2, spansWeeks: true },
    { item: "olive or vegetable oil for shallow frying", qty: "about 1 1/2 cups", cost: 1.2, spansWeeks: true },
    { item: "garlic cloves, smashed", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "lemon wedges", qty: "2", cost: 0.4 },
    { item: "tomato-and-onion salad to serve", qty: "1 bowl", cost: 0.9 },
    { item: "boiled potatoes (optional)", qty: "4", cost: 0.6 },
    { item: "black pepper", qty: "to taste" },
  ],
  method: [
    "Salt the little fish well and leave 20 minutes; pat dry. Because they are eaten whole there is nothing to trim and nothing thrown away — the bones crisp up and the heads are the crunchiest, best part.",
    "Heat the oil with the smashed garlic and bay until shimmering, then fish out the aromatics before they burn so the oil tastes of them.",
    "Dredge the fish in flour, shake off the excess, and fry in batches, not crowding the pan, 2–3 minutes a side until deep gold and rigid-crisp. Drain on paper.",
    "Pile high with lemon, a sharp tomato-and-onion salad, and boiled potatoes; eat them with your fingers, spine and all, while still hot.",
  ],
  modernMove:
    "Frying the whole fish bone-in and head-on until shatter-crisp makes the cheapest bycatch entirely edible — zero trim, zero waste, maximum crunch.",
  notes:
    "The frying oil, once strained, keeps for the next fish fry — another frugal carry-over.",
  tags: ["fish", "fried", "whole-fish", "horse-mackerel", "zero-waste", "frugal"],
  sources: [
    {
      title: "Food From Portugal — Fried Horse Mackerel",
      url: "https://www.foodfromportugal.com/recipes/fried-horse-mackerel-tomato-rice/",
      note: "Confirms the flour-dredge-and-fry method for small whole horse mackerel (carapau / jaquinzinhos).",
    },
  ],
};
