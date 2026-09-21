import { Link } from "react-router-dom";
import { ArrowRight, Globe, Layout, MessageCircle } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Z" />
    <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
  </svg>
);

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
          <div className="relative flex flex-col justify-between overflow-hidden border-l-8 border-primary bg-accent px-6 py-10 text-accent-foreground sm:px-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/[0.06] blur-3xl" />
            <div className="relative z-10">
              <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent-foreground/50">
                In partnership with
              </p>
              <p className="mt-2 font-display text-4xl font-extrabold leading-none tracking-tighter text-primary sm:text-5xl">
                Essenzi Media
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-accent-foreground/20" />
                <p className="font-display text-[11px] font-bold uppercase tracking-widest text-accent-foreground/40">
                  United Kingdom
                </p>
              </div>
              <p className="mt-10 max-w-sm text-base font-medium leading-relaxed text-accent-foreground/80">
                A creative house working with professional services and technology companies across
                branding, digital and campaigns.
              </p>
            </div>
            <div className="relative z-10 mt-10 flex flex-col gap-4">
              <a
                href="https://www.essenzimedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-accent-foreground/10 bg-accent-foreground/5 px-5 py-4 transition-all duration-300 hover:bg-accent-foreground/10"
              >
                <span className="font-display text-sm font-semibold tracking-wide text-accent-foreground">
                  www.essenzimedia.com
                </span>
                <ArrowRight className="h-5 w-5 text-accent-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-primary" />
              </a>
              <a
                href="https://www.instagram.com/essenzimedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-1 transition-opacity hover:opacity-80"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-md border border-accent-foreground/40 transition-colors group-hover:border-accent-foreground">
                  <InstagramIcon className="h-3 w-3 text-accent-foreground" />
                </span>
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.15em] text-accent-foreground/60">
                  @essenzimedia
                </span>
              </a>
            </div>
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
