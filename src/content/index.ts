// Barrel for the curated content library: recipes, docs, week plans.
// Re-exports every module and exposes typed aggregate arrays the app reads.

import type { Recipe, ContentDoc, WeekPlan, WeekTheme } from "./types";

export * from "./types";

// Recipes
export * from "./recipes/frittata-di-pasta";
export * from "./recipes/pasta-al-pomodoro-e-tonno";
export * from "./recipes/pasta-alla-norma";
export * from "./recipes/pasta-cacio-e-uova";
export * from "./recipes/pasta-e-ceci";
export * from "./recipes/pasta-e-fagioli";
export * from "./recipes/pasta-e-patate";
export * from "./recipes/spaghetti-con-la-mollica";
export * from "./recipes/uova-in-purgatorio";

// Docs
export * from "./docs/budget";
export * from "./docs/challenge";
export * from "./docs/manifesto";

// Weeks
export * from "./weeks/week-1-pasta";
export * from "./weeks/themes";

import { frittataDiPasta } from "./recipes/frittata-di-pasta";
import { pastaAlPomodoroETonno } from "./recipes/pasta-al-pomodoro-e-tonno";
import { pastaAllaNorma } from "./recipes/pasta-alla-norma";
import { pastaCacioEUova } from "./recipes/pasta-cacio-e-uova";
import { pastaECeci } from "./recipes/pasta-e-ceci";
import { pastaEFagioli } from "./recipes/pasta-e-fagioli";
import { pastaEPatate } from "./recipes/pasta-e-patate";
import { spaghettiConLaMollica } from "./recipes/spaghetti-con-la-mollica";
import { uovaInPurgatorio } from "./recipes/uova-in-purgatorio";

import { budget } from "./docs/budget";
import { challenge } from "./docs/challenge";
import { manifesto } from "./docs/manifesto";

import { week1Pasta } from "./weeks/week-1-pasta";
import {
  week2Bread,
  week3Eggs,
  week4Legumes,
  week5Polenta,
  bonusSicilian,
  bonusGarden,
} from "./weeks/themes";

// The challenge recipe pool — humble cucina povera dishes the menu generator
// may draw from.
export const recipes: Recipe[] = [
  frittataDiPasta,
  pastaAlPomodoroETonno,
  pastaAllaNorma,
  pastaCacioEUova,
  pastaECeci,
  pastaEFagioli,
  pastaEPatate,
  spaghettiConLaMollica,
  uovaInPurgatorio,
];

export const docs: ContentDoc[] = [
  budget,
  challenge,
  manifesto,
];

// The themed arc — all seven Italian weeks. Week 1 is fully built out (it is
// also a WeekPlan); the rest are themes the generator turns into plans.
export const weekThemes: WeekTheme[] = [
  week1Pasta,
  week2Bread,
  week3Eggs,
  week4Legumes,
  week5Polenta,
  bonusSicilian,
  bonusGarden,
];

// Weeks that are fully built out into executable plans (engine + days + shopping).
export const weeks: WeekPlan[] = [
  week1Pasta,
];
