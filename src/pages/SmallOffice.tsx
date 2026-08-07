import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
        <div className="container mx-auto px-4">
          <Breadcrumbs />
        </div>

        <section className="container mx-auto px-4 py-12 md:py-20">
          <Badge variant="secondary" className="mb-5">How you buy</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl">
            A small team that just wants IT to work — run quietly, remotely.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            For offices from five seats up: we take clean control of your IT in about 30 days
            and run the essentials remotely, for a fixed monthly fee scoped to your size —
            with your keys staying yours.
          </p>
        </section>

        <section className="container mx-auto px-4 pb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">What's included</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <Card key={item} className="p-6 hover-lift">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <p className="mt-4 font-semibold">{item}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="p-8">
              <h2 className="text-2xl font-extrabold tracking-tight">Why it matters</h2>
              <p className="mt-4 text-muted-foreground">
                Small offices are under-served — local providers find them uneconomic, so they
                get neglected. Our remote delivery makes running a five-to-twenty-seat office
                properly both viable and affordable, without a heavy on-site footprint.
              </p>
            </Card>
            <Card className="p-8">
              <h2 className="text-2xl font-extrabold tracking-tight">How it works</h2>
              <ul className="mt-5 space-y-3">
                {howItWorks.map((p) => (
                  <li key={p} className="flex gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-20">
          <Card className="p-8 md:p-12 bg-secondary text-secondary-foreground">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Ready when you are
            </h2>
            <p className="mt-4 max-w-3xl opacity-90">
              Book a 30-minute discovery call and we'll scope your office honestly — exact
              quote within 48 hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Book a 30-minute discovery call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services/it-transition-exit">IT Transition &amp; Exit</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services/cyber-essentials-readiness">Cyber Essentials</Link>
              </Button>
            </div>
          </Card>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default SmallOffice;
