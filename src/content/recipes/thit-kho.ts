import type { Recipe } from "../types";

export const thitKho: Recipe = {
  slug: "thit-kho",
  title: "Thịt Kho Trứng (Caramel-Braised Pork & Egg)",
  cuisine: "vietnamese",
  blurb:
    "Pork belly and whole eggs braised slow in caramel and the sweet water of a young coconut until the meat is meltingly tender and the eggs drink up the dark, savory sauce. The Tết classic and an everyday one: a pound of belly and a dozen eggs feed a family for days over rice.",
  servings: 6,
  perServing: { calories: 620, protein: 30 },
  estCostPerServing: 1.85,
  roles: ["dinner"],
  ingredients: [
    { item: "pork belly, cut in 1 1/2-inch chunks", qty: "1 1/4 lb", cost: 5.5 },
    { item: "eggs, hard-boiled and peeled", qty: "6", cost: 1.5 },
    { item: "fresh young coconut water (or 1 1/2 cups water + 1 tsp sugar)", qty: "2 cups", cost: 1.2 },
    { item: "nước màu (caramel sauce base)", qty: "2 tbsp", cost: 0.05, spansWeeks: true },
    { item: "fish sauce (nước mắm)", qty: "3 tbsp", cost: 0.45, spansWeeks: true },
    { item: "shallots, minced", qty: "2", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "sugar", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "black pepper", qty: "1/2 tsp", spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "Marinate the pork chunks with the shallot, garlic, fish sauce, sugar, and pepper for 30 minutes (or overnight). This seasons the meat through and starts the braise's foundation.",
    "Bring a pot of water to a boil and blanch the pork 2 minutes, then drain — this rinses off the scum so the finished sauce stays clean and clear, not muddy.",
    "Heat the pot dry over medium and brown the marinated pork in its own rendering fat until the edges color. Stir in the nước màu to coat every piece in dark caramel — this is where the color and savory depth come from.",
    "Pour in the coconut water until the pork is just covered. The young coconut's natural sweetness is the soul of southern thịt kho — it rounds the salt of the fish sauce without any heaviness. Bring to a boil, then drop to a bare simmer.",
    "Add the peeled hard-boiled eggs, cover loosely, and braise gently 1 1/2 to 2 hours, turning the eggs now and then so they color evenly. Skim any fat that's not silky. The pork should go fork-tender and the eggs amber.",
    "Uncover for the last 20 minutes and let the sauce reduce until it lightly coats the pork — not a glaze, but a loose, rich braise to spoon over rice. Taste and balance with a splash more fish sauce or a pinch of sugar.",
    "Serve over hot steamed rice with đồ chua and something sharp on the side; it's even better reheated the next day.",
  ],
  modernMove:
    "Blanching the pork before the braise, then building the sauce on caramel and coconut water rather than added water, gives a clean, deeply savory braise that's neither greasy nor cloyingly sweet — the balance that makes a little belly stretch.",
  notes:
    "Traditionally made in a big batch for Tết and eaten down over a week, reheated daily — it deepens each time. Sub plain water plus a teaspoon of sugar if young coconut isn't around; the caramel still carries it.",
  zeroWasteHero: false,
  tags: ["dinner", "pork", "egg", "kho", "caramel-braise", "coconut", "make-ahead", "tet"],
  sources: [
    {
      title: "Vicky Pham — Thịt Kho Trứng (Braised Pork Belly with Eggs)",
      url: "https://www.vickypham.com/blog/vietnamese-caramelized-pork-belly-eggs-thit-kho-trung-tau",
      note: "Pork belly and eggs braised in caramel, fish sauce, and coconut water — the Tết classic",
    },
    {
      title: "RunAwayRice — Caramelized Pork and Eggs (Thit Kho Trung)",
      url: "https://runawayrice.com/main-dishes/caramelized-pork-and-eggs/",
      note: "Blanching the pork and building the braise on caramel for a clean sauce",
    },
  ],
};
