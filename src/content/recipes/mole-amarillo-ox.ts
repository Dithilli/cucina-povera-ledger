import type { Recipe } from "../types";

export const moleAmarilloOx: Recipe = {
  slug: "mole-amarillo-ox",
  title: "Mole Amarillo (Amarillito)",
  cuisine: "oaxacan",
  blurb:
    "The bright, soupy everyday mole of Oaxaca: guajillo and chile costeño amarillo blended with miltomate and spice, thickened with corn masa and scented with hoja santa, then simmered with chicken, green beans, chayote, and floating chochoyote dumplings.",
  servings: 4,
  perServing: { calories: 480, protein: 20 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in chicken pieces", qty: "1 1/4 lb", cost: 3.0 },
    { item: "guajillo + chile costeño amarillo (or chilcostle)", qty: "5 total", cost: 0.7, spansWeeks: true },
    { item: "tomatillos (miltomate)", qty: "5", cost: 0.6 },
    { item: "fresh masa", qty: "3/4 cup (sauce + chochoyotes)", cost: 0.3 },
    { item: "green beans, chayote, potato", qty: "3 cups, cut", cost: 1.0 },
    { item: "hoja santa leaves", qty: "2", cost: 0.2, spansWeeks: true },
    { item: "cumin, clove, garlic, oregano, salt, manteca", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Simmer the chicken with garlic and salt until tender; keep the broth.",
    "Toast and soak the chiles, blend with charred tomatillos, garlic, cumin, clove, and oregano, and strain into a pot with a little manteca.",
    "Whisk masa into broth and stir it into the simmering sauce to thicken it to a loose, brothy mole; drop in a leaf of hoja santa.",
    "Pinch small masa balls, dimple each with your thumb into a chochoyote, and simmer them in the mole with the green beans, chayote, and potato until tender.",
    "Return the chicken to warm through and serve in bowls with the vegetables and dumplings.",
  ],
  modernMove:
    "Make chochoyotes from the same masa that thickens the sauce — the thumb-dimple is not decorative, it gives the little dumplings more surface to drink up the amarillo and cook through evenly, turning a thin mole into a one-pot meal.",
  notes:
    "Amarillito is the mole Oaxacans eat on a weeknight, not a feast day; guajillo stands in for the scarce chilhuacle amarillo without losing the bright color.",
  zeroWasteHero: false,
  tags: ["oaxacan", "mole", "amarillo", "masa", "chicken", "dinner"],
  sources: [
    {
      title: "Hank Shaw — Honest Food, Mole Amarillo",
      url: "https://honest-food.net/mole-amarillo-recipe/",
      note: "guajillo/costeño amarillo base, masa thickening, hoja santa, vegetables and chochoyotes",
    },
  ],
};
