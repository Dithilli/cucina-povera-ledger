import type { Recipe } from "../types";

export const rasamSi: Recipe = {
  slug: "rasam-si",
  title: "Rasam",
  cuisine: "south-indian",
  blurb:
    "A thin, peppery tamarind-and-tomato broth pounded with cumin, black pepper, and garlic — sipped from a tumbler or poured over rice with a spoonful of cooked dal to round it.",
  servings: 4,
  perServing: { calories: 360, protein: 11 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "toor dal, cooked and mashed", qty: "1/3 cup dry", cost: 0.5 },
    { item: "ripe tomatoes, chopped", qty: "2", cost: 0.6 },
    { item: "tamarind", qty: "1 tbsp pulp (lime-sized ball soaked)", cost: 0.2, spansWeeks: true },
    { item: "black peppercorns", qty: "1 tsp", cost: 0.15, spansWeeks: true },
    { item: "cumin seeds", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "garlic", qty: "3 cloves", cost: 0.1, spansWeeks: true },
    { item: "mustard seeds, dried red chili, curry leaves", qty: "for tadka", cost: 0.15, spansWeeks: true },
    { item: "turmeric, asafoetida, salt, cilantro", qty: "to taste", cost: 0.2, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve", cost: 0.6 },
    { item: "ghee or oil", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Coarsely pound the peppercorns, cumin, and garlic in a mortar — the freshly cracked rasam powder is what gives the broth its bite.",
    "Soak the tamarind in warm water, squeeze out the pulp, and strain. Simmer the strained tamarind water with the crushed tomatoes, turmeric, salt, and the pounded spice until the raw smell goes and the tomatoes break down.",
    "Stir in the mashed toor dal loosened with water — the broth should stay thin and almost frothy, never a thick gravy. Bring just to the edge of a boil, then pull it off; rasam is killed by hard boiling.",
    "Crackle mustard seeds, red chili, and curry leaves in ghee and pour over. Shower with cilantro and serve over rice or in cups to drink.",
  ],
  modernMove:
    "Hand-pound the pepper, cumin, and garlic fresh instead of using packaged rasam powder, and never let the pot boil hard once the dal is in — both keep the aroma sharp and the broth alive.",
  notes:
    "The dal is optional but turns a digestive broth into an actual dinner over rice. A spoon of cooked rice mashed in thickens it Kongunad-style if you like.",
  tags: ["south-indian", "rasam", "broth", "tamarind", "lentils"],
  sources: [
    {
      title: "Suguna Vinodh — Kannamma Cooks (Tomato Rasam, Kongunad Style)",
      url: "https://www.kannammacooks.com/tomato-rasam/",
      note: "Informed the hand-pounded pepper-cumin-garlic, tamarind-and-tomato base, mashed-dal body, and the rule against boiling the rasam hard.",
    },
  ],
};
