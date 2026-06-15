-- Per-user ledger: each signed-in user owns their settings + entries.
--
-- RLS: a user can only read/write their own rows (auth.uid() = user_id). Scoring
-- stays in the pure core (computed client-side for now, §5-J "inputs trusted");
-- these tables store the raw inputs. `id` is TEXT to match the app's makeId().

create table public.app_settings (
  user_id        uuid primary key references auth.users(id) on delete cascade,
  challenge_slug text not null default 'cucina-povera',
  calorie_target integer not null,
  protein_floor  integer not null,
  weekly_budget  numeric(10,2) not null,
  active_week    text not null,
  updated_at     timestamptz not null default now()
);

create table public.entries (
  id             text primary key,
  user_id        uuid not null references auth.users(id) on delete cascade,
  challenge_slug text not null default 'cucina-povera',
  date           date not null,
  week           text not null,
  dish           text not null default '',
  calories       integer not null,
  protein        integer not null,
  cost           numeric(10,2) not null,
  zero_waste     boolean not null,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);
create index entries_user_idx on public.entries (user_id, date);

alter table public.app_settings enable row level security;
alter table public.entries      enable row level security;

create policy "Own settings" on public.app_settings
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Own entries" on public.entries
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
