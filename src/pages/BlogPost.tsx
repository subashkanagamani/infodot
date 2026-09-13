import { Link, useParams } from "react-router-dom";
import { ArrowRight, Calendar, Check, ChevronRight, Clock, StickyNote } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd } from "@/components/JsonLd";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { blogPosts, blogReadTime } from "@/data/blogPosts";
import NotFound from "./NotFound";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.slug === id);

  if (!post) return <NotFound />;

  const related = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEOHead
        title={`${post.title} — Infodot Insights`}
        description={post.excerpt}
        canonical={`https://infodot.co.uk/blog/${post.slug}`}
        type="article"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.published,
          dateModified: post.published,
          author: { "@type": "Organization", name: "Infodot", url: "https://infodot.co.uk" },
          publisher: { "@type": "Organization", name: "Infodot", url: "https://infodot.co.uk" },
          mainEntityOfPage: `https://infodot.co.uk/blog/${post.slug}`,
        }}
      />
      <Navbar />

      <header className="border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 max-w-4xl">
          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-8">
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-primary">{post.category}</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground/70 normal-case tracking-normal font-normal">
                {post.title.length > 48 ? `${post.title.slice(0, 48)}…` : post.title}
              </span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              {post.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
            <div className="mt-8 flex items-center gap-5 text-sm text-muted-foreground border-t border-border/60 pt-6">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" /> {formatDate(post.published)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> {blogReadTime(post)}
              </span>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </header>

      <article className="py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <p className="text-lg leading-relaxed text-foreground/90">{post.intro}</p>
          </ScrollAnimationWrapper>

          <div className="mt-12 space-y-10">
            {post.blocks.map((block, i) =>
              block.kind === "section" ? (
                <ScrollAnimationWrapper key={i} animation="slide-up" threshold={0.1}>
                  <section className="rounded-2xl border border-border/60 bg-card p-8">
                    {block.heading && (
                      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">
                        {block.heading}
                      </h2>
                    )}
                    {block.body && (
                      <p className="text-foreground/90 leading-relaxed">{block.body}</p>
                    )}
                    {block.points && (
                      <ul className="space-y-3">
                        {block.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                              <Check className="h-3 w-3 text-primary" />
                            </span>
                            <span className="text-foreground/90 leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                </ScrollAnimationWrapper>
              ) : (
                <ScrollAnimationWrapper key={i} animation="slide-up" threshold={0.1}>
                  <aside className="rounded-2xl bg-accent p-8 text-accent-foreground">
                    <div className="flex items-center gap-2 mb-3">
                      <StickyNote className="h-4 w-4 text-primary" />
                      <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                        {block.label}
                      </span>
                    </div>
                    <p className="leading-relaxed text-accent-foreground/90">{block.text}</p>
                  </aside>
                </ScrollAnimationWrapper>
              ),
            )}
          </div>

          {post.howInfodot && (
            <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
              <section className="mt-12 rounded-2xl border-l-4 border-primary bg-secondary/40 p-8">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-3">
                  How Infodot helps
                </h2>
                <p className="text-foreground/90 leading-relaxed">{post.howInfodot}</p>
              </section>
            </ScrollAnimationWrapper>
          )}

          {post.links.length > 0 && (
            <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
              <div className="mt-10 flex flex-wrap gap-3">
                {post.links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {link.label} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </ScrollAnimationWrapper>
          )}

          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <section className="mt-14 rounded-2xl bg-accent p-10 md:p-14 text-center text-accent-foreground">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Book a free IT &amp; security assessment
              </h2>
              <p className="mt-4 text-accent-foreground/80 max-w-xl mx-auto leading-relaxed">
                {post.ctaLine}
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Book a Free IT &amp; Security Assessment <ArrowRight className="h-4 w-4" />
              </Link>
            </section>
          </ScrollAnimationWrapper>

          {related.length > 0 && (
            <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
              <section className="mt-16">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
                  More in {post.category}
                </h2>
                <div className="grid gap-px bg-border/60 border border-border/60 rounded-2xl overflow-hidden md:grid-cols-3">
                  {related.map((rel) => (
                    <Link
                      key={rel.slug}
                      to={`/blog/${rel.slug}`}
                      className="group flex h-full flex-col bg-card p-6 hover:bg-secondary/40 transition-colors"
                    >
                      <h3 className="font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                        {rel.title}
                      </h3>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            </ScrollAnimationWrapper>
          )}
        </div>
      </article>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
