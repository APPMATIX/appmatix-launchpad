## Goal

Wire the existing contact form to Lovable Cloud so every submission is saved as a lead in the database, with server-side validation and safe public submission.

## Steps

1. **Enable Lovable Cloud**
   - Provisions Postgres + the Supabase clients used by the project.
   - No external account needed.

2. **Create the `leads` table** (via migration)
   - Columns:
     - `id` uuid primary key, default `gen_random_uuid()`
     - `name` text not null
     - `email` text not null
     - `company` text
     - `service` text
     - `budget` text
     - `message` text not null
     - `source` text default `'contact_form'`
     - `user_agent` text
     - `created_at` timestamptz default `now()`
   - Length CHECK constraints (name ≤ 100, email ≤ 200, company ≤ 120, message ≤ 2000) to enforce limits at the DB level.
   - Index on `created_at desc` for admin browsing later.

3. **Row Level Security on `leads`**
   - Enable RLS.
   - **No public SELECT/UPDATE/DELETE policies** — leads contain PII (email, phone-adjacent info) and must never be readable by anonymous visitors.
   - Inserts will go through a server function using the service-role key, so no INSERT policy is needed for the anon role. This prevents bots from scraping or tampering with leads via the public API.

4. **Server function: `submitLead`** (`src/server/leads.functions.ts`)
   - Created with `createServerFn({ method: "POST" })`.
   - Zod-validates input (name, email format, message length, optional fields, character limits).
   - Inserts via `supabaseAdmin` (service role) so RLS stays locked down.
   - Captures `user_agent` from request headers.
   - Returns `{ ok: true }` on success, `{ ok: false, error }` on failure (no raw DB errors leaked).

5. **Update `ContactSection.tsx`**
   - Replace the fake `setTimeout` with `useServerFn(submitLead)`.
   - Keep existing client-side validation as first line of defense; rely on server validation for the real check.
   - Show toast on error; keep success state UI as-is.

## Technical details

```text
src/
  server/
    leads.functions.ts   <- createServerFn submitLead (uses supabaseAdmin)
  components/
    ContactSection.tsx   <- calls submitLead via useServerFn
supabase/migrations/
  <timestamp>_create_leads.sql
```

Security posture:
- PII table, RLS on, zero public policies.
- All writes go through the validated server function.
- Service-role key stays server-only (`client.server.ts`), never bundled to the browser.
- Input validated twice: client (UX) + server (Zod, authoritative).

## Out of scope (can do later if you want)

- Admin dashboard to view leads.
- Email notification on new lead (would need Resend connector).
- Rate limiting (recommended before going viral; can add an IP-based throttle).
