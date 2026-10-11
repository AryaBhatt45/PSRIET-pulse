# PTSRIET Pulse

A React and Vite portal for Pt. Sukhraj Raghunath Institute of Education and Technology. The client uses Supabase Auth and PostgreSQL for accounts, announcements, events, results, student records, admission enquiries, opportunities, and certification claims.

## Run the client

```bash
cd client
npm install
npm run dev
```

Create a production build with `npm run build` from the `client` directory.

## Supabase setup

1. Apply [`supabase/migrations/20261009000000_portal_records.sql`](./supabase/migrations/20261009000000_portal_records.sql) to the Supabase project connected by `client/src/supabaseClient.js`.
2. Create or invite the administrator in Supabase Auth, then set its **app metadata** to include `"role": "admin"` (for example, `{"role":"admin"}`). Do not use user metadata for this role; users can edit their own user metadata. The database policies use this app metadata claim to authorize administrative operations.
3. Sign in at `/admin/login` with that Supabase Auth account. Student accounts can submit certification claims; public visitors can submit admission enquiries.

The migration enables row-level security. Public reads are limited to announcements, events, and opportunities; administrative records are restricted to admins. Student results are retrieved through a database function that returns only the record matching the submitted roll number. Do not put a Supabase service-role key in the frontend.

Data previously saved in browser local storage is not automatically imported. Re-enter any existing notices, events, results, students, or opportunities in the Admin Dashboard after setup.
