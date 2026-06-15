import type { Recipe } from "../types";

export const laax: Recipe = {
  slug: "laax",
  title: "Laax",
  cuisine: "senegalese",
  blurb:
    "Warm millet porridge cooled under a sweet-tart pool of curdled milk — the gentle one-bowl supper Senegalese families eat at baptisms and at the close of Ramadan.",
  servings: 4,
  perServing: { calories: 480, protein: 14 },
  estCostPerServing: 1.1,
  roles: ["dinner"],
  ingredients: [
    { item: "crushed millet (sankhal) or millet couscous", qty: "2 cups", cost: 1.4 },
    { item: "curdled milk / soured milk (sow) or plain yogurt", qty: "2 cups", cost: 1.2 },
    { item: "sugar", qty: "3 tbsp", cost: 0.15, spansWeeks: true },
    { item: "raisins", qty: "1/4 cup", cost: 0.4 },
    { item: "vanilla", qty: "1/2 tsp", cost: 0.1, spansWeeks: true },
    { item: "nutmeg, pinch", qty: "1 pinch", cost: 0.05, spansWeeks: true },
    { item: "butter", qty: "1 tbsp", cost: 0.15, spansWeeks: true },
    { item: "salt", qty: "1 pinch" },
  ],
  method: [
    "Bring a pot of lightly salted water to a boil, stir in the crushed millet, and cook gently about 30 minutes, stirring, until the grain is soft and the porridge thick.",
    "Off the heat, fold in the butter, a little of the sugar, the nutmeg, and the raisins; let the porridge cool to barely warm or room temperature.",
    "Whisk the soured milk (or yogurt) with the remaining sugar and the vanilla until smooth and pourable.",
    "Spoon the cooled millet into bowls and flood the top with the sweet-tart milk so each bite is half grain, half cream.",
    "Serve cool — laax is meant as a soothing light supper, not a hot dish.",
  ],
  modernMove:
    "Letting the millet cool fully before the milk goes on is the point: pour soured milk onto hot porridge and it splits and sours wrong; cold, the contrast of warm grain and tangy cream is the whole pleasure.",
  notes:
    "Eaten at baptisms and to break the Ramadan fast. Lakh sow, the richer version, uses thick cream (sow) instead of thinner soured milk.",
  tags: ["millet", "porridge", "soured-milk", "light-supper", "senegalese"],
  sources: [
    {
      title: "Travel Senegal — Guide to Local Food (Lakh / Laax)",
      url: "https://travelsenegal.wordpress.com/home/senegal-fyis/guide-to-local-food/",
      note: "Millet porridge served cool under sweetened curdled milk (sow) for baptisms and end of Ramadan.",
    },
  ],
};
