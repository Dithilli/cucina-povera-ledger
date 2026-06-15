import type { Recipe } from "../types";

export const adobongSitaw: Recipe = {
  slug: "adobong-sitaw",
  title: "Adobong Sitaw (String Bean Adobo)",
  cuisine: "filipino",
  blurb:
    "The vegetable adobo — yard-long beans braised in vinegar, soy, and garlic with just a few ounces of pork to season the whole pan. Proof the adobo method is a technique, not a meat dish: cheap sitaw becomes the star.",
  servings: 4,
  perServing: { calories: 290, protein: 13 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "yard-long beans (sitaw), cut in 2-inch lengths", qty: "1 lb", cost: 1.6 },
    { item: "pork belly or shoulder, diced small", qty: "4 oz", cost: 1.2 },
    { item: "garlic cloves, minced", qty: "6", cost: 0.25, spansWeeks: true },
    { item: "red onion, sliced", qty: "1", cost: 0.4 },
    { item: "cane or coconut vinegar", qty: "1/4 cup", cost: 0.2, spansWeeks: true },
    { item: "soy sauce (toyo)", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "whole black peppercorns, cracked", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "bay leaf", qty: "1", cost: 0.05, spansWeeks: true },
    { item: "water", qty: "1/2 cup" },
    { item: "neutral oil", qty: "1 tbsp", cost: 0.1, spansWeeks: true },
    { item: "steamed rice, to serve", qty: "to serve" },
  ],
  method: [
    "Render the diced pork in the oil over medium-high heat until the fat melts out and the bits crisp and brown. A few ounces of pork carries flavor through the whole pan — the frugal heart of the dish.",
    "Lower the heat, add the garlic and onion, and ginisa them in the pork fat until soft and fragrant.",
    "Pour in the vinegar, soy, water, peppercorns, and bay. Bring to a boil and let it bubble a minute or two untouched to mellow the raw vinegar bite.",
    "Add the sitaw, toss to coat, cover, and braise 6 to 8 minutes until the beans are tender but still bright green and a little snappy — not olive-drab.",
    "Uncover and reduce until the sauce is scant and glazy, clinging to the beans and pork. Serve hot over rice.",
  ],
  modernMove:
    "Frying just a handful of pork first and braising the beans in that rendered fat plus vinegar means a quarter-pound of meat seasons a pound of vegetables — the adobo flavor without the adobo price.",
  notes:
    "Works the same way with kalabasa (squash), eggplant, or kangkong stems. Skip the pork entirely and brown extra garlic for a vegan adobong gulay.",
  zeroWasteHero: false,
  tags: ["dinner", "vegetables", "string-beans", "adobo", "vinegar-braise", "frugal-meat", "one-pot"],
  sources: [
    { title: "Lalaine Manalo — Kawaling Pinoy", url: "https://www.kawalingpinoy.com/adobong-sitaw-with-pork/", note: "String beans and a little pork in adobo sauce" },
    { title: "Vanjo Merano — Panlasang Pinoy", url: "https://panlasangpinoy.com/adobong-sitaw-string-bean-recipe/", note: "Braising the beans bright-green, not olive-drab" },
  ],
};
