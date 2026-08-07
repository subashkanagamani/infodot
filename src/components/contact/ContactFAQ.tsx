import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How quickly can I expect a response?",
    answer: "We typically respond to all inquiries within 24 hours during UK business days. For urgent matters, email us directly at hello@infodot.uk.",
  },
  {
    question: "Do you offer a free discovery call?",
    answer: "Yes — 30 minutes, no obligation and no hard sell. We'll map your gaps, tell you the two that matter most, and follow up with an exact quote within 48 hours. It's genuinely useful whether or not you work with us.",
  },
  {
    question: "What industries do you work with?",
    answer: "We focus on the regulated UK industries we know best: accountancy, legal and financial services firms. Our controls and evidence are built around what auditors and insurers in these sectors ask for.",
  },
  {
    question: "How is IT delivered if you're based in Bangalore?",
    answer: "We're remote by design. Your engineers are a named, background-checked team in our ISO 27001:2022 certified Bangalore centre, working UK business hours inside your own tenancy — an access-only model, so your data never gets copied out to us. We've run IT this way since 1996.",
  },
  {
    question: "Do you work with large enterprises?",
    answer: "No — we deliberately focus on small and mid-sized regulated firms, and we don't offer vCISO services. If that's not the right fit for your firm, we'll tell you upfront.",
  },
  {
    question: "What happens if we ever want to leave?",
    answer: "You always own your accounts, data and documentation. If you choose to move on, we provide a full exit pack and complete reverse knowledge transfer within 10 working days.",
  },
];

export const ContactFAQ = () => {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Common Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about working with Infodot UK.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl px-6 data-[state=open]:bg-primary/5 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline py-5 text-left">
                    <span className="font-semibold pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Still Have Questions */}
          <div className="mt-8 text-center bg-gradient-to-r from-primary/10 via-neon-purple/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? We're here to help!
            </p>
            <a
              href="mailto:hello@infodot.uk"
              className="text-primary hover:underline font-medium"
            >
              Email us directly →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
