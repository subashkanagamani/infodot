import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Check, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { getGuide } from "@/data/guides";

export default function GuideDetail() {
  const { slug } = useParams();
  const guide = getGuide(slug);

  if (!guide) return <Navigate to="/resources" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />
      <BackToTop />

      <SEOHead
        title={`${guide.title} | Infodot`}
        description={guide.description}
        keywords={guide.keywords}
      />

      <section className="bg-secondary pt-24 pb-10 md:pt-28 md:pb-14">
        <div className="container-custom">
          <Breadcrumbs />
          <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {guide.type}
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold leading-[1.1] mt-4">
              {guide.title}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-3xl font-medium">
              {guide.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-12 gap-4">
            {guide.sections.map((section, i) => (
              <article
                key={section.heading}
                className="col-span-12 md:col-span-6 rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] animate-slide-up"
                style={{ animationDelay: `${Math.min(i, 8) * 0.05}s` }}
              >
                <h2 className="font-display text-lg font-bold">{section.heading}</h2>
                {section.intro && (
                  <p className="text-sm text-muted-foreground mt-2">{section.intro}</p>
                )}

                {section.points && (
                  <ul className="mt-4 space-y-3">
                    {section.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {(section.dos || section.donts) && (
                  <ul className="mt-4 space-y-2.5">
                    {section.dos?.map((d) => (
                      <li key={d} className="flex gap-2.5 text-sm">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                        <span>{d}</span>
                      </li>
                    ))}
                    {section.donts?.map((d) => (
                      <li key={d} className="flex gap-2.5 text-sm text-muted-foreground">
                        <X className="w-4 h-4 mt-0.5 shrink-0 text-destructive" aria-hidden="true" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-accent text-accent-foreground p-8 md:p-10 animate-slide-up">
            <p className="font-display text-xl md:text-2xl font-bold max-w-3xl">{guide.cta.text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to={guide.cta.href}>
                  {guide.cta.label}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl border-accent-foreground/30 bg-transparent text-accent-foreground hover:bg-accent-foreground/10">
                <Link to="/resources">Back to resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
