import type { Recipe } from "../types";

export const chaoGa: Recipe = {
  slug: "chao-ga",
  title: "Cháo Gà",
  cuisine: "vietnamese",
  blurb:
    "Chicken rice porridge built from a handful of leftover rice and one bird — the Vietnamese cure-all that turns scraps and bones into a silky, restorative bowl.",
  servings: 4,
  perServing: { calories: 480, protein: 32 },
  estCostPerServing: 1.75,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "whole chicken (poached for broth, then shredded — bones go back in)",
      qty: "1 small (~3 lb)",
      cost: 5.5,
    },
    {
      item: "leftover cooked rice (day-old breaks down silkier)",
      qty: "2 cups",
      cost: 0.4,
    },
    { item: "fresh ginger, smashed and sliced", qty: "2-inch knob", cost: 0.25 },
    { item: "shallots, thinly sliced (half fried for garnish)", qty: "3", cost: 0.4 },
    {
      item: "fish sauce",
      qty: "2 tbsp",
      cost: 0.3,
      spansWeeks: true,
    },
    {
      item: "neutral oil for frying shallots",
      qty: "3 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "scallions and cilantro, chopped", qty: "1 small bunch", cost: 0.5 },
    {
      item: "lime wedges, white pepper, and chili to finish",
      qty: "to finish",
      cost: 0.4,
      spansWeeks: true,
    },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Poach the whole chicken with smashed ginger and a halved shallot in enough water to cover, skimming, until just cooked through. Lift out the bird; keep the broth at a bare simmer.",
    "Pull all the meat off and shred it; return the carcass and bones to the pot and let them keep giving body to the broth while you build the porridge.",
    "Stir the leftover rice into the simmering broth and cook low and slow, stirring now and then, until the grains burst and collapse into a loose, creamy congee — add water if it tightens too much.",
    "Meanwhile fry the sliced shallots in the oil until golden and crisp; reserve the shallots and their fragrant oil separately.",
    "Fish out the bones. Season the porridge with fish sauce and salt, fold most of the shredded chicken back in, and ladle into bowls.",
    "Top each bowl with shredded chicken, crispy shallots, a drizzle of shallot oil, scallions, cilantro, a heavy hit of white pepper, and lime and chili on the side.",
  ],
  modernMove:
    "One poach does triple duty — the bird gives meat, the carcass simmered back in gives the broth its body, and day-old rice melts into it for free, so a single chicken feeds the table twice over with almost nothing thrown away.",
  zeroWasteHero: true,
  tags: ["rice", "porridge", "congee", "chicken", "one-pot", "leftover-rice"],
  sources: [
    {
      title: "Vicky Pham — Vietnamese Chicken Porridge (Chao Ga)",
      url: "https://vickypham.com/blog/vietnamese-chicken-porridge-chao-ga/",
      note: "Poaching the bird for broth, then cooking rice down into a silky congee",
    },
    {
      title: "RunAwayRice — Chicken Congee / Rice Porridge (Chao Ga)",
      url: "https://runawayrice.com/noodles-rice/chicken-congee-rice-porridge-chao-ga/",
      note: "Toppings of shredded chicken, fried shallots, scallion, and white pepper",
    },
  ],
};
