import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { CTABanner } from "@/components/CTABanner";
import { Testimonials } from "@/components/Testimonials";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Appmatix" },
      { name: "description", content: "A selection of products we've shipped — web platforms, mobile apps, and automation systems." },
      { property: "og:title", content: "Portfolio — Appmatix" },
      { property: "og:description", content: "Selected work from the Appmatix Solutions team." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Selected work"
        title={<>Products we've put <span className="text-gradient">into the world</span>.</>}
        description="A snapshot of recent engagements. Each project is real, shipped, and still in production. Detailed case studies available on request."
      />
      <PortfolioGrid withHeader={false} />
      <Testimonials />
      <CTABanner />
    </PageLayout>
  );
}
