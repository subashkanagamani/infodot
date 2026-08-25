import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    question: "Where is our data held?",
    answer: "In your tenancy — Microsoft 365, Google Workspace, your cloud. We manage it; we don't move it. Access is logged, least-privilege and revocable by you at any time."
  },
  {
    question: "You're remote — who fixes hardware?",
    answer: "Over 95% of managed IT needs no site visit. For physical tasks we coordinate your local hardware vendor or smart-hands provider under our work order — you keep one point of accountability, and it's us."
  },
  {
    question: "Who actually works on our systems?",
    answer: "A named, background-checked Infodot team working business hours from our ISO 27001-certified operations centre — not an anonymous rotating pool. You'll know your engineers by name from onboarding."
  },
  {
    question: "How do you handle GDPR and offshore access?",
    answer: "A signed data processing agreement governs every engagement, with the appropriate transfer mechanism, a documented sub-processor list and breach-notification commitments. Operations are ISO 27001:2022 certified; SOC 2 in progress."
  },
  {
    question: "Co-managed or fully managed — what's the difference?",
    answer: "Co-Managed IT runs the security and operations layer alongside your in-house team, with a clear who-owns-what matrix. Fully Managed IT means we run everything — your complete IT function, delivered remotely and evidenced monthly, one team, one point of accountability. Start with either; land, then expand."
  },
  {
    question: "Are we locked in?",
    answer: "No. Notice is 1–3 months by agreement, and whenever you leave you get a documented exit pack and full reverse knowledge-transfer within 10 working days. Your keys were always yours."
  }
];

export const FAQ = () => {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              The questions directors actually ask.
            </p>
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
