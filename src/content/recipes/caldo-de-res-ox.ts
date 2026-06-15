import type { Recipe } from "../types";

export const caldoDeResOx: Recipe = {
  slug: "caldo-de-res-ox",
  title: "Caldo de Res Oaxaqueño",
  cuisine: "oaxacan",
  blurb:
    "A clear, marrow-rich beef-bone broth crowded with chayote, cabbage, corn, and potato, ladled over rice and lifted with a smoky chile pasilla oaxaqueño salsa stirred in at the table.",
  servings: 6,
  perServing: { calories: 420, protein: 23 },
  estCostPerServing: 1.5,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in beef shank (chambarete)", qty: "1 1/2 lb", cost: 4.5 },
    { item: "corn on the cob, in rounds", qty: "2 ears", cost: 0.7 },
    { item: "chayote and potato", qty: "1 each", cost: 0.7 },
    { item: "cabbage wedge and carrot", qty: "1/4 head + 1", cost: 0.6 },
    { item: "dried pasilla oaxaqueño chiles (for salsa)", qty: "2", cost: 0.3 },
    { item: "tomatillos, garlic (for salsa)", qty: "3 + 1 clove", cost: 0.4 },
    { item: "onion, garlic, cilantro", qty: "as needed", cost: 0.4, spansWeeks: true },
    { item: "salt, lime", qty: "to taste", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Cover the beef shank with water and bring to a boil; skim the foam, add onion, garlic, and salt, then simmer 1.5–2 hours until the meat falls from the bone and the marrow loosens.",
    "Add corn rounds, chayote, potato, and carrot; simmer 15 minutes, then add the cabbage for the final few minutes so it stays crisp.",
    "For the salsa: toast and soak the pasilla oaxaqueño chiles, then blend with charred tomatillos, garlic, and salt into a smoky purée.",
    "Ladle the caldo over a spoon of rice, scatter cilantro and onion, and let each bowl be seasoned with lime and the chile pasilla salsa.",
  ],
  modernMove:
    "Keep the broth clear by skimming hard early and serving the chile heat as a separate pasilla-oaxaqueño salsa, so the smoke is stirred in to taste rather than muddying the caldo.",
  notes: "The bone and marrow do the heavy lifting; the vegetables stretch a modest cut into six deep bowls.",
  zeroWasteHero: false,
  tags: ["caldo", "oaxacan", "beef", "salsa"],
  sources: [
    {
      title: "Muy Bueno — Chile Pasilla Oaxaqueño Salsa",
      url: "https://muybuenoblog.com/chile-pasilla-oaxaqueno-salsa/",
      note: "the smoky pasilla-oaxaqueño-and-tomatillo salsa served alongside the beef caldo",
    },
  ],
};
