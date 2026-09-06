export interface EvidenceStat { big: string; small: string }
export interface EvidencePoint { title: string; body: string }
export interface EvidenceStep { index: string; label: string; title: string; body: string }
export interface OwnershipRow { we: string; you: string }

export interface EvidencePageData {
  slug: string;
  path: string;
  breadcrumbLabel: string;
  seo: { title: string; description: string; keywords: string; canonical: string };
  eyebrow: string;
  headline: string;
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroBadge?: { big: string; small: string };
  callout?: { eyebrow: string; heading: string; body: string };

  stats: EvidenceStat[];
  whySection: { eyebrow: string; heading: string; body: string; points: EvidencePoint[] };
  process: { eyebrow: string; heading: string; steps: EvidenceStep[] };
  standard: { eyebrow: string; heading: string; points: EvidencePoint[] };
  ownership: { eyebrow: string; heading: string; rows: OwnershipRow[]; closing: string };
  cta: { eyebrow: string; heading: string; body: string; button: string };
  footnote: string;
}

const selfStandard: EvidencePoint[] = [
  {
    title: "Cyber Essentials on ourselves",
    body: "We run our own environment against the same five control areas we prepare you for.",
  },
  {
    title: "Named team, JML enforced",
    body: "Named engineers per client, least-privilege access, same-day revocation on role change.",
  },
  {
    title: "Your data stays in your tenancy",
    body: "We administer Microsoft 365, Google Workspace and your cloud in place — we don't copy data out.",
  },
  {
    title: "Right to verify",
    body: "Full audit trail on every action in your environment, available to you.",
  },
];

export const supplyChainAssurance: EvidencePageData = {
  slug: "supply-chain-assurance",
  path: "/compliance/supply-chain-assurance",
  breadcrumbLabel: "Supply-Chain Assurance",
  seo: {
    title: "Supply-Chain Assurance — Pass the Security Review | Infodot",
    description:
      "Clear supplier due diligence with one living evidence pack. Security questionnaires answered, Cyber Essentials and ISO 27001 / SOC 2 evidence kept current — so the review is a formality.",
    keywords:
      "supply chain assurance, supplier security review, security questionnaire, SIG CAIQ, vendor due diligence, Cyber Essentials",
    canonical: "https://infodot.co.uk/compliance/supply-chain-assurance",
  },
  eyebrow: "Compliance · Supply-Chain Assurance",
  headline: "Be the supplier that passes the security review.",
  lead:
    "Your enterprise customers are under their own regulation — and they now vet your cyber hygiene before they'll sign or renew. If you can't evidence it, the deal stalls in vendor onboarding. We run your IT estate to a demonstrable standard and keep the evidence pack current, so you clear supplier due diligence and win the contract. We don't audit you — we make the review a formality.",
  primaryCta: { label: "Book a supplier-readiness review", href: "/contact" },
  secondaryCta: { label: "Talk to us first", href: "/contact" },
  heroBadge: { big: "✓", small: "you — the verified link in the chain" },

  stats: [
    { big: "1 pack", small: "One living evidence pack answers every questionnaire" },
    { big: "SIG · CAIQ", small: "Security questionnaires answered, not reinvented" },
    { big: "CE → ISO", small: "From Cyber Essentials to ISO 27001 / SOC 2 evidence" },
    { big: "0", small: "Deals we'll let you lose to an evidence gap" },
  ],
  whySection: {
    eyebrow: "Why you're being asked",
    heading: "You didn't used to get security questionnaires. Now every deal comes with one.",
    body:
      "That's not bureaucracy. Your customers are under their own rules — ISO 27001, SOC 2, DORA, NIS, the incoming Cyber Security & Resilience Bill — and those rules make them responsible for the security of their suppliers. So they push the scrutiny down the chain to you. The questionnaire, the Cyber Essentials request, the pen-test report, the signed DPA — that's now the gate between you and the contract. Firms that can evidence their hygiene win and keep the work. Firms that can't, quietly lose it.",
    points: [
      {
        title: "Security questionnaires — answered.",
        body: "SIG, CAIQ, or a customer's bespoke spreadsheet — answered from one current evidence pack, not reinvented each time.",
      },
      {
        title: "Cyber Essentials / CE Plus.",
        body: "The baseline most enterprise buyers now ask for. We ready the estate and manage you to certification.",
      },
      {
        title: "ISO 27001 / SOC 2 evidence.",
        body: "The controls and evidence a serious buyer's vendor-risk team wants to see.",
      },
      {
        title: "A single, living evidence pack.",
        body: "One current source of truth you can hand to any customer, any time — so re-reviews aren't a rebuild.",
      },
    ],
  },
  process: {
    eyebrow: "How we handle it — controls + evidence, every month",
    heading: "The same evidence engine, aimed at getting you through due diligence.",
    steps: [
      {
        index: "01",
        label: "Harden",
        title: "Demonstrable baseline",
        body: "MFA, patching, endpoint protection, backup, access control — documented and provable.",
      },
      {
        index: "02",
        label: "Evidence",
        title: "Captured continuously",
        body: "Access records, patch reports, backup tests and change history, organised the way a buyer asks.",
      },
      {
        index: "03",
        label: "Pack",
        title: "One living evidence pack",
        body: "Assembled and kept current, so the next questionnaire is a send, not a scramble.",
      },
      {
        index: "04",
        label: "Respond",
        title: "Questionnaire turnaround",
        body: "We draft the security-questionnaire responses from your evidence, so onboarding doesn't stall.",
      },
      {
        index: "05",
        label: "Renew",
        title: "Ready for re-review",
        body: "When a customer re-reviews you next year, you're already ready.",
      },
    ],
  },
  standard: {
    eyebrow: "We're a low-risk supplier ourselves",
    heading: "You're bringing us into your supply chain. We hold ourselves to the standard we get you to.",
    points: [
      {
        title: "Cyber Essentials on ourselves",
        body: "The same five control areas we prepare you for.",
      },
      {
        title: "Named team, JML enforced",
        body: "Least-privilege access, same-day revocation on role change.",
      },
      {
        title: "Your data stays in your tenancy",
        body: "We administer in place — we don't copy your data out to our systems.",
      },
      {
        title: "Right to verify",
        body: "Full audit trail on every action in your environment, available to you.",
      },
    ],

  },
  ownership: {
    eyebrow: "What we own — and what stays with you",
    heading: "We make the evidence. You hold the customer relationship.",
    rows: [
      { we: "The IT-estate controls, hardening and monitoring", you: "Your relationship and contract with the customer" },
      { we: "The continuous evidence and audit trail", you: "The commercial terms of the deal" },
      { we: "The single evidence pack & questionnaire responses", you: "The final attestation you give your customer" },
      { we: "Keeping it current for re-reviews", you: "Sign-off on what you represent to them" },
    ],
    closing:
      "We make you a demonstrably low-risk supplier with the evidence in place. We don't do the review — we make it a formality.",
  },
  cta: {
    eyebrow: "Supplier-readiness review",
    heading: "Would your biggest customer's security review find you ready?",
    body:
      "Book a supplier-readiness review. We'll show you the evidence gaps a buyer's questionnaire would expose today — and how fast we can close them.",
    button: "Book a supplier-readiness review",
  },
  footnote:
    "Compliance-driven managed IT & security. We make you a demonstrably low-risk supplier with the evidence in place; the customer relationship, contract and attestation remain yours. Always Audit-Ready.",
};

export const resilienceBill: EvidencePageData = {
  slug: "cyber-resilience-bill",
  path: "/compliance/cyber-resilience-bill",
  breadcrumbLabel: "Cyber Security & Resilience Bill",
  seo: {
    title: "Cyber Security & Resilience Bill — Relevant-MSP Readiness | Infodot",
    description:
      "The Cyber Security & Resilience Bill makes managed service providers a regulated category, with a 24-hour incident clock. We run your estate with the controls and evidence already in place.",
    keywords:
      "Cyber Security and Resilience Bill, Relevant MSP, 24 hour incident reporting, MSP regulation, NCSC notification",
    canonical: "https://infodot.co.uk/compliance/cyber-resilience-bill",
  },
  eyebrow: "Compliance · Cyber Security & Resilience Bill",
  headline: "The law is coming for MSPs. Ours is already built for it.",
  lead:
    "The UK's Cyber Security & Resilience Bill turns managed service providers into a regulated category — with a 24-hour incident clock and penalties that reach millions. We don't audit, and we don't wait for the deadline. We run your IT estate with the controls and evidence already in place — so when the rules bite, there's nothing to scramble for, and your MSP isn't the weak link in your supply chain.",
  primaryCta: { label: "Start your readiness assessment", href: "/contact" },
  secondaryCta: { label: "Talk to us first", href: "/contact" },
  heroBadge: { big: "24h", small: "notify · then 72h" },
  callout: {
    eyebrow: "Why this lands on you",
    heading: "You don't have to be a bank or a hospital for this to matter.",
    body:
      "If an auditor, an insurer or a customer examines your supply chain, your MSP is now part of the regulated surface. A supplier who can't evidence their controls — or can't move inside a 24-hour clock — becomes your exposure. We make sure the answer to \u201cis your IT provider ready for this?\u201d is yes, in writing.",
  },

  stats: [
    { big: "Named", small: "MSPs written into UK law for the first time" },
    { big: "24h", small: "Initial incident notification window" },
    { big: "72h", small: "Fuller report to regulator & NCSC" },
    { big: "£17m", small: "or 4% of global turnover — max penalty" },
  ],
  whySection: {
    eyebrow: "What's changing — in plain English",
    heading: "For the first time, UK law names managed service providers directly.",
    body:
      "The Bill creates a statutory category of \u201cRelevant Managed Service Providers\u201d — anyone with ongoing management, monitoring or privileged access to a customer's IT. It's the single biggest scope expansion in the Bill, and it exists because compromised MSPs have been a repeated route into UK organisations.",
    points: [
      {
        title: "MSPs are now in scope.",
        body: "If we manage, monitor or hold privileged access to your environment, both of us sit inside the regime.",
      },
      {
        title: "A 24-hour incident clock.",
        body: "Initial notification within 24 hours, a fuller report within 72 hours, to the regulator and the NCSC — plus a duty to notify affected customers.",
      },
      {
        title: "Penalties with teeth.",
        body: "Up to £17m or 4% of global turnover for serious breaches, with daily penalties for continuing non-compliance.",
      },
      {
        title: "It's moving now.",
        body: "Passed the Commons and at Lords Committee stage. Royal Assent expected late 2026, with obligations following through secondary legislation.",
      },
    ],
  },
  process: {
    eyebrow: "How we handle it — controls + evidence, every month",
    heading: "Not a new service. The evidence engine we already run, mapped to the Bill.",
    steps: [
      {
        index: "01",
        label: "Detect",
        title: "Built for the clock",
        body: "Monitoring tuned so an on-call engineer can trigger a 24-hour notification on judgment — not wait for a finished forensic report.",
      },
      {
        index: "02",
        label: "Evidence",
        title: "Already captured",
        body: "Logs, access records, change histories and privileged-access sessions — recorded continuously, so the trail exists before the incident does.",
      },
      {
        index: "03",
        label: "Access",
        title: "Privilege under control",
        body: "MFA everywhere, session-logged access, client-segregated credential vaults, same-day revocation on role change.",
      },
      {
        index: "04",
        label: "Notify",
        title: "Customer-notification ready",
        body: "Contact routes, timelines and templates prepared in advance, so notifying you is a process, not a panic.",
      },
      {
        index: "05",
        label: "Prove",
        title: "Evidence on demand",
        body: "A current, exportable pack of the controls and evidence your auditors, insurers and customers ask for.",
      },
    ],
  },
  standard: {
    eyebrow: "We hold ourselves to the standard we sell",
    heading: "The Bill regulates MSPs. So the first estate we make ready is our own.",
    points: [
      {
        title: "Run to Relevant-MSP standard internally",
        body: "The same monitoring, privileged-access control and incident evidence we deploy for you, applied to us.",
      },
      {
        title: "Our own 24-hour capability is live",
        body: "Named decision-makers, out-of-hours escalation, pre-drafted notifications.",
      },
      {
        title: "You inherit a compliant supplier",
        body: "Not a new risk to assess — the point of choosing an MSP built for the law that governs MSPs.",
      },
      {
        title: "Right to verify",
        body: "Right-to-audit clause offered in Enterprise agreements. We're happy to be checked.",
      },
    ],
  },
  ownership: {
    eyebrow: "What we own — and what stays with you",
    heading: "We're an MSP, not an auditor. The line is clear on purpose.",
    rows: [
      { we: "The IT-estate controls and hardening", you: "Your regulatory return and regulator engagement" },
      { we: "Continuous evidence, logs and audit trail", you: "The \u201csignificant incident\u201d determination (made together)" },
      { we: "24-hour-capable detection and notification to you", you: "Your notifications to your own regulators / customers" },
      { we: "Our own Relevant-MSP readiness", you: "Board-level accountability for compliance" },
    ],
    closing: "We make you audit-ready with the evidence in place. We don't do the audit — we make sure it's a formality.",
  },
  cta: {
    eyebrow: "Readiness assessment",
    heading: "Is your IT provider ready for the Resilience Bill?",
    body:
      "Book a readiness assessment. We'll show you the controls, the evidence, and exactly where the 24-hour clock would leave you today.",
    button: "Start your readiness assessment",
  },
  footnote:
    "Compliance-driven managed IT & security. This page describes readiness positioning and is not legal advice; regulatory specifics of the Cyber Security & Resilience Bill are subject to secondary legislation. Always Audit-Ready · Managed IT · Cybersecurity.",
};

export const healthcareNhs: EvidencePageData = {
  slug: "healthcare-nhs",
  path: "/industries/healthcare-nhs",
  breadcrumbLabel: "Healthcare / NHS suppliers",
  seo: {
    title: "Healthcare & NHS Suppliers — DSPT-Ready IT | Infodot",
    description:
      "DSPT-ready IT for trusts, GP practices, clinics and NHS suppliers. We run the estate to National Data Guardian standards with evidence captured continuously — DTAC and Cyber Essentials included.",
    keywords: "DSPT readiness, NHS IT support, DTAC, National Data Guardian, healthcare managed IT, NHS supplier compliance",
    canonical: "https://infodot.co.uk/industries/healthcare-nhs",
  },
  eyebrow: "Who we serve · Healthcare & NHS suppliers",
  headline: "DSPT-ready IT. Every day, not every deadline.",
  lead:
    "If you handle NHS patient data — as a trust, a GP practice, a clinic, or a supplier in the NHS chain — the Data Security & Protection Toolkit is non-negotiable. We run the IT estate underneath it against the National Data Guardian standards, with the evidence captured continuously — so your annual DSPT submission is something you confirm, not something you scramble to assemble. We don't submit it for you, and we're not your Clinical Safety Officer — we make sure the estate behind it is ready.",
  primaryCta: { label: "Book a DSPT readiness check", href: "/contact" },
  secondaryCta: { label: "Talk to us first", href: "/contact" },
  stats: [
    { big: "1×/yr", small: "Mandatory DSPT submission for NHS-data handlers" },
    { big: "10", small: "National Data Guardian standards aligned" },
    { big: "DTAC", small: "Procurement gate — technical-security ready" },
    { big: "365", small: "Days a year the evidence is already captured" },
  ],
  whySection: {
    eyebrow: "Why healthcare IT is different",
    heading: "It isn't enough to have controls. You have to show them — every year.",
    body:
      "Patient data is the most sensitive data there is, and the rules reflect it. You have to prove your controls to keep handling NHS data and to keep winning NHS work. Most providers treat this as an annual project. We treat it as the everyday state of a well-run estate, so the paperwork is already true when the toolkit opens.",
    points: [
      {
        title: "DSPT (Data Security & Protection Toolkit).",
        body: "The mandatory annual submission, aligned to the National Data Guardian's standards. We run and evidence the IT-security controls it assesses. You own the submission; we own the estate behind it.",
      },
      {
        title: "DTAC — technical-security section.",
        body: "The NHS procurement entry point. We prepare and evidence the technical-security and data-protection elements you're scored on. The clinical-safety and usability sections stay with your team.",
      },
      {
        title: "Cyber Essentials / CE Plus.",
        body: "Increasingly expected of NHS suppliers. We ready the estate and manage you to the assessment.",
      },
      {
        title: "Independent penetration testing.",
        body: "Coordinated and evidenced within the 12-month window NHS buyers expect.",
      },
    ],
  },
  process: {
    eyebrow: "How we handle it — controls + evidence, every month",
    heading: "Our standard evidence engine, pointed at the NHS standards.",
    steps: [
      {
        index: "01",
        label: "Access",
        title: "Access under control",
        body: "MFA everywhere, least-privilege, same-day joiner/mover/leaver, session-logged privileged access.",
      },
      {
        index: "02",
        label: "Harden",
        title: "Patched & hardened",
        body: "Documented baselines, patch compliance you can prove, endpoint protection centrally monitored.",
      },
      {
        index: "03",
        label: "Protect",
        title: "Data recoverable",
        body: "Encryption in place, backups tested and logged, DR you've actually rehearsed.",
      },
      {
        index: "04",
        label: "Evidence",
        title: "Already captured",
        body: "Access records, patch reports, backup-test logs and change history — the exact pack the toolkit asks for.",
      },
      {
        index: "05",
        label: "GDPR",
        title: "Data-protection ops",
        body: "DPAs, data mapping, access and retention evidence — run as a discipline, not a policy PDF.",
      },
    ],
  },
  standard: {
    eyebrow: "We hold ourselves to the standard we sell",
    heading: "The estate we make ready first is our own.",
    points: selfStandard,
  },
  ownership: {
    eyebrow: "What we own — and what stays with you",
    heading: "We're your IT partner, not your clinical-safety officer.",
    rows: [
      { we: "The IT-estate controls, hardening and monitoring", you: "Your DSPT submission and its sign-off" },
      { we: "Continuous security evidence and audit trail", you: "Clinical safety (DCB0129 / DCB0160) & your Clinical Safety Officer" },
      { we: "DTAC technical-security & data-protection prep", you: "Caldicott principles and your Caldicott Guardian" },
      { we: "Cyber Essentials / pen-test readiness", you: "ICO registration and clinical governance" },
    ],
    closing: "We make the IT estate audit-ready with the evidence in place. We don't do the DSPT for you — we make it a formality.",
  },
  cta: {
    eyebrow: "DSPT readiness check",
    heading: "Is your IT estate DSPT-ready today?",
    body:
      "Book a readiness check. We'll show you where your controls and evidence stand against the toolkit — and exactly what a submission would look like right now.",
    button: "Book a DSPT readiness check",
  },
  footnote:
    "Compliance-driven managed IT & security for healthcare & NHS suppliers. We support your DSPT, DTAC and clinical-governance obligations with evidence; the submission and clinical sign-off remain yours. Who we serve · Always Audit-Ready.",
};

export const nisEssentialServices: EvidencePageData = {
  slug: "nis-essential-services",
  path: "/compliance/nis-essential-services",
  breadcrumbLabel: "NIS / Essential Services",
  seo: {
    title: "NIS & Essential Services Readiness | Infodot",
    description:
      "Managed IT and security for operators of essential services. Appropriate security measures, continuous evidence and incident reporting inside the clock — mapped forward to the CSR Bill.",
    keywords: "NIS Regulations, operators of essential services, significant incident reporting, competent authority, CSR Bill",
    canonical: "https://infodot.co.uk/compliance/nis-essential-services",
  },
  eyebrow: "Compliance · NIS & Essential Services",
  headline: "Essential services can't afford an evidence gap.",
  lead:
    "If you operate in energy, water, health, transport or digital infrastructure, the NIS Regulations already hold you to appropriate security measures and incident reporting — and the incoming Cyber Security & Resilience Bill raises the bar again. We run the network and information systems underneath those obligations with the evidence captured continuously, so an inspection or an incident finds you ready. We don't file your regulatory return — we make sure the estate behind it stands up.",
  primaryCta: { label: "Book a NIS readiness assessment", href: "/contact" },
  secondaryCta: { label: "Talk to us first", href: "/contact" },
  stats: [
    { big: "5", small: "Essential-service sectors in scope of NIS" },
    { big: "24/7", small: "Monitoring so incidents are caught, not reconstructed" },
    { big: "£17m", small: "Maximum penalty under the regime" },
    { big: "CSR", small: "Future-proofed into the incoming Bill" },
  ],
  whySection: {
    eyebrow: "What the rules ask of you",
    heading: "Appropriate security measures — and significant-incident reporting on the clock.",
    body:
      "The NIS Regulations apply to Operators of Essential Services and to relevant digital service providers. Two duties sit at the core: take appropriate, proportionate security measures for your network and information systems, and report significant incidents to your competent authority within tight timelines. The CSR Bill modernises and widens this regime, adds managed service providers, and tightens reporting further.",
    points: [
      {
        title: "Appropriate security measures — and the proof.",
        body: "Risk-based controls across your network and information systems, documented and evidenced, so \u201cappropriate\u201d is demonstrable rather than asserted.",
      },
      {
        title: "Incident detection and reporting capability.",
        body: "Monitoring tuned so a significant incident is caught and can be reported inside the clock — not reconstructed weeks later.",
      },
      {
        title: "Supply-chain and third-party evidence.",
        body: "The assurance your competent authority and your own customers increasingly ask for.",
      },
      {
        title: "CSR-Bill future-proofing.",
        body: "Everything we build maps forward to the Bill's expanded obligations, so tightening rules mean an update, not a rebuild.",
      },
    ],
  },
  process: {
    eyebrow: "How we handle it — controls + evidence, every month",
    heading: "Our evidence engine, applied to essential-services systems.",
    steps: [
      {
        index: "01",
        label: "Access",
        title: "Access under control",
        body: "MFA everywhere, least-privilege, session-logged privileged access across operational and corporate systems.",
      },
      {
        index: "02",
        label: "Harden",
        title: "Risk-based controls",
        body: "Documented baselines and patch compliance across the network and information systems in scope.",
      },
      {
        index: "03",
        label: "Detect",
        title: "24/7 monitoring",
        body: "Tuned so a significant incident is caught in time to be reported, not reconstructed weeks later.",
      },
      {
        index: "04",
        label: "Evidence",
        title: "Captured continuously",
        body: "Logs, change history, access records and test results — the trail an inspection asks to see.",
      },
      {
        index: "05",
        label: "Recover",
        title: "Resilience rehearsed",
        body: "Backup, recovery and continuity of the estate, tested and evidenced rather than assumed.",
      },
    ],
  },
  standard: {
    eyebrow: "Today's regime, tomorrow's Bill",
    heading: "NIS is what applies now. The Resilience Bill is what's next. We cover both.",
    points: [
      {
        title: "One evidence engine, both regimes",
        body: "Everything we run for NIS maps forward to the CSR Bill — no rebuild when the rules tighten.",
      },
      {
        title: "Notification-ready",
        body: "Detection and evidence built so a significant incident can be reported inside the clock.",
      },
      {
        title: "Supplier assurance included",
        body: "The third-party evidence your competent authority and customers ask for.",
      },
      {
        title: "We hold ourselves to it too",
        body: "Our own estate runs on the same monitoring and evidence discipline we deploy for you.",
      },
    ],
  },
  ownership: {
    eyebrow: "What we own — and what stays with you",
    heading: "We secure the systems. You hold the regulatory relationship.",
    rows: [
      { we: "The security of your network and information systems", you: "Your registration and relationship with the competent authority" },
      { we: "Continuous evidence, monitoring and audit trail", you: "The formal incident report / regulatory return" },
      { we: "Detection and notification-to-you inside the clock", you: "Board-level accountability for compliance" },
      { we: "Resilience and recovery of the estate", you: "The \u201csignificant incident\u201d determination (made together)" },
    ],
    closing: "We make the estate audit-ready with the evidence in place. We don't file your return — we make the inspection a formality.",
  },
  cta: {
    eyebrow: "NIS readiness assessment",
    heading: "Would an inspection find your evidence ready?",
    body: "Book a readiness assessment. We'll map your controls and evidence against your obligations — and against where the CSR Bill is heading.",
    button: "Book a NIS readiness assessment",
  },
  footnote:
    "Compliance-driven managed IT & security for operators of essential services. We keep your network and information systems audit-ready with evidence; the regulatory return and competent-authority relationship remain yours. Always Audit-Ready.",
};

export const sectorChips = ["Energy", "Water", "Health", "Transport", "Digital infrastructure"];
