import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import NotFound from "./NotFound";
import DOMPurify from "dompurify";

interface Page {
  id: string;
  slug: string;
  title: string;
  meta_description: string | null;
  og_image: string | null;
  published: boolean;
}

interface Section {
  id: string;
  type: string;
  content: any;
  sort_order: number;
}

const RESERVED = new Set([
  "about", "services", "portfolio", "pricing", "blog", "case-studies",
  "careers", "resources", "privacy-policy", "contact", "auth", "admin",
]);

function Hero({ c }: { c: any }) {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)] space-y-5 animate-slide-up">
            {c.eyebrow && <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">{c.eyebrow}</p>}
            {c.heading && <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.08]">{c.heading}</h1>}
            {c.subheading && <p className="text-lg text-muted-foreground">{c.subheading}</p>}
            {c.ctaLabel && c.ctaHref && (
              <Button asChild size="lg" className="rounded-xl press bg-accent text-accent-foreground hover:bg-accent/90">
                <a href={c.ctaHref}>{c.ctaLabel}</a>
              </Button>
            )}
          </div>
          {c.image && (
            <div className="rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: "0.08s" }}>
              <img src={c.image} alt={c.heading || ""} className="rounded-2xl w-full" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function TextBlock({ c }: { c: any }) {
  return (
    <section className="py-12">
      <div className="container-custom max-w-3xl mx-auto">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] space-y-4 animate-slide-up">
          {c.heading && <h2 className="font-display text-3xl font-bold">{c.heading}</h2>}
          {c.body && (
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(c.body) }}
            />
          )}
        </div>
      </div>
    </section>
  );
}

function ImageBlock({ c }: { c: any }) {
  if (!c.src) return null;
  return (
    <section className="py-12">
      <div className="container-custom max-w-4xl mx-auto">
        <figure className="rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-card)] animate-slide-up">
          <img src={c.src} alt={c.alt || ""} className="rounded-2xl w-full" />
          {c.caption && <figcaption className="text-center text-sm text-muted-foreground mt-3">{c.caption}</figcaption>}
        </figure>
      </div>
    </section>
  );
}

function ImageText({ c }: { c: any }) {
  const reverse = c.imagePosition === "right";
  return (
    <section className="py-12">
      <div className="container-custom">
        <div className={`grid md:grid-cols-2 gap-4 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
          {c.image && (
            <div className="rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-card)] animate-slide-up">
              <img src={c.image} alt={c.heading || ""} className="rounded-2xl w-full" />
            </div>
          )}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] space-y-4 animate-slide-up" style={{ animationDelay: "0.08s" }}>
            {c.heading && <h2 className="font-display text-3xl font-bold">{c.heading}</h2>}
            {c.body && (
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(c.body) }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA({ c }: { c: any }) {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="rounded-3xl bg-accent text-accent-foreground p-10 text-center space-y-4 animate-slide-up">
          {c.heading && <h2 className="font-display text-3xl md:text-4xl font-bold">{c.heading}</h2>}
          {c.body && <p className="text-accent-foreground/70 max-w-2xl mx-auto">{c.body}</p>}
          {c.ctaLabel && c.ctaHref && (
            <Button asChild size="lg" className="rounded-xl press bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={c.ctaHref}>{c.ctaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

function FAQBlock({ c }: { c: any }) {
  const items = Array.isArray(c.items) ? c.items : [];
  return (
    <section className="py-12">
      <div className="container-custom max-w-3xl mx-auto space-y-6">
        {c.heading && <h2 className="font-display text-3xl font-bold text-center">{c.heading}</h2>}
        <div className="rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] divide-y divide-border overflow-hidden animate-slide-up">
          {items.map((it: any, i: number) => (
            <details key={i} className="p-5 group">
              <summary className="cursor-pointer font-bold">{it.q}</summary>
              <p className="mt-2 text-muted-foreground">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ c }: { c: any }) {
  const imgs = Array.isArray(c.images) ? c.images : [];
  return (
    <section className="py-12">
      <div className="container-custom">
        {c.heading && <h2 className="font-display text-3xl font-bold text-center mb-8">{c.heading}</h2>}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((im: any, i: number) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-2 shadow-[var(--shadow-card)]">
              <img src={im.src} alt={im.alt || ""} className="rounded-xl w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmbedHtml({ c }: { c: any }) {
  return (
    <section className="py-12">
      <div className="container-custom">
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(c.html || "") }}
        />
      </div>
    </section>
  );
}

const RENDERERS: Record<string, React.FC<{ c: any }>> = {
  hero: Hero,
  text: TextBlock,
  image: ImageBlock,
  image_text: ImageText,
  cta: CTA,
  faq: FAQBlock,
  gallery: Gallery,
  embed_html: EmbedHtml,
};

export default function CustomPage() {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<Page | null>(null);
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    let active = true;
    const run = async () => {
      if (!slug || RESERVED.has(slug)) {
        setLoading(false);
        return;
      }
      setLoading(true);
      const { data: p } = await supabase
        .from("custom_pages")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();
      if (!active) return;
      if (!p) {
        setPage(null);
        setLoading(false);
        return;
      }
      setPage(p as Page);
      const { data: secs } = await supabase
        .from("custom_page_sections")
        .select("*")
        .eq("page_id", (p as Page).id)
        .order("sort_order");
      if (!active) return;
      setSections((secs as Section[]) || []);
      setLoading(false);
    };
    run();
    return () => {
      active = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!page) return <NotFound />;

  return (
    <>
      <SEOHead
        title={`${page.title} | Infodot`}
        description={page.meta_description || page.title}
        ogImage={page.og_image || undefined}
        canonicalUrl={`https://infodot.co.uk/${page.slug}`}
      />
      <Navbar />
      <main className="pt-20">
        {sections.map((s) => {
          const Cmp = RENDERERS[s.type];
          if (!Cmp) return null;
          return <Cmp key={s.id} c={s.content || {}} />;
        })}
      </main>
      <Footer />
    </>
  );
}
