import { Link } from "react-router-dom";
import { ArrowRight, Globe, Instagram, Layout, MessageCircle } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Branding",
    description:
      "The Infodot identity and design system, brand guidelines, and the design system behind Z360.",
  },
  {
    icon: Layout,
    title: "Website development",
    description:
      "Design and build of this site, plus the documents and collateral that go out to clients.",
  },
  {
    icon: MessageCircle,
    title: "Social media",
    description:
      "Channel management, content production and the campaign creative that runs across them.",
  },
];

interface MarketingPartnerProps {
  /** Show the "Read more about us" link through to the About page. */
  showAboutLink?: boolean;
}

export const MarketingPartner = ({ showAboutLink = false }: MarketingPartnerProps) => {
  return (
    <section id="partners" className="section-spacing scroll-mt-28">
      <div className="container-custom">
        <p className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
          Marketing partner
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          The team behind how Infodot looks and sounds.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          The pages, the words, the brand behind them and the campaign that brought you here are
          Essenzi&apos;s. We hold the whole of Infodot&apos;s marketing. Briefed once, run continuously.
        </p>

        <div className="mt-10 grid overflow-hidden rounded-3xl border border-border lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="bg-accent px-6 py-10 text-accent-foreground sm:px-10">
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-accent-foreground/50">
              In partnership with
            </p>
            <p className="mt-5 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Essenzi Media
            </p>
            <p className="mt-3 font-display text-[10px] font-bold uppercase tracking-[0.24em] text-accent-foreground/50">
              United Kingdom
            </p>
            <div className="mt-6 h-px w-14 bg-accent-foreground/25" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-accent-foreground/70">
              A creative house working with professional services and technology companies across
              branding, digital and campaigns.
            </p>
            <a
              href="https://www.essenzimedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground underline-offset-8 hover:text-primary hover:underline"
            >
              www.essenzimedia.com
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="bg-card px-6 py-10 sm:px-10">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
              Marketing, run end-to-end
            </p>
            <div className="mt-7 space-y-7">
              {capabilities.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Search visibility and outreach support sit alongside the above.
              </p>
              <p className="text-xs text-primary">
                Remit: Infodot&apos;s own brand, website and marketing.
              </p>
            </div>

            {showAboutLink && (
              <Link
                to="/about"
                className="group mt-6 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-foreground underline-offset-8 hover:text-primary hover:underline"
              >
                More about Infodot
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
