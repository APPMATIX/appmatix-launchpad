import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeader } from "./Section";

const testimonials = [
  {
    quote: "Appmatix Solutions shipped our MVP in eight weeks — pixel-perfect, fully tested, and on budget. They're now an extension of our product team.",
    name: "Sarah Chen",
    role: "Founder & CEO, Lumen Health",
  },
  {
    quote: "We've worked with five agencies over a decade. Appmatix Solutions is the first that delivered exactly what they promised, exactly when they said they would.",
    name: "Marcus Webb",
    role: "VP Engineering, Northwind Logistics",
  },
  {
    quote: "Their automation work cut our manual ops time by 70%. ROI was positive within the first quarter. Genuinely senior people who care about the outcome.",
    name: "Priya Raman",
    role: "Head of Operations, Forge Manufacturing",
  },
  {
    quote: "The design quality is what hooked us. The engineering quality is what made us renew. They treat your product like it's their own.",
    name: "David Okafor",
    role: "Product Lead, Pulse Analytics",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="What clients say"
          title={<>Loved by founders and <span className="text-gradient">operators</span>.</>}
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative glass rounded-3xl p-8 md:p-14 overflow-hidden">
            <Quote className="absolute top-6 right-6 h-24 w-24 text-primary/10" />
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, s) => (
                <Star key={s} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl md:text-2xl font-display leading-relaxed text-foreground">
                  "{t.quote}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display font-semibold text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-2 mt-10">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-10 bg-primary" : "w-5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
