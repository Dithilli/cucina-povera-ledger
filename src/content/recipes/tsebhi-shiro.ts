import type { Recipe } from "../types";

export const tsebhiShiro: Recipe = {
  slug: "tsebhi-shiro",
  title: "Tsebhi Shiro (Eritrean Shiro)",
  cuisine: "ethiopian",
  blurb:
    "Eritrea's shiro — the same velvety spiced chickpea-flour stew, served bubbling in a small clay pot. The everyday dish that crosses the border without changing a thing.",
  servings: 4,
  perServing: { calories: 280, protein: 13 },
  estCostPerServing: 0.5,
  roles: ["dinner", "lunch"],
  ingredients: [
    { item: "shiro powder", qty: "1 cup", cost: 1.2 },
    { item: "onion, finely chopped", qty: "1", cost: 0.4 },
    { item: "tomato, chopped", qty: "1", cost: 0.3 },
    { item: "garlic", qty: "3 cloves", cost: 0.2, spansWeeks: true },
    { item: "berbere", qty: "1 tbsp", cost: 0.25, spansWeeks: true },
    { item: "oil or niter kibbeh", qty: "2 tbsp", cost: 0.3, spansWeeks: true },
    { item: "salt", qty: "to taste", spansWeeks: true },
  ],
  method: [
    "Soften the onion in the oil, add garlic and tomato, and cook to a soft base. Bloom the berbere in the fat for a minute.",
    "Slurry the shiro powder into 2 cups hot water until lump-free, then pour into the pot, whisking.",
    "Simmer 10–15 minutes, stirring, until thick and velvety. Loosen with hot water to taste; salt.",
    "Serve sizzling, ideally in a small clay pot ('tsebhi shiro' often arrives still bubbling), with injera/taita.",
  ],
  modernMove:
    "Same clump-killing slurry trick as Ethiopian shiro. The Eritrean touch is the tomato in the base and serving it in a screaming-hot clay pot so it keeps cooking and stays loose at the table.",
  notes:
    "Shiro is the great shared everyday dish — order it in Asmara or Addis and you get the same bowl. The clay-pot service is the tell of an Eritrean kitchen.",
  tags: ["shiro", "chickpea", "eritrean", "wot", "dinner"],
  sources: [
    { title: "Culinary Creations — Eritrean Shiro (Tsebhi Shiro)", url: "https://culinarycreationss.com/recipe/eritrean-shiro-recipe-vegan-gluten-free", note: "Eritrean shiro from ground chickpea/broad-bean flour — the same everyday stew across the border." },
    { title: "196 flavors — Shiro Wot", url: "https://www.196flavors.com/shiro-wot/", note: "The shiro technique, including the thick clay-pot tegabino style served bubbling." },
  ],
};
