import type { Recipe } from "../types";

export const sinigangNaBaboy: Recipe = {
  slug: "sinigang-na-baboy",
  title: "Sinigang na Baboy (Sour Tamarind Pork Soup)",
  cuisine: "filipino",
  blurb:
    "The national comfort soup — a cheap fatty pork cut simmered tender in a broth soured with tamarind, then loaded with whatever vegetables are cheap that week.",
  servings: 5,
  perServing: { calories: 520, protein: 30 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    {
      item: "pork belly or pork spare ribs, cut into chunks",
      qty: "1 1/2 lb",
      cost: 5.0,
    },
    {
      item: "tamarind (fresh pods, or 1 sinigang mix sachet / 2 tbsp tamarind paste)",
      qty: "1/2 lb pods",
      cost: 0.8,
      spansWeeks: true,
    },
    { item: "onion, quartered", qty: "1", cost: 0.3 },
    { item: "tomatoes, quartered", qty: "2", cost: 0.5 },
    { item: "daikon radish (labanos), sliced", qty: "1 small", cost: 0.6 },
    { item: "long beans or green beans, in lengths", qty: "1 handful", cost: 0.6 },
    { item: "eggplant, sliced", qty: "1", cost: 0.5 },
    { item: "kangkong (water spinach) or spinach", qty: "1 bunch", cost: 0.6 },
    { item: "long green chili (siling haba)", qty: "1-2", cost: 0.2, spansWeeks: true },
    { item: "fish sauce (patis), salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Cover the pork with water, bring to a boil, and skim off the gray scum. Add the onion and tomatoes and simmer gently 60-90 minutes until the pork is fork-tender — this slow render is what gives a cheap cut its body.",
    "If using fresh tamarind, boil the pods separately until soft, mash, and press through a sieve into the pot; otherwise stir in the paste or sachet. Taste — the broth should be aggressively, mouth-puckeringly sour.",
    "Add the daikon and simmer 5 minutes, then the eggplant and beans for another 5, until just tender.",
    "Season with fish sauce. Drop in the chilies and the kangkong last and turn off the heat — the greens wilt in the residual heat. Serve in bowls with plenty of rice on the side.",
  ],
  modernMove:
    "Souring with real tamarind instead of a sachet, and adding the vegetables in waves by cooking time, keeps every one crisp-tender instead of stewing the whole pot to mush.",
  notes:
    "Sinigang is endlessly frugal — the souring agent and the rotating cast of cheap vegetables stay constant while the protein flexes to whatever is cheapest.",
  tags: ["soup", "pork", "tamarind", "sour", "vegetables", "one-pot"],
  sources: [
    { title: "Vanjo Merano — Panlasang Pinoy", url: "https://panlasangpinoy.com/pork-sinigang-na-baboy-recipe/", note: "Skimming the pork broth and souring it with tamarind to mouth-puckering" },
    { title: "Lalaine Manalo — Kawaling Pinoy", url: "https://www.kawalingpinoy.com/sinigang-na-baboy/", note: "Adding the rotating cast of vegetables in stages by cooking time" },
  ],
};
