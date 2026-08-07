import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Target, Eye, ShieldCheck, Users, Zap, Globe, KeyRound, FileCheck2 } from "lucide-react";
import teamNaren from "@/assets/team-naren.png";
import { useSection } from "@/hooks/usePageContent";

const values = [
  {
    icon: ShieldCheck,
    title: "Secure by Default",
    description: "MFA, EDR, hardening and tested backup are standard from day one, not a premium add-on."
  },
  {
    icon: FileCheck2,
    title: "Always Audit-Ready",
    description: "The controls we run produce the evidence auditors and insurers ask for, kept current."
  },
  {
    icon: KeyRound,
    title: "You Own Your IT",
    description: "Your data, your accounts, your documentation. We run it — you always own it, no lock-in."
  },
  {
    icon: Users,
    title: "One Accountable Team",
    description: "One team runs the whole stack and coordinates your vendors. Nobody to ping-pong to."
  }
];

const stats = [
  { value: "1996", label: "Serving clients since" },
  { value: "ISO 27001:2022", label: "Certified team" },
  { value: "UK & EU", label: "Remotely served" },
  { value: "48 hrs", label: "For an exact quote" }
];

const About = () => {
  const hero = useSection<{ badge: string; headingHtml: string; subheading: string }>(
    "about",
    "hero",
    {
      badge: "About Us",
      headingHtml: 'We Run Your IT. <span class="text-gradient-primary">You Own It.</span>',
      subheading:
        "Infodot UK is a managed IT provider for the regulated UK industries we serve — accountancy, legal and financial services — run end to end and remotely by an ISO 27001:2022 certified team.",
    },
  );
  const story = useSection<{ headingHtml: string; paragraphs: string[]; quote: string; founderName: string; founderRole: string }>(
    "about",
    "story",
    {
      headingHtml: 'Our <span class="text-gradient-primary">Story</span>',
      paragraphs: [
        "Infodot Technologies Pvt Ltd has been running IT for clients since 1996. Over that time we have built a delivery model designed specifically for regulated UK firms that need their technology to be secure, evidenced, and simply out of their way.",
        "We are based in Bangalore, India, and serve accountancy, legal and financial services firms across the UK and EU entirely remotely, backed by an ISO 27001:2022 certified team and our own delivery platform, Z360.",
        "Our promise is simple: we run your IT completely, but you always own it. Your accounts, your data, your documentation — never locked to us. If you ever choose to leave, we hand over a full exit pack and complete reverse knowledge transfer within 10 working days.",
      ],
      quote:
        "We run your IT. You own your IT.",
      founderName: "Infodot UK",
      founderRole: "Managed IT, run remotely",
    },
  );
  const mission = useSection<{ mission: string; vision: string }>("about", "mission_vision", {
    mission:
      "To run IT completely for the regulated UK industries we serve — secure by default, always audit-ready — so our clients' teams can focus on their business, not their infrastructure.",
    vision:
      "To be the managed IT partner regulated UK firms trust for the long term, precisely because ownership, evidence and an honest exit are built into how we work.",
  });
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="About Infodot UK — Managed IT Since 1996, Run Remotely"
        description="Infodot UK (Infodot Technologies Pvt Ltd) has run managed IT since 1996. ISO 27001:2022 certified, based in Bangalore, serving UK & EU regulated industries remotely."
        keywords="about Infodot UK, managed IT provider, ISO 27001 IT company, remote IT delivery, Infodot Technologies"
        canonicalUrl="https://infodot.co.uk/about"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative">
          <Breadcrumbs />
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-primary border-primary/30">
              {hero.badge}
            </Badge>
            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
              dangerouslySetInnerHTML={{ __html: hero.headingHtml }}
            />
            <p className="text-xl text-muted-foreground mb-8">{hero.subheading}</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                dangerouslySetInnerHTML={{ __html: story.headingHtml }}
              />
              {story.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground mb-4 last:mb-0">{p}</p>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <Card className="relative p-8 bg-card border-border/50">
                <div className="flex items-center gap-4 mb-6">
                  <img src={teamNaren} alt="Infodot UK delivery team" className="w-20 h-20 rounded-full object-cover" />
                  <div>
                    <h3 className="text-xl font-bold">{story.founderName}</h3>
                    <p className="text-primary">{story.founderRole}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{story.quote}"</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card/50">
        <div className="container-custom">
          <h2 className="sr-only">Mission and Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-background border-border/50 hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">{mission.mission}</p>
            </Card>
            <Card className="p-8 bg-background border-border/50 hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">{mission.vision}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We <span className="text-gradient-primary">Stand On</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and how we work with regulated UK clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all group text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-gradient-primary">Choose Us</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">ISO 27001:2022 Certified</h3>
              <p className="text-muted-foreground">Security and evidence built into how we operate, not bolted on</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Remote Delivery, UK Hours</h3>
              <p className="text-muted-foreground">A UK business-hours desk backed by our Z360 delivery platform</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <KeyRound className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">An Honest Exit</h3>
              <p className="text-muted-foreground">A full exit pack and reverse knowledge transfer within 10 working days, whenever you need it</p>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-12 max-w-3xl mx-auto">
            Who we're not for: we don't take on large enterprise estates, and we don't offer vCISO services. We focus on running IT completely for accountancy, legal and financial services firms.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default About;
