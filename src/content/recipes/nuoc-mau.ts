import type { Recipe } from "../types";

export const nuocMau: Recipe = {
  slug: "nuoc-mau",
  title: "Nước Màu (Caramel Sauce Base)",
  cuisine: "vietnamese",
  blurb:
    "Sugar cooked dark — past golden, to the bitter edge of burnt — then stopped with water to make the bittersweet mahogany caramel that gives every Vietnamese kho its color and savory depth. Pennies of sugar do the work of long browning; a jar lasts weeks.",
  servings: 16,
  perServing: { calories: 30, protein: 0 },
  estCostPerServing: 0.02,
  roles: ["base"],
  ingredients: [
    { item: "sugar (white or palm sugar)", qty: "1/2 cup", cost: 0.25, spansWeeks: true },
    { item: "water (split: 2 tbsp to start, 1/2 cup to stop)", qty: "1/2 cup + 2 tbsp" },
  ],
  method: [
    "Put the sugar and the 2 tbsp of water in a small heavy saucepan over medium heat. Swirl, don't stir, as it melts and starts to color — stirring can crystallize it.",
    "Let it go from clear to gold to amber to a deep reddish-brown. Push it further than feels safe: the flavor you want lives right at the edge of bitter, the point where wisps of smoke rise and it smells like the very beginning of burnt. Too pale and the kho is just sweet and flat; this controlled near-burn is the whole technique.",
    "The instant it hits that dark mahogany, kill the heat and stand back — pour in the 1/2 cup of water at arm's length. It will hiss, spit, and seize violently; that's expected. The water stops the cooking and turns the caramel into a pourable sauce.",
    "Return to low heat and stir to dissolve any hardened bits back into a smooth, dark, slightly bitter syrup the color of strong coffee. It should taste bittersweet, not sweet — that bitterness is what reads as savory in the braise.",
    "Cool completely and store in a clean jar at room temperature. A spoonful or two colors and deepens a whole pot of thịt kho, cá kho, or gà kho.",
  ],
  modernMove:
    "Taking the caramel all the way to the bitter edge before stopping it is the move that separates real kho from sweet brown stew — that near-burnt note is savory, not sweet, and it's why a frugal braise tastes deep and aged.",
  notes:
    "Palm sugar gives a rounder, more traditional flavor; white sugar is fine and cheaper. Keep a jar on hand and any kho comes together fast. If it ever sets too hard in the jar, a splash of hot water loosens it.",
  zeroWasteHero: true,
  tags: ["base", "caramel", "nuoc-mau", "make-ahead", "pantry", "vegan"],
  sources: [
    {
      title: "Hungry Huy — Vietnamese Caramel Sauce (Nước Màu)",
      url: "https://www.hungryhuy.com/how-to-make-nuoc-mau-caramel/",
      note: "Cooking sugar past amber to a near-burnt, bittersweet syrup, then stopping with water",
    },
    {
      title: "Andrea Nguyen — Caramel Sauce (Viet World Kitchen)",
      url: "https://www.vietworldkitchen.com/blog/2007/10/caramel-sauce.html",
      note: "The dark, slightly bitter caramel that colors and deepens every kho",
    },
  ],
};
