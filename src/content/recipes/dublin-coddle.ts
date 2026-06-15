import type { Recipe } from "../types";

export const dublinCoddle: Recipe = {
  slug: "dublin-coddle",
  title: "Dublin Coddle",
  cuisine: "irish",
  blurb:
    "The tenement city's Thursday-night pot — pork sausages, streaky bacon, onions and potatoes gently 'coddled' in their own pale, savoury broth until everything is meltingly soft, no browning and no fuss, a supper Jonathan Swift is said to have loved.",
  servings: 4,
  perServing: { calories: 600, protein: 24 },
  estCostPerServing: 2.0,
  roles: ["dinner"],
  ingredients: [
    { item: "good pork sausages", qty: "8", cost: 3.0 },
    { item: "streaky bacon, thick-cut, in pieces", qty: "1/2 lb", cost: 1.8 },
    { item: "potatoes, peeled (half thick chunks, half thin slices)", qty: "1 1/2 lb", cost: 1.0 },
    { item: "onions, thickly sliced", qty: "2", cost: 0.5 },
    { item: "parsley", qty: "small handful", cost: 0.2 },
    { item: "black pepper", qty: "plenty", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Simmer the bacon pieces in a little water for 5 minutes and tip off that first water — it carries away the harshest of the salt.",
    "Layer the onions, then the potatoes (thin slices low down, chunks on top), then the sausages and bacon into a heavy pot, peppering as you go.",
    "Pour in enough fresh water or light stock to just cover, bring slowly to a bare simmer, then cover and cook very gently for 1 1/2 hours.",
    "The thin potatoes melt into a cloudy, savoury broth while the sausages plump and the bacon turns silky — resist the urge to stir it into mush.",
    "Finish with a shower of parsley and ladle into bowls with brown bread, and a glass of stout if you're keeping it Dublin.",
  ],
  modernMove:
    "Skip the browning the tradition forbids and instead blanch the bacon first to pull out the salt, then let some thin-sliced potato disintegrate into the liquid — that's what turns plain boiled water into a coddle worth the name.",
  notes:
    "A true city dish dating to at least the early 1700s, born of using up the week's leftover sausage and bacon. Traditionally pale and unbrowned; modern cooks sometimes sear the sausages for colour.",
  zeroWasteHero: false,
  tags: ["sausage", "bacon", "potato", "stew", "irish"],
  sources: [
    {
      title: "Olivia's Cuisine — Dublin Coddle (Irish Sausage and Potato Stew)",
      url: "https://www.oliviascuisine.com/dublin-coddle/",
      note: "Sausage, bacon, onion and potato gently stewed; blanch bacon first, some potato thickens the broth.",
    },
  ],
};
