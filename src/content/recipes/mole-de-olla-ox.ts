import type { Recipe } from "../types";

export const moleDeOllaOx: Recipe = {
  slug: "mole-de-olla-ox",
  title: "Mole de Olla",
  cuisine: "oaxacan",
  blurb:
    "A brothy chile stew — beef simmered to tenderness in a guajillo-and-pasilla caldo loaded with sweet corn on the cob, chayote, and zucchini, eaten with a squeeze of lime and hot tortillas.",
  servings: 4,
  perServing: { calories: 460, protein: 24 },
  estCostPerServing: 1.7,
  roles: ["dinner"],
  ingredients: [
    { item: "beef shank or stewing beef, bone-in", qty: "1 lb", cost: 3.2 },
    { item: "dried guajillo chiles", qty: "3", cost: 0.3 },
    { item: "dried pasilla chiles", qty: "2", cost: 0.25 },
    { item: "corn on the cob, in rounds", qty: "2 ears", cost: 0.7 },
    { item: "chayote", qty: "1", cost: 0.4 },
    { item: "zucchini and green beans", qty: "1 cup", cost: 0.5 },
    { item: "tomato, onion, garlic", qty: "1 each + 1 clove", cost: 0.5, spansWeeks: true },
    { item: "epazote, salt", qty: "1 sprig", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Cover the beef with water along with onion, garlic, and salt; simmer 1.5–2 hours, skimming, until fork-tender, then add the corn rounds.",
    "Meanwhile toast and soak the guajillo and pasilla chiles, then blend with the tomato and a little broth and strain into a smooth chile sauce.",
    "Stir the strained chile into the pot and let it boil into the broth for 10 minutes so the caldo turns brick-red.",
    "Add chayote, then zucchini and green beans and a sprig of epazote; simmer until just tender.",
    "Serve in deep bowls with lime, chopped onion, and warm tortillas.",
  ],
  modernMove:
    "Straining the blended chiles before they go into the pot gives a clean, silky caldo instead of a gritty one — the difference between a rustic stew and a refined mole de olla.",
  notes: "One pound of bony beef feeds four because the corn and chayote carry the bowl; the bones make the broth.",
  zeroWasteHero: false,
  tags: ["caldo", "oaxacan", "beef", "chiles"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen (Mole de Olla)",
      url: "https://www.mexicoinmykitchen.com/mole-de-olla-recipe/",
      note: "beef-and-vegetable caldo with a strained guajillo-pasilla chile sauce, corn and chayote",
    },
  ],
};
