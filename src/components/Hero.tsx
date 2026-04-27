import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-foreground/90">Software studio for ambitious SMBs</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.05] tracking-tight"
            >
              We build software that{" "}
              <span className="relative inline-block">
                <span className="text-gradient">moves businesses</span>
                <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-gradient-to-r from-primary to-secondary rounded-full" />
              </span>{" "}
              forward.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Web apps, mobile experiences, and automation systems — engineered by a senior team and shipped on a predictable timeline. No bloat, no black boxes, no surprises.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-7 py-4 font-semibold hover:shadow-[var(--shadow-glow)] transition-all hover:scale-[1.03]"
              >
                Start your project
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 glass rounded-full px-7 py-4 font-semibold hover:border-primary/40 transition-all"
              >
                See our work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs tracking-widest uppercase text-muted-foreground font-mono"
            >
              <span>Trusted by SMBs worldwide</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span>50+ projects shipped</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-primary text-primary" />
                4.9 avg client rating
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-[420px] h-[420px] max-w-full">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-primary/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-secondary/20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full border border-primary/15"
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
              <motion.img
                src={logo}
                alt=""
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_40px_oklch(0.7_0.16_232/0.4)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
