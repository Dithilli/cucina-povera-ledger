import type { Recipe } from "../types";

export const tamarindRiceSi: Recipe = {
  slug: "tamarind-rice-si",
  title: "Puliyodarai (Tamarind Rice)",
  cuisine: "south-indian",
  blurb:
    "Cooled rice coated grain by grain in a dark, roasted tamarind paste loud with mustard, lentils, and asafoetida — the temple and travel food of Tamil Nadu, made to keep unrefrigerated for days.",
  servings: 4,
  perServing: { calories: 480, protein: 11 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "cooked rice, cooled and grains separated", qty: "4 cups", cost: 0.8 },
    { item: "tamarind, soaked for thick pulp", qty: "lime-sized ball", cost: 0.3, spansWeeks: true },
    { item: "peanuts", qty: "1/4 cup", cost: 0.3 },
    { item: "chana dal and urad dal", qty: "2 tbsp total", cost: 0.2, spansWeeks: true },
    { item: "dried red chilies", qty: "4", cost: 0.15, spansWeeks: true },
    { item: "mustard seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "fenugreek seeds, dry-roasted and powdered", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "asafoetida (hing)", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "turmeric", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "sesame oil", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "curry leaves", qty: "2 sprigs", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Spread the cooked rice on a wide plate to cool, drizzle a little sesame oil, and fluff so the grains stay separate — never use hot, sticky rice.",
    "In sesame oil, pop the mustard seeds, then fry the chana and urad dal, peanuts, dried chilies, and curry leaves until the dals are golden and nutty. Add a pinch of asafoetida.",
    "Pour in the thick tamarind pulp with turmeric and salt and simmer the pulikachal hard, until it darkens and thickens and the oil separates back out — this reduction is what makes it keep.",
    "Stir in the roasted fenugreek powder, which deepens and rounds the sourness.",
    "Take the rice in a wide bowl and fold the pulikachal through a spoonful at a time until every grain is coated and glossy. Let it sit at least an hour for the flavors to soak in before eating.",
  ],
  modernMove:
    "Reducing the tamarind to a oil-released pulikachal — not just stirring in raw pulp — is both the flavor and the preservative; the oil and acid are why a jar of this rides a train for two days without spoiling.",
  notes: "Make extra pulikachal; it keeps for weeks refrigerated and turns any bowl of cold rice into dinner in minutes.",
  zeroWasteHero: true,
  tags: ["tamarind", "rice", "tamil-nadu", "tadka", "keeps", "south-indian"],
  sources: [
    {
      title: "Suguna Vinodh — Kannamma Cooks",
      url: "https://www.kannammacooks.com/puliyodharai-iyengar-puliyodharai-kovil-puliyodharai/",
      note: "Iyengar puliyodharai — reduced pulikachal paste, roasted fenugreek, cooled separated rice",
    },
  ],
};
