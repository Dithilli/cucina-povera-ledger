import type { Recipe } from "../types";

export const chairoPaceno: Recipe = {
  slug: "chairo-paceno",
  title: "Chairo Paceño",
  cuisine: "andean",
  blurb:
    "La Paz's deep Aymara winter stew — freeze-dried chuño and chewy wheat berries simmered slow with a little lamb and barley until the whole pot turns earthy, hearty, and faintly smoky.",
  servings: 6,
  perServing: { calories: 440, protein: 22 },
  estCostPerServing: 1.6,
  roles: ["dinner"],
  ingredients: [
    { item: "chuño (freeze-dried potato), soaked overnight", qty: "1 cup", cost: 1.0 },
    { item: "lamb or beef on the bone, in small pieces", qty: "8 oz", cost: 2.5 },
    { item: "wheat berries (mote de trigo), pre-cooked", qty: "1/2 cup", cost: 0.5 },
    { item: "pearl barley", qty: "1/4 cup", cost: 0.3 },
    { item: "potatoes, peeled and diced", qty: "2 medium", cost: 0.5 },
    { item: "peas, fava beans, diced carrot", qty: "1 cup", cost: 0.5 },
    { item: "onion + garlic", qty: "1 + 2 cloves", cost: 0.3 },
    { item: "red chile (ají colorado) paste", qty: "1 tbsp", cost: 0.2, spansWeeks: true },
    { item: "oil, cumin, oregano, salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soak the chuño overnight, then peel, pound it lightly, and rinse it several times until the water runs clear so the stew won't taste sour.",
    "Cover the lamb and bone with about 8 cups of cold water, bring up slowly, skim the foam, salt lightly, and simmer for an hour until the meat is tender.",
    "Add the barley, the fava beans, carrot, peas, and diced potato and cook until everything is nearly soft.",
    "Stir in the rinsed chuño and the cooked wheat berries and simmer another 10 minutes until the chuño plumps and the broth thickens.",
    "Fry the onion in oil until golden, add the chile paste, cumin, and oregano, cook a minute, then tip this aderezo into the pot and let it all boil together 10 minutes more. Season and serve very hot.",
  ],
  modernMove:
    "The rinsing of the chuño is the make-or-break: pounded and washed until clean it adds a unique sour-earthy chew you can't get from fresh potato — skip the rinsing and the whole stew turns bitter.",
  notes: "A frugal mountain stew built to stretch a scrap of meat across a huge pot through freeze-dried staples that keep for years.",
  zeroWasteHero: false,
  tags: ["chuno", "barley", "wheat", "lamb", "stew", "bolivian", "andean"],
  sources: [
    {
      title: "Chairo (stew) — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Chairo_(stew)",
      note: "Aymara stew of chuño, wheat, lamb/chalona, and vegetables; the chuño rinsing and aderezo finish.",
    },
  ],
};
