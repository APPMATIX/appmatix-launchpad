import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { SectionHeader } from "./Section";

const services = ["Web Development", "Mobile Apps", "Business Automation", "UI/UX Design", "Not sure yet"];
const budgets = ["< $10k", "$10k – $25k", "$25k – $75k", "$75k – $150k", "$150k+"];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || name.length > 100) return toast.error("Please enter your name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toast.error("Please enter a valid email");
    if (!message || message.length < 10) return toast.error("Please add a few details about your project");
    if (message.length > 2000) return toast.error("Message is too long");

    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    toast.success("Message sent! We'll be in touch within one business day.");
    form.reset();
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="Get in touch"
          title={<>Let's build something <span className="text-gradient">remarkable</span>.</>}
          description="Tell us a bit about your project. No NDAs, no sales calls — just a real conversation about what you're trying to build."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Mail, label: "Email", value: "info@appmatixsolutions.com" },
              { 
                icon: Phone, 
                label: "Phone", 
                value: (
                  <span className="whitespace-pre-line">
                    +91 9544248794{"\n"}
                    +91 8848012893{"\n"}
                    +971 588355652
                  </span>
                ) 
              },
              { icon: MapPin, label: "Location", value: "Kochi · Dubai" },
            ].map((c) => (
              <div key={c.label} className="glass rounded-2xl p-6 flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                    {c.label}
                  </div>
                  <div className="mt-1 font-semibold">{c.value}</div>
                </div>
              </div>
            ))}

            <div className="glass rounded-2xl p-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-mono mb-2">
                Response time
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold">Within 1 business day</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-2xl p-8"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto h-16 w-16 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-display font-semibold">Thanks for reaching out!</h3>
                <p className="mt-3 text-muted-foreground max-w-sm mx-auto">
                  We've received your message and will respond within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Name *" name="name" placeholder="Jane Doe" maxLength={100} required />
                  <Field label="Email *" name="email" type="email" placeholder="jane@company.com" maxLength={200} required />
                </div>
                <Field label="Company" name="company" placeholder="Acme Inc." maxLength={120} />
                <div className="grid sm:grid-cols-2 gap-4">
                  <SelectField label="Service" name="service" options={services} />
                  <SelectField label="Budget" name="budget" options={budgets} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project details *</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    maxLength={2000}
                    placeholder="Tell us about your goals, timeline, and what success looks like…"
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl px-6 py-4 font-semibold hover:shadow-[var(--shadow-glow)] transition-all disabled:opacity-60"
                >
                  {loading ? "Sending…" : (
                    <>
                      Send message
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <select
        name={name}
        className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all"
        defaultValue=""
      >
        <option value="" disabled>Choose…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
