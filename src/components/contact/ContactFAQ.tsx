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
    answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, email us directly at sales@infodot.co.in.",
  },
  {
    question: "Do you offer a free discovery call?",
    answer: "Yes — 30 minutes, no obligation and no hard sell. We'll map your gaps, tell you the two that matter most, and follow up with an exact quote within 48 hours. It's genuinely useful whether or not you work with us.",
  },
  {
    question: "What industries do you work with?",
    answer: "We focus on the regulated industries we know best: accountancy, legal and financial services firms. Our controls and evidence are built around what auditors and insurers in these sectors ask for.",
  },
  {
    question: "How is IT delivered if you're based in Bangalore?",
    answer: "We're remote by design. Your engineers are a named, background-checked team in our ISO 27001:2022 certified Bangalore centre, working business hours inside your own tenancy — an access-only model, so your data never gets copied out to us. We've run IT this way since 1996.",
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
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.14em]">Common Questions</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4 leading-[1.1]">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about working with Infodot.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: "0.08s" }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-2xl px-6 data-[state=open]:bg-secondary transition-colors"
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
          <div className="mt-4 text-center rounded-3xl bg-accent text-accent-foreground p-8 animate-slide-up" style={{ animationDelay: "0.16s" }}>
            <h3 className="font-display text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-accent-foreground/70 mb-4">
              Can't find what you're looking for? We're here to help!
            </p>
            <a
              href="mailto:sales@infodot.co.in"
              className="text-primary hover:underline font-bold"
            >
              Email us directly →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
