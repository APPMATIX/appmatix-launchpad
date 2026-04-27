import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const steps = [
  { n: "01", title: "Discover", desc: "We dig into your business, users, and constraints. You leave the kickoff with a clear plan, not a sales pitch." },
  { n: "02", title: "Design", desc: "Rapid prototyping and design systems that align stakeholders before a single line of production code is written." },
  { n: "03", title: "Build", desc: "Senior engineers ship in two-week iterations with continuous deployment and full visibility on Linear and Slack." },
  { n: "04", title: "Launch & scale", desc: "We go live, monitor, and iterate. Then we hand over clean code and documentation — or stay on as your partner." },
];

export function HowWeWork() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="How we work"
          title={<>A predictable path from <span className="text-gradient">idea to launch</span>.</>}
          description="No mystery. No scope creep panic. Just a proven process that keeps you in control."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative glass rounded-2xl p-7"
            >
              <div className="text-5xl font-display font-bold text-gradient leading-none">{s.n}</div>
              <h3 className="mt-5 text-2xl font-display font-semibold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
