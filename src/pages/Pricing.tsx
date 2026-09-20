import { Check, Clock, CalendarClock, FileCheck2, Layers, ShieldCheck, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const plans = [
  {
    name: "Essentials",
    description: "Core managed IT, run and monitored — the day-to-day handled properly by one accountable team.",
    perDevice: "£25",
    flatRate: "£299",
    features: [
      "Helpdesk with 30-minute first response",
      "RMM and patch management (Windows + Mac)",
      "Microsoft 365 or Google Workspace administration",
      "Device lifecycle and joiner–mover–leaver",
      "Asset, licence and domain register",
      "Delivered remotely, on your own tenancy",
    ],
    popular: false,
  },
  {
    name: "Secured",
    description: "Essentials plus the full secure-by-default layer — hardening, EDR, backup and incident response.",
    perDevice: "£39",
    flatRate: "£499",
    features: [
      "Everything in Essentials",
      "Managed EDR with engineer triage",
      "Device and email hardening, MFA and conditional access",
      "Backup and tested disaster recovery",
      "Monitoring and documented incident response",
      "Security awareness and phishing simulation",
    ],
    popular: true,
  },
  {
    name: "Audit-Ready",
    description: "Secured plus continuous controls and evidence — for regulated firms who get asked to prove it.",
    perDevice: "£55",
    flatRate: "£699",
    features: [
      "Everything in Secured",
      "Continuous controls operation and evidence collection",
      "Cyber Essentials and cyber-insurance readiness",
      "ISO 27001 / SOC 2 audit preparation",
      "GDPR operations and FCA operational resilience support",
      "Evidence packaged monthly, not reconstructed",
    ],
    popular: false,
  },
];

const quotePoints = [
  "Per-device pricing above 15 devices; a flat monthly rate at 15 devices or fewer.",
  "Regulated engagements carry more scope and evidence — and we'll be clear about why.",
  "Licences managed on your tenancy, or supplied and itemised separately.",
];

const included = [
  {
    icon: Layers,
    title: "Platform included, licences separate.",
    body: "Prices cover the Infodot managed platform — helpdesk, RMM, ticketing, asset register and the JML workflow. Microsoft 365 / Google Workspace, EDR and backup are licensed on your existing agreement or supplied and itemised separately — never bundled at cost.",
  },
  {
    icon: ShieldCheck,
    title: "Contract terms.",
    body: "3-month initial term, then a 30-day rolling notice. If you ever leave, you get a documented exit pack within 10 working days — always, no exceptions.",
  },
  {
    icon: BadgePercent,
    title: "VAT does not apply.",
    body: "Invoiced from Infodot Technologies Pvt Ltd, India — VAT does not apply. All delivery is remote, with no on-site component.",
  },
];

const faqs = [
  {
    q: "Am I on Small Office pricing or per-device pricing?",
    a: "Count your managed devices. 15 or fewer, and you're on Small Office flat-rate pricing. More than 15, and per-device pricing applies from device 16 onward — there's no separate sign-up step, it's just how the same tier is priced at your size.",
  },
  {
    q: "Are there setup or onboarding fees?",
    a: "Onboarding is scoped per business during your discovery call. Any one-off cost is set out clearly before you commit to anything.",
  },
  {
    q: "Am I tied into a long contract?",
    a: "No. Every engagement runs on a 3-month initial term, then rolls month to month on 30 days' notice. If you leave, you get a documented exit pack within 10 working days.",
  },
  {
    q: "Do the tier prices include my Microsoft 365 or EDR licences?",
    a: "No — the platform fee is separate from vendor licensing. We'll either manage your existing Microsoft 365 / Google Workspace, EDR and backup licences, or supply and itemise them for you, always as their own line.",
  },
];

export default function Pricing() {
  const { settings } = useSiteSettings();

  const handleBookCall = () => {
    const calendlyLink = settings.integrations.calendlyLink;
    if (calendlyLink) {
      window.open(calendlyLink, "_blank");
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />
      <BackToTop />

      <SEOHead
        title="Pricing — Priced on Scope, Not Surprises | Infodot"
        description="Per-device managed IT pricing by scope, with a flat monthly rate for offices of 15 devices or fewer. Essentials from £25/device, Secured from £39/device, Audit-Ready from £55/device."
        keywords="managed IT pricing, per device IT support pricing, small office fixed fee IT, Infodot pricing"
        canonicalUrl="https://infodot.co.uk/pricing"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <Breadcrumbs />

          <div className="grid grid-cols-12 gap-4 mb-4">
            <div className="col-span-12 lg:col-span-8 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)] animate-slide-up">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Pricing</p>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-[1.08]">
                Priced on Scope, <span className="text-primary">Not Surprises</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We price per device by scope — a flat monthly rate for offices of 15 devices or fewer, published per-device rates above that. Every figure below is a real starting price, and we'll confirm your exact number within 48 hours of a discovery call.
              </p>
            </div>
            <div
              className="col-span-12 lg:col-span-4 rounded-3xl border border-accent bg-accent text-accent-foreground p-8 shadow-[var(--shadow-card)] animate-slide-up flex flex-col justify-center gap-6"
              style={{ animationDelay: "0.08s" }}
            >
              {[
                { icon: Clock, big: "48h", small: "quote turnaround" },
                { icon: CalendarClock, big: "3-month", small: "initial term" },
                { icon: FileCheck2, big: "10 days", small: "exit pack, always" },
              ].map((stat) => (
                <div key={stat.small} className="flex items-center gap-4">
                  <stat.icon className="w-6 h-6 shrink-0 text-primary" />
                  <div>
                    <p className="font-display text-2xl font-bold leading-tight">{stat.big}</p>
                    <p className="text-sm text-accent-foreground/75">{stat.small}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Three levels of scope. Priced both ways.</h2>
            <p className="text-muted-foreground">Every tier below 15 devices, and above it — same scope, two ways to pay.</p>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`col-span-12 md:col-span-4 rounded-3xl border p-8 shadow-[var(--shadow-card)] hover-lift transition-all duration-500 animate-slide-up relative ${
                  plan.popular
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-card"
                }`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    Most Common
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-1">
                    <span className="font-display text-4xl font-bold">{plan.perDevice}</span>
                    <span className={plan.popular ? "text-accent-foreground/75" : "text-muted-foreground"}>/device/mo</span>
                  </div>
                  <p className={`text-xs uppercase tracking-wide mb-3 ${plan.popular ? "text-accent-foreground/60" : "text-muted-foreground"}`}>
                    above 15 devices
                  </p>
                  <p className={`text-sm font-semibold ${plan.popular ? "text-accent-foreground/85" : ""}`}>
                    {plan.flatRate}/mo · 15 devices or fewer
                  </p>
                  <p className={`text-sm mt-3 ${plan.popular ? "text-accent-foreground/75" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={handleBookCall}
                  className="w-full rounded-xl press"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Book a Discovery Call
                </Button>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground text-center">
            No upper limit above 15 devices. The rate you see is the rate you pay at any size — pricing scales, it doesn't creep.
          </p>
        </div>
      </section>

      {/* How we quote */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)] animate-slide-up">
            <h2 className="font-display text-2xl font-bold mb-3">How we quote</h2>
            <p className="text-muted-foreground mb-4">
              Your price reflects the scope you actually need run — not a discount off a rate card. We publish starting figures for every tier and confirm an exact quote within 48 hours of a discovery call.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {quotePoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What's included in every price */}
          <div className="mt-4 grid grid-cols-12 gap-4">
            {included.map((item, index) => (
              <div
                key={item.title}
                className="col-span-12 md:col-span-4 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] animate-slide-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-4 rounded-3xl border border-accent bg-accent text-accent-foreground p-8 md:p-10 text-center animate-slide-up"
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="font-display text-2xl font-bold mb-4">Not sure which scope fits your firm?</h2>
            <p className="text-accent-foreground/75 mb-6">
              Book a 30-minute discovery call — no cost, no obligation — and we'll scope it with you, then confirm an exact quote within 48 hours.
            </p>
            <Button size="lg" className="rounded-xl press" onClick={handleBookCall}>
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">Pricing questions, answered</h2>
          <Accordion type="single" collapsible className="rounded-3xl border border-border bg-card px-6 md:px-8 shadow-[var(--shadow-card)]">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-display font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </div>
  );
}
