import type { Recipe } from "../types";

export const arrozBranco: Recipe = {
  slug: "arroz-branco",
  title: "Arroz Branco (Portuguese White Rice)",
  cuisine: "portuguese",
  blurb:
    "Everyday Portuguese white rice, started in a little olive oil with onion and garlic so each grain is glossed before the water goes in — fluffier and more savoury than plain boiled rice, the plate for fish, beans, and stews.",
  servings: 4,
  perServing: { calories: 250, protein: 5 },
  estCostPerServing: 0.25,
  roles: ["base", "side"],
  ingredients: [
    { item: "long-grain (carolino) rice", qty: "1 1/2 cups", cost: 0.7 },
    { item: "small onion, finely chopped", qty: "1/2", cost: 0.15 },
    { item: "garlic clove, minced", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "olive oil", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "hot water or light stock", qty: "3 cups", cost: 0 },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soften the onion and garlic in the olive oil over medium-low heat with the bay leaf until translucent and fragrant, without colouring.",
    "Add the rice and stir for a minute, coating every grain in the oil until it turns slightly translucent at the edges — this brief toasting keeps the rice loose and separate.",
    "Pour in the hot water, add salt, and bring to a boil. Stir once, then lower to a bare simmer and cover.",
    "Cook undisturbed about 15 minutes, until the water is absorbed and the rice is tender. Rest covered off the heat 5 minutes, then fluff with a fork and lift out the bay leaf.",
  ],
  modernMove:
    "Toast the rice in the refogado oil before adding liquid: coating the grains in fat seals them so they steam into separate, glossy grains instead of clumping.",
  notes:
    "The default Portuguese side. Carolino rice drinks up sauce; this is the bed for bacalhau, bean stews, and any refogado-based dish.",
  tags: ["rice", "base", "side", "olive-oil", "arroz"],
  sources: [
    { title: "Tia Maria — Portuguese Rice (Arroz à Portuguesa)", url: "https://tiamariasblog.com/classic-portuguese-rice/", note: "rice started in olive oil with onion and garlic before the water goes in" },
  ],
};
