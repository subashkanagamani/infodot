import { FileText, Download, BookOpen, Video, Headphones, ShieldCheck, ArrowRight } from "lucide-react";
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

      {/* Hero — architectural layering */}
      <section className="pt-32 pb-14 md:pb-20">
        <div className="container-custom">
          <Breadcrumbs />

          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start mt-6">
            <div className="col-span-12 lg:col-span-7 space-y-8 animate-slide-up">
              <div className="flex items-center gap-5">
                <span className="font-display text-5xl font-extrabold text-foreground/[0.07] select-none tabular-nums leading-none">
                  00
                </span>
                <div className="space-y-1.5">
                  <div className="h-0.5 w-12 bg-primary" />
                  <span className="block uppercase tracking-[0.2em] text-[11px] font-extrabold text-primary">
                    Infodot Resources
                  </span>
                </div>
              </div>

              <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
                Readiness, in <span className="text-primary">Plain English</span>
              </h1>

              <p className="text-lg md:text-2xl text-foreground/70 font-light leading-relaxed max-w-2xl border-l-4 border-primary pl-6 md:pl-8">
                Guides and explainers on the things regulated buyers actually get asked about — Cyber Essentials, cyber-insurance readiness, GDPR, and the evidence that backs them.
              </p>
            </div>

            <div
              className="col-span-12 lg:col-span-5 relative lg:mt-10 animate-slide-up"
              style={{ animationDelay: "0.08s" }}
            >
              <div className="bg-primary text-primary-foreground p-8 md:p-12 shadow-2xl relative z-10">
                <BookOpen className="w-10 h-10 mb-6" />
                <div className="font-display text-6xl font-extrabold tabular-nums leading-none">
                  {resources.length + guides.length}
                </div>
                <p className="font-display text-xl font-extrabold leading-snug mt-4">
                  Free guides, checklists and toolkits — no gate, no sales call.
                </p>
                <div className="pt-6 mt-8 border-t border-primary-foreground/20">
                  <span className="text-xs font-bold tracking-[0.18em] uppercase opacity-80">
                    New guides added regularly
                  </span>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 w-full h-full border-2 border-foreground/80 z-0 hidden sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Read online */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
            <div className="space-y-3">
              <h2 className="font-display text-xs uppercase tracking-[0.2em] font-extrabold text-primary">
                Read online
              </h2>
              <p className="font-display text-2xl md:text-4xl font-extrabold tracking-tight max-w-2xl">
                Full guides, readable in your browser.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 lg:gap-10">
            {guides.map((guide, index) => (
              <Link
                key={guide.slug}
                to={`/resources/${guide.slug}`}
                className="col-span-12 md:col-span-6 group relative bg-card p-8 md:p-10 shadow-2xl shadow-foreground/5 transition-transform duration-500 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <span className="font-display text-7xl font-black text-foreground/[0.06] absolute top-4 right-6 select-none tabular-nums leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative inline-block text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary border-b-2 border-primary pb-1">
                  {guide.type}
                </span>
                <h3 className="relative font-display text-2xl md:text-[1.6rem] font-extrabold leading-snug mt-6 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="relative text-foreground/70 leading-relaxed mt-4">{guide.subtitle}</p>
                <div className="relative mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground">
                    {guide.sections.length} sections
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-extrabold text-primary">
                    Read the guide
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="space-y-3 mb-10 md:mb-14">
            <h2 className="font-display text-xs uppercase tracking-[0.2em] font-extrabold text-primary">
              Downloads
            </h2>
            <p className="font-display text-2xl md:text-4xl font-extrabold tracking-tight max-w-2xl">
              Checklists and toolkits to keep on file.
            </p>
          </div>

          <div className="border-t border-border">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="group grid grid-cols-12 gap-4 md:gap-8 items-start py-8 border-b border-border animate-slide-up"
                style={{ animationDelay: `${Math.min(index, 8) * 0.04}s` }}
              >
                <div className="col-span-12 md:col-span-1 flex items-center gap-4">
                  <span className="font-display text-2xl font-black text-foreground/20 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <resource.icon className="w-5 h-5 text-primary md:hidden" />
                </div>

                <div className="col-span-12 md:col-span-7 space-y-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">
                    {resource.type} · {resource.format}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold leading-snug group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed max-w-2xl">{resource.description}</p>
                </div>

                <div className="col-span-12 md:col-span-4 md:flex md:justify-end">
                  <button
                    onClick={() => handleDownload(resource.title)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-xs font-extrabold uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pb-20 md:pb-28">
        <div className="container-custom">
          <div className="relative">
            <div className="bg-foreground text-background p-10 md:p-16 relative z-10">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">
                Stay current
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mt-4 max-w-2xl leading-[1.08]">
                New guides, straight to your inbox.
              </h2>
              <p className="text-lg font-light opacity-80 mt-5 max-w-xl">
                Practical writing on managed IT, security and the evidence that keeps audits short.
              </p>
              <Button
                size="lg"
                className="mt-8 rounded-md px-8 py-6 font-extrabold press"
                onClick={() => (window.location.href = "/#contact")}
              >
                Subscribe now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="absolute -bottom-5 -left-5 w-full h-full border-2 border-primary z-0 hidden sm:block" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
