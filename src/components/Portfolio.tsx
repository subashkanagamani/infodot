import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ShieldCheck, ClipboardCheck, RefreshCcw } from "lucide-react";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    title: "Accountancy Practice — Co-Managed IT & Security Baseline",
    category: "Accountancy",
    description: "A 90-user accountancy practice needed security and evidence brought up to a consistent standard alongside its existing in-house team.",
    icon: ShieldCheck,
    tags: ["Co-Managed IT", "Cyber Insurance Readiness", "Backup & DR"]
  },
  {
    title: "Law Firm — Cyber Essentials Readiness & Hardening",
    category: "Legal",
    description: "A regional law firm achieved Cyber Essentials certification and set up continuous evidence to satisfy client and insurer requirements.",
    icon: ClipboardCheck,
    tags: ["Cyber Essentials Readiness", "IT Hardening", "Continuous Controls & Evidence"]
  },
  {
    title: "Financial Services Firm — Full IT Migration & Fully Managed IT",
    category: "Financial Services",
    description: "A structured, documented transition off an underperforming incumbent, followed by fully managed IT with monthly evidence.",
    icon: RefreshCcw,
    tags: ["IT Transition & Exit", "Fully Managed IT", "FCA Operational Resilience"]
  },
  {
    title: "Law Firm — Backup, Disaster Recovery & Incident Response",
    category: "Legal",
    description: "Monitored, restore-tested, immutable backups with a defined RTO/RPO, plus a documented incident response plan.",
    icon: ShieldCheck,
    tags: ["Backup & Disaster Recovery", "Monitoring & Incident Response", "Vulnerability Management"]
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="section-spacing relative">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="container-custom relative">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Engagement <span className="text-gradient-primary relative">
              Snapshots
              <span className="absolute -inset-2 bg-primary/10 blur-2xl -z-10 animate-pulse-glow" />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Generic, anonymised snapshots of how we run managed IT, security and compliance evidence for accountancy, legal and financial services firms.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/portfolio">View All Engagement Snapshots</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden cursor-pointer hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="text-primary border-primary/30 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                    {item.category}
                  </Badge>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <h3 className="text-2xl font-bold group-hover:text-primary-glow transition-colors">{item.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 group-hover:text-foreground/90 transition-colors">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="text-xs group-hover:border-primary/50 group-hover:bg-primary/5 transition-all"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
