import type { Recipe } from "../types";

export const tahiniSauce: Recipe = {
  slug: "tahini-sauce",
  title: "Tarator (Tahini Sauce)",
  cuisine: "levantine",
  blurb:
    "Tahini loosened with lemon, garlic, and cold water until it flips from stiff paste to pourable ivory cream — the sauce that touches half the Levantine table.",
  servings: 8,
  perServing: { calories: 110, protein: 3 },
  estCostPerServing: 0.3,
  roles: ["side", "base"],
  ingredients: [
    { item: "tahini (well-stirred)", qty: "3/4 cup", cost: 1.6 },
    { item: "lemon juice", qty: "1/4 cup (about 2 lemons)", cost: 0.6 },
    { item: "garlic, grated to a paste", qty: "1–2 cloves", cost: 0.1, spansWeeks: true },
    { item: "cold water", qty: "1/3 to 1/2 cup, as needed" },
    { item: "salt", qty: "1/2 tsp" },
    { item: "ground cumin (optional)", qty: "pinch", spansWeeks: true },
  ],
  method: [
    "Grate the garlic into the lemon juice with the salt and let it sit 10 minutes — the acid tames the raw garlic bite.",
    "Stir the tahini in well, then whisk it into the lemon-garlic mixture. It will SEIZE into a thick, claggy paste. This is correct — don't panic.",
    "Now whisk in cold water a tablespoon at a time. The paste loosens, lightens, and turns pale ivory and pourable. Keep going to the thickness you want: dip-thick for falafel, drizzle-thin for shawarma.",
    "Taste and balance — more lemon for brightness, more salt, a pinch of cumin if you like. It thickens as it sits, so loosen again with water before serving.",
  ],
  modernMove:
    "Adding cold WATER (not oil) is the trick: it breaks the tahini's emulsion and re-forms it lighter, so the sauce goes from bitter and heavy to bright and whipped. Acid before water keeps it stable.",
  notes:
    "Keeps a week refrigerated. Use it as a dressing thinned with extra water and lemon over roasted vegetables, or as the bound base for hummus.",
  tags: ["side", "base", "tahini", "sauce", "no-cook", "vegan"],
  sources: [
    {
      title: "Maureen Abood — maureenabood.com",
      url: "https://maureenabood.com/tahini-sauce/",
      note: "Tarator method — tahini, lemon, garlic, and cold water whisked to a smooth pourable cream.",
    },
  ],
};
