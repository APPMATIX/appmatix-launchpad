import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
          style={{ background: "var(--gradient-primary)" }}
        >
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-primary-foreground">
              Ready to build something that lasts?
            </h2>
            <p className="mt-5 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Tell us about your project. We'll come back within one business day with honest, useful next steps.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-background text-foreground rounded-full px-7 py-4 font-semibold hover:scale-[1.03] transition-all shadow-2xl"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-background/10 backdrop-blur border border-background/20 text-primary-foreground rounded-full px-7 py-4 font-semibold hover:bg-background/20 transition-all"
              >
                Explore services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
