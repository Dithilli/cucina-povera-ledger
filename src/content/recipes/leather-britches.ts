import type { Recipe } from "../types";

export const leatherBritches: Recipe = {
  slug: "leather-britches",
  title: "Leather Britches",
  cuisine: "appalachian",
  blurb:
    "Dried \"shucky\" green beans, strung up whole and hung behind the stove all fall, rehydrated and stewed low with fatback into a chewy, deep-flavored mess of winter beans.",
  servings: 4,
  perServing: { calories: 430, protein: 14 },
  estCostPerServing: 0.9,
  roles: ["dinner"],
  ingredients: [
    { item: "dried leather britches (shucky beans)", qty: "4 cups", cost: 2.0 },
    { item: "fatback or salt pork", qty: "2 oz", cost: 0.6 },
    { item: "onion", qty: "1/2, sliced", cost: 0.2 },
    { item: "salt and pepper", qty: "to taste", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Pull the dried beans off their string, rinse, and soak overnight in plenty of cold water — they drink up a great deal.",
    "Drain, cover with fresh water by two inches, and add the fatback and sliced onion.",
    "Bring to a boil, then drop to a slow simmer and cook covered 2 to 3 hours, until the leathery beans turn tender and chewy and the broth goes savory.",
    "Season with salt and pepper near the end, once the pork has given up its salt; keep them brothy.",
    "Serve with cornbread and sliced onion — the classic winter supper from the dried summer garden.",
  ],
  modernMove:
    "Don't rush the soak. Hours of cold water is what restores the snap-dried beans to a tender chew; a hot quick-soak leaves them stubbornly tough.",
  notes:
    "Stringing and hanging green beans to dry behind the wood stove is a 200-year-old Appalachian way to put up summer beans for winter without canning.",
  zeroWasteHero: true,
  tags: ["beans", "appalachian", "pork", "preserved"],
  sources: [
    {
      title: "Leather Britches Green Beans — Melissa K. Norris",
      url: "https://melissaknorris.com/leather-britches-green-beans/",
      note: "stringing and drying green beans, then soaking and simmering with fatback into winter shucky beans",
    },
  ],
};
