import type { Recipe } from "../types";

export const ojiya: Recipe = {
  slug: "ojiya",
  title: "Ojiya (Nabe-Broth Rice Porridge)",
  cuisine: "japanese",
  blurb:
    "The traditional close of a hot-pot night — leftover rice tipped into the rich, vegetable-and-fish-deepened broth left in the nabe, simmered with a beaten egg until it turns into a soft, savory porridge. The dish exists only because nobody would dream of pouring that broth down the drain.",
  servings: 4,
  perServing: { calories: 480, protein: 18 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "leftover nabe broth (from yosenabe or any hot-pot)", qty: "4–5 cups", cost: 0.0, spansWeeks: true },
    { item: "cooked rice, rinsed of surface starch", qty: "2–3 cups", cost: 0.6 },
    { item: "egg, beaten", qty: "2", cost: 0.5 },
    { item: "any nabe scraps — tofu, cabbage, bits of fish", qty: "whatever remains", cost: 0.0 },
    { item: "scallion, sliced", qty: "1", cost: 0.1 },
    { item: "soy sauce or miso to adjust", qty: "to taste", cost: 0.2, spansWeeks: true },
    { item: "shichimi togarashi, nori to finish", qty: "to serve", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Bring the leftover nabe broth back to a gentle simmer and taste it — after a night of cabbage, mushrooms, and fish it is deeply savory. Adjust with a little soy sauce or a spoon of miso only if it needs it.",
    "Rinse the cooked rice briefly under water to wash off surface starch — this keeps the ojiya loose and soupy rather than gluey and thick, which is the difference between ojiya and a paste.",
    "Add the rinsed rice and any remaining nabe scraps. Simmer just a few minutes until the rice is hot and has drunk up some broth but the dish is still loose.",
    "Pour the beaten egg over the surface in a thin stream, wait a few seconds, then stir once gently so it sets in soft ribbons. Kill the heat. Finish with scallion, a pinch of shichimi, and torn nori.",
  ],
  modernMove:
    "Rinsing the cooked rice before it goes in is the one quiet technique here: it strips the gummy surface starch so the grains stay distinct in the broth, giving a porridge that's silky and brothy instead of stodgy. Adding the egg off a near-boil sets it in tender clouds rather than hard curds.",
  notes:
    "Ojiya is mottainai made dinner: zero new broth, leftover rice, and the dregs of last night's pot become a complete, comforting meal. It's also the classic convalescent food — gentle, warm, restorative. Distinct from zosui mainly in lineage: ojiya is specifically the nabe-night finale.",
  zeroWasteHero: true,
  tags: ["rice", "porridge", "nabe", "leftovers", "egg", "zero-waste"],
};
