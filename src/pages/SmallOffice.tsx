import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Minus, ShieldCheck } from "lucide-react";

const tiers = [
  {
    name: "Baseline",
    strap: "The essentials, done right",
    standard: "NCSC Small Business Guide",
    intro: "",
    features: [
      "MFA everywhere",
      "Patch automation + reporting",
      "Endpoint protection",
      "Phishing filter + awareness micro-training",
      "Backup + tested restore",
      "Monthly health report",
    ],
    popular: false,
  },
  {
    name: "Compliance",
    strap: "Win and keep the contracts",
    standard: "Adds Cyber Essentials + NCSC 10 Steps",
    intro: "Everything in Baseline, plus:",
    features: [
      "Cyber Essentials readiness + certification support",
      "Controls mapped to NCSC 10 Steps",
      "Monthly compliance scorecard",
      "Supplier-assurance evidence pack",
    ],
    popular: true,
  },
  {
    name: "Governance",
    strap: "Board-level confidence",
    standard: "Adds leadership + resilience",
    intro: "Everything in Compliance, plus:",
    features: [
      "Board-level risk dashboard",
      "Incident-response runbooks + tabletop",
      "Quarterly security posture review",
    ],
    popular: false,
  },
];

const compareGroups = [
  {
    title: "Foundations · NCSC Small Business Guide",
    rows: [
      { label: "MFA on every account", tiers: [true, true, true] },
      { label: "Patch automation + reporting", tiers: [true, true, true] },
      { label: "Endpoint protection (managed)", tiers: [true, true, true] },
      { label: "Phishing filter + awareness training", tiers: [true, true, true] },
      { label: "Backup + tested restore", tiers: [true, true, true] },
      { label: "Monthly health report", tiers: [true, true, true] },
    ],
  },
  {
    title: "Compliance & evidence",
    rows: [
      { label: "Cyber Essentials readiness + cert support", tiers: [false, true, true] },
      { label: "Controls mapped to NCSC 10 Steps", tiers: [false, true, true] },
      { label: "Monthly compliance scorecard", tiers: [false, true, true] },
      { label: "Supplier-assurance evidence pack", tiers: [false, true, true] },
    ],
  },
  {
    title: "Governance & resilience",
    rows: [
      { label: "Board-level risk dashboard", tiers: [false, false, true] },
      { label: "Incident-response runbooks + tabletop", tiers: [false, false, true] },
      { label: "Quarterly security posture review", tiers: [false, false, true] },
    ],
  },
];

const standardPoints = [
  {
    title: "Cyber Essentials on ourselves",
    body: "We run our own environment against the same five control areas we prepare you for.",
  },
  {
    title: "Named team, JML enforced",
    body: "Named engineers per client, least-privilege, same-day revocation on role change.",
  },
  {
    title: "Your data stays in your tenancy",
    body: "We administer Microsoft 365, Google Workspace and your cloud in place.",
  },
  {
    title: "29 years of operating discipline",
    body: "A security practice built across hundreds of client environments.",
  },
];

const spine = [
  {
    we: "Proactive IT to a documented NCSC standard",
    you: "IT that just works — and a team who knows your setup",
  },
  {
    we: "Continuous controls + monthly evidence",
    you: "An always-current answer for auditors, insurers & customers",
  },
  { we: "Cyber Essentials + supplier-assurance readiness", you: "Contracts you can win and keep" },
  { we: "One plain-English monthly report", you: "Confidence, without needing an in-house IT team" },
];

const SmallOffice = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEOHead
        title="Small & Growing Firms — Enterprise-Grade, Audit-Ready IT | Infodot"
        description="Enterprise-grade, audit-ready managed IT and security for small and growing firms. Aligned to the NCSC Small Business Guide and Cyber Essentials, in three clear tiers."
        keywords="small business IT support, NCSC small business guide, Cyber Essentials, audit-ready IT, managed IT for small firms"
        canonicalUrl="https://infodot.co.uk/small-office"
      />
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="bg-secondary pb-12 pt-2 md:pb-16">
          <div className="container-custom">
            <Breadcrumbs />
            <div className="grid grid-cols-12 gap-4 mt-6">
              <div className="col-span-12 lg:col-span-8 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] animate-slide-up">
                <div className="h-[3px] w-14 bg-primary mb-5" />
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
                  For small &amp; growing firms
                </p>
                <h1 className="font-display text-3xl md:text-5xl font-bold leading-[1.08]">
                  Enterprise-grade, audit-ready IT — at your scale.
                </h1>
                <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl">
                  You can't afford downtime, and you can't afford to fail a customer's security review — but you
                  can't staff a security team either. We run your IT to NCSC standards, generate the evidence as we
                  go, and package it into three clear tiers, so compliance is the byproduct of IT run right — not a
                  separate project. Aligned to the NCSC Small Business Guide and Cyber Essentials.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-xl press whitespace-normal">
                    <Link to="/contact">
                      Book a free IT &amp; security review <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-xl press border-2 border-accent text-accent whitespace-normal">
                    <a href="#packages">See the packages</a>
                  </Button>
                </div>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-border pt-6">
                  {[
                    { big: "20–75", small: "Seats we're built for" },
                    { big: "NCSC", small: "Small Business Guide + 10 Steps aligned" },
                    { big: "CE-ready", small: "Cyber Essentials readiness built in" },
                    { big: "1 / mo", small: "Plain-English security & health report" },
                  ].map((s) => (
                    <div key={s.big}>
                      <p className="font-display text-xl font-bold leading-tight">{s.big}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{s.small}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="col-span-12 lg:col-span-4 bg-accent text-accent-foreground rounded-3xl p-8 shadow-[var(--shadow-card)] animate-slide-up relative overflow-hidden"
                style={{ animationDelay: "0.08s" }}
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-accent-foreground/10" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-6">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="font-display text-lg font-bold mb-2">NCSC-aligned, evidenced monthly</p>
                  <p className="text-sm text-accent-foreground/75">
                    Big-MSP discipline, without big-MSP overhead — three tiers you can start and step up.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Baseline", "Compliance", "Governance"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-accent-foreground/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Why small firms choose us */}
        <section className="section-padding">
          <div className="container-custom">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              Why small firms choose us
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-bold leading-[1.1] max-w-3xl">
              Big-MSP discipline, without big-MSP overhead.
            </h2>
            <p className="mt-6 max-w-4xl text-muted-foreground">
              Most small firms run IT reactively — fix it when it breaks — until a breach, an outage or a customer's
              security questionnaire forces the issue. We flip that: proactive IT, run to a documented standard, with
              the evidence captured every month. So when the auditor, the insurer or your biggest customer asks, the
              answer is already ready.
            </p>
          </div>
        </section>

        {/* Tiers */}
        <section id="packages" className="section-padding bg-secondary scroll-mt-24">

          <div className="container-custom">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              Three ways to work with us — NCSC-aligned
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-bold leading-[1.1]">
              Start where you are. Step up as you grow.
            </h2>
            <div className="mt-8 grid grid-cols-12 gap-4">
              {tiers.map((tier, i) => (
                <div
                  key={tier.name}
                  className={`col-span-12 md:col-span-4 relative rounded-3xl border p-8 shadow-[var(--shadow-card)] animate-slide-up ${
                    tier.popular ? "border-accent bg-accent text-accent-foreground" : "border-border bg-card"
                  }`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                      Most popular
                    </div>
                  )}
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">{tier.name}</p>
                  <h3 className="mt-3 font-display text-xl font-bold">{tier.strap}</h3>
                  <p className={`mt-2 text-sm ${tier.popular ? "text-accent-foreground/75" : "text-muted-foreground"}`}>
                    {tier.standard}
                  </p>
                  {tier.intro && (
                    <p className={`mt-5 text-sm font-semibold ${tier.popular ? "text-accent-foreground/85" : ""}`}>
                      {tier.intro}
                    </p>
                  )}
                  <ul className="mt-4 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Pricing is shown on the <Link to="/pricing" className="text-primary font-semibold">Pricing page</Link> — validated to the market.
            </p>
          </div>
        </section>

        {/* Comparison */}
        <section className="section-padding">
          <div className="container-custom">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              Compare the packages
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-bold leading-[1.1]">
              Which controls you get for each goal.
            </h2>
            <div className="mt-8 overflow-x-auto rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="bg-accent text-accent-foreground text-left">
                    <th className="px-6 py-4 font-display text-xs font-bold uppercase tracking-[0.2em]">
                      Control / capability
                    </th>
                    {[
                      { name: "Baseline", goal: "the essentials" },
                      { name: "Compliance", goal: "win & keep contracts" },
                      { name: "Governance", goal: "board-level confidence" },
                    ].map((c) => (
                      <th key={c.name} className="px-6 py-4 w-40">
                        <span className="font-display text-xs font-bold uppercase tracking-[0.2em] block">{c.name}</span>
                        <span className="text-[11px] font-normal text-accent-foreground/70">Goal: {c.goal}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareGroups.map((group) => (
                    <Fragment key={group.title}>
                      <tr className="bg-secondary">
                        <td colSpan={4} className="px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                          {group.title}
                        </td>
                      </tr>
                      {group.rows.map((row) => (
                        <tr key={row.label} className="border-b border-border last:border-0">
                          <td className="px-6 py-3">{row.label}</td>
                          {row.tiers.map((has, idx) => (
                            <td key={idx} className="px-6 py-3">
                              {has ? (
                                <Check className="h-4 w-4 text-primary" />
                              ) : (
                                <Minus className="h-4 w-4 text-muted-foreground/50" />
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Each tier includes everything in the tier before it. Pricing is shown on the{" "}
              <Link to="/pricing" className="text-primary font-semibold">Pricing page</Link>.
            </p>
          </div>
        </section>

        {/* Standard we sell */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              We hold ourselves to the standard we sell
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-bold leading-[1.1] max-w-3xl">
              When you appoint us, you inherit a compliant supplier — not a new risk.
            </h2>
            <div className="mt-8 grid grid-cols-12 gap-4">
              {standardPoints.map((p, i) => (
                <div
                  key={p.title}
                  className="col-span-12 sm:col-span-6 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] animate-slide-up"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <Check className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 font-display font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The spine */}
        <section className="section-padding">
          <div className="container-custom">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">The spine</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold leading-[1.1] max-w-4xl">
              We make you audit-ready with the evidence in place. We don't audit — we make it a formality.
            </h2>
            <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border bg-accent text-accent-foreground">
                <p className="px-6 py-4 font-display text-xs font-bold uppercase tracking-[0.2em]">We run</p>
                <p className="px-6 py-4 font-display text-xs font-bold uppercase tracking-[0.2em] md:border-l border-accent-foreground/15">
                  You get
                </p>
              </div>
              {spine.map((r) => (
                <div key={r.we} className="grid grid-cols-1 md:grid-cols-2 border-b border-border last:border-0">
                  <p className="px-6 py-4 text-sm">{r.we}</p>
                  <p className="px-6 py-4 text-sm text-muted-foreground md:border-l border-border">{r.you}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding pt-0">
          <div className="container-custom">
            <div className="rounded-3xl border border-accent bg-accent text-accent-foreground p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-24 h-64 w-64 rounded-full border border-accent-foreground/10" />
              <div className="relative">
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                  Free IT &amp; security review
                </p>
                <h2 className="font-display text-2xl md:text-4xl font-bold leading-[1.1] max-w-3xl">
                  See where your IT stands — in one free review.
                </h2>
                <p className="mt-4 max-w-3xl text-accent-foreground/75">
                  We'll show you where you stand against the NCSC basics and Cyber Essentials, and which package fits.
                  No obligation.
                </p>
                <Button asChild size="lg" className="mt-8 rounded-xl press whitespace-normal">
                  <Link to="/contact">
                    Book a free IT &amp; security review <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                  </Link>
                </Button>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted-foreground max-w-4xl">
              Enterprise-grade, audit-ready managed IT &amp; security for small &amp; growing firms. Aligned to the NCSC
              Small Business Guide and Cyber Essentials. Compliance is the byproduct of IT run right.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default SmallOffice;
