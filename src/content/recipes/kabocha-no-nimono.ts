import type { Recipe } from "../types";

export const kabochaNoNimono: Recipe = {
  slug: "kabocha-no-nimono",
  title: "Kabocha no Nimono",
  cuisine: "japanese",
  blurb:
    "Kabocha squash simmered gently in dashi-soy-mirin until tender and glazed, the broth soaking into the sweet flesh as it rests. A pillar of home cooking — barely any cost, and good warm or cold.",
  servings: 4,
  perServing: { calories: 470, protein: 14 },
  estCostPerServing: 0.85,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "kabocha squash, seeded and cut in 2-inch chunks (skin on)",
      qty: "1 1/2 lb",
      cost: 1.8,
    },
    { item: "dashi (or anchovy-kelp stock)", qty: "1 1/2 cups", cost: 0.6, spansWeeks: true },
    { item: "soy sauce", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "mirin", qty: "2 tbsp", cost: 0.25, spansWeeks: true },
    { item: "sugar", qty: "1 1/2 tbsp", cost: 0.06, spansWeeks: true },
    { item: "sake (optional)", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "pinch of salt", qty: "to taste", spansWeeks: true },
    { item: "toasted sesame seeds, to finish (optional)", qty: "to finish", cost: 0.1 },
    { item: "steamed short-grain rice, to serve", qty: "for 4", cost: 0.8 },
  ],
  method: [
    "Trim a little skin off the corners of each kabocha chunk and bevel the cut edges slightly — this stops them breaking apart in the simmer and helps the pieces sit flat.",
    "Lay the kabocha skin-side down in a single layer in a wide pot. Pour in the dashi and sake to come halfway up, add the sugar and a pinch of salt, and bring to a gentle boil.",
    "Set a drop-lid (otoshibuta — a parchment round) directly on the surface and simmer on low 8 minutes; the cover keeps the pieces basted without stirring them apart.",
    "Add the mirin and soy sauce — salt going in after the sugar so the flesh stays soft — and simmer another 5 to 8 minutes, until a skewer slides easily into the kabocha and the liquid has reduced to a shallow, glossy pool.",
    "Cut the heat and let it rest in the pot at least 15 minutes; the squash drinks up the broth as it cools, which is the whole point of nimono. Serve warm or at room temperature, sesame on top, with rice.",
  ],
  modernMove:
    "Beveling the edges and resting the squash in its broth off the heat means it stays in clean glazed pieces and absorbs the dashi from the inside — concentrated flavor with almost no fat.",
  notes:
    "Keeps several days refrigerated and is often eaten cold from the box; it's a standard bento and tray-meal side, so it doubles as a vegetable course or a light meatless dinner over rice.",
  tags: ["dinner", "side", "nimono", "simmered", "kabocha", "squash", "dashi", "meatless"],
};
