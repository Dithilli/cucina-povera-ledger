import type { Recipe } from "../types";

export const adobongBaboy: Recipe = {
  slug: "adobong-baboy",
  title: "Adobong Baboy (Pork Adobo)",
  cuisine: "filipino",
  blurb:
    "Fatty pork belly or shoulder braised low in vinegar, soy, garlic, and bay until the meat is spoon-tender and the sauce reduces to a dark, unctuous glaze. A little pork, slow-cooked, feeds a table over mountains of rice.",
  servings: 5,
  perServing: { calories: 640, protein: 28 },
  estCostPerServing: 1.95,
  roles: ["dinner"],
  ingredients: [
    { item: "pork belly or shoulder, cut in 1 1/2-inch chunks", qty: "2 lb", cost: 7.0 },
    { item: "cane or coconut vinegar", qty: "1/2 cup", cost: 0.4, spansWeeks: true },
    { item: "soy sauce (toyo)", qty: "1/3 cup", cost: 0.3, spansWeeks: true },
    { item: "garlic cloves, smashed", qty: "1 whole head", cost: 0.4, spansWeeks: true },
    { item: "dried bay leaves", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "whole black peppercorns", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "water", qty: "1 1/2 cups" },
    { item: "brown sugar", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "Marinate the pork in the soy, smashed garlic, bay, and peppercorns for at least 30 minutes (overnight is better). The marinade becomes the braise.",
    "Render the pork in a dry heavy pot over medium-high heat, letting the fat melt out and the chunks brown in their own grease. This is where the deep flavor and the silky sauce come from — no extra oil needed.",
    "Add the reserved marinade, the vinegar, and the water. Bring to a boil and let it bubble a couple of minutes untouched to cook off the raw vinegar's sharpness before you stir.",
    "Cover and simmer low 50 to 60 minutes, until the pork is fork-tender. Pork takes longer than chicken — that time renders the collagen and silkens the sauce.",
    "Uncover, stir in the sugar, and reduce until the liquid turns to a dark, clinging glaze slicked with rendered fat. Serve over rice with a saucer of sawsawan.",
  ],
  modernMove:
    "Browning the pork in its own rendered fat — no added oil — and then reducing the braise at the end gives a glossy, almost lacquered sauce that coats every chunk; the fat you render is the richness you spoon over the rice.",
  notes:
    "Like all adobo it keeps for days and deepens overnight. For adobong puti (white adobo), leave out the soy and lean fully on vinegar, salt, and garlic — the older, pre-soy version.",
  zeroWasteHero: false,
  tags: ["dinner", "pork", "adobo", "vinegar-braise", "make-ahead", "one-pot"],
};
