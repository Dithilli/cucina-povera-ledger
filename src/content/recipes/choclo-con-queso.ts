import type { Recipe } from "../types";

export const chocloConQueso: Recipe = {
  slug: "choclo-con-queso",
  title: "Choclo con Queso",
  cuisine: "andean",
  blurb:
    "Andean street food at its simplest — a fat ear of giant-kerneled choclo boiled until tender and starchy, served hot with a thick slice of fresh cheese laid right on top.",
  servings: 2,
  perServing: { calories: 400, protein: 14 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh corn on the cob (choclo)", qty: "2 large ears", cost: 1.4 },
    { item: "fresh cheese (queso fresco), thick slices", qty: "6 oz", cost: 1.5, spansWeeks: true },
    { item: "salt", qty: "1 tsp", cost: 0.02, spansWeeks: true },
    { item: "anise seeds (optional, traditional)", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "lime, to finish", qty: "1/2", cost: 0.15, spansWeeks: true },
  ],
  method: [
    "Bring a wide pot of water to a boil with the salt, a squeeze of lime, and the anise seeds if using.",
    "Add the ears of choclo and boil 12–18 minutes until the big kernels are tender but still firm — choclo stays chewy and savory, never as sweet as table corn.",
    "Lift the corn out, drain, and put each ear on a plate while still steaming.",
    "Lay a thick slice of fresh cheese alongside or over the corn so it warms and softens, and eat the two together, bite for bite.",
  ],
  modernMove:
    "A squeeze of lime and a few anise seeds in the boiling water perfume the starchy choclo from the inside — the small touch that turns plain boiled corn into the version sold at every Andean market.",
  notes:
    "About as frugal and waste-free as dinner gets: two ingredients, no pan to wash, and the cob composts. Strip any leftover kernels into tomorrow's soup.",
  zeroWasteHero: false,
  tags: ["corn", "choclo", "cheese", "boiled", "street-food", "peru", "andean"],
  sources: [
    {
      title: "Eat Healthy 365 — Choclo con Queso (Peruvian Corn with Cheese)",
      url: "https://eathealthy365.com/choclo-con-queso-peruvian-corn-with-cheese/",
      note: "Boiling choclo with lime and serving with crumbled or sliced queso fresco",
    },
  ],
};
