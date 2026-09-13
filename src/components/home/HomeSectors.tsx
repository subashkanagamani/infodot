import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Scale, PoundSterling } from "lucide-react";

const sectors = [
  {
    icon: Calculator,
    title: "Accountants",
    description: "IRIS, CCH, Sage and Xero support, MTD readiness, and year-end uptime you can count on.",
    href: "/industries/accountants",
  },
  {
    icon: Scale,
    title: "Law firms",
    description: "LEAP, Clio and Proclaim support, SRA-aligned security, and matter-data confidentiality.",
    href: "/industries/law-firms",
  },
  {
    icon: PoundSterling,
    title: "Financial services",
    description: "FCA operational-resilience support, evidence, and identity & access controls.",
    href: "/industries/financial-services",
  },
];

export const HomeSectors = () => {
  return (
    <section className="section-spacing bg-secondary/40">
      <div className="container-custom">
        <div className="max-w-3xl mb-12 animate-slide-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Who we serve</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-[1.1]">
            Built for regulated UK firms — <span className="text-primary">from five users up</span>
          </h2>
          <p className="text-muted-foreground">
            We specialise in sectors where audits and client due-diligence are routine. Secure-by-default, always-audit-ready IT fits them naturally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {sectors.map((sector, index) => (
            <Link
              key={sector.title}
              to={sector.href}
              className="group bg-card border border-border rounded-3xl p-8 flex flex-col gap-4 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className="w-11 h-11 bg-accent text-accent-foreground rounded-xl flex items-center justify-center">
                <sector.icon className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {sector.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{sector.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <Link
            to="/industries/accountants"
            className="inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 decoration-primary decoration-2 hover:text-primary transition-colors"
          >
            See how we support your sector
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
