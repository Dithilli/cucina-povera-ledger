import type { Recipe } from "../types";

export const farofa: Recipe = {
  slug: "farofa",
  title: "Farofa",
  cuisine: "brazilian",
  blurb:
    "Toasted cassava flour browned in butter with onion, bound with egg and sweet banana — the crunchy, savory rubble that sits on every Brazilian plate to soak up the bean broth.",
  servings: 4,
  perServing: { calories: 220, protein: 5 },
  estCostPerServing: 0.5,
  roles: ["base", "side"],
  ingredients: [
    { item: "cassava flour (farinha de mandioca)", qty: "1 1/2 cups", cost: 0.6 },
    { item: "butter", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "onion, finely diced", qty: "1 small", cost: 0.3 },
    { item: "egg", qty: "1", cost: 0.25 },
    { item: "ripe banana, sliced", qty: "1", cost: 0.2 },
    { item: "salt", qty: "to taste", cost: 0.02, spansWeeks: true },
  ],
  method: [
    "Melt the butter and soften the diced onion until golden and sweet.",
    "Scramble the egg right in the pan, then slide in the banana slices to soften and caramelize at the edges.",
    "Rain in the cassava flour and toast it patiently, stirring, until it turns golden, dry, and smells nutty — this is the whole point.",
    "Salt to taste and serve as a sandy, crunchy topping over rice, beans, or grilled meat.",
  ],
  modernMove:
    "Toast the farinha low and slow until it's truly golden, not pale — under-toasted farofa tastes raw and chalky; properly toasted it's nutty and addictive.",
  notes: "The constant on the plate: keeps for days and goes over everything.",
  zeroWasteHero: true,
  tags: ["foundation", "side", "cassava", "brazilian"],
  sources: [
    {
      title: "Brazilian Farofa — I Heart Brazil",
      url: "https://www.iheartbrazil.com/brazilian-farofa-recipe/",
      note: "butter-toasted cassava flour with onion, egg, and banana",
    },
  ],
};
