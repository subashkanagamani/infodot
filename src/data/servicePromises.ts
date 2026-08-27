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
    eyebrow: "Fully Managed IT",
    headline: "IT that just works.",
    lead: "One accountable team running your helpdesk, devices, cloud and security to a written standard — so problems get fixed once, not raised again every month.",
  },
  "helpdesk-it-operations": {
    eyebrow: "Helpdesk & IT Operations",
    headline: "Help that actually answers.",
    lead: "A named UK-hours service desk with published response targets, so your people stop chasing tickets and start getting answers the first time they ask.",
  },
  "co-managed-it": {
    eyebrow: "Co-Managed IT",
    headline: "Extend your IT team.",
    lead: "We take the tooling, patching, monitoring and out-of-hours load off your internal team, so they can spend their time on the projects only they can do.",
  },
  "microsoft365-google-workspace": {
    eyebrow: "Cloud Workspace",
    headline: "Your cloud, properly configured.",
    lead: "Microsoft 365 and Google Workspace built to a hardened baseline — licensing tidied, sharing controlled, admin access documented and reviewed every quarter.",
  },
  "rmm-patch-management": {
    eyebrow: "Monitoring & Patch Management",
    headline: "Patched before it bites.",
    lead: "Continuous monitoring and a measured patch cycle across every device, with monthly compliance reporting that shows exactly what was updated and what was not.",
  },
  "asset-licence-domain": {
    eyebrow: "Asset, Licence & Domain",
    headline: "Know what you own.",
    lead: "A single maintained register of hardware, software licences, domains and renewals — so nothing lapses quietly and nothing is paid for twice.",
  },
  "backup-disaster-recovery": {
    eyebrow: "Backup & Disaster Recovery",
    headline: "Restores you can prove.",
    lead: "Backups aren't the point — restores are. We test recovery on a schedule and give you the evidence, with recovery targets agreed in writing before you need them.",
  },
  "cloud-management": {
    eyebrow: "Cloud Management",
    headline: "Cloud, under control.",
    lead: "Your tenancy, your data, our discipline: cost, capacity, access and configuration reviewed continuously instead of drifting between projects.",
  },
  "device-lifecycle": {
    eyebrow: "Device Lifecycle",
    headline: "Every device accounted for.",
    lead: "From procurement and enrolment to refresh and secure disposal — each device tracked, encrypted, managed and wiped with a record you can hand to an auditor.",
  },
  "onboarding-exit": {
    eyebrow: "Onboarding & Exit",
    headline: "Access on day one, gone on day last.",
    lead: "A repeatable joiner-mover-leaver process so new starters are productive immediately and every leaver's access is removed and evidenced the same day.",
  },
  "secure-by-default": {
    eyebrow: "Secure by Default",
    headline: "Security isn't an upgrade.",
    lead: "MFA, encryption, least privilege and hardened baselines are included in how we run your IT — not sold back to you later as a separate security package.",
  },
  "managed-edr": {
    eyebrow: "Managed EDR",
    headline: "Someone actually responds.",
    lead: "Endpoint detection backed by humans who triage, isolate and contain — so an alert at 2am becomes a handled incident, not a dashboard nobody was watching.",
  },
  "it-hardening": {
    eyebrow: "IT Hardening",
    headline: "Close the door first.",
    lead: "We remove the easy routes in — legacy protocols, standing admin rights, open ports and default settings — and document the baseline every device is held to.",
  },
  "email-security": {
    eyebrow: "Email Security",
    headline: "Stop it before the inbox.",
    lead: "Layered filtering with SPF, DKIM and DMARC enforced properly, so impersonation and invoice fraud are blocked at the gateway rather than caught by a busy person.",
  },
  "identity-access": {
    eyebrow: "Identity & Access",
    headline: "Prove who has access.",
    lead: "Conditional access, MFA and quarterly access reviews across every system — with a report that answers 'who can see this?' without a week of investigation.",
  },
  "network-security": {
    eyebrow: "Network Security",
    headline: "Watched, every day.",
    lead: "Firewalls, segmentation, VPN and Wi-Fi configured to a standard and monitored continuously, with change control so the network stops drifting over time.",
  },
  "monitoring-incident-response": {
    eyebrow: "Monitoring & Incident Response",
    headline: "Caught early, handled calmly.",
    lead: "Continuous monitoring with a rehearsed response plan and named escalation path — so incidents follow a process, not a panic, and end with a written post-incident review.",
  },
  "penetration-testing-vapt": {
    eyebrow: "Penetration Testing & VAPT",
    headline: "The report buyers ask for.",
    lead: "Independent testing with a clear risk-rated report and a remediation plan we can actually deliver — the evidence your clients, insurers and auditors keep requesting.",
  },
  "vulnerability-management": {
    eyebrow: "Vulnerability Management",
    headline: "Found, fixed, evidenced.",
    lead: "Regular scanning across devices, servers and cloud, with fixes tracked to closure and a monthly report showing the trend rather than a one-off snapshot.",
  },
  "security-awareness": {
    eyebrow: "Security Awareness Training",
    headline: "Make people the control.",
    lead: "Short, regular training and simulated phishing with per-team results — so awareness becomes a measurable control you can show, not an annual slide deck.",
  },
  "cyber-essentials-readiness": {
    eyebrow: "Cyber Essentials Readiness",
    headline: "Pass first time.",
    lead: "We close the gaps against the five controls, prepare the evidence and walk the submission with you — so certification is a formality, not a scramble.",
  },
  "cyber-insurance-readiness": {
    eyebrow: "Cyber Insurance Readiness",
    headline: "Answer the insurer honestly.",
    lead: "We map your controls to the questions insurers actually ask, fix what's missing, and give you the evidence — so your policy holds when you need to claim on it.",
  },
  "always-audit-ready": {
    eyebrow: "Always Audit-Ready",
    headline: "Evidence, continuously.",
    lead: "Logs, reviews, registers and reports produced as a by-product of normal operations — so audit season is a download, not a project.",
  },
  "iso27001-soc2-evidence": {
    eyebrow: "ISO 27001 & SOC 2 Evidence",
    headline: "Make the audit a formality.",
    lead: "Monthly audit evidence and quarterly management review, generated as a by-product of how we run your IT — not assembled the week before an auditor calls.",
  },
  "gdpr-data-protection": {
    eyebrow: "GDPR & Data Protection",
    headline: "GDPR as an operating discipline.",
    lead: "Data mapping, retention, access control and breach process built into day-to-day IT — so your privacy position is demonstrable, not a policy document nobody follows.",
  },
  "fca-operational-resilience": {
    eyebrow: "FCA Operational Resilience",
    headline: "Resilience you can evidence.",
    lead: "Important business services identified, impact tolerances set and tested, third parties mapped — documented the way a regulator expects to read it.",
  },
  "it-transition-exit": {
    eyebrow: "IT Transition & Exit",
    headline: "Switch without the drama.",
    lead: "A planned handover with documented admin access, tenancy ownership and a rollback path — so changing provider costs you a weekend, not a quarter.",
  },
  "discovery-phase0": {
    eyebrow: "Discovery — Phase 0",
    headline: "See it before you change it.",
    lead: "A fixed-scope review of your estate, risks and licensing that ends with a prioritised plan and costs — so you decide with facts instead of a sales pitch.",
  },
  "email-migration": {
    eyebrow: "Email Migration",
    headline: "Migrated before anyone notices.",
    lead: "Mailboxes, calendars and shared access moved with a rehearsed cutover and coexistence plan — no lost mail, no weekend-long outage, no reconfiguring every laptop by hand.",
  },
  "domain-migration": {
    eyebrow: "Domain & DNS Migration",
    headline: "No surprise downtime.",
    lead: "DNS, domains and mail records transferred with records audited and TTLs staged in advance — so nothing goes dark halfway through the change window.",
  },

};

export const getServiceHeroCopy = (slug: string, fallbackTitle: string): ServiceHeroCopy =>
  serviceHeroCopy[slug] ?? { eyebrow: fallbackTitle, headline: fallbackTitle };
