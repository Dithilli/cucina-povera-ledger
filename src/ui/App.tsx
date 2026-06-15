import { useEffect, useMemo, useState } from "react";
import type { Entry, Ledger } from "../types";
import {
  defaultLedger,
  upsertEntry,
  removeEntry,
  updateSettings,
  dayPasses,
  currentStreak,
  weekGroups,
  weekSummary,
  makeId,
  validateEntry,
} from "../core/ledger";
import {
  loadLedger,
  saveWorkingCopy,
  exportLedger,
  clearWorkingCopy,
  hasWorkingCopy,
} from "../storage/browserStore";
import { listWeeks } from "../data/content";
import type { WeekTheme } from "../content/types";
import { money, moneyOrDash, formatDate, todayISO } from "./format";
import { WeekChart } from "./components/WeekChart";
import { Challenge } from "./Challenge";
import { About } from "./About";
import * as cloud from "../storage/supabaseStore";
import { useSession } from "./useSession";
import { supabase } from "../lib/supabase";
import type { User } from "@supabase/supabase-js";
import { Gear, Check, Trash, Pencil, Flame, Plus, Close } from "./icons";

// The active challenge. The app is generic over challenges; for now it serves
// this one. Content (weeks/recipes/docs) is read from the DB by slug — not
// hardcoded. Later this becomes a route/selection.
const CHALLENGE_SLUG = "cucina-povera";

type View = "about" | "ledger" | "challenge";

const blankForm = () => ({
  date: todayISO(),
  dish: "",
  calories: "",
  protein: "",
  cost: "",
  zeroWaste: true,
});

export default function App() {
  const [ledger, setLedger] = useState<Ledger>(defaultLedger());
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState<View>("about");
  const [weeks, setWeeks] = useState<WeekTheme[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(blankForm());
  const [localCopy, setLocalCopy] = useState(false);
  const { user } = useSession();

  // Week options come from the DB, not a hardcoded preset list.
  useEffect(() => {
    listWeeks(CHALLENGE_SLUG)
      .then(setWeeks)
      .catch(() => setWeeks([]));
  }, []);

  // The ledger loads (and reloads) for the current identity: from the cloud when
  // signed in, from the local working copy when anonymous.
  useEffect(() => {
    setLoaded(false);
    const load = user ? cloud.loadLedger(user.id) : loadLedger();
    load
      .then((l) => {
        setLedger(l);
        setLocalCopy(user ? false : hasWorkingCopy());
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, [user]);

  const commit = (next: Ledger) => {
    setLedger(next);
    if (user) {
      void cloud.saveLedger(user.id, next).catch((e) => console.error(e));
    } else {
      saveWorkingCopy(next);
      setLocalCopy(true);
    }
  };

  const { settings } = ledger;

  // Dropdown options: DB week titles, with the current selection always present
  // (so a custom/legacy activeWeek never vanishes, and it's never empty on load).
  const weekOptions = useMemo(() => {
    const titles = weeks.map((w) => w.title);
    return titles.includes(settings.activeWeek)
      ? titles
      : [settings.activeWeek, ...titles];
  }, [weeks, settings.activeWeek]);

  const submit = () => {
    const candidate: Entry = {
      id: editingId ?? makeId(),
      date: form.date,
      week: settings.activeWeek,
      dish: form.dish.trim(),
      calories: parseInt(form.calories, 10) || 0,
      protein: parseInt(form.protein, 10) || 0,
      cost: parseFloat(form.cost) || 0,
      zeroWaste: form.zeroWaste,
    };
    if (!validateEntry(candidate).ok) return;
    commit(upsertEntry(ledger, candidate));
    setForm(blankForm());
    setEditingId(null);
  };

  const startEdit = (e: Entry) => {
    setEditingId(e.id);
    setForm({
      date: e.date,
      dish: e.dish,
      calories: String(e.calories),
      protein: String(e.protein),
      cost: String(e.cost),
      zeroWaste: e.zeroWaste,
    });
    if (e.week !== settings.activeWeek) commit(updateSettings(ledger, { activeWeek: e.week }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(blankForm());
  };

  const groups = useMemo(() => weekGroups(ledger), [ledger]);
  const streak = useMemo(() => currentStreak(ledger), [ledger]);
  const active = useMemo(
    () => weekSummary(ledger, settings.activeWeek),
    [ledger, settings.activeWeek]
  );

  const overBudget = active.cost > settings.weeklyBudget;
  const budgetPct = Math.min(100, Math.round((active.cost / settings.weeklyBudget) * 100) || 0);

  const resetToCommitted = () => {
    clearWorkingCopy();
    loadLedger().then((l) => {
      setLedger(l);
      setLocalCopy(false);
    });
  };

  if (!loaded) {
    return (
      <div className="libretto">
        <div className="loading">Opening the ledger…</div>
      </div>
    );
  }

  return (
    <div className="libretto">
      <div className="sheet">
        <header className="masthead">
          <div>
            <div className="eyebrow">Il libretto · the account book</div>
            <h1>Cucina Povera Challenge</h1>
          </div>
          <div className="toolbtns">
            <AuthBar user={user} />
            {view === "ledger" && (
              <button
                className="iconbtn"
                onClick={() => setShowSettings((v) => !v)}
                aria-label="Edit targets"
              >
                <Gear size={18} />
              </button>
            )}
          </div>
        </header>

        <nav className="tabs">
          <button
            className={`tab ${view === "about" ? "on" : ""}`}
            onClick={() => setView("about")}
          >
            What this is
          </button>
          <button
            className={`tab ${view === "ledger" ? "on" : ""}`}
            onClick={() => setView("ledger")}
          >
            The ledger
          </button>
          <button
            className={`tab ${view === "challenge" ? "on" : ""}`}
            onClick={() => setView("challenge")}
          >
            The challenge
          </button>
        </nav>

        {view === "about" && (
          <About
            slug={CHALLENGE_SLUG}
            onStartLedger={() => setView("ledger")}
            onBrowseChallenge={() => setView("challenge")}
          />
        )}

        {view === "challenge" && <Challenge slug={CHALLENGE_SLUG} />}

        {view === "ledger" && (
          <>
            <div className="weekbar">
              <label className="lbl" htmlFor="week">
                Cooking
              </label>
              <select
                id="week"
                value={settings.activeWeek}
                onChange={(e) => commit(updateSettings(ledger, { activeWeek: e.target.value }))}
              >
                {weekOptions.map((w) => (
                  <option key={w}>{w}</option>
                ))}
              </select>
              <span className="spacer" />
              <button className="linkbtn" onClick={() => exportLedger(ledger)}>
                Export ledger.json
              </button>
              {localCopy && (
                <button className="linkbtn" onClick={resetToCommitted} title="Discard local edits">
                  Reset to committed
                </button>
              )}
            </div>

            {showSettings && (
              <div className="settings">
                <div className="set-row">
                  <NumField
                    label="Calorie target"
                    value={settings.calorieTarget}
                    onChange={(v) => commit(updateSettings(ledger, { calorieTarget: v }))}
                    suffix="kcal"
                  />
                  <NumField
                    label="Protein floor"
                    value={settings.proteinFloor}
                    onChange={(v) => commit(updateSettings(ledger, { proteinFloor: v }))}
                    suffix="g"
                  />
                  <NumField
                    label="Weekly budget"
                    value={settings.weeklyBudget}
                    onChange={(v) => commit(updateSettings(ledger, { weeklyBudget: v }))}
                    prefix="$"
                  />
                </div>
                <p className="set-note">
                  A day counts as kept when it lands at or under the calorie target, meets the
                  protein floor, and wastes nothing.
                </p>
              </div>
            )}

            <section className="reckoning">
              <div className="tile">
                <div className="tile-top">
                  <Flame size={13} />
                  <span>Streak</span>
                </div>
                <div className="tile-num">{streak}</div>
                <div className="tile-sub">days kept</div>
              </div>
              <div className={`tile ${overBudget ? "alert" : ""}`}>
                <div className="tile-top">
                  <span>This week</span>
                </div>
                <div className="tile-num">{money(active.cost)}</div>
                <div className="tile-sub">of {money(settings.weeklyBudget)} budget</div>
                <div className="meter">
                  <span style={{ width: `${budgetPct}%` }} />
                </div>
              </div>
              <div className="tile">
                <div className="tile-top">
                  <span>$ / 1,000 kcal</span>
                </div>
                <div className="tile-num">{moneyOrDash(active.costPerKcal)}</div>
                <div className="tile-sub">this week</div>
              </div>
              <div className="tile">
                <div className="tile-top">
                  <span>$ / 100g protein</span>
                </div>
                <div className="tile-num">{moneyOrDash(active.costPerProtein)}</div>
                <div className="tile-sub">the real test</div>
              </div>
            </section>

            <section className="register">
              <div className="reg-head">
                <h2>{editingId ? "Amend the entry" : "Enter the day"}</h2>
                <span className="reg-week">{settings.activeWeek}</span>
              </div>
              <div className="reg-grid">
                <div className="reg-field date">
                  <label htmlFor="f-date">Date</label>
                  <input
                    id="f-date"
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                </div>
                <div className="reg-field dish">
                  <label htmlFor="f-dish">What you cooked</label>
                  <input
                    id="f-dish"
                    type="text"
                    placeholder="pasta e ceci, pangrattato"
                    value={form.dish}
                    onChange={(e) => setForm({ ...form, dish: e.target.value })}
                  />
                </div>
                <div className="reg-field num">
                  <label htmlFor="f-cal">Calories</label>
                  <input
                    id="f-cal"
                    type="number"
                    inputMode="numeric"
                    placeholder="2000"
                    value={form.calories}
                    onChange={(e) => setForm({ ...form, calories: e.target.value })}
                  />
                </div>
                <div className="reg-field num">
                  <label htmlFor="f-prot">Protein (g)</label>
                  <input
                    id="f-prot"
                    type="number"
                    inputMode="numeric"
                    placeholder="100"
                    value={form.protein}
                    onChange={(e) => setForm({ ...form, protein: e.target.value })}
                  />
                </div>
                <div className="reg-field num">
                  <label htmlFor="f-cost">Cost ($)</label>
                  <input
                    id="f-cost"
                    type="number"
                    inputMode="decimal"
                    placeholder="7.50"
                    value={form.cost}
                    onChange={(e) => setForm({ ...form, cost: e.target.value })}
                  />
                </div>
                <button
                  type="button"
                  className={`waste ${form.zeroWaste ? "on" : ""}`}
                  onClick={() => setForm({ ...form, zeroWaste: !form.zeroWaste })}
                  aria-pressed={form.zeroWaste}
                >
                  <span className="waste-box">{form.zeroWaste && <Check size={14} />}</span>
                  Zero waste
                </button>
              </div>
              <div className="reg-actions">
                {editingId && (
                  <button className="btn ghost" onClick={cancelEdit}>
                    <Close size={15} /> Cancel
                  </button>
                )}
                <button className="btn solid" onClick={submit}>
                  <Plus size={15} /> {editingId ? "Save" : "Enter in ledger"}
                </button>
              </div>
            </section>

            <WeekChart groups={groups} />

            <section className="ledger">
              <h2>The ledger</h2>
              {groups.length === 0 && (
                <div className="empty">
                  The ledger is empty. Enter today above — calories, cost, protein — and the
                  reckoning begins.
                </div>
              )}
              {groups.map((g) => (
                <div className="week-block" key={g.week}>
                  <div className="week-head">
                    <h3>{g.week}</h3>
                    <div className="week-stats">
                      <span className={g.summary.cost > settings.weeklyBudget ? "over" : ""}>
                        {money(g.summary.cost)}
                      </span>
                      <span className="dot">·</span>
                      <span>{g.summary.avgCalories} kcal avg</span>
                      <span className="dot">·</span>
                      <span>{g.summary.avgProtein}g avg</span>
                      <span className="dot">·</span>
                      <span>{moneyOrDash(g.summary.costPerProtein)}/100g</span>
                    </div>
                  </div>
                  <div className="rows">
                    <div className="row head-row">
                      <span className="c-date">Date</span>
                      <span className="c-dish">Dish</span>
                      <span className="c-num">Cal</span>
                      <span className="c-num">Prot</span>
                      <span className="c-num">Cost</span>
                      <span className="c-mark">Kept</span>
                      <span className="c-act" />
                    </div>
                    {g.entries.map((e) => {
                      const kept = dayPasses(e, settings);
                      return (
                        <div className={`row ${kept ? "kept" : ""}`} key={e.id}>
                          <span className="c-date">{formatDate(e.date)}</span>
                          <span className="c-dish">{e.dish || <em>—</em>}</span>
                          <span className={`c-num ${e.calories > settings.calorieTarget ? "bad" : ""}`}>
                            {e.calories}
                          </span>
                          <span className={`c-num ${e.protein < settings.proteinFloor ? "bad" : ""}`}>
                            {e.protein}
                          </span>
                          <span className="c-num">{money(e.cost)}</span>
                          <span className="c-mark">
                            {kept ? (
                              <span className="kept-mark">
                                <Check size={13} />
                              </span>
                            ) : (
                              <span className="miss-mark">·</span>
                            )}
                          </span>
                          <span className="c-act">
                            <button onClick={() => startEdit(e)} aria-label="Edit entry">
                              <Pencil size={13} />
                            </button>
                            <button onClick={() => commit(removeEntry(ledger, e.id))} aria-label="Delete entry">
                              <Trash size={13} />
                            </button>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </section>
          </>
        )}

        <footer className="foot">Constraint is the recipe.</footer>
      </div>
    </div>
  );
}

function AuthBar({ user }: { user: User | null }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  if (user) {
    return (
      <div className="authbar">
        <span className="auth-email">{user.email}</span>
        <button className="linkbtn" onClick={() => supabase.auth.signOut()}>
          Sign out
        </button>
      </div>
    );
  }

  if (sent) {
    return (
      <div className="authbar">
        <span className="auth-email">Check your email ✦</span>
      </div>
    );
  }

  const sendLink = () => {
    if (!email) return;
    supabase.auth
      .signInWithOtp({ email, options: { emailRedirectTo: window.location.href } })
      .then(({ error }) => {
        if (error) console.error(error);
        else setSent(true);
      });
  };

  return (
    <div className="authbar">
      <input
        className="auth-input"
        type="email"
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendLink()}
      />
      <button className="linkbtn" disabled={!email} onClick={sendLink}>
        Save to account
      </button>
    </div>
  );
}

function NumField({
  label,
  value,
  onChange,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <div className="field-input">
        {prefix && <i>{prefix}</i>}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value, 10) || 0)}
        />
        {suffix && <i>{suffix}</i>}
      </div>
    </label>
  );
}
