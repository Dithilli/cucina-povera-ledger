import type { WeekGroup } from "../../types";
import { money, shortWeek } from "../format";

/**
 * Minimal bar chart: one bar per week, height proportional to cost-per-100g of
 * protein. Hand-rolled with divs so there's no charting dependency to learn or
 * break — to change the metric, swap `summary.costPerProtein` below.
 */
export function WeekChart({ groups }: { groups: WeekGroup[] }) {
  const data = groups
    .filter((g) => g.summary.costPerProtein != null)
    .map((g) => ({ week: g.week, value: g.summary.costPerProtein as number }));

  if (data.length === 0) return null;

  const max = Math.max(...data.map((d) => d.value));

  return (
    <section className="chart-block">
      <h2>The reckoning, week by week</h2>
      <p className="chart-sub">
        Cost per 100g of protein — the line where pasta weeks pay their tax and bean weeks
        shine. Lower is better.
      </p>
      <div className="bars">
        {data.map((d) => (
          <div className="bar-col" key={d.week}>
            <span className="bar-val">{money(d.value)}</span>
            <div
              className="bar"
              style={{ height: `${Math.max(4, (d.value / max) * 100)}%` }}
              title={`${d.week}: ${money(d.value)} per 100g protein`}
            />
            <span className="bar-label">{shortWeek(d.week)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
