import { motion } from "framer-motion";
import { Code2, Smartphone, Database, RefreshCw, type LucideIcon } from "lucide-react";
import { SectionHeader } from "./Section";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "Custom responsive websites and e-commerce platforms built with modern technologies and best practices.",
    bullets: ["Responsive & SEO-ready", "E-commerce platforms", "Modern type-safe stacks"],
  },
  {
    icon: Smartphone,
    title: "Mobile Application",
    desc: "Native and cross-platform iOS / Android apps designed for exceptional user experience and performance.",
    bullets: ["Native iOS & Android", "Cross-platform builds", "App Store launch support"],
  },
  {
    icon: Database,
    title: "ERP / CRM Solutions",
    desc: "Business management and workflow automation systems to streamline operations and boost productivity.",
    bullets: ["Workflow automation", "Custom dashboards", "Integrations & APIs"],
  },
  {
    icon: RefreshCw,
    title: "Application Modernisation",
    desc: "Re-platform legacy systems into reliable, scalable, and user-friendly digital solutions.",
    bullets: ["Legacy migrations", "Cloud-native rebuilds", "Performance & security"],
  },
];

export function ServicesGrid({ withHeader = true }: { withHeader?: boolean }) {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        {withHeader && (
          <SectionHeader
            eyebrow="What we do"
            title={<>A full software company. <span className="text-gradient">One partner.</span></>}
            description="Four disciplines, tightly integrated. We embed with your team and own the outcome end-to-end."
          />
        )}

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative glass rounded-2xl p-6 hover:border-primary/40 transition-all hover:-translate-y-1"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-12 w-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-foreground/80">
                    <span className="h-1 w-1 rounded-full bg-secondary" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
