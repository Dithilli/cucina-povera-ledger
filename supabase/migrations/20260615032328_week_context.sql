-- Per-week cultural context: a short prose blurb on why this culture cooked this
-- way for the week's theme. Seeded from src/content (sourced from
-- docs/challenges/<cuisine>.md). Nullable — theme-only weeks may omit it.

alter table public.week_themes add column context text;
