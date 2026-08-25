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
    pains: ["Late detection", "No response plan", "Unclear escalation"],
    promise: "Someone is watching — and someone answers when it matters.",
    awareness: "Fast reporting beats late detection — how and when your people escalate.",
  },
  "penetration-testing-vapt": {
    pains: ["Unknown weaknesses", "Untested defences", "Audit pressure"],
    promise: "Findings you can fix — with retesting to prove it's closed.",
    awareness: "Testers exploit people first — phishing, pretexting, physical access.",
  },
  "vulnerability-management": {
    pains: ["Growing exposure", "No prioritisation", "Slow remediation"],
    promise: "Vulnerabilities ranked by risk and closed on a schedule.",
    awareness: "Unsupported apps and shadow IT start with users — installs, plugins, browsers.",
  },
  "security-awareness": {
    pains: ["Human error", "Repeat phishing clicks", "Untracked training"],
    promise: "Training your people actually finish — with evidence you can show.",
    awareness: "Simulations, micro-training and reporting habits that stick.",
  },
  "cyber-essentials-readiness": {
    pains: ["Failed self-assessment", "Unclear scope", "Evidence gaps"],
    promise: "Certification-ready controls, mapped and evidenced before you apply.",
    awareness: "Certification expects trained users — awareness is part of the scope.",
  },
  "cyber-insurance-readiness": {
    pains: ["Declined claims", "Higher premiums", "Unmet control requirements"],
    promise: "Meet insurer control requirements before a claim tests them.",
    awareness: "Insurers ask about awareness training — we can prove yours.",
  },
  "always-audit-ready": {
    pains: ["Last-minute scrambles", "Missing evidence", "Manual reporting"],
    promise: "Evidence collected continuously — audits stop being a fire drill.",
    awareness: "Auditors ask for training records — kept current automatically.",
  },
  "iso27001-soc2-evidence": {
    pains: ["Control gaps", "Scattered evidence", "Auditor rework"],
    promise: "Every control mapped to evidence an auditor will accept.",
    awareness: "Awareness training is a named control — evidenced, not assumed.",
  },
  "gdpr-data-protection": {
    pains: ["Unclear data flows", "Offshore access concerns", "Breach exposure"],
    promise: "Your tenancy, your data — access controlled, logged and lawful.",
    awareness: "Data protection is a daily habit — sharing, retention, reporting.",
  },
  "fca-operational-resilience": {
    pains: ["Impact tolerance gaps", "Third-party risk", "Regulator scrutiny"],
    promise: "Important business services mapped, tested and defensible.",
    awareness: "Resilience depends on people knowing their part when systems fail.",
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
