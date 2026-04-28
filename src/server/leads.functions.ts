import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const LeadInputSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(200),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().trim().max(80).optional().or(z.literal("")),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please add at least a few details")
    .max(2000, "Message is too long"),
});

export type LeadInput = z.infer<typeof LeadInputSchema>;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LeadInputSchema.parse(input))
  .handler(async ({ data }) => {
    try {
      const userAgent = getRequestHeader("user-agent")?.slice(0, 500) ?? null;

      const { error } = await supabaseAdmin.from("leads").insert({
        name: data.name,
        email: data.email,
        company: data.company ? data.company : null,
        service: data.service ? data.service : null,
        budget: data.budget ? data.budget : null,
        message: data.message,
        source: "contact_form",
        user_agent: userAgent,
      });

      if (error) {
        console.error("submitLead insert error:", error);
        return {
          ok: false as const,
          error: "We couldn't save your message. Please try again.",
        };
      }

      return { ok: true as const };
    } catch (err) {
      console.error("submitLead unexpected error:", err);
      return {
        ok: false as const,
        error: "Something went wrong. Please try again.",
      };
    }
  });
