import type { Recipe } from "../types";

export const sopaDeMani: Recipe = {
  slug: "sopa-de-mani",
  title: "Sopa de Maní",
  cuisine: "andean",
  blurb:
    "Cochabamba's beloved peanut soup — raw peanuts ground to a velvety cream that thickens a savory broth of potato, peas, and toasted macaroni, crowned at the table with a handful of crisp shoestring fries.",
  servings: 4,
  perServing: { calories: 480, protein: 18 },
  estCostPerServing: 1.3,
  roles: ["dinner"],
  ingredients: [
    { item: "raw peanuts, skins rubbed off", qty: "1 cup", cost: 1.0 },
    { item: "potatoes, diced (plus 1 extra for the fries)", qty: "3 medium", cost: 0.8 },
    { item: "macaroni or small pasta", qty: "3/4 cup", cost: 0.4, spansWeeks: true },
    { item: "peas and diced carrot", qty: "1 cup", cost: 0.5 },
    { item: "onion + garlic", qty: "1 + 2 cloves", cost: 0.3 },
    { item: "ají amarillo or red chile paste", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "oil, cumin, oregano, salt", qty: "to taste", spansWeeks: true },
    { item: "parsley, to finish", qty: "small handful", cost: 0.2 },
  ],
  method: [
    "Blend the raw peanuts with a cup of water until you have a smooth, milky cream. Pass it through a sieve if you want it silky.",
    "Soften onion and garlic in oil with cumin and oregano, stir in the chile paste, then add 6 cups of water, the carrot, and the peas; simmer until tender.",
    "Pour in the peanut cream and add the diced potatoes. Simmer gently, stirring often so the peanut doesn't catch, until the soup is thick and the potatoes are soft, about 25 minutes.",
    "Meanwhile toast the dry macaroni in a hot pan until golden, then stir it into the soup to cook through; cut the reserved potato into matchsticks and fry them crisp.",
    "Ladle out, shower with parsley, and pile the shoestring fries on top of each bowl right before eating so they stay crunchy.",
  ],
  modernMove:
    "Toasting the dry pasta before it goes in — like a Mexican sopa seca — gives the noodles a nutty backbone, and the matchstick fries on top are non-negotiable: the textural contrast is the whole point of the dish.",
  notes: "Grinding your own raw peanuts keeps it cheap and gives a fresher, cleaner peanut flavor than jarred butter.",
  zeroWasteHero: false,
  tags: ["peanut", "potato", "soup", "pasta", "bolivian", "andean"],
  sources: [
    {
      title: "196 flavors — Sopa de Maní (Traditional Bolivian Peanut Soup)",
      url: "https://www.196flavors.com/bolivia-sopa-de-mani/",
      note: "Ground raw peanuts thickening a potato-and-pasta soup, finished with the signature fried potato sticks.",
    },
  ],
};
