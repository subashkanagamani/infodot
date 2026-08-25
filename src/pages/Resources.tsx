import { FileText, Download, BookOpen, Video, Headphones, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { guides } from "@/data/guides";

export default function Resources() {
  const resources = [
    {
      type: "Guide",
      icon: BookOpen,
      title: "Cyber Essentials v3.3 — What Changed and Why It Matters",
      description: "The v3.3 updates in plain English, and what accountancy, legal and financial services firms need in place to pass first time.",
      format: "PDF"
    },
    {
      type: "Checklist",
      icon: FileText,
      title: "Cyber-Insurance Readiness — The Questions That Get Claims Denied",
      description: "The controls insurers ask about most — MFA, EDR, tested backups and patching — and the answers that quietly invalidate a claim.",
      format: "PDF"
    },
    {
      type: "Checklist",
      icon: ShieldCheck,
      title: "GDPR as an Operating Discipline — A Practical Checklist",
      description: "DPAs, sub-processor registers, DSAR handling and breach process, treated as day-to-day operations rather than a policy folder.",
      format: "PDF"
    },
    {
      type: "Explainer",
      icon: Video,
      title: "What 'Audit-Ready' Really Means",
      description: "Why point-in-time compliance isn't enough, and how continuously collected evidence turns an audit into a confirmation.",
      format: "Guide"
    },
    {
      type: "Guide",
      icon: Headphones,
      title: "The Offshore Question, Answered Honestly",
      description: "How remote delivery from our Bangalore team actually works — access, data residency, accountability and what stays in your ownership.",
      format: "PDF"
    },
    {
      type: "Toolkit",
      icon: FileText,
      title: "IT Transition & Exit Toolkit",
      description: "A framework for a clean switch from an incumbent IT provider — discovery, reverse knowledge transfer and an exit pack.",
      format: "PDF"
    },
    {
      type: "Guide",
      icon: FileText,
      title: "FCA Operational Resilience — A Plain-English Guide",
      description: "What third-party risk and incident reporting readiness under PS26/2 means in practice for financial services firms.",
      format: "PDF"
    },
    {
      type: "Checklist",
      icon: FileText,
      title: "Backup & Disaster Recovery Readiness Checklist",
      description: "How to know whether your backups are actually restorable, and what a tested DR plan with defined RTO/RPO should include.",
      format: "PDF"
    }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources" }
  ];

  const handleDownload = (title: string) => {
    alert(`Downloading: ${title}\n\nNote: This is a demo. In production, the file would download.`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />
      <BackToTop />
      
      <SEOHead 
        title="Resources — Readiness, in Plain English | Infodot"
        description="Guides and explainers on Cyber Essentials v3.3, cyber-insurance readiness, GDPR as an operating discipline and what audit-ready really means. All free."
        keywords="Cyber Essentials v3.3, cyber insurance readiness, GDPR checklist, audit-ready evidence, IT resources"
      />

      {/* Hero Section */}
      <section className="bg-secondary pt-24 pb-10 md:pt-28 md:pb-14">
        <div className="container-custom">
          <Breadcrumbs />

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Resources</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.08] mt-4">
                Readiness, in <span className="text-primary">Plain English</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl font-medium">
                Guides and explainers on the things regulated buyers actually get asked about — Cyber Essentials, cyber-insurance readiness, GDPR, and the evidence that backs them. New guides added regularly.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 flex flex-col justify-center animate-slide-up" style={{ animationDelay: "0.08s" }}>
              <div className="font-display text-5xl font-bold">{resources.length + guides.length}</div>
              <p className="mt-2 font-medium text-accent-foreground/70">Free guides, checklists and toolkits, all downloadable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-custom">
          {/* Read online guides */}
          <div className="grid grid-cols-12 gap-4 mb-4">
            {guides.map((guide, index) => (
              <Card
                key={guide.slug}
                className="col-span-12 md:col-span-6 p-7 rounded-3xl bg-card border-border shadow-[var(--shadow-card)] hover:border-primary/40 transition-all duration-500 group hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 bg-secondary rounded-xl flex items-center justify-center border border-border group-hover:bg-accent transition-colors duration-300">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold px-2 py-1 bg-secondary rounded-lg border border-border">
                    {guide.type}
                  </span>
                </div>

                <h2 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {guide.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">{guide.subtitle}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pt-4 border-t border-border">
                  <span>Read online</span>
                </div>

                <Button asChild className="w-full rounded-xl press border-2 border-accent text-accent hover:bg-secondary" variant="outline">
                  <Link to={`/resources/${guide.slug}`}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read the guide
                  </Link>
                </Button>
              </Card>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-12 gap-4">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4 p-7 rounded-3xl bg-card border-border shadow-[var(--shadow-card)] hover:border-primary/40 transition-all duration-500 group hover-lift animate-slide-up"
                style={{ animationDelay: `${Math.min(index, 8) * 0.06}s` }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 bg-secondary rounded-xl flex items-center justify-center border border-border group-hover:bg-accent transition-colors duration-300">
                    <resource.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold px-2 py-1 bg-secondary rounded-lg border border-border">
                    {resource.type}
                  </span>
                </div>

                <h2 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pt-4 border-t border-border">
                  <span>{resource.format}</span>
                </div>

                <Button 
                  onClick={() => handleDownload(resource.title)}
                  className="w-full rounded-xl press border-2 border-accent text-accent hover:bg-secondary"
                  variant="outline"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Free
                </Button>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 rounded-3xl border border-border bg-accent text-accent-foreground p-10 md:p-12 text-center animate-slide-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Want More Free Resources?
            </h2>
            <p className="text-xl mb-8 text-accent-foreground/70 max-w-2xl mx-auto">
              Subscribe to get new guides and checklists on managed IT, security and compliance evidence.
            </p>
            <Button size="lg" className="rounded-xl press bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => window.location.href = '/#contact'}>
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
