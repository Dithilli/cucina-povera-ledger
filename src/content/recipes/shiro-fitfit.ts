import type { Recipe } from "../types";

export const shiroFitfit: Recipe = {
  slug: "shiro-fitfit",
  title: "Shiro Fitfit",
  cuisine: "ethiopian",
  blurb:
    "Yesterday's stiffened shiro and torn day-old injera tossed together with a little fresh berbere oil — the cuisine's everyday zero-waste breakfast, nothing left over wasted.",
  servings: 2,
  perServing: { calories: 360, protein: 13 },
  estCostPerServing: 0.55,
  roles: ["breakfast", "lunch"],
  ingredients: [
    { item: "leftover thick shiro wot", qty: "1 1/2 cups" },
    { item: "day-old injera, torn into bite-size pieces", qty: "3 pieces" },
    { item: "niter kibbeh or oil", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "berbere", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "red onion + green chile, slivered (to finish)", qty: "a little", cost: 0.3 },
  ],
  method: [
    "Warm the leftover shiro with a splash of water to loosen it back to a saucy consistency.",
    "Heat the niter kibbeh in a pan and bloom the berbere in it for a few seconds.",
    "Tear the day-old injera into the pan, then fold in the warm shiro, tossing until every piece is coated and heated through.",
    "Top with slivered raw onion and green chile and eat straight from the pan.",
  ],
  modernMove:
    "Fitfit is the original 'panzanella' move — stale bread (injera here) rescued by being dressed in flavorful fat and a sauce. Toss while everything's warm so the injera drinks up the shiro without going to mush.",
  zeroWasteHero: true,
  notes:
    "Any leftover wot can be turned into fitfit/firfir this way — shiro, misir, or timatim. The day-old injera is the point, not a compromise.",
  tags: ["fitfit", "shiro", "zero-waste", "leftovers", "breakfast"],
};
