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
    pains: ["No certificate to show clients", "Controls slip between renewals", "Stricter assessment rules"],
    promise: "Controls in place. Evidence ready.",
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
  /** Editorial lead paragraph shown under the pain chips */
  lead?: string;
}

export const serviceHeroCopy: Record<string, ServiceHeroCopy> = {
  "managed-it": {
    eyebrow: "FULLY MANAGED IT",
    headline: "When IT isn't managed, business suffers.",
    lead: "One team owns your IT end-to-end — proactively managing users, devices, cloud, security and support so nothing falls through the cracks.",
  },
  "helpdesk-it-operations": {
    eyebrow: "HELPDESK & IT OPERATIONS",
    headline: "Every unresolved IT issue costs productivity.",
    lead: "Infodot gives your people one responsive IT team, with clear SLAs, ownership and escalation from ticket to resolution.",
  },
  "co-managed-it": {
    eyebrow: "CO-MANAGED IT",
    headline: "Your IT team shouldn't have to do everything.",
    lead: "Infodot works alongside your team, taking ownership of the security and operational layers you need help with.",
  },
  "microsoft365-google-workspace": {
    eyebrow: "MICROSOFT 365 & GOOGLE WORKSPACE",
    headline: "Your cloud is now your business.",
    lead: "Infodot manages your productivity environment end-to-end — identity, access, security, devices and collaboration.",
  },
  "rmm-patch-management": {
    eyebrow: "RMM & PATCH MANAGEMENT",
    headline: "Unpatched systems are an open invitation.",
    lead: "Infodot continuously monitors, patches and remediates your devices — without relying on someone to remember.",
  },
  "asset-licence-domain": {
    eyebrow: "ASSET, LICENCE & DOMAIN MANAGEMENT",
    headline: "If you don't know what you own, you can't control it.",
    lead: "Infodot gives you a complete view of assets, licences and domains — including ownership, lifecycle and renewal dates.",
  },
  "backup-disaster-recovery": {
    eyebrow: "BACKUP & DISASTER RECOVERY",
    headline: "A backup is useless if you can't recover.",
    lead: "Infodot protects, monitors and tests your backups so your business can recover when it matters.",
  },
  "cloud-management": {
    eyebrow: "CLOUD MANAGEMENT",
    headline: "Cloud costs and risks grow quietly.",
    lead: "Infodot keeps your cloud environment secure, optimised and under control as your business grows.",
  },
  "device-lifecycle": {
    eyebrow: "DEVICE LIFECYCLE MANAGEMENT",
    headline: "Every device has a security and cost lifecycle.",
    lead: "Infodot manages every device from procurement and deployment through support, replacement and secure disposal.",
  },
  "onboarding-exit": {
    eyebrow: "ONBOARDING & EXIT",
    headline: "The cost of getting employee access wrong.",
    lead: "Infodot automates the IT lifecycle from Joiner → Mover → Leaver — right access at the right time, removed and evidenced when they leave.",
  },
  "secure-by-default": {
    eyebrow: "SECURE BY DEFAULT",
    headline: "MFA, EDR, hardening and email security — standard from day one, not a premium add-on.",
    lead: "Every client gets the same security baseline — MFA, EDR, hardening, email security and monitoring — included, not upsold.",
  },
  "managed-edr": {
    eyebrow: "MANAGED EDR",
    headline: "Detection and response — with people who act, not just alert.",
    lead: "Infodot's team watches, investigates and contains threats on your endpoints — not just a dashboard flashing red.",
  },
  "it-hardening": {
    eyebrow: "IT HARDENING",
    headline: "Close the doors before anyone tries them.",
    lead: "Infodot applies a consistent hardened baseline across every device and system — closing off the settings attackers rely on.",
  },
  "email-security": {
    eyebrow: "EMAIL SECURITY",
    headline: "Stop the phish before it reaches the inbox.",
    lead: "Infodot filters, authenticates and monitors your mail flow — catching threats before your people ever see them.",
  },
  "identity-access": {
    eyebrow: "IDENTITY & ACCESS MANAGEMENT",
    headline: "The right people in. Everyone else out. Provably.",
    lead: "Infodot manages identity and access with least-privilege by default — and a record of who has access to what, and why.",
  },
  "network-security": {
    eyebrow: "NETWORK SECURITY",
    headline: "Your network, monitored and hardened — remotely.",
    lead: "Infodot secures your firewalls, Wi-Fi and network perimeter — configured, monitored and kept current, without anyone on site.",
  },
  "monitoring-incident-response": {
    eyebrow: "MONITORING & INCIDENT RESPONSE",
    headline: "See it early. Handle it calmly.",
    lead: "Infodot monitors continuously and responds to a defined incident process — so the first hour is calm, not chaotic.",
  },
  "penetration-testing-vapt": {
    eyebrow: "PENETRATION TESTING & VAPT",
    headline: "Proof your defences hold — the report your buyers ask for.",
    lead: "Infodot coordinates independent penetration testing and delivers the report auditors, insurers and enterprise buyers ask for.",
  },
  "vulnerability-management": {
    eyebrow: "VULNERABILITY MANAGEMENT",
    headline: "Find the weaknesses on a cycle — and actually fix them.",
    lead: "Infodot scans on a set cycle, prioritises what's exploitable, and tracks every finding through to a fix — not a report that sits unread.",
  },
  "security-awareness": {
    eyebrow: "SECURITY AWARENESS TRAINING",
    headline: "Turn your people from the risk into the first line.",
    lead: "Infodot runs ongoing training and simulated phishing so your people spot the threat before it becomes an incident.",
  },
  "cyber-essentials-readiness": {
    eyebrow: "CYBER ESSENTIALS READINESS",
    headline: "Ready for Cyber Essentials. Every year.",
    lead: "We make you audit-ready for Cyber Essentials and Cyber Essentials Plus: a gap assessment, the fixes, the evidence, and your assessment booked with an IASME certification body. Then we keep the controls running year-round, so each renewal is routine.",
  },
  "cyber-insurance-readiness": {
    eyebrow: "CYBER INSURANCE READINESS",
    headline: "Insurers don't just want the controls. They want proof they stayed on.",
    lead: "Infodot maintains the evidence trail insurers ask for at renewal and at claim — controls that are documented as continuously in place, not just at signup.",
  },
  "always-audit-ready": {
    eyebrow: "ALWAYS AUDIT-READY",
    headline: "Continuous controls and evidence, so audits and renewals never mean a scramble.",
    lead: "The controls we run produce the evidence auditors and insurers ask for — reported monthly, not reconstructed under deadline.",
  },
  "iso27001-soc2-evidence": {
    eyebrow: "ISO 27001 & SOC 2 EVIDENCE",
    headline: "Make the audit a formality.",
    lead: "Monthly audit evidence and quarterly management review, generated as a by-product of how we run your IT — not assembled the week before an auditor calls.",
  },
  "gdpr-data-protection": {
    eyebrow: "GDPR & DATA PROTECTION OPERATIONS",
    headline: "GDPR handled as an operating discipline, not a policy PDF.",
    lead: "A signed DPA with every engagement, data minimisation by design, and your data kept in your own tenancy — administered in place, never copied out.",
  },
  "fca-operational-resilience": {
    eyebrow: "FCA OPERATIONAL RESILIENCE & THIRD-PARTY RULES",
    headline: "For the FCA's new third-party rules — be the supplier that's ready.",
    lead: "A due-diligence evidence pack your regulated clients can hand their own supervisors — proof you're the supplier that's already ready, not scrambling to catch up.",
  },
  "it-transition-exit": {
    eyebrow: "IT TRANSITION & EXIT",
    headline: "Changing IT providers shouldn't create new risks.",
    lead: "Infodot takes control through structured discovery, transition, documentation and an accountable exit process.",
  },
  "discovery-phase0": {
    eyebrow: "DISCOVERY / PHASE 0",
    headline: "You can't manage what you can't see.",
    lead: "Infodot discovers your IT environment before changes begin — creating the visibility and baseline needed to manage it properly.",
  },
  "email-migration": {
    eyebrow: "EMAIL MIGRATION",
    headline: "Email migration shouldn't mean business disruption.",
    lead: "Infodot plans and executes the migration with controlled cutover, data validation and minimal disruption to users.",
  },
  "domain-migration": {
    eyebrow: "DOMAIN & DNS MIGRATION",
    headline: "Your domain is too important to get wrong.",
    lead: "Infodot manages the transfer, DNS configuration and validation so your domain changes happen cleanly and securely.",
  },
};

export const getServiceHeroCopy = (slug: string, fallbackTitle: string): ServiceHeroCopy =>
  serviceHeroCopy[slug] ?? { eyebrow: fallbackTitle, headline: fallbackTitle };
