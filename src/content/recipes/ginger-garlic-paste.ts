import type { Recipe } from "../types";

export const gingerGarlicPaste: Recipe = {
  slug: "ginger-garlic-paste",
  title: "Ginger-Garlic Paste",
  cuisine: "north-indian",
  blurb:
    "Equal parts ginger and garlic ground to a smooth paste — the workhorse aromatic base spooned into nearly every North Indian dish. Make a jar once and you've cut ten minutes off every dinner all week.",
  servings: 24,
  perServing: { calories: 15, protein: 1 },
  estCostPerServing: 0.1,
  roles: ["base"],
  ingredients: [
    { item: "fresh ginger, peeled and roughly chopped", qty: "1/2 lb", cost: 1.2, spansWeeks: true },
    { item: "garlic cloves, peeled", qty: "1/2 lb", cost: 1.2, spansWeeks: true },
    { item: "neutral oil", qty: "1–2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "1/2 tsp", spansWeeks: true },
  ],
  method: [
    "Peel the ginger (scrape the skin off with a spoon — less waste than a knife) and the garlic.",
    "Blend ginger and garlic in roughly equal weight with the salt and just enough oil to get the blades moving, to a smooth paste. Scrape down and repeat; you want no fibrous chunks.",
    "The oil and salt are preservatives — they keep the paste from oxidizing grey and going off in the fridge.",
    "Pack into a clean jar, smooth the top, and film it with a little more oil. Refrigerate up to 2 weeks, or freeze in a flat sheet and snap off pieces as needed.",
  ],
  modernMove:
    "Freeze the paste in an ice-cube tray, then pop the cubes into a bag — one cube is roughly a tablespoon, so you portion the week's aromatics with zero daily knife work. Always cook the raw paste in hot fat until it stops smelling sharp before adding anything else, or the dish tastes raw and harsh.",
  notes:
    "Use the leftover ginger peels and garlic skins to infuse a quick stock, or compost them. The 50/50 ratio is the standard North Indian default; lean gingerier for fish, garlickier for meat.",
  zeroWasteHero: true,
  tags: ["base", "ginger-garlic-paste", "aromatics", "pantry", "make-ahead"],
  sources: [
    {
      title: "Dassana Amit — Dassana's Veg Recipes",
      url: "https://www.vegrecipesofindia.com/ginger-garlic-paste-recipe/",
      note: "Blending equal ginger and garlic with salt and oil to keep it from spoiling",
    },
  ],
};
