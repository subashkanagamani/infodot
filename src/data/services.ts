export interface ServiceItem {
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  benefits: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}

export const servicesData: ServiceItem[] = [
  {
    slug: "managed-it",
    icon: "Target",
    title: "Fully Managed IT",
    shortDescription:
      "One team runs your whole IT stack — helpdesk, M365/Workspace, devices and licences — so nothing falls through the cracks.",
    description:
      "Named engineers, a 30-minute first response and one tracked channel take the day-to-day off your plate. We run RMM and patch management around the clock across Windows and Mac, manage your Microsoft 365 or Google Workspace tenant end to end, and handle the full device lifecycle from enrolment and encryption to remote wipe and refresh. Joiners, movers and leavers are handled cleanly and on time, and we keep a live register of assets, licences, subscriptions, domains and renewals — so your IT estate is never a mystery.",
    features: [
      "Helpdesk with named engineers & 30-min first response",
      "24/7 RMM & patch management (Windows and Mac)",
      "Microsoft 365 & Google Workspace administration",
      "Device lifecycle & Joiners/Movers/Leavers (JML)",
      "Asset, licence, subscription & domain register",
    ],
    benefits: [
      "One accountable team instead of ping-ponging between vendors",
      "Predictable response times and a single tracked channel",
      "Devices, tenants and licences kept current automatically",
      "Clean joiner/leaver process reduces security and access risk",
    ],
    metaTitle: "Managed IT & Helpdesk Support | Infodot",
    metaDescription:
      "Infodot runs your helpdesk, Microsoft 365/Google Workspace, device lifecycle and IT asset management — delivered remotely from an ISO 27001-certified team.",
    keywords:
      "managed IT, IT helpdesk, IT operations, Microsoft 365 management, device lifecycle, JML, IT asset management",
  },
  {
    slug: "secure-by-default",
    icon: "Megaphone",
    title: "Secure by Default",
    shortDescription:
      "MFA, EDR, hardening and email security — standard from day one, not a premium add-on.",
    description:
      "Security is the gap clients name most, so we close it by default. Managed EDR gives you engineers who contain threats, not just alert on them. IT hardening applies MFA, conditional access, CIS baselines and encryption across your estate. Email security stops phishing before it lands with SPF/DKIM/DMARC, safe-link and attachment scanning, and identity & access management enforces MFA everywhere with role-based and privileged access control.",
    features: [
      "Managed EDR with active containment, not just alerts",
      "IT hardening: MFA, conditional access, CIS baselines, encryption",
      "Email security: anti-phishing, SPF/DKIM/DMARC, safe links",
      "Identity & access: MFA everywhere, role-based & privileged access",
    ],
    benefits: [
      "Coalition data shows 82% of denied cyber claims lacked full MFA — we make sure yours doesn't",
      "Security built in from the outset, not bolted on later",
      "Reduced attack surface across endpoints, email and identity",
      "Consistent baseline across every device and user",
    ],
    metaTitle: "Secure by Default IT Security | Infodot",
    metaDescription:
      "Managed EDR, IT hardening, email security and identity & access management, run as standard by Infodot — a managed IT provider for regulated industries.",
    keywords:
      "managed EDR, IT hardening, email security, identity and access management, MFA, conditional access",
  },
  {
    slug: "backup-disaster-recovery",
    icon: "LineChart",
    title: "Backup & Disaster Recovery",
    shortDescription:
      "Get your files back. Get your business back.",
    description:
      "Monitored, tested backups plus a real disaster-recovery plan — so you can recover a deleted file or a whole business after ransomware or outage. Backup answers 'can I get my file back'; DR answers 'can I get my business back'. Untested backups fail exactly when you need them, so we test restores monthly and prove recovery — which is precisely what insurers now require.",
    features: [
      "Backups monitored daily",
      "Monthly restore testing — proof, not hope",
      "Immutable copies where supported",
      "Documented DR plan with agreed RTO/RPO",
      "Ransomware-resilient design",
      "Recovery evidence for auditors and insurers",
    ],
    benefits: [
      "Confidence that backups will actually restore when needed",
      "Clear recovery targets agreed in advance, not discovered mid-incident",
      "Immutability protects against ransomware and deletion",
      "A tested-backup control that insurers and auditors ask about",
    ],
    metaTitle: "Backup & Disaster Recovery Services | Infodot",
    metaDescription:
      "Monitored, restore-tested, immutable backups and a tested DR plan (RTO/RPO) from Infodot, run remotely for regulated businesses.",
    keywords:
      "backup and disaster recovery, immutable backup, restore testing, RTO RPO, business continuity",
  },
  {
    slug: "always-audit-ready",
    icon: "TrendingUp",
    title: "Always Audit-Ready",
    shortDescription:
      "Continuous controls and evidence, so audits and renewals never mean a scramble.",
    description:
      "The controls we run produce the evidence auditors, insurers and boards ask for — packaged monthly and kept current, not assembled the week before an audit. We run continuous controls and evidence collection with drift alerting, prepare ISO 27001 and SOC 2 evidence (certification delivered via accredited partners), and handle the operational side of GDPR — DPA, sub-processor register, DSAR and breach process — so compliance is a by-product of how we run IT, not a separate project.",
    features: [
      "Continuous controls monitoring with drift alerting",
      "Monthly evidence packs, always current",
      "ISO 27001 / SOC 2 evidence (certification via accredited partners)",
      "GDPR operations: DPA, sub-processor register, DSAR, breach process",
    ],
    benefits: [
      "No pre-audit scramble — evidence is ready every month",
      "Readiness handled in-house; certification via accredited bodies",
      "Reduces risk of drift between what's attested and what's running",
      "Gives boards and clients confidence in your compliance posture",
    ],
    metaTitle: "Always Audit-Ready: Continuous Compliance Evidence | Infodot",
    metaDescription:
      "Infodot keeps continuous controls and evidence for ISO 27001, SOC 2 and GDPR — so accountancy, legal and financial services firms are always audit-ready.",
    keywords:
      "continuous compliance, ISO 27001 evidence, SOC 2 evidence, GDPR compliance, audit ready, controls monitoring",
  },
  {
    slug: "cyber-essentials-readiness",
    icon: "Users",
    title: "Cyber Essentials Readiness",
    shortDescription:
      "Ready for Cyber Essentials. Every year.",
    description:
      "Cyber Essentials is the UK government-backed baseline that clients, insurers and public-sector buyers increasingly ask for. Basic certification is a self-assessment a director signs and an independent assessor marks; Cyber Essentials Plus adds a hands-on technical audit. We run the controls as part of managing your IT, so the evidence exists before the questionnaire does — then we arrange the assessment and stay with you through it.",
    features: [
      "Gap assessment against the five controls",
      "MFA on every cloud service",
      "Patching inside 14 days",
      "Scope set properly",
      "Evidence and draft answers",
      "Assessment arranged, controls kept running",
    ],
    benefits: [
      "Answer the tender or client question with a certificate, not a promise",
      "No surprises from the stricter 2026 rules",
      "Controls lived day to day, not staged for assessment day",
      "A foundation for cyber insurance, ISO 27001 and client due diligence",
    ],
    metaTitle: "Cyber Essentials Readiness & Certification Support | Infodot",
    metaDescription:
      "We make UK firms audit-ready for Cyber Essentials and Cyber Essentials Plus: controls in place, evidence ready, kept current all year. Book a free assessment.",
    keywords:
      "cyber essentials certification / cyber essentials plus, cyber essentials readiness, cyber essentials 2026 changes, v3.3",
  },
  {
    slug: "cyber-insurance-readiness",
    icon: "Palette",
    title: "Cyber Insurance Readiness",
    shortDescription:
      "Insurers don't just want the controls. They want proof they stayed on.",
    description:
      "Cyber cover is now underwritten on controls you attest to and must maintain continuously. We keep those controls enforced and evidenced through the year, so when a claim is investigated your answers were true and provable. Claims are disputed on misrepresentation, failure to maintain a stated control, or late notice — and the gap needn't have caused the incident. The fix: controls kept true, evidence kept current, drift caught early — via Assess → Remediate → Validate → Monitor. Honest scope: we make controls true and provable so a claim is less likely to be disputed — we don't advise on your policy or promise a payout. Your broker advises; you attest; we supply and maintain the evidence.",
    features: [
      "MFA enforced on every user and remote path, monitored",
      "EDR on every endpoint, agent-health checked",
      "Tested, immutable backups with monthly restore evidence",
      "Critical patching inside the window, evidenced",
      "Documented incident-response and notification process",
      "Drift alerting when a control slips",
      "Renewal-ready evidence pack",
    ],
    benefits: [
      "Most denied claims involve incomplete MFA — closing that gap protects your cover",
      "Only about 1 in 4 cyber claims pay out — accurate, provable attestations matter",
      "Reduces the risk of a disputed claim over a control gap",
      "Confidence at renewal time instead of a last-minute scramble",
    ],
    metaTitle: "Cyber Insurance Readiness Services | Infodot",
    metaDescription:
      "Infodot keeps the controls cyber insurers require — MFA, EDR, backups, patching — enforced and evidenced year-round, so renewal answers stay true.",
    keywords:
      "cyber insurance readiness, cyber insurance renewal, insurer questionnaire, MFA, EDR, cyber cover",
  },
  {
    slug: "it-transition-exit",
    icon: "FileText",
    title: "IT Transition & Exit",
    shortDescription:
      "A clean switch from your incumbent provider, with discovery, migration and a full exit pack.",
    description:
      "Switching IT provider shouldn't mean lost knowledge or a rocky handover. We run a structured Discovery / Phase 0 to map your assets, complete reverse knowledge transfer and document everything, then manage email migration (tenant-to-tenant, or Exchange/Google to Microsoft 365) and domain migration cleanly into your control — all fixed-fee, with no data lost.",
    features: [
      "Discovery / Phase 0: asset discovery, reverse-KT, documentation",
      "Email migration: tenant-to-tenant or to Microsoft 365, fixed-fee",
      "Domain & DNS migration into your control",
      "Environment hardened during handover",
      "Your tenancy, domain and licences stay in your name",
      "A 10-working-day exit-pack promise, with reverse knowledge transfer",
    ],
    benefits: [
      "No knowledge lost in the switch from your current provider",
      "Fixed-fee migrations with no data loss",
      "Domain and DNS moved cleanly into your own control",
      "You stay because the service is good, not because leaving hurts",
    ],
    metaTitle: "IT Transition, Exit & Migration Services | Infodot",
    metaDescription:
      "Infodot manages IT provider transitions, Phase 0 discovery, and email and domain migration — a clean, fixed-fee switch with no data lost.",
    keywords:
      "IT transition, IT provider switch, phase 0 discovery, email migration, domain migration, reverse knowledge transfer",
  },
  {
    slug: "co-managed-it",
    icon: "Share2",
    title: "Co-Managed IT",
    shortDescription:
      "We run the security and operations layer alongside your in-house team, with a clear who-owns-what matrix.",
    description:
      "Co-Managed IT is the front door for teams who already have IT staff but need the specialist layer they can't build alone — secure-by-default operations, patching discipline and audit evidence. We run that layer alongside your in-house team, with a clear who-owns-what matrix from day one, using your tools or ours. It's designed to land quickly and expand into a fully managed engagement whenever you're ready.",
    features: [
      "Runs alongside your existing in-house IT team",
      "Clear who-owns-what responsibility matrix",
      "Works with your existing tools, or ours",
      "Scales into fully managed IT when you're ready",
    ],
    benefits: [
      "Adds specialist security and compliance capability without replacing your team",
      "No rip-and-replace of tools you've already invested in",
      "Clear boundaries avoid duplicated effort or gaps",
      "A low-risk way to start working with Infodot",
    ],
    metaTitle: "Co-Managed IT Services | Infodot",
    metaDescription:
      "Infodot runs the security and operations layer alongside your in-house IT team, with a clear ownership matrix — your tools or ours.",
    keywords:
      "co-managed IT, IT support for in-house teams, shared IT support, managed security services",
  },
  {
    slug: "asset-licence-domain",
    icon: "Boxes",
    title: "Asset, Licence & Domain Management",
    shortDescription: "Know exactly what you own, and when it renews.",
    description:
      "A live register of every device, software licence, subscription, domain and DNS record — with renewals visible so nothing lapses by surprise. You can't secure or budget what you can't see. An accurate register underpins licence compliance, renewals, audit readiness and clean onboarding — and it's the first thing an auditor or acquirer asks for.",
    features: [
      "Complete asset register with specs and ownership",
      "Software licence and subscription mapping",
      "Shadow-IT detection",
      "Domain and DNS ownership and renewal tracking",
      "Cost and compliance visibility",
      "Kept current continuously",
    ],
    benefits: [
      "No surprise lapses on licences, domains or certificates",
      "Clear cost visibility across software and subscriptions",
      "Shadow IT surfaced before it becomes a risk",
      "Audit and due-diligence questions answered from one register",
    ],
    metaTitle: "IT Asset, Licence & Domain Management | Infodot",
    metaDescription:
      "A live register of every device, licence, subscription, domain and DNS record — renewals tracked and shadow IT surfaced. Infodot, ISO 27001:2022 certified.",
    keywords:
      "IT asset management, software licence management, domain and DNS management, renewal tracking, shadow IT",
  },
  {
    slug: "cloud-management",
    icon: "Cloud",
    title: "Cloud Management",
    shortDescription: "Your cloud, run well and kept secure.",
    description:
      "Operation and hardening of your cloud environments — Microsoft 365, Azure and AWS — with cost, security and configuration kept under control. Cloud is easy to start and easy to sprawl, in cost and in risk. We keep it configured, secured and accountable, so it stays an asset rather than a surprise bill or an open door.",
    features: [
      "Tenant and subscription administration",
      "Identity and access control",
      "Security baselines and hardening",
      "Cost visibility and right-sizing",
      "Backup and resilience configuration",
      "Monitoring and alerting",
    ],
    benefits: [
      "Cloud spend stays predictable instead of drifting upward",
      "Consistent security baselines across every environment",
      "Configuration and access stay accountable and documented",
      "Issues surfaced by monitoring, not by users",
    ],
    metaTitle: "Cloud Management: Microsoft 365, Azure & AWS | Infodot",
    metaDescription:
      "Infodot operates and hardens your Microsoft 365, Azure and AWS environments — identity, baselines, cost control, backup and monitoring.",
    keywords:
      "cloud management, Microsoft 365 management, Azure management, AWS management, cloud cost optimisation, cloud security baselines",
  },
  {
    slug: "helpdesk-it-operations",
    icon: "Headset",
    title: "Helpdesk & IT Operations",
    shortDescription: "One number for everything IT. Answered by people who know you.",
    description:
      "A single tracked channel for every request and incident — ticketed, owned, and driven to resolution against agreed response times, by named engineers who know your environment. Most IT frustration isn't the fault itself — it's the chase. We remove the chase: one accountable team, one clear record of what was asked and done, and requests often closed before your next morning.",
    features: [
      "Named engineers, not a rotating pool",
      "30-minute first response in business hours",
      "One channel — portal, email or phone",
      "Full ticket tracking and history",
      "Proactive follow-through to resolution",
      "Monthly service reporting",
    ],
    benefits: [
      "No chasing — one accountable team owns the outcome",
      "Predictable response times your people can plan around",
      "A clear record of what was asked and what was done",
      "Monthly reporting shows where time actually goes",
    ],
    metaTitle: "IT Helpdesk & IT Operations Support | Infodot",
    metaDescription:
      "One tracked channel for every IT request, named engineers and a 30-minute first response in business hours — Infodot helpdesk for regulated firms.",
    keywords:
      "IT helpdesk, IT support desk, managed IT operations, named engineers, ticketing, service reporting",
  },
  {
    slug: "device-lifecycle",
    icon: "Laptop",
    title: "Device Lifecycle Management",
    shortDescription: "From unboxing to wipe — the whole device life, managed.",
    description:
      "Endpoint management across the full lifecycle — enrolment, configuration, encryption, compliance and secure retirement — for every managed device. Devices are where your people meet your data. Managing them properly — encrypted, compliant, recoverable — closes the gap that lost or stolen laptops otherwise open.",
    features: [
      "Automated enrolment and configuration",
      "Disk encryption and compliance baselines",
      "Remote lock and wipe",
      "Software deployment and updates",
      "Joiner/leaver device provisioning and recovery",
      "Refresh and warranty tracking",
    ],
    benefits: [
      "Lost or stolen devices stop being a data breach",
      "Every endpoint holds the same secure baseline",
      "New starters are productive on day one",
      "Refresh and warranty planned, not reactive",
    ],
    metaTitle: "Device Lifecycle & Endpoint Management | Infodot",
    metaDescription:
      "Enrolment, encryption, compliance baselines, remote wipe and secure retirement for every managed device — endpoint lifecycle management from Infodot.",
    keywords:
      "device lifecycle management, endpoint management, Intune, disk encryption, remote wipe, device refresh",
  },
  {
    slug: "email-security",
    icon: "Mail",
    title: "Email Security",
    shortDescription: "Stop the phish before it reaches the inbox.",
    description:
      "Layered email protection — anti-phishing, anti-spam, authentication and safe-content controls — because email is still how most attacks arrive. Email is the number-one entry point for attacks on small firms. Getting authentication and filtering right stops the majority before a human ever has to make the wrong click.",
    features: [
      "Anti-phishing and anti-spam policies",
      "SPF/DKIM/DMARC enforcement",
      "Safe-link and safe-attachment protection",
      "Impersonation and spoofing controls",
      "Quarantine and reporting",
      "User-report handling",
    ],
    benefits: [
      "Most attacks stop before anyone has to judge them",
      "Your domain can't be casually spoofed",
      "Malicious links and attachments checked at click time",
      "Reported messages get handled, not ignored",
    ],
    metaTitle: "Managed Email Security & Anti-Phishing | Infodot",
    metaDescription:
      "Anti-phishing, SPF/DKIM/DMARC enforcement, safe links and impersonation controls — managed email security from Infodot for regulated firms.",
    keywords:
      "email security, anti-phishing, SPF DKIM DMARC, safe links, spoofing protection, Microsoft 365 email security",
  },
  {
    slug: "identity-access",
    icon: "KeyRound",
    title: "Identity & Access Management",
    shortDescription: "The right people in. Everyone else out. Provably.",
    description:
      "Identity and access management built on MFA everywhere, least-privilege roles and controlled privileged access — the control that underpins everything else. Identity is the new perimeter — and the control insurers deny claims over when it's incomplete. We enforce MFA everywhere with no exception paths, keep access least-privilege, and evidence it.",
    features: [
      "MFA on every account and remote path",
      "Role-based access control",
      "Privileged access management with session logging",
      "Conditional access policies",
      "Access reviews and evidence",
      "Joiner/leaver access lifecycle",
    ],
    benefits: [
      "No MFA exception paths for an attacker to find",
      "Least-privilege access limits the blast radius",
      "Privileged sessions are logged and reviewable",
      "Access reviews produce evidence insurers accept",
    ],
    metaTitle: "Identity & Access Management (MFA, PAM) | Infodot",
    metaDescription:
      "MFA everywhere, role-based access, conditional access and privileged access management with evidence — identity and access management from Infodot.",
    keywords:
      "identity and access management, MFA, conditional access, privileged access management, access reviews, least privilege",
  },
  {
    slug: "gdpr-data-protection",
    icon: "Scale",
    title: "GDPR & Data Protection Operations",
    shortDescription: "GDPR handled as an operating discipline, not a policy PDF.",
    description:
      "The day-to-day operation of data protection — the agreement, the register, the requests and the breach process — kept current, not filed and forgotten. GDPR isn't a document you write once; it's a set of things you must actually do, on time, provably. We operate those so you can answer a regulator, client or DSAR with evidence, not improvisation.",
    features: [
      "Data processing agreement and transfer mechanism",
      "Current sub-processor register",
      "Data-subject-request (DSAR) support",
      "Breach-detection and notification process",
      "Retention and minimisation",
      "Access logging",
    ],
    benefits: [
      "DSARs answered within the statutory window",
      "A sub-processor register that's actually current",
      "A breach process rehearsed before you need it",
      "Regulator and client questions answered with evidence",
    ],
    metaTitle: "UK GDPR & Data Protection Operations | Infodot",
    metaDescription:
      "DPAs, sub-processor registers, DSAR support, breach notification and retention run as ongoing operations — UK GDPR data protection support from Infodot.",
    keywords:
      "UK GDPR, data protection operations, DSAR, data processing agreement, sub-processor register, breach notification",
  },
  {
    slug: "fca-operational-resilience",
    icon: "ClipboardCheck",
    title: "FCA Operational Resilience & Third-Party Rules",
    shortDescription:
      "For the FCA's new third-party rules — be the supplier that's ready.",
    description:
      "Support for financial firms preparing for the FCA's operational-resilience and third-party reporting rules — mapping, evidence and exit planning for the services we provide you. Under the FCA's new rules, you must map, assess and report material third parties — and as your IT provider, we're one of them. We give you the due-diligence evidence and exit assurance that satisfy the questionnaire rather than stall it. Not legal advice: we support your operational-resilience compliance and give you the evidence a questionnaire asks for — we don't replace your compliance function or legal counsel.",
    features: [
      "Third-party arrangement documentation",
      "Incident-reporting readiness",
      "Impact-tolerance and continuity support",
      "A documented exit plan and evidence",
      "Audit rights and a due-diligence pack",
      "Our own resilience posture, evidenced",
    ],
    benefits: [
      "Third-party questionnaires answered, not stalled",
      "Exit assurance documented before anyone asks",
      "Incident reporting rehearsed against the timelines",
      "Your provider's resilience posture already evidenced",
    ],
    metaTitle: "FCA Operational Resilience & Third-Party Support | Infodot",
    metaDescription:
      "Third-party mapping, due-diligence packs, incident-reporting readiness and documented exit plans for FCA operational resilience — support from Infodot.",
    keywords:
      "FCA operational resilience, critical third parties, third-party reporting, exit plan, due diligence pack, impact tolerance",
  },
  {
    slug: "discovery-phase0",
    icon: "Search",
    title: "Discovery & Phase 0",
    shortDescription: "Know exactly what you've got before anyone touches it.",
    description:
      "A one-time discovery, knowledge transfer and documentation phase that establishes a complete, accurate picture of your environment and brings it cleanly under your control. You can't run — or secure — what isn't documented. Phase 0 gives you and us an accurate map, surfaces the risks hiding in the environment, and sets up everything that follows. It's often the first, low-commitment step.",
    features: [
      "Agent-based asset and security discovery",
      "Structured handover from your current provider",
      "Complete asset and licence register",
      "Domain, DNS and access inventory",
      "Security-gap findings",
      "Fixed fee by size",
    ],
    benefits: [
      "A low-commitment way to start working with us",
      "Hidden risks surfaced before they bite",
      "Ownership of domains, licences and access confirmed",
      "Everything that follows is planned on facts",
    ],
    metaTitle: "IT Discovery & Phase 0 Documentation | Infodot",
    metaDescription:
      "Agent-based discovery, provider handover, asset and licence registers and security-gap findings on a fixed fee — Phase 0 discovery from Infodot.",
    keywords:
      "IT discovery, phase 0, IT documentation, asset register, knowledge transfer, MSP handover",
  },
  {
    slug: "email-migration",
    icon: "ArrowRightLeft",
    title: "Email Migration",
    shortDescription: "Move email without losing a message.",
    description:
      "Planned, fixed-fee email migration — tenant-to-tenant, Exchange to Microsoft 365, or between Microsoft 365 and Google Workspace — executed with no data lost and minimal disruption. Email migrations go wrong when they're rushed or unplanned: lost mail, broken flow, downtime. We plan the cutover properly so the move is boring, which is exactly what you want from an email migration.",
    features: [
      "Migration planning and mailbox mapping",
      "Tenant-to-tenant (M&A) moves",
      "Exchange or Google to Microsoft 365",
      "Co-existence during cutover",
      "Mail-flow and DNS handling",
      "Fixed fee by mailbox count",
    ],
    benefits: [
      "No lost mail and no surprise downtime",
      "Costs known up front, priced by mailbox",
      "Co-existence keeps people working through cutover",
      "Authentication and mail flow stay intact",
    ],
    metaTitle: "Email Migration to Microsoft 365 | Infodot",
    metaDescription:
      "Fixed-fee tenant-to-tenant, Exchange and Google Workspace email migrations with co-existence and mail-flow planning — email migration from Infodot.",
    keywords:
      "email migration, tenant to tenant migration, Exchange to Microsoft 365, Google Workspace migration, mailbox migration",
  },
  {
    slug: "domain-migration",
    icon: "Globe",
    title: "Domain & DNS Migration",
    shortDescription: "Take back control of your domain — cleanly.",
    description:
      "A one-time project to move your domain and DNS into your own control, correctly configured, distinct from the ongoing domain management we provide thereafter. Your domain is the root of your identity and email — mishandled, it takes both down. We move it carefully, keep authentication intact, and put ownership firmly in your name.",
    features: [
      "Domain transfer into your ownership",
      "DNS records audited and migrated",
      "Mail authentication (SPF/DKIM/DMARC) preserved",
      "Zero-downtime cutover planning",
      "Documentation of every record",
      "Handover into ongoing management",
    ],
    benefits: [
      "Your domain is registered in your name, not ours",
      "Email keeps flowing and stays authenticated",
      "Every DNS record documented, not guessed",
      "A clean handover into ongoing management",
    ],
    metaTitle: "Domain & DNS Migration Services | Infodot",
    metaDescription:
      "Move your domain and DNS into your own ownership with SPF/DKIM/DMARC preserved and zero-downtime cutover planning — domain migration from Infodot.",
    keywords:
      "domain migration, DNS migration, domain transfer, SPF DKIM DMARC, zero downtime cutover, domain ownership",
  },
  {
    slug: "managed-edr",
    icon: "ShieldAlert",
    title: "Managed EDR",
    shortDescription: "Detection and response — with people who act, not just alert.",
    description:
      "Endpoint detection and response across every device, with our team triaging, isolating and remediating threats — not just forwarding you an alert. Antivirus tells you something happened; EDR lets someone stop it. The value isn't the tool — it's the team behind it acting fast, and the evidence that every endpoint is actually covered, which is the gap insurers check.",
    features: [
      "EDR on every managed endpoint",
      "24/7 threat detection",
      "Engineer triage and investigation",
      "Automated isolation of compromised devices",
      "Remediation and root-cause analysis",
      "Agent-health monitoring so coverage doesn't slip",
    ],
    benefits: [
      "Threats contained by people, not just flagged",
      "Compromised devices isolated automatically",
      "Root cause found so the same gap doesn't reopen",
      "Coverage evidenced for insurers and auditors",
    ],
    metaTitle: "Managed EDR & 24/7 Threat Response | Infodot",
    metaDescription:
      "EDR on every endpoint with engineer triage, automated isolation, remediation and agent-health monitoring — managed detection and response from Infodot.",
    keywords:
      "managed EDR, endpoint detection and response, MDR, threat containment, 24/7 detection, endpoint security",
  },
  {
    slug: "it-hardening",
    icon: "ShieldCheck",
    title: "IT Hardening",
    shortDescription: "Close the doors before anyone tries them.",
    description:
      "Security baselines applied to devices and email that shrink your attack surface — the configuration that stops the most common ways firms get breached. Most breaches exploit weak configuration, not clever attacks. Hardening removes the easy paths in — and it's the foundation every compliance framework and insurer questionnaire starts from.",
    features: [
      "MFA and conditional access",
      "Disk encryption",
      "CIS-aligned device baselines",
      "Email authentication (SPF/DKIM/DMARC)",
      "Safe-link and safe-attachment protection",
      "Secure defaults enforced, not assumed",
    ],
    benefits: [
      "The easy paths in are closed by configuration",
      "A consistent baseline on every device",
      "The foundation compliance frameworks start from",
      "Insurer questionnaires answered from real settings",
    ],
    metaTitle: "IT Hardening & Security Baselines | Infodot",
    metaDescription:
      "MFA, conditional access, encryption, CIS-aligned device baselines and email authentication enforced as standard — IT hardening from Infodot.",
    keywords:
      "IT hardening, CIS baselines, security configuration, conditional access, disk encryption, secure defaults",
  },
  {
    slug: "microsoft365-google-workspace",
    icon: "Server",
    title: "Microsoft 365 & Google Workspace Management",
    shortDescription: "Your whole productivity platform — run and secured.",
    description:
      "Full administration of your Microsoft 365 or Google Workspace tenant — email, files, identity, collaboration and licensing — operated inside your own environment. The tenant is where your identity, data and collaboration all live, so it's where good administration matters most. We run it end to end and keep it secure by default, always inside your ownership.",
    features: [
      "Mailboxes, shared mailboxes, groups and lists",
      "OneDrive/SharePoint or Drive, with secure sharing",
      "Identity, MFA and conditional access",
      "Licence management and right-sizing",
      "Mail-flow health and deliverability",
      "Tenant security baselines",
    ],
    benefits: [
      "One team owns the tenant end to end",
      "Licences right-sized instead of quietly stacking up",
      "Sharing stays secure without blocking collaboration",
      "The tenancy stays in your ownership throughout",
    ],
    metaTitle: "Microsoft 365 & Google Workspace Management | Infodot",
    metaDescription:
      "Full tenant administration for Microsoft 365 and Google Workspace — email, files, identity, licensing and security baselines, run by Infodot inside your own tenancy.",
    keywords:
      "Microsoft 365 management, Google Workspace management, tenant administration, SharePoint, Entra identity, licence management",
  },
  {
    slug: "iso27001-soc2-evidence",
    icon: "Award",
    title: "ISO 27001 & SOC 2 Evidence",
    shortDescription: "Make the audit a formality.",
    description:
      "Continuous control operation and evidence collection so your ISO 27001 or SOC 2 audit is a confirmation, not a fire drill — with certification through an accredited body. Auditors don't fail you for lacking controls — they fail you for not evidencing them consistently. We keep the evidence flowing so the audit confirms what's already true. Certification itself is issued by an accredited body, as it must be — we don't self-certify.",
    features: [
      "Control mapping to the standard",
      "Continuous evidence collection",
      "Policy and process support",
      "Gap remediation",
      "Audit preparation",
      "Certification/attestation via accredited bodies",
    ],
    benefits: [
      "No pre-audit fire drill",
      "Evidence collected continuously, not reconstructed",
      "Gaps remediated before an auditor finds them",
      "Certification through accredited bodies, never self-certified",
    ],
    metaTitle: "ISO 27001 & SOC 2 Evidence and Audit Readiness | Infodot",
    metaDescription:
      "Control mapping, continuous evidence collection, gap remediation and audit preparation for ISO 27001 and SOC 2 — audit readiness support from Infodot.",
    keywords:
      "ISO 27001, SOC 2, audit readiness, control mapping, compliance evidence, certification support",
  },
  {
    slug: "rmm-patch-management",
    icon: "Activity",
    title: "RMM & Patch Management",
    shortDescription:
      "Every device watched. Every patch applied. Without anyone remembering to.",
    description:
      "Continuous remote monitoring of every Windows and macOS device, with operating-system and application security updates detected and deployed automatically. Unpatched systems are the most common way small firms get breached, and the control insurers scrutinise most. We make patching a managed outcome, not a hopeful to-do — and we prove it ran.",
    features: [
      "24/7 remote monitoring of device health",
      "Automated OS and application patching",
      "Critical patches inside the Cyber Essentials window",
      "Proactive alerting and remediation",
      "Windows and macOS covered",
      "Patch compliance evidenced monthly",
    ],
    benefits: [
      "The most exploited gap closed automatically",
      "No one has to remember to patch",
      "Insurer and Cyber Essentials windows met",
      "Monthly evidence that patching actually ran",
    ],
    metaTitle: "RMM & Patch Management for Windows and Mac | Infodot",
    metaDescription:
      "24/7 remote monitoring with automated OS and application patching across Windows and macOS, inside Cyber Essentials windows and evidenced monthly.",
    keywords:
      "RMM, patch management, remote monitoring, Cyber Essentials patching, Windows and Mac patching",
  },
  {
    slug: "onboarding-exit",
    icon: "UserCheck",
    title: "Onboarding & Exit (Joiner–Mover–Leaver)",
    shortDescription:
      "Joiners ready on day one. Leavers closed the same day.",
    description:
      "A standard, secure process for people joining, moving and leaving — accounts, licences, devices and access provisioned and revoked cleanly and on time. Onboarding and offboarding are where access quietly sprawls and ex-staff keep logins. A disciplined joiner-mover-leaver process is both a productivity win and a security and audit control — especially with interns or contractors.",
    features: [
      "New-joiner accounts, licences and device setup",
      "Correct access from day one",
      "Role changes handled cleanly",
      "Same-day de-provisioning for leavers",
      "Licence reclaim on exit",
      "Data handled correctly when people leave",
    ],
    benefits: [
      "New starters productive on day one",
      "No ex-staff logins left open",
      "Licences reclaimed instead of quietly paid for",
      "An access control auditors can see working",
    ],
    metaTitle: "Onboarding & Exit / Joiner-Mover-Leaver Process | Infodot",
    metaDescription:
      "Accounts, licences, devices and access provisioned on day one and revoked the same day people leave — a disciplined JML process run by Infodot.",
    keywords:
      "joiner mover leaver, onboarding offboarding IT, de-provisioning, access control, licence reclaim",
  },
  {
    slug: "monitoring-incident-response",
    icon: "Siren",
    title: "Monitoring & Incident Response",
    shortDescription: "See it early. Handle it calmly.",
    description:
      "Centralised monitoring and a documented incident-response process, so security events are caught early and handled to a plan rather than in a panic. The difference between an incident and a crisis is preparation. Monitoring catches things early; a rehearsed IR plan means notification lands on time — which protects both your operations and your insurance position.",
    features: [
      "Centralised logging and security monitoring",
      "Alerting on suspicious activity",
      "A documented incident-response plan",
      "Defined roles and escalation",
      "Notification-readiness within policy windows",
      "Post-incident review",
    ],
    benefits: [
      "Events caught early, not discovered later",
      "A plan to follow instead of a panic",
      "Regulatory notification inside the window",
      "Lessons captured so it doesn't repeat",
    ],
    metaTitle: "Security Monitoring & Incident Response | Infodot",
    metaDescription:
      "Centralised logging, alerting and a documented incident-response plan with defined escalation, notification readiness and post-incident review.",
    keywords:
      "security monitoring, incident response, SIEM logging, breach notification, escalation plan",
  },
  {
    slug: "penetration-testing-vapt",
    icon: "Crosshair",
    title: "Penetration Testing & VAPT",
    shortDescription:
      "Proof your defences hold — the report your buyers ask for.",
    description:
      "Periodic offensive testing and vulnerability assessment — scoped, delivered and reported by us as the point-in-time assurance layer on top of continuous vulnerability management. Vulnerability management keeps you clean day to day; a periodic pen test proves it to an outsider. It's the assurance evidence buyers, auditors and insurers increasingly require — and we scope, deliver and stand behind it as one accountable team.",
    features: [
      "Scoped penetration testing and VAPT",
      "Internal and external assessment",
      "Prioritised, plain-English findings",
      "Remediation guidance and retest",
      "The report ISO, PCI, insurer or client due-diligence needs",
      "Scoped, run and reported by one accountable team",
    ],
    benefits: [
      "Independent proof your defences hold",
      "Findings you can act on, not a raw scanner dump",
      "Retest confirms the fix landed",
      "The evidence buyers and insurers ask for",
    ],
    metaTitle: "Penetration Testing & VAPT for Regulated Firms | Infodot",
    metaDescription:
      "Scoped internal and external penetration testing and VAPT with prioritised findings, remediation guidance and retest — reported by one accountable team.",
    keywords:
      "penetration testing, VAPT, vulnerability assessment, pen test report, security testing",
  },
  {
    slug: "network-security",
    icon: "Network",
    title: "Network Security",
    shortDescription: "Your network, monitored and hardened — remotely.",
    description:
      "Remote monitoring, hardening and configuration of your cloud-managed or remotely-accessible network devices — firewall, VPN, DNS and Wi-Fi. For cloud-first offices, network security is mostly configuration and monitoring — both of which we do remotely and well. We're honest about the line: policy and firmware from us, physical hands on site coordinated by us. Physical install, cabling or hardware replacement is coordinated through your local smart-hands — and we keep the single point of accountability throughout.",
    features: [
      "Firewall policy and firmware management",
      "Secure VPN configuration",
      "Network segmentation",
      "DNS filtering",
      "Wi-Fi security configuration",
      "Monitoring and alerting",
    ],
    benefits: [
      "Configuration kept correct, not drifting",
      "Segmentation limits how far a breach travels",
      "Malicious domains blocked at DNS",
      "Honest scope: remote work by us, smart-hands coordinated",
    ],
    metaTitle: "Remote Network Security Management | Infodot",
    metaDescription:
      "Firewall policy and firmware, VPN, segmentation, DNS filtering and Wi-Fi security configured, hardened and monitored remotely by Infodot.",
    keywords:
      "network security, firewall management, VPN configuration, DNS filtering, network segmentation",
  },
  {
    slug: "security-awareness",
    icon: "GraduationCap",
    title: "Security Awareness Training",
    shortDescription: "Turn your people from the risk into the first line.",
    description:
      "Short, usable staff training and phishing simulation that reduce the human risk behind most breaches — without wasting anyone's afternoon. Most breaches start with a click. Regular, realistic practice — not a once-a-year video — measurably lowers that risk and shows insurers and auditors you take the human factor seriously.",
    features: [
      "Phishing simulation campaigns",
      "Bite-size training modules",
      "Results and risk reporting",
      "Targeted follow-up for repeat clicks",
      "Onboarding for new joiners",
      "Optional add-on to any plan",
    ],
    benefits: [
      "Measurably fewer clicks on real phishing",
      "Training people actually finish",
      "Repeat-risk users spotted and coached",
      "Human-factor controls evidenced for insurers",
    ],
    metaTitle: "Security Awareness Training & Phishing Simulation | Infodot",
    metaDescription:
      "Bite-size staff training and realistic phishing simulation with risk reporting and targeted follow-up — reduce the human risk behind most breaches.",
    keywords:
      "security awareness training, phishing simulation, staff cyber training, human risk,",
  },
  {
    slug: "vulnerability-management",
    icon: "Bug",
    title: "Vulnerability Management",
    shortDescription:
      "Find the weaknesses on a cycle — and actually fix them.",
    description:
      "Continuous vulnerability scanning with prioritised remediation, so weaknesses are found and closed on a managed cycle rather than discovered at the next audit. A one-off scan is a snapshot; risk is continuous. We run vulnerability management as an ongoing cycle — scan, prioritise, fix, verify — so exposure shrinks month on month.",
    features: [
      "Regular authenticated vulnerability scanning",
      "Risk-based prioritisation",
      "Remediation driven to closure",
      "Secure-configuration checks",
      "Patch and config gaps tracked",
      "Trend reporting",
    ],
    benefits: [
      "Weaknesses found before an auditor or attacker does",
      "Effort spent on what actually carries risk",
      "Fixes verified, not just assigned",
      "Exposure trending down month on month",
    ],
    metaTitle: "Continuous Vulnerability Management | Infodot",
    metaDescription:
      "Authenticated vulnerability scanning with risk-based prioritisation, remediation driven to closure, secure-configuration checks and trend reporting.",
    keywords:
      "vulnerability management, vulnerability scanning, remediation, secure configuration, risk prioritisation",
  },
];

/** Retired slugs kept alive so old links resolve to the surviving service. */
export const serviceSlugAliases: Record<string, string> = {
  "continuous-controls-evidence": "always-audit-ready",
  "data-protection": "gdpr-data-protection",
};

export const getServiceBySlug = (slug: string) =>
  servicesData.find((s) => s.slug === slug) ??
  servicesData.find((s) => s.slug === serviceSlugAliases[slug]);
