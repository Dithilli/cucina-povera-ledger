import type { Recipe } from "../types";

export const bumbuDasar: Recipe = {
  slug: "bumbu-dasar",
  title: "Bumbu Dasar",
  cuisine: "indonesian",
  blurb:
    "The basic ground spice paste that starts most Indonesian cooking — shallot, garlic, candlenut, and chili fried in oil until it splits and turns fragrant. Make a jar on Sunday and every weeknight dinner begins with a spoonful instead of twenty minutes of pounding.",
  servings: 20,
  perServing: { calories: 45, protein: 1 },
  estCostPerServing: 0.16,
  roles: ["base"],
  ingredients: [
    { item: "shallots, peeled", qty: "10 oz", cost: 1.6, spansWeeks: true },
    { item: "garlic cloves, peeled", qty: "5 oz", cost: 0.9, spansWeeks: true },
    { item: "candlenuts (or raw macadamia / blanched almonds)", qty: "6", cost: 0.6, spansWeeks: true },
    { item: "fresh red chilies, stemmed", qty: "4", cost: 0.5, spansWeeks: true },
    { item: "fresh turmeric (or 1 tsp ground)", qty: "1 thumb", cost: 0.3, spansWeeks: true },
    { item: "fresh ginger, peeled", qty: "1 thumb", cost: 0.3, spansWeeks: true },
    { item: "neutral oil for frying", qty: "1/2 cup", cost: 0.6, spansWeeks: true },
    { item: "salt", qty: "1 tsp", spansWeeks: true },
  ],
  method: [
    "Roughly chop everything, then grind shallot, garlic, candlenut, chili, turmeric, and ginger to a coarse-smooth paste in a blender or a stone cobek, adding a splash of the oil to get it moving. Candlenut is the thickener and binder — it gives the paste body so it clings to whatever you cook.",
    "Heat the rest of the oil in a wide pan over medium and scrape in the paste. Fry slowly, stirring often.",
    "Cook 15 to 20 minutes through the raw, sharp smell and out the other side: the paste darkens, the oil separates and pools at the edges, and it smells sweet and toasty. This 'menumis sampai matang' step is the whole game — under-fried bumbu tastes raw and harsh.",
    "Season with the salt, cool completely, and pack into a clean jar, filming the top with a little oil. Refrigerate up to 2 weeks or freeze in cubes.",
  ],
  modernMove:
    "Frying the paste until the oil splits (pecah minyak) both cooks out the raw bite and stores the aromatics under their own fat — a built-in preservative. One heaped tablespoon is your head start on a curry, a stir-fry, or a pot of greens; just bloom it again in hot oil before building the dish.",
  notes:
    "This is the yellow/white workhorse base. Skip the turmeric and lean on more chili for a red bumbu; the structure is the same. Save the candlenut frying oil to start the next dish.",
  zeroWasteHero: true,
  tags: ["base", "bumbu", "spice-paste", "aromatics", "make-ahead", "pantry"],
  sources: [
    { title: "Cook Me Indonesian — Cook Me Indonesian", url: "https://www.cookmeindonesian.com/bumbu-dasar-merah-basic-red-spice-paste/", note: "make-ahead base spice paste — ingredients and frying-down technique" },
  ],
};
