import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import type { EvidencePageData } from "@/data/newPages";

interface Props {
  data: EvidencePageData;
  chips?: string[];
}

export const EvidencePageLayout = ({ data, chips }: Props) => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEOHead
        title={data.seo.title}
        description={data.seo.description}
        keywords={data.seo.keywords}
        canonicalUrl={data.seo.canonical}
      />
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-secondary pb-12 pt-2 md:pb-16">
          <div className="container-custom">
            <Breadcrumbs />
            <div className="grid grid-cols-12 gap-4 mt-6">
              <div className="col-span-12 lg:col-span-8 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
                <div className="h-[3px] w-14 bg-primary mb-5" />
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                  {data.eyebrow}
                </p>
                <h1 className="font-display text-3xl md:text-5xl font-bold leading-[1.08]">{data.headline}</h1>
                <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl">{data.lead}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-xl press whitespace-normal">
                    <Link to={data.primaryCta.href}>
                      {data.primaryCta.label} <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-xl press border-2 border-accent text-accent whitespace-normal"
                  >
                    <Link to={data.secondaryCta.href}>{data.secondaryCta.label}</Link>
                  </Button>
                </div>
                {chips && (
                  <div className="mt-7 flex flex-wrap gap-2">
                    {chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="col-span-12 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 shadow-[var(--shadow-card)] animate-slide-up relative overflow-hidden"
                style={{ animationDelay: "0.08s" }}
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-accent-foreground/10" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-6">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  {data.heroBadge && (
                    <div className="mb-6 rounded-2xl border border-accent-foreground/20 bg-accent-foreground/5 px-4 py-3">
                      <p className="font-display text-2xl font-bold leading-none">{data.heroBadge.big}</p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-accent-foreground/70">
                        {data.heroBadge.small}
                      </p>
                    </div>
                  )}
                  <div className="space-y-6">
                    {data.stats.map((s) => (
                      <div key={s.small}>
                        <p className="font-display text-2xl font-bold leading-tight">{s.big}</p>
                        <p className="text-sm text-accent-foreground/75">{s.small}</p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="section-padding">
          <div className="container-custom">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              {data.whySection.eyebrow}
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-bold leading-[1.1] max-w-4xl">
              {data.whySection.heading}
            </h2>
            <p className="mt-6 text-muted-foreground max-w-4xl">{data.whySection.body}</p>
            <div className="mt-8 grid grid-cols-12 gap-4">
              {data.whySection.points.map((p, i) => (
                <div
                  key={p.title}
                  className="col-span-12 md:col-span-6 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover-lift animate-slide-up"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <Check className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 font-display font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
            {data.callout && (
              <div className="mt-10 grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-5 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                    {data.callout.eyebrow}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl font-bold leading-[1.15]">
                    {data.callout.heading}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-7 rounded-3xl bg-accent text-accent-foreground p-8 shadow-[var(--shadow-card)]">
                  <p className="text-sm md:text-base text-accent-foreground/85">{data.callout.body}</p>
                </div>
              </div>
            )}
          </div>
        </section>


        {/* Process */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              {data.process.eyebrow}
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-bold leading-[1.1] max-w-3xl">
              {data.process.heading}
            </h2>
            <div className="mt-8 grid grid-cols-12 gap-4">
              {data.process.steps.map((s, i) => (
                <div
                  key={s.index}
                  className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] animate-slide-up"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {s.index} · {s.label}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </div>
              ))}
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-2xl border border-accent bg-accent text-accent-foreground p-6 shadow-[var(--shadow-card)] flex flex-col justify-between">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">→</p>
                  <h3 className="mt-3 font-display text-lg font-bold">See where you stand today</h3>
                  <p className="mt-2 text-sm text-accent-foreground/75">{data.cta.body}</p>
                </div>
                <Button asChild className="mt-6 rounded-xl press whitespace-normal">
                  <Link to="/contact">{data.cta.button}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Standard */}
        <section className="section-padding">
          <div className="container-custom">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              {data.standard.eyebrow}
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-bold leading-[1.1] max-w-4xl">
              {data.standard.heading}
            </h2>
            <div className="mt-8 grid grid-cols-12 gap-4">
              {data.standard.points.map((p, i) => (
                <div
                  key={p.title}
                  className="col-span-12 sm:col-span-6 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] animate-slide-up"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <Check className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 font-display font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ownership */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              {data.ownership.eyebrow}
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-bold leading-[1.1] max-w-3xl">
              {data.ownership.heading}
            </h2>
            <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border bg-accent text-accent-foreground">
                <p className="px-6 py-4 font-display text-xs font-bold uppercase tracking-[0.2em]">We own</p>
                <p className="px-6 py-4 font-display text-xs font-bold uppercase tracking-[0.2em] md:border-l border-accent-foreground/15">
                  You own — we support with evidence
                </p>
              </div>
              {data.ownership.rows.map((r) => (
                <div key={r.we} className="grid grid-cols-1 md:grid-cols-2 border-b border-border last:border-0">
                  <p className="px-6 py-4 text-sm">{r.we}</p>
                  <p className="px-6 py-4 text-sm text-muted-foreground md:border-l border-border">{r.you}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-3xl font-display font-semibold">{data.ownership.closing}</p>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="rounded-3xl border border-accent bg-accent text-accent-foreground p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-24 h-64 w-64 rounded-full border border-accent-foreground/10" />
              <div className="relative">
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                  {data.cta.eyebrow}
                </p>
                <h2 className="font-display text-2xl md:text-4xl font-bold leading-[1.1] max-w-3xl">
                  {data.cta.heading}
                </h2>
                <p className="mt-4 max-w-3xl text-accent-foreground/75">{data.cta.body}</p>
                <Button asChild size="lg" className="mt-8 rounded-xl press whitespace-normal">
                  <Link to="/contact">
                    {data.cta.button} <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                  </Link>
                </Button>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted-foreground max-w-4xl">{data.footnote}</p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};
