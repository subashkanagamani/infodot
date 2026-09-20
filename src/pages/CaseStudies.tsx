import { useState, useEffect } from "react";
import { TrendingUp, Users, DollarSign, Target, ArrowRight, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LazyImage } from "@/components/LazyImage";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface Metric {
  label: string;
  value: string;
  icon?: string;
}

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string | null;
  industry: string | null;
  description: string | null;
  challenge: string | null;
  solution: string | null;
  cover_image: string | null;
  technologies: string[] | null;
  metrics: Metric[] | null;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Users,
  DollarSign,
  Target
};

// Fallback static data
const staticCaseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "TechFlow SaaS",
    slug: "techflow-saas",
    client: "TechFlow SaaS",
    industry: "B2B Software",
    description: "Low website traffic and minimal qualified lead generation",
    challenge: "Low website traffic and minimal qualified lead generation",
    solution: "Implemented comprehensive SEO strategy, content marketing, and lead nurturing campaigns",
    cover_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["SEO", "Content Marketing", "Lead Generation"],
    metrics: [
      { label: "Organic Traffic", value: "+425%", icon: "TrendingUp" },
      { label: "Qualified Leads", value: "+580/month", icon: "Users" },
      { label: "Revenue Growth", value: "+340%", icon: "DollarSign" },
      { label: "Conversion Rate", value: "8.3%", icon: "Target" }
    ]
  },
  {
    id: "2",
    title: "Urban Eats",
    slug: "urban-eats",
    client: "Urban Eats",
    industry: "Food & Beverage",
    description: "Low social media engagement and brand awareness in competitive market",
    challenge: "Low social media engagement and brand awareness in competitive market",
    solution: "Developed viral social media campaigns, influencer partnerships, and user' generated content strategy",
    cover_image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    technologies: ["Social Media", "Influencer Marketing", "Content Creation"],
    metrics: [
      { label: "Social Followers", value: "+125K", icon: "Users" },
      { label: "Engagement Rate", value: "+780%", icon: "TrendingUp" },
      { label: "Online Orders", value: "+290%", icon: "DollarSign" },
      { label: "Brand Mentions", value: "+1.2K/month", icon: "Target" }
    ]
  }
];

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    const { data, error } = await supabase
      .from("case_studies")
      .select("id, title, slug, client, industry, description, challenge, solution, cover_image, technologies, metrics")
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (!error && data && data.length > 0) {
      const parsedData = data.map(study => ({
        ...study,
        metrics: typeof study.metrics === 'string' ? JSON.parse(study.metrics) : study.metrics
      }));
      setCaseStudies(parsedData);
    } else {
      setCaseStudies(staticCaseStudies);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Case Studies - Marketing Success Stories | Infodot"
        description="Explore our detailed case studies showcasing real results. See how we helped businesses achieve 400%+ traffic growth, generate leads, and increase revenue."
        keywords="marketing case studies, success stories, SEO results, lead generation, revenue growth"
      />
      <Navbar />
      <WhatsAppButton />
      <BackToTop />

      {/* Hero Section */}
      <section className="bg-secondary pt-24 pb-10 md:pt-28 md:pb-14">
        <div className="container-custom">
          <Breadcrumbs />
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Case Studies</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.08] mt-4">
                Real Results, <span className="text-primary">Real Growth</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl font-medium">
                See how we've helped businesses across industries achieve remarkable growth through data-driven marketing strategies.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 flex flex-col justify-center animate-slide-up" style={{ animationDelay: "0.08s" }}>
              <div className="font-display text-5xl font-bold">{caseStudies.length || "—"}</div>
              <p className="mt-2 font-medium text-accent-foreground/70">Documented engagements with measurable outcomes.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-custom">
          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            /* Case Studies Grid */
            <div className="space-y-6">
              {caseStudies.map((study, index) => (
                <Card key={study.id} className="overflow-hidden rounded-3xl border-border bg-card shadow-[var(--shadow-card)] hover-lift">
                  <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    <div className={`aspect-[4/3] ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      <LazyImage 
                        src={study.cover_image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"} 
                        alt={study.client || study.title}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        {study.industry && (
                          <span className="text-sm font-semibold text-muted-foreground">{study.industry}</span>
                        )}
                      </div>
                      <h2 className="font-display text-3xl font-bold mb-4">{study.client || study.title}</h2>
                      
                      <div className="space-y-4 mb-6">
                        {study.challenge && (
                          <div>
                            <h3 className="font-semibold text-sm text-muted-foreground mb-2">Challenge</h3>
                            <p className="text-foreground">{study.challenge}</p>
                          </div>
                        )}
                        {study.solution && (
                          <div>
                            <h3 className="font-semibold text-sm text-muted-foreground mb-2">Solution</h3>
                            <p className="text-foreground">{study.solution}</p>
                          </div>
                        )}
                      </div>

                      {study.metrics && study.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {study.metrics.map((metric, idx) => {
                            const IconComponent = iconMap[metric.icon || "TrendingUp"] || TrendingUp;
                            return (
                              <div key={idx} className="text-center p-4 bg-secondary rounded-xl border border-border">
                                <IconComponent className="w-6 h-6 text-primary mx-auto mb-2" />
                                <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                                <div className="text-xs text-muted-foreground">{metric.label}</div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {study.technologies && study.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.technologies.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1.5 rounded-lg border border-border text-xs font-bold">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <Button asChild className="w-full md:w-auto rounded-xl press bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link to={`/case-studies/${study.slug}`}>
                          View Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 rounded-3xl border border-border bg-accent text-accent-foreground p-10 md:p-12 text-center animate-slide-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl mb-8 text-accent-foreground/70 max-w-2xl mx-auto">
              Let's discuss how we can achieve similar results for your business.
            </p>
            <Button size="lg" className="rounded-xl press bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="/#contact">Get Your Free Strategy Session</a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}