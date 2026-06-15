import type { Recipe } from "../types";

export const escabecheDePescado: Recipe = {
  slug: "escabeche-de-pescado",
  title: "Escabeche de Pescado (Pickled Fried Fish)",
  cuisine: "puerto-rican",
  blurb:
    "Floured fish steaks fried golden, then drowned in a warm bath of olive oil, vinegar, bay and sweet sliced onions and left overnight — a do-ahead dish that tastes better cold the next day.",
  servings: 4,
  perServing: { calories: 470, protein: 26 },
  estCostPerServing: 2.2,
  roles: ["dinner"],
  ingredients: [
    { item: "firm fish steaks (kingfish/sierra or snapper)", qty: "1 lb", cost: 5.2 },
    { item: "onions, sliced in rings", qty: "2 large", cost: 0.6 },
    { item: "olive oil", qty: "1/2 cup", cost: 1.0, spansWeeks: true },
    { item: "white or cider vinegar", qty: "1/2 cup", cost: 0.3, spansWeeks: true },
    { item: "manzanilla olives + capers (alcaparrado)", qty: "1/4 cup", cost: 0.5, spansWeeks: true },
    { item: "flour for dredging", qty: "1/2 cup", cost: 0.15, spansWeeks: true },
    { item: "garlic, peppercorns, bay leaves, lime", qty: "to taste", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Squeeze lime over the fish steaks, season with salt and pepper, and dredge lightly in flour. Fry in oil over medium-high heat until golden on both sides, then drain on paper towels.",
    "In a separate pan, warm the olive oil gently and cook the sliced onions, garlic, peppercorns, and bay leaves until the onions are soft and sweet but not browned.",
    "Off the heat, stir the vinegar and alcaparrado into the oil and onions — it should taste sharp, briny, and aromatic. Adjust salt.",
    "Layer the fried fish in a non-reactive dish and pour the warm escabeche over it, making sure the onions and oil cover the fish. Cool, then refrigerate at least overnight.",
    "Serve cold or at room temperature, with the onions and a little of the oil spooned over, alongside white rice or crackers.",
  ],
  modernMove:
    "Pour the escabeche over the fish while the oil is still warm rather than cold: the heat opens the fish to the vinegar and onion so it cures evenly overnight instead of just sitting in a cold marinade.",
  notes:
    "Escabeche is a preservation technique brought from Spain — the acid and oil keep fried fish edible for days without refrigeration, which is exactly why it became a make-ahead holiday and beach-kiosk dish.",
  zeroWasteHero: false,
  tags: ["fish", "fried", "pickled", "escabeche", "onions", "make-ahead", "dinner", "puerto-rican"],
  sources: [
    {
      title: "Food Metamorphosis — Sierra en Escabeche (Puerto Rican Pickled Fish)",
      url: "https://foodmetamorphosis.com/sierra-en-escabeche-puerto-rican-pickled-fish/",
      note: "fish floured and fried, then marinated in olive oil, vinegar, onions, peppercorns and bay; served cold",
    },
  ],
};
