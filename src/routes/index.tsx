import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { Hero } from "@/components/Hero";
import { AboutTeaser } from "@/components/AboutTeaser";
import { ServicesGrid } from "@/components/ServicesGrid";
import { HowWeWork } from "@/components/HowWeWork";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <PageLayout>
      <Hero />
      <AboutTeaser />
      <ServicesGrid />
      <HowWeWork />
      <PortfolioGrid limit={3} />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </PageLayout>
  );
}
