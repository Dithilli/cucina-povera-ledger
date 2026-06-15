import type { Recipe } from "../types";

export const empanadasAmarillo: Recipe = {
  slug: "empanadas-amarillo",
  title: "Empanadas de Amarillo",
  cuisine: "oaxacan",
  blurb:
    "The huge half-moon masa turnovers of the Central Valleys: a thin tortilla folded over shredded chicken bathed in a smoky guajillo-and-hoja-santa mole amarillo, then toasted on the comal until one face crisps and the yellow mole bubbles inside.",
  servings: 4,
  perServing: { calories: 520, protein: 24 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh masa (or masa harina)", qty: "2 cups", cost: 0.7 },
    { item: "cooked shredded chicken", qty: "2 cups", cost: 2.4 },
    { item: "guajillo chiles (with chilcostle/costeño if you have them)", qty: "4", cost: 0.5, spansWeeks: true },
    { item: "tomatillos (miltomate)", qty: "4", cost: 0.5 },
    { item: "masa, for thickening the mole", qty: "2 tbsp", cost: 0.1 },
    { item: "hoja santa leaves", qty: "3", cost: 0.3, spansWeeks: true },
    { item: "garlic, cumin, clove, oregano, salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Toast and soak the guajillos, then blend with charred tomatillos, garlic, cumin, clove, and oregano; strain into a pan.",
    "Fry the purée, whisk in masa slackened with broth to thicken it, and simmer with a leaf of hoja santa to a loose, pourable mole amarillo; fold in the shredded chicken.",
    "Press masa into thin large rounds between plastic and slide one onto a hot comal.",
    "Spoon chicken-in-amarillo and a torn piece of hoja santa over one half, fold the masa over the filling, and press the edge to seal.",
    "Toast, turning once, until the underside is crisp and freckled and the mole is bubbling, then serve at once.",
  ],
  modernMove:
    "Thicken the mole with a slurry of masa rather than reducing it down — masa gives mole amarillo its characteristic body and faint corn sweetness in minutes, the move that lets a street empanada filling set up without an hour of simmering.",
  notes:
    "Hoja santa is the defining herb of amarillo; dried hoja de aguacate stands in for its anise note if you cannot find it fresh.",
  zeroWasteHero: false,
  tags: ["masa", "oaxacan", "mole", "amarillo", "chicken", "dinner"],
  sources: [
    {
      title: "Masienda — Empanadas de Mole Amarillo",
      url: "https://masienda.com/blogs/learn/empanadas-de-mole-amarillo",
      note: "large masa turnover folded over chicken in mole amarillo with hoja santa, toasted on a comal",
    },
  ],
};
