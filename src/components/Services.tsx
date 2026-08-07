import { useEffect, useState } from "react";
import { Headset, ShieldCheck, ClipboardCheck, RefreshCcw, Server, Lock, FileCheck, Network, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

interface Service {
  id: string;
  title: string;
  description: string | null;
  icon: string | null;
  features: string[] | null;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Headset,
  ShieldCheck,
  ClipboardCheck,
  RefreshCcw,
  Server,
  Lock,
  FileCheck,
  Network
};

// Fallback services
const fallbackServices = [
  {
    id: "1",
    icon: "Headset",
    title: "Helpdesk & IT Operations",
    description: "Named engineers, 30-minute first response, one tracked channel",
    features: [
      "Named engineers who know your setup, not a rotating queue",
      "24/7 monitoring and OS + app patching, Windows and Mac",
      "Onboarding and exit (JML) handled cleanly, on time"
    ]
  },
  {
    id: "2",
    icon: "Server",
    title: "Microsoft 365 & Workspace",
    description: "Tenant, mailboxes, identity and collaboration, fully managed",
    features: [
      "Device lifecycle: enrolment, encryption, remote wipe, refresh",
      "Asset, licence, domain and DNS renewals tracked and managed",
      "Managed alongside your existing tools — no rip-and-replace"
    ]
  },
  {
    id: "3",
    icon: "ShieldCheck",
    title: "Secure by Default",
    description: "MFA, EDR, hardening and tested backup, standard from day one",
    features: [
      "Managed EDR — engineers who contain, not just alert",
      "Email security: anti-phishing, SPF/DKIM/DMARC, safe-link",
      "Backup & disaster recovery — monitored, restore-tested, immutable"
    ]
  },
  {
    id: "4",
    icon: "Lock",
    title: "Identity & Access",
    description: "MFA everywhere, role-based and privileged access control",
    features: [
      "Conditional access and CIS baseline hardening",
      "Vulnerability management on a managed remediation cycle",
      "Penetration testing & VAPT, scoped and reported"
    ]
  },
  {
    id: "5",
    icon: "ClipboardCheck",
    title: "Always Audit-Ready",
    description: "Cyber Essentials, ISO 27001 evidence and cyber insurance readiness",
    features: [
      "Cyber Essentials readiness — all five controls, certified via accredited body",
      "Cyber insurance readiness — controls kept true and evidenced for renewal",
      "Continuous controls & evidence with monthly packs and drift alerting"
    ]
  },
  {
    id: "6",
    icon: "FileCheck",
    title: "GDPR & Data Protection Ops",
    description: "DPA, sub-processor register, DSAR and breach process",
    features: [
      "ISO 27001 / SOC 2 continuous evidence; certification via accredited partners",
      "FCA operational resilience readiness (third-party + incident reporting, PS26/2)",
      "Data protection: encryption, secure sharing, retention, DLP where relevant"
    ]
  },
  {
    id: "7",
    icon: "Network",
    title: "Network Security (Remote)",
    description: "Remote monitoring, hardening and config of cloud-managed firewalls",
    features: [
      "Remote monitoring and hardening of firewalls, VPN and Wi-Fi",
      "Physical work coordinated via smart-hands",
      "Security awareness: phishing simulation and staff training"
    ]
  },
  {
    id: "8",
    icon: "RefreshCcw",
    title: "Migrations & IT Transition",
    description: "A clean switch from your incumbent, or a co-managed / fully managed start",
    features: [
      "Email migration: tenant-to-tenant, fixed-fee, no data lost",
      "Domain migration: DNS moved cleanly into your control",
      "Co-managed IT alongside your team, or fully managed end to end"
    ]
  }
];

export const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*")
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

  if (loading) {
    return (
      <section id="services" className="section-spacing relative overflow-hidden">
        <div className="container-custom flex justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="section-spacing relative overflow-hidden bg-secondary">
      <div className="container-custom relative">
        <div className="max-w-3xl mb-12 animate-slide-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
            What we do
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-[1.1]">
            Every capability, <span className="text-primary">independently buyable.</span>
          </h2>
          <p className="text-muted-foreground">
            Start with one function as a front door; expand into a managed engagement when you're ready. Your tools or ours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon || "ShieldCheck"] || ShieldCheck;
            return (
              <Card
                key={service.id}
                className="p-7 rounded-3xl bg-card border-border shadow-[var(--shadow-card)] hover:border-primary/40 transition-all duration-500 group relative overflow-hidden hover-lift animate-slide-up"
                style={{ animationDelay: `${Math.min(index, 8) * 0.06}s` }}
              >
                <div className="relative z-10">
                  <div className="w-11 h-11 bg-secondary rounded-xl flex items-center justify-center mb-5 border border-border group-hover:bg-accent transition-colors duration-300">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="font-display text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>

                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-2 pt-4 border-t border-border">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-[0.5rem] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
