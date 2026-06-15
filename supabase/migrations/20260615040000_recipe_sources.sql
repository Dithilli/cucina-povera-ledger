-- Recipe provenance. Each recipe may carry a list of cited sources — the
-- authoritative recipes/cookbooks it was drawn from — as jsonb (RecipeSource[]:
-- { title, url?, note? }). Mirrors how `ingredients` is stored. Surfaced in the
-- recipe modal so the curated library shows its work.
alter table public.recipes
  add column if not exists sources jsonb not null default '[]'::jsonb;  -- RecipeSource[]
