import type { Recipe } from "../types";

export const maboDofu: Recipe = {
  slug: "mabo-dofu",
  title: "Mabo Dofu",
  cuisine: "japanese",
  blurb:
    "The Japanese reading of Sichuan mapo tofu — soft tofu and a little ground pork in a glossy, miso-rounded bean sauce, gentler on the chiles and thickened to cling to rice.",
  servings: 3,
  perServing: { calories: 620, protein: 30 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    {
      item: "block soft or medium tofu, cut in cubes",
      qty: "1 (about 14 oz)",
      cost: 1.1,
    },
    {
      item: "ground pork (a little goes far)",
      qty: "5 oz",
      cost: 1.3,
    },
    {
      item: "doubanjiang (fermented chili-bean paste)",
      qty: "1 1/2 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "miso", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "garlic, minced", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "fresh ginger, minced", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "scallions, sliced (whites and greens kept apart)", qty: "3", cost: 0.3 },
    { item: "soy sauce", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "sake or water", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "dashi or chicken stock", qty: "3/4 cup", cost: 0.3 },
    {
      item: "cornstarch slurried in water",
      qty: "1 tbsp + 2 tbsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "sesame oil and sansho or chili oil, to finish",
      qty: "1 tsp each",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "steamed short-grain rice, to serve",
      qty: "3 bowls",
      cost: 0.6,
    },
  ],
  method: [
    "Slip the tofu cubes into a pan of barely simmering lightly salted water and hold them there while you build the sauce — this warms and firms them so they don't break later.",
    "In oil, fry the pork hard until the bits are browned and the fat renders, then push in the garlic, ginger, and scallion whites for a few seconds before stirring in the doubanjiang and miso so the pastes bloom and turn the oil red.",
    "Add the soy sauce, sake, and dashi, bring to a simmer, then drain the tofu and slide it in. Nudge — don't stir — so the cubes stay whole, and let it bubble a minute to take on the sauce.",
    "Stir the cornstarch slurry again and add it in a thread, swirling the pan until the sauce turns glossy and clings. Off the heat, finish with sesame oil, the chili or sansho, and the scallion greens, and spoon over hot rice.",
  ],
  modernMove:
    "Pre-soaking the tofu in warm salted water firms it just enough to survive the sauce, while blooming doubanjiang and miso in the rendered pork fat builds a deep savory base from a small amount of meat — the tofu is the protein, the pork is the seasoning.",
  tags: ["tofu", "soybean", "pork", "doubanjiang", "miso", "rice"],
};
