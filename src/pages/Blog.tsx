import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { blogPosts, blogCategories, blogReadTime } from "@/data/blogPosts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function Blog() {
  const [active, setActive] = useState<string>("All");

  const posts = useMemo(
    () => (active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active)),
    [active],
  );

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEOHead
        title="IT & Compliance Insights — Infodot Blog"
        description="Plain-English notes on managed IT, cybersecurity and compliance for UK businesses — from a team that's been running IT since 1996."
        canonicalUrl="https://infodot.co.uk/blog"
      />
      <Navbar />

      <header className="border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-5">
              Infodot · Insights
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05] max-w-4xl">
              IT &amp; Compliance <span className="text-primary">Insights</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Plain-English notes on managed IT, cybersecurity and compliance — what matters, what to
              do about it, and the evidence it leaves behind.
            </p>
          </ScrollAnimationWrapper>

          <div className="mt-10 flex flex-wrap gap-2">
            {["All", ...blogCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat}
                <span className="ml-2 text-xs opacity-70">
                  {cat === "All" ? blogPosts.length : blogPosts.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px bg-border/60 border border-border/60 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <ScrollAnimationWrapper key={post.slug} animation="slide-up" threshold={0.1}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col bg-card p-8 transition-colors hover:bg-secondary/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {post.cornerstone && (
                    <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                      <Star className="h-3 w-3" /> Cornerstone
                    </span>
                  )}
                  <h2 className="mt-4 text-xl font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" /> {formatDate(post.published)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> {blogReadTime(post)}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
