import { Link } from "react-router-dom";
import { ArrowRight, Landmark, Scale, Banknote, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
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
        description="Managed IT for regulated industries: accountancy and tax practices, law firms and financial services. Delivered remotely by an ISO 27001:2022 certified team."
        keywords="managed IT for regulated industries, IT support accountants, IT support law firms, IT support financial services"
        canonicalUrl="https://infodot.consultwithprofessionals.com/industries"
      />
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24">
          <section className="bg-secondary pb-10 pt-2 md:pb-14">
            <div className="container-custom">
              <Breadcrumbs />
              <div className="grid grid-cols-12 gap-4 mt-6">
                <div className="col-span-12 lg:col-span-8 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Industries</p>
                  <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-[1.08]">
                    Built for the regulated industries <span className="text-primary">we serve</span>
                  </h1>
                  <p className="text-muted-foreground text-base md:text-lg">
                    We run IT end to end and remotely for accountancy practices, law firms and
                    financial services firms — secure by default, with the evidence auditors,
                    insurers and boards ask for produced as a matter of course.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 flex flex-col justify-center animate-slide-up" style={{ animationDelay: "0.08s" }}>
                  <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                  <p className="font-display text-lg font-bold mb-2">Secure by default</p>
                  <p className="text-sm text-accent-foreground/75">
                    Evidence produced as a matter of course for auditors, insurers and boards.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid grid-cols-12 gap-4">
                {industries.map((industry, i) => {
                  const Icon = ICONS[i % ICONS.length];
                  return (
                    <Link
                      key={industry.slug}
                      to={`/industries/${industry.slug}`}
                      className="col-span-12 md:col-span-4 group bg-card border border-border rounded-3xl p-8 hover-lift hover:border-primary/50 transition-colors shadow-[var(--shadow-card)] animate-slide-up"
                      style={{ animationDelay: `${i * 0.08}s` }}
                    >
                      <div className="w-11 h-11 rounded-xl bg-secondary border border-border flex items-center justify-center mb-5">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                        {industry.navLabel}
                      </p>
                      <h2 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {industry.headline}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-5">{industry.intro}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                        Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 rounded-3xl border border-border bg-secondary p-8 md:p-10 text-center animate-slide-up" style={{ animationDelay: "0.24s" }}>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                  Book a 30-minute discovery call
                </h2>
                <p className="text-muted-foreground mb-6">
                  No pitch. You get an exact quote within 48 hours.
                </p>
                <Button size="lg" className="rounded-xl press bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <Link to="/contact">Talk to Us</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <WhatsAppButton />
        <BackToTop />
      </div>
    </>
  );
}
