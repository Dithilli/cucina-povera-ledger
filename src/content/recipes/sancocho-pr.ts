import type { Recipe } from "../types";

export const sancochoPr: Recipe = {
  slug: "sancocho-pr",
  title: "Sancocho (Root Vegetable and Meat Stew)",
  cuisine: "puerto-rican",
  blurb:
    "A big, slow pot of stewing beef and every vianda in the bin — yautía, yuca, ñame, green plantain, calabaza and corn — simmered in sofrito until the broth turns thick and golden; the catch-all Sunday stew.",
  servings: 6,
  perServing: { calories: 560, protein: 28 },
  estCostPerServing: 2.0,
  roles: ["dinner"],
  ingredients: [
    { item: "beef stew meat, cubed", qty: "1.25 lb", cost: 6.0 },
    { item: "yautía (taro root), peeled and chunked", qty: "3/4 lb", cost: 1.2 },
    { item: "yuca (cassava), peeled and chunked", qty: "3/4 lb", cost: 1.0 },
    { item: "green plantain + ñame or potato", qty: "1 lb", cost: 1.0 },
    { item: "calabaza (pumpkin), chunked", qty: "1/2 lb", cost: 0.7 },
    { item: "corn on the cob, in rounds", qty: "2 ears", cost: 0.8 },
    { item: "sofrito (recaíto)", qty: "1/2 cup", cost: 0.75, spansWeeks: true },
    { item: "sazón + adobo, garlic, oregano, bay leaf, olive oil", qty: "to taste", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Season the beef with adobo and marinate it briefly in the sofrito, sazón, oregano, and a little oil — even 20 minutes helps.",
    "Brown the beef in a large pot, then add water to cover and simmer covered until the meat starts to turn tender, about 45–60 minutes.",
    "Add the firmest roots first — yuca, ñame, yautía — and simmer 15 minutes; then add the calabaza, plantain, and corn rounds and enough water to cover.",
    "Simmer until everything is fork-tender and the calabaza has half-dissolved to thicken the broth into a golden, almost creamy stew, about 25–30 minutes more. Taste and adjust salt.",
    "Serve in deep bowls with white rice on the side and a wedge of avocado.",
  ],
  modernMove:
    "Let some of the calabaza break down completely into the broth instead of fishing it out as neat cubes — the dissolved squash is what gives a real sancocho its thick, golden body without any flour or thickener.",
  notes:
    "Sancocho is the original use-what-you-have stew — 'sancochar' means to parboil. Any cut of stewing meat and whatever viandas are cheap that week go in, which is why no two pots are quite alike.",
  zeroWasteHero: true,
  tags: ["beef", "stew", "sancocho", "viandas", "root-vegetables", "sofrito", "dinner", "puerto-rican"],
  sources: [
    {
      title: "Sense & Edibility — Sancocho (Latin American Meat and Vegetable Stew)",
      url: "https://senseandedibility.com/sancocho-latin-american-meat-and-vegetable-stew/",
      note: "beef marinated in sofrito then stewed with yautía, yuca, ñame, plantain, calabaza and corn until thickened",
    },
  ],
};
