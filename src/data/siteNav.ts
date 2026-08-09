import { servicesData } from "@/data/services";
import { industries } from "@/data/industries";

export interface NavLinkItem { label: string; href: string; description?: string }

const t = (slug: string) => servicesData.find((s) => s.slug === slug);
const pick = (slugs: string[]): NavLinkItem[] =>
  slugs
    .map((slug) => {
      const s = t(slug);
      return s ? { label: s.title, href: `/services/${s.slug}`, description: s.shortDescription } : null;
    })
    .filter(Boolean) as NavLinkItem[];

const CORE = [
  "managed-it",
  "helpdesk-it-operations",
  "co-managed-it",
  "device-lifecycle",
  "rmm-patch-management",
  "cloud-management",
  "microsoft365-google-workspace",
  "onboarding-exit",
  "asset-licence-domain",
];

const SECURITY = [
  "secure-by-default",
  "managed-edr",
  "email-security",
  "identity-access",
  "network-security",
  "it-hardening",
  "vulnerability-management",
  "penetration-testing-vapt",
  "security-awareness",
  "monitoring-incident-response",
  "backup-disaster-recovery",
];

const COMPLIANCE = [
  "always-audit-ready",
  "cyber-essentials-readiness",
  "cyber-insurance-readiness",
  "iso27001-soc2-evidence",
  "continuous-controls-evidence",
  "gdpr-data-protection",
  "fca-operational-resilience",
  "data-protection",
];

const MIGRATION = ["discovery-phase0", "it-transition-exit", "email-migration", "domain-migration"];

const listed = new Set([...CORE, ...SECURITY, ...COMPLIANCE, ...MIGRATION]);

export const serviceGroups: { title: string; links: NavLinkItem[] }[] = [
  { title: "Run & operate", links: pick(CORE) },
  { title: "Security", links: pick(SECURITY) },
  { title: "Compliance & evidence", links: pick(COMPLIANCE) },
  {
    title: "Move & transition",
    links: [
      ...pick(MIGRATION),
      ...servicesData
        .filter((s) => !listed.has(s.slug))
        .map((s) => ({ label: s.title, href: `/services/${s.slug}`, description: s.shortDescription })),
    ],
  },
];

export const industryLinks: NavLinkItem[] = industries.map((i) => ({
  label: i.navLabel || i.name,
  href: `/industries/${i.slug}`,
  description: i.name,
}));

export const solutionLinks: NavLinkItem[] = [
  { label: "Powered by Z360", href: "/z360", description: "The operations engine behind every account." },
  { label: "Small Office", href: "/small-office", description: "For offices of 5–20 seats." },
  { label: "How It Works", href: "/how-it-works", description: "Co-managed, fully managed or fully remote." },
  { label: "Pricing", href: "/pricing", description: "Essentials, Secured and Audit-Ready." },
];

export const companyLinks: NavLinkItem[] = [
  { label: "About", href: "/about", description: "Since 1996, ISO 27001:2022 certified." },
  { label: "Contact", href: "/contact", description: "Talk to a named UK-hours engineer." },
  { label: "Careers", href: "/careers", description: "Join the team." },
  { label: "Case Studies", href: "/case-studies", description: "Outcomes from regulated firms." },
  { label: "Portfolio", href: "/portfolio", description: "Selected work." },
  { label: "Blog", href: "/blog", description: "Notes on IT, security and compliance." },
  { label: "Resources", href: "/resources", description: "Guides and checklists." },
  { label: "Enquiry", href: "/enquiry", description: "Request a quote in 48 hours." },
  { label: "Legal & Privacy", href: "/legal", description: "How we handle your data." },
  { label: "Privacy Policy", href: "/privacy-policy", description: "Full privacy notice." },
];
