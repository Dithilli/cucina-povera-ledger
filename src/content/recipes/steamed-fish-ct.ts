import type { Recipe } from "../types";

export const steamedFishCt: Recipe = {
  slug: "steamed-fish-ct",
  title: "Cantonese Steamed Fish",
  cuisine: "cantonese",
  blurb:
    "A whole fish steamed just to the moment the flesh slides off the bone, showered with ginger and scallion slivers, then crowned with smoking-hot oil that sizzles into a pool of seasoned soy.",
  servings: 4,
  perServing: { calories: 360, protein: 30 },
  estCostPerServing: 2.3,
  roles: ["dinner"],
  ingredients: [
    { item: "whole fresh white fish (branzino, sea bass, or tilapia), cleaned and scaled", qty: "1 (about 1 1/2 lb)", cost: 7.0 },
    { item: "ginger, half julienned and half sliced", qty: "2 in piece", cost: 0.2, spansWeeks: true },
    { item: "scallions, julienned", qty: "3", cost: 0.25 },
    { item: "cilantro", qty: "a few sprigs", cost: 0.2 },
    { item: "light soy sauce (or seasoned steamed-fish soy)", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "sugar", qty: "1/2 tsp", cost: 0.03, spansWeeks: true },
    { item: "Shaoxing wine", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "peanut oil", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "steamed jasmine rice, to serve", qty: "4 bowls", cost: 0.4 },
  ],
  method: [
    "Pat the fish bone-dry and score the thickest part of each side to the bone. Lay a few slices of ginger and a couple of scallion stalks on a heatproof plate and rest the fish on top so steam circles underneath; drizzle with the Shaoxing wine.",
    "Steam over rapidly boiling water with the lid on, about 8–10 minutes for a 1 1/2-lb fish — it's done the instant the flesh at the spine turns opaque and parts from the bone. Carefully pour off and discard the watery liquid that pools on the plate.",
    "Warm the soy with the sugar and a splash of water until just dissolved, and pour it around (not over) the fish. Heap the julienned ginger, scallion, and cilantro across the top.",
    "Heat the peanut oil until it shimmers and just smokes, then pour it over the aromatics so they crackle and release their fragrance into the soy. Bring to the table whole and serve over rice.",
  ],
  modernMove:
    "Discarding the steaming liquid before saucing is the detail that separates a Cantonese fish from a muddy one — that pooled water carries off the fishy off-notes, leaving only clean ginger, scallion, and soy to meet the hot oil.",
  notes:
    "Freshness is everything: clear eyes, firm flesh, no smell. The picked-clean frame and head make a fast stock for tomorrow's congee — nothing wasted.",
  zeroWasteHero: true,
  tags: ["fish", "steamed", "ginger-scallion", "hot-oil", "cantonese"],
  sources: [
    {
      title: "Judy — The Woks of Life, Cantonese Steamed Fish",
      url: "https://thewoksoflife.com/cantonese-steamed-fish/",
      note: "Steaming time by weight, pouring off the steaming liquid before saucing, and the hot-oil-over-aromatics finish.",
    },
  ],
};
