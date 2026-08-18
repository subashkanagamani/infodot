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
  badge: "Managed IT • Cybersecurity • Compliance",
  headingHtml:
    'You run your business. <span class="text-gradient-primary">We run your IT.</span>',
  subheading:
    "Managed IT, Cybersecurity & Compliance for growing UK businesses. Your IT should enable your business — not become another thing you have to manage. Infodot gives compliance-conscious UK organisations one accountable technology partner — run end to end, remotely, from an ISO 27001-certified team. Security is built in by default, and the evidence your auditors, insurers and clients ask for is produced as a matter of course.",
  tagsLabel: "We run your IT. You own your IT.",
  tags: [
    "Since 1996",
    "ISO 27001:2022 certified",
    "UK business-hours desk, delivered remotely",
    "Exact quote within 48 hours",
  ],
  primaryCtaLabel: "Book a Free IT & Security Assessment",
  primaryCtaHref: "/contact",
  secondaryCtaLabel: "Explore Our Services",
  secondaryCtaHref: "/services",
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
          <div className="col-span-12 lg:col-span-8 lg:row-span-2 bg-card rounded-3xl p-8 md:p-10 flex flex-col justify-between border border-border shadow-[var(--shadow-card)] animate-slide-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.14em]">{c.badge}</span>
              </div>

              <h1
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08]"
                dangerouslySetInnerHTML={{ __html: c.headingHtml }}
              />

              <p className="text-muted-foreground text-base md:text-lg max-w-2xl font-medium">
                {c.subheading}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base rounded-xl press" asChild>
                <Link to={c.primaryCtaHref}>
                  {c.primaryCtaLabel}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-secondary px-8 py-6 text-base rounded-xl press" asChild>
                <Link to="/how-it-works">{c.secondaryCtaLabel}</Link>
              </Button>
            </div>
          </div>

          {/* Heritage tile */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 relative overflow-hidden animate-slide-up" style={{ animationDelay: "0.08s" }}>
            <div className="relative z-10">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Heritage</span>
              <div className="mt-4">
                <div className="font-display text-5xl font-bold">1996</div>
                <p className="mt-2 font-medium text-accent-foreground/70">
                  Running IT for regulated UK businesses for nearly three decades.
                </p>
              </div>
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
              <p className="text-muted-foreground text-sm">Sector-specific controls and evidence for high-stakes UK firms.</p>
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
                View all services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
