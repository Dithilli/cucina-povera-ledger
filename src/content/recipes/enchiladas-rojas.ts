import type { Recipe } from "../types";

export const enchiladasRojas: Recipe = {
  slug: "enchiladas-rojas",
  title: "Enchiladas Rojas",
  cuisine: "mexican",
  blurb:
    "Tortillas passed through a smoky red sauce of dried guajillo and ancho chiles, folded around beans and queso, and served slicked in that deep brick-red salsa with crema and onion — the everyday Mexican comfort plate.",
  servings: 4,
  perServing: { calories: 460, protein: 18 },
  estCostPerServing: 1.1,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "corn tortillas", qty: "12", cost: 0.8 },
    { item: "dried guajillo chiles", qty: "5", cost: 0.8 },
    { item: "dried ancho chiles", qty: "2", cost: 0.5 },
    { item: "garlic, onion", qty: "2 cloves + 1/2 onion", cost: 0.3, spansWeeks: true },
    { item: "refried beans (filling)", qty: "1 1/2 cups", cost: 0.6 },
    { item: "queso fresco, crumbled", qty: "1 cup", cost: 1.5, spansWeeks: true },
    { item: "Mexican crema", qty: "1/2 cup", cost: 0.6, spansWeeks: true },
    { item: "oil, salt, cumin", qty: "as needed", spansWeeks: true },
  ],
  method: [
    "Stem and seed the guajillos and anchos, toast them lightly, then soak in hot water until soft.",
    "Blend the chiles with garlic, onion, a little soaking liquid, salt, and a pinch of cumin into a smooth sauce; strain it and simmer in a film of oil until it deepens in color and flavor.",
    "Dip each tortilla in the warm red sauce just to coat, then pass it briefly through hot oil so it stays supple but doesn't fall apart.",
    "Fill with refried beans and queso, roll or fold, ladle more sauce over the top, and finish with crema, crumbled cheese, and raw onion.",
  ],
  modernMove:
    "Fry the strained sauce in hot oil before you build the dish — that quick sizzle (freír la salsa) toasts the chile paste, rounds off its raw edge, and is the difference between a thin chile water and a glossy, concentrated red sauce.",
  notes:
    "A combination of guajillo (color, mild) and ancho (sweet, deep) is the home-cook standard. Beans-and-cheese keeps it meatless and frugal without tasting like a compromise.",
  tags: ["antojito", "chiles", "beans", "salsa-roja", "dinner"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen (Red Enchiladas)",
      url: "https://www.mexicoinmykitchen.com/red-enchiladas-recipe/",
      note: "guajillo-and-ancho sauce, dipping tortillas, the everyday rojas build",
    },
    {
      title: "Maricruz Avalos — Authentic Enchiladas Rojas (Aguascalientes style)",
      url: "https://www.maricruzavalos.com/red-chicken-enchiladas-aguascalientes-style/",
      note: "frying the strained chile sauce and passing tortillas through it",
    },
  ],
};
