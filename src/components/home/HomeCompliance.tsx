import { Link } from "react-router-dom";
import { ShieldCheck, FileLock2, BadgeCheck, ListChecks } from "lucide-react";

const frameworks = [
  {
    icon: ShieldCheck,
    title: "Cyber Essentials / CE+",
    description: "Readiness, remediation and evidence to pass — and stay passed.",
    href: "/services/cyber-essentials-readiness",
  },
  {
    icon: FileLock2,
    title: "UK GDPR",
    description: "Technical controls, a signed DPA and a documented sub-processor list.",
    href: "/services/gdpr-data-protection",
  },
  {
    icon: BadgeCheck,
    title: "ISO 27001",
    description: "ISO 27001:2022-certified operations; readiness support for your own certification.",
    href: "/services/iso27001-soc2-evidence",
  },
  {
    icon: ListChecks,
    title: "NCSC 10 Steps",
    description: "Security aligned to recognised UK guidance, mapped to your risk.",
    href: "/compliance/cyber-resilience-bill",
  },
];

export const HomeCompliance = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mb-12 animate-slide-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Compliance, by design</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-[1.1]">
            The frameworks your clients and <span className="text-primary">insurers ask about</span>
          </h2>
          <p className="text-muted-foreground">
            Compliance isn't a separate project — it's the natural outcome of how we run your IT. We support readiness, technical controls, evidence and ongoing monitoring.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {frameworks.map((framework, index) => (
            <Link
              key={framework.title}
              to={framework.href}
              className="group bg-card border border-border rounded-3xl p-8 flex flex-col gap-4 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className="w-11 h-11 bg-accent text-accent-foreground rounded-xl flex items-center justify-center">
                <framework.icon className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {framework.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{framework.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
