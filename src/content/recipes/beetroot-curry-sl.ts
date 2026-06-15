import type { Recipe } from "../types";

export const beetrootCurrySl: Recipe = {
  slug: "beetroot-curry-sl",
  title: "Beetroot Curry",
  cuisine: "sri-lankan",
  blurb:
    "Magenta batons of beetroot simmered down in spiced coconut milk until they stain the whole plate pink — the cheerful, faintly sweet curry that brightens a rice-and-curry spread.",
  servings: 4,
  perServing: { calories: 410, protein: 11 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "beetroot, peeled and cut into matchsticks", qty: "1 lb", cost: 1.1 },
    { item: "thin coconut milk", qty: "1 cup", cost: 0.4 },
    { item: "thick coconut milk to finish", qty: "1/2 cup", cost: 0.3 },
    { item: "onion, sliced", qty: "1 small", cost: 0.25 },
    { item: "garlic, sliced", qty: "2 cloves", cost: 0.1, spansWeeks: true },
    { item: "green chili, slit", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "rampe (pandan)", qty: "1 strip", cost: 0.1, spansWeeks: true },
    { item: "curry leaves", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "roasted Sri Lankan curry powder (thuna paha)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "turmeric", qty: "1/4 tsp", cost: 0.05, spansWeeks: true },
    { item: "cinnamon stick, small piece", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "coconut oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Warm the coconut oil and soften the onion, garlic, green chili, rampe, curry leaves, and cinnamon until fragrant but not browned.",
    "Add the beetroot matchsticks with the roasted curry powder, turmeric, and salt, and toss for a minute to coat them in the spice.",
    "Pour in the thin coconut milk, cover, and simmer 12–15 minutes until the beetroot is tender and most of the liquid has gone, stirring now and then.",
    "Stir in the thick coconut milk and let it just come together into a glossy, barely-loose gravy. Taste for salt and serve with rice.",
  ],
  modernMove:
    "Cut the beetroot into even matchsticks rather than cubes — they cook fast and keep a slight bite, so the curry stays vivid instead of turning to a muddy purée.",
  notes:
    "A little sweetness from the beet plays against the roasted curry powder; keep the heat gentle so the color stays bright.",
  zeroWasteHero: false,
  tags: ["rice-and-curry", "sri-lankan", "beetroot", "vegetable", "vegetarian"],
  sources: [
    {
      title: "Dini Kodippili — The Flavor Bender",
      url: "https://www.theflavorbender.com/sri-lankan-beetroot-curry/",
      note: "Sri Lankan beetroot curry — matchstick beets simmered in spiced coconut milk, finished with thick milk",
    },
  ],
};
