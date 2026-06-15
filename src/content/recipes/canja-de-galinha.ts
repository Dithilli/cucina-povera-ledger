import type { Recipe } from "../types";

export const canjaDeGalinha: Recipe = {
  slug: "canja-de-galinha",
  title: "Canja de Galinha",
  cuisine: "portuguese",
  blurb:
    "Portuguese chicken-and-rice soup — one boiling hen stretched into a whole dinner. The bird gives broth, shredded meat, and richness; rice and mint make it filling and clean.",
  servings: 4,
  perServing: { calories: 460, protein: 30 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    {
      item: "whole chicken or a few cheap bone-in pieces (legs/backs/wings), skin on",
      qty: "about 2 lb",
      cost: 2.4,
    },
    {
      item: "onion, halved",
      qty: "1",
      cost: 0.3,
    },
    {
      item: "garlic cloves, smashed",
      qty: "3",
      cost: 0.15,
      spansWeeks: true,
    },
    {
      item: "bay leaf",
      qty: "1",
      cost: 0.05,
      spansWeeks: true,
    },
    {
      item: "rice (or small pasta)",
      qty: "1/2 cup",
      cost: 0.25,
    },
    {
      item: "lemon, half for the broth and wedges to serve",
      qty: "1",
      cost: 0.3,
    },
    {
      item: "fresh mint or coriander, chopped",
      qty: "small handful",
      cost: 0.3,
    },
    {
      item: "olive oil",
      qty: "2 tbsp",
      cost: 0.25,
      spansWeeks: true,
    },
    { item: "water", qty: "8 cups" },
    { item: "salt and black pepper", qty: "to taste" },
  ],
  method: [
    "Put the chicken, onion, garlic, bay, and a strip of lemon peel in a big pot, cover with the water, and bring to a bare simmer. Skim the foam, then cook gently 45–60 minutes until the meat falls from the bone — low and slow makes clear, deep broth.",
    "Lift out the chicken. Strain the broth and return it to the pot; discard the aromatics but keep every drop of liquid.",
    "Pull the meat off the bones, shredding it, and tear the skin small or render it for a little extra richness. Toss the bones back into the broth for 15 more minutes if you have time, then fish them out — this is where the last flavour hides.",
    "Bring the broth to a simmer, add the rice, and cook until tender. Return the shredded meat to warm through.",
    "Off the heat, sharpen with a squeeze of lemon, stir in the herbs, season, and serve with olive oil, pepper, and extra lemon wedges.",
  ],
  modernMove:
    "Treating one cheap bird as three ingredients — broth, meat, and rendered skin/bones for a second extraction — turns a single hen into a four-person dinner with restaurant-clear soup and nothing wasted.",
  notes:
    "The traditional Portuguese convalescent soup and Christmas-Eve starter. Cheap bone-in cuts make the best broth; the bones are simmered twice before they're done.",
  zeroWasteHero: true,
  tags: ["soup", "chicken", "rice", "broth", "mint", "whole-bird", "one-pot"],
  sources: [
    {
      title: "Canja de galinha — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Canja_de_galinha",
      note: "Portuguese chicken-and-rice soup flavoured with mint; rice cooked soft in the bird's own broth.",
    },
  ],
};
