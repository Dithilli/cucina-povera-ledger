import type { Recipe } from "../types";

export const potOfRedLentils: Recipe = {
  slug: "pot-of-red-lentils",
  title: "A pot of red lentils (misir)",
  cuisine: "ethiopian",
  blurb:
    "Split red lentils simmered soft in water until they collapse into a creamy base — the bank the whole fasting table draws on. Plain here, then turned into wot or alicha all week.",
  servings: 6,
  perServing: { calories: 190, protein: 13 },
  estCostPerServing: 0.3,
  roles: ["base"],
  ingredients: [
    { item: "split red lentils (misir)", qty: "1 lb (about 2 1/2 cups)", cost: 1.6 },
    { item: "water", qty: "to cover by 2 inches" },
    { item: "salt", qty: "to taste (added late)", spansWeeks: true },
  ],
  method: [
    "Rinse the red lentils in a few changes of water until it runs clearer, then drain.",
    "Put them in a pot with water to cover by about two inches. Bring to a boil, skimming off any foam that rises.",
    "Drop to a simmer and cook, stirring now and then so they don't catch, 20–30 minutes, until completely soft and broken down into a loose purée. Add hot water if they get too thick.",
    "Salt only once they're tender. Cool and refrigerate up to 4 days — this is the base for misir wot and misir alicha.",
  ],
  modernMove:
    "Cook them just past the point of holding their shape so they self-thicken; the broken-down starch means a wot needs no other thickener. Reserve the cooking liquid to loosen the wot later instead of plain water, keeping every bit of flavor in the pot.",
  notes:
    "Red lentils give roughly 18g protein per cooked cup — the everyday protein of the Ethiopian/Eritrean table. The same pot becomes fiery misir wot or gentle, turmeric-soft misir alicha.",
  tags: ["base", "legumes", "lentils", "misir", "make-ahead"],
  sources: [
    { title: "Urban Farmie — Misir Wot (Ethiopian Red Lentil Stew)", url: "https://urbanfarmie.com/misir-wot/", note: "Describes simmering rinsed split red lentils until soft — the plain misir base this dish prepares." },
    { title: "Kimberly Killebrew — The Daring Gourmet", url: "https://www.daringgourmet.com/misir-wat-ethiopian-spiced-red-lentils/", note: "Cooking split red lentils down to a soft base before seasoning into a wot." },
  ],
};
