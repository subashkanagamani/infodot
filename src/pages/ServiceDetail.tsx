import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  Target,
  Megaphone,
  LineChart,
  TrendingUp,
  Users,
  Palette,
  FileText,
  Share2,
  Boxes,
  Cloud,
  ClipboardCheck,
  Lock,
  Headset,
  Laptop,
  Mail,
  KeyRound,
  Scale,
  Search,
  ArrowRightLeft,
  Globe,
  ShieldAlert,
  ShieldCheck,
  Server,
  Award,
  Activity,
  UserCheck,
  Siren,
  Crosshair,
  Network,
  GraduationCap,
  Bug,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { servicesData, getServiceBySlug, type ServiceItem } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Megaphone,
  LineChart,
  TrendingUp,
  Users,
  Palette,
  FileText,
  Share2,
  Boxes,
  Cloud,
  ClipboardCheck,
  Lock,
  Headset,
  Laptop,
  Mail,
  KeyRound,
  Scale,
  Search,
  ArrowRightLeft,
  Globe,
  ShieldAlert,
  ShieldCheck,
  Server,
  Award,
  Activity,
  UserCheck,
  Siren,
  Crosshair,
  Network,
  GraduationCap,
  Bug,
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<ServiceItem | undefined>(() =>
    slug ? getServiceBySlug(slug) : undefined
  );

  useEffect(() => {
    setService(slug ? getServiceBySlug(slug) : undefined);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-16">
          <div className="container-custom">
            <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-[var(--shadow-card)]">
              <h1 className="font-display text-3xl font-bold mb-4">Service not found</h1>
              <p className="text-muted-foreground mb-8">
                The service you're looking for doesn't exist or has moved.
              </p>
              <Button className="rounded-xl press" asChild>
                <Link to="/services">
                  <ArrowLeft className="mr-2 w-4 h-4" /> Back to Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Target;
  const canonical = `https://infodot.co.uk/services/${service.slug}`;
  const currentIndex = servicesData.findIndex((s) => s.slug === service.slug);
  const related = [
    ...servicesData.slice(currentIndex + 1),
    ...servicesData.slice(0, Math.max(currentIndex, 0)),
  ].slice(0, 3);
  const nextService = servicesData[(currentIndex + 1) % servicesData.length];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: canonical,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: "Infodot UK",
      url: "https://infodot.co.uk",
    },
    areaServed: "Global",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
        canonicalUrl={canonical}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container-custom">
          <Breadcrumbs />
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8 rounded-3xl border border-border bg-card p-8 md:p-12 shadow-[var(--shadow-card)] animate-slide-up">
              <div className="flex items-center gap-3 mb-8">
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground/60">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-border" />
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Infodot Services
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold leading-[1.08] tracking-tight mb-5">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                {service.shortDescription}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="rounded-xl press" onClick={() => navigate("/contact")}>
                  Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl press" asChild>
                  <Link to="/services">
                    <ArrowLeft className="mr-2 w-4 h-4" /> All Services
                  </Link>
                </Button>
              </div>
            </div>

            <div
              className="col-span-12 lg:col-span-4 rounded-3xl border border-border bg-primary text-primary-foreground p-8 shadow-[var(--shadow-card)] animate-slide-up flex flex-col justify-between"
              style={{ animationDelay: "0.08s" }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/15 flex items-center justify-center">
                <Icon className="w-7 h-7" />
              </div>
              <div className="mt-8 space-y-4">
                <div className="border-t border-primary-foreground/15 pt-4">
                  <p className="font-display text-2xl font-bold">30 min</p>
                  <p className="text-xs uppercase tracking-[0.18em] opacity-70">First response</p>
                </div>
                <div className="border-t border-primary-foreground/15 pt-4">
                  <p className="font-display text-2xl font-bold">ISO 27001</p>
                  <p className="text-xs uppercase tracking-[0.18em] opacity-70">Certified delivery</p>
                </div>
                <div className="border-t border-primary-foreground/15 pt-4">
                  <p className="font-display text-2xl font-bold">Since 1996</p>
                  <p className="text-xs uppercase tracking-[0.18em] opacity-70">Running UK IT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom grid grid-cols-12 gap-4 items-start">
          <div className="col-span-12 lg:col-span-7 space-y-4">
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)] animate-slide-up">
              <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                Overview
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div
              className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)] animate-slide-up"
              style={{ animationDelay: "0.06s" }}
            >
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
                Key Benefits
              </h3>
              <ul className="divide-y divide-border">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside
            className="col-span-12 lg:col-span-5 lg:sticky lg:top-28 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)] animate-slide-up"
            style={{ animationDelay: "0.12s" }}
          >
            <h4 className="font-display text-xs font-bold mb-6 uppercase tracking-[0.2em] text-primary">
              What's Included
            </h4>
            <div className="divide-y divide-border">
              {service.features.map((f, i) => (
                <div key={i} className="flex items-start gap-4 py-4 first:pt-0">
                  <span className="font-display text-xs font-bold text-muted-foreground/70 pt-1 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-foreground/85 leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-secondary border border-border p-6">
              <p className="text-sm text-muted-foreground mb-4">
                Want this scoped for your estate? We'll send an exact quote within 48 hours.
              </p>
              <Button className="w-full rounded-xl press" onClick={() => navigate("/contact")}>
                Talk to an Expert <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="rounded-3xl border border-border bg-primary text-primary-foreground p-8 md:p-12 shadow-[var(--shadow-card)] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-2">
                Ready to hand this over?
              </h2>
              <p className="opacity-80 max-w-xl">
                A short discovery call, a clear scope, and a fixed quote — no obligation.
              </p>
            </div>
            <Button size="lg" variant="secondary" className="rounded-xl press shrink-0" asChild>
              <Link to="/contact">
                Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="pb-20 md:pb-28">
        <div className="container-custom">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              Related Services
            </h2>
            <Link
              to={`/services/${nextService.slug}`}
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-70 transition-opacity"
            >
              Next: {nextService.title} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {related.map((s, index) => {
              const RIcon = iconMap[s.icon] || Target;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="col-span-12 md:col-span-4 group flex flex-col rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] hover-lift transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6 border border-border group-hover:bg-primary transition-colors duration-300">
                    <RIcon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 leading-snug">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {s.shortDescription}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default ServiceDetail;
