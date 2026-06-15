import type { Recipe } from "../types";

export const crawfishEtouffee: Recipe = {
  slug: "crawfish-etouffee",
  title: "Crawfish Étouffée",
  cuisine: "american-south",
  blurb:
    "Crawfish tails 'smothered' in a blond-roux trinity gravy and spooned over rice — Cajun étouffée that stretches a pound of tails across dinner for four by leaning on their own fat and a stock pulled from the shells.",
  servings: 4,
  perServing: { calories: 500, protein: 25 },
  estCostPerServing: 1.85,
  roles: ["dinner"],
  ingredients: [
    {
      item: "crawfish tail meat, with its yellow fat (do not rinse the fat away)",
      qty: "1 lb",
      cost: 5.0,
    },
    { item: "onion, diced", qty: "1", cost: 0.4 },
    { item: "green bell pepper, diced", qty: "1", cost: 0.5 },
    { item: "celery ribs, diced", qty: "2", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "all-purpose flour", qty: "1/4 cup", cost: 0.08, spansWeeks: true },
    {
      item: "butter or neutral oil",
      qty: "4 tbsp",
      cost: 0.4,
      spansWeeks: true,
    },
    {
      item: "tomato paste (optional, for colour)",
      qty: "1 tbsp",
      cost: 0.15,
      spansWeeks: true,
    },
    {
      item: "shrimp or crawfish shell stock, or water",
      qty: "2 cups",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "bay leaf, thyme, cayenne, smoked paprika, black pepper",
      qty: "to taste",
      cost: 0.25,
      spansWeeks: true,
    },
    { item: "cooked white rice, to serve", qty: "for 4", cost: 0.9 },
    { item: "scallions and parsley to finish", qty: "a handful", cost: 0.3 },
    { item: "salt and hot sauce", qty: "to taste" },
  ],
  method: [
    "Melt the butter and stir in the flour, cooking a blond-to-peanut roux over medium heat, stirring constantly 4–5 minutes until it smells toasty — light, not dark; this is a smothering gravy, not a gumbo roux.",
    "Tip the trinity straight into the roux (it will hiss and arrest the browning) and cook until soft, about 8 minutes. Stir in garlic, thyme, smoked paprika, cayenne and the tomato paste and cook a minute more.",
    "Whisk in the stock a little at a time to keep it smooth, drop in the bay leaf, and simmer the gravy gently 12–15 minutes until silky and the raw-flour taste is gone.",
    "Fold in the crawfish tails together with all their yellow fat and warm through just 4–5 minutes — the tails are already cooked, so any longer toughens them and the fat is where the flavour lives.",
    "Season, fold through the scallions and parsley, and spoon over rice with plenty of hot sauce.",
  ],
  modernMove:
    "Folding the crawfish fat in with the tails rather than rinsing it off is the whole secret — that yellow fat is concentrated crawfish flavour, so a single pound of tails seasons the entire pot and the étouffée tastes generous on a frugal amount of shellfish.",
  notes:
    "Out of crawfish season, peeled shrimp work the same way — and a quick stock simmered from their shells stands in for the crawfish fat, so nothing goes to waste.",
  tags: ["crawfish", "smothered", "roux", "trinity", "gravy", "rice", "cajun", "etouffee"],
  sources: [
    {
      title: "Rouses Markets — Traditional Cajun Crawfish Étouffée",
      url: "https://www.rouses.com/cooking/recipes/traditional-cajun-crawfish-etouffee/",
      note: "Confirms the light butter-and-flour roux over the trinity, and folding in the crawfish tails with their yellow fat near the end.",
    },
    {
      title: "George Graham — Acadiana Table: Crawfish Étouffée",
      url: "https://acadianatable.com/2026/04/13/crawfish-etouffee/",
      note: "The Cajun ethos that 'the fat is where the flavor is,' plus building stock from the shells and serving over Louisiana long-grain rice.",
    },
  ],
};
