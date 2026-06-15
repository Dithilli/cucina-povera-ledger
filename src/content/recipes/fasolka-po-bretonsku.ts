import type { Recipe } from "../types";

export const fasolkaPoBretonskuPl: Recipe = {
  slug: "fasolka-po-bretonsku",
  title: "Fasolka po Bretońsku",
  cuisine: "polish",
  blurb:
    "Big white beans slow-simmered with smoked sausage and bacon in a sweet-and-tangy tomato gravy, warm with marjoram and allspice — Poland's hearty 'Breton-style' beans, the kind of one-pot supper that costs little and eats like a feast with rye bread.",
  servings: 6,
  perServing: { calories: 520, protein: 24 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "dried white beans (or 2 cans, drained)", qty: "2 cups dried", cost: 1.2 },
    { item: "smoked sausage (kiełbasa), sliced", qty: "8 oz", cost: 2.4 },
    { item: "smoked bacon (boczek), diced", qty: "4 oz", cost: 1.2 },
    { item: "onion, chopped", qty: "1 large", cost: 0.3 },
    { item: "crushed tomatoes", qty: "1 can (14 oz)", cost: 0.8 },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "bay leaf, allspice", qty: "2 / 4 berries", cost: 0.1, spansWeeks: true },
    { item: "marjoram, dried", qty: "1 1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "sweet paprika and a pinch of sugar", qty: "1 tsp / 1 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soak the dried beans overnight, then simmer in fresh unsalted water with the bay and allspice until tender, 45–60 minutes; keep the bean water. (With canned beans, skip ahead and use a cup of water or stock.)",
    "Render the diced bacon in a dry pot until crisp and the fat runs. Add the sausage and brown, then the onion, cooking until soft and golden.",
    "Stir in the tomato paste and paprika for a minute, then the crushed tomatoes. Add the cooked beans with enough of their reserved liquid to make a loose, saucy pot.",
    "Simmer gently, partly covered, for 20–30 minutes so the flavors marry and the gravy thickens around the beans. Stir now and then so the bottom doesn't catch.",
    "Season with the marjoram, a pinch of sugar, salt, and pepper — tasting for the sweet-tangy balance. Serve hot with thick slices of rye bread.",
  ],
  modernMove:
    "Build the smoke first: render the bacon and brown the sausage before anything else, so the beans simmer in seasoned fat rather than plain water. A pinch of sugar against the tomato's acidity is the small correction that pulls the whole pot into balance.",
  notes:
    "Dried beans give a creamier pot and the cooking water that thickens the gravy, but cans make this a weeknight dish. Like most bean stews it's better the next day; loosen with a splash of water when you reheat.",
  zeroWasteHero: true,
  tags: ["legume", "beans", "smoked", "tomato", "polish"],
  sources: [
    {
      title: "Polonist — Fasolka po Bretońsku: Polish Baked Beans with Sausage",
      url: "https://www.polonist.com/fasolka-po-bretonsku-polish-baked-beans/",
      note: "White beans simmered with kiełbasa and bacon in tomato, seasoned with marjoram, allspice, and paprika.",
    },
  ],
};
