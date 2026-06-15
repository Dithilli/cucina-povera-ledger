import type { Recipe } from "../types";

export const sausageGravyBiscuits: Recipe = {
  slug: "sausage-gravy-biscuits",
  title: "Sausage Gravy & Biscuits",
  cuisine: "appalachian",
  blurb:
    "Hand-torn cathead biscuits drowned in peppery sawmill gravy built from sausage drippings and milk — the meal mountain families ate for breakfast, supper, or anytime the smokehouse and the flour bin were both still full.",
  servings: 4,
  perServing: { calories: 640, protein: 22 },
  estCostPerServing: 1.4,
  roles: ["dinner"],
  ingredients: [
    { item: "bulk fresh pork sausage", qty: "1/2 lb", cost: 2.0 },
    { item: "all-purpose flour (for gravy)", qty: "1/4 cup", cost: 0.05, spansWeeks: true },
    { item: "whole milk", qty: "2 1/2 cups", cost: 0.65 },
    { item: "self-rising flour (for biscuits)", qty: "2 1/2 cups", cost: 0.4, spansWeeks: true },
    { item: "lard or shortening, cold", qty: "1/3 cup", cost: 0.25, spansWeeks: true },
    { item: "buttermilk", qty: "1 1/4 cups", cost: 0.5 },
    { item: "lots of coarse black pepper", qty: "to taste", cost: 0.1, spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Heat the oven to 450°F. Cut the cold lard into the self-rising flour until it looks pebbly, then stir in the buttermilk just until it comes together into a sticky, shaggy dough — don't knead it smooth.",
    "Pinch off cat-head-sized lumps with a floured hand and set them snug against each other in a greased cast-iron skillet so they rise into one another. Bake 15–18 minutes until tall and brown.",
    "Meanwhile, brown the sausage in a heavy skillet, breaking it into crumbles and rendering its fat. Leave the meat and grease in the pan.",
    "Stir the gravy flour into the drippings and cook the paste 2–3 minutes until it smells nutty and loses its raw edge.",
    "Whisk in the milk a little at a time and simmer, stirring, until the gravy thickens and coats a spoon. Season hard with black pepper and a little salt — it should taste aggressively peppery.",
    "Split the hot biscuits open and ladle the sausage gravy over the top.",
  ],
  modernMove:
    "Cooking the flour fully in the sausage fat before any milk goes in is what keeps the gravy from tasting pasty — and self-rising flour plus buttermilk means you can have real biscuits going in five minutes with no biscuit cutter.",
  notes:
    "'Sawmill gravy' got its name as cheap fuel for Appalachian logging crews. Stale leftover biscuits split and griddled in butter make a fine second supper.",
  zeroWasteHero: true,
  tags: ["pork", "sausage", "gravy", "biscuits", "cast-iron", "appalachian"],
  sources: [
    {
      title: "Margin Making Mom — Easy Appalachian Cathead Biscuits",
      url: "https://marginmakingmom.com/cathead-biscuits/",
      note: "Hand-formed, no-cutter cathead biscuits baked snug in cast iron, served under sawmill gravy.",
    },
  ],
};
