import type { Recipe } from "../types";

export const kaszaGryczanaGulaszPl: Recipe = {
  slug: "kasza-gryczana-gulasz",
  title: "Kasza Gryczana z Gulaszem",
  cuisine: "polish",
  blurb:
    "Nutty toasted buckwheat groats steamed loose and fluffy, crowned with a dark, paprika-warmed pork gravy that the grains drink up — the classic Polish pairing where the thrifty kasza does the heavy lifting and a little meat goes a long way.",
  servings: 4,
  perServing: { calories: 580, protein: 26 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "kasza gryczana (roasted buckwheat groats)", qty: "1 1/2 cups", cost: 0.9 },
    { item: "pork shoulder, cubed", qty: "3/4 lb", cost: 2.6 },
    { item: "onions, chopped", qty: "2", cost: 0.6 },
    { item: "sweet paprika", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "garlic, minced", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "bay leaf and marjoram", qty: "1 leaf + 1 tsp", cost: 0.1, spansWeeks: true },
    { item: "flour (to thicken)", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "lard or oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "butter (for the kasza)", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Brown the cubed pork hard in the lard, then lift it out. Soften the onions in the same fat until golden, add the garlic, pull the pan off the heat, and stir in the paprika so it blooms without burning.",
    "Return the pork with the bay, marjoram, and enough water to nearly cover. Cover and simmer gently for about an hour, until the meat is tender. Whisk the flour with a little cold water, stir it in, and simmer to a glossy gravy.",
    "Meanwhile, rinse the kasza and tip it into 3 cups of boiling salted water. Bring back to a boil, cover, and cook on the lowest heat — without stirring — until the water is absorbed and the grains are tender, about 12–15 minutes.",
    "Pull off the heat, drop in the butter, fork it through, and let the kasza steam covered for another 5–10 minutes so it dries and fluffs.",
    "Mound the kasza on plates and ladle the pork gulasz over so the gravy soaks into the grains.",
  ],
  modernMove:
    "Don't stir the kasza while it cooks — stirring works out the starch and turns it to mush. Cook it untouched, then fork in butter and let it rest covered off the heat; the residual steam is what gives you separate, fluffy grains rather than porridge.",
  notes:
    "Roasted (brown) buckwheat is the Polish standard and needs no toasting; raw green groats want a few minutes dry-toasting first for the nutty flavor. Any leftover gulasz from another night turns this into a near-instant supper.",
  zeroWasteHero: false,
  tags: ["pork", "buckwheat", "kasza", "polish"],
  sources: [
    {
      title: "Polish Your Kitchen — Polish Beef Goulash (Gulasz Wołowy)",
      url: "https://www.polishyourkitchen.com/polish-beef-goulash-gulasz-wolowy/",
      note: "The classic pairing of meaty gulasz gravy served over fluffy kasza gryczana.",
    },
  ],
};
