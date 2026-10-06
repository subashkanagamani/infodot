import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
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
  Home,
  ChevronRight,
} from "lucide-react";
import { servicesData, getServiceBySlug, type ServiceItem } from "@/data/services";
import { getServicePromise, getServiceHeroCopy } from "@/data/servicePromises";
import { usePageContent } from "@/hooks/usePageContent";
import { cyberEssentialsIncluded, cyberEssentialsChanges, cyberEssentialsSteps, cyberEssentialsFaqs } from "@/data/cyberEssentials";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { JsonLd } from "@/components/JsonLd";

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
  const { data: servicePageOverrides } = usePageContent("service_pages");
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
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Target;
  const isCyberEssentials = service.slug === "cyber-essentials-readiness";
  const override = (servicePageOverrides?.[service.slug] || {}) as Record<string, any>;
  const basePromise = getServicePromise(service.slug);
  const baseHero = getServiceHeroCopy(service.slug, service.title);
  const promise = {
    ...basePromise,
    ...(Array.isArray(override.pains) && override.pains.length ? { pains: override.pains } : {}),
    ...(override.promise ? { promise: override.promise } : {}),
  };
  const heroCopy = {
    ...baseHero,
    ...(override.eyebrow ? { eyebrow: override.eyebrow } : {}),
    ...(override.headline ? { headline: override.headline } : {}),
    ...(override.lead ? { lead: override.lead } : {}),
  };
  const heroLead =
    heroCopy.lead ??
    (service.shortDescription.trim().toLowerCase() !== heroCopy.headline.trim().toLowerCase()
      ? service.shortDescription
      : (service.description.split(/(?<=\.)\s+/).slice(0, 2).join(" ") || service.description));

  const canonical = `https://infodot.consultwithprofessionals.com/services/${service.slug}`;
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
      url: "https://infodot.consultwithprofessionals.com",
    },
    areaServed: isCyberEssentials ? "GB" : "Global",
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
      {isCyberEssentials && <JsonLd schema={{ type: "FAQPage", questions: cyberEssentialsFaqs }} />}
      <Navbar />

      {/* Hero — architectural layering */}
      <section className="pt-32 pb-16 md:pb-24">
        <div className="container-custom">
          {isCyberEssentials ? (
            <>
              <JsonLd schema={{ type: "BreadcrumbList", items: [
                { name: "Home", url: "https://infodot.consultwithprofessionals.com/" },
                { name: "Services", url: "https://infodot.consultwithprofessionals.com/services" },
                { name: "Always Audit-Ready", url: "https://infodot.consultwithprofessionals.com/services/always-audit-ready" },
                { name: "Cyber Essentials Readiness", url: canonical },
              ] }} />
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 py-4 text-sm text-muted-foreground">
                <Link to="/" aria-label="Home" className="hover:text-primary"><Home className="h-4 w-4" /></Link>
                <ChevronRight className="h-4 w-4" />
                <Link to="/services" className="hover:text-primary">Services</Link>
                <ChevronRight className="h-4 w-4" />
                <Link to="/services/always-audit-ready" className="hover:text-primary">Always Audit-Ready</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="font-medium text-foreground">Cyber Essentials Readiness</span>
              </nav>
            </>
          ) : <Breadcrumbs />}
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start mt-6">
            <div className="col-span-12 lg:col-span-7 space-y-8 animate-slide-up">
              <div className="flex items-center gap-5">
                <span className="font-display text-5xl font-extrabold text-foreground/[0.07] select-none tabular-nums leading-none">
                  {isCyberEssentials ? "05" : String(currentIndex + 1).padStart(2, "0")}
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
                  {isCyberEssentials ? "Book a Free IT & Security Assessment" : "Book a free assessment"} <ArrowRight className="ml-2 w-4 h-4" />
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

            {/* Promise tile — navy, home-page style */}
            <div
              className="col-span-12 lg:col-span-5 relative lg:mt-10 animate-slide-up"
              style={{ animationDelay: "0.08s" }}
            >
              <div className="relative overflow-hidden bg-accent text-accent-foreground rounded-3xl p-8 md:p-12 shadow-[var(--shadow-card)]">
                <span className="relative z-10 w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6">
                  {isCyberEssentials ? <CheckCircle2 className="w-6 h-6 text-primary-foreground" /> : <Icon className="w-6 h-6 text-primary-foreground" />}
                </span>
                <p className="relative z-10 font-display text-2xl md:text-[1.75rem] font-bold leading-snug">
                  {promise.promise}
                </p>
                <div className="absolute -right-10 -bottom-10 opacity-10" aria-hidden>
                  <div className="w-40 h-40 border-[18px] border-current rounded-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Content band */}
      <section className="py-16 md:py-24 bg-secondary">
         <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
           <div className="lg:col-span-8 min-w-0 space-y-16 md:space-y-20">
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
                    {isCyberEssentials ? (
                      <div className="relative space-y-2">
                        <h4 className="font-bold text-foreground">{cyberEssentialsIncluded[i].title}</h4>
                        <p className="text-base text-foreground/80 leading-relaxed">{cyberEssentialsIncluded[i].body}</p>
                      </div>
                    ) : <p className="relative text-base text-foreground/80 leading-relaxed">{f}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>

           <aside
             className="lg:col-span-4 min-w-0 lg:sticky lg:top-28 space-y-8 animate-slide-up"
            style={{ animationDelay: "0.12s" }}
          >
            <div className="relative overflow-hidden bg-accent text-accent-foreground rounded-3xl p-8 md:p-10 shadow-[var(--shadow-card)]">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Key Benefits
              </span>
              <ul className="mt-6 space-y-4">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 mt-0.5 rounded-md bg-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary-foreground" />
                    </span>
                    <span className="text-sm font-semibold leading-relaxed text-accent-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute -right-8 -bottom-8 opacity-10" aria-hidden>
                <div className="w-32 h-32 border-[16px] border-current rounded-full" />
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)] space-y-6">
              <p className="text-base font-medium leading-relaxed text-muted-foreground">
                Want this scoped for your estate? We'll send an exact quote within 48 hours.
              </p>
              <Button
                size="lg"
                className="w-full py-6 rounded-2xl font-bold press"
                onClick={() => navigate("/contact")}
              >
                Talk to an Expert <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {isCyberEssentials && (
        <>
          <section className="py-16 md:py-24 bg-background">
            <div className="container-custom">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary mb-4">What changed in 2026</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">The rules got stricter in April.</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {cyberEssentialsChanges.map((change, i) => (
                  <div key={change.title} className="border-t-2 border-primary pt-6">
                    <span className="text-sm font-bold text-primary">0{i + 1}</span>
                    <h3 className="font-display text-xl font-bold mt-4 mb-3">{change.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{change.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-muted-foreground italic">Source: IASME, “Important update: changes to Cyber Essentials for April 2026”.</p>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-secondary">
            <div className="container-custom">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary mb-4">How it works</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">Four steps. The last one never stops.</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cyberEssentialsSteps.map((step, i) => (
                  <div key={step.title} className="border-t border-border pt-5">
                    <span className="font-display text-3xl font-bold text-primary">0{i + 1}</span>
                    <h3 className="font-display text-lg font-bold mt-4 mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-12 border-l-4 border-primary pl-6 font-bold max-w-3xl">We don't issue certificates — only IASME certification bodies can. And we won't tell you you'll pass before we've seen your estate.</p>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-background">
            <div className="container-custom grid lg:grid-cols-[1fr_2fr] gap-12">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary mb-4">Pricing</p>
                <p className="text-lg leading-relaxed">Part of the Audit-Ready scope — from £699 a month for 15 devices or fewer, or £55 per device above that. The certification body’s assessment fee is paid to them and itemised separately.</p>
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary mb-4">FAQs</p>
                <h2 className="font-display text-3xl font-bold mb-6">What firms ask us about Cyber Essentials</h2>
                <Accordion type="single" collapsible className="border-t border-border">
                  {cyberEssentialsFaqs.map((faq, i) => (
                    <AccordionItem key={faq.question} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left font-bold">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA band */}
      {!isCyberEssentials && <section className="py-16 md:py-20">
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
      </section>}

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

      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default ServiceDetail;
