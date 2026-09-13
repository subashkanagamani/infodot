import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyChoose } from "@/components/WhyChoose";
import { Process } from "@/components/Process";
import { RemoteDelivery } from "@/components/home/RemoteDelivery";
import { HomeSectors } from "@/components/home/HomeSectors";
import { HomeCompliance } from "@/components/home/HomeCompliance";
import { HomeTrust } from "@/components/home/HomeTrust";
import { HomeOwnership } from "@/components/home/HomeOwnership";
import { HomeCta } from "@/components/home/HomeCta";
import { FAQ, faqs } from "@/components/FAQ";

import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";

import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";

import { SEOHead } from "@/components/SEOHead";
import { JsonLd } from "@/components/JsonLd";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { CookieConsent } from "@/components/CookieConsent";

const Index = () => {
  return (
    <>
      <SEOHead 
        title="Infodot — Managed IT for UK Businesses, Run Remotely"
        description="Managed IT, cybersecurity and compliance — delivered remotely to UK businesses from our ISO 27001:2022 certified operations centre. Secure by default. Always audit-ready."
        keywords="managed IT UK, IT support for accountants, IT support for law firms, IT support for financial services, managed IT provider, ISO 27001 IT provider, remote IT support, Cyber Essentials"
        canonicalUrl="https://infodot.co.uk/"
      />
      <JsonLd 
        schema={{
          type: "Organization",
          name: "Infodot",
          url: "https://infodot.co.uk",
          logo: "https://infodot.co.uk/og-image.png",
          description: "Managed IT, cybersecurity and compliance, delivered remotely to UK businesses",
          contactPoint: {
            email: "hello@infodot.co.uk",
            contactType: "sales"
          },
          sameAs: []
        }}
      />
      <JsonLd
        schema={{
          type: "FAQPage",
          questions: faqs.map((f) => ({ question: f.question, answer: f.answer })),
        }}
      />
      <ExitIntentPopup />
      <CookieConsent />
      <div className="min-h-screen relative">
        <AmbientBackdrop />
        <div className="relative z-10">
          <Navbar />
          <Hero />

          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <WhyChoose />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <Process />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <RemoteDelivery />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <HomeSectors />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <HomeCompliance />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <HomeTrust />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <HomeOwnership />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <FAQ />
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <HomeCta />
          </ScrollAnimationWrapper>

          <Footer />
          <WhatsAppButton />
          <BackToTop />
        </div>
      </div>
    </>
  );
};

export default Index;
