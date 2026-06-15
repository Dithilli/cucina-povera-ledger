import type { Recipe } from "../types";

export const appleButter: Recipe = {
  slug: "apple-butter",
  title: "Apple Butter",
  cuisine: "appalachian",
  blurb:
    "Windfall apples cooked down for hours in a copper kettle until the sugars caramelize dark and the spread goes thick and mahogany — the fall-stirring ritual put up in jars to sweeten biscuits and cornbread all winter.",
  servings: 24,
  perServing: { calories: 60, protein: 0 },
  estCostPerServing: 0.25,
  roles: ["base"],
  ingredients: [
    { item: "apples (windfalls, tart and mixed), peeled & chopped", qty: "5 lb", cost: 4.0 },
    { item: "apple cider", qty: "2 cups", cost: 1.0 },
    { item: "brown sugar", qty: "1 1/2 cups", cost: 0.8, spansWeeks: true },
    {
      item: "cinnamon, cloves, allspice, nutmeg",
      qty: "to spice",
      cost: 0.3,
      spansWeeks: true,
    },
    { item: "pinch of salt; splash of cider vinegar", qty: "to finish", cost: 0.05, spansWeeks: true },
  ],
  method: [
    "Cook the chopped apples with the cider in a heavy pot until completely soft, then mash or pass through a food mill to a smooth sauce.",
    "Stir in the brown sugar, spices, salt, and a splash of vinegar to keep the flavor bright.",
    "Cook low and slow, stirring often so it never scorches, for two to three hours on the stove (or six to eight in a slow cooker, lid cracked) as the natural sugars caramelize.",
    "It's done when it mounds on a cold spoon without weeping liquid and has gone dark and glossy.",
    "Pack hot into sterilized jars and process in a boiling-water bath, or refrigerate for near-term spreading on biscuits and cornbread.",
  ],
  modernMove:
    "Hold the heat low and give it the full long simmer — apple butter gets its color and deep flavor from caramelizing the fruit's own sugars, not from added sweetener, which is why the old kettles were stirred for the better part of a day.",
  notes: "Made outdoors in big iron or copper kettles as a communal fall event; turns bruised, unsellable windfalls into the pantry's main sweetener.",
  zeroWasteHero: true,
  tags: ["appalachian", "preserve", "apple", "canning", "foundation", "zero-waste"],
  sources: [
    {
      title: "Appalachian Apple Butter — James Villas, The Glory of Southern Cooking (ckbk)",
      url: "https://app.ckbk.com/recipe/glor76010c14s001ss001r019/appalachian-apple-butter",
      note: "long slow simmer over low heat, mountain kettle tradition, caramelized spiced spread",
    },
  ],
};
