import type { Recipe } from "../types";

export const cornTortillas: Recipe = {
  slug: "corn-tortillas",
  title: "Corn Tortillas",
  cuisine: "mexican",
  blurb:
    "The plate, the utensil, and the bread of Mesoamerica — masa pressed and cooked on a hot comal. The foundation everything else sits on.",
  servings: 4,
  perServing: { calories: 210, protein: 5 },
  estCostPerServing: 0.22,
  roles: ["base"],
  ingredients: [
    { item: "masa harina (or fresh nixtamalized masa)", qty: "2 cups", cost: 0.7 },
    { item: "warm water", qty: "about 1 1/2 cups" },
    { item: "salt", qty: "1 tsp", spansWeeks: true },
  ],
  method: [
    "Mix masa harina with salt, then work in the warm water until it forms a soft, play-dough texture that doesn't crack at the edges when pressed.",
    "Rest the dough 15–20 minutes (the flour keeps hydrating). Divide into golf-ball portions.",
    "Press each ball flat between two sheets of plastic (a press, a flat pan, or a heavy book).",
    "Cook on a dry, screaming-hot comal/skillet: ~30s, flip, ~45s until it puffs, flip again briefly. Keep warm wrapped in a cloth.",
  ],
  modernMove:
    "Heat is everything — a properly hot dry comal makes the tortilla puff into two layers (the sign of a cooked, pliable tortilla). Get the hydration right and they stay soft, not brittle.",
  notes: "Day-old tortillas are not waste — they become chilaquiles, migas, sopa de tortilla, or totopos.",
  tags: ["masa", "corn", "base", "tortilla", "nixtamal"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen, Corn Tortillas from Scratch",
      url: "https://www.mexicoinmykitchen.com/corn-tortillas-from-scratch/",
      note: "Masa-harina hydration, dough consistency, and comal puffing.",
    },
  ],
};
