import { Calendar, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import narenImage from "@/assets/team-naren.png";

export const BookingSection = () => {
  const { settings } = useSiteSettings();

  const handleBooking = () => {
    const calendlyLink = settings.integrations.calendlyLink;
    if (calendlyLink) {
      window.open(calendlyLink, "_blank");
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <section className="py-20 bg-secondary/50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-[450px_1fr_1fr] gap-12 items-center">
          {/* Left - Team image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src={narenImage} 
                alt="Infodot UK delivery team"
                className="w-full max-w-md h-auto object-cover rounded-2xl shadow-card"
              />
            </div>
          </div>

          {/* Middle - Profile Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-3xl font-bold">Infodot UK</h3>
                <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-muted-foreground text-lg mb-6 uppercase tracking-wide">Managed IT, Run Remotely Since 1996</p>
              
              <div className="border-l-4 border-primary pl-4 mb-8">
                <p className="text-foreground/80 text-lg leading-relaxed">
                  <span className="text-primary text-2xl">"</span>
                  We run your IT. You own your IT.
                  <span className="text-primary text-2xl">"</span>
                </p>
              </div>
            </div>

            <Button 
              onClick={handleBooking}
              size="lg"
              className="gap-2 px-12 py-6 text-lg rounded-lg"
            >
              <Calendar className="w-5 h-5" />
              Book a Discovery Call
            </Button>
          </div>

          {/* Right - Benefits Accordion */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Book This Discovery Call?
            </h2>

            <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
              <AccordionItem value="item-1" className="border border-border/50 rounded-lg bg-card overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline font-semibold">
                  No Cost, No Obligation
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  A straightforward 30-minute conversation about your current IT setup and where the gaps are — nothing to sign, no pressure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border/50 rounded-lg bg-card overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline font-semibold">
                  An Exact Quote Within 48 Hours
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  We follow up with a precise, engagement-specific quote within 48 hours — no vague ranges, no guesswork.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/50 rounded-lg bg-card overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline font-semibold">
                  Built for Regulated UK Firms
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  We'll talk through the security controls and audit evidence your firm needs as an accountancy, legal or financial services business.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border/50 rounded-lg bg-card overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline font-semibold">
                  Delivered by an ISO 27001:2022 Team
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Speak directly with the certified, remote-delivery team that would be running your IT — since 1996, for regulated UK industries.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
