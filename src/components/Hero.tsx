import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useSection } from "@/hooks/usePageContent";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";

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
  badge: "Managed · Secure by Default · Always Audit-Ready",
  headingHtml:
    'We run your IT <span class="text-gradient-primary">completely</span> — so it never <span class="text-gradient-primary">breaks</span> your business.',
  subheading:
    "A managed IT provider for the regulated UK industries we serve — accountancy, legal and financial services — run end to end and remotely from an ISO 27001-certified team. Security built in by default, and the evidence auditors, insurers and boards ask for produced as a matter of course.",
  tagsLabel: "We run your IT. You own your IT.",
  tags: [
    "Since 1996",
    "ISO 27001:2022 certified",
    "UK business-hours desk, delivered remotely",
    "Exact quote within 48 hours",
  ],
  primaryCtaLabel: "Book a 30-minute discovery call — no pitch",
  primaryCtaHref: "/contact",
  secondaryCtaLabel: "How It Works",
  secondaryCtaHref: "#process",
};

export const Hero = () => {
  const c = useSection<HeroContent>("home", "hero", DEFAULTS);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background">
        <AmbientBackdrop intensity="bold" />
      </div>

      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-primary/30 backdrop-blur-sm animate-slide-up hover:border-primary/50 transition-colors group">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{c.badge}</span>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up"
            style={{ animationDelay: '0.1s' }}
            dangerouslySetInnerHTML={{ __html: c.headingHtml }}
          />

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {c.subheading}
          </p>

          <p className="text-xl md:text-2xl font-bold animate-slide-up" style={{ animationDelay: '0.25s' }}>
            {c.tagsLabel}
          </p>

          {c.tags?.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex flex-wrap gap-3 justify-center">
                {c.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-muted/30 rounded-full text-sm border border-border/30 hover:border-primary/50 hover:bg-muted/50 transition-all cursor-default hover-lift"
                    style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <Button
              size="lg"
              className="gap-2 text-lg px-8 py-6 hover-lift hover-glow group relative overflow-hidden"
              onClick={() => window.open(c.primaryCtaHref, c.primaryCtaHref.startsWith('http') ? '_blank' : '_self')}
            >
              <span className="relative z-10">{c.primaryCtaLabel}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 hover-lift glow-border group"
              onClick={() => {
                if (c.secondaryCtaHref.startsWith('#')) {
                  document.querySelector(c.secondaryCtaHref)?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.open(c.secondaryCtaHref, c.secondaryCtaHref.startsWith('http') ? '_blank' : '_self');
                }
              }}
            >
              {c.secondaryCtaLabel}
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
};
