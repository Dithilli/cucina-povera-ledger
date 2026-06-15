import type { Recipe } from "../types";

export const vinegret: Recipe = {
  slug: "vinegret",
  title: "Vinegret (Beet & Potato Salad)",
  cuisine: "ashkenazi",
  blurb:
    "Diced cooked beet, potato, and carrot tossed with sour pickle, white beans, and onion in oil and a splash of pickle brine — the ruby-red salad built entirely from yesterday's boiled roots and the bottom of the pickle barrel.",
  servings: 4,
  perServing: { calories: 380, protein: 12 },
  estCostPerServing: 0.55,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "cooked beets, diced small", qty: "2 medium", cost: 0.5 },
    { item: "cooked potatoes, diced small", qty: "2 medium", cost: 0.4 },
    { item: "cooked carrots, diced small", qty: "2", cost: 0.2 },
    { item: "sour (brined) pickles, diced", qty: "2", cost: 0.4 },
    { item: "cooked white beans (or canned), drained", qty: "1 cup", cost: 0.4 },
    { item: "onion, finely chopped", qty: "1 small", cost: 0.2 },
    { item: "neutral oil", qty: "3 tbsp", cost: 0.15, spansWeeks: true },
    { item: "pickle brine", qty: "1–2 tbsp", cost: 0.05, spansWeeks: true },
    { item: "salt and pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Use roots already boiled in their skins from a previous meal — beets, potatoes, carrots. Peel and cut everything into a uniform small dice so each forkful gets a bit of all of it.",
    "Toss the beets first with a spoon of the oil in their own bowl; that thin coat of oil keeps them from bleeding and dyeing the whole salad a flat purple, leaving the potatoes and beans showing through.",
    "Combine the beets with the potato, carrot, pickle, white beans, and onion in a big bowl.",
    "Dress with the rest of the oil and the pickle brine, then salt and pepper to taste. Let it stand 20–30 minutes for the flavors to come together; it's even better the next day.",
  ],
  modernMove:
    "Oil the beets on their own before mixing. That one extra bowl keeps the salad bright and distinct instead of a uniform red mush — the difference between a tired leftover bowl and a dish you set out on purpose.",
  notes:
    "Pareve — oil, not schmaltz or cream — so it rides alongside any meal. The whole thing is a use-it-up dish: yesterday's boiled roots, the last beans in the pot, and the brine that would otherwise go down the drain.",
  zeroWasteHero: true,
  tags: ["beet", "potato", "pickle", "salad", "pareve"],
};
