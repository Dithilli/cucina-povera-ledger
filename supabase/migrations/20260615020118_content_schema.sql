-- Challenge-agnostic content model.
--
-- The app is a generic constraint/scoring engine; "cucina povera" is just the
-- first challenge loaded into it. Content (challenges, recipes, week themes,
-- docs) lives HERE, in the database — not hardcoded in source. The TS modules
-- under src/content are seed fixtures, loaded by scripts/seed.ts.
--
-- Public read, no public write: the anon/publishable key can SELECT everything
-- (it's a public catalogue); writes happen via the service role (seed/admin),
-- which bypasses RLS.

-- ─────────────────────────────────────────────────────────────────────────────
-- Tables
-- ─────────────────────────────────────────────────────────────────────────────

-- The top-level container. One row per challenge ("cucina-povera" is the first).
create table public.challenges (
  id                      uuid primary key default gen_random_uuid(),
  slug                    text unique not null,
  name                    text not null,
  tagline                 text,
  -- The engine's default dials for this challenge.
  default_calorie_target  integer not null,
  default_protein_floor   integer not null,        -- grams
  default_weekly_budget   numeric(10,2) not null,  -- USD
  created_at              timestamptz not null default now()
);

-- The curated dish library the menu generator draws from.
create table public.recipes (
  id                    uuid primary key default gen_random_uuid(),
  challenge_id          uuid not null references public.challenges(id) on delete cascade,
  slug                  text not null,
  title                 text not null,
  cuisine               text not null,
  blurb                 text not null,
  servings              integer not null,
  per_serving_calories  integer not null,
  per_serving_protein   integer not null,          -- grams
  est_cost_per_serving  numeric(10,2),             -- USD, best-effort
  roles                 text[] not null default '{}',
  ingredients           jsonb  not null default '[]'::jsonb,  -- IngredientLine[]
  method                text[] not null default '{}',
  modern_move           text,
  notes                 text,
  zero_waste_hero       boolean not null default false,
  -- false = an estimated macro the generator must NOT treat as ground truth.
  macros_verified       boolean not null default true,
  tags                  text[] not null default '{}',
  created_at            timestamptz not null default now(),
  unique (challenge_id, slug)
);

-- The themed week arc. Plan columns (engine/days/shopping/...) stay null until a
-- theme is built out into a full executable WeekPlan; a week IS a plan when
-- `days` is not null.
create table public.week_themes (
  id                    uuid primary key default gen_random_uuid(),
  challenge_id          uuid not null references public.challenges(id) on delete cascade,
  slug                  text not null,
  number                integer not null,
  cuisine               text not null,
  theme                 text not null,
  title                 text not null,
  description           text not null,
  dishes                text[] not null default '{}',
  protein_note          text,
  precious_thread       text not null,
  bonus                 boolean not null default false,
  -- Executable plan (null = theme only, not yet built out).
  engine                text[],
  days                  jsonb,   -- WeekDay[]
  shopping              jsonb,   -- ShoppingItem[]
  first_shop_total      numeric(10,2),
  steady_state_weekly   numeric(10,2),
  created_at            timestamptz not null default now(),
  unique (challenge_id, slug)
);

-- Prose pages: manifesto, challenge rules, budget notes (markdown).
create table public.content_docs (
  id            uuid primary key default gen_random_uuid(),
  challenge_id  uuid not null references public.challenges(id) on delete cascade,
  slug          text not null,
  title         text not null,
  kind          text not null,
  body          text not null,
  created_at    timestamptz not null default now(),
  unique (challenge_id, slug)
);

-- Helpful lookups.
create index recipes_challenge_idx      on public.recipes (challenge_id);
create index week_themes_challenge_idx  on public.week_themes (challenge_id, number);
create index content_docs_challenge_idx on public.content_docs (challenge_id);

-- ─────────────────────────────────────────────────────────────────────────────
-- Row-Level Security: public read-only catalogue
-- ─────────────────────────────────────────────────────────────────────────────

alter table public.challenges   enable row level security;
alter table public.recipes      enable row level security;
alter table public.week_themes  enable row level security;
alter table public.content_docs enable row level security;

create policy "Public read" on public.challenges   for select using (true);
create policy "Public read" on public.recipes       for select using (true);
create policy "Public read" on public.week_themes   for select using (true);
create policy "Public read" on public.content_docs  for select using (true);
