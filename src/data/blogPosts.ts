export type BlogCategory = "Managed IT" | "Cybersecurity" | "Compliance";

export interface BlogBlockSection {
  kind: "section";
  heading?: string;
  body?: string;
  points?: string[];
}

export interface BlogBlockCallout {
  kind: "callout";
  label: string;
  text: string;
}

export type BlogBlock = BlogBlockSection | BlogBlockCallout;

export interface BlogPost {
  slug: string;
  category: BlogCategory;
  title: string;
  excerpt: string;
  intro: string;
  blocks: BlogBlock[];
  howInfodot: string;
  ctaLine: string;
  links: { label: string; href: string }[];
  published: string;
  cornerstone?: boolean;
}

export const blogCategories: BlogCategory[] = ["Managed IT", "Cybersecurity", "Compliance"];

export const blogPosts: BlogPost[] = [
  {
    slug: "outsourcing-managed-it",
    category: "Managed IT",
    title: "What outsourcing your day-to-day IT to Infodot actually looks like",
    excerpt: "From discovering your whole IT estate to running it every day — with security and audit-readiness built in.",
    intro: "If you're weighing up handing your IT to a managed provider, here's exactly what that looks like with us — no jargon, three simple stages.",
    blocks: [
      {
        kind: "section",
        heading: "1 · We find everything first",
        body: "We deploy monitoring (RMM) to every device and build a complete picture — what you own, what's patched, what's protected, what's at risk. You get a plain-English report and a prioritised fix list. Nothing is scoped on guesswork.",
      },
      {
        kind: "section",
        heading: "2 · We run it, day to day",
        points: [
          "Helpdesk — a 30-minute first response in UK hours, and a real person to call.",
          "Patching & monitoring — kept current and watched 24/7 (UK by day, overnight cover behind it).",
          "Email & endpoints — secured, protected and backed by EDR and encryption.",
          "Onboarding & exit — new starters set up right on day one; leavers cleanly removed on their last.",
          "On-site needs — over 95% is remote; for physical work we coordinate your local vendor under one point of accountability.",
        ],
      },
      {
        kind: "section",
        heading: "3 · We keep you audit-ready",
        body: "Everything we do is logged, so your Cyber Essentials and GDPR evidence builds continuously — no scramble before an audit.",
      },
      {
        kind: "section",
        body: "Commercials: per-device monthly, quarterly in advance, two months' notice, no lock-in after 12 months — you own your domains, licences and data throughout.",
      },
    ],
    howInfodot: "",
    ctaLine: "Book a free IT & security assessment.",
    links: [
      { label: "Managed IT services", href: "/services/managed-it" },
      { label: "Resources hub", href: "/resources" },
    ],
    published: "2026-09-10",
  },
  {
    slug: "outgrown-ad-hoc-it-support",
    category: "Managed IT",
    title: "Signs your business has outgrown ad-hoc IT support",
    excerpt: "When the \"one person who fixes things\" or pay-as-you-break model starts costing more than it saves.",
    intro: "Most firms don't decide to get managed IT — they hit a moment where the old way stops working. If a few of these ring true, that moment has arrived.",
    blocks: [
      {
        kind: "section",
        heading: "The tell-tale signs",
        points: [
          "The same problems keep coming back, because nobody fixes the root cause — only the symptom.",
          "No one can actually tell you what devices, licences and accounts you have.",
          "Patching and backups are \"probably fine\" — but nobody can prove it.",
          "A leaver's account or laptop stayed active for weeks after they left.",
          "A client or insurer asked for Cyber Essentials or a security questionnaire, and you scrambled.",
          "IT only gets attention when something's already broken.",
        ],
      },
      {
        kind: "section",
        body: "Two or three of these mean you've outgrown reactive support. The cost isn't just the outages — it's the risk building quietly in the background, and the deals that stall when you can't prove your security.",
      },
      {
        kind: "callout",
        label: "The shift",
        text: "From firefighting to a managed estate: everything known, patched, protected and documented, before it becomes a problem.",
      },
    ],
    howInfodot: "We start with a full discovery of your estate, fix the baseline, then run it proactively — so problems are prevented, not chased.",
    ctaLine: "Book a free IT & security assessment — we'll show you what's really going on across your IT.",
    links: [{ label: "Managed IT services", href: "/services/managed-it" }],
    published: "2026-08-27",
  },
  {
    slug: "switching-it-providers",
    category: "Managed IT",
    title: "Switching IT providers: what a clean handover looks like",
    excerpt: "Changing IT support sounds risky. Done properly, it's calm and boring — which is exactly what you want.",
    intro: "The fear of a messy switch keeps firms stuck with providers they've outgrown. A good handover removes that risk. Here's what \"good\" looks like.",
    blocks: [
      {
        kind: "section",
        heading: "What a proper transition includes",
        points: [
          "Discovery first — we map your whole estate before we touch anything, so there are no surprises mid-move.",
          "A written plan — who does what, when, with no gap in day-to-day support.",
          "Ownership confirmed in your name — domains, Microsoft 365/Google tenant, licences and admin rights are yours, not the outgoing provider's.",
          "Knowledge transfer from the outgoing team — or a self-discovery model if they won't cooperate (it happens).",
          "A safety net for leaving us too — two months' notice, no lock-in, and a documented exit pack within 10 working days if you ever move on.",
        ],
      },
      {
        kind: "callout",
        label: "The real test",
        text: "The best sign of a good provider is how easy they make it to leave. That's why we put our exit terms in writing up front.",
      },
    ],
    howInfodot: "We've run hundreds of transitions. You get a calm, documented handover and control of your own IT from day one.",
    ctaLine: "Book a free IT & security assessment — and we'll map your switch before you commit to anything.",
    links: [{ label: "IT Transition & Exit", href: "/services/it-transition-exit" }],
    published: "2026-08-13",
  },
  {
    slug: "it-estate-secure-baseline",
    category: "Managed IT",
    title: "Getting your whole IT estate to a secure baseline",
    excerpt: "Domain, firewall, Microsoft 365, Google Workspace, endpoints — most arrive wide open. Hardening closes the doors you never use.",
    intro: "Kit and cloud services ship to be easy to set up, not secure — default passwords, extra features, permissive settings. Hardening is the cheap, high-value work of tightening them. A practical baseline:",
    blocks: [
      {
        kind: "section",
        heading: "The baseline checklist",
        points: [
          "Firewall — default admin password changed, remote management locked down, only the ports you need left open.",
          "Endpoints — everyday users are standard users (not local admins), disk encryption on, unused features off.",
          "Microsoft 365 / Google Workspace — security settings tuned off their permissive defaults; MFA enforced for everyone.",
          "Domain — registrar account locked with MFA; SPF, DKIM and DMARC set so no one can spoof you.",
          "Applied to a recognised standard — the CIS Benchmarks — and monitored for drift over time.",
        ],
      },
      {
        kind: "callout",
        label: "Engineer's note",
        text: "This is the Cyber Essentials \"Secure Configuration\" control almost verbatim. The two most-missed items: local-admin rights left on laptops, and that shiny new firewall still on admin/admin.",
      },
      {
        kind: "callout",
        label: "Audit evidence",
        text: "A documented, monitored baseline is exactly what a Cyber Essentials assessor (and a cyber-insurer) wants to see.",
      },
    ],
    howInfodot: "We harden the whole estate to a baseline and watch for drift — secure by default, evidence produced as we go.",
    ctaLine: "Book a free IT & security assessment — we'll show you what's still on its default settings.",
    links: [
      { label: "Secure configuration & hardening guide", href: "/resources/servers-and-infrastructure/secure-configuration-and-hardening" },
      { label: "IT Hardening service", href: "/services/it-hardening" },
    ],
    published: "2026-07-30",
  },
  {
    slug: "endpoint-is-the-pain-point",
    category: "Managed IT",
    title: "Endpoint is the pain point",
    excerpt: "Why your laptops and devices cause most of your IT, security and audit headaches — and how to turn that around.",
    intro: "If you want to know where a business's IT really succeeds or fails, look at the endpoint — the laptops, desktops and phones your people use. It's the one place three problems collide at once.",
    blocks: [
      {
        kind: "section",
        heading: "Why the endpoint hurts the most",
        points: [
          "Most support tickets are endpoint problems — a slow laptop, a printer, a login.",
          "Most breaches start on an endpoint — a phished user, an unpatched machine, a lost device.",
          "Most Cyber Essentials evidence is endpoint state — patching, malware protection, encryption, configuration.",
        ],
      },
      {
        kind: "section",
        body: "So a neglected device estate isn't one problem — it's an operational headache, a security hole and an audit failure, all at the same time.",
      },
      {
        kind: "section",
        heading: "Turning the pain point into your strongest asset",
        points: [
          "Central visibility — monitoring (RMM) on every device, so nothing is unknown.",
          "Automated, tested patching, and EDR + encryption switched on by default.",
          "Managed onboarding (set up right) and offboarding (wiped, accounts closed).",
          "Every device known, patched, protected and accounted for.",
        ],
      },
    ],
    howInfodot: "We bring every endpoint under proper management — so your worst pain point becomes your best-evidenced, best-run asset.",
    ctaLine: "Book a free IT & security assessment — starting with a full picture of your device estate.",
    links: [
      { label: "Endpoint security guide", href: "/resources/endpoint-security" },
      { label: "Device Lifecycle service", href: "/services/device-lifecycle" },
    ],
    published: "2026-07-16",
  },
  {
    slug: "endpoint-security-audit-evidence",
    category: "Cybersecurity",
    title: "Endpoint security that doubles as audit evidence",
    excerpt: "The device controls that stop attacks — and quietly produce the proof auditors and insurers ask for.",
    intro: "Securing your endpoints isn't only protection. Done properly, it generates your Cyber Essentials and GDPR evidence automatically. Here's what to have — and the evidence each control leaves behind.",
    blocks: [
      {
        kind: "section",
        heading: "What to have — and what it proves",
        points: [
          "EDR, not just antivirus → threat-detection records that show you're monitored.",
          "Disk encryption (BitLocker / FileVault) → an encryption-status report; a lost laptop is an inconvenience, not a reportable breach.",
          "Current patching → a patch-compliance report (Cyber Essentials wants critical patches applied within 14 days).",
          "Standard users, no local admin → access evidence, and it stops most malware installing.",
          "Central monitoring (RMM) → the single log that ties all of the above together.",
        ],
      },
      {
        kind: "callout",
        label: "Engineer's note",
        text: "EDR earns its place over antivirus on behaviour-based detection and ransomware rollback — the attacks signature AV misses.",
      },
      {
        kind: "callout",
        label: "Audit evidence",
        text: "Because it's logged as it runs, your security posture is your audit pack. Nothing to assemble the week before an assessment.",
      },
    ],
    howInfodot: "We deploy and monitor all of this across your fleet, and keep the evidence current.",
    ctaLine: "Book a free IT & security assessment — we'll check patch, encryption and EDR coverage on every device.",
    links: [{ label: "Endpoint security guide", href: "/resources/endpoint-security" }],
    published: "2026-07-02",
  },
  {
    slug: "email-security-phishing-spoofing",
    category: "Cybersecurity",
    title: "Email security: stopping phishing and spoofing — and proving it",
    excerpt: "Almost every attack arrives by email. Three layers keep the door shut, and each one leaves evidence.",
    intro: "Email is the front door attackers actually use — a convincing message to one of your people. It isn't one setting; it's three layers working together.",
    blocks: [
      {
        kind: "section",
        heading: "The three layers that matter",
        points: [
          "A tuned mail filter (not the out-of-the-box default) → removes the bulk of malicious mail; filtering reports show it.",
          "SPF, DKIM and DMARC on your domain → stops criminals sending as you; DMARC reports show who tries.",
          "MFA on every mailbox → a stolen password on its own gets nobody in.",
          "Short staff training + easy reporting → catches the few that slip through.",
        ],
      },
      {
        kind: "callout",
        label: "Engineer's note",
        text: "Roll DMARC from p=none → quarantine → reject in stages, watching the reports, so you never block your own invoices mid-rollout.",
      },
      {
        kind: "callout",
        label: "Audit evidence",
        text: "Filtering logs, DMARC reports and MFA status are precisely what Cyber Essentials and cyber-insurers ask about.",
      },
    ],
    howInfodot: "We configure all of it without breaking your legitimate mail, and keep it working as threats change.",
    ctaLine: "Book a free IT & security assessment — we'll show you what a stranger could send in your name today.",
    links: [
      { label: "Email security guide", href: "/resources/email-security" },
      { label: "Email Security service", href: "/services/email-security" },
    ],
    published: "2026-06-18",
  },
  {
    slug: "email-data-leak-dlp",
    category: "Cybersecurity",
    title: "Email is your biggest data-leak risk",
    excerpt: "Attacks come in by email. Data leaks out by email — usually by accident. Here's how to stop the leak.",
    intro: "Everyone worries about phishing coming in. The quieter, more common problem is sensitive information going out — and it's rarely malicious.",
    blocks: [
      {
        kind: "section",
        heading: "How data actually leaks",
        points: [
          "The wrong attachment on a hurried \"reply-all\".",
          "A client or patient list emailed to a personal account by someone about to leave.",
          "Sensitive files forwarded home \"to work on later\".",
        ],
      },
      {
        kind: "section",
        heading: "How to stop it",
        points: [
          "Data Loss Prevention (DLP) rules that spot sensitive data — client records, card or health data — and block or flag it before it leaves.",
          "Encryption for sensitive messages; restrict auto-forwarding to external addresses.",
          "Tie it to offboarding — revoke access the day someone leaves, not a week later.",
        ],
      },
      {
        kind: "callout",
        label: "Engineer's note",
        text: "Start with the built-in DLP templates in Microsoft 365 / Google Workspace, tune them to your real data types, and log every incident.",
      },
      {
        kind: "callout",
        label: "Audit evidence",
        text: "DLP records are direct GDPR (and CQC) proof that you control where personal data goes.",
      },
    ],
    howInfodot: "We set up practical DLP and monitor it — so one careless click doesn't become a reportable breach.",
    ctaLine: "Book a free IT & security assessment.",
    links: [
      { label: "Email security guide", href: "/resources/email-security" },
      { label: "Data security guide", href: "/resources/data-security" },
    ],
    published: "2026-06-04",
  },
  {
    slug: "protecting-business-data-gdpr",
    category: "Cybersecurity",
    title: "Protecting your business data: the evidence GDPR wants",
    excerpt: "You can't protect data you can't see. Find it, classify it, control it — and prove it.",
    intro: "Most data breaches are ordinary data left in the open, not clever theft. Protection starts with knowing where your sensitive information actually lives.",
    blocks: [
      {
        kind: "section",
        heading: "The practical order of work",
        points: [
          "Find it — where does sensitive data really sit? Old shared drives, inboxes, someone's desktop spreadsheet.",
          "Classify it — what's genuinely sensitive vs ordinary. Keep it simple; two or three levels is plenty.",
          "Encrypt it — at rest (on disks and storage) and in transit (as it moves).",
          "Control access — people reach what their job needs and no more (least privilege).",
          "Retain sensibly — keep only what you need, dispose of the rest securely. Data you don't hold can't leak.",
        ],
      },
      {
        kind: "callout",
        label: "Audit evidence",
        text: "A data map, access logs and retention records are the core of a GDPR review — produced as you run, not assembled in a panic.",
      },
    ],
    howInfodot: "We help you locate and classify your data, apply encryption and access controls, and keep the evidence current.",
    ctaLine: "Book a free IT & security assessment — starting with where your sensitive data actually is.",
    links: [
      { label: "Data security guide", href: "/resources/data-security" },
      { label: "GDPR & Data Protection service", href: "/services/gdpr-data-protection" },
    ],
    published: "2026-05-21",
  },
  {
    slug: "access-controls-mfa-audit-evidence",
    category: "Cybersecurity",
    title: "Who can get in: the access controls that are half your audit evidence",
    excerpt: "Most breaches today are logins, not break-ins. Control who gets in and you close the biggest gap — and pass Cyber Essentials' access control.",
    intro: "Your data lives in the cloud now, reachable from anywhere, so the login is the perimeter. These controls decide who reaches your systems — and they're a big chunk of your audit evidence.",
    blocks: [
      {
        kind: "section",
        heading: "The controls that carry the weight",
        points: [
          "MFA on every account — staff and admins, no exceptions. The single highest-impact control you can turn on.",
          "Least privilege — everyone (including IT) holds only the access their role needs.",
          "Separate, protected admin accounts — no everyday email and browsing on an admin login.",
          "No local admin on laptops — quietly stops most malware installing.",
          "Clean joiners and leavers — access granted on day one, fully revoked on the last day.",
        ],
      },
      {
        kind: "callout",
        label: "Engineer's note",
        text: "Enforce via Conditional Access, and turn on number-matching for MFA to defeat prompt-bombing / MFA fatigue.",
      },
      {
        kind: "callout",
        label: "Audit evidence",
        text: "MFA status, access reviews and leaver records are exactly what Cyber Essentials (user access control) and insurers ask to see.",
      },
    ],
    howInfodot: "We enforce MFA, set access around roles, protect admin accounts, and run joiners/leavers as a documented process.",
    ctaLine: "Book a free IT & security assessment — we'll flag every account without MFA and every leaver still active.",
    links: [
      { label: "Identity & access guide", href: "/resources/identity-and-access" },
      { label: "Identity & Access service", href: "/services/identity-access" },
    ],
    published: "2026-05-07",
  },
  {
    slug: "recover-from-ransomware-backup",
    category: "Cybersecurity",
    title: "Could your business recover from ransomware tomorrow?",
    excerpt: "Backup is the control that decides whether an attack is a bad day or the end of the business.",
    intro: "Modern ransomware doesn't just lock your live systems — it hunts down your backups first, because criminals know a business that can restore won't pay. Here's what a backup that actually saves you looks like.",
    blocks: [
      {
        kind: "section",
        heading: "What a real backup looks like",
        points: [
          "3-2-1 — three copies of your data, on two types of media, with one off-site.",
          "At least one immutable copy — once written it can't be changed or deleted, even by an attacker who has admin rights.",
          "Your cloud included — Microsoft 365 and Google Workspace are yours to back up, not the provider's.",
          "Tested restores — a backup you've never restored from is a hope, not a plan. Backups fail silently.",
        ],
      },
      {
        kind: "callout",
        label: "Engineer's note",
        text: "Immutability (object-lock or air-gapped) is the single line item that defeats ransomware. Test a real restore at least quarterly — the day of an attack is the wrong time to discover a broken backup.",
      },
      {
        kind: "callout",
        label: "Audit evidence",
        text: "Recoverability is a GDPR expectation and a standard cyber-insurance question; your restore-test records are the proof.",
      },
    ],
    howInfodot: "We set up 3-2-1 with an immutable copy, cover your servers and cloud, monitor every backup, and run real restore tests — so you recover on your terms, not the criminals'.",
    ctaLine: "Book a free IT & security assessment — we'll tell you honestly whether you could recover tomorrow.",
    links: [
      { label: "Backup & recovery guide", href: "/resources/backup-and-recovery" },
      { label: "Backup & DR service", href: "/services/backup-disaster-recovery" },
    ],
    published: "2026-04-23",
  },
  {
    slug: "microsoft-365-security-checklist",
    category: "Cybersecurity",
    title: "Is your Microsoft 365 as secure as you think?",
    excerpt: "It runs your email, files and identities — and it's almost always left on default settings.",
    intro: "Microsoft keeps the platform running; securing your settings, accounts and data is your side of the deal — and most businesses never tune it. The settings most often left undone:",
    blocks: [
      {
        kind: "section",
        heading: "The Microsoft 365 checklist",
        points: [
          "MFA enforced on every account — the single biggest fix, and often the one that's half-done.",
          "Anti-phishing and impersonation protection turned on and tuned — not left on the broad default.",
          "Legacy authentication blocked, and Conditional Access set for risky or unusual sign-ins.",
          "A separate backup of your mailboxes and files — Microsoft does not do this the way people assume.",
          "Admin accounts separated and protected; audit logging switched on.",
        ],
      },
      {
        kind: "callout",
        label: "Engineer's note",
        text: "Check your Microsoft Secure Score, and block legacy authentication first — it's the quiet hole most account takeovers still walk through.",
      },
      {
        kind: "callout",
        label: "Audit evidence",
        text: "Your M365 configuration and MFA coverage are core Cyber Essentials evidence (secure configuration, user access control).",
      },
    ],
    howInfodot: "We harden your tenant to a proper baseline, enforce MFA, tune the protection you already pay for, and add the backup Microsoft leaves to you.",
    ctaLine: "Book a free IT & security assessment — we'll review your tenant and show you what's exposed.",
    links: [
      { label: "Cloud security guide", href: "/resources/cloud-security" },
      { label: "Microsoft 365 / Workspace service", href: "/services/microsoft365-google-workspace" },
    ],
    published: "2026-04-09",
  },
  {
    slug: "how-to-get-cyber-essentials-certified",
    category: "Compliance",
    title: "How to get Cyber Essentials certified: the five controls",
    excerpt: "The UK security baseline most clients now ask for — what it covers, and how to actually pass.",
    intro: "Cyber Essentials is a UK government-backed certification that proves you have the security basics in place. It's often what a client or contract is demanding. Here's what it checks and how to get there.",
    cornerstone: true,
    blocks: [
      {
        kind: "section",
        heading: "The five controls",
        points: [
          "Firewalls — your perimeter protected, default passwords changed.",
          "Secure configuration — systems hardened, unnecessary features and accounts removed.",
          "User access control — MFA, least privilege, prompt removal of leavers.",
          "Malware protection — antivirus or EDR on every device.",
          "Security update management — critical patches applied within 14 days.",
        ],
      },
      {
        kind: "section",
        heading: "How you get certified",
        body: "Assess against the five controls → close the gaps → complete the self-assessment (Cyber Essentials) or a hands-on technical audit (Cyber Essentials Plus) → receive your badge, valuable in enterprise procurement.",
      },
      {
        kind: "callout",
        label: "Good to know",
        text: "Infodot gets you ready and manages the controls day-to-day; the certificate itself is issued by an accredited certification body — we're not the assessor.",
      },
    ],
    howInfodot: "We run the five controls as part of managed IT and prepare the evidence pack, so certification is a formality, not a project.",
    ctaLine: "Book a free IT & security assessment — we'll show you the gaps a Cyber Essentials assessor would find today.",
    links: [
      { label: "Governance & compliance guides", href: "/resources/governance-and-compliance" },
      { label: "Cyber Essentials Readiness service", href: "/services/cyber-essentials-readiness" },
    ],
    published: "2026-03-26",
  },
  {
    slug: "always-audit-ready-evidence",
    category: "Compliance",
    title: "Always audit-ready: the evidence auditors, insurers and clients ask to see",
    excerpt: "\"Audit-ready\" isn't a project you scramble through each year. It's a by-product of running IT properly.",
    intro: "Whether it's Cyber Essentials, GDPR, a cyber-insurer or a client's security questionnaire, they all ask the same thing: show me. Here's what \"show me\" actually means — and it's the same short list every time.",
    blocks: [
      {
        kind: "section",
        heading: "The evidence they want",
        points: [
          "Access — who can reach what, MFA status, and records of leavers removed.",
          "Patching — current patch-compliance reports across your devices.",
          "Backups — that they exist, can't be tampered with, and restores are actually tested.",
          "Endpoint security — EDR and encryption status on every machine.",
          "Policies — a small set that people actually follow and have signed.",
          "Data — what you hold, where it lives, and who can access it.",
        ],
      },
      {
        kind: "section",
        body: "If that evidence is produced automatically as your IT runs, audits and questionnaires are calm — a send, not a scramble. If it has to be assembled from scratch each time, they're slow, painful, and they stall your deals.",
      },
    ],
    howInfodot: "We run your IT so this evidence builds continuously — ready to hand to any auditor, insurer or client on request.",
    ctaLine: "Book a free IT & security assessment — we'll show you the evidence gaps a questionnaire would expose today.",
    links: [{ label: "Always Audit-Ready service", href: "/services/always-audit-ready" }],
    published: "2026-03-12",
  },
  {
    slug: "cyber-insurance-requirements",
    category: "Compliance",
    title: "What cyber insurers now require before they'll cover you",
    excerpt: "Cover is getting harder to get — and a claim can be refused if the controls weren't actually in place.",
    intro: "Insurers have been badly burned by ransomware, so they now demand specific security controls before they'll quote — and they check those controls were genuinely in place if you ever claim. The ones they ask about most:",
    blocks: [
      {
        kind: "section",
        heading: "What insurers look for",
        points: [
          "MFA on email, remote access and admin accounts — often a hard yes/no gate.",
          "Endpoint protection (EDR) across all devices.",
          "Tested, immutable backups you can recover from.",
          "A patching regime and a leaver process that are actually followed.",
          "Security awareness training and an incident-response plan.",
        ],
      },
      {
        kind: "callout",
        label: "Engineer's note",
        text: "The two fastest ways to be declined (or to have a claim disputed) are missing \"MFA everywhere\" and no immutable backup. Get those provably in place first.",
      },
      {
        kind: "callout",
        label: "The overlap",
        text: "This is the same evidence Cyber Essentials asks for. Getting insurable and getting certified are, in practice, the same job.",
      },
    ],
    howInfodot: "We put these controls in place and keep the evidence current, so you're insurable — and stay covered when it actually matters.",
    ctaLine: "Book a free IT & security assessment — we'll show you where an insurer would say no today.",
    links: [{ label: "Cyber Insurance Readiness service", href: "/services/cyber-insurance-readiness" }],
    published: "2026-02-26",
  },
  {
    slug: "pass-security-questionnaire",
    category: "Compliance",
    title: "How to pass a client security questionnaire without the panic",
    excerpt: "Every enterprise deal now comes with one. Here's how to answer it credibly — and win the work.",
    intro: "Your bigger clients are under their own regulation, so they push the scrutiny down to you: a security questionnaire (SIG, CAIQ, or their own spreadsheet) is now the gate between you and the contract. Firms that can evidence their hygiene win and keep the work; firms that can't quietly lose it. How to be ready:",
    blocks: [
      {
        kind: "section",
        heading: "How to be questionnaire-ready",
        points: [
          "Build one current evidence pack — access, patching, backups, policies, certifications — kept up to date, not reinvented for every deal.",
          "Get Cyber Essentials — it answers a large chunk of most questionnaires on its own.",
          "Have a signed DPA and a simple data map ready to share.",
          "Answer honestly and consistently — vendor-risk teams spot bluffing, and it costs you the deal.",
          "Turn next year's re-review into a send, not a rebuild.",
        ],
      },
      {
        kind: "callout",
        label: "Engineer's note",
        text: "Map your controls to the common frameworks once (ISO 27001 / Cyber Essentials), and most questionnaire questions answer themselves from that single mapping.",
      },
      {
        kind: "callout",
        label: "Audit evidence",
        text: "The questionnaire is an audit. The same evidence pack serves your clients, your insurer and your certification.",
      },
    ],
    howInfodot: "We run your estate to a demonstrable standard and keep the evidence pack current, so the review becomes a formality. We make you a low-risk supplier — we don't sign the attestation for you.",
    ctaLine: "Book a free IT & security assessment — we'll show you the gaps a client's questionnaire would find.",
    links: [{ label: "Supply-Chain Assurance", href: "/compliance/supply-chain-assurance" }],
    published: "2026-02-12",
  },
];

export const blogReadTime = (post: BlogPost): string => {
  const words = [
    post.title,
    post.excerpt,
    post.intro,
    post.howInfodot,
    ...post.blocks.flatMap((b) =>
      b.kind === "section" ? [b.heading ?? "", b.body ?? "", ...(b.points ?? [])] : [b.label, b.text],
    ),
  ]
    .join(" ")
    .split(/\s+/).length;
  return `${Math.max(2, Math.round(words / 200))} min read`;
};
