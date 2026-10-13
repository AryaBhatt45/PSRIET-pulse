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
