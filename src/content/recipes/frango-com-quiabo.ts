import type { Recipe } from "../types";

export const frangoComQuiabo: Recipe = {
  slug: "frango-com-quiabo",
  title: "Frango com Quiabo",
  cuisine: "brazilian",
  blurb:
    "The iconic Minas Gerais Sunday dish: pieces of chicken browned and simmered with tomato until the meat slips the bone, then finished with okra whose gentle thickening turns the broth silky and clinging, all spooned over creamy angu.",
  servings: 2,
  perServing: { calories: 560, protein: 29 },
  estCostPerServing: 1.65,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in chicken pieces (thighs and drumsticks)", qty: "3/4 lb", cost: 1.6 },
    { item: "fresh okra (quiabo)", qty: "1/2 lb", cost: 0.7 },
    { item: "onion, chopped", qty: "1 small", cost: 0.2 },
    { item: "garlic, minced", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "tomato, chopped", qty: "2", cost: 0.5 },
    { item: "scallions and parsley (cheiro-verde)", qty: "small handful", cost: 0.2 },
    { item: "cornmeal (fubá), for the angu", qty: "1/2 cup", cost: 0.25, spansWeeks: true },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Trim the okra, cut into thick rounds, and toss with a splash of lime or vinegar to tame the slime; set aside.",
    "Season and brown the chicken in oil until golden, then add the onion, garlic and tomato and cook them down to a soft refogado.",
    "Pour in enough hot water to half-cover, cover the pot, and simmer until the chicken is tender and pulling from the bone, about 30 minutes.",
    "Slide in the okra and cook uncovered another 8–10 minutes so it softens and gives the broth its characteristic body without going to mush.",
    "Meanwhile whisk the fubá into cold water, then cook it stirring over low heat into a smooth angu; serve the chicken and its sauce over it, showered with cheiro-verde.",
  ],
  modernMove:
    "Sear the okra rounds separately in a dry hot pan first, then fold them in at the end — searing sets the surface so the broth stays glossy and bound rather than ropey.",
  notes:
    "A mineiro staple from the gold-rush mining towns, where backyard chickens and garden okra met in the clay pot; traditionally made without cilantro and always partnered with angu.",
  zeroWasteHero: false,
  tags: ["dinner", "chicken", "okra", "stew", "brazilian", "mineira"],
  sources: [
    {
      title: "Gateway To Brazil — Frango Caipira com Quiabo",
      url: "https://gatewaytobrazil.com/frango-caipira-com-quiabo-brazilian-country-style-chicken-with-okras/",
      note: "Country-style braised chicken finished with okra and served with angu, Minas Gerais style",
    },
  ],
};
