import type { Recipe } from "../types";

export const kongnamulBap: Recipe = {
  slug: "kongnamul-bap",
  title: "Kongnamul-bap (Soybean-Sprout Rice)",
  cuisine: "korean",
  blurb:
    "Rice steamed with soybean sprouts laid right on top, then forked through with a sharp soy-and-scallion sauce — a whole frugal dinner from a bag of sprouts and a cup of rice.",
  servings: 4,
  perServing: { calories: 460, protein: 14 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "short-grain white rice", qty: "2 cups (dry)", cost: 1.0 },
    { item: "soybean sprouts, rinsed", qty: "3/4 lb", cost: 1.2 },
    {
      item: "scallions, finely sliced (use the whole stalk)",
      qty: "3",
      cost: 0.3,
    },
    {
      item: "soy sauce",
      qty: "4 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "gochugaru (Korean chili flakes)",
      qty: "1 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "garlic, minced",
      qty: "2 cloves",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "toasted sesame oil and sesame seeds",
      qty: "to taste",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "a little sugar (optional)", qty: "1 tsp", cost: 0.05 },
  ],
  method: [
    "Rinse the rice and use slightly less water than usual — the sprouts will release moisture as they steam. Spread the rinsed soybean sprouts in an even layer right on top of the rice.",
    "Cover and cook as you would plain rice (or in a rice cooker). Do not lift the lid while it cooks — opening it mid-steam is the old superstition for why sprouts turn fishy and bitter.",
    "While it cooks, stir together the sauce: soy sauce, gochugaru, garlic, scallions, sesame oil, sesame seeds, and the optional pinch of sugar.",
    "When the rice is done, fluff it so the now-tender sprouts fall through and distribute evenly.",
    "Serve in bowls and let each person spoon the soy-scallion sauce over and mix it through to taste — the sauce is the seasoning for the whole dish, so add it at the table rather than salting the pot.",
  ],
  modernMove:
    "Steaming the sprouts on top of the rice instead of boiling them separately keeps every bit of their bean flavor and the cooking water inside the pot — nothing is poured away, and one cheap bag of sprouts carries the entire dinner.",
  notes:
    "Classic Jeonju cold-weather food. The leftover sauce keeps for days and dresses any plain rice or namul.",
  zeroWasteHero: true,
  tags: ["rice", "soybean-sprouts", "one-pot", "soy-scallion", "frugal"],
  sources: [
    {
      title: "Maangchi — Kongnamulbap (Soybean sprouts bibimbap)",
      url: "https://www.maangchi.com/recipe/kongnamulbap",
      note: "Steaming soybean sprouts on top of the rice and forking through a soy-scallion sauce",
    },
  ],
};
