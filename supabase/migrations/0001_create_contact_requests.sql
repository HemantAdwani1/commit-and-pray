-- ============================================================================
-- Migration: create contact_requests table
-- Run this in the Supabase SQL editor, or via the Supabase CLI:
--   supabase db push
-- ============================================================================

create extension if not exists "pgcrypto";

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  company text,
  project_type text not null,
  budget text not null,
  timeline text not null,
  message text not null,
  status text not null default 'new',
  created_at timestamptz not null default now(),

  constraint contact_requests_name_length check (char_length(name) between 2 and 100),
  constraint contact_requests_email_format check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  constraint contact_requests_message_length check (char_length(message) between 20 and 2000),
  constraint contact_requests_status_valid check (status in ('new', 'read', 'replied', 'archived'))
);

comment on table public.contact_requests is
  'Messages submitted through the public portfolio contact form.';

-- Indexes for the admin views this table will typically be queried by.
create index if not exists idx_contact_requests_created_at
  on public.contact_requests (created_at desc);

create index if not exists idx_contact_requests_status
  on public.contact_requests (status);

create index if not exists idx_contact_requests_email
  on public.contact_requests (email);

-- ----------------------------------------------------------------------------
-- Row Level Security
-- ----------------------------------------------------------------------------
-- RLS is enabled and NO select/update/delete policies are defined below.
-- That means the public anon key — the only key ever shipped to the
-- browser — can insert new rows but can never read, modify, or delete
-- existing ones. Reading submissions requires the service_role key from
-- a trusted server context (e.g. the Supabase dashboard, or an Edge
-- Function/admin tool that is never exposed to the frontend bundle).

alter table public.contact_requests enable row level security;

create policy "Anyone can submit a contact request"
  on public.contact_requests
  for insert
  to anon
  with check (
    -- Belt-and-suspenders server-side validation, mirroring the
    -- frontend Zod schema in case the API is called directly.
    char_length(name) between 2 and 100
    and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    and char_length(message) between 20 and 2000
    and status = 'new'
  );

-- No select/update/delete policy is created for the anon or authenticated
-- roles, so those operations are denied by default while RLS is enabled.
