import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const items = [
  "Privacy policy — how we handle your data",
  "Terms of service",
  "Data processing agreement (DPA)",
  "Transfer mechanism — UK IDTA / EU SCCs for access from India",
  "Sub-processor list, available on request",
  "ISO 27001:2022 information-security governance",
];

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Legal, Privacy & Data Processing | Infodot"
        description="How Infodot handles your data: privacy policy, terms of service, DPA, UK IDTA / EU SCC transfer mechanism, sub-processor list and ISO 27001:2022 governance."
        keywords="Infodot legal, data processing agreement, UK IDTA, EU SCCs, sub-processor list, ISO 27001 governance"
      />
      <Navbar />
      <main className="pt-24">
        <section className="bg-secondary pb-10 pt-4 md:pb-14">
          <div className="container-custom">
            <Breadcrumbs />
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-8 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Company</span>
                <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[1.08] max-w-4xl">
                  Legal, privacy &amp; data processing.
                </h1>
                <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl">
                  How we handle your data, the terms we work under, and the agreements that govern
                  our access. Full documents are provided at onboarding and are available on
                  request.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 flex flex-col justify-center animate-slide-up" style={{ animationDelay: "0.08s" }}>
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Governance</span>
                <div className="mt-4 font-display text-5xl font-bold">ISO 27001</div>
                <p className="mt-2 font-medium text-accent-foreground/70">
                  Certified information-security management, 2022 standard.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container-custom grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] animate-slide-up">
              <h2 className="font-display text-2xl font-bold">What's included</h2>
              <ul className="mt-6 space-y-3">
                {items.map((i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="link" className="mt-6 px-0">
                <Link to="/privacy-policy">Read the privacy policy</Link>
              </Button>
            </div>

            <div className="col-span-12 lg:col-span-6 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: "0.08s" }}>
              <h2 className="font-display text-2xl font-bold">Why it matters</h2>
              <p className="mt-4 text-muted-foreground">
                Our access model is access-only: we operate inside your tenancy under a signed
                DPA and the appropriate transfer mechanism, with breach-notification
                commitments and a documented sub-processor list.
              </p>
              <p className="mt-4 text-muted-foreground">
                Your tenant, domain, licences and data remain yours throughout.
              </p>
              <div className="mt-8 rounded-xl border border-border bg-secondary p-5 text-sm text-muted-foreground">
                <strong className="text-foreground">Note.</strong> This page summarises our
                legal and data-protection framework; the definitive documents are issued at
                onboarding and are being finalised with qualified counsel. Nothing here is
                legal advice.
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16 md:py-24">
          <div className="container-custom">
            <div className="rounded-3xl bg-accent text-accent-foreground p-8 md:p-12 animate-slide-up">
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                Questions about our agreements?
              </h2>
              <p className="mt-4 text-accent-foreground/70 max-w-2xl">
                Book a 30-minute discovery call — no pitch. Exact quote within 48 hours.
              </p>
              <Button asChild size="lg" className="mt-8 rounded-xl press bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">
                  Talk to us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Legal;
