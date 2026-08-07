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
    <section className="py-20 bg-[#1a1a1a] text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[450px_1fr_1fr] gap-12 items-center">
          {/* Left - Team image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src={narenImage} 
                alt="Infodot UK delivery team"
                className="w-full max-w-md h-auto object-cover"
              />
            </div>
          </div>

          {/* Middle - Profile Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-3xl font-bold">Infodot UK</h3>
                <div className="w-8 h-8 bg-[#2DD4BF]/20 rounded flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#2DD4BF]" />
                </div>
              </div>
              <p className="text-gray-400 text-lg mb-6">MANAGED IT, RUN REMOTELY SINCE 1996</p>
              
              <div className="border-l-4 border-[#F59E0B] pl-4 mb-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  <span className="text-[#F59E0B] text-2xl">"</span>
                  We run your IT. You own your IT.
                  <span className="text-[#F59E0B] text-2xl">"</span>
                </p>
              </div>
            </div>

            <Button 
              onClick={handleBooking}
              size="lg"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-bold px-12 py-6 text-lg rounded-lg"
            >
              Book a Discovery Call
            </Button>
          </div>

          {/* Right - Benefits Accordion */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Book This Discovery Call?
            </h2>

            <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="bg-[#F59E0B] text-black hover:bg-[#D97706] px-6 py-4 rounded-lg font-bold text-left hover:no-underline [&[data-state=open]]:rounded-b-none">
                  No Cost, No Obligation
                </AccordionTrigger>
                <AccordionContent className="bg-white text-black px-6 py-4 rounded-b-lg">
                  A straightforward 30-minute conversation about your current IT setup and where the gaps are — nothing to sign, no pressure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none">
                <AccordionTrigger className="bg-[#F59E0B] text-black hover:bg-[#D97706] px-6 py-4 rounded-lg font-bold text-left hover:no-underline [&[data-state=open]]:rounded-b-none">
                  An Exact Quote Within 48 Hours
                </AccordionTrigger>
                <AccordionContent className="bg-white text-black px-6 py-4 rounded-b-lg">
                  We follow up with a precise, engagement-specific quote within 48 hours — no vague ranges, no guesswork.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionTrigger className="bg-[#F59E0B] text-black hover:bg-[#D97706] px-6 py-4 rounded-lg font-bold text-left hover:no-underline [&[data-state=open]]:rounded-b-none">
                  Built for Regulated UK Firms
                </AccordionTrigger>
                <AccordionContent className="bg-white text-black px-6 py-4 rounded-b-lg">
                  We'll talk through the security controls and audit evidence your firm needs as an accountancy, legal or financial services business.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none">
                <AccordionTrigger className="bg-[#F59E0B] text-black hover:bg-[#D97706] px-6 py-4 rounded-lg font-bold text-left hover:no-underline [&[data-state=open]]:rounded-b-none">
                  Delivered by an ISO 27001:2022 Team
                </AccordionTrigger>
                <AccordionContent className="bg-white text-black px-6 py-4 rounded-b-lg">
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
