import type { Recipe } from "../types";

export const wontonNoodleCt: Recipe = {
  slug: "wonton-noodle-ct",
  title: "Wonton Noodle Soup",
  cuisine: "cantonese",
  blurb:
    "Plump shrimp-and-pork wontons and a nest of thin, springy egg noodles in a clear, fragrant broth simmered from pork bones and a little dried seafood — the Cantonese street bowl, where a few shrimp and a handful of noodles eat like a feast.",
  servings: 4,
  perServing: { calories: 520, protein: 26 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "thin Hong Kong egg noodles (wonton mein)", qty: "12 oz", cost: 1.6 },
    { item: "ground pork", qty: "8 oz", cost: 1.6 },
    { item: "shrimp, peeled and chopped", qty: "6 oz", cost: 2.4 },
    { item: "wonton wrappers", qty: "24", cost: 1.0 },
    { item: "pork bones for stock", qty: "1 lb", cost: 1.2 },
    { item: "dried shrimp or dried flounder (optional)", qty: "small handful", cost: 0.5, spansWeeks: true },
    { item: "ginger, scallion, white pepper", qty: "for broth + filling", cost: 0.3, spansWeeks: true },
    { item: "soy sauce, sesame oil, cornstarch, Shaoxing wine", qty: "to season", cost: 0.3, spansWeeks: true },
    { item: "yu choy or gai lan, blanched", qty: "1 small bunch", cost: 0.6 },
  ],
  method: [
    "Make the broth: blanch the pork bones, rinse, then simmer fresh with a knob of ginger, a scallion, and the dried seafood for an hour or more until it tastes deep and clean. Season with a little salt and white pepper.",
    "Mix the filling: combine ground pork and chopped shrimp with a splash of soy and Shaoxing, a little sesame oil, white pepper, and a teaspoon of cornstarch; stir vigorously in one direction until it turns tacky and paste-like.",
    "Wrap a teaspoon of filling in each wrapper, sealing into a loose bundle. Boil the wontons in a wide pot of water until they float and the filling is just cooked, 4–5 minutes, then lift out.",
    "Cook the thin egg noodles for under a minute — they should stay springy — and divide into bowls. Blanch the greens in the same water.",
    "Nest the noodles under the wontons and greens, ladle the hot broth over, and finish with scallion and a shake of white pepper.",
  ],
  modernMove:
    "Stirring the pork-and-shrimp filling hard in one direction until it's tacky builds the bounce that makes a good wonton snap; cooking the thin noodles only seconds keeps them from going soft under the broth. Setting the noodles below the wontons keeps them from sitting in liquid and bloating.",
  notes:
    "A real Cantonese touch is to keep the wontons mostly shrimp-forward and the bundle loose-tailed, so they bob like goldfish. The broth is the thrift engine — built from bones and a little dried seafood you'd otherwise toss — and any leftover filling becomes tomorrow's dumplings.",
  zeroWasteHero: false,
  tags: ["noodles", "wonton", "soup", "cantonese", "shrimp", "pork"],
  sources: [
    {
      title: "The Woks of Life — Cantonese Wonton Noodle Soup",
      url: "https://thewoksoflife.com/cantonese-wonton-noodle-soup/",
      note: "Pork-and-shrimp filling stirred to a tacky paste, thin egg noodles cooked briefly, and a pork-bone broth lifted with dried seafood.",
    },
  ],
};
