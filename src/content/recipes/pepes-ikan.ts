import type { Recipe } from "../types";

export const pepesIkan: Recipe = {
  slug: "pepes-ikan",
  title: "Pepes Ikan",
  cuisine: "indonesian",
  blurb:
    "Whole small fish packed in a wet spice paste and steamed in a banana-leaf parcel until the flesh and aromatics fuse — Sundanese cooking with no pan to wash.",
  servings: 4,
  perServing: { calories: 460, protein: 30 },
  estCostPerServing: 1.15,
  roles: ["dinner"],
  ingredients: [
    {
      item: "small whole fish or firm fillets (mackerel, tilapia, milkfish)",
      qty: "1 1/4 lb",
      cost: 3.5,
    },
    { item: "shallots", qty: "5", cost: 0.5 },
    { item: "garlic cloves", qty: "4", cost: 0.2, spansWeeks: true },
    { item: "red chilies (adjust to heat)", qty: "3", cost: 0.4, spansWeeks: true },
    { item: "fresh turmeric (or 1 tsp ground)", qty: "1 thumb", cost: 0.3, spansWeeks: true },
    { item: "ginger", qty: "1 thumb", cost: 0.2, spansWeeks: true },
    { item: "candlenuts or macadamia", qty: "3", cost: 0.3, spansWeeks: true },
    { item: "tomato, chopped", qty: "1", cost: 0.4 },
    { item: "lemongrass, bruised and halved", qty: "1 stalk", cost: 0.15, spansWeeks: true },
    { item: "kaffir lime and salam (bay) leaves", qty: "3 + 2", cost: 0.2, spansWeeks: true },
    { item: "Thai basil or lemon basil (kemangi)", qty: "1 handful", cost: 0.3 },
    { item: "tamarind or lime juice", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    {
      item: "banana leaves (or parchment + foil)",
      qty: "to wrap",
      cost: 0.5,
      spansWeeks: true,
    },
    { item: "salt, sugar", qty: "to taste" },
  ],
  method: [
    "Pound shallots, garlic, chilies, turmeric, ginger, and candlenuts to a smooth wet paste. Stir in the chopped tomato, tamarind, a pinch of sugar, and salt — taste it raw; it should be bright and aggressive, because steam will soften it.",
    "Score the fish and rub it inside and out with the paste, letting it sit 15 minutes. Soften the banana leaves over a flame until pliable and glossy.",
    "Lay leaves down, add a salam leaf, lime leaves, a piece of lemongrass, and a few basil sprigs, set the fish on top, and fold into a tight parcel; pin with toothpicks. The sealed leaf traps every drop of juice.",
    "Steam the parcels 25–30 minutes until the fish is just set and the paste has melted into it. For a smoky finish, flatten the parcels on a dry hot pan or grill a few minutes a side. Open at the table — the perfume is the dish.",
  ],
  modernMove:
    "Steaming inside a sealed banana leaf is moist cooking with no added fat and no lost liquid: the spice paste poaches into the fish and the leaf perfumes it, turning a one-dollar fish into something layered.",
  tags: ["fish", "steamed", "banana-leaf", "pepes", "sundanese", "no-fat"],
  sources: [
    { title: "Wikipedia — Pepes", url: "https://en.wikipedia.org/wiki/Pepes", note: "Sundanese banana-leaf steaming method with fish as the common filling" },
    { title: "Cook Me Indonesian — Cook Me Indonesian", url: "https://www.cookmeindonesian.com/pepes-ikan-kembung-steamed-grilled-mackerel-in-banana-leaves/", note: "fish and spice paste steamed then grilled in banana leaves" },
  ],
};
