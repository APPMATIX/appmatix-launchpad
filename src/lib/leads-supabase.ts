// Dedicated Supabase client for the public contact form (leads table).
// Pointed at the external project so the form works on Vercel without
// needing the Lovable-managed env vars.
//
// Override at deploy time (recommended) by setting:
//   VITE_LEADS_SUPABASE_URL
//   VITE_LEADS_SUPABASE_ANON_KEY
import { createClient } from "@supabase/supabase-js";

const LEADS_SUPABASE_URL =
  import.meta.env.VITE_LEADS_SUPABASE_URL ||
  "https://aeacnchvoxzvrtnvkfns.supabase.co";

const LEADS_SUPABASE_ANON_KEY =
  import.meta.env.VITE_LEADS_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlYWNuY2h2b3h6dnJ0bnZrZm5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczODcxNzIsImV4cCI6MjA5Mjk2MzE3Mn0.Rs2FjdB2HbrTlKyoZ8yW1tXPkTieLlQhg9-_aOmk9pk";

export const leadsSupabase = createClient(LEADS_SUPABASE_URL, LEADS_SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
