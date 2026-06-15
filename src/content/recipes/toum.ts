import type { Recipe } from "../types";

export const toum: Recipe = {
  slug: "toum",
  title: "Toum (Lebanese Garlic Sauce)",
  cuisine: "levantine",
  blurb:
    "Raw garlic whipped with oil and lemon into a fluffy, snow-white emulsion so potent a teaspoon lights up a whole plate — Lebanon's answer to aioli, made without an egg.",
  servings: 16,
  perServing: { calories: 130, protein: 0 },
  estCostPerServing: 0.18,
  roles: ["side"],
  ingredients: [
    { item: "garlic cloves, peeled, green germ removed", qty: "1/2 cup (about 1 head)", cost: 0.6 },
    { item: "salt", qty: "1 tsp" },
    { item: "neutral oil (sunflower, canola)", qty: "2 cups", cost: 1.8 },
    { item: "lemon juice", qty: "1/4 cup", cost: 0.5 },
    { item: "ice water", qty: "1–2 tbsp, if needed" },
  ],
  method: [
    "Pull out the green germ from each garlic clove — it carries the harsh, acrid bitterness. Pat the cloves bone dry; any water will fight the emulsion.",
    "In a food processor, blitz the garlic with the salt to a fine paste, scraping down the sides.",
    "Now go SLOW. With the motor running, add the oil in a thin thread — almost drop by drop at first — alternating with a teaspoon of lemon juice every so often. The garlic must accept the oil gradually or it breaks.",
    "As it builds, it turns thick, white, and glossy like a fluffy mayonnaise. Continue until all the oil and lemon are in and the toum stands in soft peaks. Loosen with a few drops of ice water if it's too stiff.",
    "Rest it covered in the fridge a day before using — it mellows from blowtorch to merely fierce. Keeps for weeks.",
  ],
  modernMove:
    "Toum emulsifies on garlic's own proteins and pectin alone — no egg, no mustard. The whole game is the achingly slow oil stream; rush it and you get garlic soup. A steady thin thread is everything.",
  notes:
    "Egg-free and vegan, which is why it keeps for weeks. Serve with grilled chicken, roasted potatoes, or anything off the grill — a little goes a very long way.",
  tags: ["side", "garlic", "sauce", "emulsion", "vegan", "make-ahead"],
  sources: [
    {
      title: "Maureen Abood — maureenabood.com",
      url: "https://maureenabood.com/toum-lebanese-garlic-sauce/",
      note: "Egg-free toum emulsion — garlic, oil, and lemon built slowly into a fluffy white sauce.",
    },
  ],
};
