import type { Recipe } from "../types";

export const entomatadasOx: Recipe = {
  slug: "entomatadas-ox",
  title: "Entomatadas",
  cuisine: "oaxacan",
  blurb:
    "Soft tortillas folded through a smoky chile-de-agua tomato sauce, draped with melting quesillo and raw onion — Oaxaca's gentler answer to enchiladas, built for a weeknight.",
  servings: 4,
  perServing: { calories: 460, protein: 16 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "corn tortillas", qty: "12", cost: 0.6 },
    { item: "ripe tomatoes", qty: "6 medium", cost: 1.2 },
    { item: "chile de agua (or fresh jalapeño/serrano)", qty: "1–2", cost: 0.3 },
    { item: "white onion, garlic", qty: "1/2 onion + 2 cloves", cost: 0.2 },
    { item: "quesillo (Oaxaca cheese), pulled", qty: "1 cup", cost: 1.2, spansWeeks: true },
    { item: "lard or oil", qty: "3 tbsp", cost: 0.2, spansWeeks: true },
    { item: "salt, dried oregano", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Char the tomatoes, chile de agua, onion and garlic on a dry comal until blistered and soft, then blend to a smooth sauce with a pinch of oregano and salt.",
    "Fry the puree in a little hot lard for 8–10 minutes until it deepens and thickens into a glossy salsa.",
    "Pass each tortilla quickly through hot fat just to soften, then dip it in the warm tomato sauce and fold into quarters.",
    "Arrange the folded tortillas on the plate, ladle more sauce over, and finish with pulled quesillo, slivers of raw onion, and a little crumbled cheese on top.",
  ],
  modernMove:
    "Dry-charring the tomatoes and chile de agua on the comal before blending — rather than boiling them — gives the sauce a smoky depth that reads unmistakably Oaxacan, not just 'tomato sauce.'",
  notes:
    "A perfect home for tortillas that have gone slightly stiff; the sauce revives them completely, so the dish is built on what would otherwise be waste.",
  zeroWasteHero: true,
  tags: ["oaxacan", "antojito", "tortilla", "quesillo", "chile-de-agua", "dinner"],
  sources: [
    {
      title: "MexConnect — Tortillas in Oaxacan Tomato Sauce: Entomatadas Oaxaqueñas",
      url: "https://www.mexconnect.com/articles/2331-tortillas-in-oaxacan-tomato-sauce-entomatadas-oaxaquenas/",
      note: "Oaxacan tomato-and-chile sauce, soft-frying then dipping and folding the tortillas",
    },
  ],
};
