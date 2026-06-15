import type { Recipe } from "../types";

export const pilauMasala: Recipe = {
  slug: "pilau-masala",
  title: "Pilau Masala",
  cuisine: "east-african",
  blurb:
    "The toasted Swahili-coast spice blend — cumin, cardamom, clove, cinnamon, and coriander — ground fragrant and stirred into rice, stews, and braises all week long.",
  servings: 16,
  perServing: { calories: 20, protein: 1 },
  estCostPerServing: 0.1,
  roles: ["base"],
  ingredients: [
    { item: "cumin seeds", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "coriander seeds", qty: "2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "green cardamom pods", qty: "10", cost: 0.4, spansWeeks: true },
    { item: "whole cloves", qty: "1 tbsp", cost: 0.3, spansWeeks: true },
    { item: "cinnamon stick", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "black peppercorns", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Dry-roast all the whole spices together in a pan over low-to-medium heat, shaking often, until warmed through and fragrant — don't let them scorch.",
    "Tip onto a plate and let them cool completely.",
    "Grind to a fine powder in a spice grinder or with a mortar and pestle.",
    "Store airtight away from light; a tablespoon or so seasons a pot of pilau or a stew.",
  ],
  modernMove:
    "Toasting the whole spices before grinding wakes up their oils — the warm, layered fragrance is the whole point of pilau masala.",
  notes: "Keeps about 3 months airtight, longer refrigerated.",
  zeroWasteHero: false,
  tags: ["base", "spice-blend", "pantry", "east-african", "swahili-coast"],
  sources: [
    {
      title: "Forward Edge International — Pilau Masala Recipe from Kenya",
      url: "https://www.forwardedge.org/blog/pilau-masala-recipe-from-kenya/",
      note: "The cumin-coriander-cardamom-clove-cinnamon-pepper blend, dry-roasted and ground.",
    },
  ],
};
