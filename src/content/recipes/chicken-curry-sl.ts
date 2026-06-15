import type { Recipe } from "../types";

export const chickenCurrySl: Recipe = {
  slug: "chicken-curry-sl",
  title: "Kukul Mas (Sri Lankan Chicken Curry)",
  cuisine: "sri-lankan",
  blurb:
    "Bone-in chicken rubbed with dark roasted curry powder and simmered in coconut milk with pandan, curry leaf and a knob of cinnamon until the gravy turns deep and glossy.",
  servings: 4,
  perServing: { calories: 560, protein: 34 },
  estCostPerServing: 1.8,
  roles: ["dinner"],
  ingredients: [
    { item: "bone-in chicken, cut into pieces", qty: "2 lb", cost: 4.5 },
    { item: "roasted curry powder (thuna paha)", qty: "2 tbsp", cost: 0.2, spansWeeks: true },
    { item: "onion, sliced", qty: "1 large", cost: 0.3 },
    { item: "garlic & ginger, crushed", qty: "1 tbsp each", cost: 0.25, spansWeeks: true },
    { item: "thick coconut milk (pol kiri)", qty: "1 1/2 cups", cost: 1.0 },
    { item: "tomato, chopped", qty: "1", cost: 0.3 },
    { item: "rampe, curry leaves, cinnamon, lemongrass", qty: "1 set", cost: 0.2, spansWeeks: true },
    { item: "chili powder & turmeric", qty: "1 tbsp / 1/2 tsp", cost: 0.15, spansWeeks: true },
    { item: "fenugreek seeds", qty: "1/2 tsp", cost: 0.05, spansWeeks: true },
    { item: "coconut oil, salt, tamarind", qty: "to taste", cost: 0.2, spansWeeks: true },
  ],
  method: [
    "Rub the chicken with roasted curry powder, chili, turmeric, a little tamarind and salt; let it marinate while you build the base.",
    "In coconut oil, soften the onion with garlic, ginger, fenugreek, rampe, curry leaves, cinnamon and bruised lemongrass until fragrant and deeply golden.",
    "Add the chicken and tomato and turn over high heat to seal and pick up colour, then pour in just enough thin coconut milk (or water) to half-cover.",
    "Simmer covered until the chicken is tender, finish with the thick coconut milk and reduce uncovered to a glossy, clinging gravy. Taste for salt and a final squeeze of tamarind.",
  ],
  modernMove:
    "Roasting the curry powder to near-black before it ever meets the pot is what makes this a 'dark' curry — the toasted coriander and cumin give a smoky depth that a raw blend can't, so the coconut milk reads savoury, not sweet.",
  notes: "Splitting the coconut milk — thin to braise, thick to finish — keeps it from splitting and curdling.",
  tags: ["sri-lankan", "chicken", "coconut", "curry"],
  sources: [
    {
      title: "Joy of Eating the World — The Best Sri Lankan Chicken Curry (Kukul Mas Kari)",
      url: "https://www.joyofeatingtheworld.com/best-sri-lankan-chicken-curry-kukul-mas-kari-recipe/",
      note: "Roasted-curry-powder marinade, rampe/curry-leaf/lemongrass temper, thin-then-thick coconut milk finish",
    },
  ],
};
