import type { Recipe } from "../types";

export const nokossSn: Recipe = {
  slug: "nokoss-sn",
  title: "Nokoss",
  cuisine: "senegalese",
  blurb:
    "The pounded green-and-fire seasoning under every Senegalese pot — onion, garlic, parsley, scotch bonnet and funky nététou blended into the paste that starts the cooking.",
  servings: 16,
  perServing: { calories: 35, protein: 1 },
  estCostPerServing: 0.15,
  roles: ["base"],
  ingredients: [
    { item: "onions", qty: "2 large", cost: 0.5 },
    { item: "garlic", qty: "1 head", cost: 0.4, spansWeeks: true },
    { item: "flat-leaf parsley", qty: "1 large bunch", cost: 0.5 },
    { item: "scotch bonnet (kaani), to taste", qty: "2", cost: 0.5, spansWeeks: true },
    { item: "nététou (fermented néré / soumbala)", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "stock cube (Maggi)", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "neutral oil and salt", qty: "as needed", cost: 0.1 },
  ],
  method: [
    "Peel the onions and garlic; stem and (for less fire) seed the scotch bonnets.",
    "Pound or blend everything — onion, garlic, parsley, chili, nététou, and stock cube — to a coarse-smooth green paste, adding the least water needed to move the blade.",
    "Season with a little salt; it should taste sharp, herbal, and hot.",
    "Pack into a clean jar and float a film of oil on top; keeps about a week refrigerated, or freeze in cubes.",
  ],
  modernMove:
    "Freezing the paste in an ice-cube tray turns the day's pounding into a week of one-cube flavour bombs — the constant base every dinner is built on, never made from scratch twice.",
  notes:
    "Nokoss means 'to pound' in Wolof. The nététou (fermented néré seed) is what gives Senegalese cooking its deep, savory backbone — like fish sauce in Southeast Asia.",
  zeroWasteHero: true,
  tags: ["base", "seasoning", "nokoss", "foundation", "senegalese"],
  sources: [
    {
      title: "SBS Food — Red Nokoss",
      url: "https://www.sbs.com.au/food/recipe/red-nokoss/ws2ieepxu",
      note: "Blending onion, garlic, parsley and chili to a paste, the role of nététou, and jar/oil storage.",
    },
  ],
};
