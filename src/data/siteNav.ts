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

const MANAGED_IT = [
  "managed-it",
  "helpdesk-it-operations",
  "co-managed-it",
  "microsoft365-google-workspace",
  "rmm-patch-management",
  "asset-licence-domain",
  "backup-disaster-recovery",
  "cloud-management",
  "device-lifecycle",
  "onboarding-exit",
  "discovery-phase0",
  "it-transition-exit",
  "email-migration",
  "domain-migration",
];

const CYBERSECURITY = [
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
  "cyber-essentials-readiness",
  "cyber-insurance-readiness",
];

const COMPLIANCE = [
  "gdpr-data-protection",
  "iso27001-soc2-evidence",
  "always-audit-ready",
  "fca-operational-resilience",
];

const listed = new Set([...MANAGED_IT, ...CYBERSECURITY, ...COMPLIANCE]);

export const managedItLinks: NavLinkItem[] = [
  ...pick(MANAGED_IT),
  ...servicesData
    .filter((s) => !listed.has(s.slug))
    .map((s) => ({ label: s.title, href: `/services/${s.slug}`, description: s.shortDescription })),
];

export const cybersecurityLinks: NavLinkItem[] = pick(CYBERSECURITY);
export const complianceLinks: NavLinkItem[] = pick(COMPLIANCE);

/** Grouped view kept for the /services page and mobile menu. */
export const serviceGroups: { title: string; links: NavLinkItem[] }[] = [
  { title: "Managed IT", links: managedItLinks },
  { title: "Cybersecurity", links: cybersecurityLinks },
  { title: "Compliance", links: complianceLinks },
];

export const industryLinks: NavLinkItem[] = industries.map((i) => ({
  label: i.navLabel || i.name,
  href: `/industries/${i.slug}`,
  description: i.name,
}));

export const resourceLinks: NavLinkItem[] = [
  { label: "Insights", href: "/blog", description: "Notes on IT, security and compliance." },
  { label: "Case Studies", href: "/case-studies", description: "Outcomes from regulated firms." },
  { label: "Guides", href: "/resources", description: "Guides and checklists." },
  { label: "Portfolio", href: "/portfolio", description: "Selected work." },
];

export const aboutLinks: NavLinkItem[] = [
  { label: "About Infodot", href: "/about", description: "Since 1996, ISO 27001:2022 certified." },
  { label: "Why Infodot", href: "/z360", description: "The operations engine behind every account." },
  { label: "Service Delivery", href: "/how-it-works", description: "Co-managed, fully managed or fully remote." },
  { label: "Service Levels", href: "/pricing", description: "Essentials, Secured and Audit-Ready." },
  { label: "Small Office", href: "/small-office", description: "For offices of 5–20 seats." },
  { label: "Careers", href: "/careers", description: "Join the team." },
  { label: "Contact", href: "/contact", description: "Talk to a named business-hours engineer." },
  { label: "Legal & Privacy", href: "/legal", description: "How we handle your data." },
];

/** Legacy aliases */
export const solutionLinks = aboutLinks.slice(1, 5);
export const companyLinks = aboutLinks;
