import type { Recipe } from "../types";

export const nemSenegalais: Recipe = {
  slug: "nem-senegalais",
  title: "Nem Sénégalais",
  cuisine: "senegalese",
  blurb:
    "Dakar's beloved spring roll — glass noodles, minced meat or shrimp and cabbage rolled tight in rice paper and fried crackling-crisp, a Vietnamese inheritance gone fully Senegalese.",
  servings: 4,
  perServing: { calories: 480, protein: 19 },
  estCostPerServing: 1.3,
  roles: ["dinner"],
  ingredients: [
    { item: "rice paper wrappers", qty: "16 sheets", cost: 0.8 },
    { item: "glass (mung bean) noodles, soaked", qty: "3 oz", cost: 0.5 },
    { item: "minced beef or chopped shrimp", qty: "8 oz", cost: 1.8 },
    { item: "white cabbage, finely shredded", qty: "2 cups", cost: 0.4 },
    { item: "carrot, grated", qty: "1", cost: 0.15 },
    { item: "onion and garlic, minced", qty: "1 + 2 cloves", cost: 0.2, spansWeeks: true },
    { item: "stock cube (Maggi)", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "neutral oil for frying", qty: "for frying", cost: 1.0 },
  ],
  method: [
    "Stir-fry the onion, garlic, and meat until cooked, season with the crumbled stock cube, then add cabbage and carrot just to wilt. Snip in the drained glass noodles and cool the filling.",
    "Dip a rice paper sheet in warm water for a few seconds until just pliable — work fast before it tears.",
    "Lay a line of filling near one edge, fold in the sides, and roll tight as a cigar; set on a tray, rolls not touching.",
    "Fry in oil that's neither too hot nor too cold until evenly golden and crisp, 3–4 minutes, turning gently.",
    "Drain and serve hot with kaani or a squeeze of lime.",
  ],
  modernMove:
    "Wetting the rice paper only until barely pliable, then rolling immediately, keeps the skin taut so it fries to glass rather than going leathery or splitting in the oil.",
  notes:
    "A true Dakar street food, carried home by Senegalese tirailleurs (and their Vietnamese wives) after the Indochina war.",
  tags: ["street", "fried", "spring-roll", "fusion", "senegalese"],
  sources: [
    {
      title: "Tasting Table — Nem: The Senegalese Spring Rolls Brought About By War",
      url: "https://www.tastingtable.com/998422/nem-the-senegalese-spring-rolls-brought-about-by-war/",
      note: "The glass-noodle-and-meat filling, rice-paper rolling technique, and the dish's Vietnamese-Senegalese history.",
    },
  ],
};
