import type { Recipe } from "../types";

export const abcSoup: Recipe = {
  slug: "abc-soup",
  title: "ABC Soup",
  cuisine: "cantonese",
  blurb:
    "The everyday family soup named for the vitamins it carries — A, B, C from carrot, potato, and tomato — pork bones simmered with sweet root vegetables into a gentle, slightly tangy broth that anchors a weeknight table over rice.",
  servings: 6,
  perServing: { calories: 280, protein: 15 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "pork ribs or neck bones", qty: "1 1/4 lb", cost: 3.5 },
    { item: "potatoes, peeled and quartered", qty: "2 large", cost: 0.8 },
    { item: "carrots, in 1-inch chunks", qty: "2 large", cost: 0.5 },
    { item: "tomatoes, in wedges", qty: "3 medium", cost: 1.2 },
    { item: "onion, halved", qty: "1", cost: 0.3 },
    { item: "corn on the cob, in rounds (optional)", qty: "1 ear", cost: 0.5 },
    { item: "ginger, smashed", qty: "2 slices", cost: 0.1, spansWeeks: true },
    { item: "water", qty: "10 cups" },
    { item: "salt", qty: "to taste", cost: 0.02, spansWeeks: true },
    { item: "white pepper", qty: "pinch", cost: 0.02, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "Blanch the pork bones in boiling water 2–3 minutes, then drain and rinse off the scum so the soup stays clean and clear.",
    "Put the bones, ginger, onion, carrots, corn, and water in a clean pot. Bring to a boil, then drop to a low, partly covered simmer.",
    "Simmer 60 minutes, then add the potatoes and tomatoes. The potatoes thicken the broth slightly as they soften; the tomatoes lend gentle acidity that brightens the pork sweetness.",
    "Simmer 30 minutes more, until the potatoes are tender and the soup has reduced by an inch or so and tastes rounded.",
    "Season with salt and white pepper at the end. Serve as the meal's soup, with the soft pork and vegetables eaten from the bowl alongside rice.",
  ],
  modernMove:
    "Adding the tomatoes and potatoes in the second hour, not the first, keeps the potato chunks from dissolving while still letting the tomato thread its bright acidity through a long-built pork-bone broth.",
  notes:
    "ABC soup came to Cantonese home kitchens by way of Malaysia and Singapore; it is the definition of a frugal, forgiving everyday tong. Whatever sweet vegetables are around — daikon, a few corn rounds — happily join.",
  zeroWasteHero: false,
  tags: ["soup", "pork-bone", "tomato", "potato", "carrot", "everyday", "cantonese"],
  sources: [
    {
      title: "Sarah — The Woks of Life",
      url: "https://thewoksoflife.com/chinese-pork-bone-soup-with-tomatoes-potatoes-corn/",
      note: "Pork-bone soup with tomato, potato, carrot, corn; blanch bones, staggered vegetable timing",
    },
  ],
};
