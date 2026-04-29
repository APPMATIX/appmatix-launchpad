import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { n: "50+", l: "Projects shipped" },
  { n: "12", l: "Senior engineers" },
  { n: "98%", l: "On-time delivery" },
  { n: "4.9★", l: "Client rating" },
];

export function AboutTeaser() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium tracking-wider uppercase text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              About Appmatix Solutions
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight">
              A software company built by engineers, run for <span className="text-gradient">founders</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Appmatix Solutions is a full-service software company specializing in custom web applications, mobile applications, and end-to-end software services. Our mission is to help businesses innovate, grow, and streamline their operations through reliable, scalable, and user-friendly digital solutions.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              No offshore handoffs. No bait-and-switch. Just a tight team that takes ownership of your product and treats deadlines like promises.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Read our story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-2xl p-8 text-center hover:border-primary/40 transition-all"
              >
                <div className="text-5xl md:text-6xl font-display font-bold text-gradient">
                  {s.n}
                </div>
                <div className="mt-3 text-sm uppercase tracking-wider text-muted-foreground font-mono">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
