import type { Recipe } from "../types";

export const bassiSalte: Recipe = {
  slug: "bassi-salte",
  title: "Bassi-Salté",
  cuisine: "senegalese",
  blurb:
    "Festival millet couscous under a sweet-savory sauce of stewed meat, root vegetables, and white beans, threaded with raisins — the ancestral grain dressed for Tamkharit.",
  servings: 4,
  perServing: { calories: 600, protein: 24 },
  estCostPerServing: 2.1,
  roles: ["dinner"],
  ingredients: [
    { item: "millet couscous (thiéré)", qty: "2 cups", cost: 1.4 },
    { item: "stewing beef or mutton, cubed", qty: "8 oz", cost: 2.4 },
    { item: "white beans (niébé), cooked", qty: "1 cup", cost: 0.4 },
    { item: "carrot, cassava, and sweet potato, chunked", qty: "3 cups total", cost: 1.2 },
    { item: "cabbage wedge", qty: "1/4 head", cost: 0.4 },
    { item: "onion", qty: "1 large", cost: 0.3 },
    { item: "tomato paste", qty: "2 tbsp", cost: 0.2 },
    { item: "raisins", qty: "1/4 cup", cost: 0.4 },
    { item: "garlic, kaani (scotch bonnet), maggi cube", qty: "to taste", cost: 0.3, spansWeeks: true },
    { item: "oil", qty: "2 tbsp", cost: 0.1, spansWeeks: true },
    { item: "salt, black pepper", qty: "to taste" },
  ],
  method: [
    "Marinate the meat 30 minutes with crushed garlic, salt, and pepper. Brown it in oil in a deep pot, then stir in the tomato paste and let it caramelize.",
    "Dissolve a maggi cube in water, pour it in, and add the carrot, cassava, sweet potato, and the whole scotch bonnet. Simmer 30 minutes until the roots begin to soften.",
    "Add the cabbage, white beans, and raisins; simmer another 20 minutes until the meat is tender and the sauce is thick and faintly sweet.",
    "Meanwhile steam the millet couscous in two rounds — dampen, rake, steam 20 minutes, repeat — until tender and loose.",
    "Bed the platter with the millet and beans, top with the meat and vegetable chunks, and pour the sweet-savory sauce generously over all.",
  ],
  modernMove:
    "The raisins aren't decoration — their slow sweetness against the fermented, peppery base is the signature of a Tamkharit bassi, balancing the salt of the stew the way honey balances a tagine.",
  notes:
    "A holiday dish eaten at Tamkharit (Achoura). Diaguas — little mutton meatballs — are the traditional flourish if you want to stretch the meat further.",
  tags: ["millet", "couscous", "beef", "white-beans", "festival", "senegalese"],
  sources: [
    {
      title: "Wikibooks Cookbook — Bassi-Salté (Senegalese Couscous with Meat and Vegetables)",
      url: "https://en.wikibooks.org/wiki/Cookbook:Bassi-Salt%C3%A9_(Senegalese_Couscous_with_Meat_and_Vegetables)",
      note: "Meat-and-root-vegetable sauce over millet couscous with white beans and raisins for Tamkharit.",
    },
  ],
};
