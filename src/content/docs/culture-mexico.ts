import type { ContentDoc } from "../types";

// Challenge #2 overview essay — the "big one" cultural context for Mexico.
// Prose source: docs/challenges/mexican.md. When ContentDoc gains a `cuisine`
// tag, this should carry cuisine: "mexican".

export const cultureMexico: ContentDoc = {
  slug: "culture-mexico",
  title: "Sin maíz no hay país",
  kind: "essay",
  body: `# Sin maíz no hay país — "without corn, there is no country"

Mexican food is the longest-running frugality experiment on the planet — about
nine thousand years of feeding people on corn, beans, chilies, and squash, and
making it taste like a celebration. Long before there was a Mexico, the peoples
of Mesoamerica built a civilization on one brilliant agricultural idea, and one
brilliant kitchen-chemistry one.

## The milpa and the Three Sisters

The idea is the **milpa** — not a field of one crop but a polyculture where corn,
beans, and squash grow together. Corn gives the beans a pole to climb; beans fix
nitrogen back into the soil; squash shades out the weeds. And on the plate the
same trio does something quietly miraculous. **Corn lacks the amino acids lysine
and tryptophan; beans have them in abundance but lack methionine, which corn
supplies.** Eaten together — a tortilla and a spoon of beans — they form a
*complete protein*, close to meat, for pennies. Indigenous farmers worked this
out by observation millennia before biochemistry named it.

## Nixtamalization — 3,500-year-old bio-engineering

Dried corn is soaked and cooked in an alkaline solution of lime or wood ash —
**nixtamalization**, discovered around 1500 BCE. It looks like sorcery: it
releases the corn's bound niacin (preventing the deficiency disease *pellagra*
that later devastated corn-eating Europeans who skipped the step), softens the
grain so it grinds into *masa*, and deepens its flavor. Every tortilla, tamal,
and bowl of pozole descends from this act. Corn was so central it was sacred — in
the Maya *Popol Vuh*, the gods make the first humans out of maize. People made of
corn, eating corn; the cuisine never forgot it.

## The encounter, and meat as seasoning

After 1521 the Spanish brought pork, lard, chicken, cheese, onions, garlic,
citrus, rice. What grew from the collision is *mestizo* cooking — Old World
ingredients folded into an unbroken Indigenous grammar of corn, chile, and
tomato. Crucially the expensive imports became **seasonings, not centers**: a
little lard to enrich the beans, a fistful of shredded chicken to fill a taco, a
crumble of queso fresco on top. Meat stretches; the milpa carries.

## No se tira nada

The everyday economy of this food is the *fonda* and the *mercado*, where the
daily *comida corrida* feeds a worker a full meal for almost nothing, and where
**no se tira nada — nothing is thrown away** — rules as firmly as in any Italian
nonna's kitchen. Stale tortillas become *chilaquiles*; yesterday's beans become
*refritos*; bones become *caldo*; the whole squash plant goes in the pot.

This challenge is about cooking the way most Mexicans actually have for nine
millennia: corn and beans at the center, chile doing the work that money can't,
nothing wasted, a feast made from almost nothing. The constraint isn't a
hardship — it's the entire reason the food is this good.`,
};
