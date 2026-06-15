import type { Recipe } from "../types";

export const adoboFlakes: Recipe = {
  slug: "adobo-flakes",
  title: "Adobo Flakes",
  cuisine: "filipino",
  blurb:
    "Leftover adobo shredded and fried dry until brown and crackling, then piled over garlic rice with a runny fried egg. The classic Filipino answer to a pot of adobo on its second or third day — nothing wasted, everything crisped into something new.",
  servings: 2,
  perServing: { calories: 560, protein: 28 },
  estCostPerServing: 1.4,
  roles: ["breakfast", "dinner"],
  ingredients: [
    { item: "leftover chicken or pork adobo, meat picked off the bone", qty: "~2 cups shredded", cost: 2.0 },
    { item: "reserved adobo sauce", qty: "1/3 cup", cost: 0.2 },
    { item: "neutral oil", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "garlic, minced (for the rice)", qty: "3 cloves", cost: 0.15, spansWeeks: true },
    { item: "day-old steamed rice", qty: "3 cups", cost: 0.6 },
    { item: "eggs", qty: "2", cost: 0.5, spansWeeks: true },
    { item: "scallion or vinegar dip (sawsawan), to serve", qty: "to serve", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Pull the leftover adobo meat off any bones and shred it as evenly as you can with two forks — fine shreds crisp better than chunks.",
    "Toss the shreds with the reserved adobo sauce and spread them in a wide, oiled pan over low-to-medium heat. Let the liquid cook off completely first; once it's dry the meat starts to splatter, so step back.",
    "Keep frying and turning, pushing the meat thin against the pan, until it goes deep brown, dry, and crackling at the edges — patience here is the whole dish. Lift onto paper to drain.",
    "In the same pan, fry the minced garlic in a little oil until pale gold, add the day-old rice, and toss hard to make quick sinangag, scraping up every brown bit.",
    "Fry the eggs to a crisp-edged, runny yolk. Plate the garlic rice, crown with the adobo flakes and an egg, and serve with a vinegar dip — break the yolk over everything.",
  ],
  modernMove:
    "The make-or-break is drying the meat fully before you chase the crisp: cook off the sauce, then fry low and slow until the shreds rattle in the pan. Rushing the heat browns the outside while the inside stays damp and chewy.",
  notes:
    "Pure mottainai — a pot of adobo that's down to scraps and bone becomes a whole new meal, and the day-old rice that would otherwise go hard turns into the sinangag underneath. Shredded flakes keep a week refrigerated and fry up straight from cold.",
  zeroWasteHero: true,
  tags: ["breakfast", "dinner", "adobo", "leftovers", "crispy", "zero-waste", "silog"],
  sources: [
    {
      title: "Yummy.ph — Chicken Adobo Flakes Recipe",
      url: "https://www.yummy.ph/recipe/chicken-adobo-flakes-recipe-20231108",
      note: "Leftover adobo shredded and fried crisp, served over garlic rice with egg.",
    },
    {
      title: "Manila Spoon — Crispy Adobo Flakes",
      url: "https://www.manilaspoon.com/crispy-adobo-flakes/",
      note: "Drying the shredded meat fully before frying it brown and crackling; classic rice-and-egg plate.",
    },
  ],
};
