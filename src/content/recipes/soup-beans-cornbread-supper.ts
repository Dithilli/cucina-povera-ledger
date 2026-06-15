import type { Recipe } from "../types";

export const soupBeansCornbreadSupper: Recipe = {
  slug: "soup-beans-cornbread-supper",
  title: "Soup Beans & Cornbread Supper",
  cuisine: "appalachian",
  blurb:
    "The plate that fed the hills: a bowl of brothy pinto soup beans with cornbread broken right into the pot likker, crowned with sharp chow chow and a slice of raw onion.",
  servings: 4,
  perServing: { calories: 560, protein: 23 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "cooked soup beans with pot likker", qty: "4 cups", cost: 2.0 },
    { item: "skillet cornbread", qty: "4 wedges", cost: 1.0 },
    { item: "chow chow relish", qty: "1/2 cup", cost: 0.6, spansWeeks: true },
    { item: "raw onion", qty: "1/2, sliced", cost: 0.2 },
  ],
  method: [
    "Reheat the soup beans gently, keeping them brothy; mash a ladleful if the pot likker needs thickening.",
    "Crumble a wedge of cornbread into the bottom of each bowl.",
    "Ladle the hot beans and their likker right over the cornbread so it half-dissolves and half-soaks.",
    "Top each bowl with a spoonful of tangy chow chow and lay a couple slices of raw onion alongside.",
    "Eat straight away, with more cornbread to wipe the bowl.",
  ],
  modernMove:
    "The chow chow isn't garnish — its vinegar bite is what cuts the rich pork-and-bean fat, balancing the plate the way no single pot could.",
  notes:
    "This is the assembly supper of Appalachia: it leans on a pot of soup beans and a skillet of cornbread already made, so a cook-day's work feeds a weeknight in minutes.",
  zeroWasteHero: true,
  tags: ["beans", "cornbread", "appalachian", "pork"],
  sources: [
    {
      title: "Appalachian Soup Beans {Pinto Bean Soup} — The Seasoned Mom",
      url: "https://www.theseasonedmom.com/soup-beans/",
      note: "the classic plate of soup beans over crumbled cornbread topped with chow chow and onion",
    },
  ],
};
