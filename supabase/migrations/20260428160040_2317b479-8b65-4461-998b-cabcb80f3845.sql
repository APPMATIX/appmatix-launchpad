-- Explicit deny-all policies for leads.
-- The service-role key (used by our server function) bypasses RLS, so
-- legitimate inserts still work. These policies only block direct API
-- access from anon/authenticated clients.
CREATE POLICY "Deny all reads on leads"
  ON public.leads FOR SELECT
  TO anon, authenticated
  USING (false);

CREATE POLICY "Deny all inserts on leads"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (false);

CREATE POLICY "Deny all updates on leads"
  ON public.leads FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Deny all deletes on leads"
  ON public.leads FOR DELETE
  TO anon, authenticated
  USING (false);