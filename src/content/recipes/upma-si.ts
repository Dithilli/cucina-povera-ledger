import type { Recipe } from "../types";

export const upmaSi: Recipe = {
  slug: "upma-si",
  title: "Upma",
  cuisine: "south-indian",
  blurb:
    "Coarse semolina dry-roasted to a nutty gold, then steamed soft in its own tempering of mustard seed, urad dal and curry leaf with onion, ginger and green chile — a fluffy, savory porridge that turns a fistful of rava into a whole supper.",
  servings: 4,
  perServing: { calories: 420, protein: 9 },
  estCostPerServing: 0.5,
  roles: ["dinner"],
  ingredients: [
    { item: "coarse rava (sooji / semolina)", qty: "1 cup", cost: 0.45 },
    { item: "onion, finely chopped", qty: "1 small", cost: 0.25 },
    { item: "green chiles, slit", qty: "2", cost: 0.1 },
    { item: "ginger, minced", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "mixed vegetables (carrot, peas, beans), diced", qty: "1 cup", cost: 0.5 },
    { item: "oil or ghee", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "mustard seed; urad dal; chana dal", qty: "1 tsp each", cost: 0.15, spansWeeks: true },
    { item: "curry leaves; pinch of hing", qty: "1 sprig", cost: 0.1, spansWeeks: true },
    { item: "water; salt; cilantro; lemon", qty: "2 1/2 cups", cost: 0.2 },
  ],
  method: [
    "Dry-roast the rava in a wide pan over medium heat, stirring constantly, 5–6 minutes until it smells nutty and turns a shade darker but not brown. Tip it out and reserve — this roast is what keeps the upma fluffy instead of pasty.",
    "In the same pan heat the oil and make the tempering: crackle the mustard seed, then add urad dal and chana dal and fry to golden, then curry leaves, hing, green chile and ginger.",
    "Add the onion and cook soft, then the diced vegetables and a little salt; cover and cook a few minutes until just tender. Pour in the 2 1/2 cups water and bring to a rolling boil.",
    "Lower the heat and rain the roasted rava in with one hand while stirring fast with the other, so no lumps form. It thickens almost at once; cover and let it steam 2–3 minutes off the boil.",
    "Fluff with a fork, finish with cilantro and a squeeze of lemon, and serve hot with coconut chutney.",
  ],
  modernMove:
    "The whole texture hinges on two moves done at once: rava roasted dry beforehand, then added to boiling — never lukewarm — water in a steady stream while you stir. Hot water hitting hot, roasted grains sets each one separate; cold water makes glue.",
  notes:
    "Endlessly thrifty — whatever single vegetable is in the drawer carries the dish, and a heel of bread's worth of rava feeds four. Leftover upma presses into a pan and crisps the next morning.",
  zeroWasteHero: false,
  tags: ["dinner", "tiffin", "upma", "semolina", "rava", "south-indian"],
  sources: [
    {
      title: "Swasthi — Swasthi's Recipes",
      url: "https://www.indianhealthyrecipes.com/upma-recipe-how-to-make-upma/",
      note: "Dry-roasting the rava and raining it into boiling tempered water for a fluffy, lump-free upma.",
    },
  ],
};
