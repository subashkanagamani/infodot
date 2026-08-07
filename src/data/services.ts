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
    title: "Managed IT / Helpdesk & IT Operations",
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
    metaTitle: "Managed IT & Helpdesk Support | Infodot UK",
    metaDescription:
      "Infodot UK runs your helpdesk, Microsoft 365/Google Workspace, device lifecycle and IT asset management — delivered remotely from an ISO 27001-certified team.",
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
    metaTitle: "Secure by Default IT Security | Infodot UK",
    metaDescription:
      "Managed EDR, IT hardening, email security and identity & access management, run as standard by Infodot UK — a managed IT provider for regulated UK industries.",
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
    metaTitle: "Backup & Disaster Recovery Services | Infodot UK",
    metaDescription:
      "Monitored, restore-tested, immutable backups and a tested DR plan (RTO/RPO) from Infodot UK, run remotely for regulated UK businesses.",
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
    metaTitle: "Always Audit-Ready: Continuous Compliance Evidence | Infodot UK",
    metaDescription:
      "Infodot UK keeps continuous controls and evidence for ISO 27001, SOC 2 and GDPR — so accountancy, legal and financial services firms are always audit-ready.",
    keywords:
      "continuous compliance, ISO 27001 evidence, SOC 2 evidence, GDPR compliance, audit ready, controls monitoring",
  },
  {
    slug: "cyber-essentials-readiness",
    icon: "Users",
    title: "Cyber Essentials Readiness",
    shortDescription:
      "All five Cyber Essentials controls implemented to v3.3 and certified via an accredited body.",
    description:
      "We implement and maintain all five Cyber Essentials controls — firewalls, secure configuration, access control, malware protection and patch management — to the current v3.3 standard, then take you through certification via an accredited certification body. Because we run the underlying IT ourselves, the controls stay true between assessments, not just on certification day.",
    features: [
      "All five Cyber Essentials controls, implemented to v3.3",
      "Certification managed via an accredited body",
      "Controls maintained continuously between assessments",
      "Applicable to Cyber Essentials and Cyber Essentials Plus",
    ],
    benefits: [
      "Meets a common client and tender requirement without extra admin",
      "Controls are lived day to day, not just demonstrated at assessment",
      "Straightforward path to certification via accredited partners",
      "Builds the foundation for wider security and insurance readiness",
    ],
    metaTitle: "Cyber Essentials Readiness & Certification | Infodot UK",
    metaDescription:
      "Infodot UK implements all five Cyber Essentials controls to v3.3 and manages certification via an accredited body — for regulated UK businesses.",
    keywords:
      "Cyber Essentials, Cyber Essentials Plus, v3.3, cyber essentials certification, accredited certification body",
  },
  {
    slug: "cyber-insurance-readiness",
    icon: "Palette",
    title: "Cyber Insurance Readiness",
    shortDescription:
      "Keep the controls insurers ask about enforced and evidenced all year, not just at renewal.",
    description:
      "Cyber cover is now underwritten on controls you attest to and must maintain continuously. When a claim is investigated, a gap between what you attested and what was actually running is a common reason cover is disputed — even when the gap didn't cause the incident. We keep the controls insurers ask about — MFA everywhere, EDR on every endpoint, tested backups, patching — enforced and evidenced through the year, with drift alerts if a control slips, and a renewal-ready evidence pack, so your questionnaire answers are true and provable when it matters.",
    features: [
      "MFA, EDR, tested backups and patching kept enforced year-round",
      "Drift alerting if a control slips between renewals",
      "Renewal-ready evidence pack for the insurer questionnaire",
      "Continuous alignment between attested and actual controls",
    ],
    benefits: [
      "Coalition data shows 82% of denied claims lacked full MFA — closing that gap protects your cover",
      "NAIC data shows only around 1 in 4 closed cyber claims resulted in a payout — accurate attestations matter",
      "Reduces the risk of a disputed claim over a control gap",
      "Confidence at renewal time instead of a last-minute scramble",
    ],
    metaTitle: "Cyber Insurance Readiness Services | Infodot UK",
    metaDescription:
      "Infodot UK keeps the controls cyber insurers require — MFA, EDR, backups, patching — enforced and evidenced year-round, so renewal answers stay true.",
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
      "Full exit pack and clean handover from your incumbent",
    ],
    benefits: [
      "No knowledge lost in the switch from your current provider",
      "Fixed-fee migrations with no data loss",
      "Domain and DNS moved cleanly into your own control",
      "A documented, low-drama transition project",
    ],
    metaTitle: "IT Transition, Exit & Migration Services | Infodot UK",
    metaDescription:
      "Infodot UK manages IT provider transitions, Phase 0 discovery, and email and domain migration — a clean, fixed-fee switch with no data lost.",
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
      "A low-risk way to start working with Infodot UK",
    ],
    metaTitle: "Co-Managed IT Services | Infodot UK",
    metaDescription:
      "Infodot UK runs the security and operations layer alongside your in-house IT team, with a clear ownership matrix — your tools or ours.",
    keywords:
      "co-managed IT, IT support for in-house teams, shared IT support, managed security services",
  },
];

export const getServiceBySlug = (slug: string) =>
  servicesData.find((s) => s.slug === slug);
