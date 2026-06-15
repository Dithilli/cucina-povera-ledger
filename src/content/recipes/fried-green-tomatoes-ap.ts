import type { Recipe } from "../types";

export const friedGreenTomatoesAp: Recipe = {
  slug: "fried-green-tomatoes-ap",
  title: "Fried Green Tomatoes",
  cuisine: "appalachian",
  blurb:
    "Hard, tart green tomatoes the first frost would have claimed, sliced thick, dipped in buttermilk, dredged in cornmeal, and fried crisp and tangy — the mountain garden's last gift of the season.",
  servings: 4,
  perServing: { calories: 420, protein: 9 },
  estCostPerServing: 0.85,
  roles: ["dinner"],
  ingredients: [
    { item: "green (unripe) tomatoes, sliced 1/2-inch thick", qty: "4 medium", cost: 1.2 },
    { item: "buttermilk", qty: "1 cup", cost: 0.5 },
    { item: "egg", qty: "1", cost: 0.2 },
    { item: "cornmeal", qty: "1 cup", cost: 0.25, spansWeeks: true },
    { item: "all-purpose flour", qty: "1/4 cup", cost: 0.05, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", cost: 0.1, spansWeeks: true },
    { item: "lard or oil for frying", qty: "1/2 cup (reusable)", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Slice the green tomatoes a generous 1/2-inch thick, trimming off the ends. Lay them in the buttermilk whisked with the egg and let them sit 5 minutes — the soak coats them and cuts a little of the raw bite.",
    "Stir the cornmeal, flour, salt, and plenty of pepper together in a shallow pan. Lift each slice from the buttermilk and press both sides into the meal, shaking off the excess.",
    "Heat lard in a cast-iron skillet to about 325°F, enough to come up the sides of the slices. Fry in batches without crowding, 2–3 minutes a side, until the crust is deep golden and crackly.",
    "Drain on a brown paper sack, salt while hot, and eat right away — these go soft as they cool, so they're a stand-at-the-stove kind of supper.",
  ],
  modernMove:
    "Straight cornmeal (not flour) gives the gritty, sandy crunch that's distinctly Appalachian; the buttermilk's acid plus the tomato's own tartness keeps each bite bright against the rich fry.",
  notes:
    "Pick the firmest, palest tomatoes — too ripe and they go to mush in the pan. A swipe of comeback sauce or just hot pepper vinegar is all the dressing they need.",
  zeroWasteHero: true,
  tags: ["skillet", "appalachian", "garden", "cornmeal", "end-of-season"],
  sources: [
    {
      title: "Tipper Pressley — Blind Pig and The Acorn",
      url: "https://blindpigandtheacorn.com/fried-green-tomatoes/",
      note: "Cornmeal-crusted Appalachian fried green tomatoes; buttermilk dip, fry until golden",
    },
  ],
};
