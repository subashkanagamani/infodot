import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, ShieldCheck, Clock, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ResourceDoc, resourcePath } from "@/data/resources/types";

/** Renders **bold** markers from source copy. */
const RichText = ({ text }: { text: string }) => (
  <>
    {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="font-extrabold text-foreground">
          {part}
        </strong>
      ) : (
        <span key={i}>{part}</span>
      )
    )}
  </>
);

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

interface Props {
  doc: ResourceDoc;
  /** Pillar doc when rendering a cluster article. */
  parent?: ResourceDoc;
  /** Cluster articles when rendering a pillar. */
  children?: ResourceDoc[];
}

export const ResourceDocLayout = ({ doc, parent, children = [] }: Props) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />
      <BackToTop />

      <SEOHead
        title={`${doc.title} | Infodot`}
        description={doc.description}
        keywords={doc.keywords}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pb-16">
        <div className="container-custom">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            <Link to="/resources" className="hover:text-primary">Resources</Link>
            {parent && (
              <>
                <ChevronRight className="h-3 w-3" />
                <Link to={`/resources/${parent.slug}`} className="hover:text-primary">{parent.navLabel}</Link>
              </>
            )}
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground/70">{doc.navLabel}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
            <div className="min-w-0 lg:col-span-8 space-y-7 animate-slide-up">
              <div className="space-y-1.5">
                <div className="h-0.5 w-12 bg-primary" />
                <span className="block uppercase tracking-[0.2em] text-[11px] font-extrabold text-primary">
                  {doc.eyebrow}
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-5xl font-extrabold leading-[1.06] tracking-tight">
                {doc.title}
              </h1>

              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-primary" /> Reviewed by an Infodot security engineer
                </span>
                <span className="hidden sm:inline">·</span>
                <span>Last updated September 2026</span>
                <span className="hidden sm:inline">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> {doc.readTime}
                </span>
              </p>
            </div>

            <div className="min-w-0 lg:col-span-4 relative lg:mt-4 animate-slide-up" style={{ animationDelay: "0.08s" }}>
              <div className="bg-foreground text-background p-8 md:p-10 relative z-10">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">
                  The short answer
                </span>
                <p className="leading-relaxed mt-5 opacity-90">{doc.shortAnswer}</p>
              </div>
              <div className="absolute -top-5 -right-5 w-full h-full border-2 border-primary z-0 hidden sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <aside className="min-w-0 lg:col-span-3 lg:sticky lg:top-28 animate-slide-up">
            <h2 className="font-display text-xs uppercase tracking-[0.2em] font-extrabold text-primary mb-6">
              On this page
            </h2>
            <ol className="space-y-3 border-l border-border">
              {doc.sections.map((s, i) => (
                <li key={s.heading}>
                  <a
                    href={`#${slugify(s.heading)}`}
                    className="block pl-5 -ml-px border-l-2 border-transparent hover:border-primary text-sm text-foreground/70 hover:text-primary transition-colors leading-snug"
                  >
                    <span className="tabular-nums font-bold text-foreground/30 mr-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>

            {children.length > 0 && (
              <div className="mt-10">
                <h2 className="font-display text-xs uppercase tracking-[0.2em] font-extrabold text-primary mb-5">
                  In this topic
                </h2>
                <ul className="space-y-3">
                  {children.map((c) => (
                    <li key={c.slug}>
                      <Link to={resourcePath(c)} className="text-sm font-medium leading-snug hover:text-primary">
                        {c.navLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

          <div className="min-w-0 lg:col-span-9 space-y-12 md:space-y-16">
            {doc.sections.map((section, i) => (
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
                    {section.heading}
                  </h2>
                </div>

                {section.paragraphs?.map((p) => (
                  <p key={p.slice(0, 40)} className="text-foreground/75 leading-relaxed mt-4 max-w-3xl">
                    {p}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-7 space-y-5">
                    {section.bullets.map((b) => (
                      <li key={b.text.slice(0, 40)} className="flex gap-4 text-foreground/80 leading-relaxed">
                        <span className="mt-2 h-2 w-2 shrink-0 bg-primary" aria-hidden="true" />
                        <span>
                          {b.title && <strong className="font-extrabold text-foreground">{b.title} </strong>}
                          {b.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}

            {/* How Infodot helps */}
            <div className="relative animate-slide-up">
              <div className="bg-foreground text-background p-8 md:p-12 relative z-10">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">
                  How Infodot helps
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight mt-4 max-w-2xl">
                  {doc.howWeHelp.heading}
                </h2>
                <p className="leading-relaxed mt-5 opacity-85 max-w-3xl">{doc.howWeHelp.body}</p>
              </div>
              <div className="absolute -bottom-5 -left-5 w-full h-full border-2 border-primary z-0 hidden sm:block" />
            </div>

            {/* Obligations */}
            <div className="bg-card border-l-4 border-primary p-8 md:p-10 shadow-xl shadow-foreground/5">
              <h2 className="font-display text-xs uppercase tracking-[0.2em] font-extrabold text-primary">
                How this maps to your obligations
              </h2>
              <p className="text-foreground/75 leading-relaxed mt-4 max-w-3xl">
                <RichText text={doc.obligations} />
              </p>
            </div>

            {/* FAQs */}
            {doc.faqs && doc.faqs.length > 0 && (
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">
                  Common questions
                </h2>
                <div className="mt-7 border-t border-border">
                  {doc.faqs.map((f) => (
                    <details key={f.question} className="group border-b border-border py-5">
                      <summary className="flex cursor-pointer items-start gap-4 font-display text-lg font-extrabold leading-snug marker:content-none">
                        <span className="text-primary">+</span>
                        <span className="group-hover:text-primary transition-colors">{f.question}</span>
                      </summary>
                      <p className="text-foreground/75 leading-relaxed mt-3 pl-8 max-w-3xl">{f.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA + read next */}
      <section className="py-16 md:py-24">
        <div className="container-custom space-y-14">
          <div className="relative">
            <div className="bg-primary text-primary-foreground p-10 md:p-14 relative z-10">
              <h2 className="font-display text-2xl md:text-4xl font-extrabold leading-snug max-w-3xl">
                {doc.ctaHeading}
              </h2>
              <p className="text-lg font-light opacity-90 mt-5 max-w-2xl">{doc.ctaText}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="rounded-md px-8 py-6 font-extrabold press" asChild>
                  <Link to="/contact">
                    Book a Free IT &amp; Security Assessment <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-md px-8 py-6 font-extrabold press bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link to="/resources">
                    <ArrowLeft className="mr-2 w-4 h-4" /> All resources
                  </Link>
                </Button>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 w-full h-full border-2 border-foreground/80 z-0 hidden sm:block" />
          </div>

          {doc.readNext.length > 0 && (
            <div>
              <h2 className="font-display text-xs uppercase tracking-[0.2em] font-extrabold text-primary mb-8">
                Read next
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {doc.readNext.map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    className="group bg-card p-8 shadow-xl shadow-foreground/5 transition-transform duration-500 hover:-translate-y-1"
                  >
                    <h3 className="font-display text-xl font-extrabold leading-snug group-hover:text-primary transition-colors">
                      {l.label}
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
};
