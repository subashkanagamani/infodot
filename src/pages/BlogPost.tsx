import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { Calendar, Clock, ArrowLeft, User, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ReadingProgress } from "@/components/ReadingProgress";
import { SocialShareButtons } from "@/components/SocialShareButtons";
import { TableOfContents, calculateReadTime } from "@/components/TableOfContents";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image: string | null;
  author_name: string | null;
  author_avatar: string | null;
  category: string | null;
  read_time: string | null;
  created_at: string | null;
  tags: string[] | null;
}

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      let query = supabase
        .from("blog_posts")
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
        setPost(null);
      } else {
        setPost(data);
        
        // Fetch related posts - prioritize same category
        let relatedQuery = supabase
          .from("blog_posts")
          .select("*")
          .eq("published", true)
          .neq("id", data.id);
        
        if (data.category) {
          // First try to get posts from the same category
          const { data: sameCategoryPosts } = await relatedQuery
            .eq("category", data.category)
            .limit(3);
          
          if (sameCategoryPosts && sameCategoryPosts.length >= 3) {
            setRelatedPosts(sameCategoryPosts);
          } else {
            // If not enough, get more from other categories
            const existingIds = sameCategoryPosts?.map(p => p.id) || [];
            const { data: otherPosts } = await supabase
              .from("blog_posts")
              .select("*")
              .eq("published", true)
              .neq("id", data.id)
              .not("id", "in", `(${existingIds.join(",")})`)
              .limit(3 - (sameCategoryPosts?.length || 0));
            
            setRelatedPosts([...(sameCategoryPosts || []), ...(otherPosts || [])]);
          }
        } else {
          const { data: related } = await relatedQuery.limit(3);
          setRelatedPosts(related || []);
        }
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container-custom py-32 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <SEOHead 
          title="Post Not Found"
          description="The blog post you're looking for doesn't exist."
        />
        <div className="container-custom py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <Navbar />
      <WhatsAppButton />
      <BackToTop />
      
      <SEOHead 
        title={post.title.length > 50 ? post.title : `${post.title} | Infodot Blog`}
        description={post.excerpt || `Read ${post.title} on the Infodot blog.`}
        keywords={post.tags?.join(", ")}
        ogType="article"
        ogImage={post.cover_image || undefined}
        canonicalUrl={`https://infodot.co.uk/blog/${post.slug || id}`}
      />
      
      <JsonLd 
        schema={{
          type: "Article",
          headline: post.title,
          description: post.excerpt || "",
          image: post.cover_image || undefined,
          author: post.author_name || "Infodot Team",
          datePublished: post.created_at || new Date().toISOString()
        }}
      />

      <article className="bg-secondary pt-24 pb-10 md:pt-28 md:pb-14">
        <div className="container-custom">
          <Breadcrumbs />
          
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="bg-card rounded-3xl border border-border shadow-[var(--shadow-card)] p-8 md:p-10 max-w-5xl mx-auto mb-8 animate-slide-up">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              {post.category && <span className="text-primary font-bold">{post.category}</span>}
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.created_at)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.read_time || (post.content ? calculateReadTime(post.content) : "5 min read")}</span>
              </div>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.08] mb-6">{post.title}</h1>
            {post.excerpt && <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>}

            {/* Author & Share */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-4">
                {post.author_avatar ? (
                  <img 
                    src={post.author_avatar} 
                    alt={post.author_name || "Author"}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center border border-border">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                )}
                <div>
                  <p className="font-bold">{post.author_name || "Infodot Team"}</p>
                  <p className="text-sm text-muted-foreground">{formatDate(post.created_at)}</p>
                </div>
              </div>

              <SocialShareButtons url={currentUrl} title={post.title} />
            </div>
          </header>

          {/* Featured Image */}
          {post.cover_image && (
            <div className="max-w-5xl mx-auto mb-4">
              <img 
                src={post.cover_image} 
                alt={post.title}
                className="w-full aspect-video object-cover rounded-3xl border border-border"
              />
            </div>
          )}
        </div>
      </article>

      <section className="section-spacing bg-background">
        <div className="container-custom">

          {/* Content with TOC */}
          {post.content && (
            <div className="flex gap-8 max-w-6xl mx-auto">
              {/* Table of Contents - Desktop */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <TableOfContents content={post.content} />
              </aside>
              
              {/* Main Content */}
              <div className="flex-1 min-w-0 bg-card rounded-3xl border border-border shadow-[var(--shadow-card)] p-8 md:p-10">
                <div 
                  className="prose prose-lg prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
                />
              </div>
            </div>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="max-w-3xl mx-auto mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg border border-border bg-secondary text-xs font-bold">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Share at bottom */}
          <div className="max-w-3xl mx-auto mt-8 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-muted-foreground">Enjoyed this article? Share it!</p>
              <SocialShareButtons url={currentUrl} title={post.title} />
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 max-w-6xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Keep reading</p>
              <h2 className="font-display text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-12 gap-4">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="col-span-12 md:col-span-4 group overflow-hidden rounded-3xl border-border bg-card shadow-[var(--shadow-card)] hover-lift p-0">
                    <Link to={`/blog/${relatedPost.slug}`}>
                      {relatedPost.cover_image && (
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={relatedPost.cover_image} 
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          {relatedPost.category && <span className="text-primary font-bold">{relatedPost.category}</span>}
                          {relatedPost.read_time && <span>{relatedPost.read_time}</span>}
                        </div>
                        <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="mt-16 rounded-3xl border border-border bg-accent text-accent-foreground p-10 md:p-12 text-center max-w-4xl mx-auto">
            <h3 className="font-display text-3xl font-bold mb-4">Ready to Grow Your Business?</h3>
            <p className="text-accent-foreground/70 mb-6 max-w-2xl mx-auto">
              Let's discuss how these strategies can be applied to your unique situation.
            </p>
            <Button asChild size="lg" className="rounded-xl press bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/#contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
