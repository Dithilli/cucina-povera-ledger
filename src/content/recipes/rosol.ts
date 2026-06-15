import type { Recipe } from "../types";

export const rosolPl: Recipe = {
  slug: "rosol",
  title: "Rosół",
  cuisine: "polish",
  blurb:
    "Chicken and a fistful of soup vegetables coaxed into a golden, almost clear broth over a slow Sunday morning — never boiled, only trembling — then poured steaming over fine egg noodles with carrot coins and a shower of parsley. The broth every Polish childhood is measured against.",
  servings: 6,
  perServing: { calories: 390, protein: 22 },
  estCostPerServing: 1.2,
  roles: ["dinner"],
  ingredients: [
    { item: "chicken (backs, wings, and a leg quarter)", qty: "2 lb", cost: 3.0 },
    { item: "carrots", qty: "2", cost: 0.3 },
    { item: "parsley root", qty: "1", cost: 0.3 },
    { item: "celeriac, a wedge", qty: "1/4 small", cost: 0.3 },
    { item: "leek, white part", qty: "1", cost: 0.4 },
    { item: "onion, halved and charred", qty: "1", cost: 0.3 },
    { item: "fine egg noodles (makaron nitki)", qty: "8 oz", cost: 0.7 },
    { item: "bay leaf and allspice berries", qty: "2 + 4", cost: 0.05, spansWeeks: true },
    { item: "black peppercorns", qty: "6", cost: 0.05, spansWeeks: true },
    { item: "fresh parsley, chopped", qty: "small handful", cost: 0.2 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Put the chicken in a large pot, cover with cold water, and bring slowly toward a boil. As scum rises, skim it off patiently — this is what keeps the broth clear.",
    "Char the onion halves cut-side down in a dry pan until blackened, then add to the pot with the carrots, parsley root, celeriac, leek, bay, allspice, and peppercorns.",
    "Lower to the barest simmer — a few lazy bubbles, never a rolling boil — and cook uncovered for 2 to 3 hours, skimming now and then. Salt only toward the end.",
    "Boil the noodles separately in their own water so they don't cloud the broth, then drain. Slice the cooked carrot into coins; pull a little chicken to add back if you like.",
    "Strain the broth gold and clear. Put noodles, carrot, and chicken in each bowl, ladle the hot rosół over, and finish with chopped parsley.",
  ],
  modernMove:
    "Clarity is the whole craft: start in cold water, skim relentlessly, and hold it at a tremble — a hard boil emulsifies fat and clouds the broth for good. Cook the noodles apart so their starch never touches the soup.",
  notes:
    "The Sunday classic. Monday's tradition is to turn the leftover broth into pomidorowa (tomato soup), so nothing is wasted.",
  zeroWasteHero: false,
  tags: ["soup", "chicken", "polish"],
  sources: [
    {
      title: "Polonist — Rosół: Polish Chicken Soup with Noodles",
      url: "https://www.polonist.com/polish-chicken-soup-rosol/",
      note: "Slow skimmed clear broth, soup vegetables, separately cooked noodles, Sunday serve.",
    },
  ],
};
