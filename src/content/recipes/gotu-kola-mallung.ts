import type { Recipe } from "../types";

export const gotuKolaMallung: Recipe = {
  slug: "gotu-kola-mallung",
  title: "Gotu Kola Mallung (Sambola)",
  cuisine: "sri-lankan",
  blurb:
    "Pennywort sliced to whispers and tossed raw with scraped coconut, shallot, green chili, and lime — the cool, vivid green salad that lightens a heavy rice-and-curry plate.",
  servings: 4,
  perServing: { calories: 160, protein: 6 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "gotu kola (pennywort) or substitute young spinach/watercress", qty: "4 cups packed", cost: 1.2 },
    { item: "freshly scraped coconut", qty: "1 cup", cost: 0.6 },
    { item: "shallots or red onion, finely chopped", qty: "2", cost: 0.25 },
    { item: "green chili, minced", qty: "1", cost: 0.1 },
    { item: "lime", qty: "1/2", cost: 0.1 },
    { item: "Maldive fish flakes (optional)", qty: "1 tsp", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "1/4 tsp", cost: 0.02, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "Wash the gotu kola well and dry it. Stack the leaves and tender stems and shred them as finely as you can — the hallmark of a good mallung is hair-thin greens.",
    "Pile the shredded greens in a bowl with the coconut, shallot, green chili, salt, and Maldive fish if using.",
    "Squeeze over the lime and toss with your fingers for a minute or two so the coconut takes on the lime and the chili distributes evenly.",
    "Taste and adjust salt and lime. Serve raw and fresh alongside rice and curry — it should taste green, bright, and barely-cooked.",
  ],
  modernMove:
    "Keep it raw. Unlike a cooked mallung you wilt in a pan, gotu kola sambola stays uncooked, so slicing the leaves thin is what makes them tender — the knife does the cooking.",
  notes:
    "Pennywort is the traditional green, but the same treatment works on finely shredded kale, cabbage, or watercress when gotu kola isn't around. Dress it just before serving so it stays crisp.",
  zeroWasteHero: false,
  tags: ["sri-lankan", "mallung", "greens", "coconut", "salad", "no-cook", "side"],
  sources: [
    {
      title: "Island Smile — Gotu Kola Sambol (Pennywort Salad)",
      url: "https://www.islandsmile.org/gotu-kola-pennywort-sambol/",
      note: "Finely shredding the raw greens and dressing with coconut, shallot, chili, and lime",
    },
  ],
};
