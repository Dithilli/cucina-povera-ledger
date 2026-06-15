import type { Recipe } from "../types";

export const irishStew: Recipe = {
  slug: "irish-stew",
  title: "Irish Stew",
  cuisine: "irish",
  blurb:
    "The slow national pot — cheap neck of lamb or mutton layered with onions, carrot and potato, a handful of pearl barley swelling into the broth, simmered low until the meat slips from the bone and the top potatoes melt to thicken everything beneath.",
  servings: 4,
  perServing: { calories: 560, protein: 27 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "lamb or mutton neck / shoulder, bone-in, cut into pieces", qty: "1 1/4 lb", cost: 4.5 },
    { item: "floury potatoes, peeled (some left whole, some sliced thin)", qty: "1 1/2 lb", cost: 1.0 },
    { item: "onions, sliced", qty: "2", cost: 0.5 },
    { item: "carrots, chunked", qty: "3", cost: 0.5 },
    { item: "pearl barley", qty: "1/4 cup", cost: 0.2, spansWeeks: true },
    { item: "thyme and a bay leaf", qty: "few sprigs + 1", cost: 0.1, spansWeeks: true },
    { item: "scallions or parsley, to finish", qty: "small handful", cost: 0.2 },
    { item: "salt and pepper", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "In a heavy pot, layer half the onions, carrots and the sliced potatoes, season, then sit the lamb pieces on top with the thyme, bay and pearl barley.",
    "Cover with the remaining onion and carrot and the whole potatoes, season again, and pour in enough water to just come up the sides.",
    "Bring gently to a simmer, then lower the heat right down, cover, and cook undisturbed 1 1/2 to 2 hours until the meat is falling apart.",
    "The sliced potatoes will have dissolved into the broth to thicken it while the whole ones stay intact — skim any fat from the top.",
    "Check the seasoning, scatter with scallions or parsley, and serve in deep bowls with brown soda bread to mop up.",
  ],
  modernMove:
    "Use two cuts of potato on purpose — thin slices buried at the bottom break down into a natural, flour-free thickener, while whole potatoes laid on top hold their shape, giving you body and texture from a single ingredient.",
  notes:
    "Authentically just mutton, potato, onion and water; carrot, barley and herbs are the well-loved later additions. Tougher mutton or neck rewards the longest, gentlest cooking.",
  zeroWasteHero: false,
  tags: ["lamb", "potato", "barley", "stew", "irish"],
  sources: [
    {
      title: "Edible Communities — Irish Lamb Stew with Pearl Barley",
      url: "https://ediblecommunities.com/recipes/irish-lamb-stew-with-pearl-barley/",
      note: "Layered lamb, onion, carrot and potato with pearl barley, slow-simmered until tender.",
    },
  ],
};
