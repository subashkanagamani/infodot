import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    question: "What if we need someone on-site?",
    answer: "Over 95% of managed IT needs no site visit. For physical tasks we coordinate your local hardware vendor or smart-hands provider under our work order, so you keep a single point of accountability."
  },
  {
    question: "Who actually works on our systems?",
    answer: "A named, background-checked Infodot team in our ISO 27001-certified Bangalore centre, working UK business hours — not an anonymous rotating pool. You'll know your engineers by name from onboarding."
  },
  {
    question: "How do you handle UK GDPR and our data?",
    answer: "A signed data processing agreement governs every engagement, with a documented sub-processor list and breach-notification commitments. Operations are ISO 27001:2022 certified; SOC 2 attestation is in progress. We manage your data; we don't move it — access is least-privilege and revocable by you at any time."
  },
  {
    question: "What hours do you cover?",
    answer: "Full UK business-day coverage as standard, with overnight monitoring and escalation. Requests late in your day are often finished before your next morning."
  },
  {
    question: "How quickly can you take over?",
    answer: "Onboarding takes about 30 days from signature, including a documented handover from your incumbent. We've run hundreds of transitions."
  },
  {
    question: "What does it cost, and how easy is it to leave?",
    answer: "Pricing is simple and predictable — a flat monthly fee for smaller teams, moving to transparent per-device pricing as you scale; see our Pricing page. Leaving is simple too: 60 days' notice, then a documented exit pack within 10 working days, with all your domains, tenancies, licences and admin rights already in your name."
  }
];

export const FAQ = () => {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Common questions</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What UK businesses ask <span className="text-primary">before switching</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
