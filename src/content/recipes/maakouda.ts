import type { Recipe } from "../types";

export const maakouda: Recipe = {
  slug: "maakouda",
  title: "Maakouda",
  cuisine: "moroccan",
  blurb:
    "Mashed potato spiked with garlic, cumin, turmeric, and fistfuls of herbs, bound with egg, patted into cakes and fried gold — pure street thrift, stuffed warm into a split baguette with harissa and lemony tomato.",
  servings: 4,
  perServing: { calories: 430, protein: 11 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "potatoes, boiled and mashed", qty: "2 lb", cost: 1.2 },
    { item: "eggs", qty: "2", cost: 0.5 },
    { item: "parsley and cilantro, chopped", qty: "1/2 cup", cost: 0.4, spansWeeks: true },
    { item: "garlic", qty: "2 cloves", cost: 0.05, spansWeeks: true },
    { item: "cumin, paprika, turmeric", qty: "1 tsp each", cost: 0.15, spansWeeks: true },
    { item: "flour for coating", qty: "1/2 cup", cost: 0.15, spansWeeks: true },
    { item: "oil for frying", qty: "for frying", cost: 0.6 },
    { item: "baguette or khobz, to serve", qty: "2", cost: 0.6 },
  ],
  method: [
    "Mash the warm potatoes smooth and fold in one egg, the garlic, herbs, cumin, paprika, turmeric, and salt.",
    "Shape heaped spoonfuls into flat cakes about an inch thick.",
    "Beat the second egg, dip each cake first in flour then in egg so it holds together in the oil.",
    "Fry in 350°F oil a few at a time until deep gold and crisp, about 3–4 minutes, turning once; drain on paper.",
    "Stuff hot into split bread with harissa and a lemony tomato relish, or eat as-is.",
  ],
  modernMove:
    "The flour-then-egg double coat is what keeps a soft mashed-potato cake from disintegrating in the oil — the flour gives the wet egg something to grip, sealing each patty into a crisp shell.",
  notes:
    "Born of leftover boiled potatoes — nothing wasted, a few cents turned into a filling sandwich.",
  zeroWasteHero: true,
  tags: ["maakouda", "potatoes", "fried", "street", "moroccan"],
  sources: [
    {
      title: "Veggie Desserts — Maakouda (Moroccan Potato Cakes)",
      url: "https://veggiedesserts.com/maakouda/",
      note: "Spiced mashed-potato cakes coated in flour and egg, fried gold, served in bread with harissa.",
    },
  ],
};
