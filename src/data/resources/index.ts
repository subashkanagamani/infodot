import { ResourceDoc, resourcePath } from "./types";
import { foundationDocs } from "./foundation";
import { identityEmailDocs } from "./identityEmail";
import { resilienceDocs } from "./resilience";
import { peopleDocs } from "./people";

export * from "./types";

export const resourceDocs: ResourceDoc[] = [
  ...foundationDocs,
  ...identityEmailDocs,
  ...resilienceDocs,
  ...peopleDocs,
];

export const resourcePillars = resourceDocs.filter((d) => d.kind === "pillar");

export const getPillar = (slug?: string) =>
  resourceDocs.find((d) => d.kind === "pillar" && d.slug === slug);

export const getArticle = (pillar?: string, slug?: string) =>
  resourceDocs.find((d) => d.parent === pillar && d.slug === slug);

export const getChildren = (pillarSlug: string) =>
  resourceDocs.filter((d) => d.parent === pillarSlug);

export const allResourcePaths = resourceDocs.map(resourcePath);

/** The 16 layers of the Secure IT Estate, in hub display order. */
export interface HubTile {
  index: string;
  title: string;
  blurb: string;
  slug: string;
}

export const hubTiles: HubTile[] = [
  { index: "01", title: "Email security", blurb: "Phishing, spoofing, invoice fraud and what actually stops them.", slug: "email-security" },
  { index: "02", title: "Endpoint security", blurb: "Laptops, phones, patching and encryption.", slug: "endpoint-security" },
  { index: "03", title: "Identity & access", blurb: "MFA, passwords and who can get in.", slug: "identity-and-access" },
  { index: "04", title: "Network & firewall", blurb: "Firewalls, remote access and Wi-Fi.", slug: "network-security" },
  { index: "05", title: "Domain & DNS", blurb: "Domain hijacking, DNS and certificates.", slug: "domain-and-dns-security" },
  { index: "06", title: "Servers & Active Directory", blurb: "Servers, AD/Entra and your asset list.", slug: "servers-and-infrastructure" },
  { index: "07", title: "Data protection", blurb: "Classification, encryption and DLP.", slug: "data-security" },
  { index: "08", title: "Backup & recovery", blurb: "Ransomware, restores and continuity.", slug: "backup-and-recovery" },
  { index: "09", title: "Cloud, M365 & Workspace", blurb: "Securing the cloud you already use.", slug: "cloud-security" },
  { index: "10", title: "Web & applications", blurb: "Keeping your website and apps safe.", slug: "web-and-application-security" },
  { index: "11", title: "Monitoring & detection", blurb: "Seeing attacks before they become breaches.", slug: "security-monitoring" },
  { index: "12", title: "Incident response", blurb: "What to do when something goes wrong.", slug: "incident-response" },
  { index: "13", title: "Your people", blurb: "Training that works, without the theatre.", slug: "security-awareness" },
  { index: "14", title: "Using AI safely", blurb: "Shadow AI and keeping data out of chatbots.", slug: "ai-security" },
  { index: "15", title: "Supply-chain risk", blurb: "Questionnaires, vendors and being a safe supplier.", slug: "supply-chain-risk" },
  { index: "16", title: "Governance & compliance", blurb: "Audits, evidence and staying insurable.", slug: "governance-and-compliance" },
];
