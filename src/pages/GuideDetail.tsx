import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check, X, BookOpen } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { getGuide, guides } from "@/data/guides";

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function GuideDetail({ slugOverride }: { slugOverride?: string } = {}) {
  const { slug } = useParams();
  const guide = getGuide(slugOverride ?? slug);

  if (!guide) return <Navigate to="/resources" replace />;

  const other = guides.filter((g) => g.slug !== guide.slug);

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

      {/* Hero */}
      <section className="pt-32 pb-14 md:pb-20">
        <div className="container-custom">
          <Breadcrumbs />

          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start mt-6">
            <div className="col-span-12 lg:col-span-8 space-y-8 animate-slide-up">
              <div className="flex items-center gap-5">
                <span className="font-display text-5xl font-extrabold text-foreground/[0.07] select-none tabular-nums leading-none">
                  {String(guides.findIndex((g) => g.slug === guide.slug) + 1).padStart(2, "0")}
                </span>
                <div className="space-y-1.5">
                  <div className="h-0.5 w-12 bg-primary" />
                  <span className="block uppercase tracking-[0.2em] text-[11px] font-extrabold text-primary">
                    {guide.type}
                  </span>
                </div>
              </div>

              <h1 className="font-display text-3xl md:text-5xl font-extrabold leading-[1.06] tracking-tight">
                {guide.title}
              </h1>

              <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed max-w-3xl border-l-4 border-primary pl-6 md:pl-8">
                {guide.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" className="rounded-md px-8 py-6 font-extrabold press" asChild>
                  <Link to={guide.cta.href}>
                    {guide.cta.label} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-md px-8 py-6 font-extrabold press" asChild>
                  <Link to="/resources">
                    <ArrowLeft className="mr-2 w-4 h-4" /> All resources
                  </Link>
                </Button>
              </div>
            </div>

            <div
              className="col-span-12 lg:col-span-4 relative lg:mt-12 animate-slide-up"
              style={{ animationDelay: "0.08s" }}
            >
              <div className="bg-primary text-primary-foreground p-8 md:p-10 shadow-2xl relative z-10">
                <BookOpen className="w-9 h-9 mb-6" />
                <div className="font-display text-5xl font-extrabold tabular-nums leading-none">
                  {guide.sections.length}
                </div>
                <p className="font-display text-lg font-extrabold leading-snug mt-3">
                  sections — read in one sitting, revisit as a checklist.
                </p>
                <div className="pt-5 mt-7 border-t border-primary-foreground/20">
                  <span className="text-xs font-bold tracking-[0.18em] uppercase opacity-80">
                    Free · No sign-up
                  </span>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 w-full h-full border-2 border-foreground/80 z-0 hidden sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom grid grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Contents */}
          <aside className="col-span-12 lg:col-span-3 lg:sticky lg:top-28 animate-slide-up">
            <h2 className="font-display text-xs uppercase tracking-[0.2em] font-extrabold text-primary mb-6">
              Contents
            </h2>
            <ol className="space-y-3 border-l border-border">
              {guide.sections.map((s, i) => (
                <li key={s.heading}>
                  <a
                    href={`#${slugify(s.heading)}`}
                    className="block pl-5 -ml-px border-l-2 border-transparent hover:border-primary text-sm text-foreground/70 hover:text-primary transition-colors leading-snug"
                  >
                    <span className="tabular-nums font-bold text-foreground/30 mr-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.heading.replace(/^\d+\.\s*/, "")}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="col-span-12 lg:col-span-9 space-y-14 md:space-y-20">
            {guide.sections.map((section, i) => (
              <article
                key={section.heading}
                id={slugify(section.heading)}
                className="scroll-mt-28 animate-slide-up"
                style={{ animationDelay: `${Math.min(i, 8) * 0.04}s` }}
              >
                <div className="relative">
                  <span className="font-display text-7xl font-black text-foreground/[0.06] absolute -top-9 -left-2 select-none tabular-nums leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="relative font-display text-2xl md:text-3xl font-extrabold tracking-tight">
                    {section.heading.replace(/^\d+\.\s*/, "")}
                  </h2>
                </div>

                {section.intro && (
                  <p className="text-foreground/70 leading-relaxed mt-4 max-w-3xl">{section.intro}</p>
                )}

                {section.points && (
                  <ul className="mt-7 grid md:grid-cols-2 gap-x-10 gap-y-5">
                    {section.points.map((p) => (
                      <li key={p} className="flex gap-4 text-foreground/80 leading-relaxed">
                        <span className="mt-2 h-2 w-2 shrink-0 bg-primary" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {(section.dos || section.donts) && (
                  <div className="mt-7 grid md:grid-cols-2 gap-6">
                    {section.dos && (
                      <div className="bg-card p-7 shadow-xl shadow-foreground/5">
                        <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-primary border-b-2 border-primary pb-3 w-fit mb-5">
                          Do
                        </h3>
                        <ul className="space-y-4">
                          {section.dos.map((d) => (
                            <li key={d} className="flex gap-3 text-foreground/85 leading-relaxed">
                              <Check className="w-4 h-4 mt-1 shrink-0 text-primary" aria-hidden="true" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {section.donts && (
                      <div className="bg-foreground text-background p-7">
                        <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.18em] opacity-80 border-b-2 border-background/30 pb-3 w-fit mb-5">
                          Don't
                        </h3>
                        <ul className="space-y-4">
                          {section.donts.map((d) => (
                            <li key={d} className="flex gap-3 leading-relaxed opacity-90">
                              <X className="w-4 h-4 mt-1 shrink-0" aria-hidden="true" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-custom space-y-14">
          <div className="relative">
            <div className="bg-primary text-primary-foreground p-10 md:p-14 relative z-10">
              <p className="font-display text-2xl md:text-4xl font-extrabold leading-snug max-w-3xl">
                {guide.cta.text}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="rounded-md px-8 py-6 font-extrabold press" asChild>
                  <Link to={guide.cta.href}>
                    {guide.cta.label} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 w-full h-full border-2 border-foreground/80 z-0 hidden sm:block" />
          </div>

          {other.length > 0 && (
            <div className="pt-6">
              <h2 className="font-display text-xs uppercase tracking-[0.2em] font-extrabold text-primary mb-8">
                Keep reading
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {other.map((g) => (
                  <Link
                    key={g.slug}
                    to={`/resources/${g.slug}`}
                    className="group bg-card p-8 shadow-xl shadow-foreground/5 transition-transform duration-500 hover:-translate-y-1"
                  >
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">
                      {g.type}
                    </span>
                    <h3 className="font-display text-xl font-extrabold leading-snug mt-4 group-hover:text-primary transition-colors">
                      {g.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-sm font-extrabold text-primary mt-6">
                      Read the guide
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
