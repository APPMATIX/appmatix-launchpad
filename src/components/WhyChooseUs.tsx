import { motion } from "framer-motion";
import { Shield, Zap, Users, Eye, GitBranch, Clock } from "lucide-react";
import { SectionHeader } from "./Section";

const reasons = [
  { icon: Users, title: "Senior team only", desc: "No juniors learning on your dime. Every engineer has 6+ years shipping production software." },
  { icon: Clock, title: "Predictable timelines", desc: "We commit to dates and hit them. If we miss, you don't pay for the slip — written into every contract." },
  { icon: Eye, title: "Radical transparency", desc: "Live Linear board, weekly demos, and direct Slack access. You always know what's next." },
  { icon: Shield, title: "Code you own", desc: "Clean, documented, and yours from day one. Hand off to an in-house team whenever you're ready." },
  { icon: Zap, title: "Fast and lean", desc: "Two-week iterations. Real software in your hands by week four. No three-month \"discovery\" phases." },
  { icon: GitBranch, title: "Built to scale", desc: "Architectures that grow with you — from MVP to millions of users without a costly rewrite." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="Why Appmatix"
          title={<>The agency you wish you'd <span className="text-gradient">hired sooner</span>.</>}
          description="We exist because most software shops over-promise, under-deliver, and disappear. We do the opposite."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group glass rounded-2xl p-6 hover:border-primary/40 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <r.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
