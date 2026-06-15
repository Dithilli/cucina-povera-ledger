// Browser-side persistence.
//
// Canonical data lives in /public/ledger.json (committed to the repo and the
// surface an agent edits via the CLI). The UI fetches it on first load. When a
// human edits in the browser, changes are kept as a local working copy in
// localStorage so the session survives refreshes WITHOUT a backend. The
// "Export" action downloads the working copy so it can be committed back as the
// new canonical ledger.json.
//
// This split is deliberate: a static site can't write back to the repo, so the
// human path is a local overlay and the agent path (CLI -> ledger.json -> commit
// -> redeploy) is canonical. See AGENTS.md > "Data flow".

import type { Ledger } from "../types";
import { defaultLedger } from "../core/ledger";

const LS_KEY = "cucina-povera-ledger:working-copy";

/** Load the working copy if present, otherwise the committed canonical file. */
export async function loadLedger(): Promise<Ledger> {
  const local = readWorkingCopy();
  if (local) return local;
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}ledger.json`, { cache: "no-store" });
    if (res.ok) return (await res.json()) as Ledger;
  } catch {
    /* fall through to an empty ledger */
  }
  return defaultLedger();
}

export function saveWorkingCopy(ledger: Ledger): void {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(ledger));
  } catch {
    /* storage may be unavailable (private mode); the in-memory state still works */
  }
}

function readWorkingCopy(): Ledger | null {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as Ledger) : null;
  } catch {
    return null;
  }
}

/** Discard the local working copy so the next load reads canonical ledger.json. */
export function clearWorkingCopy(): void {
  try {
    localStorage.removeItem(LS_KEY);
  } catch {
    /* ignore */
  }
}

export function hasWorkingCopy(): boolean {
  return readWorkingCopy() !== null;
}

/** Trigger a download of ledger.json the user can commit to the repo. */
export function exportLedger(ledger: Ledger): void {
  const blob = new Blob([JSON.stringify(ledger, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ledger.json";
  a.click();
  URL.revokeObjectURL(url);
}
