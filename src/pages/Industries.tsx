import { Link } from "react-router-dom";
import { ArrowRight, Landmark, Scale, Banknote, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/industries";

const ICONS = [Landmark, Scale, Banknote];

export default function Industries() {
  return (
    <>
      <SEOHead
        title="Industries We Serve — Accountancy, Legal & Financial Services"
        description="Managed IT for regulated UK industries: accountancy and tax practices, law firms and financial services. Delivered remotely by an ISO 27001:2022 certified team."
        keywords="managed IT for regulated industries, IT support accountants, IT support law firms, IT support financial services"
        canonicalUrl="https://infodot.co.uk/industries"
      />
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24">
          <div className="container-custom">
            <Breadcrumbs />
            <div className="max-w-3xl py-8 md:py-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Industries</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Built for the regulated UK industries{" "}
                <span className="text-gradient-primary">we serve</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                We run IT end to end and remotely for accountancy practices, law firms and
                financial services firms — secure by default, with the evidence auditors,
                insurers and boards ask for produced as a matter of course.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pb-16">
              {industries.map((industry, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <Link
                    key={industry.slug}
                    to={`/industries/${industry.slug}`}
                    className="group bg-card border border-border/60 rounded-2xl p-7 hover-lift hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      {industry.navLabel}
                    </p>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {industry.headline}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-5">{industry.intro}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mb-20 rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Book a 30-minute discovery call
              </h2>
              <p className="text-muted-foreground mb-6">
                No pitch. You get an exact quote within 48 hours.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Talk to Us</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </div>
    </>
  );
}