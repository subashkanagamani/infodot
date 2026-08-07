import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShieldCheck, ArrowRight, Search, X, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const portfolioItems = [
  {
    title: "Accountancy Practice — Co-Managed IT & Security Baseline",
    category: "Accountancy",
    description: "A 90-user accountancy practice needed security and evidence brought up to a consistent standard alongside its existing in-house team, without disrupting day-to-day operations.",
    challenge: "MFA, patching and backup were inconsistently applied across the practice, and there was no evidence pack ready for cyber insurance renewal or client due-diligence requests.",
    solution: "We ran the security and operations layer alongside the in-house team under a clear who-owns-what matrix — MFA everywhere, managed EDR, tested backups and monthly evidence packs.",
    tags: ["Co-Managed IT", "Cyber Insurance Readiness", "Backup & DR"]
  },
  {
    title: "Law Firm — Cyber Essentials Readiness & Hardening",
    category: "Legal",
    description: "A regional law firm needed to achieve Cyber Essentials certification to satisfy client and insurer requirements, without a dedicated internal IT security function.",
    challenge: "The firm's endpoints and identity controls were not aligned to the Cyber Essentials control set, and there was no process for keeping evidence current.",
    solution: "We implemented all five Cyber Essentials controls to the current standard, coordinated certification through an accredited body, and set up continuous controls and evidence to keep the pack audit-ready.",
    tags: ["Cyber Essentials Readiness", "IT Hardening", "Continuous Controls & Evidence"]
  },
  {
    title: "Financial Services Firm — Full IT Migration & Fully Managed IT",
    category: "Financial Services",
    description: "A financial services firm was exiting an underperforming incumbent provider and needed a clean transition with minimal disruption to regulated operations.",
    challenge: "Documentation from the outgoing provider was incomplete, and the firm needed operational resilience evidence for FCA-related reporting.",
    solution: "We ran a structured discovery and transition project — asset discovery, knowledge transfer and a clean switch — followed by fully managed IT with monthly evidence and FCA operational resilience readiness.",
    tags: ["IT Transition & Exit", "Fully Managed IT", "FCA Operational Resilience"]
  },
  {
    title: "Accountancy Group — Microsoft 365 & Email Migration",
    category: "Accountancy",
    description: "A multi-office accountancy group needed to consolidate onto Microsoft 365 from a mix of legacy email systems ahead of a wider security uplift.",
    challenge: "Multiple domains and mailboxes across offices, with a hard requirement of zero data loss during the move.",
    solution: "We ran a fixed-fee, tenant-to-tenant email migration and domain migration, moving DNS cleanly under the firm's control, followed by identity and access hardening across the estate.",
    tags: ["Email Migration", "Domain Migration", "Identity & Access"]
  },
  {
    title: "Law Firm — Backup, Disaster Recovery & Incident Response",
    category: "Legal",
    description: "A litigation-focused firm needed a tested disaster recovery plan and monitored, immutable backups after identifying single points of failure in its existing setup.",
    challenge: "Backups existed but had never been restore-tested, and there was no documented incident response plan.",
    solution: "We deployed monitored, restore-tested, immutable backups with a defined RTO/RPO, and documented an incident response plan alongside central logging and monitoring.",
    tags: ["Backup & Disaster Recovery", "Monitoring & Incident Response", "Vulnerability Management"]
  },
  {
    title: "Financial Services Firm — Cyber Insurance Renewal Readiness",
    category: "Financial Services",
    description: "Ahead of a cyber insurance renewal, a financial services firm needed to demonstrate that the controls in its questionnaire answers were actually running.",
    challenge: "Controls had been implemented at some point but drifted over time, creating a risk of disputed cover at claim time.",
    solution: "We enforced and evidenced the controls insurers ask about — MFA everywhere, EDR on every endpoint, tested backups and patching — with drift alerting and a renewal-ready evidence pack.",
    tags: ["Cyber Insurance Readiness", "Managed EDR", "GDPR / Data Protection Ops"]
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...new Set(portfolioItems.map((item) => item.category))];

  const filteredItems = useMemo(() => {
    let result = portfolioItems;

    if (activeCategory !== "All") {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const handleContactClick = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Client Outcomes - Managed IT Engagements | Infodot UK"
        description="Engagement snapshots showing how Infodot UK runs managed IT, security and compliance evidence for accountancy, legal and financial services firms."
        keywords="managed IT case studies, Cyber Essentials, cyber insurance readiness, IT support for accountants, IT support for law firms, IT support for financial services"
      />
      <JsonLd
        schema={{
          type: "Raw",
          id: "portfolio-collection",
          data: {
            "@type": "CollectionPage",
            name: "Infodot UK Client Outcomes",
            url: "https://infodot.co.uk/portfolio",
            description: "Engagement snapshots showing managed IT, security and compliance outcomes for accountancy, legal and financial services firms.",
            hasPart: filteredItems.map((item) => ({
              "@type": "CreativeWork",
              name: item.title,
              about: item.category,
              description: item.description,
            })),
          },
        }}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative">
          <Breadcrumbs />
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-primary border-primary/30">
              Client Outcomes
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Engagement <span className="text-gradient-primary">Snapshots</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Generic, anonymised snapshots showing how we run managed IT, security and compliance evidence for regulated UK firms.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container-custom">
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search engagements..."
              className="pl-10 pr-10"
            />
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear search query"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === activeCategory ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Results count */}
          {(searchQuery || activeCategory !== "All") && (
            <p className="text-center text-muted-foreground mt-4">
              {filteredItems.length} engagement{filteredItems.length !== 1 ? "s" : ""} found
            </p>
          )}
        </div>
      </section>

      {/* Portfolio Items */}
      <section className="py-20">
        <div className="container-custom">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">No engagements found</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredItems.map((item, index) => (
                <Card 
                  key={index}
                  className="p-8 md:p-12 bg-card border-border/50 hover:border-primary/50 transition-all group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <Badge variant="secondary" className="text-primary border-primary/30">
                        {item.category}
                      </Badge>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary-glow transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">{item.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="font-semibold text-primary mb-2">The Situation</h3>
                        <p className="text-muted-foreground">{item.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">How We Ran It</h3>
                        <p className="text-muted-foreground">{item.solution}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-lg border border-primary/20">
                      <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground">Outcome details are described generically to protect client confidentiality.</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Own <span className="text-gradient-primary">Engagement Snapshot</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how we can run your IT completely — securely, and with the evidence to prove it.
          </p>
          <Button size="lg" onClick={handleContactClick}>
            Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Portfolio;
