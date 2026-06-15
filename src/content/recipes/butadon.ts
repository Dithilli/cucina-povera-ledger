import type { Recipe } from "../types";

export const butadon: Recipe = {
  slug: "butadon",
  title: "Butadon",
  cuisine: "japanese",
  blurb:
    "Thin-sliced pork and onion simmered down in sweet-savory dashi-soy-mirin and piled over rice — the workhorse pork donburi, built to stretch a little meat across a whole bowl.",
  servings: 2,
  perServing: { calories: 680, protein: 28 },
  estCostPerServing: 1.55,
  roles: ["dinner"],
  ingredients: [
    {
      item: "thinly sliced pork shoulder or belly, in bite-size pieces",
      qty: "7 oz",
      cost: 2.2,
    },
    { item: "onion, sliced thick", qty: "1 large", cost: 0.4 },
    { item: "dashi (or anchovy-kelp stock)", qty: "1/2 cup", cost: 0.2, spansWeeks: true },
    { item: "soy sauce", qty: "2 1/2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "mirin", qty: "2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "sake (or a splash of water)", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "sugar", qty: "2 tsp", cost: 0.03, spansWeeks: true },
    { item: "grated ginger", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "neutral oil", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "scallions + toasted sesame seeds, to finish", qty: "to finish", cost: 0.2 },
    { item: "steamed short-grain rice, to serve", qty: "for 2", cost: 0.4 },
  ],
  method: [
    "Stir together the dashi, soy, mirin, sake, sugar, and grated ginger — this is the tare that seasons everything.",
    "Heat the oil in a skillet over medium-high and lay in the onion. Let it soften and pick up a little color at the edges; the slow-cooked onion sweetness is half the dish.",
    "Add the pork, breaking up the slices, and stir just until it loses its raw pink — don't overcook, it's thin and will finish in the sauce.",
    "Pour in the tare and simmer 4 to 6 minutes, turning the pork through the liquid, until the sauce reduces to a glossy coat that clings to the meat and onion.",
    "Spoon the pork, onion, and the loose sauce over hot rice, letting some broth soak in. Finish with scallions and sesame seeds.",
  ],
  modernMove:
    "Simmering the thin pork directly in the reducing tare rather than searing it hard means every slice glazes and the onion melts into sauce — a few ounces of pork end up tasting like a full plate.",
  notes:
    "Freeze the pork 20 minutes before slicing, or buy pre-sliced shabu-shabu pork, to get the paper-thin cut that makes this stretch.",
  tags: ["dinner", "pork", "donburi", "rice-bowl", "onion", "dashi"],
  sources: [
    {
      title: "Namiko Chen — Just One Cookbook, Butadon (Pork Donburi)",
      url: "https://www.justonecookbook.com/butadon-pork-donburi/",
      note: "Thin-sliced pork and onion glazed in sweet-savory soy tare over rice.",
    },
  ],
};
