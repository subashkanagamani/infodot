import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useSection } from "@/hooks/usePageContent";

interface HeroContent {
  badge: string;
  headingHtml: string;
  subheading: string;
  tagsLabel: string;
  tags: string[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

const DEFAULTS: HeroContent = {
  badge: "Remote-first · UK managed IT, security & compliance",
  headingHtml:
    'You run your business. <span class="text-gradient-primary">We run your IT.</span>',
  subheading:
    "Managed IT, cybersecurity and compliance — delivered remotely to UK businesses from our ISO 27001-certified operations centre. Secure by default. Always audit-ready.",
  tagsLabel: "We run your IT. You own your IT.",
  tags: [
    "Serving UK businesses remotely",
    "Running IT since 1996",
    "ISO 27001:2022 certified",
    "Cyber Essentials & UK GDPR aligned",
  ],
  primaryCtaLabel: "Book a Free IT & Security Assessment",
  primaryCtaHref: "/contact",
  secondaryCtaLabel: "Talk to an IT Specialist",
  secondaryCtaHref: "/contact",
};

export const Hero = () => {
  const c = useSection<HeroContent>("home", "hero", DEFAULTS);
  const chipIcons = [ShieldCheck, Clock, Zap];
  const chips = (c.tags?.length ? c.tags : DEFAULTS.tags).slice(1, 4);

  return (
    <section id="home" className="relative bg-secondary pt-24 pb-10 md:pt-28 md:pb-14">
      <div className="container-custom">
        <div className="grid grid-cols-12 gap-4">
          {/* Main hero tile */}
          <div className="col-span-12 lg:col-span-8 lg:row-span-2 relative overflow-hidden bg-card rounded-3xl p-8 md:p-12 flex flex-col justify-between border border-border shadow-[var(--shadow-card)] animate-slide-up">
            {/* soft brand glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-16 w-[26rem] h-[26rem] rounded-full opacity-[0.07] blur-3xl bg-primary"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -left-24 w-[22rem] h-[22rem] rounded-full opacity-[0.06] blur-3xl bg-accent"
            />

            <div className="relative space-y-7">
              <div className="inline-flex items-center gap-2.5 pl-2 pr-4 py-1.5 rounded-full border border-border bg-secondary/60 backdrop-blur">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-primary opacity-60 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-accent/80">
                  {c.badge}
                </span>
              </div>

              <h1
                className="font-display text-[2.5rem] leading-[1.02] md:text-6xl lg:text-[4.25rem] font-extrabold tracking-[-0.035em] text-balance"
                dangerouslySetInnerHTML={{ __html: c.headingHtml }}
              />

              <div className="relative max-w-2xl pl-5">
                <span aria-hidden className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-primary to-accent/30" />
                <p className="text-muted-foreground text-[15px] md:text-[17px] leading-relaxed font-medium">
                  {c.subheading}
                </p>
              </div>
            </div>

            <div className="relative mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="group bg-accent text-accent-foreground hover:bg-accent/90 px-7 py-6 text-[15px] font-bold rounded-2xl shadow-[0_12px_30px_-12px_hsl(var(--accent)/0.65)] transition-all hover:-translate-y-0.5 press"
                asChild
              >
                <Link to={c.primaryCtaHref}>
                  {c.primaryCtaLabel}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-border bg-card hover:bg-secondary hover:border-accent/40 px-7 py-6 text-[15px] font-bold rounded-2xl transition-all hover:-translate-y-0.5 press"
                asChild
              >
                <Link to={c.secondaryCtaHref}>{c.secondaryCtaLabel}</Link>
              </Button>
            </div>
          </div>

          {/* Where the work is done tile */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 relative overflow-hidden animate-slide-up" style={{ animationDelay: "0.08s" }}>
            <div className="relative z-10 flex flex-col h-full">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Where's the work done</span>
              <div className="mt-4 flex-1">
                <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.05]">
                  Your tenancy, not ours.
                </h2>
                <p className="mt-3 font-medium text-accent-foreground/80 leading-relaxed">
                  Engineers work inside your systems. Nothing copied to Bangalore.
                </p>
              </div>
              <Link to="/gdpr-data-protection" className="mt-6 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 decoration-2">
                GDPR & offshore access
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10" aria-hidden>
              <div className="w-32 h-32 border-[16px] border-current rounded-full" />
            </div>
          </div>

          {/* Service standards tile */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-card rounded-3xl p-8 border border-border shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: "0.16s" }}>
            <h2 className="font-display font-bold mb-6">Service standards</h2>
            <div className="space-y-3">
              {chips.map((chip, i) => {
                const Icon = chipIcons[i] ?? ShieldCheck;
                return (
                  <div key={chip} className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
                    <span className="w-8 h-8 rounded-lg bg-card flex items-center justify-center border border-border shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </span>
                    <span className="text-sm font-bold leading-tight">{chip}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Regulated expertise tile */}
          <div className="col-span-12 md:col-span-6 bg-card rounded-3xl p-8 border border-border shadow-[var(--shadow-card)] flex flex-col justify-between animate-slide-up" style={{ animationDelay: "0.24s" }}>
            <div>
              <h2 className="font-display font-bold text-xl mb-2">Regulated expertise</h2>
              <p className="text-muted-foreground text-sm">Sector-specific controls and evidence for high-stakes firms.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Accountancy", "Legal", "Financial Services", "Small Office"].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg border border-border text-xs font-bold">{t}</span>
              ))}
            </div>
          </div>

          {/* Services tile */}
          <div className="col-span-12 md:col-span-6 bg-card rounded-3xl p-8 border border-border shadow-[var(--shadow-card)] flex flex-col justify-between animate-slide-up" style={{ animationDelay: "0.32s" }}>
            <div>
              <h2 className="font-display font-bold text-xl mb-2">{c.tagsLabel}</h2>
              <p className="text-muted-foreground text-sm">From the helpdesk and device lifecycle to EDR, hardening and audit evidence.</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex -space-x-2" aria-hidden>
                <span className="w-8 h-8 rounded-full bg-accent border-2 border-card" />
                <span className="w-8 h-8 rounded-full bg-primary border-2 border-card" />
                <span className="w-8 h-8 rounded-full bg-secondary border-2 border-card" />
              </div>
              <Link to="/services" className="text-sm font-bold underline underline-offset-4 decoration-primary decoration-2">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
