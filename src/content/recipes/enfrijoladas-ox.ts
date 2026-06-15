import type { Recipe } from "../types";

export const enfrijoladasOx: Recipe = {
  slug: "enfrijoladas-ox",
  title: "Enfrijoladas",
  cuisine: "oaxacan",
  blurb:
    "Corn tortillas bathed in a silky purée of Oaxacan black beans perfumed with avocado leaf, folded and smothered in more sauce, then strewn with crumbled quesillo, crema, and raw onion.",
  servings: 4,
  perServing: { calories: 430, protein: 18 },
  estCostPerServing: 0.7,
  roles: ["dinner"],
  ingredients: [
    { item: "cooked black beans with their broth", qty: "2 cups", cost: 0.5 },
    { item: "corn tortillas (day-old are ideal)", qty: "12", cost: 0.8 },
    { item: "dried avocado leaf (hoja de aguacate)", qty: "1", cost: 0.1, spansWeeks: true },
    { item: "chile pasilla or chile de árbol", qty: "1–2", cost: 0.2 },
    { item: "white onion, garlic", qty: "1/2 onion + 1 clove", cost: 0.3, spansWeeks: true },
    { item: "quesillo (Oaxaca string cheese), crumbled", qty: "1/2 cup", cost: 0.8, spansWeeks: true },
    { item: "Mexican crema", qty: "1/2 cup", cost: 0.5, spansWeeks: true },
    { item: "manteca or oil, salt", qty: "as needed", spansWeeks: true },
  ],
  method: [
    "Toast the avocado leaf and chile briefly on a dry comal, then blend with the beans, their broth, onion, garlic, and salt until completely smooth and pourable.",
    "Fry the bean purée in a little manteca, simmering until it thickens to a sauce that visibly coats a tortilla.",
    "Warm each tortilla until pliable, dip it fully in the hot bean sauce, and fold into quarters; lay onto plates and ladle more sauce over.",
    "Finish with crumbled quesillo, a drizzle of crema, raw onion rings, and — to round it into dinner — a fried egg.",
  ],
  modernMove:
    "Toasting a single avocado leaf into the bean blend gives the sauce the anise-edged Oaxacan accent; then fry the purée hard until it gleams, which is what turns thin bean water into a true frijol sauce.",
  notes: "The original leftovers dinner: yesterday's pot of black beans and stale tortillas become tonight's plate.",
  zeroWasteHero: true,
  tags: ["antojito", "frijoles", "oaxacan", "zero-waste"],
  sources: [
    {
      title: "Mely Martínez — Mexico in My Kitchen (Enfrijoladas)",
      url: "https://www.mexicoinmykitchen.com/enfrijoladas-recipe-corn-tortillas/",
      note: "blending beans to a smooth pourable sauce and the dip-and-fold tortilla method",
    },
  ],
};
