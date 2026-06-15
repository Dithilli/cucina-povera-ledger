import type { Recipe } from "../types";

export const lotek: Recipe = {
  slug: "lotek",
  title: "Lotek",
  cuisine: "indonesian",
  blurb:
    "Karedok's cooked cousin — a Sundanese salad of blanched spinach, long beans, cabbage, and bean sprouts under a thick peanut sauce pounded with kencur, garlic, and a knob of terasi, served with fried tofu and rice or lontong.",
  servings: 4,
  perServing: { calories: 470, protein: 19 },
  estCostPerServing: 1.15,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "spinach (or amaranth/kangkung), blanched", qty: "1 bunch", cost: 0.7 },
    { item: "long beans, cut and blanched", qty: "6 oz", cost: 0.7 },
    { item: "cabbage, shredded and blanched", qty: "1/4 head", cost: 0.4 },
    { item: "bean sprouts, blanched", qty: "1 1/2 cups", cost: 0.4 },
    { item: "firm tofu, fried and cubed", qty: "6 oz", cost: 0.9 },
    { item: "roasted peanuts (or unsweetened peanut butter)", qty: "1 cup", cost: 1.2 },
    { item: "garlic cloves", qty: "2", cost: 0.1, spansWeeks: true },
    { item: "fresh red chilies", qty: "2", cost: 0.2, spansWeeks: true },
    { item: "kencur (aromatic ginger) or fresh ginger", qty: "1 tsp", cost: 0.2, spansWeeks: true },
    { item: "terasi (shrimp paste), toasted", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "palm sugar (or brown sugar)", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "tamarind paste", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste", cost: 0.05 },
  ],
  method: [
    "Bring a pot of salted water to a boil and blanch each vegetable just until tender-crisp, lifting them out in turn — lotek's vegetables are cooked, which is the one thing that sets it apart from raw karedok.",
    "Pound the peanuts with the garlic, chilies, kencur, toasted terasi, palm sugar, tamarind, and salt into a thick, rough paste. Slacken with warm water until just spoonable, tasting for a sweet-sour-savory balance.",
    "Pile the drained warm vegetables and the fried tofu in a bowl.",
    "Spoon the peanut sauce over and toss to coat, or grind everything together in the mortar Sundanese-style. Serve with rice or sliced lontong and a scatter of fried shallots.",
  ],
  modernMove:
    "The toasted terasi is what divides lotek from a generic peanut salad — a pea-sized knob of shrimp paste, dry-toasted until it smells nutty, gives the whole sauce a deep savory floor that sugar and lime alone never reach.",
  notes:
    "Distinct from gado-gado (which keeps its components separate under a thinner, sweeter sauce) and from raw karedok: lotek's vegetables are blanched and its sauce leans sharp with kencur and terasi. The blanching water and any leftover sauce both find a second life — thin the sauce for tomorrow's greens.",
  tags: ["dinner", "peanut-sauce", "salad", "sundanese", "blanched", "vegetables"],
  sources: [
    { title: "What To Cook Today — Lotek (Sundanese Vegetable Salad with Peanut Dressing)", url: "https://whattocooktoday.com/lotek-sundanese-vegetable-salad.html", note: "blanched vegetables, peanut sauce with kencur, terasi, palm sugar, tamarind" },
    { title: "Baking Hermann — Lotek (Indonesian Peanut Tofu Salad)", url: "https://bakinghermann.com/lotek-indonesian-vegetable-tofu-salad-with-peanut-dressing/", note: "fried tofu, sweet-spicy peanut dressing, served with rice/lontong" },
    { title: "Wikipedia — Lotek (food)", url: "https://en.wikipedia.org/wiki/Lotek_(food)", note: "West Java salad of steamed/blanched vegetables with peanut sauce; distinct from karedok" },
  ],
};
