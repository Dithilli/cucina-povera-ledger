import type { Recipe } from "../types";

export const coddleCollar: Recipe = {
  slug: "coddle-collar",
  title: "Bacon Collar & Cabbage Hash",
  cuisine: "irish",
  blurb:
    "Monday's redemption of Sunday's dinner — leftover boiled collar and cabbage chopped down and fried hard in a single pan with potato until the edges crisp and catch.",
  servings: 4,
  perServing: { calories: 520, protein: 24 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "cooked bacon collar, chopped (leftover)", qty: "8 oz", cost: 1.8 },
    { item: "cooked cabbage, roughly chopped (leftover)", qty: "2 cups", cost: 0.6 },
    { item: "cooked or boiled potatoes, diced", qty: "1 1/2 lb", cost: 0.8 },
    { item: "onion, finely sliced", qty: "1", cost: 0.3 },
    { item: "butter or bacon dripping", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "eggs (optional, to top)", qty: "4", cost: 0.8 },
    { item: "black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Melt the butter or dripping in a wide heavy pan and soften the sliced onion until golden at the edges.",
    "Add the diced potato and press it into the fat, letting it sit untouched a few minutes at a time so a crust forms before you turn it.",
    "Fold in the chopped bacon and cabbage and keep frying, scraping the brown catch off the pan into the hash — that's the flavour.",
    "Press the whole lot flat into a cake and let the underside crisp, then break it up and season well with pepper.",
    "If you like, fry an egg per person and slide it on top to break over the hash.",
  ],
  modernMove:
    "Letting the hash sit undisturbed against a hot pan builds a proper brown crust, turning yesterday's grey leftovers into something with crackle and edges — a fry-up that costs almost nothing because the meat's already paid for.",
  notes:
    "This is the thrifty cousin of the Dublin coddle: nothing here is bought fresh except the eggs. Use whatever cooked spuds, cabbage and bacon the week left behind.",
  zeroWasteHero: true,
  tags: ["bacon", "cabbage", "potato", "hash", "leftovers", "irish", "fry-up"],
  sources: [
    {
      title: "Just a Pinch — Irish Fried Cabbage with Bacon",
      url: "https://justapinch.com/recipes/irish-fried-cabbage-with-bacon.html",
      note: "Confirms frying chopped bacon, cabbage and onion together in dripping until crisped — the leftover-hash template.",
    },
  ],
};
