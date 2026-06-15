import type { Recipe } from "../types";

export const maridesTiganites: Recipe = {
  slug: "marides-tiganites",
  title: "Marides Tiganites (Fried Small Fish)",
  cuisine: "greek",
  blurb:
    "Tiny whole fish — smelt or picarel — tossed in seasoned flour and fried crisp, eaten head, tail, and all with a squeeze of lemon. The cheapest catch, the best meze-turned-dinner.",
  servings: 4,
  perServing: { calories: 470, protein: 28 },
  estCostPerServing: 1.25,
  roles: ["dinner"],
  ingredients: [
    { item: "small whole fish (smelt, picarel/marides, or sprats)", qty: "1 1/4 lb", cost: 4.0 },
    { item: "plain flour for dredging", qty: "1 cup", cost: 0.3, spansWeeks: true },
    { item: "olive or sunflower oil for shallow frying", qty: "1 cup", cost: 1.2, spansWeeks: true },
    { item: "lemons, in wedges", qty: "2", cost: 0.6, spansWeeks: true },
    { item: "salt, black pepper, oregano (optional)", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Rinse the little fish and pat thoroughly dry — dry fish is what fries crisp rather than steaming. If they're tiny (under a finger long), leave them whole, ungutted.",
    "Season the flour generously with salt and pepper. Toss the fish in it a handful at a time and shake off the excess in a sieve.",
    "Heat about half an inch of oil until it shimmers (a pinch of flour should sizzle at once).",
    "Fry in batches without crowding, 2–3 minutes a side, until golden and crisp. Lift onto paper to drain and salt immediately.",
    "Pile on a plate and serve very hot with lemon wedges to squeeze over — eaten whole, bones and all. Skordalia or a sharp salad on the side.",
  ],
  modernMove:
    "Dredge only at the moment of frying and keep the oil hot enough that the fish crisp before they absorb oil — a light, shatter-crisp coating from nothing but seasoned flour.",
  notes:
    "Marides (picarel) and smelt are among the cheapest fish at any Greek market precisely because they're small and whole — and they deliver a full serving of oily-fish protein.",
  zeroWasteHero: true,
  tags: ["fish", "fried", "small-fish", "marides", "smelt", "whole-fish"],
  sources: [
    {
      title: "Greek Tastes — Deep-Fried Whitebait (Marides Tiganites)",
      url: "https://www.greektastes.com/deep-fried-whitebait-marides-tiganites/",
      note: "Confirms small whole fish floured and fried, eaten whole with lemon.",
    },
    {
      title: "Aglaia Kremezi — The Foods of Greece",
      note: "Fried whitebait as a classic seaside meze.",
    },
  ],
};
