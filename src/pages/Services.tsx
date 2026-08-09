import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ShieldCheck, Server, Cloud, LifeBuoy, FileCheck2, Lock, Laptop, Building2, ArrowRight, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { servicesData } from "@/data/services";
import { useSection } from "@/hooks/usePageContent";

const slugify = (title: string) => {
  const match = servicesData.find(
    (s) => s.title.toLowerCase() === title.toLowerCase()
  );
  if (match) return match.slug;
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

// Icon mapping for database services
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Server,
  Cloud,
  LifeBuoy,
  FileCheck2,
  Lock,
  Laptop,
  Building2,
};

// Fallback services data
const fallbackServices = [
  {
    id: "1",
    icon: "ShieldCheck",
    title: "Secure by Default",
    description: "MFA, EDR, hardening and tested backup applied as standard from day one — not a premium tier. It's the gap regulated firms name most, and we close it by default.",
    features: ["Multi-Factor Authentication", "Endpoint Detection & Response", "Device Hardening", "Tested Backup"]
  },
  {
    id: "2",
    icon: "Server",
    title: "Fully Managed IT",
    description: "One team runs your whole stack — endpoints, M365 and Workspace, patching, backup, security and the desk — and coordinates your vendors.",
    features: ["Endpoint Management", "Patch Management", "Vendor Coordination", "UK-Hours Desk"]
  },
  {
    id: "3",
    icon: "Cloud",
    title: "Co-Managed IT",
    description: "Already have an internal IT team? We add the security-by-default layer and audit discipline alongside them, no rip-and-replace.",
    features: ["Works With Your Team", "Your Tools or Ours", "Shared Escalation", "No Lock-In"]
  },
  {
    id: "4",
    icon: "FileCheck2",
    title: "Audit & Compliance Evidence",
    description: "The controls we run produce the evidence auditors, insurers and boards ask for — packaged monthly and kept current.",
    features: ["Monthly Evidence Packs", "Insurer-Ready Reporting", "Control Mapping", "Audit Support"]
  },
  {
    id: "5",
    icon: "Lock",
    title: "Cyber Insurance Readiness",
    description: "We help you meet and evidence the controls cyber insurers increasingly require, so renewal isn't a scramble.",
    features: ["Insurer Questionnaire Support", "Control Gap Review", "Remediation", "Ongoing Evidence"]
  },
  {
    id: "6",
    icon: "Building2",
    title: "Accountancy, Legal & Financial Services IT",
    description: "IT run specifically for the regulated UK industries we serve, with the compliance and confidentiality needs of each sector understood.",
    features: ["Sector-Specific Controls", "Client Confidentiality", "Regulatory Awareness", "Practice Software Support"]
  },
  {
    id: "7",
    icon: "Laptop",
    title: "Small Office IT",
    description: "A right-sized version of our managed service for smaller regulated offices that still need security by default and audit-ready evidence.",
    features: ["Right-Sized Support", "Secure by Default", "Simple Onboarding", "UK-Hours Desk"]
  },
  {
    id: "8",
    icon: "LifeBuoy",
    title: "Fully Remote Delivery",
    description: "Delivered end to end via our Z360 platform by an ISO 27001:2022 certified team — no on-site presence required.",
    features: ["Z360 Delivery Platform", "ISO 27001:2022 Certified", "UK & EU Coverage", "Remote-First Since 1996"]
  }
];

interface Service {
  id: string;
  title: string;
  description: string | null;
  icon: string | null;
  features: string[] | null;
}

const Services = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const hero = useSection<{ badge: string; headingHtml: string; subheading: string; ctaLabel: string }>(
    "services",
    "hero",
    {
      badge: "Our Services",
      headingHtml: 'Managed IT, <span class="text-primary">Run Completely</span>',
      subheading:
        "We run your IT end to end for the regulated UK industries we serve — secure by default, always audit-ready, delivered remotely by an ISO 27001:2022 certified team.",
      ctaLabel: "Book a Discovery Call",
    },
  );
  const cta = useSection<{ headingHtml: string; subheading: string; ctaLabel: string }>(
    "services",
    "cta",
    {
      headingHtml: 'Ready to Let Us <span class="text-primary">Run Your IT</span>?',
      subheading:
        "Book a 30-minute discovery call — no cost, no obligation — and get an exact quote within 48 hours.",
      ctaLabel: "Book a Discovery Call",
    },
  );

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase
        .from("services")
        .select("id, title, description, icon, features")
        .eq("published", true)
        .order("sort_order", { ascending: true });

      if (error || !data || data.length === 0) {
        setServices(fallbackServices);
      } else {
        setServices(data);
      }
      setLoading(false);
    };

    fetchServices();
  }, []);

  const handleContactClick = () => {
    navigate("/#contact");
  };

  const getIcon = (iconName: string | null) => {
    if (!iconName) return ShieldCheck;
    return iconMap[iconName] || ShieldCheck;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="IT Services — Managed, Secure and Audit-Ready | Infodot UK"
        description="Every capability, independently buyable: managed IT, secure by default, backup and disaster recovery, audit readiness, Cyber Essentials and cyber insurance readiness, transition and exit."
        keywords="managed IT services UK, co-managed IT, backup and disaster recovery, Cyber Essentials readiness, cyber insurance readiness, IT audit evidence"
        canonicalUrl="https://infodot.co.uk/services"
      />
      <JsonLd
        schema={{
          type: "Raw",
          id: "services-itemlist",
          data: {
            "@type": "ItemList",
            name: "Infodot UK Services",
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                name: s.title,
                description: s.description,
                provider: { "@type": "Organization", name: "Infodot UK" },
                url: `https://infodot.co.uk/services/${slugify(s.title)}`,
              },
            })),
          },
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <Breadcrumbs />
          <div className="grid grid-cols-12 gap-4">
            <div
              className="col-span-12 lg:col-span-8 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)] animate-slide-up"
            >
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                {hero.badge}
              </p>
              <h1
                className="font-display text-4xl md:text-6xl font-bold mb-6 leading-[1.08]"
                dangerouslySetInnerHTML={{ __html: hero.headingHtml }}
              />
              <p className="text-xl text-muted-foreground mb-8">{hero.subheading}</p>
              <Button size="lg" className="rounded-xl press" onClick={handleContactClick}>
                {hero.ctaLabel} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div
              className="col-span-12 lg:col-span-4 rounded-3xl border border-accent bg-accent text-accent-foreground p-8 shadow-[var(--shadow-card)] animate-slide-up flex flex-col justify-center"
              style={{ animationDelay: "0.08s" }}
            >
              <p className="font-display text-4xl font-bold mb-2">8</p>
              <p className="text-accent-foreground/75">
                independently buyable capabilities — start with one, expand when ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-4">
              {services.map((service, index) => {
                const IconComponent = getIcon(service.icon);
                return (
                  <div
                    key={service.id}
                    className="col-span-12 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)] hover-lift transition-all duration-500 animate-slide-up"
                    style={{ animationDelay: `${Math.min(index, 8) * 0.06}s` }}
                  >
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center border border-border">
                            <IconComponent className="w-7 h-7 text-primary" />
                          </div>
                          <h2 className="font-display text-2xl md:text-3xl font-bold">{service.title}</h2>
                        </div>

                        <p className="text-muted-foreground mb-6 text-lg">{service.description}</p>
                      </div>

                      <div className="min-w-0 lg:pl-8">
                        {service.features && service.features.length > 0 && (
                          <>
                            <h3 className="font-display text-xs font-bold text-primary mb-4 uppercase tracking-[0.2em]">What's Included</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {service.features.map((feature, i) => (
                                <div
                                  key={i}
                                  className="px-4 py-3 bg-secondary border border-border rounded-xl text-sm text-center break-words"
                                >
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                        <Button variant="outline" className="mt-6 w-full rounded-xl border-2 border-accent text-accent press" asChild>
                          <Link to={`/services/${slugify(service.title)}`} aria-label={`View ${service.title} details`}>
                            View {service.title} details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="rounded-3xl border border-accent bg-accent text-accent-foreground p-8 md:p-12 text-center animate-slide-up">
            <h2
              className="font-display text-3xl md:text-4xl font-bold mb-4"
              dangerouslySetInnerHTML={{ __html: cta.headingHtml }}
            />
            <p className="text-accent-foreground/75 max-w-2xl mx-auto mb-8">{cta.subheading}</p>
            <Button size="lg" className="rounded-xl press" onClick={handleContactClick}>
              {cta.ctaLabel} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Services;
