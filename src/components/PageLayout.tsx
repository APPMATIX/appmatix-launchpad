import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "sonner";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" richColors />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-96 w-[800px] max-w-full rounded-full bg-primary/15 blur-3xl -z-10" />
      <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium tracking-wider uppercase text-primary mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {eyebrow}
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-[1.05]">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
