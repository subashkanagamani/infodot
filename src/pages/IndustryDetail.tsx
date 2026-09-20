import { Link, useParams, Navigate } from "react-router-dom";
import { Check, ShieldCheck, FileCheck2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BackToTop } from "@/components/BackToTop";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { industries, getIndustry } from "@/data/industries";

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = getIndustry(slug);

  if (!industry) return <Navigate to="/industries" replace />;

  const others = industries.filter((i) => i.slug !== industry.slug);

  return (
    <>
      <SEOHead
        title={industry.seoTitle}
        description={industry.seoDescription}
        keywords={industry.keywords}
        canonicalUrl={`https://infodot.co.uk/industries/${industry.slug}`}
      />
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24">
          {/* Hero */}
          <section className="bg-secondary pb-10 pt-2 md:pb-14">
            <div className="container-custom">
              <Breadcrumbs />
              <div className="grid grid-cols-12 gap-4 mt-6">
                <div className="col-span-12 lg:col-span-8 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                    {industry.eyebrow}
                  </p>
                  <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-[1.08]">
                    {industry.headline}
                  </h1>
                  <p className="text-muted-foreground text-base md:text-lg mb-8">{industry.intro}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="rounded-xl press bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                      <Link to="/contact">Book a 30-minute discovery call</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-xl press border-2 border-accent text-accent hover:bg-secondary" asChild>
                      <Link to="/services">See every capability</Link>
                    </Button>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 flex flex-col justify-center animate-slide-up" style={{ animationDelay: "0.08s" }}>
                  <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                  <p className="font-display text-lg font-bold mb-2">Regulated, evidenced</p>
                  <p className="text-sm text-accent-foreground/75">
                    Delivered remotely by an ISO 27001:2022 certified team.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="container-custom">
            {/* What's included */}
            <section className="py-16 md:py-20 border-t border-border">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Included</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 leading-[1.1]">What's included</h2>
              <ul className="grid grid-cols-12 gap-4">
                {industry.included.map((item, i) => (
                  <li
                    key={item}
                    className="col-span-12 md:col-span-6 flex items-start gap-3 bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-card)] animate-slide-up"
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Why it matters */}
            <section className="py-16 md:py-20 border-t border-border">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-4">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Why it matters</p>
                  <h2 className="font-display text-2xl md:text-3xl font-bold leading-[1.1]">Why it matters</h2>
                </div>
                <div className="col-span-12 lg:col-span-8 bg-card border border-border rounded-3xl p-8 shadow-[var(--shadow-card)] space-y-5">
                  {industry.whyItMatters.map((p) => (
                    <p key={p} className="text-base md:text-lg text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </section>

            {/* Compliance */}
            <section className="pb-12">
              <div className="rounded-3xl border border-border bg-accent text-accent-foreground p-7 md:p-8 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-card flex items-center justify-center flex-shrink-0 border border-border">
                  <FileCheck2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-lg mb-2">Compliance</h2>
                  <p className="text-accent-foreground/75">{industry.compliance}</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="pb-12">
              <div className="rounded-3xl bg-secondary border border-border p-8 md:p-10 text-center">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                  Book a 30-minute discovery call
                </h2>
                <p className="text-muted-foreground mb-6">
                  Exact quote within 48 hours. Infodot · Powered by Z360 · ISO 27001:2022 certified.
                </p>
                <Button size="lg" className="rounded-xl press bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <Link to="/contact">Talk to Us</Link>
                </Button>
              </div>
            </section>

            {/* Other industries */}
            <section className="pb-20">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Explore more</p>
              <h2 className="font-display text-xl font-bold mb-6">Other industries we serve</h2>
              <div className="grid grid-cols-12 gap-4">
                {others.map((o, i) => (
                  <Link
                    key={o.slug}
                    to={`/industries/${o.slug}`}
                    className="col-span-12 sm:col-span-6 group bg-card border border-border rounded-2xl p-6 hover-lift hover:border-primary/50 transition-colors shadow-[var(--shadow-card)] animate-slide-up"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                      {o.navLabel}
                    </p>
                    <p className="font-semibold mb-3 group-hover:text-primary transition-colors">
                      {o.headline}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </main>
        <WhatsAppButton />
        <BackToTop />
      </div>
    </>
  );
}
