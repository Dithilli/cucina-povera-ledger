import type { Recipe } from "../types";

export const mafeSn: Recipe = {
  slug: "mafe-sn",
  title: "Mafé",
  cuisine: "senegalese",
  blurb:
    "A burnished groundnut stew where peanut butter melts into a tomato-onion nokoss and stewing beef, sweet potato and cassava drink it up — all spooned over broken rice.",
  servings: 4,
  perServing: { calories: 640, protein: 27 },
  estCostPerServing: 1.9,
  roles: ["dinner"],
  ingredients: [
    { item: "stewing beef or lamb, cubed", qty: "12 oz", cost: 3.0 },
    { item: "unsweetened natural peanut butter", qty: "3/4 cup", cost: 1.0 },
    { item: "onion, finely chopped", qty: "1 large", cost: 0.4 },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "sweet potato, chunked", qty: "1 medium", cost: 0.5 },
    { item: "cassava or carrot, chunked", qty: "1 cup", cost: 0.4 },
    { item: "cabbage wedge", qty: "1/4 small head", cost: 0.3 },
    { item: "Scotch bonnet (kaani), whole", qty: "1", cost: 0.2, spansWeeks: true },
    { item: "garlic and stock cube (Maggi)", qty: "2 cloves + 1 cube", cost: 0.2, spansWeeks: true },
    { item: "peanut oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "broken rice, to serve", qty: "1 1/2 cups dry", cost: 0.7 },
  ],
  method: [
    "Brown the beef in peanut oil, then soften the onion and stir in the tomato paste until it darkens and loses its raw edge.",
    "Whisk the peanut butter with a ladle of warm water into a smooth slurry and pour it in with enough water to cover; drop in the whole Scotch bonnet, garlic and crumbled stock cube.",
    "Simmer gently, uncovered, stirring often so the peanut oil rises and the sauce never catches — about 45 minutes until the meat is tender.",
    "Add sweet potato, cassava and cabbage and cook until the vegetables are soft and the sauce is glossy and thick enough to coat a spoon.",
    "Lift out the chili (unbroken, for the brave), taste for salt, and serve over hot broken rice.",
  ],
  modernMove:
    "Let the stew break — simmering uncovered until a slick of peanut oil pools on top — is the Senegalese sign that the mafé is done, not a fault to skim away.",
  notes: "Keep the Scotch bonnet whole and unpierced to perfume the pot without scorching it.",
  zeroWasteHero: false,
  tags: ["peanut", "stew", "beef", "groundnut", "senegalese"],
  sources: [
    {
      title: "Low Carb Africa — Mafe (Senegalese Peanut Stew)",
      url: "https://lowcarbafrica.com/mafe-senegalese-peanut-stew/",
      note: "Browning the meat and toasting tomato paste before loosening the peanut butter into a slurry.",
    },
  ],
};
