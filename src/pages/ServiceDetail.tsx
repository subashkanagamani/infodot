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
import { getServicePromise, getServiceHeroCopy } from "@/data/servicePromises";

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
  const promise = getServicePromise(service.slug);
  const heroCopy = getServiceHeroCopy(service.slug, service.title);
  const heroLead =
    heroCopy.lead ??
    (service.shortDescription.trim().toLowerCase() !== heroCopy.headline.trim().toLowerCase()
      ? service.shortDescription
      : (service.description.split(/(?<=\.)\s+/).slice(0, 2).join(" ") || service.description));

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
      name: "Infodot",
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

      {/* Hero — architectural layering */}
      <section className="pt-32 pb-16 md:pb-24">
        <div className="container-custom">
          <Breadcrumbs />
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start mt-6">
            <div className="col-span-12 lg:col-span-7 space-y-8 animate-slide-up">
              <div className="flex items-center gap-5">
                <span className="font-display text-5xl font-extrabold text-foreground/[0.07] select-none tabular-nums leading-none">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <div className="space-y-1.5">
                  <div className="h-0.5 w-12 bg-primary" />
                  <span className="block uppercase tracking-[0.2em] text-[11px] font-extrabold text-primary">
                    {heroCopy.eyebrow}
                  </span>
                </div>
              </div>

              <h1 className="font-display text-4xl md:text-6xl font-extrabold text-foreground leading-[1.05] tracking-tight">
                {heroCopy.headline}
              </h1>

              <div className="flex flex-wrap gap-3">
                {promise.pains.map((p) => (
                  <span
                    key={p}
                    className="px-4 py-1.5 bg-card border border-border rounded-full text-xs font-bold text-muted-foreground"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <p className="text-lg md:text-2xl text-foreground/70 font-light leading-relaxed max-w-2xl border-l-4 border-primary pl-6 md:pl-8">
                {heroLead}
              </p>


              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  size="lg"
                  className="rounded-md px-8 py-6 font-extrabold press shadow-xl shadow-primary/20"
                  onClick={() => navigate("/contact")}
                >
                  Book a free assessment <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-md px-8 py-6 font-extrabold press"
                  asChild
                >
                  <Link to="/contact">Talk to an expert</Link>
                </Button>
              </div>
            </div>

            {/* Promise tile with offset frame */}
            <div
              className="col-span-12 lg:col-span-5 relative lg:mt-14 animate-slide-up"
              style={{ animationDelay: "0.08s" }}
            >
              <div className="bg-primary text-primary-foreground p-8 md:p-12 shadow-2xl relative z-10">
                <Icon className="w-10 h-10 mb-6" />
                <p className="font-display text-2xl md:text-[1.75rem] font-extrabold leading-snug">
                  {promise.promise}
                </p>
              </div>
              <div className="absolute -top-5 -right-5 w-full h-full border-2 border-foreground/80 z-0 hidden sm:block" />
            </div>
          </div>

          {/* Awareness strip */}
          <div className="mt-16 md:mt-20 pt-8 border-t border-border flex flex-wrap items-center gap-x-3 gap-y-2">
            <Users className="w-4 h-4 text-primary flex-shrink-0" />
            <p className="text-sm text-muted-foreground">{promise.awareness}</p>
            <Link
              to="/services/security-awareness"
              className="text-sm font-semibold text-primary hover:underline"
            >
              See security awareness training →
            </Link>
          </div>
        </div>
      </section>

      {/* Content band */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom grid grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="col-span-12 lg:col-span-8 space-y-16 md:space-y-20">
            <div className="space-y-6 animate-slide-up">
              <h2 className="font-display text-xs uppercase tracking-[0.2em] font-extrabold text-primary">
                Service Overview
              </h2>
              <p className="text-xl md:text-2xl text-foreground font-medium leading-snug">
                {service.description}
              </p>
            </div>

            <div className="space-y-10 animate-slide-up" style={{ animationDelay: "0.06s" }}>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                What's Included
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
                {service.features.map((f, i) => (
                  <div key={i} className="relative pt-2">
                    <span className="font-display text-6xl font-black text-foreground/[0.06] absolute -top-7 -left-1 select-none tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="relative text-base text-foreground/80 leading-relaxed">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside
            className="col-span-12 lg:col-span-4 lg:sticky lg:top-28 space-y-8 animate-slide-up"
            style={{ animationDelay: "0.12s" }}
          >
            <div className="bg-card p-8 md:p-10 shadow-2xl shadow-foreground/5">
              <h4 className="font-display text-lg font-extrabold text-foreground mb-8 border-b-2 border-primary pb-4 w-fit">
                Key Benefits
              </h4>
              <ul className="space-y-6">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-4 h-4 mt-1.5 bg-primary flex-shrink-0" />
                    <span className="font-semibold text-foreground/85 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-foreground text-background p-8 md:p-10 space-y-6">
              <p className="text-lg font-light leading-relaxed opacity-90">
                Want this scoped for your estate? We'll send an exact quote within 48 hours.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="w-full py-4 bg-primary text-primary-foreground font-extrabold tracking-[0.15em] uppercase text-xs hover:opacity-90 transition-opacity"
              >
                Talk to an Expert
              </button>
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
