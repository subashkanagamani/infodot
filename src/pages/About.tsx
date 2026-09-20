import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Target, Eye, ShieldCheck, Users, Globe, KeyRound, FileCheck2, Check, Linkedin } from "lucide-react";
import teamNaren from "@/assets/team-naren.png";
import { useSection } from "@/hooks/usePageContent";
import { TeamProfiles } from "@/components/TeamProfiles";
import { MarketingPartner } from "@/components/MarketingPartner";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Z" />
    <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
  </svg>
);

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

const included = [
  "Managed IT provider since 1996",
  "ISO 27001:2022 certified; SOC 2 in progress",
  "Access-only model — we work inside your tenancy",
  "Named, background-checked engineers on business hours",
  "Your data stays in your environment, never copied out",
  "Regulated SMBs: fintech, financial and professional services",
];

const stats = [
  { value: "1996", label: "Serving clients since" },
  { value: "ISO 27001:2022", label: "Certified team" },
  { value: "Remote", label: "Remotely served" },
  { value: "48 hrs", label: "For an exact quote" }
];

const whyChoose = [
  { icon: ShieldCheck, title: "ISO 27001:2022 Certified", description: "Security and evidence built into how we operate, not bolted on" },
  { icon: Globe, title: "Remote Delivery, Business Hours", description: "A business-hours desk backed by our Z360 delivery platform" },
  { icon: KeyRound, title: "An Honest Exit", description: "A full exit pack and reverse knowledge transfer within 10 working days, whenever you need it" },
];

const About = () => {
  const hero = useSection<{ badge: string; headingHtml: string; subheading: string }>(
    "about",
    "hero",
    {
      badge: "Company",
      headingHtml: 'We run your IT. <span class="text-primary">You own your IT.</span>',
      subheading:
        "Infodot is a managed IT provider serving regulated SMBs remotely from an ISO 27001-certified team in Bangalore. Since 1996 we've run IT for organisations where getting it wrong has consequences.",
    },
  );
  const story = useSection<{ headingHtml: string; paragraphs: string[]; quote: string; founderName: string; founderRole: string }>(
    "about",
    "story",
    {
      headingHtml: 'Our <span class="text-primary">Story</span>',
      paragraphs: [
        "We're remote by design, and honest about what that means: your engineers are a named team in our ISO 27001-certified Bangalore centre, working business hours, operating inside your own tenancy — your data doesn't move to us.",
        "Since 1996 we've run IT for organisations where getting it wrong has consequences: fintech, financial and professional services SMBs remotely, backed by our own delivery platform, Z360.",
        "We compete on low risk, not low price, and we make ourselves easy to leave. You stay because the service is good — a full exit pack and complete reverse knowledge transfer are yours within 10 working days, whenever you ask.",
      ],
      quote:
        "We run your IT. You own your IT.",
      founderName: "Infodot",
      founderRole: "Managed IT, run remotely",
    },
  );
  const mission = useSection<{ mission: string; vision: string }>("about", "mission_vision", {
    mission:
      "To run IT completely for the regulated industries we serve — secure by default, always audit-ready — so our clients' teams can focus on their business, not their infrastructure.",
    vision:
      "To be the managed IT partner regulated firms trust for the long term, precisely because ownership, evidence and an honest exit are built into how we work.",
  });
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="About Infodot — Managed IT Since 1996, Run Remotely"
        description="Infodot (Infodot Technologies Pvt Ltd) has run managed IT since 1996. ISO 27001:2022 certified, based in Bangalore, serving regulated industries remotely."
        keywords="about Infodot, managed IT provider, ISO 27001 IT company, remote IT delivery, Infodot Technologies"
        canonicalUrl="https://infodot.co.uk/about"
      />
      <Navbar />

      {/* Hero Section — bento */}
      <section className="bg-secondary pt-28 pb-10 md:pt-32 md:pb-14">
        <div className="container-custom">
          <Breadcrumbs />
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">{hero.badge}</span>
              <h1
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mt-4 mb-6"
                dangerouslySetInnerHTML={{ __html: hero.headingHtml }}
              />
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl font-medium">{hero.subheading}</p>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 flex flex-col justify-center animate-slide-up" style={{ animationDelay: "0.08s" }}>
              <div className="font-display text-5xl font-bold">1996</div>
              <p className="mt-2 font-medium text-accent-foreground/70">
                Running IT for regulated businesses for nearly three decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-3xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)] animate-slide-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 break-words">{stat.value}</div>
                <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 animate-slide-up">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">What's included</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1]">
              Everything <span className="text-primary">built in.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-card)] animate-slide-up"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-12 gap-4 items-stretch">
            <div className="col-span-12 lg:col-span-7 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
              <h2
                className="font-display text-3xl md:text-4xl font-bold mb-6 leading-[1.1]"
                dangerouslySetInnerHTML={{ __html: story.headingHtml }}
              />
              {story.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground mb-4 last:mb-0">{p}</p>
              ))}
            </div>
            <div className="col-span-12 lg:col-span-5 bg-accent text-accent-foreground rounded-3xl p-8 flex flex-col justify-center animate-slide-up" style={{ animationDelay: "0.08s" }}>
              <div className="flex items-center gap-4 mb-6">
                <img src={teamNaren} alt="Infodot delivery team" className="w-16 h-16 rounded-full object-cover border-2 border-accent-foreground/20" />
                <div>
                  <h3 className="font-display text-xl font-bold">{story.founderName}</h3>
                  <p className="text-primary">{story.founderRole}</p>
                </div>
              </div>
              <p className="text-accent-foreground/80 italic">"{story.quote}"</p>
            </div>
          </div>
        </div>
      </section>

      <TeamProfiles />

      <MarketingPartner />

      {/* Social Links */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mb-10 animate-slide-up">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Connect</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1]">
              Follow <span className="text-primary">Infodot</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://www.instagram.com/infodot.technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-3xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-card)] hover-lift transition-all animate-slide-up"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary rounded-2xl flex items-center justify-center border border-border group-hover:bg-primary group-hover:text-white transition-colors">
                <InstagramIcon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Instagram</h3>
                <p className="text-muted-foreground text-sm mt-1">@infodot.technologies</p>
              </div>
            </a>
            <a
              href="https://share.google/dN7u67MVQy6veJKSZ"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-3xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-card)] hover-lift transition-all animate-slide-up"
              style={{ animationDelay: "0.08s" }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary rounded-2xl flex items-center justify-center border border-border group-hover:bg-primary group-hover:text-white transition-colors">
                <Linkedin className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">LinkedIn</h3>
                <p className="text-muted-foreground text-sm mt-1">Infodot Technologies</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <h2 className="sr-only">Mission and Vision</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] animate-slide-up">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6 border border-border">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">{mission.mission}</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: "0.08s" }}>
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6 border border-border">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">{mission.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 animate-slide-up">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Our principles</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-[1.1]">
              What We <span className="text-primary">Stand On</span>
            </h2>
            <p className="text-muted-foreground">
              These principles guide everything we do and how we work with regulated clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover-lift transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="w-11 h-11 bg-secondary rounded-xl flex items-center justify-center mb-4 border border-border">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 animate-slide-up">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Why us</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1]">
              Why <span className="text-primary">Choose Us</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {whyChoose.map((w, i) => (
              <div
                key={w.title}
                className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] animate-slide-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 border border-border">
                  <w.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{w.title}</h3>
                <p className="text-muted-foreground">{w.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: "0.32s" }}>
            <p className="text-center text-sm text-muted-foreground max-w-3xl mx-auto">
              Who we're not for: we don't take on large enterprise estates, and we don't offer vCISO services. We focus on running IT completely for accountancy, legal and financial services firms.
            </p>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default About;
