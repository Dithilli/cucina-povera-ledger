import type { Recipe } from "../types";

export const arrozDeGrelos: Recipe = {
  slug: "arroz-de-grelos",
  title: "Arroz de Grelos (Turnip-Greens Rice)",
  cuisine: "portuguese",
  blurb:
    "Bitter turnip tops cooked down into a soupy garlic-and-olive-oil rice — the green Minho one-pot that turns the cheapest, most abundant winter vegetable into a warming dinner.",
  servings: 4,
  perServing: { calories: 460, protein: 12 },
  estCostPerServing: 0.72,
  roles: ["dinner"],
  ingredients: [
    { item: "turnip greens / grelos (or broccoli rabe), chopped", qty: "1 1/2 lb", cost: 1.4 },
    { item: "short or medium-grain rice", qty: "1 1/4 cups", cost: 0.7 },
    { item: "onion, finely diced", qty: "1", cost: 0.3 },
    { item: "garlic cloves, sliced", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    {
      item: "olive oil, generous",
      qty: "1/4 cup",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "lemon or splash of red wine vinegar", qty: "1", cost: 0.3 },
    { item: "salt, black pepper, chili flakes", qty: "to taste" },
  ],
  method: [
    "Blanch the chopped grelos 2–3 minutes in salted water to knock back their bitterness, then lift them out and KEEP the green cooking water — it becomes the broth.",
    "Build a refogado: soften the onion, garlic, and bay leaf gently in the olive oil until sweet and golden.",
    "Stir in the drained greens to coat in the oil, then add the raw rice and about 5 cups of the reserved green water. Season and simmer uncovered 12–15 minutes.",
    "Stop while it is still loose and soupy — arroz de grelos is meant to be malandrinho, brothy and spoonable. Off the heat, beat in raw olive oil, a squeeze of lemon, and chili flakes. Serve at once in deep bowls.",
  ],
  modernMove:
    "Cook the rice in the greens' own blanching water rather than fresh water — you reclaim all the colour and minerals you'd otherwise pour down the drain, and the broth turns vividly green.",
  notes:
    "A frugal Minho staple from the season when turnip tops are everywhere. Broccoli rabe, kale, or beet tops all stand in. Good with a fried egg or a few flakes of salt cod on top.",
  tags: ["greens", "grelos", "rice", "garlic", "one-pot"],
  sources: [
    { title: "196 flavors — Arroz de Grelos", url: "https://www.196flavors.com/portugal-arroz-de-grelos/", note: "northern Portugal/Galician turnip-greens rice with garlic and olive oil" },
  ],
};
