import type { Recipe } from "../types";

export const banhXeo: Recipe = {
  slug: "banh-xeo",
  title: "Bánh Xèo",
  cuisine: "vietnamese",
  blurb:
    "The sizzling crepe — a thin, lacy turmeric rice-flour batter folded over bean sprouts and a little pork and shrimp, torn into lettuce with herbs and dipped in nước chấm. A pantry-flour dinner that eats like a feast.",
  servings: 4,
  perServing: { calories: 600, protein: 20 },
  estCostPerServing: 1.45,
  roles: ["dinner"],
  ingredients: [
    { item: "rice flour", qty: "1 1/2 cups", cost: 0.7, spansWeeks: true },
    { item: "cornstarch", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "ground turmeric", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "coconut milk", qty: "1/2 cup", cost: 0.6, spansWeeks: true },
    { item: "scallions, sliced", qty: "3", cost: 0.3 },
    { item: "pork belly or shoulder, thinly sliced", qty: "5 oz", cost: 1.3 },
    { item: "small shrimp, peeled", qty: "5 oz", cost: 1.9 },
    { item: "bean sprouts", qty: "3 cups", cost: 0.8 },
    { item: "leaf lettuce + mixed herbs (mint, cilantro, perilla)", qty: "to serve", cost: 1.5 },
    { item: "fish sauce, sugar, lime, garlic, chili (for nước chấm)", qty: "to taste", cost: 0.3, spansWeeks: true },
    { item: "neutral oil", qty: "for the pan", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Whisk the rice flour, cornstarch, turmeric, a big pinch of salt, the coconut milk, scallions, and about 1 3/4 cups water into a thin, pourable batter. Rest it 20 minutes — it should be the consistency of light cream.",
    "Heat a little oil in a wide nonstick or cast-iron skillet until shimmering. Sear a few slices of pork and a few shrimp, then pour in a thin ladle of batter and swirl to coat the pan in a lacy sheet.",
    "Scatter a handful of bean sprouts over one half, cover for a minute to steam them, then uncover and let the crepe crisp at the edges until it lifts cleanly — listen for the 'xèo' sizzle that names it.",
    "Fold the crepe over the sprouts like an omelet, slide onto a plate, and keep going until the batter is gone.",
    "To eat: tear off a piece, wrap it in lettuce with a tangle of herbs, and dunk in nước chấm. The hot crispy crepe against cool herbs and sharp sauce is the whole point.",
  ],
  modernMove:
    "A thin batter and a properly hot pan are everything — too thick and it's a pancake, not the lace it should be. The coconut milk and turmeric give color and crackle off pennies of flour; a little pork and shrimp season several crepes.",
  notes:
    "Crepes are best straight from the pan; cook to order while everyone wraps. Leftover batter keeps a day in the fridge.",
  tags: ["crepe", "rice-flour", "turmeric", "bean-sprouts", "pork", "shrimp", "herbs", "wrap"],
  sources: [
    {
      title: "Andrea Nguyen — Vietnamese Food Any Day (via The Washington Post)",
      url: "https://www.washingtonpost.com/recipes/sizzling-rice-crepes/",
      note: "Thin turmeric rice-flour batter and the pork/shrimp/bean-sprout fold",
    },
    {
      title: "Wikipedia — Bánh xèo",
      url: "https://en.wikipedia.org/wiki/B%C3%A1nh_x%C3%A8o",
      note: "Background: the dish is named for the sizzling sound and eaten wrapped in greens",
    },
  ],
};
