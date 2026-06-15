import type { Recipe } from "../types";

export const gajiNamul: Recipe = {
  slug: "gaji-namul",
  title: "Gaji-namul (Steamed Seasoned Eggplant)",
  cuisine: "korean",
  blurb:
    "Eggplant steamed until silky, torn into strips, and dressed with garlic, scallion, soy, and sesame — a tender, savory summer banchan that eats beautifully over rice.",
  servings: 4,
  perServing: { calories: 460, protein: 11 },
  estCostPerServing: 1.0,
  roles: ["dinner", "side"],
  ingredients: [
    {
      item: "eggplant (long Asian eggplants are ideal)",
      qty: "1 lb",
      cost: 1.8,
    },
    {
      item: "scallions, finely sliced",
      qty: "2",
      cost: 0.2,
    },
    {
      item: "garlic, minced",
      qty: "2 cloves",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "soy sauce",
      qty: "2 tbsp",
      cost: 0.15,
      spansWeeks: true,
    },
    {
      item: "gochugaru (Korean chili flakes)",
      qty: "1 tsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "toasted sesame oil and sesame seeds",
      qty: "to taste",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "short-grain rice, to serve as a dinner",
      qty: "2 cups (dry)",
      cost: 1.0,
    },
  ],
  method: [
    "Cut the eggplant into halves or quarters lengthwise, then into finger-length pieces. Steam over boiling water 8–10 minutes until completely soft and translucent.",
    "Let the steamed eggplant cool enough to handle, then tear it lengthwise into strips with your fingers rather than cutting — the rough torn edges hold the dressing far better than clean knife cuts.",
    "Gently press out any excess steaming water so the eggplant doesn't dilute the seasoning.",
    "Mix the dressing: garlic, scallion, soy sauce, gochugaru, sesame oil, and sesame seeds. Toss it through the warm eggplant by hand.",
    "Serve at room temperature as banchan, or warm over a bowl of rice for a light, silky dinner.",
  ],
  modernMove:
    "Steam rather than fry — eggplant is a sponge, and steaming gives you that melting, custardy texture for almost no oil and almost no cost. Tearing instead of slicing is what lets the dressing soak all the way in.",
  notes:
    "A staple summer banchan when eggplant is cheap and abundant. Keeps a couple of days and the flavor deepens overnight.",
  tags: ["eggplant", "namul", "banchan", "steamed", "side"],
};
