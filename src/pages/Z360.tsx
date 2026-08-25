import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
        title="Z360 — The Engine Behind Your Managed IT | Infodot"
        description="Z360 is the operations platform behind Infodot's managed service: standardisation, automation and reporting that turn the controls we run into monthly evidence."
        keywords="Z360, managed IT platform, IT automation, audit evidence, standardised IT operations"
        canonicalUrl="https://infodot.co.uk/z360"
      />
      <Navbar />
      <main className="pt-24">
        <section className="bg-secondary pb-10 pt-2 md:pb-14">
          <div className="container-custom">
            <Breadcrumbs />
            <div className="grid grid-cols-12 gap-4 mt-6">
              <div className="col-span-12 lg:col-span-8 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Powered by Z360</p>
                <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.08]">
                  The engine behind your managed IT.
                </h1>
                <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl">
                  Z360 is the operations platform behind the managed service — the standardisation,
                  automation and reporting that make delivery consistent rather than heroic, and turn
                  the controls we run into monthly evidence. It isn't sold as a standalone product;
                  it's how we run your IT.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 flex flex-col justify-center animate-slide-up" style={{ animationDelay: "0.08s" }}>
                <Cog className="w-8 h-8 text-primary mb-4" />
                <p className="font-display text-lg font-bold mb-2">Not a product</p>
                <p className="text-sm text-accent-foreground/75">
                  It's how we run your IT — consistent, evidenced, always on.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Included</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold leading-[1.1]">What's included</h2>
            <div className="mt-7 grid grid-cols-12 gap-4">
              {included.map((item, i) => (
                <div
                  key={item}
                  className="col-span-12 sm:col-span-6 bg-card border border-border rounded-2xl p-6 hover-lift shadow-[var(--shadow-card)] animate-slide-up"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <p className="mt-4 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 bg-secondary py-16 md:py-20">
          <div className="container-custom">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Why it matters</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold leading-[1.1]">Why it matters</h2>
            <div className="mt-7 grid grid-cols-12 gap-4">
              {pillars.map(({ icon: Icon, title, copy }, i) => (
                <div
                  key={title}
                  className={`col-span-12 sm:col-span-6 lg:col-span-3 p-6 rounded-2xl border hover-lift animate-slide-up ${
                    i === 3 ? "bg-accent text-accent-foreground border-accent" : "bg-card border-border shadow-[var(--shadow-card)]"
                  }`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-display font-bold">{title}</h3>
                  <p className={`mt-2 text-sm ${i === 3 ? "text-accent-foreground/75" : "text-muted-foreground"}`}>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 pt-16 md:pt-20 bg-background">
          <div className="container-custom">
            <div className="rounded-3xl border border-border bg-secondary p-8 md:p-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-[1.1]">
                Register your interest
              </h2>
              <p className="mt-4 max-w-3xl text-muted-foreground">
                Book a 30-minute discovery call and we'll walk you through how the service is run
                — exact quote within 48 hours.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-xl press bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">
                    Book a 30-minute discovery call <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl press border-2 border-accent text-accent hover:bg-background">
                  <Link to="/how-it-works">How it works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Z360;
