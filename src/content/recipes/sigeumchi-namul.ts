import type { Recipe } from "../types";

export const sigeumchiNamul: Recipe = {
  slug: "sigeumchi-namul",
  title: "Sigeumchi-namul (Seasoned Spinach)",
  cuisine: "korean",
  blurb:
    "Spinach blanched for seconds and squeezed dry, then dressed with garlic, soy or salt, and toasted sesame — the gentlest, greenest banchan, and a fast nutty dinner over rice.",
  servings: 4,
  perServing: { calories: 450, protein: 15 },
  estCostPerServing: 0.9,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "spinach", qty: "1 lb", cost: 2.0 },
    {
      item: "garlic, minced",
      qty: "1 clove",
      cost: 0.05,
      spansWeeks: true,
    },
    {
      item: "scallion, finely sliced",
      qty: "1",
      cost: 0.1,
    },
    {
      item: "soy sauce or salt",
      qty: "to taste",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "toasted sesame oil",
      qty: "1 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "toasted sesame seeds",
      qty: "1 tsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "short-grain rice, to serve as a dinner",
      qty: "2 cups (dry)",
      cost: 1.0,
    },
  ],
  method: [
    "Bring a big pot of salted water to a rolling boil. Drop in the spinach and blanch just 20–30 seconds — only until it wilts and turns vivid green.",
    "Lift it out immediately into cold water to stop the cooking and lock the color, then drain.",
    "Gather the spinach into a ball and squeeze out as much water as you can with your hands — wet spinach makes a watery, flavorless namul, so squeeze it hard.",
    "Loosen the squeezed ball and toss with garlic, scallion, soy sauce or salt, sesame oil, and sesame seeds. Taste and adjust — it should be lightly seasoned and sesame-forward.",
    "Serve as banchan, fold into bibimbap, or pile over warm rice with an egg for a simple dinner.",
  ],
  modernMove:
    "Blanch fast and shock cold — seconds, not minutes — so the spinach stays bright green and silky instead of collapsing into grey mush. The squeeze afterward is what concentrates the flavor.",
  notes:
    "The green namul in a bibimbap bowl. Works with chard or other tender greens; tougher greens just need a slightly longer blanch.",
  tags: ["spinach", "namul", "banchan", "sesame", "side"],
};
