import type { Recipe } from "../types";

export const torshi: Recipe = {
  slug: "torshi",
  title: "Torshi",
  cuisine: "persian",
  blurb:
    "The fiercely sour Persian vinegar pickle — a jar of chopped vegetables and herbs left to mellow under cider vinegar until it sharpens every rich stew it sits beside.",
  servings: 16,
  perServing: { calories: 30, protein: 1 },
  estCostPerServing: 0.3,
  roles: ["side", "base"],
  ingredients: [
    { item: "cauliflower, broken small", qty: "1/2 head", cost: 1.0 },
    { item: "carrots, diced", qty: "2", cost: 0.4 },
    { item: "celery, diced", qty: "3 stalks", cost: 0.5 },
    { item: "eggplant or cabbage, chopped", qty: "2 cups", cost: 0.7 },
    { item: "garlic cloves, sliced", qty: "6", cost: 0.3, spansWeeks: true },
    { item: "dried mint, dill, and tarragon", qty: "3 tbsp total", cost: 0.4, spansWeeks: true },
    { item: "cider or white vinegar", qty: "about 3 cups", cost: 1.2, spansWeeks: true },
    { item: "salt", qty: "2 tbsp", cost: 0.05, spansWeeks: true },
    { item: "nigella seeds and chili flakes", qty: "1 tbsp each", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Chop all the vegetables fairly small and even so they pickle at the same rate. Spread them on a towel for an hour or two to surface-dry — water is the enemy of a long-keeping torshi.",
    "Toss the vegetables with the garlic, dried herbs, salt, nigella, and chili until everything is well distributed.",
    "Pack tightly into a clean, dry jar, pressing down to remove air pockets. Pour over enough vinegar to cover the vegetables completely by half an inch.",
    "Seal and leave at cool room temperature, out of direct light, for at least 3 to 4 weeks, giving the jar a gentle shake every few days. It is ready when the vegetables have lost their raw crunch and taste deeply sour.",
    "Spoon out a little alongside any rich stew over rice; keep the rest submerged under the vinegar and it will hold for months in the fridge.",
  ],
  modernMove:
    "Drying the vegetables before they go in the jar is what separates a sharp, shelf-stable torshi from a mushy one — less trapped water means the vinegar stays strong and the pickle keeps for months.",
  notes:
    "A frugal way to bank the end of the vegetable box: odd bits of cauliflower, carrot, and celery that would otherwise wilt become a months-long condiment.",
  zeroWasteHero: true,
  tags: ["side", "base", "pickle", "vinegar", "preserve", "vegan", "zero-waste"],
  sources: [
    {
      title: "Torshi (Persian mixed vegetable pickle) — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Torshi",
      note: "Confirms torshi as a vinegar-cured mixed-vegetable pickle served beside rich dishes.",
    },
  ],
};
