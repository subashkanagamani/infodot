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
import { ArrowRight, CheckCircle2, Layers, Cog, FileBarChart, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Standardisation",
    copy: "Every client is run the same disciplined way, so delivery does not depend on who happens to pick up the ticket.",
  },
  {
    icon: Cog,
    title: "Automation",
    copy: "Patching, joiner/mover/leaver and control checks run automatically rather than being remembered.",
  },
  {
    icon: FileBarChart,
    title: "Reporting & evidence",
    copy: "The controls we run are captured as monthly evidence you can hand to an auditor or insurer.",
  },
  {
    icon: ShieldCheck,
    title: "Always Audit-Ready",
    copy: "The engine behind audit readiness and cyber-insurance readiness across the whole estate.",
  },
];

const included = [
  "Standardisation — every client run the same disciplined way",
  "Automation — patching, joiner/leaver and control checks run automatically",
  "Reporting & evidence — controls captured as monthly evidence",
  "The engine behind Always Audit-Ready and cyber-insurance readiness",
];

const Z360 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Z360 — The Engine Behind Your Managed IT | Infodot UK"
        description="Z360 is the operations platform behind Infodot UK's managed service: standardisation, automation and reporting that turn the controls we run into monthly evidence."
        keywords="Z360, managed IT platform, IT automation, audit evidence, standardised IT operations UK"
        canonicalUrl="https://infodot.co.uk/z360"
      />
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
        </div>

        <section className="container mx-auto px-4 py-12 md:py-20">
          <Badge variant="secondary" className="mb-5">Powered by Z360</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl">
            The engine behind your managed IT.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            Z360 is the operations platform behind the managed service — the standardisation,
            automation and reporting that make delivery consistent rather than heroic, and turn
            the controls we run into monthly evidence. It isn't sold as a standalone product;
            it's how we run your IT.
          </p>
        </section>

        <section className="container mx-auto px-4 pb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">What's included</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {included.map((item) => (
              <Card key={item} className="p-6 hover-lift">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <p className="mt-4 font-semibold">{item}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Why it matters</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, copy }) => (
              <Card key={title} className="p-6 hover-lift">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 pb-20">
          <Card className="p-8 md:p-12 bg-secondary text-secondary-foreground">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Register your interest
            </h2>
            <p className="mt-4 max-w-3xl opacity-90">
              Book a 30-minute discovery call and we'll walk you through how the service is run
              — exact quote within 48 hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Book a 30-minute discovery call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/how-it-works">How it works</Link>
              </Button>
            </div>
          </Card>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Z360;
