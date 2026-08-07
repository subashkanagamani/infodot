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
import { Users, ShieldCheck, Cloud, ArrowRight, CheckCircle2 } from "lucide-react";

const models = [
  {
    icon: Users,
    name: "Co-Managed IT",
    tag: "Most clients start here",
    summary:
      "We run the security and operations layer alongside your in-house team, with a clear who-owns-what matrix.",
    points: [
      "Clear responsibility matrix from day one",
      "Your team keeps the relationships it owns",
      "We take the security and operations load",
    ],
  },
  {
    icon: ShieldCheck,
    name: "Fully Managed IT",
    tag: "One point of accountability",
    summary:
      "We run your complete IT function, delivered remotely and evidenced monthly. One team, one point of accountability.",
    points: [
      "Whole IT function under one team",
      "Delivered remotely, evidenced every month",
      "No internal IT hire needed",
    ],
  },
  {
    icon: Cloud,
    name: "Fully Remote",
    tag: "An honest boundary",
    summary:
      "You own on-ground and break-fix; we run everything remote. An honest boundary, stated plainly.",
    points: [
      "Everything remote is ours",
      "On-site hands stay with you",
      "No vague promises about site visits",
    ],
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How It Works — Co-Managed, Fully Managed or Fully Remote | Infodot UK"
        description="Three ways to engage Infodot UK: co-managed IT alongside your team, fully managed IT, or fully remote. Secure by default, evidenced monthly, you own everything underneath."
        keywords="co-managed IT, fully managed IT, fully remote IT support, IT engagement models UK"
      />
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
        </div>

        <section className="container mx-auto px-4 py-12 md:py-20">
          <Badge variant="secondary" className="mb-5">How you buy</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl">
            Start alongside your team. Or hand us the lot.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Three ways to engage us, so you can start where it suits and expand when you're
            ready. Whichever you choose, the principles are the same: secure by default,
            evidenced monthly, and you own everything underneath.
          </p>
        </section>

        <section className="container mx-auto px-4 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {models.map((m) => (
              <Card key={m.name} className="p-7 hover-lift">
                <m.icon className="h-9 w-9 text-primary" />
                <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">
                  {m.tag}
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight">{m.name}</h2>
                <p className="mt-3 text-muted-foreground">{m.summary}</p>
                <ul className="mt-5 space-y-2">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 pb-20">
          <Card className="p-8 md:p-12 bg-secondary text-secondary-foreground">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Why it matters
            </h2>
            <p className="mt-4 max-w-3xl opacity-90">
              Most clients start co-managed and grow into fully managed as trust builds.
              Whichever model you pick, you own your tenancy, domain and licences throughout
              — and the exit stays clean.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Book a 30-minute discovery call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">See every capability</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm opacity-75">
              No pitch. Exact quote within 48 hours.
            </p>
          </Card>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default HowItWorks;