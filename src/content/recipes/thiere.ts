import type { Recipe } from "../types";

export const thiere: Recipe = {
  slug: "thiere",
  title: "Thiéré",
  cuisine: "senegalese",
  blurb:
    "Hand-steamed millet couscous, fluffed grain by grain, crowned with a slow peanut-and-leaf sauce that soaks down into every pellet.",
  servings: 4,
  perServing: { calories: 560, protein: 17 },
  estCostPerServing: 1.15,
  roles: ["dinner"],
  ingredients: [
    { item: "millet couscous (thiéré)", qty: "2 cups", cost: 1.4 },
    { item: "onions, sliced", qty: "2 medium", cost: 0.5 },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.2 },
    { item: "peanut butter (unsweetened) or ground peanuts", qty: "1/2 cup", cost: 0.5 },
    { item: "frozen or fresh leafy greens (moringa, sorrel, or spinach)", qty: "3 cups", cost: 0.6 },
    { item: "dried fish or smoked fish, flaked", qty: "2 oz", cost: 0.7, spansWeeks: true },
    { item: "nététou (fermented locust bean) or 1 maggi cube", qty: "1 tsp", cost: 0.15, spansWeeks: true },
    { item: "kaani (scotch bonnet), whole", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Sprinkle the millet couscous with a little salted water to dampen, rake it with your fingers so no clumps form, and steam it over a couscoussier or sieve set on a pot for 20 minutes; tip out, sprinkle again, and steam a second time until tender and separate.",
    "Meanwhile fry the onions in oil until soft and golden, stir in the tomato paste, and let it darken for a minute.",
    "Add water, the flaked dried fish, the crushed nététou (or maggi), and the whole scotch bonnet; simmer 15 minutes so the fermented funk and chilli perfume the broth.",
    "Whisk in the peanut butter until the sauce turns glossy and thick, then fold in the greens and cook gently 10 minutes more.",
    "Mound the steamed millet on a platter and ladle the peanut-leaf sauce over the top, letting it sink into the grain. Serve communally, from the same dish.",
  ],
  modernMove:
    "Steaming the millet twice — damp, rake, steam, repeat — is what gives thiéré its loose, separate grain instead of a sticky porridge; it's the same discipline as a good couscous.",
  notes:
    "Lift out the whole scotch bonnet before serving for gentle heat, or burst it for fire. A spoon of baobab-leaf powder (laalo) loosens the grain and is the traditional silkening trick.",
  tags: ["millet", "couscous", "peanut", "greens", "senegalese"],
  sources: [
    {
      title: "Wikipedia — Thiere (Senegalese millet couscous)",
      url: "https://en.wikipedia.org/wiki/Thiere",
      note: "Double-steaming the millet couscous and the laalo (baobab leaf) silkening trick.",
    },
  ],
};
