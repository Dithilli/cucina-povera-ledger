import type { Recipe } from "../types";

export const nikujaga: Recipe = {
  slug: "nikujaga",
  title: "Nikujaga",
  cuisine: "japanese",
  blurb:
    "Meat-and-potato nimono — a little thin-sliced beef slow-simmered with potatoes, onion, and carrot in dashi-soy-mirin until the potatoes drink up the broth. The original home-cooking comfort dish, built to make a few ounces of beef feed the table.",
  servings: 4,
  perServing: { calories: 460, protein: 16 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    {
      item: "thinly sliced beef (chuck or sukiyaki-cut), in bite-size pieces",
      qty: "8 oz",
      cost: 3.0,
    },
    { item: "potatoes, peeled and quartered", qty: "1 1/4 lb", cost: 1.0 },
    { item: "onion, cut into thick wedges", qty: "1 large", cost: 0.4 },
    { item: "carrot, rolling-cut into chunks", qty: "1", cost: 0.25 },
    { item: "dashi (or anchovy-kelp stock)", qty: "2 cups", cost: 0.8, spansWeeks: true },
    { item: "soy sauce", qty: "3 tbsp", cost: 0.3, spansWeeks: true },
    { item: "mirin", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "sake (or a splash of water)", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "sugar", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "neutral oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "snow peas or shelled peas, to finish (optional)", qty: "handful", cost: 0.4 },
    { item: "steamed short-grain rice, to serve", qty: "for 4", cost: 0.8 },
  ],
  method: [
    "Heat the oil in a heavy pot over medium and stir-fry the beef just until it loses its raw color. Lift it out and set aside — it goes back in at the end so it stays tender, not stringy.",
    "Add the onion and a moment later the potatoes and carrot, turning them in the beefy oil so they pick up flavor before any liquid goes in.",
    "Pour in the dashi and sake until the vegetables are nearly covered. Bring to a boil and skim the foam, then add the sugar and mirin. Lay a drop-lid (otoshibuta — a circle of parchment) right on the surface and simmer 10 minutes.",
    "Add the soy sauce — going in after the sugar so the salt doesn't keep the potatoes firm — and simmer another 10 to 15 minutes under the drop-lid, until a skewer slides through the potato.",
    "Return the beef, scatter in the peas, and simmer 3 minutes more. Cut the heat and let it rest 10 minutes; the potatoes soak up the broth as it cools, which is when nikujaga actually comes together.",
    "Serve warm in bowls with the broth, alongside rice.",
  ],
  modernMove:
    "Pulling the beef early and resting the pot off the heat lets the potatoes absorb the meaty dashi while the beef stays soft — sweetness in before salt keeps the potato meltingly tender, the trick that lets half a pound of beef flavor a whole pot.",
  notes:
    "An otoshibuta (drop-lid) keeps the gentle vegetables submerged and basted without stirring them to mush; a parchment round with a hole cut in the center does the job.",
  tags: ["dinner", "beef", "nimono", "simmered", "potato", "dashi", "comfort"],
  sources: [
    {
      title: "Namiko Chen — Just One Cookbook, Nikujaga (Japanese Meat and Potato Stew)",
      url: "https://www.justonecookbook.com/nikujaga/",
      note: "Thin beef with potato, onion, and carrot simmered in dashi-soy-mirin under an otoshibuta.",
    },
  ],
};
