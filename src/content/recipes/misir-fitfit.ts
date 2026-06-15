import type { Recipe } from "../types";

export const misirFitfit: Recipe = {
  slug: "misir-fitfit",
  title: "Misir Fitfit",
  cuisine: "ethiopian",
  blurb:
    "Last night's misir wot torn together with day-old injera until every spongy shred drinks up the brick-red lentils — the thriftiest dinner in the cuisine, sharpened with a raw onion-and-chile awaze.",
  servings: 2,
  perServing: { calories: 650, protein: 24 },
  estCostPerServing: 0.6,
  roles: ["dinner", "lunch", "breakfast"],
  ingredients: [
    { item: "leftover misir wot (red-lentil stew)", qty: "1 1/2 cups" },
    { item: "day-old injera, torn into bite-size pieces", qty: "3–4 pieces" },
    { item: "niter kibbeh or oil", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "berbere", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "red onion, slivered", qty: "1/2 small", cost: 0.2 },
    { item: "green chile, slivered", qty: "1", cost: 0.15 },
    { item: "lemon juice", qty: "a squeeze", cost: 0.1 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Warm the leftover misir wot with a splash of water to loosen it back to a saucy, spoon-coating stew.",
    "Heat the niter kibbeh in a wide pan and bloom the berbere in it for a few seconds until it darkens and goes fragrant — this is the quick awaze base.",
    "Tear the day-old injera into the pan, then fold in the warm misir, tossing until every torn piece is coated and heated through. Keep it loose; add water if it tightens.",
    "Stir most of the slivered onion and chile through, season with salt and a squeeze of lemon, and scatter the rest raw over the top. Eat warm, straight from the pan, with fresh injera to scoop.",
  ],
  modernMove:
    "Blooming the berbere in hot niter kibbeh before the injera goes in turns plain leftovers into a fresh awaze-laced dish — and tossing while everything's hot lets the day-old injera drink the lentil sauce instead of going to mush. The raw onion and chile on top keep it sharp against the rich base.",
  notes:
    "Fitfit is the original panzanella move: stale bread rescued by sauce and fat. Served warm and saucy it shades into firfir; left to cool with extra lemon it's a brighter fitfit. Either way, nothing from last night's wot is wasted.",
  zeroWasteHero: true,
  tags: ["fitfit", "firfir", "misir", "lentils", "berbere", "awaze", "zero-waste", "leftovers"],
  sources: [
    {
      title: "Kittee Berns — Teff Love: Adventures in Vegan Ethiopian Cooking (Book Pub., 2015)",
      note: "the 'Injera Firfir' template — leftover wot torn together with day-old injera and bloomed berbere; misir is the classic wot to use",
    },
    {
      title: "Demand Africa — A Quick Guide to Ethiopian Food",
      url: "https://demandafrica.com/food/a-quick-guide-to-ethiopian-food/",
      note: "firfir/fitfit as the thrifty day-old-injera use-up (hot vs. cool), and awaze as the berbere-garlic condiment that sharpens it",
    },
  ],
};
