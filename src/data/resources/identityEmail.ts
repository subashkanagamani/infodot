import { ResourceDoc } from "./types";

export const identityEmailDocs: ResourceDoc[] = [
  {
    slug: "identity-and-access",
    kind: "pillar",
    eyebrow: "IDENTITY & ACCESS",
    navLabel: "Identity & access",
    title: "Identity and access: who can get into your systems, and how you keep control",
    readTime: "8 min read",
    shortAnswer:
      "Most break-ins today aren’t break-ins at all — they’re log-ins, using a password a criminal has phished, reused or simply bought. That makes identity the most important thing you control in security. Four things carry most of the weight: multi-factor authentication on every account, least-privilege access so people can only reach what they genuinely need, tight handling of admin accounts, and a clean process for the day someone joins and the day they leave. Get identity right and you’ve shut the door behind most modern attacks.",
    sections: [
      {
        heading: "Why identity is the new perimeter",
        paragraphs: [
          "There was a time when security was mostly about the office: a firewall at the edge, and everything valuable sitting safely inside it. That world has gone. Your email, your files and your line-of-business apps now live in Microsoft 365 or Google Workspace, reachable from any laptop or phone, anywhere. The thing standing between a stranger and all of it isn’t a firewall any more — it’s a login. Which is exactly why attackers have stopped trying to hack the wall and started trying to be you at the sign-in page.",
          "The everyday version of this is depressingly simple. A member of staff reuses a work password on some other website; that website is breached; the password turns up in a database criminals trade. Someone tries it against your email, there’s no second check, and now they’re reading your inbox, resetting your other accounts and watching for an invoice to redirect. No malware was involved. The login was the whole attack.",
        ],
      },
      {
        heading: "The controls that carry the weight",
        paragraphs: ["Identity security isn’t complicated, but it does have to be done consistently. These are the pieces that matter:"],
        bullets: [
          { title: "Multi-factor authentication (MFA), everywhere", text: "a second proof beyond the password, so a stolen password on its own gets nobody in. This is the big one." },
          { title: "Least privilege", text: "everyone can reach what their job needs and no more, so one compromised account exposes a corner of the business rather than all of it." },
          { title: "Careful handling of admin accounts", text: "the keys to the kingdom kept separate, protected and used only when needed." },
          { title: "Conditional / context-aware access", text: "sign-ins judged on where and how they happen, so an attempt from an odd place or an unmanaged device gets challenged or blocked." },
          { title: "A clean joiner and leaver process", text: "the right access on day one, and all of it gone on the last day." },
        ],
      },
      {
        heading: "Joiners, movers and leavers: the process that quietly breaks",
        paragraphs: [
          "The two moments identity most often goes wrong are the day someone arrives and the day they leave. Starters get set up in a rush and handed more access than they need “to save time later.” Leavers are worse: the resignation is known, the last day passes, and weeks later their account is still live, still licensed, still able to reach the files — because disabling it was nobody’s specific job. That dormant account is one of the most common ways a business is breached by someone who used to work there, or by an attacker who found a login that no one was watching any more. It deserves a proper process, not a mental note.",
        ],
      },
      {
        heading: "What good looks like",
        bullets: [
          { text: "MFA enforced on every account — staff and admins, no exceptions." },
          { text: "Everyday work done on standard accounts; admin rights separated and used only when needed." },
          { text: "Access granted by role, reviewed periodically, and trimmed when people change jobs." },
          { text: "A documented joiner/leaver process that provisions on day one and fully revokes on the last day." },
          { text: "Sign-in activity monitored, so unusual logins get noticed." },
        ],
      },
    ],
    howWeHelp: {
      heading: "We make identity the strong part of your security, not the soft spot",
      body: "We turn on and enforce MFA across Microsoft 365 or Google Workspace, set access up around roles so people have what they need and no more, separate and protect your admin accounts, and run joiners and leavers as a documented, repeatable process — so starters are productive on day one and leavers are fully off by the end of theirs. It’s part of how we run your IT, with the evidence your auditors and insurers expect.",
    },
    obligations:
      "Identity is the user access control pillar of **Cyber Essentials** outright, and access control and authentication are explicit requirements under **UK GDPR** (and the **DPDP Act** in India). MFA and a clean leaver process are also two of the first things cyber-insurers and client security questionnaires ask about — often as a yes/no that decides whether you’re covered.",
    faqs: [
      {
        question: "We’re small and everyone trusts each other — do we really need all this?",
        answer: "The controls aren’t about trust between colleagues; they’re about the stranger with a stolen password. A five-person firm and a fifty-person firm face the same automated attacks — identity controls are what make a stolen credential useless.",
      },
      {
        question: "Won’t MFA and access limits slow everyone down?",
        answer: "Barely. Modern MFA is a tap on a phone a couple of times a day, and least-privilege is invisible until someone tries to reach something they shouldn’t. The friction is tiny next to the cost of an account takeover.",
      },
      {
        question: "Where should we start?",
        answer: "MFA on email and admin accounts first, then a proper leaver process. Those two close the biggest gaps quickly.",
      },
    ],
    ctaHeading: "Not sure who can get into what?",
    ctaText: "We’ll review your accounts, admin rights, MFA coverage and leaver process, and show you the gaps plainly.",
    readNext: [
      { label: "Why is multi-factor authentication the most important control you can turn on?", href: "/resources/identity-and-access/multi-factor-authentication" },
      { label: "Passwords vs passkeys: what should we use now?", href: "/resources/identity-and-access/passwords-vs-passkeys" },
      { label: "Privileged access: why admin accounts need special handling", href: "/resources/identity-and-access/privileged-access" },
      { label: "Getting starters and leavers right: secure onboarding and offboarding", href: "/resources/identity-and-access/onboarding-offboarding" },
    ],
    description: "Identity is the new perimeter: MFA, least privilege, admin account control and a clean joiner/leaver process close the door on most modern attacks.",
    keywords: "identity and access management, MFA, least privilege, admin accounts, joiner leaver process",
  },
  {
    slug: "multi-factor-authentication",
    parent: "identity-and-access",
    kind: "article",
    eyebrow: "IDENTITY & ACCESS",
    navLabel: "Multi-factor authentication",
    title: "Why is multi-factor authentication the most important control you can turn on?",
    readTime: "5 min read",
    shortAnswer:
      "Because a password on its own is no longer a real defence — passwords get phished, reused across sites and sold in bulk. Multi-factor authentication (MFA) adds a second proof, like a tap in an app or a hardware key, so a stolen password alone gets an attacker nowhere. It’s the single highest-impact control most businesses can switch on, it’s usually included at no extra cost in Microsoft 365 and Google Workspace, and insurers and clients increasingly insist on it.",
    sections: [
      {
        heading: "Why the password stopped being enough",
        paragraphs: [
          "Passwords fail in ways that have nothing to do with how clever yours is. People reuse them, so one breached website hands criminals a key that also fits your systems. They get phished, typed straight into a convincing fake login page. And billions of them already sit in databases that attackers buy and test automatically. You can have a perfectly strong password and still lose it to any of these. MFA is the answer because it breaks the chain: even with the right password, the attacker is missing the second factor.",
        ],
      },
      {
        heading: "The forms MFA takes — from best to weakest",
        bullets: [
          { title: "Hardware security keys", text: "a physical key you tap; the strongest option and effectively phish-proof, worth it for admins and high-risk users." },
          { title: "Authenticator app (push or code)", text: "an approval or a rolling code on your phone; the right default for most people. Microsoft Authenticator for Microsoft 365, or Google’s prompt for Workspace." },
          { title: "SMS text codes", text: "better than nothing, but the weakest form: codes can be intercepted or SIM-swapped. Use it only where nothing else is possible." },
        ],
      },
      {
        heading: "The catch worth knowing about: MFA fatigue",
        paragraphs: [
          "Attackers who already have a password sometimes trigger approval prompts over and over, hoping a tired user eventually taps “approve” to make it stop. It’s a real technique, and the fix is straightforward — number matching, where you type a number shown on screen into the app rather than just approving. Both Microsoft and Google support it, and it should be switched on. It’s the kind of detail that’s easy to miss when MFA is turned on in a hurry.",
        ],
      },
      {
        heading: "Where to turn it on first",
        paragraphs: [
          "If you can’t do everything at once, start with email and administrator accounts — the two an attacker wants most. Email is the hub your other accounts reset through; admin accounts can change everything. From there, extend MFA to every account. There’s rarely a good reason to leave any account without it.",
        ],
      },
    ],
    howWeHelp: {
      heading: "We roll MFA out properly — including the bits people skip",
      body: "We enforce MFA across every account in Microsoft 365 or Google Workspace, set the authenticator app as the default with number matching switched on, put hardware keys on your admin accounts, and make sure there are no quiet exceptions left behind. Done once, done right, and monitored — not a setting someone half-enabled and forgot.",
    },
    obligations:
      "MFA sits under the user access control requirement of **Cyber Essentials**, supports the access-security expectations of **UK GDPR** and the **DPDP Act**, and is one of the near-universal conditions on a cyber-insurance policy — often the difference between a claim paid and refused.",
    faqs: [
      {
        question: "Is SMS-based MFA good enough?",
        answer: "It’s far better than no MFA, but it’s the weakest form and shouldn’t be your standard. An authenticator app is free, stronger and barely any more effort.",
      },
      {
        question: "Staff find MFA annoying — is there a lighter way?",
        answer: "Modern MFA is a quick tap, and you can reduce prompts for trusted, managed devices so people aren’t asked constantly. The goal is strong and low-friction, not strong and painful.",
      },
    ],
    ctaHeading: "Want to know which of your accounts still have no MFA?",
    ctaText: "We’ll check MFA coverage across your Microsoft 365 or Google Workspace and flag every gap.",
    readNext: [
      { label: "Identity and access: the complete guide", href: "/resources/identity-and-access" },
      { label: "Passwords vs passkeys: what should we use now?", href: "/resources/identity-and-access/passwords-vs-passkeys" },
    ],
    description: "MFA adds a second proof beyond the password, stopping stolen credentials cold. Here’s why it’s the highest-impact security control you can enable.",
    keywords: "multi-factor authentication, MFA, authenticator app, hardware security keys, number matching",
  },
  {
    slug: "passwords-vs-passkeys",
    parent: "identity-and-access",
    kind: "article",
    eyebrow: "IDENTITY & ACCESS",
    navLabel: "Passwords vs passkeys",
    title: "Passwords vs passkeys: what should we use now?",
    readTime: "5 min read",
    shortAnswer:
      "Long, unique passwords kept in a password manager are the baseline every business should be on. Passkeys are the newer replacement — they can’t be phished or reused, and where you can adopt them, you should. And the old rules you may remember, forced 90-day changes and fiddly complexity, are now actively discouraged: length and never reusing a password matter far more than special characters and constant resets.",
    sections: [
      {
        heading: "Why the old password advice was quietly dropped",
        paragraphs: [
          "For years the standard was complex passwords changed every few months. The UK’s NCSC and others have since reversed that advice, for a simple reason: it backfired. Forced to change constantly and invent “complex” strings, people made small predictable tweaks and wrote them on sticky notes. The current guidance is calmer and more effective — a long passphrase, unique to each account, changed only when there’s a reason to. If you’re still forcing 90-day changes, you’re following advice that’s been retired.",
        ],
      },
      {
        heading: "Password managers: the baseline",
        paragraphs: [
          "Nobody can remember a different strong password for dozens of accounts, so they reuse — which is the root of most credential attacks. A password manager solves it: it generates and stores a unique strong password for every account, and the person only remembers one. For most businesses, rolling out a managed password manager is the single biggest improvement to everyday password hygiene.",
        ],
      },
      {
        heading: "Passkeys: what they are and why they’re better",
        paragraphs: [
          "A passkey replaces the password with something built into your device — unlocked by your fingerprint, face or PIN — that proves who you are without any secret being typed or sent. Because there’s nothing to type, there’s nothing to phish; and because each passkey is unique to the site, there’s nothing to reuse. It’s the first genuinely phish-proof login most businesses can actually use, and both Microsoft 365 and Google Workspace support it today, as do most modern devices.",
        ],
      },
      {
        heading: "A realistic path",
        paragraphs: [
          "You don’t switch overnight. The sensible route is: get everyone into a password manager and onto MFA now, then start introducing passkeys where they’re supported — admin accounts and your main platforms first — and let passwords fade over time. It’s a direction of travel, not a single flip of a switch.",
        ],
      },
    ],
    howWeHelp: {
      heading: "We modernise how your people sign in — without the disruption",
      body: "We roll out a managed password manager, retire the counter-productive old password policies, and introduce passkeys across Microsoft 365 or Google Workspace where they’re supported, starting with your highest-risk accounts. Your people end up with logins that are both easier and far harder to steal.",
    },
    obligations:
      "Sensible password policy and unique credentials support the user access control control of **Cyber Essentials** and the access-security expectations of **UK GDPR** / the **DPDP Act**. Aligning with current **NCSC** guidance (length over forced complexity) is also what an assessor now expects to see.",
    faqs: [
      {
        question: "Should we still force regular password changes?",
        answer: "No — not unless there’s a specific reason, like a suspected compromise. Current guidance is to stop routine forced changes and focus on length, uniqueness and MFA instead.",
      },
      {
        question: "Do passkeys replace MFA?",
        answer: "A passkey is strong, phishing-resistant authentication in its own right and often removes the need for a separate second step. Until you’re fully on passkeys, keep MFA firmly in place.",
      },
    ],
    ctaHeading: "Want a safer, simpler way for your team to sign in?",
    ctaText: "We’ll review how your people log in today and map a practical path to a password manager and passkeys.",
    readNext: [
      { label: "Identity and access: the complete guide", href: "/resources/identity-and-access" },
      { label: "Why is multi-factor authentication the most important control you can turn on?", href: "/resources/identity-and-access/multi-factor-authentication" },
    ],
    description: "Password managers are the baseline; passkeys are the future. Here’s how to modernise sign-in without disrupting your business.",
    keywords: "passwords vs passkeys, password manager, passkeys, NCSC password guidance",
  },
  {
    slug: "privileged-access",
    parent: "identity-and-access",
    kind: "article",
    eyebrow: "IDENTITY & ACCESS",
    navLabel: "Privileged access",
    title: "Privileged access: why admin accounts need special handling",
    readTime: "5 min read",
    shortAnswer:
      "Admin accounts are the keys to the kingdom — they can change settings, reach everyone’s data and switch off other protections — so treating them like ordinary accounts is one of the most dangerous common mistakes. The rule is least privilege: do everyday work on a standard account, keep separate and heavily protected admin accounts, grant admin rights only when they’re actually needed, and put MFA on all of them. One compromised admin account can undo everything else you’ve done.",
    sections: [
      {
        heading: "Why admin accounts are the prize",
        paragraphs: [
          "When an attacker gets into a normal account, they see one person’s world. When they get into an admin account, they can see and change everyone’s — create new accounts, turn off security, reach every mailbox and file. That’s why admin credentials are what they hunt for, and why an admin account protected no better than a standard one is such a serious exposure.",
        ],
      },
      {
        heading: "Least privilege, in plain terms",
        paragraphs: ["Least privilege means everyone — including your IT people — has exactly the access their task needs and no more. In practice that means a few specific habits:"],
        bullets: [
          { title: "Separate admin accounts.", text: "Your IT staff have an ordinary account for email and daily work, and a distinct, protected account used only for admin tasks. Everyday browsing and admin rights never share a login." },
          { title: "Admin rights only when needed.", text: "Rather than a permanent standing army of admins, elevated rights are granted for the job at hand and removed after — the principle behind Microsoft’s Privileged Identity Management and similar tools." },
          { title: "No local admin on laptops.", text: "Everyday users shouldn’t be administrators of their own machines. Removing local admin rights quietly stops a huge share of malware, which relies on those rights to install itself." },
          { title: "Every admin action logged.", text: "So there’s a record of who changed what, which is both a security control and audit evidence." },
        ],
      },
      {
        heading: "The one most businesses miss",
        paragraphs: [
          "If you do nothing else here, look at local admin rights on laptops. It’s extremely common for everyone to be an administrator of their own machine because it was easier to set up that way — and it’s one of the biggest quiet risks in a small business, because it hands any malware the user runs the keys to do real damage. Removing it rarely affects day-to-day work and closes a serious gap.",
        ],
      },
    ],
    howWeHelp: {
      heading: "We lock down the accounts that matter most",
      body: "We separate and protect your admin accounts, put MFA and where possible hardware keys on them, move you towards granting elevated rights only when needed rather than permanently, remove unnecessary local admin from everyday laptops, and log admin activity so there’s a clear record. The accounts that could do the most damage become the hardest to misuse.",
    },
    obligations:
      "Controlling administrative access is a specific expectation of **Cyber Essentials** (user access control — separate admin accounts, no everyday admin use) and of **UK GDPR** / the **DPDP Act**. Logged admin activity is exactly the kind of evidence an auditor or insurer asks to see.",
    faqs: [
      {
        question: "Our IT person uses one account for everything — is that a problem?",
        answer: "Yes. If that single account is phished, the attacker gets admin over everything at once. Splitting daily work and admin into two accounts is a quick, high-value fix.",
      },
      {
        question: "Will removing local admin rights stop people working?",
        answer: "Rarely. Most people never need to install software themselves; where they do, it’s handled through a managed process. The security gain far outweighs the occasional request.",
      },
    ],
    ctaHeading: "Want to know who holds admin rights across your systems?",
    ctaText: "We’ll map your admin and local-admin accounts and show you where the risk is concentrated.",
    readNext: [
      { label: "Identity and access: the complete guide", href: "/resources/identity-and-access" },
      { label: "Getting starters and leavers right: secure onboarding and offboarding", href: "/resources/identity-and-access/onboarding-offboarding" },
    ],
    description: "Admin accounts are the keys to the kingdom. Learn how least privilege, separated logins and logging keep them from becoming your biggest risk.",
    keywords: "privileged access, admin accounts, least privilege, local admin rights",
  },
  {
    slug: "onboarding-offboarding",
    parent: "identity-and-access",
    kind: "article",
    eyebrow: "IDENTITY & ACCESS",
    navLabel: "Onboarding & offboarding",
    title: "Getting starters and leavers right: secure onboarding and offboarding",
    readTime: "6 min read",
    shortAnswer:
      "The day someone joins and the day they leave are the two moments identity most often goes wrong. A good joiner process sets up the right accounts, licences and device with exactly the access the role needs — no more. A good leaver process, run on the last day, disables the account, signs out active sessions, reclaims or wipes the device and secures the person’s data. The classic, avoidable breach is the ex-employee account nobody switched off.",
    sections: [
      {
        heading: "The joiner: set up right, not just fast",
        paragraphs: [
          "Onboarding is usually done at speed, and speed is where corners get cut. The temptation is to copy an existing colleague’s access “so they can get going” — which quietly hands the newcomer far more than their role needs. A good joiner process is deliberate: the right Microsoft 365 or Google Workspace account and licence, membership of the groups the role actually requires, a device enrolled in management with security applied, and a documented record of what was granted. Done well, the person is productive on day one and holds exactly the access they should.",
        ],
      },
      {
        heading: "The mover: the one everyone forgets",
        paragraphs: [
          "When someone changes role, they collect the new access they need — and almost never lose the old access they don’t. Over a few moves, long-serving staff quietly accumulate rights to systems they haven’t touched in years. That “access creep” is a real risk: a single compromised account ends up reaching far more than anyone realised. A role change should trigger a review that adds the new and, crucially, removes the old.",
        ],
      },
      {
        heading: "The leaver: same day, every time",
        paragraphs: [
          "This is the one that causes breaches, and it’s entirely preventable. On someone’s last day — not next week — a proper process:",
          "The failure mode is always the same: the leaving is known, the last day passes, and the account simply stays live because switching it off wasn’t anyone’s defined job. Weeks later it’s still there — licensed, reachable, and a perfect way in.",
        ],
        bullets: [
          { text: "Disables the account and signs out all active sessions, so existing logins stop working immediately." },
          { text: "Reclaims the laptop and phone, or remotely wipes company data from them." },
          { text: "Secures the person’s email and files — transferred to their manager or retained as the business needs." },
          { text: "Frees up the licence, so you’re not paying for a leaver." },
          { text: "Records what was done, as evidence it happened." },
        ],
      },
      {
        heading: "Why ad-hoc never holds",
        paragraphs: [
          "Done from memory, joiners and leavers work right up until the busy week when one gets missed — and the one that gets missed is the one that hurts. The answer is a documented, repeatable process with a checklist and a clear owner, so it happens the same way every time and leaves a record you can show an auditor.",
        ],
      },
    ],
    howWeHelp: {
      heading: "We run joiners and leavers as a proper process, not a scramble",
      body: "We set up starters with the right accounts, licences, device and least-privilege access on day one, review access when people change roles, and run leavers on their last day — disabling accounts, revoking sessions, reclaiming or wiping devices, and handling their data — every time, with a documented record. Starters are productive immediately, and leavers are genuinely, provably gone.",
    },
    obligations:
      "Prompt removal of leaver access is an explicit **Cyber Essentials** user-access-control requirement, and mishandling a leaver’s access or data is a common **UK GDPR** / **DPDP Act** failing. A documented joiner/leaver record is precisely the evidence auditors, insurers and client due-diligence questionnaires ask to see.",
    faqs: [
      {
        question: "What’s the single most important part?",
        answer: "Same-day disabling of the leaver’s account and sessions. Everything else can follow shortly after, but the live account is the actual risk and it needs closing immediately.",
      },
      {
        question: "What happens to a leaver’s email and files?",
        answer: "They’re secured — typically transferred to their manager or retained under your policy — before the account is removed, so nothing important is lost and nothing sensitive is left adrift.",
      },
    ],
    ctaHeading: "Not certain every past leaver is fully off your systems?",
    ctaText: "We’ll audit your active accounts against who actually works there and flag anything that shouldn’t still be live.",
    readNext: [
      { label: "Identity and access: the complete guide", href: "/resources/identity-and-access" },
      { label: "Privileged access: why admin accounts need special handling", href: "/resources/identity-and-access/privileged-access" },
    ],
    description: "The day someone joins and the day they leave are where identity most often fails. Here’s how to run onboarding and offboarding properly.",
    keywords: "onboarding offboarding, joiner mover leaver, JML process, access creep",
  },
  {
    slug: "email-security",
    kind: "pillar",
    eyebrow: "EMAIL SECURITY",
    navLabel: "Email security",
    title: "Email security: stopping phishing, spoofing and invoice fraud",
    readTime: "8 min read",
    shortAnswer:
      "Almost every attack on a business starts with an email — not with clever hacking, but with a believable message to one of your people. Good email security is three things working together: a filter that keeps malicious mail out, authentication (SPF, DKIM and DMARC) that stops criminals sending email as you, and staff who can spot the ones that slip through. Get those three right and you’ve closed the door most attackers walk in through.",
    sections: [
      {
        heading: "Why email is the front door",
        paragraphs: [
          "If someone wants into your business, they rarely bother attacking your firewall. They email your finance clerk a convincing invoice, or your office manager a note from the “director” asking for an urgent payment. It’s cheaper, faster and it works — because it targets a person having a busy day, not a machine.",
          "We see the same story often enough that it’s worth spelling out. An email arrives that looks like it’s from a supplier you actually use. The bank details on the invoice have changed. Nobody thinks to ring and check, because the email looks completely normal. The money leaves, and it’s usually gone for good. No malware, no alarms — just a well-written message and a moment of trust. That’s what modern email security is really defending against.",
        ],
      },
      {
        heading: "The three layers that actually matter",
        paragraphs: [
          "Email security isn’t one product you switch on. It’s three layers, and skipping any one of them leaves a gap the others can’t cover.",
          "1. A filter that keeps bad mail out — The first job is to stop obvious spam, malware and phishing before it ever reaches an inbox. Microsoft 365 and Google Workspace both include filtering, and for a lot of businesses the built-in filter is left on its default settings — which is rarely where it should be. Tuned properly, and topped up where needed, a good filter quietly removes the overwhelming majority of malicious mail.",
          "2. Authentication, so nobody can send email as you — This is the part most businesses have never set up, and it’s the one attackers love. Three DNS records — SPF, DKIM and DMARC — together tell the world’s mail servers which systems are genuinely allowed to send email using your domain, and what to do with anything that isn’t. Without them, a criminal can send email that appears, to your own staff and your clients, to come straight from your company. With them configured properly, that email gets rejected before it lands.",
          "3. People who know what a scam looks like — Some carefully written messages will always get through — no filter is perfect. So the last layer is your team: short, regular, genuinely useful training, and a culture where reporting a suspicious email is normal and forwarding it to check is encouraged, not something people feel daft for doing. The goal isn’t to catch staff out. It’s to make “that’s odd, I’ll check” the automatic reaction.",
        ],
      },
      {
        heading: "The attacks you’re defending against",
        paragraphs: ["It helps to name them, because they’re not all the same problem:"],
        bullets: [
          { title: "Phishing", text: "mass emails trying to trick anyone into clicking a link or handing over a password." },
          { title: "Spear-phishing", text: "the same idea, but aimed at one named person and researched first, so it’s far more convincing." },
          { title: "Business email compromise (invoice fraud)", text: "the expensive one: a message impersonating a supplier or a senior colleague to redirect a payment." },
          { title: "Spoofing", text: "email forged to look like it’s from your domain, usually to fool your own people or your clients." },
          { title: "Account takeover", text: "where a stolen password lets an attacker into a real mailbox and send from it, which is why multi-factor authentication belongs in any email-security conversation." },
        ],
      },
      {
        heading: "Is Microsoft 365 or Google Workspace enough on its own?",
        paragraphs: [
          "Whichever you run, the answer is much the same. For a very small, low-risk business the built-in protection is a reasonable floor. For most businesses — and certainly for a regulated one — it isn’t enough by itself: it’s usually left on defaults, it won’t stop a determined impersonation without extra configuration, and neither Microsoft nor Google backs up your mailboxes the way people assume. Because that question comes up in almost every conversation, we’ve answered it in full for each platform — see the two guides below.",
        ],
      },
      {
        heading: "What “good” looks like",
        bullets: [
          { text: "SPF, DKIM and DMARC configured, with DMARC moving towards an enforced policy — not left on “monitor only” forever." },
          { text: "The mail filter reviewed and tuned, not running on out-of-the-box defaults." },
          { text: "Multi-factor authentication on every mailbox, so a stolen password isn’t the end of the story." },
          { text: "A separate backup of your email — Microsoft and Google run the service, but recovering your data is your responsibility." },
          { text: "Short staff training a few times a year, and an easy way to report anything suspicious." },
        ],
      },
    ],
    howWeHelp: {
      heading: "We set all of this up, and we keep it working",
      body: "Configuring SPF, DKIM and DMARC without breaking your legitimate email takes care and a staged rollout — it’s a common way to accidentally block your own invoices. We do it properly, tune your filtering, put MFA on every account, back your mailboxes up separately, and run short awareness training for your team. Then we keep an eye on it, because email threats don’t stand still. It’s part of how we run IT for you — remotely, and with the evidence your auditors and insurers ask for.",
    },
    obligations:
      "Email is squarely inside the malware-protection and secure-configuration controls of **Cyber Essentials**, and a compromised mailbox is treated as a personal-data breach under **UK GDPR** — reportable to the ICO within 72 hours if it puts personal data at risk. (For India, the same event falls under the **DPDP Act** and **CERT-In** reporting.) Getting email security right isn’t just good practice; it’s part of staying compliant and insurable.",
    faqs: [
      {
        question: "Isn’t the spam filter that came with Microsoft 365 already doing this?",
        answer: "Partly. It catches a lot, but it’s usually running on default settings, it won’t stop domain spoofing without SPF/DKIM/DMARC, and it doesn’t back your email up. It’s a floor, not a finished job.",
      },
      {
        question: "We’re small — are we really a target?",
        answer: "Small businesses are targeted precisely because they’re assumed to have weaker defences and to pay up quietly. Most attacks aren’t personal; they’re automated and cast wide.",
      },
      {
        question: "How long does it take to sort out?",
        answer: "Filtering tuning and MFA can be done quickly. Email authentication is rolled out over a few weeks so it never blocks your genuine mail — we monitor it as it tightens.",
      },
    ],
    ctaHeading: "Not sure how exposed your email is?",
    ctaText: "We’ll check your email authentication, filtering and mailbox protection, and tell you plainly where the gaps are.",
    readNext: [
      { label: "What is DMARC — and does my business actually need it?", href: "/resources/email-security/what-is-dmarc" },
      { label: "How do I stop phishing emails reaching my staff?", href: "/resources/email-security/stop-phishing" },
      { label: "Is Microsoft 365’s built-in email security enough?", href: "/resources/email-security/microsoft-365-email-security" },
      { label: "Is Google Workspace’s built-in email security enough?", href: "/resources/email-security/google-workspace-email-security" },
    ],
    description: "Good email security is filtering, authentication (SPF/DKIM/DMARC) and trained staff working together to stop phishing and invoice fraud.",
    keywords: "email security, phishing, spoofing, invoice fraud, SPF DKIM DMARC",
  },
  {
    slug: "what-is-dmarc",
    parent: "email-security",
    kind: "article",
    eyebrow: "EMAIL SECURITY",
    navLabel: "What is DMARC?",
    title: "What is DMARC — and does my business actually need it?",
    readTime: "5 min read",
    shortAnswer:
      "DMARC is a setting in your domain’s DNS that tells the world’s mail servers what to do with email that claims to be from you but isn’t. Without it, more or less anyone can send messages that look like they come from your company — to your staff, your clients, anyone. And yes, your business almost certainly needs it: it’s one of the cheapest, highest-impact controls you can turn on, and since 2024 the big mailbox providers have started requiring it.",
    sections: [
      {
        heading: "The problem DMARC solves",
        paragraphs: [
          "Email was designed in a more trusting era. By default, nothing stops someone typing your company’s address into the “from” field and sending whatever they like. That’s how a member of your staff receives a payment request that appears to come from your managing director, or a client gets an invoice that looks like it’s from you but points at a criminal’s bank account. DMARC exists to shut that down.",
        ],
      },
      {
        heading: "How SPF, DKIM and DMARC fit together",
        paragraphs: [
          "They’re a team of three, and it’s easiest to think of them like the post:",
          "SPF and DKIM do the checking. DMARC is the bit that finally does something about the failures — and, usefully, reports back to you on who’s sending email in your name.",
        ],
        bullets: [
          { title: "SPF", text: "is the list of post rooms allowed to send mail on your behalf — the servers permitted to use your domain." },
          { title: "DKIM", text: "is a tamper-proof seal on each letter, so the receiver can tell it genuinely came from you and wasn’t altered." },
          { title: "DMARC", text: "is the standing instruction to the receiving mail room: “if a letter claims to be from us but has no valid list entry and no valid seal, here’s what to do with it.”" },
        ],
      },
      {
        heading: "The three DMARC settings — and why you don’t jump to the strict one",
        paragraphs: [
          "DMARC has three policies, and the order matters:",
          "The catch — and it’s the reason DMARC is worth having done properly — is that if you jump straight to “reject” before you’ve accounted for every legitimate system that sends email for you (your accounting software, your marketing tool, your booking system), you’ll cheerfully block your own mail. So the right way is to start at “none,” watch the reports, fix what’s missing, and tighten to “reject” once it’s safe. Rushed, it causes outages. Staged, it’s invisible to everyone except the criminals.",
        ],
        bullets: [
          { title: "p=none", text: "monitor only. Nothing is blocked; you just collect reports on what’s being sent as you. This is where you start." },
          { title: "p=quarantine", text: "suspicious mail is sent to junk rather than the inbox." },
          { title: "p=reject", text: "forged mail is refused outright and never arrives. This is the goal." },
        ],
      },
      {
        heading: "So — do you need it?",
        paragraphs: [
          "For almost every business, yes. It protects your name, it protects your clients from being defrauded through you, and it’s increasingly not optional: since 2024, Google and Yahoo have required DMARC for anyone sending in volume, and insurers and client security questionnaires now routinely ask whether you have it. If your domain still has no DMARC record, that’s usually the first email fix we make.",
        ],
      },
    ],
    howWeHelp: {
      heading: "We take you from “no record” to “reject” without breaking anything",
      body: "We map every service that legitimately sends email for you, put SPF and DKIM in order, start DMARC in monitoring mode, read the reports so you don’t have to, and tighten to full enforcement once it’s safe. You end up protected, and your genuine email keeps flowing the whole way through.",
    },
    obligations:
      "DMARC supports the secure-configuration expectations of **Cyber Essentials** and is a common line item on cyber-insurance and client due-diligence questionnaires. It’s a small record with an outsized effect on how trustworthy your domain looks to everyone else.",
    faqs: [
      {
        question: "Will turning on DMARC block our normal email?",
        answer: "Not if it’s rolled out in stages. The risk only comes from jumping straight to strict enforcement without checking which systems send mail for you first — which is exactly the step people skip.",
      },
      {
        question: "We use Microsoft 365 (or Google Workspace) — isn’t this automatic?",
        answer: "Both make SPF and DKIM available, but DMARC is a record you have to add and manage yourself on your domain. Neither platform switches it on for you.",
      },
    ],
    ctaHeading: "Want to know if your domain can be spoofed today?",
    ctaText: "We’ll check your SPF, DKIM and DMARC and show you exactly what a stranger could send in your name right now.",
    readNext: [
      { label: "Email security: the complete guide", href: "/resources/email-security" },
      { label: "How do I stop phishing emails reaching my staff?", href: "/resources/email-security/stop-phishing" },
    ],
    description: "DMARC tells mail servers what to do with forged email claiming to be from you. Here’s what it is, how it works and why you need it.",
    keywords: "DMARC, SPF, DKIM, email authentication, domain spoofing",
  },
  {
    slug: "stop-phishing",
    parent: "email-security",
    kind: "article",
    eyebrow: "EMAIL SECURITY",
    navLabel: "Stopping phishing",
    title: "How do I stop phishing emails reaching my staff?",
    readTime: "5 min read",
    shortAnswer:
      "You can’t block every phishing email, but you can stop the vast majority before they reach an inbox and prepare your people for the few that get through. It comes down to four things: a well-tuned mail filter, email authentication so criminals can’t impersonate you, multi-factor authentication so a stolen password isn’t enough on its own, and short, regular staff training. No single one of these does the job alone.",
    sections: [
      {
        heading: "Why a filter on its own isn’t enough",
        paragraphs: [
          "Every mail filter blocks a huge amount, and none of them catch everything. Attackers test their messages against the same filters you use, and the best phishing emails are written to look like ordinary business correspondence — a shared document, a voicemail notification, a delivery update. So the honest goal isn’t a filter that never misses. It’s layers, so that when one misses, the next one holds.",
        ],
      },
      {
        heading: "The layers that hold",
        paragraphs: [
          "Tune the filter you already have — Most businesses are running Microsoft 365 or Google Workspace on default filtering settings. Tightening those, and adding stronger protection where the risk justifies it, removes a large share of what would otherwise land.",
          "Lock down your own domain — A lot of phishing works by impersonating a name the recipient trusts — often their own company or a supplier. Email authentication (SPF, DKIM and DMARC) stops criminals sending as you, which cuts out an entire category of convincing attacks aimed at your staff and your clients.",
          "Assume one will get clicked — and plan for it — Sooner or later someone, on a bad day, will click. Multi-factor authentication is what turns that from a crisis into a non-event: even with the password, the attacker can’t get into the account. If you do one technical thing this month, make it this.",
          "Bring your people in — Short, regular training works — not the annual hour-long slideshow nobody remembers, but brief, realistic prompts and the occasional simulated phishing email to keep everyone sharp. Done kindly, it builds instinct. Done as a gotcha to catch people out, it just teaches them not to report mistakes — which is the opposite of what you want.",
        ],
      },
      {
        heading: "The quiet ingredient: a culture of reporting",
        paragraphs: [
          "The businesses that handle phishing best aren’t the ones that never get a bad email. They’re the ones where a member of staff forwards a suspicious message and asks “is this real?” without a second thought — and gets a quick, friendly answer. That one habit catches the clever attacks that beat the machines.",
        ],
      },
    ],
    howWeHelp: {
      heading: "We put the layers in place and keep them sharp",
      body: "We tune your filtering, set up email authentication so you can’t be impersonated, roll out MFA across every account, and run short awareness training and simulations for your team. And we give people somewhere to report the odd one out and get a straight answer — so the human layer works the way it should.",
    },
    obligations:
      "Anti-phishing controls sit inside the malware-protection control of **Cyber Essentials**, and staff-awareness training is an explicit expectation of the **NCSC**’s guidance and most cyber-insurance policies. If a phishing email leads to a personal-data breach, **UK GDPR** reporting timelines apply.",
    faqs: [
      {
        question: "Should we run fake phishing tests on our own staff?",
        answer: "Yes, in moderation and without blame. Used to build instinct and start a conversation, simulations help. Used to name and shame, they backfire — people stop reporting.",
      },
      {
        question: "Is expensive anti-phishing software worth it?",
        answer: "Sometimes, but only after the basics are done. Tuned filtering, email authentication and MFA give you most of the protection for very little; extra tooling is a top-up, not a substitute.",
      },
    ],
    ctaHeading: "Want to see where a phishing email would get through?",
    ctaText: "We’ll review your filtering, authentication and account protection, and show you the realistic gaps.",
    readNext: [
      { label: "Email security: the complete guide", href: "/resources/email-security" },
      { label: "Is Microsoft 365’s built-in email security enough?", href: "/resources/email-security/microsoft-365-email-security" },
    ],
    description: "Stopping phishing takes layers: tuned filtering, email authentication, MFA and regular staff training. Here’s how they work together.",
    keywords: "stop phishing, phishing simulation, email filtering, security awareness training",
  },
  {
    slug: "microsoft-365-email-security",
    parent: "email-security",
    kind: "article",
    eyebrow: "EMAIL SECURITY",
    navLabel: "Is Microsoft 365 enough?",
    title: "Is Microsoft 365’s built-in email security enough?",
    readTime: "5 min read",
    shortAnswer:
      "For a very small, low-risk business, the protection built into Microsoft 365 is a reasonable starting point. For most businesses — and especially regulated ones — it isn’t enough on its own: it’s usually left on default settings, it won’t stop a determined impersonation or account takeover without extra configuration and MFA, and it doesn’t back up your mailboxes. “Enough” really depends on what you’ve actually turned on.",
    sections: [
      {
        heading: "What you get out of the box",
        paragraphs: [
          "Every Microsoft 365 business plan includes Exchange Online Protection — filtering that removes spam and known malware, and blocks a good deal of routine junk. It’s genuinely useful, and it’s running whether you’ve thought about it or not. The mistake is assuming that’s the finished article rather than the foundation.",
        ],
      },
      {
        heading: "Where it falls short on its own",
        paragraphs: [
          "It’s usually on defaults — Out of the box, the protection is set for the broadest possible audience, not for your business. Anti-phishing and impersonation settings that would help you are often left switched off or untuned because nobody went in to configure them.",
          "It won’t stop the expensive attack — The default filter is aimed at spam and malware. Business email compromise — a plain-text message impersonating your director or a supplier, with no dodgy link or attachment to catch — often sails straight through unless you’ve turned on and tuned the impersonation protection.",
          "It does not back up your email — This is the big one, and it surprises people. Microsoft keeps the service running, but under its shared-responsibility model your data is your responsibility. Deleted, or lost to a compromised account or ransomware, your email is not something Microsoft guarantees to restore for you months later. A separate backup is a different thing from the service being online.",
        ],
      },
      {
        heading: "Closing the gap",
        paragraphs: [
          "You don’t necessarily need to rip anything out. For most businesses it’s about configuring what you’ve already paid for, adding the pieces that are genuinely missing, and — where the risk warrants it — the stronger Defender for Office 365 protection Microsoft offers as an add-on:",
        ],
        bullets: [
          { text: "Turn on and tune anti-phishing and impersonation protection." },
          { text: "Put MFA on every account, without exception." },
          { text: "Add SPF, DKIM and DMARC so you can’t be spoofed." },
          { text: "Add a proper, separate backup of your mailboxes." },
          { text: "Consider Defender for Office 365 for safe-links and safe-attachments if your risk justifies it." },
        ],
      },
    ],
    howWeHelp: {
      heading: "We make Microsoft 365 as secure as it can be — then fill what it can’t",
      body: "We go through your tenant and configure the protection you’re already paying for properly, put MFA everywhere, sort your email authentication, and add a separate mailbox backup so your data is genuinely recoverable. Where the risk calls for it, we add Defender for Office 365. You get far more from the licences you already hold — and the gaps Microsoft leaves to you are actually covered.",
    },
    obligations:
      "Leaving cloud email on defaults is a secure-configuration gap under **Cyber Essentials**, and the “Microsoft backs up my email” assumption is a common finding that undermines **UK GDPR** and business-continuity expectations. Configured properly, Microsoft 365 can meet these; left alone, it often doesn’t.",
    faqs: [
      {
        question: "Doesn’t Microsoft back up my email automatically?",
        answer: "Not in the way most people assume. It keeps the service resilient, but recovering your data after deletion, a compromise or ransomware is your responsibility — which is why a separate backup matters.",
      },
      {
        question: "Do we need to buy Defender for Office 365?",
        answer: "Not always. Configure what’s included and add MFA and authentication first — that covers most businesses. Defender is a worthwhile top-up for higher-risk or regulated environments.",
      },
    ],
    ctaHeading: "Want to know what your Microsoft 365 is — and isn’t — protecting?",
    ctaText: "We’ll review your tenant’s security settings and mailbox backup, and tell you plainly what’s exposed.",
    readNext: [
      { label: "Is Google Workspace’s built-in email security enough?", href: "/resources/email-security/google-workspace-email-security" },
      { label: "What is DMARC — and does my business actually need it?", href: "/resources/email-security/what-is-dmarc" },
    ],
    description: "Microsoft 365’s built-in email protection is a foundation, not a finished job. Here’s where the gaps are and how to close them.",
    keywords: "Microsoft 365 email security, Exchange Online Protection, Defender for Office 365, mailbox backup",
  },
  {
    slug: "google-workspace-email-security",
    parent: "email-security",
    kind: "article",
    eyebrow: "EMAIL SECURITY",
    navLabel: "Is Google Workspace enough?",
    title: "Is Google Workspace’s built-in email security enough?",
    readTime: "5 min read",
    shortAnswer:
      "Gmail’s spam and malware filtering is genuinely strong, and for a small, low-risk business the protection built into Google Workspace is a reasonable start. For most businesses — and especially regulated ones — it isn’t enough on its own: the stronger protections often sit switched off in the Admin console or behind a higher plan, it won’t reliably stop a well-crafted impersonation, and Google does not back up your data. And no, Google Vault is not a backup. “Enough” comes down to your plan, your settings and whether 2-Step Verification is enforced.",
    sections: [
      {
        heading: "What you get out of the box",
        paragraphs: [
          "Gmail’s filtering is among the best in the business at catching spam, known malware and routine phishing — a lot of protection is working quietly before anyone configures anything. As with any platform, the mistake is treating that as the finished job rather than the foundation.",
        ],
      },
      {
        heading: "Where it falls short on its own",
        paragraphs: [
          "The strong settings are often off — or on a higher plan — Several of Google Workspace’s better protections — enhanced pre-delivery scanning, attachment and link defences, and the Security Sandbox that detonates suspicious attachments — either need switching on in the Admin console or come with the Business/Enterprise tiers. Left on the defaults of a starter plan, you’re not using what’s available.",
          "It won’t reliably stop the expensive attack — Business email compromise — a plain message impersonating your director or a supplier, with nothing malicious to scan — is exactly the kind of thing default filtering misses. It needs the advanced settings enabled and tuned.",
          "It does not back up your data — and Vault isn’t a backup — This trips a lot of people up. Google Vault is a retention and eDiscovery tool, not a backup: it can’t restore a mailbox the way a proper backup can, and retention isn’t recovery. Under Google’s shared-responsibility model, keeping a recoverable copy of your email is your job, not Google’s.",
        ],
      },
      {
        heading: "Closing the gap",
        bullets: [
          { text: "Turn on and tune the advanced Gmail security settings in the Admin console (and check your plan actually includes them)." },
          { text: "Enforce 2-Step Verification for every user — Google’s MFA — with no exceptions." },
          { text: "Add SPF, DKIM and DMARC on your domain so you can’t be spoofed." },
          { text: "Add a proper third-party backup of Gmail and Drive — Vault is not it." },
          { text: "Use the Security Sandbox and enhanced protections where your plan and risk justify them." },
        ],
      },
    ],
    howWeHelp: {
      heading: "We make Google Workspace as secure as it can be — then fill what it can’t",
      body: "We work through your Admin console and switch on the protection your plan includes, enforce 2-Step Verification across every account, sort your SPF, DKIM and DMARC, and add a separate, genuinely recoverable backup of your mail and files. Where the risk warrants it, we bring in the Security Sandbox and enhanced defences. You get everything your licences already allow — and the gaps Google leaves to you are actually covered.",
    },
    obligations:
      "Leaving Workspace on default settings is a secure-configuration gap under **Cyber Essentials**, and mistaking Vault for a backup undermines **UK GDPR** and business-continuity expectations in the same way the equivalent Microsoft assumption does. Configured properly, Workspace can meet these; left alone, it often doesn’t. (India: **DPDP Act** and **CERT-In** apply the same way.)",
    faqs: [
      {
        question: "Isn’t Google Vault our backup?",
        answer: "No — and this is the most common misunderstanding we see. Vault is for retention and eDiscovery, not recovery. If a mailbox is deleted or compromised, Vault won’t restore it the way a real backup will.",
      },
      {
        question: "Gmail already blocks loads of spam — why do more?",
        answer: "It does, and it’s good at it. But spam blocking isn’t impersonation protection, account security or backup — those are separate jobs the built-in filter doesn’t do on its own.",
      },
    ],
    ctaHeading: "Want to know what your Google Workspace is — and isn’t — protecting?",
    ctaText: "We’ll review your Admin console settings, 2-Step Verification and backup, and tell you plainly what’s exposed.",
    readNext: [
      { label: "Email security: the complete guide", href: "/resources/email-security" },
      { label: "Is Microsoft 365’s built-in email security enough?", href: "/resources/email-security/microsoft-365-email-security" },
    ],
    description: "Gmail filtering is strong, but Google Workspace isn’t enough on its own. Here’s what’s missing — and why Vault isn’t a backup.",
    keywords: "Google Workspace email security, Gmail filtering, Google Vault, 2-Step Verification",
  },
];
