#!/usr/bin/env tsx
/**
 * Cucina Povera ledger CLI — the surface an agent uses to LOG and READ days.
 *
 * It reads and writes the canonical data file (public/ledger.json) using the
 * same pure core as the web UI, so the two can never disagree about what a
 * "kept" day is or how the efficiency stats are computed.
 *
 * Run with: npm run ledger -- <command> [flags]
 *
 *   add      Add (or amend, via --id) a day's entry
 *   list     Print entries, optionally filtered by --week
 *   stats    Print the reckoning for a week (or all weeks)
 *   set      Update a target setting
 *   validate Check the data file against the schema
 *
 * Examples:
 *   npm run ledger -- add --date 2026-06-14 --week "Week 1 — Pasta" \
 *       --dish "pasta e ceci" --calories 1950 --protein 105 --cost 7.50 --waste
 *   npm run ledger -- stats --week "Week 1 — Pasta"
 *   npm run ledger -- list
 *
 * After editing, commit public/ledger.json — the deployed site reads it on load.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import type { Entry, Ledger } from "../src/types";
import {
  upsertEntry,
  removeEntry,
  updateSettings,
  validateEntry,
  dayPasses,
  currentStreak,
  weekGroups,
  weekSummary,
  makeId,
  defaultLedger,
} from "../src/core/ledger";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DATA = join(ROOT, "public", "ledger.json");

function load(): Ledger {
  if (!existsSync(DATA)) return defaultLedger();
  return JSON.parse(readFileSync(DATA, "utf8")) as Ledger;
}
function save(l: Ledger): void {
  writeFileSync(DATA, JSON.stringify(l, null, 2) + "\n");
}

/** Parse `--key value` pairs and boolean flags like `--waste` / `--no-waste`. */
function parseArgs(argv: string[]): Record<string, string | boolean> {
  const out: Record<string, string | boolean> = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith("--")) continue;
    const key = a.slice(2);
    if (key.startsWith("no-")) {
      out[key.slice(3)] = false;
    } else if (i + 1 < argv.length && !argv[i + 1].startsWith("--")) {
      out[key] = argv[++i];
    } else {
      out[key] = true;
    }
  }
  return out;
}

const m = (n: number) => `$${n.toFixed(2)}`;
const mn = (n: number | null) => (n == null ? "—" : m(n));

function cmdAdd(args: Record<string, string | boolean>): void {
  const l = load();
  const waste = args.waste === undefined ? true : Boolean(args.waste);
  const entry: Entry = {
    id: (args.id as string) || makeId(),
    date: String(args.date ?? ""),
    week: String(args.week ?? l.settings.activeWeek),
    dish: String(args.dish ?? ""),
    calories: Number(args.calories ?? 0),
    protein: Number(args.protein ?? 0),
    cost: Number(args.cost ?? 0),
    zeroWaste: waste,
  };
  const v = validateEntry(entry);
  if (!v.ok) {
    console.error("Invalid entry:\n  - " + v.errors.join("\n  - "));
    process.exit(1);
  }
  save(upsertEntry(l, entry));
  const kept = dayPasses(entry, l.settings);
  console.log(
    `Logged ${entry.date} (${entry.week}): ${entry.calories} kcal, ${entry.protein}g, ${m(
      entry.cost
    )} — ${kept ? "kept ✓" : "missed"}`
  );
}

function cmdRemove(args: Record<string, string | boolean>): void {
  const l = load();
  if (!args.id) {
    console.error("remove requires --id");
    process.exit(1);
  }
  save(removeEntry(l, String(args.id)));
  console.log(`Removed ${args.id}`);
}

function cmdList(args: Record<string, string | boolean>): void {
  const l = load();
  const week = args.week ? String(args.week) : null;
  const rows = l.entries
    .filter((e) => !week || e.week === week)
    .sort((a, b) => (a.date < b.date ? -1 : 1));
  if (rows.length === 0) {
    console.log("No entries.");
    return;
  }
  for (const e of rows) {
    const kept = dayPasses(e, l.settings) ? "✓" : " ";
    console.log(
      `${kept} ${e.date}  ${String(e.calories).padStart(4)}kcal ${String(e.protein).padStart(
        3
      )}g ${m(e.cost).padStart(7)}  ${e.dish}  [${e.id}]`
    );
  }
}

function cmdStats(args: Record<string, string | boolean>): void {
  const l = load();
  const week = args.week ? String(args.week) : null;
  if (week) {
    const s = weekSummary(l, week);
    console.log(`${week}`);
    console.log(`  days logged     ${s.days}`);
    console.log(`  spend           ${m(s.cost)} of ${m(l.settings.weeklyBudget)} budget`);
    console.log(`  avg calories    ${s.avgCalories} (target ${l.settings.calorieTarget})`);
    console.log(`  avg protein     ${s.avgProtein}g (floor ${l.settings.proteinFloor}g)`);
    console.log(`  $ / 1,000 kcal  ${mn(s.costPerKcal)}`);
    console.log(`  $ / 100g protein ${mn(s.costPerProtein)}`);
  } else {
    console.log(`Streak: ${currentStreak(l)} days kept\n`);
    for (const g of weekGroups(l)) {
      console.log(
        `${g.week.padEnd(20)} ${m(g.summary.cost).padStart(8)}  ${mn(
          g.summary.costPerProtein
        ).padStart(7)}/100g  ${g.summary.avgCalories}kcal avg`
      );
    }
  }
}

function cmdSet(args: Record<string, string | boolean>): void {
  const l = load();
  const patch: Record<string, number | string> = {};
  if (args.calories !== undefined) patch.calorieTarget = Number(args.calories);
  if (args.protein !== undefined) patch.proteinFloor = Number(args.protein);
  if (args.budget !== undefined) patch.weeklyBudget = Number(args.budget);
  if (args.week !== undefined) patch.activeWeek = String(args.week);
  save(updateSettings(l, patch));
  console.log("Settings updated:", patch);
}

function cmdValidate(): void {
  const l = load();
  let bad = 0;
  for (const e of l.entries) {
    const v = validateEntry(e);
    if (!v.ok) {
      bad++;
      console.error(`✗ ${e.id} (${e.date}): ${v.errors.join("; ")}`);
    }
  }
  if (bad === 0) console.log(`OK — ${l.entries.length} entries valid, schema v${l.version}.`);
  else process.exit(1);
}

const [, , cmd, ...rest] = process.argv;
const args = parseArgs(rest);

switch (cmd) {
  case "add":
    cmdAdd(args);
    break;
  case "remove":
    cmdRemove(args);
    break;
  case "list":
    cmdList(args);
    break;
  case "stats":
    cmdStats(args);
    break;
  case "set":
    cmdSet(args);
    break;
  case "validate":
    cmdValidate();
    break;
  default:
    console.log(
      "Commands: add | remove | list | stats | set | validate\n" +
        'Example: npm run ledger -- add --date 2026-06-14 --dish "pasta e ceci" ' +
        "--calories 1950 --protein 105 --cost 7.50 --waste"
    );
}
