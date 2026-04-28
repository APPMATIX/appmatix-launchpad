import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./Section";
import orderManagerDashboard from "@/assets/order-manager-dashboard.png";

export type PortfolioItem = {
  title: string;
  tag: string;
  desc: string;
  color: string;
  year: string;
  href: string;
  category: "Product" | "Service";
  image?: string;
};

export const products: PortfolioItem[] = [
  {
    title: "B2B Order Manager",
    tag: "Web",
    desc: "Wholesale invoice generation and B2B customer management — order workflow, inventory, CRM, invoicing, and sales analytics in one place.",
    color: "from-teal-500/30 to-emerald-500/10",
    year: "2026",
    href: "https://ordermanager.appmatixsolutions.com/login",
    category: "Product",
    image: orderManagerDashboard,
  },
];

export const servicesPortfolio: PortfolioItem[] = [];

export const projects: PortfolioItem[] = [...products, ...servicesPortfolio];

function Card({ p, i }: { p: PortfolioItem; i: number }) {
  return (
    <motion.a
      href={p.href}
      target={p.href.startsWith("http") ? "_blank" : undefined}
      rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="group relative glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1 block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className={`relative h-48 bg-gradient-to-br ${p.color} overflow-hidden`}>
        <div className="absolute inset-0 grid-pattern opacity-50" />
        {p.image ? (
          <img
            src={p.image}
            alt={`${p.title} preview`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-display font-bold text-foreground/10">
              {p.title.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-background/70 backdrop-blur text-foreground/90">
            {p.tag}
          </span>
          <span className="text-xs font-mono text-foreground/80 px-2 py-1 rounded-full bg-background/60 backdrop-blur">{p.year}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-display font-semibold">{p.title}</h3>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all flex-shrink-0" />
        </div>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
      </div>
    </motion.a>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="glass rounded-2xl p-10 text-center text-muted-foreground">
      <p className="text-sm">No {label.toLowerCase()} to show yet — check back soon.</p>
    </div>
  );
}

export function PortfolioGrid({ limit, withHeader = true }: { limit?: number; withHeader?: boolean }) {
  // Teaser mode (homepage): show a single combined grid, capped by `limit`.
  if (typeof limit === "number") {
    const items = projects.slice(0, limit);
    return (
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          {withHeader && (
            <SectionHeader
              eyebrow="Selected work"
              title={<>Projects we're <span className="text-gradient">proud of</span>.</>}
              description="A glimpse of the products and services we've shipped."
            />
          )}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.length === 0 ? (
              <div className="sm:col-span-2 lg:col-span-3">
                <EmptyState label="Projects" />
              </div>
            ) : (
              items.map((p, i) => <Card key={p.title} p={p} i={i} />)
            )}
          </div>
        </div>
      </section>
    );
  }

  // Full portfolio: Products section first, then Services.
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 space-y-20 md:space-y-28">
        {withHeader && (
          <SectionHeader
            eyebrow="Selected work"
            title={<>Projects we're <span className="text-gradient">proud of</span>.</>}
            description="Our shipped products and the services we deliver to clients."
          />
        )}

        <div>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary">Products</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-display font-semibold">
                Built by <span className="text-gradient">Appmatix Solutions</span>
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.length === 0 ? (
              <div className="sm:col-span-2 lg:col-span-3">
                <EmptyState label="Products" />
              </div>
            ) : (
              products.map((p, i) => <Card key={p.title} p={p} i={i} />)
            )}
          </div>
        </div>

        <div>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary">Services</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-display font-semibold">
                Client <span className="text-gradient">engagements</span>
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesPortfolio.length === 0 ? (
              <div className="sm:col-span-2 lg:col-span-3">
                <EmptyState label="Service projects" />
              </div>
            ) : (
              servicesPortfolio.map((p, i) => <Card key={p.title} p={p} i={i} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
