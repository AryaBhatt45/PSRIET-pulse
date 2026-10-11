create table if not exists public.portal_records (
  id uuid primary key default gen_random_uuid(),
  record_type text not null check (
    record_type in (
      'notice',
      'event',
      'result',
      'student',
      'enquiry',
      'job',
      'internship',
      'certification_claim'
    )
  ),
  payload jsonb not null check (jsonb_typeof(payload) = 'object'),
  owner_id uuid references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create index if not exists portal_records_type_created_at_idx
on public.portal_records (record_type, created_at desc);

alter table public.portal_records enable row level security;

create or replace function public.is_portal_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false);
$$;

grant execute on function public.is_portal_admin() to anon, authenticated;

create policy "Public can read published portal content"
on public.portal_records
for select
to anon, authenticated
using (
  record_type in ('notice', 'event', 'job', 'internship')
  or public.is_portal_admin()
  or (record_type = 'certification_claim' and owner_id = (select auth.uid()))
);

create policy "Public can submit admission enquiries and users can submit claims"
on public.portal_records
for insert
to anon, authenticated
with check (
  public.is_portal_admin()
  or (record_type = 'enquiry' and owner_id is null)
  or (
    record_type = 'certification_claim'
    and owner_id = (select auth.uid())
  )
);

create policy "Admins can update portal records"
on public.portal_records
for update
to authenticated
using (public.is_portal_admin())
with check (public.is_portal_admin());

create policy "Admins can delete portal records"
on public.portal_records
for delete
to authenticated
using (public.is_portal_admin());

create or replace function public.get_student_result(p_roll_no text)
returns jsonb
language sql
stable
security definer
set search_path = ''
as $$
  select records.payload
  from public.portal_records as records
  where records.record_type = 'result'
    and lower(records.payload ->> 'rollNo') = lower(trim(p_roll_no))
  order by records.created_at desc
  limit 1;
$$;

revoke all on function public.get_student_result(text) from public;
grant execute on function public.get_student_result(text) to anon, authenticated;

grant select, insert, update, delete on public.portal_records to anon, authenticated;
