import type { Recipe } from "../types";

export const killedLettuce: Recipe = {
  slug: "killed-lettuce",
  title: "Killed Lettuce & Onions",
  cuisine: "appalachian",
  blurb:
    "The first taste of spring in the hills — tender new leaf lettuce and green onions \"killed\" under a pour of hissing-hot bacon grease and a splash of vinegar, served with cornbread to make it supper.",
  servings: 4,
  perServing: { calories: 420, protein: 14 },
  estCostPerServing: 1.0,
  roles: ["dinner"],
  ingredients: [
    { item: "tender leaf lettuce", qty: "1 large head, torn", cost: 1.2 },
    { item: "green onions", qty: "1 bunch, sliced", cost: 0.5 },
    { item: "bacon", qty: "3 slices", cost: 0.9 },
    { item: "cider vinegar", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "skillet cornbread", qty: "4 wedges", cost: 1.0 },
  ],
  method: [
    "Tear the washed lettuce into a big bowl and scatter the sliced green onions and tops over it; salt and pepper.",
    "Fry the bacon crisp in a skillet, lift it out to drain, and keep the hot grease in the pan.",
    "Stir the cider vinegar into the screaming-hot grease so it sputters, then immediately pour the whole lot over the lettuce.",
    "Toss fast — the lettuce wilts, or is \"killed,\" just slightly, the leaves slicked and softened but not soggy.",
    "Crumble the bacon over the top and eat at once, with cornbread on the side to make it a supper.",
  ],
  modernMove:
    "Splash the vinegar into the grease the second before it hits the greens — that flash of hot acid is what wilts the leaves and seasons them in a single pour.",
  notes:
    "A spring dish, eaten the moment the first lettuce is up; it has to be served and eaten hot, the instant it's dressed.",
  zeroWasteHero: false,
  tags: ["greens", "appalachian", "pork", "spring"],
  sources: [
    {
      title: "Killed Lettuce — Blind Pig and The Acorn",
      url: "https://blindpigandtheacorn.com/killed-lettuce/",
      note: "spring leaf lettuce and onions wilted under hot bacon grease and vinegar, eaten with cornbread",
    },
  ],
};
