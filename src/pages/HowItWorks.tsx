import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
        <section className="bg-secondary pb-10 pt-2 md:pb-14">
          <div className="container-custom">
            <Breadcrumbs />
            <div className="grid grid-cols-12 gap-4 mt-6">
              <div className="col-span-12 lg:col-span-8 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">How you buy</p>
                <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.08]">
                  Start alongside your team. Or hand us the lot.
                </h1>
                <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl">
                  Three ways to engage us, so you can start where it suits and expand when you're
                  ready. Whichever you choose, the principles are the same: secure by default,
                  evidenced monthly, and you own everything underneath.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 flex flex-col justify-center animate-slide-up" style={{ animationDelay: "0.08s" }}>
                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                <p className="font-display text-lg font-bold mb-2">Same principles throughout</p>
                <p className="text-sm text-accent-foreground/75">
                  Secure by default, evidenced monthly, you own everything underneath.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-12 gap-4">
              {models.map((m, index) => (
                <div
                  key={m.name}
                  className={`col-span-12 md:col-span-4 p-8 rounded-3xl border hover-lift animate-slide-up ${
                    index === 0
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-card border-border shadow-[var(--shadow-card)]"
                  }`}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="w-11 h-11 bg-card rounded-xl flex items-center justify-center border border-border">
                    <m.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className={`mt-5 font-display text-xs font-bold uppercase tracking-[0.2em] ${index === 0 ? "text-primary" : "text-primary"}`}>
                    {m.tag}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-bold">{m.name}</h2>
                  <p className={`mt-3 ${index === 0 ? "text-accent-foreground/75" : "text-muted-foreground"}`}>{m.summary}</p>
                  <ul className="mt-5 space-y-2">
                    {m.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-custom">
            <div className="rounded-3xl border border-border bg-secondary p-8 md:p-12">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Why it matters</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-[1.1]">
                Why it matters
              </h2>
              <p className="mt-4 max-w-3xl text-muted-foreground">
                Most clients start co-managed and grow into fully managed as trust builds.
                Whichever model you pick, you own your tenancy, domain and licences throughout
                — and the exit stays clean.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-xl press bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">
                    Book a 30-minute discovery call <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl press border-2 border-accent text-accent hover:bg-background">
                  <Link to="/services">See every capability</Link>
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                No pitch. Exact quote within 48 hours.
              </p>
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

export default HowItWorks;
