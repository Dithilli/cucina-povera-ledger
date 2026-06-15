import type { Recipe } from "../types";

export const cornFritters: Recipe = {
  slug: "corn-fritters",
  title: "Corn Fritters",
  cuisine: "appalachian",
  blurb:
    "Fresh-cut summer corn folded into a quick egg-and-flour batter and dropped into hot fat — crisp brown edges, a sweet creamy middle, a way to make a meal of a roasting ear or two.",
  servings: 4,
  perServing: { calories: 480, protein: 12 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "fresh corn kernels, cut from the cob", qty: "2 cups (about 4 ears)", cost: 1.0 },
    { item: "all-purpose flour", qty: "1 cup", cost: 0.15, spansWeeks: true },
    { item: "eggs", qty: "2", cost: 0.4 },
    { item: "milk or buttermilk", qty: "1/3 cup", cost: 0.15 },
    { item: "baking powder", qty: "1 1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "salt and black pepper", qty: "to taste", cost: 0.1, spansWeeks: true },
    { item: "lard or oil for frying", qty: "1/2 cup (reusable)", cost: 0.4, spansWeeks: true },
  ],
  method: [
    "Cut the corn from the cobs and scrape the cobs hard with the back of the knife to get the milky pulp — that's where the sweetness and binding come from.",
    "Whisk the eggs with the milk, then stir in the flour, baking powder, salt, and pepper to a thick batter. Fold in all the corn and its scrapings; the batter should just hold the kernels together.",
    "Heat about 1/4 inch of lard in a cast-iron skillet to medium-high. Drop the batter in heaping spoonfuls, flattening each slightly, and fry without crowding.",
    "Cook 2–3 minutes a side until deep golden and set in the middle. Drain on a brown paper sack, salt while hot, and serve at once.",
  ],
  modernMove:
    "Scraping the cob for its 'milk' is the trick — that starchy liquid binds the fritter and concentrates the corn flavor so you need barely any batter to carry it, keeping them light and corn-forward instead of doughy.",
  notes:
    "Mountain cooks ate these for supper drizzled with sorghum or honey, or savory alongside soup beans. Frozen or cut-off canned corn works in the off-season, drained well first.",
  zeroWasteHero: false,
  tags: ["skillet", "appalachian", "corn", "garden", "fried"],
  sources: [
    {
      title: "Evolving Table — Easy Fried Corn Fritters",
      url: "https://www.evolvingtable.com/corn-fritters/",
      note: "Fresh corn folded into a simple flour-egg batter and pan-fried into cakes",
    },
  ],
};
