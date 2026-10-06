import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TrendingUp, Users, DollarSign, Target, ArrowLeft, Quote, Building, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SocialShareButtons } from "@/components/SocialShareButtons";
import { supabase } from "@/integrations/supabase/client";

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string | null;
  industry: string | null;
  description: string | null;
  challenge: string | null;
  solution: string | null;
  results: string | null;
  cover_image: string | null;
  testimonial: string | null;
  testimonial_author: string | null;
  technologies: string[] | null;
  metrics: unknown;
  created_at: string | null;
}

interface Metric {
  label: string;
  value: string;
  icon?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Users,
  DollarSign,
  Target
};

export default function CaseStudyDetail() {
  const { id } = useParams();
  const [study, setStudy] = useState<CaseStudy | null>(null);
  const [relatedStudies, setRelatedStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      // Try to find by slug first, then by id
      let query = supabase
        .from("case_studies")
        .select("*")
        .eq("published", true);

      const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id || '');
      
      if (isUUID) {
        query = query.eq("id", id);
      } else {
        query = query.eq("slug", id);
      }

      const { data, error } = await query.maybeSingle();
      
      if (error || !data) {
        setStudy(null);
      } else {
        // Parse metrics if it's a string
        const parsedData = {
          ...data,
          metrics: typeof data.metrics === 'string' ? JSON.parse(data.metrics) : data.metrics
        };
        setStudy(parsedData);
        
        // Fetch related case studies
        const { data: related } = await supabase
          .from("case_studies")
          .select("*")
          .eq("published", true)
          .neq("id", data.id)
          .limit(2);
        
        setRelatedStudies(related || []);
      }
      setLoading(false);
    };

    fetchCaseStudy();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container-custom py-32 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <SEOHead 
          title="Case Study Not Found"
          description="The case study you're looking for doesn't exist."
        />
        <div className="container-custom py-32 text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
          <Button asChild className="rounded-xl press bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/case-studies">Back to Case Studies</Link>
          </Button>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: study.client || study.title }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />
      <BackToTop />
      
      <SEOHead 
        title={`${study.client || study.title} — Case Study | Infodot`}
        description={study.description || `See how Infodot helped ${study.client} achieve remarkable results.`}
        keywords={study.technologies?.join(", ")}
        ogType="article"
        ogImage={study.cover_image || undefined}
        canonicalUrl={`https://infodot.consultwithprofessionals.com/case-studies/${study.slug || id}`}
      />
      
      <JsonLd 
        schema={{
          type: "Article",
          headline: `${study.client || study.title} Case Study`,
          description: study.description || "",
          image: study.cover_image || undefined,
          author: "Infodot Team",
          datePublished: study.created_at || new Date().toISOString()
        }}
      />

      {/* Hero */}
      <section className="bg-secondary pt-24 pb-10 md:pt-28 md:pb-14">
        <div className="container-custom">
          <Breadcrumbs />

          <Link to="/case-studies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
              {study.industry && (
                <div className="flex items-center gap-2 mb-4">
                  <Building className="w-4 h-4 text-primary" />
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">{study.industry}</span>
                </div>
              )}
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.08]">{study.client || study.title}</h1>
              {study.description && (
                <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl font-medium">{study.description}</p>
              )}

              {study.technologies && study.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {study.technologies.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg border border-border text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="col-span-12 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 flex flex-col justify-center animate-slide-up" style={{ animationDelay: "0.08s" }}>
              <p className="font-medium text-accent-foreground/70 mb-4">Share this case study</p>
              <SocialShareButtons url={window.location.href} title={study.client || study.title} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-custom">
          {/* Featured Image */}
          {study.cover_image && (
            <div className="mb-6 rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-card)] animate-slide-up">
              <img 
                src={study.cover_image} 
                alt={study.client || study.title}
                className="w-full aspect-video object-cover"
              />
            </div>
          )}

          {/* Key Metrics */}
          {study.metrics && Array.isArray(study.metrics) && (study.metrics as Metric[]).length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {(study.metrics as Metric[]).map((metric, idx) => {
                const IconComponent = iconMap[metric.icon || "TrendingUp"] || TrendingUp;
                return (
                  <div key={idx} className="rounded-3xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: `${idx * 0.06}s` }}>
                    <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-display text-3xl font-bold text-primary mb-2">{metric.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{metric.label}</div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Challenge / Solution / Results */}
          <div className="grid grid-cols-12 gap-4 mb-6">
            {study.challenge && (
              <div className="col-span-12 md:col-span-4 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] animate-slide-up">
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Challenge</span>
                <p className="text-foreground text-lg leading-relaxed mt-4">{study.challenge}</p>
              </div>
            )}
            {study.solution && (
              <div className="col-span-12 md:col-span-4 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: "0.06s" }}>
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Solution</span>
                <p className="text-foreground text-lg leading-relaxed mt-4">{study.solution}</p>
              </div>
            )}
            {study.results && (
              <div className="col-span-12 md:col-span-4 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: "0.12s" }}>
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Results</span>
                <p className="text-foreground text-lg leading-relaxed mt-4">{study.results}</p>
              </div>
            )}
          </div>

          {/* Testimonial */}
          {study.testimonial && (
            <div className="mb-6 rounded-3xl border border-border bg-secondary p-8 md:p-10 shadow-[var(--shadow-card)] animate-slide-up">
              <Quote className="w-10 h-10 text-primary mb-4" />
              <p className="font-display text-xl md:text-2xl font-bold leading-snug mb-6">
                "{study.testimonial}"
              </p>
              {study.testimonial_author && (
                <p className="font-semibold text-muted-foreground">{study.testimonial_author}</p>
              )}
            </div>
          )}

          {/* Related Case Studies */}
          {relatedStudies.length > 0 && (
            <section className="mt-16">
              <h2 className="font-display text-3xl font-bold mb-6">More Success Stories</h2>
              <div className="grid grid-cols-12 gap-4">
                {relatedStudies.map((relatedStudy, index) => (
                  <Card key={relatedStudy.id} className="col-span-12 md:col-span-6 group overflow-hidden rounded-3xl border-border bg-card shadow-[var(--shadow-card)] hover-lift p-0 animate-slide-up" style={{ animationDelay: `${index * 0.08}s` }}>
                    <Link to={`/case-studies/${relatedStudy.slug}`}>
                      {relatedStudy.cover_image && (
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={relatedStudy.cover_image} 
                            alt={relatedStudy.client || relatedStudy.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        {relatedStudy.industry && (
                          <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">{relatedStudy.industry}</span>
                        )}
                        <h3 className="font-display text-xl font-bold mb-2 mt-3 group-hover:text-primary transition-colors">
                          {relatedStudy.client || relatedStudy.title}
                        </h3>
                        {relatedStudy.description && (
                          <p className="text-muted-foreground line-clamp-2">{relatedStudy.description}</p>
                        )}
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="mt-16 rounded-3xl border border-border bg-accent text-accent-foreground p-10 md:p-12 text-center animate-slide-up">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Be Our Next Success Story?</h3>
            <p className="text-xl mb-8 text-accent-foreground/70 max-w-2xl mx-auto">
              Let's discuss how we can achieve similar results for your business.
            </p>
            <Button asChild size="lg" className="rounded-xl press bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/#contact">Start Your Growth Journey</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
