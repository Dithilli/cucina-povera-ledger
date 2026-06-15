import type { Recipe } from "../types";

export const bissara: Recipe = {
  slug: "bissara",
  title: "Bissara",
  cuisine: "moroccan",
  blurb:
    "Northern Morocco's winter-morning bowl — dried split fava beans simmered soft and blitzed to a thick golden purée, flooded with green olive oil and a storm of cumin and paprika.",
  servings: 4,
  perServing: { calories: 420, protein: 19 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "dried split fava beans (or yellow split peas), soaked", qty: "1 1/2 cups", cost: 1.1 },
    { item: "garlic cloves", qty: "5", cost: 0.25, spansWeeks: true },
    { item: "olive oil", qty: "4 tbsp", cost: 0.5, spansWeeks: true },
    { item: "ground cumin", qty: "2 tsp", cost: 0.2, spansWeeks: true },
    { item: "paprika (plus more to finish)", qty: "1 tsp", cost: 0.15, spansWeeks: true },
    { item: "cayenne or pinch chili", qty: "1/4 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste" },
    { item: "khobz, to serve", qty: "to serve", cost: 0.7 },
  ],
  method: [
    "Soak the split favas at least 4 hours or overnight, then drain. If using whole favas, slip off any skins.",
    "Sweat the garlic in 1 tbsp of the oil until fragrant, then stir in the cumin, paprika, and cayenne for a few seconds to wake them up.",
    "Add the drained favas, salt, and 7–8 cups water. Simmer uncovered about 1 hour, skimming, until the beans collapse completely and the liquid thickens.",
    "Blend smooth with a stick blender, loosening with hot water for a soup or leaving it thick for a dip. Beat in another 2 tbsp olive oil for body.",
    "Pour into bowls, flood the top with the remaining raw olive oil, and dust heavily with paprika and cumin. Eat with torn khobz scooping from the bowl.",
  ],
  modernMove:
    "Finish with raw, peppery olive oil and a final shower of cumin and paprika at the table — that uncooked layer of oil and bloomed-on-the-surface spice is what turns a plain bean purée into something craveable.",
  notes:
    "Street food and humble home cooking across northern Morocco, sold steaming from carts on cold mornings. Serve thick as a dip or loose as a soup; either way it's khobz that does the eating.",
  zeroWasteHero: false,
  tags: ["soup", "moroccan", "fava-beans", "legumes", "puree", "street-food"],
  sources: [
    {
      title: "Taste of Maroc — Bessara (Bissara) Fava Bean Soup",
      url: "https://tasteofmaroc.com/bessara-fava-bean-dip-or-soup/",
      note: "Split fava soak-and-simmer method, the olive-oil-and-cumin finish, and thick-vs-thin serving.",
    },
  ],
};
