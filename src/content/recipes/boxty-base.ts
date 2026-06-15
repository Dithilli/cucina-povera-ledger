import type { Recipe } from "../types";

export const boxtyBase: Recipe = {
  slug: "boxty-base",
  title: "Boiled & Buttered Potatoes",
  cuisine: "irish",
  blurb:
    "The floury spud, boiled in its jacket until it cracks open, peeled at the table and crushed with a knob of butter and a grain of salt — the plain, perfect foundation under every Irish dinner.",
  servings: 4,
  perServing: { calories: 230, protein: 5 },
  estCostPerServing: 0.3,
  roles: ["base"],
  ingredients: [
    { item: "floury potatoes (Rooster or Maris Piper)", qty: "1 kg", cost: 0.9 },
    { item: "butter", qty: "3 tbsp", cost: 0.4, spansWeeks: true },
    { item: "salt", qty: "1 tbsp (for the water) + to taste", cost: 0.02, spansWeeks: true },
  ],
  method: [
    "Scrub the potatoes but leave the skins on. Choose them roughly even in size so they cook through together.",
    "Put them in a pot, cover with cold salted water, bring to the boil, then drop to a gentle simmer — a hard boil bursts the skins and floods the flesh with water.",
    "Cook 20–30 minutes depending on size, until a knife slides in with no resistance and the skins are starting to split.",
    "Drain well and return to the dry pot over low heat for a minute to steam off, so the flesh stays dry and floury. Serve with cold butter to crush in and plenty of salt.",
  ],
  modernMove:
    "Start them in cold water and never let it gallop — a slow climb cooks the centre and the outside evenly, so a floury variety turns light and mealy instead of waterlogged and gluey.",
  notes:
    "The everyday base of the Irish plate, eaten with butter alongside almost everything. Cook extra on purpose: the cold leftovers become boxty, hash, and colcannon.",
  zeroWasteHero: false,
  tags: ["irish", "potato", "base", "butter"],
  sources: [
    {
      title: "Bord Bia — All About Irish Potatoes",
      url: "https://www.bordbia.ie/lifestyle/all-about-food/potatoes/",
      note: "floury Irish potato varieties and the gentle-simmer, steam-dry boiling method",
    },
  ],
};
