import type { Recipe } from "../types";

export const theTrinity: Recipe = {
  slug: "the-trinity",
  title: "The holy trinity",
  cuisine: "american-south",
  blurb:
    "Onion, celery, and green bell pepper — the Louisiana answer to mirepoix. The aromatic foundation under nearly every gumbo, étouffée, jambalaya, and pot of beans.",
  servings: 8,
  perServing: { calories: 45, protein: 1 },
  estCostPerServing: 0.18,
  roles: ["base"],
  ingredients: [
    { item: "yellow onions, diced", qty: "2 large", cost: 0.6 },
    { item: "celery, diced", qty: "4 ribs", cost: 0.6, spansWeeks: true },
    { item: "green bell peppers, diced", qty: "2", cost: 0.8 },
    { item: "garlic, minced (optional, the 'pope')", qty: "4 cloves", cost: 0.2, spansWeeks: true },
    { item: "neutral oil, lard, or bacon grease", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Cut everything to a roughly even small dice — about 1/4 inch. The classic ratio is two parts onion to one part each celery and bell pepper, but cooks adjust to taste.",
    "Warm the fat in a heavy skillet over medium heat. Add the trinity with a pinch of salt and sweat — not brown — stirring, until the onion turns translucent and the kitchen smells sweet, 8 to 10 minutes.",
    "Stir in the garlic for the last minute, if using. You want soft, glossy, melting vegetables with no color.",
    "Use right away as the base for beans, gumbo, étouffée, jambalaya, or greens. To stockpile, cool and refrigerate up to 4 days, or freeze raw-diced in bags so a pot is always 10 minutes from started.",
  ],
  modernMove:
    "Prepping and freezing the raw trinity in zip bags is the home-cook shortcut to restaurant cadence — every braise starts the moment you open the freezer, no knife work required.",
  notes:
    "Where French cooking uses carrots, Louisiana swaps in green bell pepper, which suits the warm climate and gives Creole and Cajun cooking its signature backbone.",
  zeroWasteHero: true,
  tags: ["base", "aromatics", "trinity", "creole", "cajun", "make-ahead", "vegan"],
};
