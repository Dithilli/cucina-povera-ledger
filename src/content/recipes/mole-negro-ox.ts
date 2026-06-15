import type { Recipe } from "../types";

export const moleNegroOx: Recipe = {
  slug: "mole-negro-ox",
  title: "Mole Negro",
  cuisine: "oaxacan",
  blurb:
    "The deepest of the seven moles: chilhuacle negro and dark chiles charred to true charcoal then revived, blended with a burnt tortilla, seeds, spices, and chocolate into a near-black, glossy sauce spooned over poached turkey or chicken.",
  servings: 4,
  perServing: { calories: 580, protein: 28 },
  estCostPerServing: 2.3,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in turkey or chicken pieces", qty: "1 1/2 lb", cost: 3.6 },
    { item: "chilhuacle negro + pasilla oaxaqueño + mulato chiles", qty: "6 total", cost: 1.2, spansWeeks: true },
    { item: "corn tortilla (to burn)", qty: "1", cost: 0.1 },
    { item: "raisins, almonds, sesame, pumpkin seeds", qty: "1/4 cup each", cost: 0.9, spansWeeks: true },
    { item: "tomato + tomatillo, charred", qty: "1 each", cost: 0.4 },
    { item: "Mexican chocolate", qty: "1 oz", cost: 0.5, spansWeeks: true },
    { item: "cinnamon, clove, pepper, garlic, onion, manteca, salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Poach the turkey with onion, garlic, and salt; reserve the broth to thin and finish the mole.",
    "Char the stemmed, seeded chiles past fragrant, almost to charcoal, then rinse and soak — the Oaxacan burn-and-revive that gives mole negro its black color without bitterness.",
    "Burn a tortilla black over the flame, toast the seeds, nuts, raisins, and spices, and char the tomato and tomatillo.",
    "Blend everything with the soaked chiles and broth into a smooth paste; fry it hard in manteca until it darkens and thickens, then melt in the chocolate.",
    "Loosen with broth to a velvety pour, slide the turkey in to simmer until it drinks up the sauce, and finish with toasted sesame over rice.",
  ],
  modernMove:
    "Char the chiles all the way to charcoal, not just toasty — then rinse them — and burn a whole tortilla into the blend; that controlled carbon is what makes the sauce truly black and gives mole negro its smoky floor, while the rinse and the chocolate pull it back from bitter.",
  notes:
    "Chilhuacle negro is the soul of negro and famously scarce; mulato and pasilla oaxaqueño carry the color and smoke when it is out of reach.",
  zeroWasteHero: false,
  tags: ["oaxacan", "mole", "negro", "chile", "chocolate", "dinner"],
  sources: [
    {
      title: "Hank Shaw — Honest Food, Mole Negro (Oaxacan Black Mole with Turkey)",
      url: "https://honest-food.net/mole-negro-recipe/",
      note: "burn-and-revive chile method, burnt tortilla, charred aromatics, fry-the-paste over turkey",
    },
  ],
};
