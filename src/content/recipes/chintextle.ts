import type { Recipe } from "../types";

export const chintextle: Recipe = {
  slug: "chintextle",
  title: "Chintextle con Tortillas",
  cuisine: "oaxacan",
  blurb:
    "A thick, near-black paste of smoked pasilla oaxaqueño ground with garlic, avocado leaf, and a little dried shrimp — the Mixe-mountain chile butter you spread on a tlayuda and build a supper around.",
  servings: 4,
  perServing: { calories: 470, protein: 17 },
  estCostPerServing: 1.3,
  roles: ["dinner"],
  ingredients: [
    { item: "pasilla oaxaqueño (pasilla mixe) chiles, smoked", qty: "6", cost: 1.8, spansWeeks: true },
    { item: "garlic cloves, charred", qty: "4", cost: 0.15, spansWeeks: true },
    { item: "dried avocado leaves, toasted", qty: "3", cost: 0.3, spansWeeks: true },
    { item: "dried shrimp (optional)", qty: "2 tbsp", cost: 0.6, spansWeeks: true },
    { item: "cider vinegar and oil", qty: "2 tbsp each", cost: 0.2, spansWeeks: true },
    { item: "large tlayudas (or corn tortillas)", qty: "4", cost: 1.0 },
    { item: "refried black beans, to spread", qty: "1 cup", cost: 0.4 },
    { item: "salt", qty: "to taste", cost: 0.02, spansWeeks: true },
  ],
  method: [
    "Stem and seed the chiles, soak briefly in hot water until soft, and drain — keep the smoke, lose the dust.",
    "Toast the avocado leaves and dried shrimp on a comal until fragrant; char the garlic.",
    "Grind everything on a metate (or pulse in a blender) with vinegar, a little oil, and salt to a thick, spreadable, almost-black paste — chintextle should hold a ridge, not pour.",
    "Toast the tlayudas on the comal until they crackle, then spread a thin layer of warm refried black beans.",
    "Smear the chintextle over the beans — a little goes far — fold, and eat hot.",
  ],
  modernMove:
    "Grind it stiff: real chintextle is a paste you can store for weeks under a film of oil, so make it thick enough to hold a spoon-ridge and a single spoonful flavors a whole tlayuda.",
  notes:
    "From the Mixe sierra, traditionally eaten at midday spread on tlayudas with boiled egg, tasajo, or fresh cheese. A pantry chile-butter that spans weeks.",
  zeroWasteHero: false,
  tags: ["chintextle", "pasilla-oaxaqueno", "tlayuda", "oaxacan", "dinner"],
  sources: [
    {
      title: "Larousse Cocina — Chintextle (Diccionario de la Gastronomía Mexicana)",
      url: "https://laroussecocina.mx/palabra/chintextle/",
      note: "pasilla mixe ground with garlic, avocado leaf and dried shrimp; spread on tlayudas",
    },
  ],
};
