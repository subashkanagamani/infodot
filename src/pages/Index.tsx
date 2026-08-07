import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";
import { AnimatedStats } from "@/components/AnimatedStats";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { TeamProfiles } from "@/components/TeamProfiles";
import { FAQ, faqs } from "@/components/FAQ";

import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";
import { PageTransition } from "@/components/PageTransition";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd } from "@/components/JsonLd";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { CookieConsent } from "@/components/CookieConsent";
import { lazy, Suspense } from "react";

// Lazy load heavy components
const LazyPortfolio = lazy(() => import("@/components/Portfolio").then(module => ({ default: module.Portfolio })));
const LazyTeamProfiles = lazy(() => import("@/components/TeamProfiles").then(module => ({ default: module.TeamProfiles })));

// Loading fallback component
const SectionLoader = () => (
  <div className="section-spacing flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <>
      <SEOHead 
        title="Infodot UK — Managed IT for Regulated UK Industries, Run Remotely"
        description="Infodot UK runs managed IT end-to-end for accountancy, legal and financial services firms in the UK — secure by default, always audit-ready, delivered remotely by an ISO 27001:2022 certified team since 1996."
        keywords="managed IT UK, IT support for accountants, IT support for law firms, IT support for financial services, managed IT provider UK, ISO 27001 IT provider, co-managed IT, remote IT support UK"
        canonicalUrl="https://infodot.co.uk/"
      />
      <JsonLd 
        schema={{
          type: "Organization",
          name: "Infodot UK",
          url: "https://infodot.co.uk",
          logo: "https://infodot.co.uk/og-image.png",
          description: "Managed IT for the regulated UK industries we serve, run remotely",
          contactPoint: {
            email: "hello@infodot.uk",
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
      <PageTransition />
      <ScrollProgressBar />
      <div className="min-h-screen relative">
        <AmbientBackdrop />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          
          <ScrollAnimationWrapper animation="fade-in" threshold={0.2}>
            <ParallaxSection speed={0.3} direction="up">
              <ClientLogos />
            </ParallaxSection>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <ParallaxSection speed={0.4} direction="down">
              <Services />
            </ParallaxSection>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="slide-in-left" threshold={0.15}>
            <ParallaxSection speed={0.3} direction="up">
              <WhyChoose />
            </ParallaxSection>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="scale-in" threshold={0.2}>
            <ParallaxSection speed={0.5} direction="down">
              <AnimatedStats />
            </ParallaxSection>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <ParallaxSection speed={0.4} direction="up">
              <Process />
            </ParallaxSection>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="slide-in-right" threshold={0.1}>
            <ParallaxSection speed={0.35} direction="down">
              <Suspense fallback={<SectionLoader />}>
                <LazyPortfolio />
              </Suspense>
            </ParallaxSection>
          </ScrollAnimationWrapper>
          
          {/* Team section temporarily hidden
          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <ParallaxSection speed={0.3} direction="up">
              <Suspense fallback={<SectionLoader />}>
                <LazyTeamProfiles />
              </Suspense>
            </ParallaxSection>
          </ScrollAnimationWrapper>
          */}
          
          
          <ScrollAnimationWrapper animation="slide-up" threshold={0.2}>
            <ParallaxSection speed={0.3} direction="up">
              <FAQ />
            </ParallaxSection>
          </ScrollAnimationWrapper>
          
          
          <ScrollAnimationWrapper animation="slide-up" threshold={0.2}>
            <ParallaxSection speed={0.3} direction="up">
              <ContactForm />
            </ParallaxSection>
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
