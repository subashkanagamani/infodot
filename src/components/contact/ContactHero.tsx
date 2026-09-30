import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSection } from "@/hooks/usePageContent";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const ContactHero = () => {
  const c = useSection<{ badge: string; headingHtml: string; subheading: string; primaryLabel: string; phoneLabel: string; phoneHref: string }>(
    "contact",
    "hero",
    {
      badge: "Company · Contact",
      headingHtml: 'Book a 30-minute discovery call — <span class="text-primary">no pitch.</span>',
      subheading:
        "Tell us where your IT hurts. We'll map the gaps, tell you the two that matter most, and send an exact quote within 48 hours.",
      primaryLabel: "Send a Message",
      phoneLabel: "Email Us",
      phoneHref: "mailto:sales@infodot.co.in",
    },
  );
  const scrollToForm = () => {
    document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-secondary pt-28 pb-10 md:pt-32 md:pb-14">
      <div className="container-custom">
        <Breadcrumbs />
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-8 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.14em]">{c.badge}</span>
            </div>

            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mt-6 mb-6"
              dangerouslySetInnerHTML={{ __html: c.headingHtml }}
            />

            <p className="text-muted-foreground text-base md:text-lg max-w-2xl font-medium">
              {c.subheading}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base rounded-xl press gap-2" onClick={scrollToForm}>
                <Mail className="w-5 h-5" />
                {c.primaryLabel}
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-secondary px-8 py-6 text-base rounded-xl press gap-2" asChild>
                <a href={c.phoneHref}>
                  <Phone className="w-5 h-5" />
                  {c.phoneLabel}
                </a>
              </Button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 flex flex-col justify-center animate-slide-up" style={{ animationDelay: "0.08s" }}>
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">No pitch, no cost</span>
            <div className="mt-4">
              <div className="font-display text-4xl font-bold">48 hrs</div>
              <p className="mt-2 font-medium text-accent-foreground/70">
                For an exact quote after your discovery call.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
