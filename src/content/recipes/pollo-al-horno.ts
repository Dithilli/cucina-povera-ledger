import type { Recipe } from "../types";

export const polloAlHorno: Recipe = {
  slug: "pollo-al-horno",
  title: "Pollo al Horno",
  cuisine: "puerto-rican",
  blurb:
    "Bone-in chicken pieces bathed in a homemade adobo of garlic, oregano, sazón, and citrus, then roasted until the skin lacquers golden and the pan juices turn into gravy — the bold, forgiving roast that opens the door to Puerto Rican cooking.",
  servings: 4,
  perServing: { calories: 530, protein: 32 },
  estCostPerServing: 1.5,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in chicken thighs and drumsticks", qty: "2 1/2 lb", cost: 4.5 },
    { item: "garlic cloves, mashed", qty: "6", cost: 0.3, spansWeeks: true },
    { item: "dried oregano", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "sazón con achiote", qty: "2 tsp", cost: 0.2, spansWeeks: true },
    { item: "adobo seasoning", qty: "2 tsp", cost: 0.2, spansWeeks: true },
    { item: "lime, juiced", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "olive oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "onion, sliced", qty: "1", cost: 0.3, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Rinse the chicken with the lime juice, pat dry, then toss in a bowl with the mashed garlic, oregano, sazón, adobo, olive oil, salt, and pepper until every piece is coated.",
    "Marinate at least 30 minutes, or overnight in the fridge for deeper flavor.",
    "Scatter the sliced onion in a baking pan, lay the chicken on top skin-up with all its marinade, and pour in about 1/2 cup water so it won't dry out.",
    "Roast covered at 375°F for about 45 minutes, then uncover and raise to 425°F for 15–20 minutes to brown and crisp the skin.",
    "Tip the chicken onto a platter and spoon the reduced pan juices and softened onions over the top. Serve with white rice and beans.",
  ],
  modernMove:
    "The splash of water under a covered start lets the chicken half-braise in its own adobo before the lid comes off — you get fall-tender meat and crisp skin from one pan, plus a built-in gravy.",
  notes:
    "Dark meat stays juicy through the long roast and is cheaper than breasts. Leftover chicken pulls cleanly into a filling for mofongo relleno.",
  zeroWasteHero: false,
  tags: ["dinner", "chicken", "roast", "adobo", "garlic", "puerto-rican"],
  sources: [
    {
      title: "Salima Benkhalti — Salima's Kitchen",
      url: "https://salimaskitchen.com/pollo-al-horno/",
      note: "Garlic-oregano-sazón-citrus adobo and the covered-then-uncovered roast method",
    },
  ],
};
