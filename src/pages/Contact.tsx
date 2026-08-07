import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { BackToTop } from "@/components/BackToTop";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { ContactMap } from "@/components/contact/ContactMap";
import { ContactFAQ } from "@/components/contact/ContactFAQ";

const Contact = () => {
  return (
    <>
      <SEOHead
        title="Contact Infodot UK — Book a Discovery Call"
        description="Talk to Infodot UK about running your IT completely. Book a 30-minute discovery call — no cost, no obligation — and get an exact quote within 48 hours."
        keywords="contact Infodot UK, managed IT provider UK, book a discovery call, IT support quote, hello@infodot.uk"
        canonicalUrl="https://infodot.co.uk/contact"
      />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <ContactHero />
          
          <ScrollAnimationWrapper animation="slide-up">
            <ContactInfo />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="fade-in">
            <ContactFormSection />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="slide-up">
            <ContactMap />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="scale-in">
            <ContactFAQ />
          </ScrollAnimationWrapper>
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </div>
    </>
  );
};

export default Contact;
