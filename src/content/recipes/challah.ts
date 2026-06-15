import type { Recipe } from "../types";

export const challah: Recipe = {
  slug: "challah",
  title: "Challah",
  cuisine: "ashkenazi",
  blurb:
    "The braided, egg-enriched Sabbath loaf — made with oil so it stays pareve, tender and faintly sweet, with a burnished crust. Two loaves grace the Shabbos table for the double portion of manna; the stale heel lives a second life in kugel and French toast.",
  servings: 12,
  perServing: { calories: 180, protein: 5 },
  estCostPerServing: 0.3,
  roles: ["base", "side"],
  ingredients: [
    { item: "bread flour", qty: "4 cups", cost: 0.8, spansWeeks: true },
    { item: "active dry yeast", qty: "2 1/4 tsp (1 packet)", cost: 0.4, spansWeeks: true },
    { item: "warm water", qty: "1 cup", cost: 0 },
    { item: "neutral oil", qty: "1/4 cup", cost: 0.3, spansWeeks: true },
    { item: "sugar", qty: "1/4 cup", cost: 0.15, spansWeeks: true },
    { item: "eggs (2 in dough, 1 for wash)", qty: "3", cost: 0.75 },
    { item: "salt", qty: "1 1/2 tsp", spansWeeks: true },
  ],
  method: [
    "Stir the yeast and a pinch of the sugar into the warm water and let it sit 5–10 minutes until foamy — proof that the yeast is alive.",
    "Whisk in the oil, the rest of the sugar, 2 eggs, and the salt. Add the flour a cup at a time, mixing to a shaggy dough, then turn out and knead 8–10 minutes until smooth, elastic, and only slightly tacky.",
    "Oil the bowl, turn the dough to coat, cover, and let rise in a warm spot until doubled — about 1 1/2 hours.",
    "Punch down and divide into 3 (or 6 for two loaves) strands. Roll each into a rope, pinch the tops together, and braid; tuck the ends under. For Shabbos, shape two loaves.",
    "Set on a lined sheet, cover loosely, and rise again until puffy, 45 minutes. Beat the last egg and brush the loaf all over for a deep-gloss crust.",
    "Bake at 350°F (175°C) for 30–35 minutes, until deep golden and hollow-sounding when tapped on the bottom. Cool before slicing.",
  ],
  modernMove:
    "The double egg wash is the move — once before the final rise and again just before baking — for the lacquered, mahogany shine that makes a challah look like the Sabbath. A long, slow second proof gives the open, feathery crumb.",
  notes:
    "Kept pareve with oil instead of butter, so it sits on a meat table without trouble. Never let it go to waste: stale challah is the whole reason for sweet kugel and the best French toast there is — the loaf earns its keep twice.",
  tags: ["base", "bread", "pareve", "shabbos"],
  sources: [
    {
      title: "Wikipedia — Challah",
      url: "https://en.wikipedia.org/wiki/Challah",
      note: "Braided egg-enriched Sabbath bread; symbolism of the two loaves and ceremonial use.",
    },
    {
      title: "Joan Nathan — Jewish Cooking in America",
      note: "Classic Ashkenazi challah technique, braiding, and the egg-wash gloss.",
    },
  ],
};
