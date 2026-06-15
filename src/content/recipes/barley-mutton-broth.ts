import type { Recipe } from "../types";

export const barleyMuttonBroth: Recipe = {
  slug: "barley-mutton-broth",
  title: "Barley & Mutton Broth",
  cuisine: "irish",
  blurb:
    "A scrap of mutton on the bone simmered slow with pearl barley and root vegetables until the grain swells and thickens the pot — a farmhouse broth that stretches the cheapest cut into a meal for a week.",
  servings: 4,
  perServing: { calories: 460, protein: 24 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "mutton or lamb neck on the bone", qty: "3/4 lb", cost: 2.8 },
    { item: "pearl barley", qty: "2/3 cup", cost: 0.4 },
    { item: "carrots, diced", qty: "2", cost: 0.4 },
    { item: "onion, chopped", qty: "1 large", cost: 0.3 },
    { item: "leek, sliced", qty: "1", cost: 0.4 },
    { item: "turnip (swede), diced", qty: "1/2 small", cost: 0.3 },
    { item: "bay leaf, parsley, salt, pepper", qty: "to taste", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Put the mutton in a large pot with the bay leaf, cover well with cold water, and bring slowly to a boil. Skim off the grey scum that rises, then drop to a bare simmer.",
    "Add the pearl barley and simmer, half-covered, for 1 hour — the long, gentle cook is what tenderises a tough cut and softens the barley.",
    "Add the carrot, onion, leek and turnip and simmer 30–40 minutes more, until the vegetables are soft and the barley has swollen and clouded the broth.",
    "Lift out the mutton, strip the meat from the bone, chop it, and return it to the pot; discard the bone and bay leaf.",
    "Season well, stir in a fistful of chopped parsley, and ladle into deep bowls. Serve with brown bread; it's even better reheated the next day.",
  ],
  modernMove:
    "Cook it a day ahead and chill overnight — the fat sets on top to lift off cleanly, the barley keeps thickening, and the flavour rounds out into something far bigger than its cheap ingredients.",
  notes:
    "Three-quarters of a pound of bony mutton feeds four because the barley and roots do the work — the meat is for flavour and a little texture, not the bulk of the bowl.",
  zeroWasteHero: true,
  tags: ["barley", "mutton", "lamb", "broth", "soup", "dinner", "irish"],
  sources: [
    {
      title: "Food Ireland — Mutton Broth",
      url: "https://www.foodireland.com/recipes/mutton-broth/",
      note: "mutton simmered with pearl barley and root vegetables into a thick farmhouse broth",
    },
  ],
};
