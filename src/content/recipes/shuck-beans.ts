import type { Recipe } from "../types";

export const shuckBeans: Recipe = {
  slug: "shuck-beans",
  title: "Shuck Beans & Potatoes",
  cuisine: "appalachian",
  blurb:
    "Green beans strung up to dry on the rafters all summer — \"leather britches\" — rehydrated and simmered low with potatoes and a chunk of fatback until they go meaty, smoky, and deep.",
  servings: 5,
  perServing: { calories: 380, protein: 12 },
  estCostPerServing: 0.75,
  roles: ["dinner"],
  ingredients: [
    { item: "dried shuck beans (leather britches)", qty: "4 cups", cost: 1.5 },
    { item: "fatback or salt pork", qty: "3 oz", cost: 1.0 },
    { item: "potatoes, peeled and quartered", qty: "1 lb", cost: 0.7 },
    { item: "onion, quartered", qty: "1", cost: 0.3 },
    { item: "salt and black pepper", qty: "to taste", cost: 0.1, spansWeeks: true },
  ],
  method: [
    "Rinse the dried beans well, then soak them in plenty of water overnight to plump them back up — they shrank to leather on the string and need to drink the summer back in.",
    "Drain, put the beans in a heavy pot with the fatback, cover with fresh water, and bring to a boil. Drop to a low simmer and cook, half-covered, for 2 to 3 hours, adding water as needed, until the beans are fully tender and the broth turns smoky.",
    "Add the onion partway through. About 25 minutes before serving, nestle in the quartered potatoes and let them cook until soft enough to break with a spoon.",
    "Fish out the fatback, dice or shred any meaty bits back in, and season with salt and a hard grind of pepper. Serve in bowls with the pot likker, cornbread on the side, and a slice of raw onion.",
  ],
  modernMove:
    "The long, slow simmer is the whole point — rushing them leaves the rehydrated beans squeaky. Hours over low heat is what gives leather britches their signature dense, almost meaty chew and that earthy, concentrated flavor drying creates.",
  notes:
    "A Cherokee preservation method the European settlers adopted: beans threaded on string and hung to dry for winter. If you don't have fatback, a ham hock or bacon ends do the same work.",
  zeroWasteHero: true,
  tags: ["appalachian", "beans", "potatoes", "preserved", "one-pot"],
  sources: [
    {
      title: "Wikipedia — Shucky beans",
      url: "https://en.wikipedia.org/wiki/Shucky_beans",
      note: "Dried green beans (leather britches) simmered hours with fatback/salt pork; soak overnight",
    },
  ],
};
