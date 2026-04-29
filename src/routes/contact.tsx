import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Appmatix Solutions" },
      { name: "description", content: "Tell us about your project. We respond within one business day." },
      { property: "og:title", content: "Contact Appmatix Solutions" },
      { property: "og:description", content: "Start a project with the Appmatix Solutions team. We respond within one business day." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Start a project"
        title={<>Let's talk about <span className="text-gradient">what you're building</span>.</>}
        description="Drop a line and our founders will personally respond. No call centers, no chatbots — just a real conversation."
      />
      <ContactSection />
    </PageLayout>
  );
}
