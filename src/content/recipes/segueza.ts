import type { Recipe } from "../types";

export const segueza: Recipe = {
  slug: "segueza",
  title: "Segueza",
  cuisine: "oaxacan",
  blurb:
    "A pre-Hispanic stew from the Central Valleys where toasted, coarsely cracked corn is the body of the dish — simmered with pork and a guajillo-chile base into a rustic, nubby mole thick with kernels.",
  servings: 6,
  perServing: { calories: 480, protein: 21 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "pork shoulder, cubed (with a bone if possible)", qty: "1 lb", cost: 3.0 },
    { item: "dried field corn (maíz), toasted and cracked", qty: "1 1/2 cups", cost: 0.7 },
    { item: "dried guajillo chiles", qty: "4", cost: 0.4 },
    { item: "dried chiles costeños or de árbol", qty: "2", cost: 0.2 },
    { item: "tomatillos and tomato", qty: "3 + 1", cost: 0.6 },
    { item: "dried avocado leaf (hoja de aguacate)", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "onion, garlic, epazote, salt", qty: "as needed", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Simmer the pork with onion, garlic, and salt until tender, reserving the broth.",
    "Toast the dried corn on a dry comal until it smells nutty and just begins to color, then pulse it coarse — chunky, not flour — so it stays toothsome in the stew.",
    "Toast and soak the chiles, then blend with the tomatillos, tomato, and garlic and strain into the pork broth.",
    "Stir the cracked corn into the simmering chile broth and cook 20–30 minutes, stirring, until the corn swells and the stew thickens to a coarse, porridge-like mole.",
    "Return the pork, toast and add the avocado leaf and a sprig of epazote, and simmer to bring it together.",
  ],
  modernMove:
    "Pulse the toasted corn coarse rather than grinding it to masa — segueza's whole identity is the tender, nubby bite of cracked kernels, the cheapest possible thickener and the heart of the dish.",
  notes: "Corn is the protein-stretcher and the body here; a modest amount of pork flavors a potful.",
  zeroWasteHero: false,
  tags: ["segueza", "oaxacan", "corn", "pork", "mole"],
  sources: [
    {
      title: "Susana Trilling — Seasons of My Heart (Segueza)",
      url: "https://www.seasonsofmyheart.com/recipes/segueza-de-conejo/",
      note: "toasting and coarsely cracking field corn as the thickening body of the Central Valleys stew",
    },
  ],
};
