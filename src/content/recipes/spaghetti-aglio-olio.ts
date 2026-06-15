import type { Recipe } from "../types";

export const spaghettiAglioOlio: Recipe = {
  slug: "spaghetti-aglio-olio",
  title: "Spaghetti Aglio e Olio",
  cuisine: "italian",
  blurb:
    "The cleanest pantry pasta there is — garlic gently gilded in good oil — pulled Sicilian with melted anchovy, a spoon of capers, and a snow of toasted breadcrumbs standing in for cheese.",
  servings: 4,
  perServing: { calories: 560, protein: 16 },
  estCostPerServing: 1.45,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "spaghetti", qty: "12 oz", cost: 1.5 },
    { item: "extra-virgin olive oil", qty: "6 tbsp", cost: 1.16, spansWeeks: true },
    { item: "garlic cloves, thinly sliced", qty: "4", cost: 0.4, spansWeeks: true },
    { item: "anchovy fillets", qty: "4–6", cost: 1.0, spansWeeks: true },
    { item: "capers, rinsed and roughly chopped", qty: "2 tbsp", cost: 0.4, spansWeeks: true },
    { item: "chili flakes", qty: "1/2 tsp", spansWeeks: true },
    { item: "coarse breadcrumbs (from stale bread)", qty: "1 1/2 cups", cost: 0.5 },
    { item: "parsley, chopped", qty: "a handful", cost: 0.25 },
    { item: "lemon zest, optional", qty: "zest of 1/2 lemon", cost: 0.15 },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Toast the breadcrumbs in a dry pan (or a slick of oil) over medium heat, tossing, until deep gold and crisp. Tip onto a plate, season with salt, and stir through the lemon zest if using. This is the pangrattato — the 'poor man's Parmesan.'",
    "Start the spaghetti in well-salted water and cook to just shy of al dente.",
    "Meanwhile, warm the olive oil with the sliced garlic and chili over low heat, coaxing the garlic to a very pale gold — never brown, or it turns bitter. Lay in the anchovies and capers and let the anchovies melt into the oil.",
    "Drag the pasta straight into the pan with a good splash of starchy water and toss hard over the heat until the oil and water emulsify into a glossy sauce that clings.",
    "Off the heat, fold through the parsley. Plate and shower generously with the pangrattato so every forkful gets crunch.",
  ],
  modernMove:
    "Emulsify — finish the spaghetti in the pan with a ladle of its starchy water and toss until the oil goes from a slick to a creamy sauce. The breadcrumbs go on at the very end so they stay crisp instead of drinking the oil.",
  notes:
    "Anchovy, capers, and breadcrumbs are the Sicilian pantry talking: salt, brine, and stale bread doing the work cheese does up north. Skip the anchovy and it's a clean aglio e olio; the crumb still carries it.",
  zeroWasteHero: true,
  tags: ["pasta", "pangrattato", "anchovy", "capers", "garlic", "sicilian", "zero-waste"],
  sources: [
    {
      title: "The Pasta Project — Spaghetti aglio e olio",
      url: "https://www.the-pasta-project.com/spaghetti-aglio-e-olio/",
      note: "base technique and history: garlic taken only to pale gold in oil, emulsified with pasta water",
    },
    {
      title: "The Pasta Project — Pasta with Breadcrumbs (Basilicata)",
      url: "https://www.the-pasta-project.com/pasta-with-breadcrumbs/",
      note: "Southern-Italian breadcrumbs as 'the poor man's cheese,' toasted and paired with anchovy",
    },
  ],
};
