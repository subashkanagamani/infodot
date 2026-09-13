import { ResourceDoc } from "./types";

export const resilienceDocs: ResourceDoc[] = [
  {
    slug: "data-security",
    kind: "pillar",
    eyebrow: "DATA SECURITY & PROTECTION",
    navLabel: "Data protection",
    title: "Data security: classify, encrypt and protect what matters",
    readTime: "6 min read",
    shortAnswer:
      "You can’t protect data you can’t see, so data security starts with finding it and knowing which of it actually matters. From there it’s a short list: encrypt it so it’s useless if it’s lost or stolen, control who can reach it, use Data Loss Prevention to stop it leaving by accident or on purpose, and keep only what you need for only as long as you need it. Most data breaches are ordinary data left in the open, not clever theft.",
    sections: [
      {
        heading: "First, find your data",
        paragraphs: [
          "Most businesses genuinely don’t know where their sensitive data lives — client records in an old shared drive, card details in an inbox, a spreadsheet of staff information on someone’s desktop. You can’t secure what you haven’t found, so the first real step is a look at where sensitive information actually sits and a simple sense of what’s high-value and what isn’t. That’s data classification, and it doesn’t need to be elaborate to be useful.",
        ],
      },
      {
        heading: "Then protect it",
        bullets: [
          {
            title: "Encryption",
            text: "— at rest (on disks and in storage) and in transit (as it moves), so intercepted or stolen data is unreadable.",
          },
          {
            title: "Access control",
            text: "— least privilege again: people reach the data their job needs, not the whole shared drive.",
          },
          {
            title: "Data Loss Prevention (DLP)",
            text: "— rules that spot and stop sensitive data leaving by email or upload, whether by mistake or by a departing employee.",
          },
          {
            title: "Retention and disposal",
            text: "— keep data only as long as there’s a reason to, and dispose of it securely. Data you don’t hold can’t be breached.",
          },
        ],
      },
    ],
    howWeHelp: {
      heading: "We help you find, classify and protect your data",
      body: "We help you locate and classify your sensitive data, apply encryption across devices and cloud, tighten who can reach what, set up practical DLP rules in Microsoft 365 or Google Workspace, and put sensible retention in place — so protection is built into how your data is handled, with evidence for auditors.",
    },
    obligations:
      "Data security is the core of UK GDPR and the DPDP Act — encryption, access control and retention are all expectations, not extras. It’s also the data security domain of the **NCSC 10 Steps** and central to **ISO 27001**.",
    faqs: [
      {
        question: "Isn’t our data already encrypted in Microsoft 365 / Google Workspace?",
        answer:
          "The platforms encrypt data in their storage, yes — but that doesn’t cover a laptop, a USB stick, or data emailed out. Device and end-to-end protections still need setting up.",
      },
      {
        question: "Do we really need DLP?",
        answer:
          "If you handle client, financial or personal data, it’s worth it — most leaks are accidental (wrong recipient, wrong attachment), and DLP catches exactly those.",
      },
    ],
    ctaHeading: "Do you know where your sensitive data actually is?",
    ctaText: "We’ll help you map it and show you where it’s exposed.",
    readNext: [
      { label: "Endpoint security: encryption and device protection", href: "/resources/endpoint-security" },
      { label: "Backup and recovery: surviving ransomware and deletion", href: "/resources/backup-and-recovery" },
    ],
    description:
      "Data security means finding your sensitive data, then encrypting, controlling access to and retaining it properly under UK GDPR and DPDP.",
    keywords: "data security, data classification, encryption, DLP, data protection, UK GDPR, DPDP Act",
  },
  {
    slug: "cloud-security",
    kind: "pillar",
    eyebrow: "CLOUD & SAAS SECURITY",
    navLabel: "Cloud & SaaS",
    title:
      "Cloud and SaaS security: Microsoft 365, Google Workspace and the shared-responsibility trap",
    readTime: "7 min read",
    shortAnswer:
      "Your business now runs on the cloud — Microsoft 365 or Google Workspace, plus a scattering of other apps — and the biggest cloud security mistake is assuming the provider secures all of it for you. They don’t. Under the shared-responsibility model they keep the platform running; securing your accounts, your settings and your data is your job. Cloud security means configuring those platforms properly, enforcing MFA, controlling which apps connect, and backing up what the provider won’t.",
    sections: [
      {
        heading: "The shared-responsibility trap",
        paragraphs: [
          "This is the single idea that catches businesses out. Microsoft and Google run resilient, well-defended platforms — but that covers their infrastructure, not your configuration, your users’ passwords, or your data. If you leave settings on defaults, skip MFA, or assume your files are backed up, that’s on your side of the line. Most cloud incidents aren’t the provider being breached; they’re a customer account taken over or a setting left open.",
        ],
      },
      {
        heading: "What cloud security actually involves",
        bullets: [
          {
            title: "Configure the platform properly",
            text: "— the security settings in Microsoft 365 and Google Workspace are extensive and mostly off or on defaults until someone tunes them.",
          },
          {
            title: "MFA on every account, without exception",
            text: "— the biggest single cloud protection.",
          },
          {
            title: "Control connected apps and “shadow IT”",
            text: "— the SaaS tools staff sign up for without telling anyone, quietly holding company data.",
          },
          {
            title: "Understand your posture",
            text: "— cloud security posture management (CSPM) continuously checks your settings against good practice.",
          },
          {
            title: "Back up your cloud data",
            text: "— because the provider doesn’t, the way most people assume (see the Backup guide).",
          },
        ],
      },
    ],
    howWeHelp: {
      heading: "We secure the cloud you already run on",
      body: "We configure Microsoft 365 or Google Workspace to a proper security baseline, enforce MFA, bring shadow SaaS under control, watch your posture for drift, and add the backup the provider leaves to you. You get far more protection from the platforms you already pay for — with your side of the shared-responsibility line actually covered.",
    },
    obligations:
      "Cloud configuration is a secure-configuration control under **Cyber Essentials**, and leaving cloud data unprotected or unbacked-up is a UK GDPR / DPDP Act and business-continuity risk. Cloud is where most of your regulated data now lives, so it’s where auditors look first.",
    faqs: [
      {
        question: "Isn’t the cloud more secure than our old office server?",
        answer:
          "The platform is well-defended, yes — but only your half of it. Weak passwords, default settings and no backup undo that quickly. Cloud can be very secure; it isn’t automatically so.",
      },
      {
        question: "What’s “shadow IT” and why does it matter?",
        answer:
          "It’s the apps staff adopt on their own — a file-sharing tool, an AI assistant — that now hold company data outside your control or oversight. It’s one of the most common quiet cloud risks.",
      },
    ],
    ctaHeading: "Want a health-check of your Microsoft 365 or Google Workspace?",
    ctaText:
      "We’ll review your settings, MFA, connected apps and backup, and show you what’s exposed.",
    readNext: [
      { label: "Is Microsoft 365’s built-in email security enough?", href: "/resources/email-security/microsoft-365-email-security" },
      { label: "Are my Microsoft 365 / Google files actually backed up?", href: "/resources/backup-and-recovery" },
    ],
    description:
      "Cloud security means configuring Microsoft 365 or Google Workspace properly, enforcing MFA and backing up what your provider won’t.",
    keywords: "cloud security, SaaS security, Microsoft 365 security, Google Workspace security, shared responsibility, CSPM",
  },
  {
    slug: "web-and-application-security",
    kind: "pillar",
    eyebrow: "WEB & APPLICATION SECURITY",
    navLabel: "Web & applications",
    title: "Website and application security for business",
    readTime: "5 min read",
    shortAnswer:
      "Your website and the applications you run are public-facing, which makes them a constant, automated target. Keeping them secure is mostly discipline: keep the software behind them patched and up to date, remove what you don’t use, put a web application firewall in front of anything that matters, and make sure whoever builds or hosts for you is doing the same. Most website compromises exploit an old, unpatched component, not a genius hacker.",
    sections: [
      {
        heading: "Why websites get hacked",
        paragraphs: [
          "The typical business-website compromise has nothing to do with your company specifically. Automated bots scan the whole internet for known weaknesses — an out-of-date plug-in, an unpatched content system — and exploit whatever they find. A neglected site is found and compromised on the strength of a vulnerability that’s been public, and fixable, for months.",
        ],
      },
      {
        heading: "What keeps them safe",
        bullets: [
          {
            title: "Patch relentlessly",
            text: "— the platform, the plug-ins, the components. This is the whole game for most sites.",
          },
          {
            title: "Reduce the surface",
            text: "— remove unused plug-ins, old sites and test pages that nobody maintains but attackers still find.",
          },
          {
            title: "A web application firewall (WAF)",
            text: "in front of important sites and apps, filtering malicious traffic before it lands.",
          },
          {
            title: "Hold your web supplier to account",
            text: "— know who is responsible for patching and security, because “the web company” often assumes you are, and you assume them.",
          },
        ],
      },
    ],
    howWeHelp: {
      heading: "We keep your web presence from becoming the way in",
      body: "We make sure the software behind your website and apps is patched and hardened, trim away the unused bits that create risk, put a WAF in front of what matters, and clarify who’s responsible for what with your web and hosting suppliers — so a neglected site doesn’t become your breach.",
    },
    obligations:
      "Application patching and secure configuration sit under **Cyber Essentials** and the **NCSC 10 Steps**; a compromised site that exposes customer data is a UK GDPR / DPDP Act incident.",
    faqs: [
      {
        question: "Our website is just a brochure — is it really a risk?",
        answer:
          "Even a simple site, if compromised, can be defaced, used to serve malware to your visitors, or turned into a phishing page under your name. It’s worth keeping patched regardless.",
      },
    ],
    ctaHeading: "When was your website last patched?",
    ctaText:
      "We’ll review your site and applications for known weaknesses and unclear responsibilities.",
    readNext: [
      { label: "Cloud and SaaS security: the complete guide", href: "/resources/cloud-security" },
      { label: "Security monitoring: seeing attacks before they become breaches", href: "/resources/security-monitoring" },
    ],
    description:
      "Web and application security means relentless patching, a smaller attack surface, a WAF, and clear ownership with your web supplier.",
    keywords: "website security, application security, WAF, patching, web hosting security",
  },
  {
    slug: "backup-and-recovery",
    kind: "pillar",
    eyebrow: "BACKUP, RECOVERY & RESILIENCE",
    navLabel: "Backup & recovery",
    title: "Backup and recovery: surviving ransomware, deletion and disaster",
    readTime: "6 min read",
    shortAnswer:
      "Backup is the control that decides whether a ransomware attack or a bad mistake is a bad day or the end of the business. A good backup follows the 3-2-1 rule, includes at least one copy that can’t be altered or deleted (immutable), covers your cloud data as well as your servers, and — the part everyone skips — is actually tested by doing real restores. An untested backup isn’t a backup; it’s a hope.",
    sections: [
      {
        heading: "Why backup is really a ransomware control",
        paragraphs: [
          "Modern ransomware doesn’t just encrypt your live systems — it hunts for your backups first, because the criminals know that a business which can restore doesn’t pay. That’s why an immutable copy matters: one that, once written, cannot be changed or deleted by anyone, including an attacker with admin rights. It’s the difference between recovering on your own terms and negotiating with criminals.",
        ],
      },
      {
        heading: "What a real backup looks like",
        bullets: [
          {
            title: "3-2-1",
            text: "— three copies of your data, on two types of media, with one off-site.",
          },
          {
            title: "At least one immutable copy",
            text: "— unchangeable and undeletable, so ransomware can’t take it.",
          },
          {
            title: "Your cloud data included",
            text: "— Microsoft 365 and Google Workspace are your responsibility to back up, not theirs.",
          },
          {
            title: "Tested restores",
            text: "— regular, real recovery tests, because backups fail silently and you don’t want to discover that mid-crisis.",
          },
        ],
      },
    ],
    howWeHelp: {
      heading: "We make sure you can actually recover",
      body: "We set up backups that follow 3-2-1 with an immutable copy, cover your servers and your Microsoft 365 or Google Workspace data, monitor that every backup completes, and — crucially — run real restore tests so recovery is proven, not assumed. If the worst happens, you get your business back without paying a ransom.",
    },
    obligations:
      "Recoverability is a UK GDPR / DPDP Act expectation (availability of personal data) and a core part of business continuity; cyber-insurers now routinely ask about immutable backups and restore testing before they’ll cover you.",
    faqs: [
      {
        question: "Are our Microsoft 365 or Google files already backed up?",
        answer:
          "Not as a recoverable backup. The providers keep the service resilient and offer short retention, but recovering data after deletion, a compromise or ransomware months later is your responsibility — which is why a separate backup matters.",
      },
      {
        question: "How often should we test a restore?",
        answer:
          "Regularly — at least quarterly for important systems. A backup you’ve never restored from is an assumption, and assumptions fail at the worst moment.",
      },
    ],
    ctaHeading: "Could you recover from ransomware tomorrow?",
    ctaText:
      "We’ll review your backups for the 3-2-1 rule, immutability, cloud coverage and restore testing.",
    readNext: [
      { label: "Cloud and SaaS security: the complete guide", href: "/resources/cloud-security" },
      { label: "Incident response: what to do when it goes wrong", href: "/resources/incident-response" },
    ],
    description:
      "Backup and recovery decides whether ransomware or deletion is a bad day or the end of the business — 3-2-1, immutability and tested restores.",
    keywords: "backup and recovery, 3-2-1 backup, immutable backup, ransomware recovery, disaster recovery",
  },
  {
    slug: "security-monitoring",
    kind: "pillar",
    eyebrow: "SECURITY MONITORING & DETECTION",
    navLabel: "Monitoring & detection",
    title: "Security monitoring: seeing attacks before they become breaches",
    readTime: "6 min read",
    shortAnswer:
      "Prevention stops most attacks; monitoring catches the ones that get through — while they’re still an intrusion, not yet a breach. It means collecting logs from your systems, watching for the signs of an attacker moving around, scanning for weaknesses before they’re exploited, and having someone (or something) actually paying attention. The gap between “compromised” and “found out” is where the damage happens, and monitoring shrinks it.",
    sections: [
      {
        heading: "Why prevention alone isn’t enough",
        paragraphs: [
          "Even a well-defended business will, eventually, have something slip through — a clicked link, a new weakness, a valid-looking login. Attackers then tend to move quietly for days or weeks before acting. Without monitoring, that time is invisible; the first you know is when files are encrypted or money is gone. With it, the unusual login or the odd pattern gets spotted and stopped while it’s still small.",
        ],
      },
      {
        heading: "What monitoring involves",
        bullets: [
          {
            title: "Logging",
            text: "— collecting the records of what’s happening across your systems, so there’s something to look at.",
          },
          {
            title: "Detection",
            text: "— watching those logs and your endpoints for the behaviour that signals an attack; a SIEM does this at scale, though not every small business needs a full one.",
          },
          {
            title: "Vulnerability management",
            text: "— regularly scanning for known weaknesses and fixing them before they’re used.",
          },
          {
            title: "Someone watching",
            text: "— alerts only help if a person or service responds to them; that’s what a SOC provides, in-house or outsourced.",
          },
        ],
      },
    ],
    howWeHelp: {
      heading: "We watch, so an intrusion doesn’t become a breach",
      body: "We collect and monitor the right logs, run detection across your endpoints and cloud, scan regularly for weaknesses and get them fixed, and make sure alerts are acted on rather than ignored — right-sized to your business, not enterprise overkill. The quiet weeks attackers rely on stop being quiet.",
    },
    obligations:
      "Logging and monitoring is its own domain in the **NCSC 10 Steps**, supports **ISO 27001**, and evidence of monitoring and vulnerability management is increasingly asked for by insurers and in client due-diligence.",
    faqs: [
      {
        question: "Does a small business really need a SIEM or a SOC?",
        answer:
          "Not necessarily a full enterprise SIEM — but you do need detection and someone responding to it. That can be delivered in a right-sized, managed way rather than building your own security team.",
      },
    ],
    ctaHeading: "Would you know if someone was inside your systems right now?",
    ctaText:
      "We’ll review what you log, what you’d detect, and where the blind spots are.",
    readNext: [
      { label: "Incident response: what to do when it goes wrong", href: "/resources/incident-response" },
      { label: "Endpoint security: EDR and patching", href: "/resources/endpoint-security" },
    ],
    description:
      "Security monitoring catches attacks that slip past prevention — logging, detection, vulnerability management and someone watching.",
    keywords: "security monitoring, threat detection, SIEM, SOC, vulnerability management",
  },
  {
    slug: "incident-response",
    kind: "pillar",
    eyebrow: "INCIDENT RESPONSE & BREACH RECOVERY",
    navLabel: "Incident response",
    title: "Incident response: what to do when it goes wrong",
    readTime: "6 min read",
    shortAnswer:
      "How well you handle a cyber incident depends almost entirely on whether you decided what to do before it happened. A good response has four parts: contain it fast (isolate affected systems to stop the spread), understand what actually happened, recover from clean backups, and meet your reporting obligations. The businesses that come through well aren’t the lucky ones — they’re the ones with a plan and a number to call.",
    sections: [
      {
        heading: "The first hour matters most",
        paragraphs: [
          "In the opening stage of an attack, the instinct to “have a look around” or quietly fix it often makes things worse — tipping off the attacker, or destroying the evidence you’ll need. The right first moves are calm and defined: isolate the affected machines from the network, preserve what’s there rather than wiping it, and get the right people engaged. Knowing this in advance is the whole point of a plan.",
        ],
      },
      {
        heading: "What a workable plan contains",
        bullets: [
          {
            title: "Who does what",
            text: "— named roles and a single point of coordination, so it isn’t chaos.",
          },
          {
            title: "Who to call",
            text: "— your IT/security partner, and when to involve insurers, legal and the authorities.",
          },
          {
            title: "How to contain and recover",
            text: "— isolate, assess, restore from clean (immutable) backups.",
          },
          {
            title: "Your reporting duties",
            text: "— under UK GDPR, a reportable personal-data breach must reach the ICO within 72 hours; in India, DPDP and CERT-In timelines apply.",
          },
          {
            title: "A “should we pay?” position on ransomware",
            text: "— decided in the cold light of day, not under pressure.",
          },
        ],
      },
    ],
    howWeHelp: {
      heading: "We help you prepare — and we’re the number you call",
      body: "We help you put a straightforward incident-response plan in place, make sure you can recover from clean backups, and act as the team you call when something happens — containing it, working out what occurred, getting you back on clean systems, and helping you meet your reporting obligations. Preparation turns a potential catastrophe into a managed event.",
    },
    obligations:
      "Incident management is a domain of the **NCSC 10 Steps** and a requirement of **ISO 27001**; breach notification is a hard legal duty under UK GDPR (72 hours to the ICO) and the DPDP Act / CERT-In in India. Cyber-insurers expect an IR plan to exist.",
    faqs: [
      {
        question: "Should we ever pay a ransom?",
        answer:
          "The strong general advice is no — it funds crime, marks you as willing to pay, and often doesn’t fully restore your data. The real answer is to be recoverable from immutable backups so the question never has teeth. Decide your position in advance, with advice.",
      },
      {
        question: "We’re small — do we need a formal plan?",
        answer:
          "It doesn’t have to be long. Even a one-page plan — who to call, how to isolate, where the backups are, what to report — dramatically changes how a real incident goes.",
      },
    ],
    ctaHeading: "Would you know what to do in the first hour of an attack?",
    ctaText:
      "We’ll help you build a practical incident-response plan and pressure-test your recovery.",
    readNext: [
      { label: "Backup and recovery: surviving ransomware and deletion", href: "/resources/backup-and-recovery" },
      { label: "Governance and compliance: audits, evidence and staying insurable", href: "/resources/governance-and-compliance" },
    ],
    description:
      "Incident response means containing an attack fast, understanding it, recovering from clean backups and meeting your reporting duties.",
    keywords: "incident response, breach recovery, ransomware, ICO 72 hours, DPDP Act, CERT-In",
  },
];
