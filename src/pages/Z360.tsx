import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  BadgeCheck,
  ShieldCheck,
  Database,
  UserCheck,
  FileCheck2,
  Layers,
  Cog,
  Eye,
  AlertTriangle,
  Award,
} from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const trustChips = [
  { icon: Award, label: "ISO 27001-certified team" },
  { icon: BadgeCheck, label: "Managed IT since 1996" },
  { icon: ShieldCheck, label: "Secure by default" },
  { icon: FileCheck2, label: "Always audit-ready" },
];

const pillars = [
  {
    index: "01",
    eyebrow: "Standardisation",
    title: "Run the same, every time",
    copy: "Every client is delivered the same disciplined way, so your service never depends on who picks up the ticket.",
  },
  {
    index: "02",
    eyebrow: "Automation",
    title: "Nothing relies on memory",
    copy: "Patching, joiner/mover/leaver and control checks run automatically instead of being remembered.",
  },
  {
    index: "03",
    eyebrow: "Evidence",
    title: "Proof, as you go",
    copy: "The controls we run are captured as monthly evidence — the engine behind audit and cyber-insurance readiness.",
  },
];

const inputTools = [
  { name: "Microsoft 365 / Google Workspace", detail: "Email, identity & MFA" },
  { name: "Endpoint security (EDR)", detail: "Detection & response" },
  { name: "RMM & patch tooling", detail: "Monitoring & patching" },
  { name: "Firewall & network", detail: "Health, config & connectivity" },
  { name: "Backup & DR", detail: "Job status & restore readiness" },
];

const outputViews = [
  { name: "Incidents & helpdesk", detail: "One SLA-tracked queue" },
  { name: "RMM & patch status", detail: "Device health, patch compliance" },
  { name: "Email & identity", detail: "MFA gaps, mailbox policy" },
  { name: "Security posture", detail: "Protection status, threats" },
  { name: "Backup & evidence", detail: "Restore status, audit trail" },
];

const backbone = [
  {
    index: "01",
    icon: Database,
    title: "Unified data layer",
    copy: "Every event — a ticket, a patch, a threat, a mailbox change — is timestamped and queryable in one store. One source of truth for your estate.",
  },
  {
    index: "02",
    icon: UserCheck,
    title: "Identity context",
    copy: "Every event is tied to a specific user, device and role — the thread that turns raw tool logs into a report that means something.",
  },
  {
    index: "03",
    icon: FileCheck2,
    title: "Continuous evidence",
    copy: "Because everything runs through one layer, each control we operate is captured as evidence the moment it happens — not reconstructed before an audit.",
  },
];

const outcomes = [
  {
    icon: BadgeCheck,
    title: "Consistent, not heroic",
    copy: "Delivery doesn't depend on which engineer picks up your ticket. The same disciplined process runs for every client, every time.",
  },
  {
    icon: Cog,
    title: "Handled automatically",
    copy: "Patching, joiner/mover/leaver and control checks run on their own — so things don't slip because someone was busy.",
  },
  {
    icon: ShieldCheck,
    title: "Always audit-ready",
    copy: "The controls we run are captured as monthly evidence — the engine behind audit readiness and cyber-insurance readiness across your estate.",
  },
  {
    icon: Eye,
    title: "Nothing hidden",
    copy: "Backup failures, unprotected endpoints and MFA gaps surface in one view instead of staying buried in a console no one checks.",
  },
];

const comparison = [
  ["Six consoles, no single view of IT health", "One operational view across every tool"],
  ["Backup status unknown until something fails", "Backup and restore status live, with failure alerts"],
  ["Endpoint gaps invisible without logging into a separate security console", "Every endpoint's protection status in one place, gaps flagged"],
  ["Weeks of manual prep before every audit or renewal", "Evidence already captured and mapped to controls"],
  ["Delivery quality depends on the individual engineer", "Standardised process runs the same for everyone"],
];

const frameworks = ["Cyber Essentials", "Cyber Essentials Plus", "ISO 27001", "UK GDPR", "SOC 2", "DORA", "NIS2"];

const Z360 = () => {
  const { settings } = useSiteSettings();

  const handleBookCall = () => {
    const calendlyLink = settings.integrations.calendlyLink;
    if (calendlyLink) {
      window.open(calendlyLink, "_blank");
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Z360 — The Engine Behind Your Managed IT | Infodot"
        description="Z360 is Infodot's unified operations platform. It connects the tools that run your IT into one place, so incidents, patching, email, security and backup are visible, standardised and turned into evidence."
        keywords="Z360, managed IT platform, IT operations platform, unified IT view, audit evidence, standardised IT operations"
        canonicalUrl="https://infodot.co.uk/z360"
      />
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-secondary pb-10 pt-2 md:pb-14">
          <div className="container-custom">
            <Breadcrumbs />
            <div className="grid grid-cols-12 gap-4 mt-6">
              <div className="col-span-12 lg:col-span-8 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Powered by Z360</p>
                <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.08]">
                  Z360 — the engine behind your managed IT.
                </h1>
                <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl">
                  Z360 is our unified operations platform. It connects the tools that actually run your IT —
                  Workspace and the rest of your stack — into one place, so incidents, patching, email,
                  security and backup are visible, standardised and turned into evidence. You don't buy or
                  learn Z360. It's how we run your IT.
                </p>
                <Button size="lg" className="mt-8 rounded-xl press" onClick={handleBookCall}>
                  Book a 30-minute discovery call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div
                className="col-span-12 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 flex flex-col justify-center gap-5 animate-slide-up"
                style={{ animationDelay: "0.08s" }}
              >
                {trustChips.map((chip) => (
                  <div key={chip.label} className="flex items-center gap-4">
                    <chip.icon className="w-6 h-6 shrink-0 text-primary" />
                    <p className="font-display font-bold">{chip.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Not a product + pillars */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-custom">
            <div className="rounded-3xl border border-accent bg-accent text-accent-foreground p-8 md:p-12 shadow-[var(--shadow-card)] animate-slide-up">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Not a product</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.1] max-w-3xl">
                You don't buy Z360. It's how we run your IT.
              </h2>
              <p className="mt-5 max-w-3xl text-accent-foreground/75">
                Z360 is the standardisation, automation and reporting behind the managed service — what makes
                delivery consistent rather than heroic, and turns the controls we run into evidence you can
                hand to an auditor or insurer. You never license it or learn it. And as it evolves, every
                Infodot client benefits automatically.
              </p>
            </div>
            <div className="mt-4 grid grid-cols-12 gap-4">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.index}
                  className="col-span-12 md:col-span-4 bg-card border border-border rounded-3xl p-8 shadow-[var(--shadow-card)] hover-lift animate-slide-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    {pillar.index} · {pillar.eyebrow}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{pillar.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Z360 unifies */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container-custom">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">What Z360 unifies</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.1] max-w-3xl">
              All your IT tools. One view.
            </h2>
            <p className="mt-5 max-w-3xl text-muted-foreground">
              Your IT already runs on good tools — they just don't talk to each other. Z360 connects them
              through their APIs and pulls everything into a single operational view, so incidents, patching,
              email, security and backup live in one place instead of six consoles.
            </p>

            <div className="mt-10 grid grid-cols-12 gap-4 items-stretch">
              {/* Inputs */}
              <div className="col-span-12 lg:col-span-5 bg-card border border-border rounded-3xl p-6 md:p-8 shadow-[var(--shadow-card)] animate-slide-up">
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-5">
                  The tools you already use
                </p>
                <ul className="space-y-4">
                  {inputTools.map((tool) => (
                    <li key={tool.name} className="flex items-start justify-between gap-4 border-b border-border/60 pb-4 last:border-0 last:pb-0">
                      <div>
                        <p className="font-semibold">{tool.name}</p>
                        <p className="text-sm text-muted-foreground">{tool.detail}</p>
                      </div>
                      <ArrowRight className="hidden lg:block w-4 h-4 mt-1 shrink-0 text-primary" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Z360 core */}
              <div
                className="col-span-12 lg:col-span-2 bg-accent text-accent-foreground rounded-3xl p-6 flex lg:flex-col items-center justify-center gap-3 text-center animate-slide-up"
                style={{ animationDelay: "0.08s" }}
              >
                <Layers className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <p className="font-display text-2xl font-bold">Z360</p>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.15em] text-primary mt-1">One data layer</p>
                  <p className="text-xs text-accent-foreground/75 mt-2">connect · normalise · correlate</p>
                </div>
              </div>

              {/* Outputs */}
              <div
                className="col-span-12 lg:col-span-5 bg-card border border-border rounded-3xl p-6 md:p-8 shadow-[var(--shadow-card)] animate-slide-up"
                style={{ animationDelay: "0.16s" }}
              >
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-5">
                  One operational view
                </p>
                <ul className="space-y-4">
                  {outputViews.map((view) => (
                    <li key={view.name} className="flex items-start gap-4 border-b border-border/60 pb-4 last:border-0 last:pb-0">
                      <ArrowLeft className="hidden lg:block w-4 h-4 mt-1 shrink-0 text-primary" />
                      <div>
                        <p className="font-semibold">{view.name}</p>
                        <p className="text-sm text-muted-foreground">{view.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-muted-foreground animate-slide-up" style={{ animationDelay: "0.2s" }}>
              No rip and replace. Z360 sits above your existing stack and unifies it — Microsoft 365 or Google
              Workspace, your RMM, endpoint security, firewall and backup keep doing their job, while Z360
              gives one view across all of them.
            </p>
          </div>
        </section>

        {/* The backbone */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-custom">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">The backbone</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.1] max-w-3xl">
              Why one platform, and not six dashboards.
            </h2>
            <p className="mt-5 max-w-3xl text-muted-foreground">
              The reason Z360 can standardise delivery and produce evidence automatically comes down to its
              foundation: everything writes to one shared data layer, tied to a specific user and device.
            </p>
            <div className="mt-10 grid grid-cols-12 gap-4">
              {backbone.map((item, i) => (
                <div
                  key={item.index}
                  className="col-span-12 md:col-span-4 bg-card border border-border rounded-3xl p-8 shadow-[var(--shadow-card)] hover-lift animate-slide-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-display text-3xl font-bold text-primary/20">{item.index}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container-custom">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Why it matters to you</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.1] max-w-3xl">
              What the engine changes.
            </h2>
            <p className="mt-5 max-w-3xl text-muted-foreground">
              You never see Z360 directly. You see the result of it — in how your service runs and how ready
              you are when someone asks you to prove it.
            </p>
            <div className="mt-10 grid grid-cols-12 gap-4">
              {outcomes.map((outcome, i) => (
                <div
                  key={outcome.title}
                  className={`col-span-12 sm:col-span-6 lg:col-span-3 p-6 rounded-2xl border hover-lift animate-slide-up ${
                    i === 2
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-card border-border shadow-[var(--shadow-card)]"
                  }`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <outcome.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-display font-bold">{outcome.title}</h3>
                  <p className={`mt-2 text-sm ${i === 2 ? "text-accent-foreground/75" : "text-muted-foreground"}`}>
                    {outcome.copy}
                  </p>
                </div>
              ))}
            </div>

            {/* Comparison table */}
            <div className="mt-4 rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] overflow-hidden animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 md:p-8 md:border-r border-border">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> Without a unifying engine
                  </p>
                  <ul className="mt-5 space-y-4">
                    {comparison.map(([without]) => (
                      <li key={without} className="text-sm text-muted-foreground border-b border-border/60 pb-4 last:border-0 last:pb-0">
                        {without}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 md:p-8 bg-accent text-accent-foreground">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4" /> Run on Z360
                  </p>
                  <ul className="mt-5 space-y-4">
                    {comparison.map(([, withZ360]) => (
                      <li key={withZ360} className="text-sm border-b border-accent-foreground/15 pb-4 last:border-0 last:pb-0 flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                        <span>{withZ360}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence & compliance */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-12 gap-4 items-stretch">
              <div className="col-span-12 lg:col-span-7 bg-card border border-border rounded-3xl p-8 md:p-10 shadow-[var(--shadow-card)] animate-slide-up">
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Evidence & compliance</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.1]">
                  The engine behind "always audit-ready".
                </h2>
                <p className="mt-5 text-muted-foreground">
                  Because the controls we run are captured as evidence continuously, an audit or a
                  cyber-insurance renewal becomes something you export — not a scramble you dread.
                </p>
                <p className="mt-4 text-muted-foreground">
                  The controls Z360 runs are mapped to the frameworks your clients, auditors and insurers ask
                  about — captured in a timestamped audit trail, so the evidence is already there and current
                  when someone asks to see it.
                </p>
              </div>
              <div
                className="col-span-12 lg:col-span-5 bg-accent text-accent-foreground rounded-3xl p-8 md:p-10 animate-slide-up"
                style={{ animationDelay: "0.08s" }}
              >
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">Frameworks covered</p>
                <div className="flex flex-wrap gap-3">
                  {frameworks.map((framework) => (
                    <span
                      key={framework}
                      className="inline-flex items-center gap-2 rounded-full border border-accent-foreground/20 bg-accent-foreground/5 px-4 py-2 text-sm font-semibold"
                    >
                      <ShieldCheck className="w-4 h-4 text-primary" />
                      {framework}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore the platform */}
        <section className="pt-16 pb-4 bg-background">
          <div className="container-custom">
            <div className="rounded-3xl border border-border p-8 md:p-12 animate-slide-up">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Explore the platform</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-[1.1]">
                Z360 is getting its own home.
              </h2>
              <p className="mt-4 max-w-3xl text-muted-foreground">
                A dedicated site for the full platform is on the way at www.infodotz360.com (coming soon).
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="pb-20 pt-4 md:pt-6 bg-background">
          <div className="container-custom">
            <div className="rounded-3xl border border-border bg-secondary p-8 md:p-12 animate-slide-up">
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Get started</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-[1.1]">
                See how your IT would run on Z360.
              </h2>
              <p className="mt-4 max-w-3xl text-muted-foreground">
                Book a 30-minute discovery call and we'll walk you through how the service is run, review
                your current tools, and give you an exact quote within 48 hours.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="rounded-xl press" onClick={handleBookCall}>
                  Book a 30-minute discovery call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl press border-2">
                  <Link to="/how-it-works">How it works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Z360;
