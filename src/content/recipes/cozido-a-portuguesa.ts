import type { Recipe } from "../types";

export const cozidoAPortuguesa: Recipe = {
  slug: "cozido-a-portuguesa",
  title: "Cozido à Portuguesa",
  cuisine: "portuguese",
  blurb:
    "The great boiled dinner — cheap cuts and a little sausage simmered with cabbage, potatoes, carrots, and beans, then the gold broth poured over rice. One pot feeds a family and wastes nothing.",
  servings: 6,
  perServing: { calories: 640, protein: 30 },
  estCostPerServing: 1.85,
  roles: ["dinner"],
  ingredients: [
    {
      item: "cheap pork cuts (shank, ear, or a smoked hock)",
      qty: "1 lb",
      cost: 3.0,
    },
    {
      item: "chouriço or morcela sausage, in chunks",
      qty: "6 oz",
      cost: 2.0,
    },
    {
      item: "dried white beans, soaked overnight",
      qty: "1 cup",
      cost: 0.6,
    },
    { item: "small green cabbage or couve, wedged", qty: "1/2 head", cost: 0.6 },
    { item: "waxy potatoes, halved", qty: "1 1/2 lb", cost: 0.9 },
    { item: "carrots, in big pieces", qty: "3", cost: 0.4 },
    { item: "turnip, in chunks", qty: "1", cost: 0.3 },
    {
      item: "rice, to cook in the broth at the end",
      qty: "1 cup",
      cost: 0.4,
    },
    {
      item: "onion and bay leaf",
      qty: "1 / 1 leaf",
      cost: 0.2,
      spansWeeks: true,
    },
    { item: "olive oil, salt, black pepper", qty: "to finish", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Cover the pork cuts and the soaked beans with cold water along with the onion and bay leaf. Bring up slowly, skim the grey foam, and simmer covered about 1 hour until the meat begins to yield.",
    "Add the carrots, turnip, and potatoes and the sausage chunks; simmer 20 minutes more. The sausage rouge bleeds into the broth and seasons everything.",
    "Lay the cabbage wedges on top and cook just until tender and bright, 10 minutes — do not let them grey out.",
    "Ladle off about 3 cups of the rich broth into a small pot and cook the rice in it until plump — this arroz no caldo is the soul of the meal and stretches the meat across more plates.",
    "Lift the meats, sausage, and vegetables onto a warm platter, slice the meat thin so a little feeds many, and serve with the broth-rice alongside. Finish with a thread of olive oil and black pepper.",
  ],
  modernMove:
    "Cooking the rice directly in the strained cozido broth turns the cheapest part of the meal — the cooking water — into its richest course, so a pound of pork feeds six.",
  notes:
    "Zero-waste by design: every leftover scrap of meat and vegetable becomes next-day sopa do dia or a quick fritter, and the broth never gets poured away.",
  zeroWasteHero: true,
  tags: ["boiled-dinner", "pork", "sausage", "beans", "cabbage", "broth-rice", "one-pot"],
  sources: [
    {
      title: "Cozido à portuguesa — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Cozido_%C3%A0_portuguesa",
      note: "National boiled dinner of cheap cuts and smoked sausage with cabbage, potatoes, carrots, turnip, and beans, served with broth-cooked rice.",
    },
  ],
};
