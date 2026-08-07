import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useSiteSettings } from "@/hooks/useSiteSettings";

export default function Pricing() {
  const { settings } = useSiteSettings();
  const plans = [
    {
      name: "Essentials",
      price: "Custom quote",
      period: "",
      description: "Core managed IT, run and monitored — the day-to-day handled properly by one accountable team.",
      features: [
        "Helpdesk with 30-minute first response",
        "RMM and patch management (Windows + Mac)",
        "Microsoft 365 or Google Workspace administration",
        "Device lifecycle and joiner–mover–leaver",
        "Asset, licence and domain register",
        "Delivered remotely, on your own tenancy"
      ],
      popular: false
    },
    {
      name: "Secured",
      price: "Custom quote",
      period: "",
      description: "Essentials plus the full secure-by-default layer — hardening, EDR, backup and incident response.",
      features: [
        "Everything in Essentials",
        "Managed EDR with engineer triage",
        "Device and email hardening, MFA and conditional access",
        "Backup and tested disaster recovery",
        "Monitoring and documented incident response",
        "Security awareness and phishing simulation"
      ],
      popular: true
    },
    {
      name: "Audit-Ready",
      price: "Custom quote",
      period: "",
      description: "Secured plus continuous controls and evidence — for regulated firms who get asked to prove it.",
      features: [
        "Everything in Secured",
        "Continuous controls operation and evidence collection",
        "Cyber Essentials and cyber-insurance readiness",
        "ISO 27001 / SOC 2 audit preparation",
        "GDPR operations and FCA operational resilience support",
        "Evidence packaged monthly, not reconstructed"
      ],
      popular: false
    }
  ];

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
        title="Pricing — Priced on Scope, Not Surprises | Infodot UK"
        description="Per-user managed IT pricing by scope, with a fixed monthly fee for small offices. Essentials, Secured and Audit-Ready — exact quote within 48 hours of a discovery call."
        keywords="managed IT pricing UK, per user IT support pricing, small office fixed fee IT, Infodot UK pricing"
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
                We price per user by scope, with a fixed-fee option for small offices — and we give you an exact quote within 48 hours of a discovery call. No fixed packages, no discount games.
              </p>
            </div>
            <div
              className="col-span-12 lg:col-span-4 rounded-3xl border border-accent bg-accent text-accent-foreground p-8 shadow-[var(--shadow-card)] animate-slide-up flex flex-col justify-center"
              style={{ animationDelay: "0.08s" }}
            >
              <p className="font-display text-4xl font-bold mb-2">48h</p>
              <p className="text-accent-foreground/75">
                turnaround from discovery call to an exact quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <h2 className="sr-only">Scope Tiers</h2>
          <div className="grid grid-cols-12 gap-4">
            {plans.map((plan, index) => (
              <div
                key={index}
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
                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span className="font-display text-3xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className={plan.popular ? "text-accent-foreground/75" : "text-muted-foreground"}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm ${plan.popular ? "text-accent-foreground/75" : "text-muted-foreground"}`}>
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
                  className={`w-full rounded-xl press ${plan.popular ? "" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Book a Discovery Call
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we quote */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)] animate-slide-up">
            <h2 className="font-display text-2xl font-bold mb-3">How we quote</h2>
            <p className="text-muted-foreground mb-4">
              Your price reflects the scope you actually need run — not a discount off a rate card. We share indicative pricing on a discovery call and confirm an exact quote within 48 hours.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Per-user pricing; small offices on a fixed monthly fee",
                "Licences managed on your tenancy, or supplied and itemised",
                "Fixed discovery and onboarding fee by size",
                "Regulated engagements carry more scope and evidence — and we'll be clear about why",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Note */}
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

      <Footer />
    </div>
  );
}
