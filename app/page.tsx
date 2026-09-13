import { Hero } from "@/components/sections/hero";
import { ClientLogos } from "@/components/sections/client-logos";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyElli5 } from "@/components/sections/why-elli5";
import { ProcessSteps } from "@/components/sections/process-steps";
import { StatsBand } from "@/components/sections/stats-band";
import { AiSpotlight } from "@/components/sections/ai-spotlight";
import { FaqSection } from "@/components/sections/faq-section";
import { BlogTeaser } from "@/components/sections/blog-teaser";
import { CtaBand } from "@/components/sections/cta-band";
import { faqs } from "@/content/faq";
import { faqJsonLd, localBusinessJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <Hero />
      <ClientLogos />
      <ServicesGrid />
      <WhyElli5 />
      <ProcessSteps />
      <StatsBand />
      <AiSpotlight />
      <FaqSection />
      <BlogTeaser />
      <CtaBand />
    </>
  );
}
