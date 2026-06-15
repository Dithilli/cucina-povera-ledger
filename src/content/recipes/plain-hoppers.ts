import type { Recipe } from "../types";

export const plainHoppers: Recipe = {
  slug: "plain-hoppers",
  title: "Hoppers (Appa)",
  cuisine: "sri-lankan",
  blurb:
    "Crisp-laced, bowl-shaped pancakes of fermented rice flour and coconut milk — soft and spongy at the base, brittle and golden at the rim, made to be torn and dipped in curry.",
  servings: 4,
  perServing: { calories: 420, protein: 8 },
  estCostPerServing: 0.6,
  roles: ["dinner"],
  ingredients: [
    { item: "rice flour", qty: "2 cups", cost: 0.6 },
    { item: "thick coconut milk", qty: "1 1/2 cups", cost: 0.8 },
    { item: "active dry yeast", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "sugar", qty: "1 1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "warm water", qty: "as needed" },
    { item: "coconut oil for the pan", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "1/2 tsp" },
    { item: "pol sambol and ala hodi to serve", qty: "to taste", cost: 0.3 },
  ],
  method: [
    "Bloom the yeast with the sugar in a little warm water until foamy. Whisk into the rice flour with warm water to make a thick batter, cover, and ferment somewhere warm 8 hours or overnight until risen and tangy.",
    "Loosen with the coconut milk and salt to the consistency of thin cream, adding water if needed. Rest 30 minutes.",
    "Heat a small bowl-shaped hopper pan (or small wok) and wipe it with coconut oil. Pour in a ladle of batter and swirl quickly so it coats the sides into a thin lace, leaving a small soft puddle at the bottom.",
    "Cover and cook on low until the edges are crisp and lift away cleanly and the center is set but tender, 3–4 minutes. Repeat. Serve hot with pol sambol and a coconut curry.",
  ],
  modernMove:
    "Sugar is doing double duty — it feeds the ferment and caramelizes the rim, so a touch more sugar is the difference between a pale, leathery hopper and one with golden, shattering edges.",
  notes:
    "Season the pan once and resist over-oiling; a near-dry pan is what gives the dry crisp lace. The first hopper is always the test one.",
  zeroWasteHero: false,
  tags: ["sri-lankan", "hoppers", "appa", "fermented", "vegetarian"],
  sources: [
    {
      title: "196 flavors — Appam (Appa, Hoppers)",
      url: "https://www.196flavors.com/sri-lanka-appam-appa-hoppers/",
      note: "Plain hoppers — fermented rice-flour and coconut-milk batter swirled into a bowl-shaped pan for crisp edges and a soft center",
    },
  ],
};
