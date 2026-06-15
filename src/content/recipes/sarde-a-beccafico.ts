import type { Recipe } from "../types";

export const sardeABeccafico: Recipe = {
  slug: "sarde-a-beccafico",
  title: "Sarde a Beccafico",
  cuisine: "italian",
  blurb:
    "Sicilian stuffed sardines — butterflied and rolled around toasted breadcrumbs, raisins, and pine nuts, baked with bay and citrus.",
  servings: 4,
  perServing: { calories: 360, protein: 23 },
  estCostPerServing: 2.0,
  roles: ["dinner", "lunch"],
  ingredients: [
    {
      item: "fresh sardines, butterflied and boned",
      qty: "1 1/4 lb",
      cost: 5.0,
    },
    {
      item: "breadcrumbs, toasted in oil",
      qty: "1 cup",
      cost: 0.6,
      spansWeeks: true,
    },
    {
      item: "raisins and pine nuts",
      qty: "3 tbsp each",
      cost: 1.2,
      spansWeeks: true,
    },
    {
      item: "orange and lemon (zest and juice)",
      qty: "1 each",
      cost: 0.8,
    },
    {
      item: "bay leaves",
      qty: "8",
      cost: 0.2,
      spansWeeks: true,
    },
    {
      item: "anchovy, parsley, olive oil, salt",
      qty: "2 fillets, 3 tbsp oil",
      cost: 0.7,
      spansWeeks: true,
    },
  ],
  method: [
    "Make the stuffing: toast the breadcrumbs in oil, then mix with raisins, pine nuts, chopped anchovy, parsley, citrus zest, salt, and a little oil to bind.",
    "Lay each butterflied sardine skin-side down, spread with stuffing, and roll up from the head end into a little log.",
    "Pack the rolls snugly in an oiled dish, tucking a bay leaf between each. Scatter any extra crumbs over.",
    "Drizzle with citrus juice and oil and bake at 400°F (200°C) for 12–15 minutes until cooked and the tops are crisp.",
  ],
  modernMove:
    "Toast the breadcrumbs in good oil before stuffing so the filling stays crunchy after baking, and let the citrus juice glaze the tops rather than steam them.",
  tags: ["sicilian", "sardines", "baked", "stuffed", "fish", "agrodolce"],
  sources: [
    {
      title: "La Cucina Italiana — Sarde a beccafico, a beloved Sicilian dish",
      url: "https://www.lacucinaitaliana.com/italian-food/italian-dishes/sarde-a-beccafico-a-beloved-sicilian-dish",
      note: "Sicilian stuffed sardines named for the beccafico bird; breadcrumb-raisin-pine nut filling",
    },
  ],
};
