import type { Recipe } from "../types";

export const soupaAvgolemono: Recipe = {
  slug: "soupa-avgolemono",
  title: "Soupa Avgolemono (Chicken & Rice Soup)",
  cuisine: "greek",
  blurb:
    "A little chicken stretched into a whole pot — rice simmered in the stock, then finished with whipped egg and lemon until silky and golden.",
  servings: 4,
  perServing: { calories: 480, protein: 32 },
  estCostPerServing: 1.15,
  roles: ["dinner"],
  ingredients: [
    {
      item: "chicken thigh or a few pieces on the bone (skin on for the stock)",
      qty: "12 oz",
      cost: 2.4,
    },
    { item: "short or medium-grain rice", qty: "1/2 cup", cost: 0.3 },
    { item: "onion, halved", qty: "1", cost: 0.3 },
    { item: "carrot and a stick of celery", qty: "1 each", cost: 0.35 },
    { item: "eggs", qty: "2", cost: 0.6, spansWeeks: true },
    { item: "lemons (juice of)", qty: "1 1/2", cost: 0.5, spansWeeks: true },
    { item: "olive oil, salt, black pepper, dill to finish", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Simmer the chicken gently with the onion, carrot, and celery in about 8 cups of water, skimming, until tender, 35–45 minutes. Lift out the chicken, strain and reserve the broth, and shred the meat off the bone.",
    "Return the broth to a boil, add the rice, and cook until just tender, about 15 minutes. Stir the shredded chicken back in and pull the pot off the heat — it must stop boiling before the eggs go in.",
    "Whisk the eggs hard until pale and frothy, then whisk in the lemon juice. Ladle a cup of the hot broth into the eggs in a thin thread while whisking constantly to temper them.",
    "Pour the warmed egg-lemon back into the pot off the heat and swirl — never boil again or it will scramble. The soup turns opaque, lemony, and velvety.",
    "Season and serve at once with a thread of olive oil, black pepper, and dill.",
  ],
  modernMove:
    "Avgolemono — eggs whipped frothy and tempered with hot stock, then stirred in off the heat — emulsifies a thin broth into a creamy soup with no cream at all. Tempering slowly is the whole trick.",
  notes:
    "The classic 'sick-day' soup: one piece of chicken and a handful of rice feeds four because the egg-lemon does the enriching.",
  tags: ["soup", "chicken", "rice", "avgolemono", "egg-lemon", "one-pot"],
  sources: [
    {
      title: "My Greek Dish — Greek Lemon Chicken Soup (Kotosoupa Avgolemono)",
      url: "https://www.mygreekdish.com/recipe/greek-lemon-chicken-soup-kotosoupa-avgolemono/",
      note: "Confirms chicken and rice in broth finished with a whisked egg-lemon sauce.",
    },
  ],
};
