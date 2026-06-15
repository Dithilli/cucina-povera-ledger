import type { Recipe } from "../types";

export const caKhoTo: Recipe = {
  slug: "ca-kho-to",
  title: "Cá Kho Tộ (Clay-Pot Caramel-Braised Fish)",
  cuisine: "vietnamese",
  blurb:
    "Fish steaks braised in a clay pot in dark caramel and fish sauce until the sauce reduces to a sticky, peppery, savory-sweet glaze that clings to every piece. A handful of cheap fish, slow-braised hard enough that the bones soften, feeds a whole table over rice.",
  servings: 4,
  perServing: { calories: 470, protein: 34 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "firm fish steaks (catfish, mackerel, or tilapia), cut crosswise", qty: "1 1/4 lb", cost: 6.0 },
    { item: "nước màu (caramel sauce base)", qty: "2 tbsp", cost: 0.05, spansWeeks: true },
    { item: "fish sauce (nước mắm)", qty: "3 tbsp", cost: 0.45, spansWeeks: true },
    { item: "sugar", qty: "1 tbsp", cost: 0.05, spansWeeks: true },
    { item: "shallots, thinly sliced", qty: "2", cost: 0.3 },
    { item: "garlic cloves, minced", qty: "3", cost: 0.15, spansWeeks: true },
    { item: "water or young coconut water", qty: "3/4 cup", cost: 0.4 },
    { item: "scallions, sliced", qty: "2", cost: 0.2 },
    { item: "coarse black pepper", qty: "1 tsp", spansWeeks: true },
    { item: "bird's-eye chili (optional)", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "Pat the fish steaks dry and marinate with the fish sauce, sugar, half the shallot and garlic, and the pepper for 20 to 30 minutes. Dry fish takes the caramel better and won't water down the sauce.",
    "In a clay pot (tộ) or small heavy pot, sweat the rest of the shallot and garlic in a film of oil until fragrant, then stir in the nước màu so the aromatics coat in dark caramel.",
    "Lay the fish in a single snug layer and pour over the marinade plus the water or coconut water — just enough to come halfway up the fish, no more. Kho is a braise that reduces, not a soup.",
    "Bring to a boil, then drop to a low simmer. Braise uncovered or barely covered 30 to 40 minutes, spooning the sauce over the fish and tilting the pot now and then; turn the steaks once, carefully, halfway. The long, hard braise is what tenderizes the fish and softens the small bones.",
    "As the liquid reduces it darkens and thickens to a glossy, sticky glaze that clings to each piece — that's the finish you want, not a thin sauce. If it threatens to dry out, add a splash of hot water.",
    "Crack over fresh black pepper, scatter the scallions and chili, and serve straight from the pot over rice with something green or a bowl of canh on the side.",
  ],
  modernMove:
    "Braising in a clay pot and reducing the caramel-fish-sauce liquid right down to a clinging glaze concentrates everything; the long hard braise also softens the bones, so even bony, cheap fish becomes easy and rich eating.",
  notes:
    "The clay pot holds and radiates heat for a gentle, even braise, but any small heavy pot works. Mackerel and catfish are the traditional, cheapest choices and stand up to the long cook; delicate fillets fall apart.",
  zeroWasteHero: false,
  tags: ["dinner", "fish", "kho", "caramel-braise", "clay-pot", "frugal", "one-pot"],
  sources: [
    {
      title: "Vicky Pham — Vietnamese Braised & Caramelized Catfish (Ca Kho To)",
      url: "https://vickypham.com/blog/vietnamese-caramelized-catfish-ca-kho-to/",
      note: "Catfish braised in caramel and fish sauce, reduced to a clinging glaze in a clay pot",
    },
    {
      title: "RunAwayRice — Braised Fish in Clay Pot (Ca Kho To)",
      url: "https://runawayrice.com/main-dishes/braised-fish-in-clay-pot-ca-kho-to/",
      note: "Marinating, then the long hard braise that softens the bones",
    },
  ],
};
