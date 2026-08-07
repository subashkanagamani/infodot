import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
        title="Legal, Privacy & Data Processing | Infodot UK"
        description="How Infodot UK handles your data: privacy policy, terms of service, DPA, UK IDTA / EU SCC transfer mechanism, sub-processor list and ISO 27001:2022 governance."
        keywords="Infodot UK legal, data processing agreement, UK IDTA, EU SCCs, sub-processor list, ISO 27001 governance"
      />
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
        </div>

        <section className="container mx-auto px-4 py-12 md:py-20">
          <Badge variant="secondary" className="mb-5">Company</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl">
            Legal, privacy &amp; data processing.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            How we handle your data, the terms we work under, and the agreements that govern
            our access. Full documents are provided at onboarding and are available on
            request.
          </p>
        </section>

        <section className="container mx-auto px-4 pb-16 grid gap-6 lg:grid-cols-2">
          <Card className="p-8">
            <h2 className="text-2xl font-extrabold tracking-tight">What's included</h2>
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
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-extrabold tracking-tight">Why it matters</h2>
            <p className="mt-4 text-muted-foreground">
              Our access model is access-only: we operate inside your tenancy under a signed
              DPA and the appropriate transfer mechanism, with breach-notification
              commitments and a documented sub-processor list.
            </p>
            <p className="mt-4 text-muted-foreground">
              Your tenant, domain, licences and data remain yours throughout.
            </p>
            <div className="mt-8 rounded-xl border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
              <strong className="text-foreground">Note.</strong> This page summarises our
              legal and data-protection framework; the definitive documents are issued at
              onboarding and are being finalised with qualified counsel. Nothing here is
              legal advice.
            </div>
          </Card>
        </section>

        <section className="container mx-auto px-4 pb-20">
          <Card className="p-8 md:p-12 bg-secondary text-secondary-foreground">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Questions about our agreements?
            </h2>
            <p className="mt-4 opacity-90 max-w-2xl">
              Book a 30-minute discovery call — no pitch. Exact quote within 48 hours.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link to="/contact">
                Talk to us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Legal;