import type { Recipe } from "../types";

export const chichilo: Recipe = {
  slug: "chichilo",
  title: "Chichilo Negro",
  cuisine: "oaxacan",
  blurb:
    "The rarest and smokiest of Oaxaca's seven moles — a near-black caldo built on chiles charred until they blacken, thickened with toasted masa and a burnt tortilla, and scented with avocado leaf around tender beef.",
  servings: 6,
  perServing: { calories: 470, protein: 22 },
  estCostPerServing: 1.8,
  roles: ["dinner"],
  ingredients: [
    { item: "beef shank or stewing beef", qty: "1 1/4 lb", cost: 4.0 },
    { item: "dried chilhuacle or guajillo chiles", qty: "4", cost: 0.5 },
    { item: "dried chiles de árbol", qty: "3", cost: 0.2 },
    { item: "corn tortilla (to burn black)", qty: "1", cost: 0.1 },
    { item: "fresh masa or masa harina", qty: "1/4 cup", cost: 0.3 },
    { item: "tomatillos and tomato", qty: "3 + 1", cost: 0.6 },
    { item: "dried avocado leaves", qty: "2", cost: 0.2, spansWeeks: true },
    { item: "onion, garlic, cloves, allspice, oregano", qty: "as needed", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Simmer the beef with onion, garlic, and salt until tender, reserving the broth.",
    "On a dry comal, toast the chiles until they blacken and smoke (don't fear a little char — that burn is the dish), then char a tortilla until truly black, and toast the avocado leaves.",
    "Soak and blend the burnt chiles, burnt tortilla, tomatillos, tomato, and spices, then strain into the broth.",
    "Slacken the masa with broth and whisk it in; simmer, stirring, until the caldo turns glossy near-black and thickens slightly.",
    "Drop in the avocado leaves and the beef and simmer 15 minutes so the smoke settles into the meat.",
  ],
  modernMove:
    "Char the chiles and tortilla past the point that feels wrong — chichilo's color and its mourning-feast depth come entirely from controlled burning, not from chocolate or nuts like mole negro.",
  notes: "Traditionally a funeral mole; thickened with corn masa rather than seeds, so it stays lean and frugal.",
  zeroWasteHero: false,
  tags: ["mole", "oaxacan", "beef", "chiles", "smoky"],
  sources: [
    {
      title: "Hank Shaw — Hunter Angler Gardener Cook (Mole Chichilo)",
      url: "https://honest-food.net/venison-mole-recipe-chichilo/",
      note: "charring chiles and tortilla black, thickening with masa, scenting with avocado leaf",
    },
  ],
};
