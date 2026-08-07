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
  const related = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);

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
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <Breadcrumbs />
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)] animate-slide-up">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              Infodot Services
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center border border-border">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold leading-[1.08]">
                <span className="text-primary">{service.title}</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              {service.shortDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="rounded-xl press" onClick={() => navigate("/contact")}>
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl border-2 border-accent text-accent press" asChild>
                <Link to="/services">
                  <ArrowLeft className="mr-2 w-4 h-4" /> All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-8 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)] animate-slide-up">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {service.description}
            </p>

            <h3 className="font-display text-xl font-bold mb-4">Key Benefits</h3>
            <ul className="space-y-3">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside
            className="col-span-12 lg:col-span-4 rounded-3xl border border-accent bg-accent text-accent-foreground p-8 shadow-[var(--shadow-card)] animate-slide-up"
            style={{ animationDelay: "0.08s" }}
          >
            <h4 className="font-display text-xs font-bold mb-4 uppercase tracking-[0.2em] text-primary">
              What's Included
            </h4>
            <div className="space-y-2">
              {service.features.map((f, i) => (
                <div
                  key={i}
                  className="px-4 py-3 bg-card text-card-foreground border border-border rounded-xl text-sm"
                >
                  {f}
                </div>
              ))}
            </div>
            <Button className="w-full mt-6 rounded-xl press" onClick={() => navigate("/contact")}>
              Talk to an Expert
            </Button>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Related Services</h2>
          <div className="grid grid-cols-12 gap-4">
            {related.map((s, index) => {
              const RIcon = iconMap[s.icon] || Target;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="col-span-12 md:col-span-4 group block rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] hover-lift transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 border border-border group-hover:bg-accent transition-colors duration-300">
                    <RIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{s.shortDescription}</p>
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
