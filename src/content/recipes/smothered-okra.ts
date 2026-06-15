import type { Recipe } from "../types";

export const smotheredOkra: Recipe = {
  slug: "smothered-okra",
  title: "Smothered Okra & Tomatoes",
  cuisine: "american-south",
  blurb:
    "Okra cooked down slow with onion and tomato until its slip turns into body — the acid of the tomato tames the slime and thickens the pot.",
  servings: 4,
  perServing: { calories: 440, protein: 11 },
  estCostPerServing: 1.0,
  roles: ["dinner", "side"],
  ingredients: [
    { item: "fresh okra, sliced (or frozen)", qty: "1 lb", cost: 2.2 },
    { item: "tomatoes, chopped (or 1 can)", qty: "1 lb", cost: 1.2 },
    { item: "onion, diced", qty: "1", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "2", cost: 0.1, spansWeeks: true },
    {
      item: "smoked sausage or bacon, diced (optional)",
      qty: "3 oz",
      cost: 1.0,
    },
    {
      item: "oil or bacon drippings",
      qty: "2 tbsp",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "splash of cider vinegar",
      qty: "1 tbsp",
      cost: 0.1,
      spansWeeks: true,
    },
    {
      item: "cayenne, paprika, salt, black pepper",
      qty: "to taste",
      spansWeeks: true,
    },
  ],
  method: [
    "If using bacon or sausage, render it first in the pot and set aside, leaving the fat. Otherwise heat the drippings.",
    "Add the okra and fry it over medium-high, stirring often, 8–10 minutes — this early dry-ish sauté is the trick that cooks off the ropey 'slime' before the tomato goes in.",
    "Add the onion and garlic; soften. Stir in the tomatoes and a splash of vinegar, season, and lower the heat.",
    "Smother, partly covered, 25–30 minutes, until the okra is tender and the tomato has cooked down into a thick gravy. Fold the meat back in. Serve over rice as a supper or as a side.",
  ],
  modernMove:
    "Sautéing the okra hard before adding any liquid sets its surface and burns off the mucilage, so the tomato can thicken the pot cleanly instead of going gluey.",
  notes:
    "The vinegar's acid, like the tomato's, keeps okra from roping. Leave out the sausage for a vegetable side; keep it in for a one-pot dinner over rice.",
  tags: ["okra", "tomato", "smothered", "rice", "frugal"],
  sources: [
    {
      title: "Chef John Folse — Smothered Okra and Tomatoes",
      url: "https://www.fox8live.com/story/36200148/chef-john-folse-smothered-okra-and-tomatoes/",
      note: "Smothering okra with tomato until the 'stringing' slime cooks off and thickens the pot.",
    },
  ],
};
