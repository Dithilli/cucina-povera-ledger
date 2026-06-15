import type { Recipe } from "../types";

export const nilaga: Recipe = {
  slug: "nilaga",
  title: "Nilaga (Boiled Beef & Vegetable Soup)",
  cuisine: "filipino",
  blurb:
    "The plainest, most honest Filipino soup — a tough cheap cut boiled long with corn, potato, and cabbage into a clear, savory broth seasoned only with fish sauce at the table.",
  servings: 5,
  perServing: { calories: 480, protein: 32 },
  estCostPerServing: 1.75,
  roles: ["dinner"],
  ingredients: [
    {
      item: "beef shank or brisket (or pork hocks), in chunks, bone in",
      qty: "1 1/2 lb",
      cost: 5.5,
    },
    { item: "onion, quartered", qty: "1", cost: 0.3 },
    { item: "garlic cloves, smashed", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "whole black peppercorns", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "potatoes, halved", qty: "2", cost: 0.5 },
    { item: "corn on the cob, in thick rounds", qty: "1", cost: 0.5 },
    { item: "Napa or green cabbage, in wedges", qty: "1/2 head", cost: 0.6 },
    { item: "green beans or saba banana (optional)", qty: "1 handful", cost: 0.5 },
    { item: "fish sauce (patis), salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Cover the beef with water, bring to a boil, and skim off all the gray scum until the broth runs clear — this patience is the difference between clean nilaga and a muddy soup.",
    "Add the onion, garlic, and peppercorns. Simmer gently, partly covered, 1 1/2 to 2 hours (or pressure-cook ~40 minutes) until the meat is fork-tender and the broth is rich.",
    "Add the potatoes and corn and cook 12-15 minutes until nearly tender, then the green beans for another 5.",
    "Lay the cabbage wedges on top and cook just until wilted but still bright, 3-4 minutes. Season the pot lightly and let each person add fish sauce (with crushed chili and calamansi or lime) to their own bowl. Serve with rice.",
  ],
  modernMove:
    "The whole technique is restraint: a long skim-and-simmer of one tough cut, vegetables added by cooking time, and seasoning left to the table — clarity from patience, not ingredients.",
  notes:
    "Built around the cheapest, hardest-working cut of beef or a few pork hocks; the bones give a gelatin-rich broth that no quick cut can.",
  tags: ["soup", "beef", "boiled", "corn", "cabbage", "one-pot"],
  sources: [
    { title: "Lalaine Manalo — Kawaling Pinoy", url: "https://www.kawalingpinoy.com/nilagang-baka/", note: "Clear boiled-beef soup, skimming the scum and adding vegetables by cooking time" },
    { title: "Vanjo Merano — Panlasang Pinoy", url: "https://panlasangpinoy.com/nilagang-baka-recipe/", note: "Long simmer of a tough cut with corn, potato, and cabbage" },
  ],
};
