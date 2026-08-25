import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Mail, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import logo from "@/assets/infodot-logo-light.png";

const steps = [
  "We review your enquiry and pull together a quick baseline audit.",
  "A strategist emails you to schedule a 30-min discovery call.",
  "On the call, you'll get 3 specific growth opportunities — free.",
];

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <>
      <SEOHead
        title="Thank You — Infodot"
        description="Thanks for reaching out. A senior strategist will be in touch within 24 hours."
        canonicalUrl="https://infodot.co.uk/thank-you"
      />

      <div className="min-h-screen bg-secondary text-foreground">
        <header className="border-b border-border bg-background sticky top-0 z-40">
          <div className="container-custom flex items-center justify-between h-16">
            <Link to="/" className="flex items-center group">
              <img src={logo} alt="Infodot" className="h-9 w-auto group-hover:scale-110 transition-transform" />
            </Link>
            <a href="mailto:hello@infodot.uk" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Mail className="h-4 w-4" /> <span className="hidden sm:inline">hello@infodot.uk</span>
            </a>
          </div>
        </header>

        <section className="py-16 md:py-24">
          <div className="container-custom max-w-2xl">
            <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-[var(--shadow-card)] text-center animate-scale-in">
              <div className="w-20 h-20 rounded-full bg-secondary border border-border flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.14em]">Enquiry received</span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">You're in. 🎉</h1>
              <p className="text-muted-foreground mb-8">
                Thanks for reaching out. A senior strategist will be in touch within{" "}
                <span className="text-foreground font-semibold">24 hours</span>.
              </p>

              <div className="text-left rounded-2xl border border-border bg-secondary p-5 md:p-6 mb-8">
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">What happens next</p>
                <ol className="space-y-3 text-sm">
                  {steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center text-xs font-bold text-primary shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-foreground/90 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button asChild size="lg" className="flex-1 gap-2 rounded-xl press bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href="mailto:hello@infodot.uk"><Mail className="h-4 w-4" /> Email us</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1 gap-2 rounded-xl press border-2 border-accent text-accent hover:bg-secondary">
                  <Link to="/services">Explore our services</Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
                <Link to="/services" className="text-primary hover:underline inline-flex items-center gap-1 font-medium">
                  Browse our services <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <span className="hidden sm:inline text-muted-foreground">·</span>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ThankYou;
