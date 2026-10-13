alter table public.portal_records
drop constraint if exists portal_records_record_type_check;

alter table public.portal_records
add constraint portal_records_record_type_check
check (
  record_type in (
    'notice',
    'event',
    'result',
    'student',
    'enquiry',
    'job',
    'internship',
    'certification_claim',
    'curriculum_lock'
  )
);

create or replace function public.is_portal_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce(
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
    or lower(auth.jwt() ->> 'email') = 'admin@2026.com',
    false
  );
$$;

grant execute on function public.is_portal_admin() to anon, authenticated;

drop policy if exists "Public can read published portal content" on public.portal_records;

create policy "Public can read published portal content"
on public.portal_records
for select
to anon, authenticated
using (
  record_type in ('notice', 'event', 'job', 'internship', 'curriculum_lock')
  or public.is_portal_admin()
  or (record_type = 'certification_claim' and owner_id = (select auth.uid()))
);
