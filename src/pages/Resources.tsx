import { FileText, Download, BookOpen, Video, Headphones, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function Resources() {
  const resources = [
    {
      type: "Guide",
      icon: BookOpen,
      title: "Cyber Essentials Readiness Guide",
      description: "A practical walkthrough of the five Cyber Essentials controls and what accountancy, legal and financial services firms need to have in place.",
      format: "PDF"
    },
    {
      type: "Checklist",
      icon: FileText,
      title: "Cyber Insurance Renewal Checklist",
      description: "The controls insurers ask about most — MFA, EDR, tested backups and patching — and how to keep evidence current between renewals.",
      format: "PDF"
    },
    {
      type: "Checklist",
      icon: ShieldCheck,
      title: "IT Security Baseline Checklist for Regulated Firms",
      description: "A control-by-control checklist covering identity, endpoint hardening, email security and backup for accountancy, legal and financial services practices.",
      format: "PDF"
    },
    {
      type: "Webinar",
      icon: Video,
      title: "Understanding Continuous Controls & Evidence",
      description: "A recorded session on why point-in-time compliance isn't enough, and how continuous evidence keeps you audit-ready year-round.",
      format: "Video"
    },
    {
      type: "Guide",
      icon: Headphones,
      title: "FCA Operational Resilience — A Plain-English Guide",
      description: "What third-party risk and incident reporting readiness under PS26/2 means in practice for financial services firms.",
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
      title: "GDPR & Data Protection Operations Guide",
      description: "Practical guidance on DPAs, sub-processor registers, DSAR handling and breach process for regulated UK firms.",
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
        title="Free IT & Compliance Resources - Infodot UK"
        description="Download free guides and checklists on managed IT, Cyber Essentials, cyber insurance readiness, backup/DR and GDPR for accountancy, legal and financial services firms."
        keywords="Cyber Essentials checklist, cyber insurance readiness, IT security checklist, GDPR guide, backup disaster recovery checklist"
      />

      {/* Hero Section */}
      <section className="section-spacing pt-32">
        <div className="container-custom">
          <Breadcrumbs />
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Free IT & Compliance Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Practical guides and checklists on managed IT, security and audit-readiness for regulated UK firms. All free.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <resource.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-muted rounded-full">
                    {resource.type}
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {resource.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>{resource.format}</span>
                </div>

                <Button 
                  onClick={() => handleDownload(resource.title)}
                  className="w-full"
                  variant="outline"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Free
                </Button>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 text-center p-12 bg-gradient-to-r from-primary via-primary to-accent rounded-2xl text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want More Free Resources?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Subscribe to get new guides and checklists on managed IT, security and compliance evidence.
            </p>
            <Button size="lg" variant="secondary" onClick={() => window.location.href = '/#contact'}>
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
