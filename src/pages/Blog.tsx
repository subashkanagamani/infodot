import { useState, useEffect, useMemo } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd } from "@/components/JsonLd";
import { LazyImage } from "@/components/LazyImage";
import { BlogGridSkeleton } from "@/components/LoadingSkeleton";
import { BlogSearch } from "@/components/BlogSearch";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string | null;
  category: string | null;
  slug: string;
  created_at: string;
  read_time: string | null;
  cover_image: string | null;
  tags: string[] | null;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, excerpt, category, slug, created_at, read_time, cover_image, tags")
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (!error && data) setPosts(data);
    setLoading(false);
  };

  const categories = ["All", ...new Set(posts.map((p) => p.category).filter(Boolean))];
  
  const filteredPosts = useMemo(() => {
    let result = posts;
    
    // Filter by category
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((p) => 
        p.title.toLowerCase().includes(query) ||
        p.excerpt?.toLowerCase().includes(query) ||
        p.category?.toLowerCase().includes(query) ||
        p.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return result;
  }, [posts, activeCategory, searchQuery]);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setSubscribing(true);
    const { error } = await supabase.from("newsletter_subscribers").insert({ email: newsletterEmail });
    setSubscribing(false);

    if (error) {
      if (error.code === "23505") {
        toast({ title: "You're already subscribed!" });
      } else {
        toast({ variant: "destructive", title: "Error", description: error.message });
      }
    } else {
      toast({ title: "Subscribed!", description: "Welcome to our newsletter." });
      setNewsletterEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="IT & Compliance Insights - Infodot"
        description="Practical guidance on managed IT, cyber security, Cyber Essentials, cyber insurance readiness and compliance evidence for accountancy, legal and financial services firms."
        keywords="managed IT blog, cyber security, Cyber Essentials, ISO 27001, compliance evidence, IT support for accountants, IT support for law firms"
      />
      <JsonLd 
        schema={{
          type: "Organization",
          name: "Infodot",
          url: window.location.origin,
          description: "Managed IT provider for regulated industries, run remotely by an ISO 27001-certified team",
          logo: `${window.location.origin}/og-image.png`,
        }}
      />
      <Navbar />
      <WhatsAppButton />
      <BackToTop />

      {/* Hero */}
      <section className="bg-secondary pt-24 pb-10 md:pt-28 md:pb-14">
        <div className="container-custom">
          <Breadcrumbs />

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Insights</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.08] mt-4">
                IT & Compliance <span className="text-primary">Insights</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl font-medium">
                Practical guidance on managed IT, security and audit-readiness for accountancy, legal and financial services firms.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 flex flex-col justify-center animate-slide-up" style={{ animationDelay: "0.08s" }}>
              <div className="font-display text-5xl font-bold">{posts.length || "—"}</div>
              <p className="mt-2 font-medium text-accent-foreground/70">Articles published on managed IT, security and compliance evidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-custom">
          {/* Search */}
          <BlogSearch 
            value={searchQuery} 
            onChange={setSearchQuery} 
            placeholder="Search articles by title, topic, or tag..."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12 mt-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === activeCategory ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category as string)}
                className="rounded-xl press transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Results count */}
          {(searchQuery || activeCategory !== "All") && (
            <p className="text-center text-muted-foreground mb-8">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
              {searchQuery && ` for "${searchQuery}"`}
              {activeCategory !== "All" && ` in ${activeCategory}`}
            </p>
          )}

          {/* Blog Grid */}
          {loading ? (
            <BlogGridSkeleton />
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">No articles found</p>
              <Button variant="outline" className="rounded-xl press" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-4">
              {filteredPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className={`group overflow-hidden rounded-3xl border-border bg-card shadow-[var(--shadow-card)] hover-lift animate-slide-up p-0 ${
                    index === 0 ? "col-span-12 lg:col-span-8" : "col-span-12 md:col-span-6 lg:col-span-4"
                  }`}
                  style={{ animationDelay: `${Math.min(index, 8) * 0.06}s` }}
                >
                  <Link to={`/blog/${post.slug}`}>
                    <LazyImage 
                      src={post.cover_image || "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80"} 
                      alt={post.title}
                      className="aspect-video"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="text-primary font-bold">{post.category}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.read_time || "5 min read"}</span>
                        </div>
                      </div>
                      <h2 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <span>Read full article<span className="sr-only">: {post.title}</span></span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </div>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="mt-16 rounded-3xl border border-border bg-accent text-accent-foreground p-10 md:p-12 text-center animate-slide-up">
            <h3 className="font-display text-3xl font-bold mb-4">Never Miss an Update</h3>
            <p className="text-accent-foreground/70 mb-6 max-w-2xl mx-auto">
              Get the latest guidance on managed IT, security and compliance evidence delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-1 rounded-xl bg-card text-foreground"
              />
              <Button type="submit" disabled={subscribing} className="rounded-xl press bg-primary text-primary-foreground hover:bg-primary/90">
                {subscribing ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
