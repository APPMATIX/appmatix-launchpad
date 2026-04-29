-- Create leads table for contact form submissions
CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) > 0 AND char_length(name) <= 100),
  email text NOT NULL CHECK (char_length(email) > 0 AND char_length(email) <= 200),
  company text CHECK (company IS NULL OR char_length(company) <= 120),
  service text CHECK (service IS NULL OR char_length(service) <= 80),
  budget text CHECK (budget IS NULL OR char_length(budget) <= 80),
  message text NOT NULL CHECK (char_length(message) >= 10 AND char_length(message) <= 2000),
  source text NOT NULL DEFAULT 'contact_form' CHECK (char_length(source) <= 60),
  user_agent text CHECK (user_agent IS NULL OR char_length(user_agent) <= 500),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX leads_created_at_idx ON public.leads (created_at DESC);

-- Enable RLS. No public policies are defined: leads contain PII (name/email)
-- and must NEVER be readable by anonymous or authenticated end users.
-- All inserts and reads happen through trusted server code using the
-- service-role key, which bypasses RLS.
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;