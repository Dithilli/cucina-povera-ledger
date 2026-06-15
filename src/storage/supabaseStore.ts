// Cloud ledger store: load/save a signed-in user's ledger in Supabase.
// Mirrors the browserStore contract but is keyed by user id. Scoring still lives
// in the pure core (computed client-side for now); these rows are raw inputs.
// RLS guarantees a user only ever reads/writes their own rows.

import { supabase } from "../lib/supabase";
import type { Ledger, Entry, Settings } from "../types";
import { DEFAULT_SETTINGS } from "../core/constants";

const CHALLENGE = "cucina-povera";

export async function loadLedger(userId: string): Promise<Ledger> {
  const [settingsRes, entriesRes] = await Promise.all([
    supabase.from("app_settings").select("*").eq("user_id", userId).maybeSingle(),
    supabase.from("entries").select("*").eq("user_id", userId).order("date"),
  ]);
  if (settingsRes.error) throw settingsRes.error;
  if (entriesRes.error) throw entriesRes.error;

  const s = settingsRes.data;
  const settings: Settings = s
    ? {
        calorieTarget: s.calorie_target,
        proteinFloor: s.protein_floor,
        weeklyBudget: Number(s.weekly_budget),
        activeWeek: s.active_week,
      }
    : { ...DEFAULT_SETTINGS };

  const entries: Entry[] = (entriesRes.data ?? []).map((e) => ({
    id: e.id,
    date: e.date,
    week: e.week,
    dish: e.dish,
    calories: e.calories,
    protein: e.protein,
    cost: Number(e.cost),
    zeroWaste: e.zero_waste,
  }));

  return { version: 1, settings, entries };
}

export async function saveLedger(userId: string, ledger: Ledger): Promise<void> {
  const s = ledger.settings;
  const settingsUpsert = supabase.from("app_settings").upsert(
    {
      user_id: userId,
      challenge_slug: CHALLENGE,
      calorie_target: s.calorieTarget,
      protein_floor: s.proteinFloor,
      weekly_budget: s.weeklyBudget,
      active_week: s.activeWeek,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" },
  );

  const rows = ledger.entries.map((e) => ({
    id: e.id,
    user_id: userId,
    challenge_slug: CHALLENGE,
    date: e.date,
    week: e.week,
    dish: e.dish,
    calories: e.calories,
    protein: e.protein,
    cost: e.cost,
    zero_waste: e.zeroWaste,
  }));

  const { error: sErr } = await settingsUpsert;
  if (sErr) throw sErr;

  if (rows.length) {
    const { error } = await supabase.from("entries").upsert(rows, { onConflict: "id" });
    if (error) throw error;
  }

  // Delete rows the ledger no longer contains (entries removed in the UI).
  const { data: existing, error: exErr } = await supabase
    .from("entries")
    .select("id")
    .eq("user_id", userId);
  if (exErr) throw exErr;
  const keep = new Set(ledger.entries.map((e) => e.id));
  const toDelete = (existing ?? []).map((r) => r.id).filter((id) => !keep.has(id));
  if (toDelete.length) {
    const { error } = await supabase.from("entries").delete().in("id", toDelete);
    if (error) throw error;
  }
}
