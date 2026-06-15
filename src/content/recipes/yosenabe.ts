import type { Recipe } from "../types";

export const yosenabe: Recipe = {
  slug: "yosenabe",
  title: "Yosenabe (Gathered Hot-Pot)",
  cuisine: "japanese",
  blurb:
    "The thrifty everyman hot-pot — tofu, whatever vegetables are in the bin, and a little fish or chicken all simmered in a light dashi at the table. Its name means \"put-together pot,\" and that is exactly the genius: a pot designed to swallow odds and ends and turn them into a warm communal dinner for almost nothing.",
  servings: 4,
  perServing: { calories: 520, protein: 26 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "dashi (kombu + bonito, or kombu-shiitake for vegan)", qty: "6 cups", cost: 0.6, spansWeeks: true },
    { item: "firm tofu, cubed", qty: "1 block (14 oz)", cost: 1.5 },
    { item: "napa cabbage, cut in wide ribbons", qty: "1/2 head", cost: 1.2 },
    { item: "a little fish (cod, salmon collar) or chicken thigh, bite-sized", qty: "~1/2 lb", cost: 2.5 },
    { item: "carrot, sliced on the bias", qty: "1", cost: 0.2 },
    { item: "shiitake or other mushrooms", qty: "4–6", cost: 1.0 },
    { item: "scallions / negi, cut in lengths", qty: "3", cost: 0.3 },
    { item: "soy sauce, mirin, salt", qty: "to season", cost: 0.4, spansWeeks: true },
    { item: "ponzu and grated daikon for dipping", qty: "to serve", cost: 0.6, spansWeeks: true },
  ],
  method: [
    "Build a light dashi and season it gently with soy sauce, a splash of mirin, and salt — it should taste like a delicate broth you'd happily drink, not a sauce. The vegetables and fish will season it further as they cook.",
    "Lay the slow-cooking pieces in first: carrot, the thick white cabbage ribs, the mushroom stems. Bring to a gentle simmer.",
    "Add the tofu and the fish or chicken, then the tender cabbage leaves and scallions on top. Simmer until the protein is just cooked through and everything is tender — a few minutes only.",
    "Bring the pot to the table and let everyone fish out pieces into bowls, dipping the fish in ponzu brightened with grated daikon. Eat the broth as it deepens, and save the rich leftover broth — it is tomorrow's ojiya or zosui.",
  ],
  modernMove:
    "Keeping the dashi deliberately under-seasoned lets the cabbage, mushrooms, and fish release their own sweetness into the pot as it cooks, so the broth you're left with at the end is richer than the one you started with — and good enough to build a second whole meal on.",
  notes:
    "Yosenabe is the most forgiving dinner in the cuisine: any vegetable nearing its end, any scrap of fish, the heel of a tofu block all belong in it. Tofu carries the protein when the fish is thin. Do not pour out that final broth — it is the entire premise of the next two recipes.",
  zeroWasteHero: false,
  tags: ["nabe", "hot-pot", "tofu", "dashi", "one-pot", "communal"],
};
