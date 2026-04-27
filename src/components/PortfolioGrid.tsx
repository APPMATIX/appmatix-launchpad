import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./Section";

export const projects = [
  { title: "Northwind Logistics", tag: "Web Platform", desc: "Real-time freight tracking dashboard cutting ops time by 40%.", color: "from-sky-500/30 to-cyan-500/10", year: "2025" },
  { title: "Lumen Health", tag: "Mobile App", desc: "Patient-facing iOS/Android app with HIPAA-compliant messaging.", color: "from-teal-500/30 to-emerald-500/10", year: "2025" },
  { title: "Forge Manufacturing", tag: "Automation", desc: "ERP-to-Slack workflow engine processing 12K events daily.", color: "from-blue-500/30 to-indigo-500/10", year: "2024" },
  { title: "Atlas Retail", tag: "Web + Mobile", desc: "Omnichannel inventory + POS rebuild across 80 store locations.", color: "from-cyan-500/30 to-sky-500/10", year: "2024" },
  { title: "Pulse Analytics", tag: "SaaS", desc: "From zero to $1M ARR — full product build for marketing analytics.", color: "from-sky-500/30 to-blue-500/10", year: "2024" },
  { title: "Voyage Travel Co.", tag: "UI/UX + Web", desc: "Brand redesign and booking platform that lifted conversion 28%.", color: "from-teal-500/30 to-cyan-500/10", year: "2023" },
];

export function PortfolioGrid({ limit, withHeader = true }: { limit?: number; withHeader?: boolean }) {
  const items = limit ? projects.slice(0, limit) : projects;
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        {withHeader && (
          <SectionHeader
            eyebrow="Selected work"
            title={<>Projects we're <span className="text-gradient">proud of</span>.</>}
            description="A glimpse of the products we've shipped with founders, operators, and product teams."
          />
        )}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div className={`relative h-48 bg-gradient-to-br ${p.color} overflow-hidden`}>
                <div className="absolute inset-0 grid-pattern opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-display font-bold text-foreground/10">
                    {p.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-background/60 backdrop-blur text-foreground/90">
                    {p.tag}
                  </span>
                  <span className="text-xs font-mono text-foreground/70">{p.year}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-display font-semibold">{p.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all flex-shrink-0" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
