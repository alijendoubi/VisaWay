create extension if not exists "uuid-ossp";

create table if not exists leads (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text,
  visa_type text not null,
  destination text,
  message text not null,
  status text default 'new',
  locale text,
  source text,
  created_at timestamptz default now()
);

create table if not exists bookings (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text,
  visa_type text not null,
  destination text not null,
  preferred_date text not null,
  preferred_time text not null,
  timezone text not null,
  notes text,
  google_event_id text,
  status text default 'pending',
  calendar_status text,
  event_url text,
  status_updated_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists email_events (
  id uuid primary key default uuid_generate_v4(),
  lead_id uuid references leads(id) on delete cascade,
  booking_id uuid references bookings(id) on delete cascade,
  type text not null,
  scheduled_at timestamptz not null,
  sent_at timestamptz,
  status text default 'pending',
  error text,
  last_attempt_at timestamptz,
  created_at timestamptz default now()
);

create index if not exists email_events_status_idx on email_events (status, scheduled_at);

create table if not exists email_logs (
  id uuid primary key default uuid_generate_v4(),
  email_event_id uuid references email_events(id) on delete set null,
  recipient text not null,
  template text,
  status text not null,
  error text,
  created_at timestamptz default now()
);

create table if not exists webhook_events (
  id uuid primary key default uuid_generate_v4(),
  provider text not null,
  external_id text,
  payload jsonb,
  received_at timestamptz default now()
);

create table if not exists analytics_events (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  payload jsonb,
  path text,
  locale text,
  created_at timestamptz default now()
);
