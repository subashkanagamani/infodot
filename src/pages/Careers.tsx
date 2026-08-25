import { useState } from "react";
import { Briefcase, MapPin, Clock, ArrowRight, Heart, TrendingUp, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CareerApplicationForm } from "@/components/CareerApplicationForm";

export default function Careers() {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  const openPositions = [
    {
      title: "Senior Systems Engineer",
      department: "Managed IT",
      location: "Bangalore / Hybrid",
      type: "Full-time",
      description: "Own the technical delivery of managed IT engagements for accountancy, legal and financial services clients — endpoints, Microsoft 365, patching and backup.",
      requirements: ["5+ years in managed IT / systems administration", "Strong Microsoft 365 and Windows/Mac endpoint experience", "Comfortable working business hours remotely"]
    },
    {
      title: "Service Desk Engineer",
      department: "Helpdesk & IT Operations",
      location: "Bangalore",
      type: "Full-time",
      description: "Be a named point of contact for client end users, resolving tickets with a 30-minute first response target across a single tracked channel.",
      requirements: ["2+ years in a service desk / IT support role", "Clear written and spoken English", "ITIL awareness a plus"]
    },
    {
      title: "Security & Compliance Analyst",
      department: "Always Audit-Ready",
      location: "Bangalore / Hybrid",
      type: "Full-time",
      description: "Maintain continuous controls and evidence for clients — Cyber Essentials, ISO 27001 evidence, cyber insurance readiness and GDPR data protection operations.",
      requirements: ["2+ years in IT security or compliance", "Familiarity with Cyber Essentials or ISO 27001 controls", "Detail-oriented and comfortable with documentation"]
    },
    {
      title: "Cloud & Migrations Engineer",
      department: "Switch Projects",
      location: "Remote",
      type: "Full-time / Contract",
      description: "Deliver fixed-fee email, tenant and domain migrations, and IT transition/exit projects for clients switching providers.",
      requirements: ["Experience with Microsoft 365 / Google Workspace migrations", "Project delivery experience", "DNS and domain management knowledge"]
    },
    {
      title: "Network & Security Engineer",
      department: "Secure by Default",
      location: "Hybrid",
      type: "Full-time",
      description: "Manage cloud-managed firewalls, VPN and Wi-Fi remotely, and run EDR, vulnerability management and penetration testing coordination for clients.",
      requirements: ["Experience with cloud-managed networking (firewalls, VPN, Wi-Fi)", "3+ years experience in a security or network engineering role", "Strong analytical mindset"]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible hours, remote/hybrid work options, and generous PTO"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning budget and clear advancement paths in IT and security"
    },
    {
      icon: Users,
      title: "Amazing Team",
      description: "Collaborative culture with experienced engineers who take ownership"
    },
    {
      icon: Zap,
      title: "Competitive Package",
      description: "Competitive salary, health benefits, and performance bonuses"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />
      <BackToTop />
      
      <SEOHead 
        title="Careers - Join Infodot's Managed IT Team"
        description="Join our growing managed IT team in Bangalore. Explore open engineering, service desk and security/compliance roles supporting accountancy, legal and financial services clients."
        keywords="managed IT careers, IT engineer jobs Bangalore, service desk jobs, cyber security careers, IT support jobs"
      />

      {/* Hero Section */}
      <section className="bg-secondary pt-24 pb-10 md:pt-28 md:pb-14">
        <div className="container-custom">
          <Breadcrumbs />

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Careers</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.08] mt-4">
                Join Our <span className="text-primary">Growing Team</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl font-medium">
                Help us run managed IT for regulated industries. Work with named clients, real ownership, and an ISO 27001-certified team, delivered remotely from Bangalore.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 flex flex-col justify-center animate-slide-up" style={{ animationDelay: "0.08s" }}>
              <div className="font-display text-5xl font-bold">{openPositions.length}</div>
              <p className="mt-2 font-medium text-accent-foreground/70">Open roles across engineering, security and delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container-custom">
          {/* Benefits Section */}
          <div className="grid grid-cols-12 gap-4 mb-16">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-3 p-6 text-center rounded-3xl bg-card border-border shadow-[var(--shadow-card)] hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 border border-border">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>

          {/* Open Positions */}
          <div>
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Open Positions</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1]">Roles we're hiring for</h2>
            </div>
            <div className="space-y-4 max-w-4xl">
              {openPositions.map((position, index) => (
                <Card
                  key={index}
                  className="p-6 rounded-3xl bg-card border-border shadow-[var(--shadow-card)] hover-lift animate-slide-up"
                  style={{ animationDelay: `${Math.min(index, 8) * 0.06}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="rounded-xl press bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setSelectedPosition(position.title)}>
                      Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-display font-bold text-sm mb-2">Key Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-3xl border border-border bg-accent text-accent-foreground p-10 md:p-12 text-center animate-slide-up">
            <h2 className="font-display text-3xl font-bold mb-4">Don't See a Perfect Fit?</h2>
            <p className="text-accent-foreground/70 mb-6 max-w-2xl mx-auto">
              We're always looking for talented IT engineers and analysts. Send us your resume and let's talk about how you can contribute to our team.
            </p>
            <Button size="lg" className="rounded-xl press bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => setSelectedPosition("General Application")}>
              Send Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <CareerApplicationForm 
        position={selectedPosition || ""}
        isOpen={!!selectedPosition}
        onClose={() => setSelectedPosition(null)}
      />

      <Footer />
    </div>
  );
}
