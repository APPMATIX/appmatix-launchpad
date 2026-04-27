import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { ServicesGrid } from "@/components/ServicesGrid";
import { HowWeWork } from "@/components/HowWeWork";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Appmatix Solutions" },
      { name: "description", content: "Web development, mobile apps, business automation, and UI/UX design — engineered by a senior team." },
      { property: "og:title", content: "Services — Appmatix Solutions" },
      { property: "og:description", content: "Web, mobile, ERP/CRM, and application modernisation — one company, end-to-end." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our services"
        title={<>Everything you need to <span className="text-gradient">ship great software</span>.</>}
        description="Four core disciplines, deeply integrated. Hire us for one or all — we plug in seamlessly with your team or run the whole thing."
      />
      <ServicesGrid withHeader={false} />
      <HowWeWork />
      <WhyChooseUs />
      <CTABanner />
    </PageLayout>
  );
}
