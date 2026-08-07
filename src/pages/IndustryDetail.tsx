import { Link, useParams, Navigate } from "react-router-dom";
import { Check, ShieldCheck, FileCheck2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
          <div className="container-custom">
            <Breadcrumbs />

            {/* Hero */}
            <header className="max-w-4xl py-8 md:py-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wide">
                  {industry.eyebrow}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {industry.headline}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">{industry.intro}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Book a 30-minute discovery call</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">See every capability</Link>
                </Button>
              </div>
            </header>

            {/* What's included */}
            <section className="py-10 border-t border-border/60">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">What's included</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {industry.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 bg-card border border-border/60 rounded-xl p-5"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Why it matters */}
            <section className="py-10 border-t border-border/60">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Why it matters</h2>
              <div className="max-w-3xl space-y-5">
                {industry.whyItMatters.map((p) => (
                  <p key={p} className="text-lg text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </section>

            {/* Compliance */}
            <section className="pb-12">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-7 md:p-8 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileCheck2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-bold text-lg mb-2">Compliance</h2>
                  <p className="text-muted-foreground">{industry.compliance}</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="pb-12">
              <div className="rounded-2xl bg-card border border-border/60 p-8 md:p-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Book a 30-minute discovery call
                </h2>
                <p className="text-muted-foreground mb-6">
                  Exact quote within 48 hours. Infodot UK · Powered by Z360 · ISO 27001:2022 certified.
                </p>
                <Button size="lg" asChild>
                  <Link to="/contact">Talk to Us</Link>
                </Button>
              </div>
            </section>

            {/* Other industries */}
            <section className="pb-20">
              <h2 className="text-xl font-bold mb-6">Other industries we serve</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    to={`/industries/${o.slug}`}
                    className="group bg-card border border-border/60 rounded-2xl p-6 hover-lift hover:border-primary/50 transition-colors"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      {o.navLabel}
                    </p>
                    <p className="font-semibold mb-3 group-hover:text-primary transition-colors">
                      {o.headline}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm text-primary">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </div>
    </>
  );
}