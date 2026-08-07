export interface Industry {
  slug: string;
  eyebrow: string;
  name: string;
  navLabel: string;
  headline: string;
  intro: string;
  included: string[];
  whyItMatters: string[];
  compliance: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
}

export const industries: Industry[] = [
  {
    slug: "accountants",
    eyebrow: "Industries · Accountancy",
    name: "Accountancy & tax practices",
    navLabel: "Accountants",
    headline:
      "IT support for accountancy firms — built around the software you actually run.",
    intro:
      "Managed IT for UK accountancy and tax practices, delivered remotely by an ISO 27001-certified team. We know your practice software, your Making Tax Digital deadlines, and the security your clients' financial data demands.",
    included: [
      "Software we support: IRIS, CCH, Digita, Sage, Xero, QuickBooks, FreeAgent, TaxCalc, Microsoft 365, MTD",
      "Helpdesk with a 30-minute first response, on UK hours",
      "Monitoring and patching across Windows and Mac",
      "Microsoft 365 tenant, identity and email — run and secured",
      "MFA everywhere, hardening and managed detection & response",
      "Tested, immutable backups with proof of recovery",
      "Onboarding and exit; practice-software integration and vendor liaison",
      "Peak-season coverage through year-end and self-assessment",
    ],
    whyItMatters: [
      "We run your whole IT function remotely, secure by default, and evidence it monthly — so your partners focus on client work, not firefighting technology.",
      "Named, background-checked UK-hours engineers work inside your own Microsoft 365 tenancy; your data doesn't leave it. Since 1996, ISO 27001:2022 certified, no lock-in.",
    ],
    compliance:
      "Aligned to Cyber Essentials Plus and ISO 27001; ICAEW / ACCA expectations and MTD; anti-fraud email controls for HMRC and Companies House phishing.",
    seoTitle: "IT Support for Accountants UK — IRIS, CCH, Sage, Xero | Infodot UK",
    seoDescription:
      "Managed IT for UK accountancy and tax practices. IRIS, CCH, Digita, Sage, Xero and MTD supported by an ISO 27001:2022 certified team. 30-minute first response.",
    keywords:
      "IT support for accountants, accountancy IT support UK, IRIS support, CCH support, Sage IT support, MTD IT, managed IT for accountants",
  },
  {
    slug: "law-firms",
    eyebrow: "Industries · Legal",
    name: "Solicitors & legal practices",
    navLabel: "Law firms",
    headline:
      "IT support for law firms — secure, SRA-ready, and fluent in your case management.",
    intro:
      "Managed IT for UK solicitors and legal practices, delivered remotely. We support your case and practice management systems, protect client confidentiality and legal privilege, and keep you aligned to what the SRA expects.",
    included: [
      "Software we support: LEAP, Clio, Proclaim, PMS, Microsoft 365, document management, secure client portals",
      "Helpdesk with priority handling for time-sensitive legal work",
      "Microsoft 365, identity and email — run and secured",
      "MFA everywhere, hardening and managed detection & response",
      "Encryption, DLP and audit trails for privileged data",
      "Tested, immutable backups with proof of recovery",
      "Secure remote access for court and client-site working",
      "Onboarding and exit for fee-earners and support staff",
    ],
    whyItMatters: [
      "We run your IT remotely and securely, so fee-earners get fast support and clients' confidential matters stay protected — with the audit trail to prove it.",
      "A named, background-checked UK-hours team works inside your own tenancy; your data stays yours. Since 1996, ISO 27001:2022 certified, no lock-in.",
    ],
    compliance:
      "SRA-aligned information security, business continuity and data protection; Cyber Essentials Plus and ISO 27001; legal privilege protected with encryption, DLP and audit trails.",
    seoTitle: "IT Support for Law Firms UK — SRA-Ready, LEAP & Clio | Infodot UK",
    seoDescription:
      "Managed IT for UK solicitors. LEAP, Clio, Proclaim and Microsoft 365 supported remotely by an ISO 27001:2022 certified team, with SRA-aligned security and audit trails.",
    keywords:
      "IT support for law firms, legal IT support UK, SRA IT compliance, LEAP support, Clio support, Proclaim support, managed IT for solicitors",
  },
  {
    slug: "financial-services",
    eyebrow: "Industries · Financial Services",
    name: "Financial services, fintech & funded startups",
    navLabel: "Financial services",
    headline:
      "IT support for financial services — FCA-ready operational resilience, run remotely.",
    intro:
      "Managed IT for UK financial services firms, fintechs and funded startups. Secure-by-default operations, continuous compliance evidence, and the operational-resilience posture the FCA now expects from you — and from your suppliers.",
    included: [
      "Platforms: Microsoft 365, Azure, back-office/portfolio, advisory & trading, comms archiving, secure remote access, Entra identity",
      "Helpdesk with SLAs designed for financial-services urgency",
      "MFA everywhere, hardening and managed detection & response",
      "Continuous controls & evidence for audit and diligence",
      "FCA operational-resilience and third-party evidence pack",
      "Communication archiving and retention for record-keeping",
      "Tested disaster recovery with agreed RTO/RPO",
      "Onboarding and exit, and secure remote access",
    ],
    whyItMatters: [
      "We confront the offshore question head-on: access-only, engineers inside your own UK/EU tenancy, data not copied out, a named UK-hours team, background-checked and accountable.",
      "That's exactly what a regulated buyer's diligence needs to see — ISO 27001:2022 certified, in business since 1996, no lock-in, evidence pack ready before you ask.",
    ],
    compliance:
      "FCA operational resilience (PS26/2 third-party & incident reporting); we hand you the due-diligence evidence pack and exit plan; ISO 27001 (SOC 2 in progress), GDPR with the correct transfer mechanism.",
    seoTitle: "IT Support for Financial Services UK — FCA-Ready | Infodot UK",
    seoDescription:
      "Managed IT for UK financial services firms, fintechs and funded startups. FCA operational resilience, continuous evidence and DR with agreed RTO/RPO, ISO 27001:2022.",
    keywords:
      "IT support for financial services, FCA operational resilience IT, fintech IT support UK, managed IT financial services, PS26/2, third-party evidence pack",
  },
];

export const getIndustry = (slug?: string) =>
  industries.find((i) => i.slug === slug);