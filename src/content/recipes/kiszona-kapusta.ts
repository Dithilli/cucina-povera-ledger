import type { Recipe } from "../types";

export const kiszonaKapusta: Recipe = {
  slug: "kiszona-kapusta",
  title: "Kiszona Kapusta",
  cuisine: "polish",
  blurb:
    "Shredded white cabbage salted, pounded until it weeps its own brine, and packed under its juice to sour slowly into the sharp, crunchy, probiotic backbone of the Polish winter table. A few heads and a crock turn autumn's cheapest vegetable into months of bigos, soup, and pierogi filling.",
  servings: 24,
  perServing: { calories: 20, protein: 1 },
  estCostPerServing: 0.15,
  roles: ["base"],
  ingredients: [
    { item: "white cabbage", qty: "5 lb (about 2 heads)", cost: 3.0 },
    { item: "non-iodized salt", qty: "3 tbsp (about 2% of cabbage weight)", cost: 0.1, spansWeeks: true },
    { item: "carrot, grated (optional)", qty: "1", cost: 0.2 },
    { item: "caraway seeds (optional)", qty: "1 tsp", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Discard any bruised outer leaves and the hard core, then shred the cabbage fine. Weigh it so you can salt at roughly 2% — about 1 tablespoon salt per 2 lb of cabbage.",
    "Toss the cabbage with the salt (and grated carrot and caraway, if using) in a big bowl. Squeeze and pound it with your hands or a tamper for several minutes until it softens and releases a pool of its own brine.",
    "Pack the cabbage tightly into a clean crock or jar, pressing down hard to drive out air and bring the brine up over the surface. Leave a few centimeters of headroom.",
    "Weight the cabbage so it stays fully submerged under the brine — a brine-filled bag or a clean stone works. Cover loosely so gas can escape.",
    "Ferment at cool room temperature, tasting from day 3: it should turn cloudy, smell pleasantly sour, and grow tangier over 2–3 weeks. Once it tastes right, move it to the cold (fridge or cellar) to hold for months.",
  ],
  modernMove:
    "Keep the cabbage submerged under its own brine the whole time — exposed cabbage molds, while submerged cabbage sours clean. That single rule is the difference between sauerkraut and a spoiled crock.",
  notes:
    "Cabbage and salt are all you truly need; carrot and caraway are traditional touches. Always pull it out with a clean utensil and press the rest back under the brine. The sour brine itself is prized — drink it or use it to season soups.",
  zeroWasteHero: false,
  tags: ["polish", "base", "fermented", "cabbage", "sauerkraut", "make-ahead"],
  sources: [
    {
      title: "Polish Your Kitchen (Anna Hurning) — Polish-style homemade sauerkraut (kapusta kiszona)",
      url: "https://www.polishyourkitchen.com/polish-style-home-made-sauerkraut-kapusta-kiszona/",
      note: "Salting shredded cabbage at the right ratio, pounding to release brine, and submerged room-temp fermentation",
    },
  ],
};
