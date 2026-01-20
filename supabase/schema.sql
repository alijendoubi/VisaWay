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
  created_at timestamptz default now()
);

create table if not exists bookings (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  visa_type text not null,
  destination text not null,
  preferred_date text not null,
  preferred_time text not null,
  timezone text not null,
  notes text,
  google_event_id text,
  status text default 'scheduled',
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
  created_at timestamptz default now()
);

create index if not exists email_events_status_idx on email_events (status, scheduled_at);
