import type { Recipe } from "../types";

export const gritsAp: Recipe = {
  slug: "grits-ap",
  title: "Grits with Sausage",
  cuisine: "appalachian",
  blurb:
    "A pot of long-cooked grits stirred to silk, topped with crumbled pork sausage and ladled with peppery sawmill gravy made from the same drippings — the ground corn turned into a full mountain supper.",
  servings: 4,
  perServing: { calories: 560, protein: 20 },
  estCostPerServing: 1.3,
  roles: ["dinner"],
  ingredients: [
    { item: "stone-ground grits", qty: "1 cup", cost: 0.5 },
    { item: "water", qty: "4 cups", cost: 0 },
    { item: "bulk pork sausage", qty: "1/2 lb", cost: 2.0 },
    { item: "all-purpose flour", qty: "3 tbsp", cost: 0.05, spansWeeks: true },
    { item: "whole milk", qty: "2 cups", cost: 0.5 },
    { item: "lard or butter for the grits", qty: "2 tbsp", cost: 0.15, spansWeeks: true },
    { item: "lots of black pepper", qty: "to taste", spansWeeks: true },
    { item: "salt", qty: "to taste" },
  ],
  method: [
    "Bring the salted water to a boil and whisk in the grits. Drop the heat low and cook 30–40 minutes, stirring often and adding a splash of water if they tighten, until creamy. Beat in the lard or butter and keep warm.",
    "Brown the sausage in a skillet, crumbling it small and rendering its fat. Lift out the meat, leaving the drippings.",
    "Stir the flour into the drippings and cook 2–3 minutes until nutty, then whisk in the milk and simmer to a thick, peppery sawmill gravy.",
    "Stir most of the crumbled sausage back into the gravy.",
    "Spoon the grits into bowls, ladle the sausage gravy over, and scatter the reserved crumbles on top. Black pepper, generously.",
  ],
  modernMove:
    "Cooking real stone-ground grits the slow 40-minute way — not instant — is what gives them the creamy, corn-sweet body that stands up to the gravy instead of vanishing under it.",
  notes:
    "Cold leftover grits set firm overnight; slice and fry them in lard the next day, the same trick as fried mush.",
  zeroWasteHero: false,
  tags: ["pork", "sausage", "grits", "cornmeal", "gravy", "appalachian"],
  sources: [
    {
      title: "Grub Americana — Appalachian Sawmill Gravy",
      url: "https://grubamericana.com/2013/07/29/appalachian-sawmill-gravy/",
      note: "Sausage-drippings sawmill gravy in the Appalachian style, here spooned over slow-cooked grits.",
    },
  ],
};
