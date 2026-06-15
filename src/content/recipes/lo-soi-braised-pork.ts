import type { Recipe } from "../types";

export const loSoiBraisedPork: Recipe = {
  slug: "lo-soi-braised-pork",
  title: "Lou Soi Braised Pork",
  cuisine: "cantonese",
  blurb:
    "Pork shoulder simmered low in the lou soi — the 'old water' master stock that is never thrown out, only topped up, deepening with every meat it has ever cradled — until the slices come out spiced, savory-sweet, and burnished dark.",
  servings: 5,
  perServing: { calories: 420, protein: 27 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "pork shoulder, in one piece", qty: "2 lb", cost: 6.0 },
    { item: "reserved lou soi master stock (or built fresh, below)", qty: "5 cups", cost: 1.0, spansWeeks: true },
    { item: "light soy sauce (to top up)", qty: "1/3 cup", cost: 0.3, spansWeeks: true },
    { item: "dark soy sauce (to top up)", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "rock sugar", qty: "3 tbsp", cost: 0.25, spansWeeks: true },
    { item: "Shaoxing wine", qty: "1/4 cup", cost: 0.3, spansWeeks: true },
    { item: "ginger, sliced", qty: "3 slices", cost: 0.15, spansWeeks: true },
    { item: "star anise", qty: "2 pods", cost: 0.1, spansWeeks: true },
    { item: "cassia or cinnamon bark", qty: "1 piece", cost: 0.1, spansWeeks: true },
    { item: "dried tangerine peel", qty: "1 piece", cost: 0.1, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "Blanch the pork: cover with cold water, bring to a boil, simmer 3 minutes, then drain and rinse off the scum. This keeps the master stock clean and clear.",
    "Bring the reserved lou soi to a simmer and top it up — taste it back into balance with soy, rock sugar, Shaoxing, and a fresh hit of ginger and spice. Building fresh? Simmer all the stock ingredients 20 minutes first.",
    "Lower in the pork. Keep the stock at the barest simmer — a poaching bubble, never a rolling boil — covered, for about 75 minutes, turning the meat once so it colors evenly.",
    "Cut the heat and let the pork steep in the hot stock another 20 minutes; it keeps drinking in color and flavor as it cools. Lift out and rest before slicing thin against the grain.",
    "Serve over rice, moistened with a few spoons of the reduced stock and a saucer of ginger-scallion. Strain the lou soi, boil it hard to sterilize, cool fast, and refrigerate or freeze — it is the same pot you will braise next week.",
  ],
  modernMove:
    "The whole craft is stewardship of the lou soi: every braise gives the stock collagen and gives the meat the stock's accumulated depth. Boil and skim it after each use, top up rather than replace, and it only gets better with age.",
  notes:
    "The same stock that poached your soy sauce chicken is ideal here — pork, eggs, tofu, and wings all rotate through one master pot. Drop in halved hard-boiled eggs for the last 20 minutes for lou soi eggs at no extra cooking.",
  zeroWasteHero: true,
  tags: ["pork", "master-stock", "lou-soi", "braise", "make-ahead", "cantonese"],
  sources: [
    {
      title: "Wikipedia — Master stock",
      url: "https://en.wikipedia.org/wiki/Master_stock",
      note: "Lou soi as a perpetually reused, topped-up poaching stock; boil/skim/strain to maintain",
    },
  ],
};
