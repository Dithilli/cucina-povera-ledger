import type { Recipe } from "../types";

export const dublinBayMussels: Recipe = {
  slug: "dublin-bay-mussels",
  title: "Mussels in Cider",
  cuisine: "irish",
  blurb:
    "A great pot of rope-grown mussels steamed open in dry cider with sweet onion and a swirl of cream — coastal Ireland's cheapest feast, eaten with bread to wipe the briny liquor.",
  servings: 4,
  perServing: { calories: 430, protein: 24 },
  estCostPerServing: 1.8,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh mussels, scrubbed and de-bearded", qty: "3 lb", cost: 4.5 },
    { item: "onion, finely chopped", qty: "1 medium", cost: 0.3 },
    { item: "streaky bacon, diced", qty: "2 oz", cost: 0.6 },
    { item: "dry Irish cider", qty: "1 1/2 cups", cost: 0.9 },
    { item: "cream", qty: "1/4 cup", cost: 0.5 },
    { item: "brown bread, to serve", qty: "4 slices", cost: 0.6 },
    { item: "butter, garlic, parsley, pepper", qty: "to taste", cost: 0.3, spansWeeks: true },
  ],
  method: [
    "Check the mussels: tap any that are open, and discard ones that won't close or have cracked shells. Pull off stray beards and give them a final rinse.",
    "In a wide, deep pot with a tight lid, render the bacon in a little butter, then soften the onion and a clove of crushed garlic gently until sweet and translucent, 5 minutes.",
    "Pour in the cider, raise the heat, and let it bubble hard for 2 minutes to cook off the rawness. Tip in all the mussels at once and clamp the lid on.",
    "Steam over high heat 3–4 minutes, shaking the pot once or twice, until the shells have gaped open. Lift out the mussels into bowls, leaving the liquor behind; discard any that stayed shut.",
    "Stir the cream and chopped parsley into the cidery juices, taste for pepper, and pour over the mussels. Serve at once with brown bread.",
  ],
  modernMove:
    "Let the cooking liquor settle for a moment and pour it over from the top, leaving the last gritty spoonful in the pot — you get all the briny-sweet broth and none of the sand.",
  notes:
    "Three pounds of mussels in their shells looks enormous but feeds four as a main with bread. Cook them the day you buy them and keep them cold and loosely covered, never sealed in water.",
  zeroWasteHero: false,
  tags: ["fish", "shellfish", "mussels", "cider", "cream", "dinner", "irish"],
  sources: [
    {
      title: "Donal Skehan — Mussels with Irish Cider Cream Sauce",
      url: "https://donalskehan.com/recipes/mussels-with-irish-cider-cream-sauce/",
      note: "mussels steamed in Irish cider with bacon, onion and garlic, finished with cream and parsley",
    },
  ],
};
