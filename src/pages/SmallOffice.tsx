import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

const included = [
  "Helpdesk with 30-minute first response",
  "Monitoring and patching (Windows + Mac)",
  "Microsoft 365 or Google Workspace admin",
  "Endpoint and email hardening",
  "Onboarding and exit (joiner–mover–leaver)",
  "Asset, licence and domain management",
];

const howItWorks = [
  "Delivered remotely; physical tasks coordinated via your local smart-hands",
  "A fixed monthly fee by office size, plus a one-off discovery and onboarding fee",
  "Licences managed on your own tenancy, or supplied and itemised",
  "Notice 1–3 months by agreement, with a documented exit pack whenever you leave",
];

const SmallOffice = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Small Office IT Support — Fixed Monthly Fee | Infodot UK"
        description="For offices from five seats up: clean control of your IT in about 30 days, run remotely for a fixed monthly fee scoped to your size — with your keys staying yours."
        keywords="small office IT support UK, fixed fee managed IT, 5-20 seat IT support, remote IT management"
        canonicalUrl="https://infodot.co.uk/small-office"
      />
      <Navbar />
      <main className="pt-24">
        <section className="bg-secondary pb-10 pt-2 md:pb-14">
          <div className="container-custom">
            <Breadcrumbs />
            <div className="grid grid-cols-12 gap-4 mt-6">
              <div className="col-span-12 lg:col-span-8 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">How you buy</p>
                <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.08]">
                  A small team that just wants IT to work — run quietly, remotely.
                </h1>
                <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl">
                  For offices from five seats up: we take clean control of your IT in about 30 days
                  and run the essentials remotely, for a fixed monthly fee scoped to your size —
                  with your keys staying yours.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 flex flex-col justify-center animate-slide-up" style={{ animationDelay: "0.08s" }}>
                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                <p className="font-display text-lg font-bold mb-2">Fixed monthly fee</p>
                <p className="text-sm text-accent-foreground/75">
                  Scoped to your size, with your keys staying yours.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Included</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold leading-[1.1]">What's included</h2>
            <div className="mt-7 grid grid-cols-12 gap-4">
              {included.map((item, i) => (
                <div
                  key={item}
                  className="col-span-12 sm:col-span-6 lg:col-span-4 bg-card border border-border rounded-2xl p-6 hover-lift shadow-[var(--shadow-card)] animate-slide-up"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <p className="mt-4 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container-custom">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-6 bg-card border border-border rounded-3xl p-8 shadow-[var(--shadow-card)]">
                <h2 className="font-display text-2xl font-bold">Why it matters</h2>
                <p className="mt-4 text-muted-foreground">
                  Small offices are under-served — local providers find them uneconomic, so they
                  get neglected. Our remote delivery makes running a five-to-twenty-seat office
                  properly both viable and affordable, without a heavy on-site footprint.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-6 bg-card border border-border rounded-3xl p-8 shadow-[var(--shadow-card)]">
                <h2 className="font-display text-2xl font-bold">How it works</h2>
                <ul className="mt-5 space-y-3">
                  {howItWorks.map((p) => (
                    <li key={p} className="flex gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-custom">
            <div className="rounded-3xl border border-border bg-secondary p-8 md:p-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-[1.1]">
                Ready when you are
              </h2>
              <p className="mt-4 max-w-3xl text-muted-foreground">
                Book a 30-minute discovery call and we'll scope your office honestly — exact
                quote within 48 hours.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-xl press bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">
                    Book a 30-minute discovery call <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl press border-2 border-accent text-accent hover:bg-background">
                  <Link to="/services/it-transition-exit">IT Transition &amp; Exit</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl press border-2 border-accent text-accent hover:bg-background">
                  <Link to="/services/cyber-essentials-readiness">Cyber Essentials</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default SmallOffice;
