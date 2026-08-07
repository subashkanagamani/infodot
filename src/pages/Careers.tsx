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
      description: "Own the technical delivery of managed IT engagements for UK accountancy, legal and financial services clients — endpoints, Microsoft 365, patching and backup.",
      requirements: ["5+ years in managed IT / systems administration", "Strong Microsoft 365 and Windows/Mac endpoint experience", "Comfortable working UK business hours remotely"]
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
        title="Careers - Join Infodot UK's Managed IT Team"
        description="Join our growing managed IT team in Bangalore. Explore open engineering, service desk and security/compliance roles supporting UK accountancy, legal and financial services clients."
        keywords="managed IT careers, IT engineer jobs Bangalore, service desk jobs, cyber security careers, IT support jobs"
      />

      {/* Hero Section */}
      <section className="section-spacing pt-32">
        <div className="container-custom">
          <Breadcrumbs />
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Join Our Growing Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Help us run managed IT for regulated UK industries. Work with named clients, real ownership, and an ISO 27001-certified team, delivered remotely from Bangalore.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>

          {/* Open Positions */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {openPositions.map((position, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
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
                    <Button onClick={() => setSelectedPosition(position.title)}>
                      Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Requirements:</h4>
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
          <div className="mt-20 text-center p-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Don't See a Perfect Fit?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented IT engineers and analysts. Send us your resume and let's talk about how you can contribute to our team.
            </p>
            <Button size="lg" onClick={() => setSelectedPosition("General Application")}>
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
