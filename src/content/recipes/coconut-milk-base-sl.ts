import type { Recipe } from "../types";

export const coconutMilkBaseSl: Recipe = {
  slug: "coconut-milk-base-sl",
  title: "Fresh Coconut Milk (Pol Kiri)",
  cuisine: "sri-lankan",
  blurb:
    "Scraped fresh coconut squeezed by hand into a thick first press and a thin second — miti kiri to finish a curry, diya kiri to braise it — the liquid foundation under nearly every Sri Lankan pot.",
  servings: 8,
  perServing: { calories: 110, protein: 1 },
  estCostPerServing: 0.25,
  roles: ["base"],
  ingredients: [
    { item: "fresh coconut, grated/scraped", qty: "1 (about 3 cups)", cost: 1.2 },
    { item: "warm water", qty: "2 cups" },
  ],
  method: [
    "Scrape the coconut to soft white shreds (or use grated fresh coconut). Pour over about a cup of warm water and let it sit a few minutes to soften.",
    "Squeeze the coconut hard by handfuls, wringing through your fingers, and strain — this first thick press is the miti kiri (first extraction) you stir in at the end of a curry.",
    "Return the same pressed coconut to the bowl, add another cup or two of warm water, and squeeze again for the thin diya kiri (second extraction) used to braise and simmer.",
    "Keep the two presses separate; use the thin milk first and the thick milk last so it never boils hard and splits.",
  ],
  modernMove:
    "Two extractions, used at two moments — thin to cook through, thick to finish off the heat — is the technique that keeps coconut milk silky instead of grainy and curdled.",
  notes:
    "Squeeze the spent coconut into a third weak wash if you like; nothing is wasted. A tin of coconut milk thinned with water substitutes in a pinch.",
  zeroWasteHero: true,
  tags: ["sri-lankan", "coconut", "foundation", "base"],
  sources: [
    {
      title: "SBS Food — Why coconut is the heart of Sri Lankan cooking",
      url: "https://www.sbs.com.au/food/article/sri-lankas-coconut-country/y9czew769",
      note: "Scraped coconut pressed for successive extracts — thick first (miti kiri) to finish, thin second (diya kiri) to braise",
    },
  ],
};
