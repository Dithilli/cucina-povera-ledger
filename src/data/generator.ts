// Client side of the AI menu stylist. Sends deterministic candidate days to the
// `generate-week` Edge Function and gets back Claude's selection + prose. The
// caller re-certifies the result against the engine — this is a suggestion layer
// on top of the pure planner, never the scoring authority.

import { supabase } from "../lib/supabase";

export interface AiDay {
  /** Recipe slug Claude chose for the dinner (validated against candidates). */
  dinner: string;
  blurb: string;
}

export interface AiWeek {
  intro: string;
  days: AiDay[];
}

export interface CandidatePayload {
  dinner: string;
  dinnerTitle: string;
  calories: number;
  protein: number;
  cost: number;
  tags: string[];
}

export interface GenSettings {
  calorieTarget: number;
  proteinFloor: number;
  weeklyBudget: number;
}

export async function generateWeek(
  candidates: CandidatePayload[],
  settings: GenSettings,
): Promise<AiWeek> {
  const { data, error } = await supabase.functions.invoke("generate-week", {
    body: { candidates, settings },
  });
  if (error) throw error;
  if (data && (data as { error?: string }).error) {
    throw new Error((data as { error: string }).error);
  }
  return data as AiWeek;
}
