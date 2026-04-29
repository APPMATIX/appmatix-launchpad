-- Drop the deny-insert policy
DROP POLICY IF EXISTS "Deny all inserts on leads" ON public.leads;

-- Add length constraints to prevent abuse
ALTER TABLE public.leads
  ADD CONSTRAINT leads_name_length CHECK (char_length(name) BETWEEN 1 AND 100),
  ADD CONSTRAINT leads_email_length CHECK (char_length(email) BETWEEN 3 AND 200),
  ADD CONSTRAINT leads_company_length CHECK (company IS NULL OR char_length(company) <= 120),
  ADD CONSTRAINT leads_service_length CHECK (service IS NULL OR char_length(service) <= 80),
  ADD CONSTRAINT leads_budget_length CHECK (budget IS NULL OR char_length(budget) <= 80),
  ADD CONSTRAINT leads_message_length CHECK (char_length(message) BETWEEN 1 AND 2000),
  ADD CONSTRAINT leads_user_agent_length CHECK (user_agent IS NULL OR char_length(user_agent) <= 500),
  ADD CONSTRAINT leads_email_format CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$');

-- Allow anonymous + authenticated users to insert leads only
CREATE POLICY "Public can submit leads"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  source = 'contact_form'
  AND created_at IS NOT NULL
);