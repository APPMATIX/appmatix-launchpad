import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { CTABanner } from "@/components/CTABanner";
import { Testimonials } from "@/components/Testimonials";
import { Compass, Heart, Lightbulb, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Appmatix Solutions" },
      { name: "description", content: "Meet the senior team behind Appmatix Solutions — engineers and designers building software that lasts." },
      { property: "og:title", content: "About Appmatix Solutions" },
      { property: "og:description", content: "A software company built by engineers, run for founders." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Care deeply", desc: "We treat every project like our own. Cutting corners isn't part of our toolkit." },
  { icon: Compass, title: "Tell the truth", desc: "Honest timelines, honest budgets, honest feedback — even when it's inconvenient." },
  { icon: Lightbulb, title: "Stay curious", desc: "We keep learning, evolving the stack, and challenging defaults so your product doesn't age out." },
  { icon: Target, title: "Ship outcomes", desc: "Code is a means, not an end. We measure success by your business results." },
];

const founders = [
  { name: "Kebin B Jacob", role: "Co-Founder · Former IT Business Analyst" },
  { name: "Nandakishore C V", role: "Co-Founder · Former Software Engineer" },
  { name: "Rohith K", role: "Co-Founder · Former Software Engineer" },
];

function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About us"
        title={<>A small team with <span className="text-gradient">big standards</span>.</>}
        description="Appmatix Solutions is a full-service software company founded by engineers and operators. We build reliable, scalable, and user-friendly digital products that help businesses innovate, grow, and streamline their operations."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              We're a tight crew of twelve — engineers, designers, and product strategists — distributed across three continents. Every person on our team has shipped production software for a decade or more. There are no juniors, no offshoring, and no "resource managers" between you and the people doing the work.
            </p>
            <p>
              Our clients are founders, operators, and product leaders at small and mid-sized businesses who need real software, fast, without the agency overhead. We've helped logistics startups scale to enterprise, manufacturers automate decades-old workflows, and healthcare teams ship HIPAA-compliant apps in weeks.
            </p>
            <p>
              We work in two-week iterations with full transparency. You see what we see — live boards, weekly demos, and a direct line to the engineers building your product. When we commit to a date, we hit it. When we say something will work, it works.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-center max-w-2xl mx-auto">
            What we <span className="text-gradient">stand for</span>.
          </h2>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-5">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-display font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </PageLayout>
  );
}
