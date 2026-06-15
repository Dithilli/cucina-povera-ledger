import type { Recipe } from "../types";

export const warakEnab: Recipe = {
  slug: "warak-enab",
  title: "Warak Enab",
  cuisine: "levantine",
  blurb:
    "Vine leaves rolled tight around lemony herbed rice and braised until silky — the patient, meatless 'sayyami' version eaten cold or warm with extra lemon.",
  servings: 4,
  perServing: { calories: 520, protein: 10 },
  estCostPerServing: 1.1,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "grape/vine leaves (jarred in brine), rinsed", qty: "1 jar (~60 leaves)", cost: 2.0 },
    { item: "short-grain rice, rinsed", qty: "1 1/2 cups", cost: 0.75 },
    { item: "tomatoes, finely diced", qty: "2", cost: 0.5 },
    { item: "onion, finely chopped", qty: "1", cost: 0.3 },
    { item: "parsley, finely chopped", qty: "1 large bunch", cost: 0.5 },
    { item: "mint, chopped (or 1 tbsp dried)", qty: "1 small bunch", cost: 0.3 },
    {
      item: "olive oil",
      qty: "1/3 cup",
      cost: 0.5,
      spansWeeks: true,
    },
    { item: "lemons (juice for the rice + cooking water)", qty: "3", cost: 0.9 },
    { item: "ground allspice and cinnamon", qty: "1/2 tsp each", cost: 0.1, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste" },
  ],
  method: [
    "Mix the rinsed rice with tomatoes, onion, parsley, mint, the juice of one lemon, half the olive oil, allspice, cinnamon, salt, and pepper.",
    "Lay a leaf vein-side up, place a finger of filling near the stem, fold the sides in, and roll into a tight little cigar. Repeat — line the pot base with torn or flat leaves first to prevent scorching.",
    "Pack the rolls seam-down in snug layers. Pour over the juice of the remaining lemons, the rest of the oil, and water just to cover. Weight with an inverted plate.",
    "Bring to a gentle boil, then braise on the lowest heat 45–50 minutes until the rice is tender and the leaves are silky. Rest off the heat 20 minutes before unmolding. Serve warm or cold with lemon.",
  ],
  modernMove:
    "A plate pressed on top keeps the rolls from unfurling and lets them braise under their own weight, so each one stays cigar-tight and glossy instead of bursting.",
  notes:
    "If using fresh vine leaves, blanch 1 minute in boiling water first. The rice is deliberately undercooked going in — it finishes by drinking the lemony braise.",
  tags: ["vine-leaves", "rice", "herbs", "lemon", "vegan", "make-ahead"],
  sources: [
    {
      title: "Plant Based Folk — plantbasedfolk.com",
      url: "https://plantbasedfolk.com/warak-enab-lebanese-grape-leaves/",
      note: "Meatless 'bi-zeit' warak enab — leaves rolled around herbed rice and braised in a lemony broth.",
    },
    {
      title: "The Matbakh — thematbakh.com",
      url: "https://thematbakh.com/stuffed-grape-leaves-warak-enab/",
      note: "Rolling technique and lining the pot to prevent scorching.",
    },
  ],
};
