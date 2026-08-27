export interface ServicePromise {
  /** Short problem-framing headline shown above the service title context */
  pains: string[];
  /** The distinct promise shown in the highlighted hero tile */
  promise: string;
  /** People/awareness strip line at the bottom of the hero */
  awareness: string;
}

/**
 * Per-service hero content. Each service gets its own pain points, promise
 * statement and awareness strip so no two service pages repeat the same box.
 */
export const servicePromises: Record<string, ServicePromise> = {
  "managed-it": {
    pains: ["Downtime", "Slow issue resolution", "No clear ownership"],
    promise: "One phone call, not five different people passing you around.",
    awareness: "Security starts with your people — phishing, passwords, MFA.",
  },
  "helpdesk-it-operations": {
    pains: ["Lost employee time", "Recurring problems", "No visibility of SLA"],
    promise: "You'll always know exactly where your ticket stands.",
    awareness:
      "Don't let a suspicious email become a support ticket — phishing, malicious links, reporting.",
  },
  "co-managed-it": {
    pains: ["Overloaded IT team", "Security/operations gaps", "Skills constraints"],
    promise: "Your team keeps control — we cover what they don't have time for.",
    awareness:
      "Your IT team isn't your only security control — awareness, phishing, incident reporting.",
  },
  "microsoft365-google-workspace": {
    pains: ["Uncontrolled access", "Data exposure", "Poor configuration"],
    promise: "Your cloud, locked down and properly configured — not just switched on.",
    awareness: "Protect the people behind your cloud — phishing, MFA, unsafe sharing.",
  },
  "rmm-patch-management": {
    pains: ["Security vulnerabilities", "Unexpected failures", "Manual patching gaps"],
    promise: "Patches applied automatically — not whenever someone remembers.",
    awareness:
      "Patching protects systems. Awareness protects people — phishing, ransomware, malicious downloads.",
  },
  "asset-licence-domain": {
    pains: ["Forgotten assets", "Unused licences", "Missed renewals"],
    promise: "Know exactly what you own — and never miss a renewal again.",
    awareness:
      "Every device has a user — make sure they know how to protect it. Devices, USBs, suspicious software.",
  },
  "backup-disaster-recovery": {
    pains: ["Data loss", "Extended downtime", "Untested recovery"],
    promise: "Recovery tested monthly — not assumed.",
    awareness:
      "Don't make your backup your last line of defence — ransomware, phishing, incident reporting.",
  },
  "cloud-management": {
    pains: ["Sprawling permissions", "Unnecessary spend", "Misconfiguration"],
    promise: "Cloud costs and access, kept under control as you grow.",
    awareness: "Your cloud is only as secure as its users — sharing, access, phishing.",
  },
  "device-lifecycle": {
    pains: ["Unsecured devices", "Poor asset visibility", "Costly end-of-life"],
    promise: "Every device secured and accounted for, day one to disposal.",
    awareness: "Secure devices need secure users — screen locks, USB, software, lost devices.",
  },
  "onboarding-exit": {
    pains: ["Access left open", "Data leaving with employees", "Manual HR–IT gaps"],
    promise: "Access granted day one, removed the day they leave — logged.",
    awareness: "Security starts on day one — awareness, phishing, password/MFA, reporting.",
  },
  "secure-by-default": {
    pains: ["Security as an add-on", "Inconsistent baseline", "Gaps between tools"],
    promise: "Security that's standard for everyone — not a tier you pay up for.",
    awareness:
      "Controls only work if your people follow them — phishing, MFA, reporting.",
  },
  "managed-edr": {
    pains: ["Alerts nobody reads", "No 24/7 response", "Slow containment"],
    promise: "A human responds — not just an alert nobody reads.",
    awareness:
      "Most alerts start with a person clicking something — phishing, malware, unsafe downloads.",
  },
  "it-hardening": {
    pains: ["Default configurations", "Unnecessary services running", "Weak baseline settings"],
    promise: "Systems hardened before an attacker ever gets the chance.",
    awareness:
      "Hardened systems still get reconfigured by well-meaning staff — awareness closes that gap.",
  },
  "email-security": {
    pains: ["Phishing emails", "Malicious attachments", "Business email compromise"],
    promise: "Malicious emails stopped before your inbox ever sees them.",
    awareness:
      "Some phishing still gets through filters — your people are the last line. Reporting matters.",
  },
  "identity-access": {
    pains: ["Orphaned accounts", "Excess permissions", "No access audit trail"],
    promise: "Access reviewed and provable — not just assumed.",
    awareness:
      "Weak or reused passwords undo strong access controls — MFA, password hygiene.",
  },
  "network-security": {
    pains: ["Unmonitored network", "Open ports", "No intrusion detection"],
    promise: "Your network watched and hardened, every single day.",
    awareness:
      "A hardened network still needs careful users — Wi-Fi sharing, remote access hygiene.",
  },
  "monitoring-incident-response": {
    pains: ["Late detection", "Panic response", "No incident process"],
    promise: "Incidents caught early, handled calmly and by the book.",
    awareness:
      "Fast detection depends on people reporting what looks wrong — reporting culture matters.",
  },
  "penetration-testing-vapt": {
    pains: ["No test evidence", "Lost enterprise deals", "Unverified defences"],
    promise: "The evidence report your next big deal is asking for.",
    awareness:
      "Testers often get in through people first — social engineering, phishing.",
  },
  "vulnerability-management": {
    pains: ["Unscanned systems", "Known flaws unpatched", "No remediation tracking"],
    promise: "Weaknesses found on a cycle — and closed, not just logged.",
    awareness:
      "Scanning finds technical gaps — your people are tested by social engineering.",
  },
  "security-awareness": {
    pains: ["Untrained staff", "Repeated phishing clicks", "No reporting culture"],
    promise: "Your people become your first line of defence.",
    awareness:
      "Covers phishing, passwords, MFA, device hygiene, USBs and social engineering — in short, regular sessions.",
  },
  "cyber-essentials-readiness": {
    pains: ["No formal certification", "Lost tenders without it", "Certification lapses"],
    promise: "Certified once, kept current — not a one-time exercise.",
    awareness:
      "Cyber Essentials assesses your people too — passwords, MFA, malware awareness.",
  },
  "cyber-insurance-readiness": {
    pains: ["Claims denied", "Missing evidence", "Rising premiums"],
    promise: "Evidence ready when insurers — or a claim — come asking.",
    awareness:
      "Insurers increasingly ask for staff training records — a gap here can affect a claim.",
  },
  "always-audit-ready": {
    pains: ["Audit-season scramble", "Evidence scattered across tools", "Renewals catch you unprepared"],
    promise: "Evidence generated continuously — audits confirm, not discover.",
    awareness:
      "Controls only produce evidence if people actually follow them — day to day.",
  },
  "iso27001-soc2-evidence": {
    pains: ["Evidence scrambled together", "Manual audit prep", "Controls not continuously proven"],
    promise: "Evidence collected monthly — the audit just confirms it.",
    awareness:
      "Auditors increasingly ask for staff training records alongside technical controls.",
  },
  "gdpr-data-protection": {
    pains: ["Policy exists, not followed", "No data mapping", "Undefined breach response"],
    promise: "A living data map — not a policy sitting in a drawer.",
    awareness:
      "Most data breaches start with a person, not a system — awareness matters as much as policy.",
  },
  "fca-operational-resilience": {
    pains: ["No resilience mapping", "Can't prove third-party oversight", "Rising regulatory scrutiny"],
    promise: "The evidence pack ready before your client even asks.",
    awareness:
      "Operational resilience includes the people risk, not just the technical stack.",
  },
  "it-transition-exit": {
    pains: ["Lost knowledge", "Disrupted services", "Incomplete handover"],
    promise: "Switch providers without losing a single thread.",
    awareness:
      "A secure transition includes your people — phishing, social engineering, credential protection.",
  },
  "discovery-phase0": {
    pains: ["Unknown assets", "Hidden risks", "Incomplete documentation"],
    promise: "See your entire IT environment before you change a thing.",
    awareness:
      "Find the technical gaps. Don't forget the human ones. — awareness, phishing, security culture.",
  },
  "email-migration": {
    pains: ["Lost messages", "Downtime", "Misconfigured accounts"],
    promise: "Every mailbox migrated and validated before anyone notices.",
    awareness:
      "New email platform. Same phishing risk. — phishing, malicious attachments, reporting.",
  },
  "domain-migration": {
    pains: ["Website/email downtime", "DNS errors", "Loss of control"],
    promise: "Domain changes handled cleanly — zero surprise downtime.",
    awareness:
      "Protect the people who control your domains — phishing, credential theft, social engineering.",
  },
};

export const getServicePromise = (slug: string): ServicePromise =>
  servicePromises[slug] ?? {
    pains: ["Unclear ownership", "Reactive fixes", "No visibility"],
    promise: "One accountable team, with clear ownership from day one.",
    awareness: "Security starts with your people — phishing, passwords, MFA.",
  };

/**
 * Per-service hero eyebrow (kicker) and outcome headline, matching the
 * approved service-hero reference: a small labelled kicker above a short,
 * benefit-led headline instead of the raw service title.
 */
export interface ServiceHeroCopy {
  eyebrow: string;
  headline: string;
}

export const serviceHeroCopy: Record<string, ServiceHeroCopy> = {
  "managed-it": { eyebrow: "Fully Managed IT", headline: "IT that just works." },
  "helpdesk-it-operations": { eyebrow: "Helpdesk & IT Operations", headline: "Help that actually answers." },
  "co-managed-it": { eyebrow: "Co-Managed IT", headline: "Extend your IT team." },
  "microsoft365-google-workspace": { eyebrow: "Cloud Workspace", headline: "Your cloud, properly configured." },
  "rmm-patch-management": { eyebrow: "Monitoring & Patch Management", headline: "Patched before it bites." },
  "asset-licence-domain": { eyebrow: "Asset, Licence & Domain", headline: "Know what you own." },
  "backup-disaster-recovery": { eyebrow: "Backup & Disaster Recovery", headline: "Restores you can prove." },
  "cloud-management": { eyebrow: "Cloud Management", headline: "Cloud, under control." },
  "device-lifecycle": { eyebrow: "Device Lifecycle", headline: "Every device accounted for." },
  "onboarding-exit": { eyebrow: "Onboarding & Exit", headline: "Access on day one, gone on day last." },
  "secure-by-default": { eyebrow: "Secure by Default", headline: "Security isn't an upgrade." },
  "managed-edr": { eyebrow: "Managed EDR", headline: "Someone actually responds." },
  "it-hardening": { eyebrow: "IT Hardening", headline: "Close the door first." },
  "email-security": { eyebrow: "Email Security", headline: "Stop it before the inbox." },
  "identity-access": { eyebrow: "Identity & Access", headline: "Prove who has access." },
  "network-security": { eyebrow: "Network Security", headline: "Watched, every day." },
  "monitoring-incident-response": { eyebrow: "Monitoring & Incident Response", headline: "Caught early, handled calmly." },
  "penetration-testing-vapt": { eyebrow: "Penetration Testing & VAPT", headline: "The report buyers ask for." },
  "vulnerability-management": { eyebrow: "Vulnerability Management", headline: "Found, fixed, evidenced." },
  "security-awareness": { eyebrow: "Security Awareness Training", headline: "Make people the control." },
  "cyber-essentials-readiness": { eyebrow: "Cyber Essentials Readiness", headline: "Pass first time." },
  "cyber-insurance-readiness": { eyebrow: "Cyber Insurance Readiness", headline: "Answer the insurer honestly." },
  "always-audit-ready": { eyebrow: "Always Audit-Ready", headline: "Evidence, continuously." },
  "iso27001-soc2-evidence": { eyebrow: "ISO 27001 & SOC 2 Evidence", headline: "Make the audit a formality." },
  "gdpr-data-protection": { eyebrow: "GDPR & Data Protection", headline: "GDPR as an operating discipline." },
  "fca-operational-resilience": { eyebrow: "FCA Operational Resilience", headline: "Resilience you can evidence." },
  "it-transition-exit": { eyebrow: "IT Transition & Exit", headline: "Switch without the drama." },
  "discovery-phase0": { eyebrow: "Discovery — Phase 0", headline: "See it before you change it." },
  "email-migration": { eyebrow: "Email Migration", headline: "Migrated before anyone notices." },
  "domain-migration": { eyebrow: "Domain & DNS Migration", headline: "No surprise downtime." },
};

export const getServiceHeroCopy = (slug: string, fallbackTitle: string): ServiceHeroCopy =>
  serviceHeroCopy[slug] ?? { eyebrow: fallbackTitle, headline: fallbackTitle };
