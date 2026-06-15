# Claude / agent entry point

Read **AGENTS.md** in this directory first. It is the canonical guide to the
architecture, the data model, the commands, and the invariants you must respect.

Most common task — log a day:

    npm run ledger -- add --date YYYY-MM-DD --week "Week 1 — Pasta" \
        --dish "..." --calories 1950 --protein 105 --cost 7.50 --waste

Then commit `public/ledger.json`.
