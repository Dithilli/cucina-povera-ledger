import type { Recipe } from "../types";

export const kongnamulGuk: Recipe = {
  slug: "kongnamul-guk",
  title: "Kongnamul-guk",
  cuisine: "korean",
  blurb:
    "The clear soybean-sprout soup that anchors a frugal Korean table — a 50-cent bag of sprouts simmered in anchovy-kelp stock until the broth turns nutty and the whole sprout, root and all, goes into the pot.",
  servings: 4,
  perServing: { calories: 450, protein: 22 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  zeroWasteHero: true,
  ingredients: [
    {
      item: "soybean sprouts (kongnamul), rinsed, roots left on",
      qty: "12 oz",
      cost: 0.7,
    },
    {
      item: "dried anchovies (myeolchi), cleaned",
      qty: "10",
      cost: 0.5,
      spansWeeks: true,
    },
    {
      item: "dried kelp (dasima/kombu)",
      qty: "1 postcard piece",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.1, spansWeeks: true },
    {
      item: "scallions, sliced (save the roots and tops for the stock)",
      qty: "3",
      cost: 0.2,
    },
    {
      item: "soup soy sauce (guk-ganjang)",
      qty: "1 tbsp",
      cost: 0.15,
      spansWeeks: true,
    },
    {
      item: "gochugaru (Korean chili flakes), optional",
      qty: "1 tsp",
      cost: 0.1,
      spansWeeks: true,
    },
    { item: "eggs, to enrich (optional)", qty: "2", cost: 0.5 },
    { item: "steamed rice, to serve", qty: "for 4", cost: 0.6 },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Build the stock: simmer anchovies, kelp, garlic skins, and the scallion roots and trimmings in ~7 cups water for 12 minutes, then strain — nothing edible is wasted, the scraps do the flavoring.",
    "Add the rinsed soybean sprouts whole, roots and all, and here is the rule: clamp the lid on and DON'T open it until done (about 8–10 minutes) — lifting it mid-cook is what turns the sprouts beany and grassy.",
    "Season with soup soy sauce and a little salt; the broth should taste nutty and clean. Stir in the minced garlic and sliced scallion.",
    "For a richer bowl, beat the eggs and swirl them in off the boil to set in soft ribbons; finish with gochugaru if you want heat. Serve hot with rice.",
  ],
  modernMove:
    "The lid-stays-on rule is real technique, not superstition — soybean sprouts release a beany aroma the moment cool air hits them mid-cook, so committing to a closed pot is the difference between sweet-nutty and grassy. Using the whole sprout plus the stock scraps makes it a true zero-waste pot.",
  notes:
    "A classic hangover soup; a splash of kimchi brine in the broth makes the spicy version (kongnamul-gukbap).",
  tags: [
    "soup",
    "guk",
    "soybean-sprouts",
    "anchovy-kelp-stock",
    "zero-waste",
    "weeknight",
  ],
  sources: [
    {
      title: "Maangchi — Soybean sprout soup (Kongnamul-guk)",
      url: "https://www.maangchi.com/recipe/kongnamulguk",
      note: "Anchovy-kelp broth, whole sprouts, and the lid-stays-on cooking rule",
    },
  ],
};
