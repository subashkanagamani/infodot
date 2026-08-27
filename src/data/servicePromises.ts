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
  /** Editorial lead paragraph shown under the pain chips */
  lead?: string;
}

export const serviceHeroCopy: Record<string, ServiceHeroCopy> = {
  "managed-it": {
    eyebrow: "MANAGED · RUN YOUR IT",
    headline: "We run your IT completely — so it never breaks your business.",
    lead: "Fully Managed IT: we run your complete IT function, delivered remotely and evidenced monthly. One team, one point of accountability.",
  },
  "helpdesk-it-operations": {
    eyebrow: "MANAGED · RUN YOUR IT",
    headline: "One number for everything IT. Answered by people who know you.",
    lead: "A single tracked channel for every request and incident — ticketed, owned, and driven to resolution against agreed response times, by named engineers who know your environment.",
  },
  "co-managed-it": {
    eyebrow: "HOW YOU BUY",
    headline: "Start alongside your team. Or hand us the lot.",
    lead: "Co-Managed IT: we run the security and operations layer alongside your in-house team, with a clear who-owns-what matrix. Most clients start here.",
  },
  "microsoft365-google-workspace": {
    eyebrow: "MANAGED · RUN YOUR IT",
    headline: "Your whole productivity platform — run and secured.",
    lead: "Full administration of your Microsoft 365 or Google Workspace tenant — email, files, identity, collaboration and licensing — operated inside your own environment.",
  },
  "rmm-patch-management": {
    eyebrow: "MANAGED · RUN YOUR IT",
    headline: "Every device watched. Every patch applied. Without anyone remembering to.",
    lead: "Continuous remote monitoring of every Windows and macOS device, with operating-system and application security updates detected and deployed automatically.",
  },
  "asset-licence-domain": {
    eyebrow: "MANAGED · RUN YOUR IT",
    headline: "Know exactly what you own, and when it renews.",
    lead: "A live register of every device, software licence, subscription, domain and DNS record — with renewals visible so nothing lapses by surprise.",
  },
  "backup-disaster-recovery": {
    eyebrow: "SECURE BY DEFAULT",
    headline: "Get your files back. Get your business back.",
    lead: "Monitored, tested backups plus a real disaster-recovery plan — so you can recover a deleted file or a whole business after ransomware or outage.",
  },
  "cloud-management": {
    eyebrow: "MANAGED · RUN YOUR IT",
    headline: "Your cloud, run well and kept secure.",
    lead: "Operation and hardening of your cloud environments — Microsoft 365, Azure and AWS — with cost, security and configuration kept under control.",
  },
  "device-lifecycle": {
    eyebrow: "MANAGED · RUN YOUR IT",
    headline: "From unboxing to wipe — the whole device life, managed.",
    lead: "Endpoint management across the full lifecycle — enrolment, configuration, encryption, compliance and secure retirement — for every managed device.",
  },
  "onboarding-exit": {
    eyebrow: "MANAGED · RUN YOUR IT",
    headline: "Joiners ready on day one. Leavers closed the same day.",
    lead: "A standard, secure process for people joining, moving and leaving — accounts, licences, devices and access provisioned and revoked cleanly and on time.",
  },
  "secure-by-default": {
    eyebrow: "SECURE BY DEFAULT",
    headline: "Security included, not sold back to you later.",
    lead: "The eleven security functions we run as standard — EDR, hardening, email security, identity and access, backup and DR, data protection, monitoring and IR, vulnerability management, pen testing, network security and security awareness.",
  },
  "managed-edr": {
    eyebrow: "SECURE BY DEFAULT",
    headline: "Detection and response — with people who act, not just alert.",
    lead: "Endpoint detection and response across every device, with our team triaging, isolating and remediating threats — not just forwarding you an alert.",
  },
  "it-hardening": {
    eyebrow: "SECURE BY DEFAULT",
    headline: "Close the doors before anyone tries them.",
    lead: "Security baselines applied to devices and email that shrink your attack surface — the configuration that stops the most common ways firms get breached.",
  },
  "email-security": {
    eyebrow: "SECURE BY DEFAULT",
    headline: "Stop the phish before it reaches the inbox.",
    lead: "Layered email protection — anti-phishing, anti-spam, authentication and safe-content controls — because email is still how most attacks arrive.",
  },
  "identity-access": {
    eyebrow: "SECURE BY DEFAULT",
    headline: "The right people in. Everyone else out. Provably.",
    lead: "Identity and access management built on MFA everywhere, least-privilege roles and controlled privileged access — the control that underpins everything else.",
  },
  "network-security": {
    eyebrow: "SECURE BY DEFAULT",
    headline: "Your network, monitored and hardened — remotely.",
    lead: "Remote monitoring, hardening and configuration of your cloud-managed or remotely-accessible network devices — firewall, VPN, DNS and Wi-Fi.",
  },
  "monitoring-incident-response": {
    eyebrow: "SECURE BY DEFAULT",
    headline: "See it early. Handle it calmly.",
    lead: "Centralised monitoring and a documented incident-response process, so security events are caught early and handled to a plan rather than in a panic.",
  },
  "penetration-testing-vapt": {
    eyebrow: "SECURE BY DEFAULT",
    headline: "Proof your defences hold — the report your buyers ask for.",
    lead: "Periodic offensive testing and vulnerability assessment — scoped, delivered and reported by us as the point-in-time assurance layer on top of continuous vulnerability management.",
  },
  "vulnerability-management": {
    eyebrow: "SECURE BY DEFAULT",
    headline: "Find the weaknesses on a cycle — and actually fix them.",
    lead: "Continuous vulnerability scanning with prioritised remediation, so weaknesses are found and closed on a managed cycle rather than discovered at the next audit.",
  },
  "security-awareness": {
    eyebrow: "SECURE BY DEFAULT",
    headline: "Turn your people from the risk into the first line.",
    lead: "Short, usable staff training and phishing simulation that reduce the human risk behind most breaches — without wasting anyone's afternoon.",
  },
  "cyber-essentials-readiness": {
    eyebrow: "ALWAYS AUDIT-READY",
    headline: "Certified to Cyber Essentials — and kept that way.",
    lead: "We get you ready for Cyber Essentials and Cyber Essentials Plus to the current v3.3 requirements, and keep the controls in place year-round so recertification isn't a scramble.",
  },
  "cyber-insurance-readiness": {
    eyebrow: "ALWAYS AUDIT-READY · CYBER INSURANCE READINESS",
    headline: "Insurers don't just want the controls. They want proof they stayed on.",
    lead: "Cyber cover is now underwritten on controls you attest to and must maintain continuously. We keep those controls enforced and evidenced through the year, so when a claim is investigated your answers were true and provable.",
  },
  "always-audit-ready": {
    eyebrow: "ALWAYS AUDIT-READY",
    headline: "Do it once and leave? That's what fails audits and claims.",
    lead: "The controls we run are kept enforced and captured as evidence every month, with drift alerts when something slips — so audits and insurance claims are a confirmation, not a fire drill.",
  },
  "iso27001-soc2-evidence": {
    eyebrow: "ALWAYS AUDIT-READY",
    headline: "Make the audit a formality.",
    lead: "Continuous control operation and evidence collection so your ISO 27001 or SOC 2 audit is a confirmation, not a fire drill — with certification through an accredited body.",
  },
  "gdpr-data-protection": {
    eyebrow: "ALWAYS AUDIT-READY",
    headline: "GDPR handled as an operating discipline, not a policy PDF.",
    lead: "The day-to-day operation of data protection — the agreement, the register, the requests and the breach process — kept current, not filed and forgotten.",
  },
  "fca-operational-resilience": {
    eyebrow: "ALWAYS AUDIT-READY",
    headline: "For the FCA's new third-party rules — be the supplier that's ready.",
    lead: "Support for financial firms preparing for the FCA's operational-resilience and third-party reporting rules — mapping, evidence and exit planning for the services we provide you.",
  },
  "it-transition-exit": {
    eyebrow: "SWITCH · PROJECTS & MIGRATIONS",
    headline: "Change provider without the disruption — and never be trapped again.",
    lead: "A structured, low-disruption switch from your incumbent, with knowledge captured and your environment hardened as we take over — and a documented exit whenever you eventually leave.",
  },
  "discovery-phase0": {
    eyebrow: "SWITCH · PROJECTS & MIGRATIONS",
    headline: "Know exactly what you've got before anyone touches it.",
    lead: "A one-time discovery, knowledge transfer and documentation phase that establishes a complete, accurate picture of your environment and brings it cleanly under your control.",
  },
  "email-migration": {
    eyebrow: "SWITCH · PROJECTS & MIGRATIONS",
    headline: "Move email without losing a message.",
    lead: "Planned, fixed-fee email migration — tenant-to-tenant, Exchange to Microsoft 365, or between Microsoft 365 and Google Workspace — executed with no data lost and minimal disruption.",
  },
  "domain-migration": {
    eyebrow: "SWITCH · PROJECTS & MIGRATIONS",
    headline: "Take back control of your domain — cleanly.",
    lead: "A one-time project to move your domain and DNS into your own control, correctly configured, distinct from the ongoing domain management we provide thereafter.",
  },
};

export const getServiceHeroCopy = (slug: string, fallbackTitle: string): ServiceHeroCopy =>
  serviceHeroCopy[slug] ?? { eyebrow: fallbackTitle, headline: fallbackTitle };
