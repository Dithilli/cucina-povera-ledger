import { useMemo, useState } from "react";
import type { ShoppingList as ShoppingListData, ShoppingCategory } from "../../core/shopping";
import { shoppingListToText } from "../../core/shopping";
import { money } from "../format";

/** Renders a consolidated shopping list grouped by aisle, with checkable items
 *  and a copy-to-clipboard export. Pure presentation over the core engine's
 *  ShoppingList — all aggregation already happened in src/core/shopping.ts. */
export function ShoppingList({ list, title }: { list: ShoppingListData; title: string }) {
  const [checked, setChecked] = useState<Set<string>>(() => new Set());
  const [copied, setCopied] = useState(false);

  const groups = useMemo(() => {
    const out: { category: ShoppingCategory; lines: ShoppingListData["lines"] }[] = [];
    for (const l of list.lines) {
      let g = out[out.length - 1];
      if (!g || g.category !== l.category) {
        g = { category: l.category, lines: [] };
        out.push(g);
      }
      g.lines.push(l);
    }
    return out;
  }, [list]);

  if (list.lines.length === 0) {
    return <p className="shop-empty">No shopping list for this week yet.</p>;
  }

  const toggle = (key: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const copy = () => {
    try {
      void navigator.clipboard.writeText(shoppingListToText(list, title));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  const remaining = list.lines.filter((l) => !checked.has(l.key)).length;

  return (
    <div className="shopping-list">
      <div className="shop-head">
        <span className="shop-totals">
          <b>{money(list.totalCost)}</b>{" "}
          {list.dishCount > 0 ? (
            <>
              for {list.dishCount} dinners · fresh {money(list.freshCost)} · pantry{" "}
              {money(list.pantryCost)}
            </>
          ) : (
            <>first shop · fresh {money(list.freshCost)} · pantry {money(list.pantryCost)}</>
          )}
        </span>
        <span className="shop-actions">
          <span className="shop-count">
            {remaining}/{list.lines.length} left
          </span>
          <button type="button" className="linkbtn" onClick={copy}>
            {copied ? "Copied ✓" : "Copy list"}
          </button>
        </span>
      </div>
      {groups.map((g) => (
        <div className="shop-aisle" key={g.category}>
          <h5 className="shop-aisle-name">{g.category}</h5>
          <ul>
            {g.lines.map((l) => {
              const on = checked.has(l.key);
              return (
                <li key={l.key} className={`shop-item${on ? " checked" : ""}${l.pantry ? " pantry" : ""}`}>
                  <label>
                    <input type="checkbox" checked={on} onChange={() => toggle(l.key)} />
                    <span className="shop-item-name">{l.item}</span>
                    {l.quantities.length > 0 && (
                      <span className="shop-qty">{l.quantities.join(" + ")}</span>
                    )}
                    {l.pantry && <span className="shop-tag">pantry</span>}
                    {l.cost > 0 && <span className="shop-cost">{money(l.cost)}</span>}
                  </label>
                  {l.note && <span className="shop-note">{l.note}</span>}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
