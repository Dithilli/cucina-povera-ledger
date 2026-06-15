import type { Recipe } from "../types";

export const psarosoupa: Recipe = {
  slug: "psarosoupa",
  title: "Psarosoupa (Greek Fish Soup)",
  cuisine: "greek",
  blurb:
    "A whole cheap fish simmered with potato, carrot, and onion into a clear, restorative broth — the vegetables poached in it, then the pot often finished avgolemono.",
  servings: 4,
  perServing: { calories: 500, protein: 33 },
  estCostPerServing: 1.55,
  roles: ["dinner"],
  ingredients: [
    {
      item: "whole white fish (scorpion fish, gurnard, small cod, or mixed cheap whole fish), gutted & scaled",
      qty: "1 1/2 lb",
      cost: 4.5,
    },
    { item: "potatoes, halved", qty: "2", cost: 0.5 },
    { item: "carrots, in chunks", qty: "2", cost: 0.4 },
    { item: "onion, whole or halved", qty: "1", cost: 0.3 },
    { item: "celery stick", qty: "1", cost: 0.15 },
    { item: "eggs (for the avgolemono finish)", qty: "2", cost: 0.6, spansWeeks: true },
    { item: "lemons (juice of)", qty: "1 1/2", cost: 0.5, spansWeeks: true },
    { item: "olive oil, salt, black pepper, parsley", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Put the potatoes, carrots, onion, and celery in a pot with the olive oil and water to cover by an inch. Simmer until the vegetables are nearly tender, about 20 minutes.",
    "Lay the whole fish on top, add salt, and poach gently 12–15 minutes until the flesh flakes — don't let it boil hard or the broth turns cloudy.",
    "Lift the fish out carefully; flake the meat off the bones and reserve, discarding skin and bones. Keep the vegetables and broth.",
    "Pull the pot off the heat. Whisk the eggs frothy, whisk in the lemon, temper with ladlefuls of hot broth, then stir back into the pot off the heat until creamy and pale — never boil again.",
    "Return the flaked fish, warm through gently, and serve with black pepper, parsley, and a thread of olive oil.",
  ],
  modernMove:
    "Poaching a whole bony fish gives a gelatin-rich broth; finishing it avgolemono turns that thin liquid into a velvety, lemony soup without a drop of cream.",
  notes:
    "Built on the cheapest whole fish at the market — often the ugly, bony ones nobody fillets — which make the best, most gelatinous broth.",
  zeroWasteHero: true,
  tags: ["soup", "fish", "whole-fish", "potato", "avgolemono", "one-pot"],
  sources: [
    {
      title: "Diane Kochilas — Psarosoupa (Fish Soup with Avgolemono)",
      url: "https://www.dianekochilas.com/psarosoupa-fish-soup-with-avgolemono/",
      note: "Confirms whole fish simmered with vegetables and finished with an egg-lemon sauce.",
    },
  ],
};
