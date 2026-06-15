import type { Recipe } from "../types";

export const kiltGreens: Recipe = {
  slug: "kilt-greens",
  title: "Kilt Greens with Sidemeat",
  cuisine: "appalachian",
  blurb:
    "A mess of wild spring greens — creasy, turnip, or carefully boiled-down poke sallet — stewed soft with a piece of streaked sidemeat until the pot likker runs dark and pork-rich.",
  servings: 4,
  perServing: { calories: 480, protein: 18 },
  estCostPerServing: 0.95,
  roles: ["dinner"],
  ingredients: [
    { item: "creasy, turnip, or poke greens", qty: "2 lb, well washed", cost: 1.6 },
    { item: "streaked sidemeat or salt pork", qty: "3 oz", cost: 0.9 },
    { item: "onion", qty: "1/2, chopped", cost: 0.2 },
    { item: "salt, pepper, splash of vinegar", qty: "to taste", cost: 0.1, spansWeeks: true },
    { item: "skillet cornbread", qty: "4 wedges", cost: 1.0 },
  ],
  method: [
    "Wash the greens through several changes of cold water to get all the grit out, and pick out tough stems.",
    "SAFETY for poke sallet: never eat it raw. Boil the young shoots and leaves hard for ~10 minutes, drain and rinse, then boil a SECOND time in fresh water until very tender and drain again — this is what makes pokeweed safe to eat. (Skip this for creasy or turnip greens.)",
    "Render the diced sidemeat in a deep pot, add the onion to soften, then pile in the greens with a little water and the pork's grease.",
    "Cover and stew low 45 minutes to an hour for hardy greens, until silky and tender and the pot likker has gone dark.",
    "Season with salt, pepper, and a splash of vinegar; serve in bowls with their likker and cornbread to sop it up.",
  ],
  modernMove:
    "Save the pot likker — that dark, pork-and-mineral broth left under the greens is prized in its own right, drunk from the bowl or soaked into cornbread.",
  notes:
    "Poke (pokeweed) is toxic raw and must be twice-boiled in changed water before it's safe; only ever use the young spring shoots. Creasy and turnip greens need no parboiling.",
  zeroWasteHero: false,
  tags: ["greens", "appalachian", "pork", "spring"],
  sources: [
    {
      title: "Poke Salad Recipe & Benefits — Wild Abundance",
      url: "https://www.wildabundance.net/blog/pokeweed/",
      note: "the twice-boil, change-the-water method that makes young poke sallet safe before stewing with sidemeat",
    },
  ],
};
