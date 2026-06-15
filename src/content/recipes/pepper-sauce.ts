import type { Recipe } from "../types";

export const pepperSauce: Recipe = {
  slug: "pepper-sauce",
  title: "Pepper Sauce (Ata Dindin / Shito-style)",
  cuisine: "west-african",
  blurb:
    "The fiery red condiment that lives on every table — scotch bonnets, onion, and pepper blended and fried hard in oil until smoky and almost jammy. A spoonful lifts plain rice, beans, or boiled yam.",
  servings: 12,
  perServing: { calories: 70, protein: 1 },
  estCostPerServing: 0.3,
  roles: ["base", "side"],
  ingredients: [
    { item: "scotch bonnet peppers (rodo), to your heat tolerance", qty: "6–10", cost: 1.5, spansWeeks: true },
    { item: "red bell pepper (tatashe), to bulk and sweeten", qty: "1", cost: 0.6 },
    { item: "onion", qty: "1 large", cost: 0.4 },
    { item: "red palm oil or neutral oil", qty: "1/3 cup", cost: 0.6, spansWeeks: true },
    { item: "ground crayfish or dried shrimp powder", qty: "1 tbsp", cost: 0.4, spansWeeks: true },
    { item: "tomato paste", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "stock cube", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Blend the scotch bonnets, red bell pepper, and half the onion to a coarse purée with just enough water to turn the blades. Keep it slightly textured, not a thin liquid.",
    "Boil the blend down in a dry pot until most of the water has gone and it thickens — this pre-reduction means the fry that follows tastes concentrated, not raw.",
    "Finely dice the remaining onion and fry it in the oil until soft, then stir in the tomato paste and let it darken.",
    "Add the reduced pepper paste and fry hard over medium heat, stirring often, until the oil separates out and the sauce turns dark, smoky, and almost jammy — 15 to 20 minutes.",
    "Season with ground crayfish, the crushed stock cube, and salt. Cool and bottle in oil; it keeps for weeks in the fridge and only gets better.",
  ],
  modernMove:
    "Frying the blended chiles long and slow in oil — well past the point most cooks stop — is what turns raw heat into the deep, toasty, shito-like flavour. The oil-split is your signal it's done.",
  notes:
    "Store it submerged under a film of oil; that seal is what gives it weeks of fridge life. A condiment, not a main — a teaspoon transforms a bowl.",
  zeroWasteHero: true,
  tags: ["base", "side", "condiment", "pepper-sauce", "shito", "scotch-bonnet", "batch"],
  sources: [
    {
      title: "Sisi Jemimah (Jemimah Adebiyi) — Ewa Agoyin and Agoyin Sauce",
      url: "https://sisijemimah.com/2015/08/12/ewa-agoyin-and-agoyin-sauce-recipe/",
      note: "Confirms the agoyin/buka-style pepper sauce — blended peppers and onion fried long and hard in palm oil until dark and concentrated.",
    },
    {
      title: "Lola Osinkolu — Chef Lola's Kitchen: Ewa Agoyin",
      url: "https://cheflolaskitchen.com/ewa-agoyin/",
      note: "Corroborates the dried-pepper-and-onion sauce fried in palm oil served over beans.",
    },
  ],
};
