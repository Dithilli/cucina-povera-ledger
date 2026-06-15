import type { Recipe } from "../types";

export const stuffedTofu: Recipe = {
  slug: "stuffed-tofu",
  title: "Stuffed Tofu (Yong Tau Foo)",
  cuisine: "cantonese",
  blurb:
    "The Hakka homesick cook's answer to a land without wheat: blocks of tofu (and whatever vegetables the garden gave) split and packed with a thin seam of pork-and-fish paste, then pan-fried and simmered in clear stock — a little protein made to stretch across a whole platter.",
  servings: 4,
  perServing: { calories: 410, protein: 24 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "firm tofu, cut in triangles and slit a pocket in each", qty: "2 blocks (~28 oz)", cost: 2.2 },
    { item: "ground pork", qty: "6 oz", cost: 1.5 },
    { item: "white fish fillet, scraped to a paste (or store fish paste)", qty: "4 oz", cost: 1.2 },
    { item: "dried shrimp, soaked and minced", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "scallion, finely chopped", qty: "2", cost: 0.2 },
    { item: "cornstarch", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "light soy sauce", qty: "2 tsp", cost: 0.08, spansWeeks: true },
    { item: "white pepper", qty: "1/4 tsp", cost: 0.02, spansWeeks: true },
    { item: "sesame oil", qty: "1 tsp", cost: 0.05, spansWeeks: true },
    { item: "superior stock (or water)", qty: "1 1/2 cups", cost: 0.4 },
    { item: "oyster sauce", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "peanut oil", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Make the filling: stir the ground pork, fish paste, dried shrimp, scallion, cornstarch, soy, white pepper, and sesame oil vigorously in one direction for a few minutes until it turns sticky and springy — that bounce is the mark of a good paste.",
    "Dust the inside of each tofu pocket lightly with cornstarch so the filling grips, then press a generous spoonful into each, mounding the exposed seam.",
    "Pan-fry the stuffed tofu filling-side down first in hot oil until that face is golden and set, then turn to brown the tofu lightly all over.",
    "Pour the stock and oyster sauce into the pan, bring to a gentle simmer, cover, and cook 6 to 8 minutes until the filling is cooked through and the tofu has drunk in the broth. Serve in shallow bowls with the broth and rice.",
  ],
  modernMove:
    "Stirring the paste in one direction develops the protein into an elastic, bouncy bind — the same trick behind springy fish balls — so a small amount of pork and fish reads as a satisfying, meaty stuffing.",
  notes:
    "Yong tau foo is endlessly extendable: the same paste stuffs split chilies, okra, bitter melon, and fried tofu puffs, so a single batch of filling can dress a whole mixed platter.",
  tags: ["tofu", "cantonese", "hakka", "pork", "fish", "stuffed"],
  sources: [
    {
      title: "What To Cook Today — Homemade Hakka Yong Tau Foo",
      url: "https://whattocooktoday.com/yong-tau-foo.html",
      note: "Pork-and-fish paste filling, stuffing the tofu, and the pan-fry-then-simmer method.",
    },
  ],
};
