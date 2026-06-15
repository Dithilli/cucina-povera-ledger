// Display formatting. Currency is USD because the challenge is priced against a
// California grocery run; change `CURRENCY` if you relocate the challenge.
export const CURRENCY = "$";

export const money = (n: number): string => `${CURRENCY}${n.toFixed(2)}`;

export const moneyOrDash = (n: number | null): string => (n == null ? "—" : money(n));

/** "2026-06-14" -> "Sun Jun 14" (parsed as local, no timezone drift). */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function todayISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

/** Short week label for tight spaces: "Week 1 — Pasta" -> "Pasta". */
export function shortWeek(week: string): string {
  return week.replace(/^Week \d+ — /, "").replace(/^Bonus — /, "");
}
