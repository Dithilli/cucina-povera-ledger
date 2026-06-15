import type { Recipe } from "../types";

export const niterKibbeh: Recipe = {
  slug: "niter-kibbeh",
  title: "Niter Kibbeh",
  cuisine: "ethiopian",
  blurb:
    "Spiced clarified butter, simmered with garlic, ginger, and aromatics until the milk solids brown and perfume the fat. The flavor engine bloomed under every wot — a French mirepoix's discipline in a jar.",
  servings: 32,
  perServing: { calories: 100, protein: 0 },
  estCostPerServing: 0.15,
  roles: ["base"],
  ingredients: [
    { item: "unsalted butter", qty: "1 lb", cost: 4.0, spansWeeks: true },
    { item: "white onion, roughly chopped", qty: "1/2", cost: 0.2 },
    { item: "garlic, smashed", qty: "4 cloves", cost: 0.2, spansWeeks: true },
    { item: "fresh ginger, sliced", qty: "1-inch piece", cost: 0.2, spansWeeks: true },
    { item: "fenugreek, cumin, cardamom pods, korarima (any/all)", qty: "1/2 tsp each", cost: 0.4, spansWeeks: true },
    { item: "cinnamon stick + a few cloves", qty: "1 small / 3", cost: 0.2, spansWeeks: true },
    { item: "turmeric, optional", qty: "1/4 tsp", spansWeeks: true },
  ],
  method: [
    "Melt the butter in a saucepan over low heat. Let it come to a gentle simmer; a white foam (the whey proteins) will rise.",
    "Add the onion, garlic, ginger, and all the spices. Keep at a bare simmer — never a boil.",
    "Cook gently 20–30 minutes. The foam subsides, the water cooks off, and the milk solids sink and turn golden-brown, scenting the fat. Listen for the bubbling to quiet, which signals the water is nearly gone.",
    "Strain through a fine sieve or cheesecloth, leaving the browned solids and aromatics behind. You're left with clear, fragrant, golden oil.",
    "Cool and store in a jar; it keeps for weeks at room temperature and months refrigerated, since clarifying removes the water that spoils butter.",
  ],
  modernMove:
    "This is brown butter meets a tempering oil. Take the milk solids to a true nutty brown before straining for a deeper aroma, and bloom your berbere directly in a spoonful of this hot fat as the first move of any wot.",
  notes:
    "A fasting-friendly version swaps the butter for oil infused with the same aromatics ('ye-tsom niter'), keeping the dish vegan for Orthodox fast days.",
  tags: ["base", "niter-kibbeh", "spiced-butter", "fat", "pantry"],
  sources: [
    { title: "Niter Kibbeh — Wikipedia", url: "https://en.wikipedia.org/wiki/Niter_kibbeh", note: "Seasoned clarified butter for Ethiopian and Eritrean cooking, spiced with aromatics and strained." },
    { title: "Kimberly Killebrew — The Daring Gourmet", url: "https://www.daringgourmet.com/niter-kibbeh-ethiopian-spiced-clarified-butter/", note: "Full recipe simmering butter with garlic, ginger, and traditional spices until the solids brown." },
  ],
};
