import { ResourceDoc } from "./types";

export const peopleDocs: ResourceDoc[] = [
  {
    slug: "security-awareness",
    kind: "pillar",
    eyebrow: "THE HUMAN LAYER",
    navLabel: "Your people",
    title: "Your people: turning the biggest risk into your first line of defence",
    readTime: "5 min read",
    shortAnswer:
      "Most breaches involve a person, not just a machine — someone clicks, someone is tricked, someone reuses a password. That makes your staff either your weakest link or your strongest sensor, and the difference is training done well: short, regular and realistic, backed by clear, simple policies and a culture where reporting a mistake is welcomed, not punished. Done as an annual tick-box, it changes nothing; done properly, it stops the attacks that beat the technology.",
    sections: [
      {
        heading: "Does awareness training actually work?",
        paragraphs: [
          "Yes — but not the version most people have suffered: a long slideshow once a year that everyone clicks through and forgets. What works is little and often — brief, relevant reminders and the occasional realistic phishing simulation that keeps people alert without embarrassing them. The measure of success isn’t a test score; it’s whether a member of staff pauses on a suspicious email and reports it.",
        ],
      },
      {
        heading: "The parts that matter",
        bullets: [
          {
            title: "Short, regular training",
            text: "— a few times a year, in plain language, on the threats staff actually meet.",
          },
          {
            title: "Phishing simulations, used kindly",
            text: "— to build instinct and start conversations, never to name and shame (which just stops people reporting).",
          },
          {
            title: "Simple, usable policies",
            text: "— a handful people can actually follow, not a fifty-page document nobody reads.",
          },
          {
            title: "A reporting culture",
            text: "— an easy way to say “is this real?” and a quick, friendly answer.",
          },
        ],
      },
    ],
    howWeHelp: {
      heading: "We turn your team into a defence, not a liability",
      body: "We run short, regular awareness training and realistic phishing simulations, help you put a small set of clear policies in place, and give your people a simple way to report anything suspicious and get a straight answer — so the human layer starts catching what the tools miss.",
    },
    obligations:
      "Staff training and engagement is its own domain in the **NCSC 10 Steps**, an **ISO 27001** requirement, and a near-universal cyber-insurance condition; documented training is also evidence auditors and clients ask to see.",
    faqs: [
      {
        question: "Should we punish staff who fail a phishing test?",
        answer:
          "No — it backfires. People simply stop reporting for fear of blame, which is the opposite of what you want. Use tests to teach and encourage, and celebrate reporting.",
      },
    ],
    ctaHeading: "Is your team ready for the email that gets through?",
    ctaText:
      "We’ll assess your current training and run a baseline phishing simulation to see where you stand.",
    readNext: [
      {
        label: "How do I stop phishing emails reaching my staff?",
        href: "/resources/email-security/stop-phishing",
      },
      { label: "Using AI at work — safely", href: "/resources/ai-security" },
    ],
    description:
      "Turn staff into your first line of defence with short, regular security awareness training and phishing simulations, not annual tick-box exercises.",
    keywords:
      "security awareness training, phishing simulation, staff cyber training, reporting culture",
  },
  {
    slug: "it-and-security-policies",
    parent: "security-awareness",
    kind: "article",
    eyebrow: "THE HUMAN LAYER",
    navLabel: "Basic IT & security policies",
    title: "The IT and security policies every business actually needs",
    readTime: "5 min read",
    shortAnswer:
      "You don’t need a shelf of dense documents — you need a small set of clear, usable policies that tell staff what’s expected and give you a defensible position if something goes wrong. For most businesses that’s a handful: acceptable use, passwords and authentication, mobile/BYOD, data protection, and incident reporting. Written in plain English and actually followed, they turn good intentions into consistent behaviour — and they’re one of the first things an auditor, insurer or prospective client asks to see.",
    sections: [
      {
        heading: "Why policies matter (and it isn’t bureaucracy)",
        paragraphs: [
          "A policy isn’t paperwork for its own sake. It does three quiet, useful jobs: it tells people what “good” looks like so they’re not guessing, it gives you consistency instead of everyone doing their own thing, and it gives you a defensible position — evidence that you set clear expectations — if a member of staff does something careless or worse. And increasingly it’s simply required: Cyber Essentials, ISO 27001, cyber-insurers and client questionnaires all expect certain policies to exist.",
        ],
      },
      {
        heading: "The core set most businesses need",
        bullets: [
          {
            title: "Acceptable Use",
            text: "— how company devices, internet, email and now AI tools may and may not be used.",
          },
          {
            title: "Password & authentication",
            text: "— MFA everywhere, a password manager, no reuse, no sharing.",
          },
          {
            title: "Mobile & BYOD",
            text: "— what’s managed on personal devices and what happens when someone leaves (see the MDM & BYOD guide).",
          },
          {
            title: "Data protection & handling",
            text: "— how sensitive data is classified, shared, stored and disposed of.",
          },
          {
            title: "Incident & reporting",
            text: "— how to report a suspicious email or lost device quickly, and a clear promise that reporting a mistake is welcomed, not punished.",
          },
        ],
        paragraphs: [
          "Starter/leaver and remote-working policies are worth adding as you grow, but the five above cover most of the ground for most businesses.",
        ],
      },
      {
        heading: "The trap: policies nobody reads",
        paragraphs: [
          "The commonest failure isn’t having no policy — it’s having a fifty-page document, downloaded years ago, that nobody has read and nobody follows. That’s worse than useless: it gives false comfort and won’t hold up when tested. Good policies are short, in plain language, genuinely reflect how you work, signed off by staff so there’s a record, and revisited occasionally rather than left to rot.",
        ],
      },
    ],
    howWeHelp: {
      heading: "We give you a small set of policies that fit — and keep them current",
      body: "We provide practical, plain-English policy templates tailored to how your business actually works and aligned to Cyber Essentials and ISO 27001, help you roll them out and capture staff sign-off, and keep them up to date as things change — so they’re both followed and ready as evidence when an auditor, insurer or client asks.",
    },
    obligations:
      "Documented policies are explicit expectations of **Cyber Essentials** and **ISO 27001**, and a data-handling policy supports **UK GDPR / the DPDP Act**. They’re also standard evidence in cyber-insurance applications and client due-diligence questionnaires.",
    faqs: [
      {
        question: "Can’t we just download policy templates off the internet?",
        answer:
          "They’re a starting point, but generic templates tend to go unread and don’t match how you actually work — which is exactly why they fail when tested. They need tailoring to your business to be worth anything.",
      },
      {
        question: "How many policies do we really need?",
        answer:
          "For most businesses, a handful. It’s far better to have five short policies people follow than twenty long ones they ignore.",
      },
    ],
    ctaHeading:
      "Do your policies reflect how you actually work — or are they gathering dust?",
    ctaText:
      "We’ll review what you have and give you a right-sized set aligned to Cyber Essentials.",
    readNext: [
      {
        label: "Your people: turning the biggest risk into your first line of defence",
        href: "/resources/security-awareness",
      },
      { label: "Using AI at work — safely", href: "/resources/ai-security" },
    ],
    description:
      "A small set of clear, plain-English IT and security policies — acceptable use, passwords, BYOD, data handling and incident reporting.",
    keywords:
      "IT security policies, acceptable use policy, password policy, BYOD policy, data protection policy",
  },
  {
    slug: "ai-security",
    kind: "pillar",
    eyebrow: "AI & EMERGING-TECH SECURITY",
    navLabel: "Using AI safely",
    title: "Using AI at work — safely",
    readTime: "5 min read",
    shortAnswer:
      "AI tools like ChatGPT and Copilot can be genuinely useful, and your staff are almost certainly using them already — which is exactly the risk. The danger isn’t the tools themselves; it’s confidential data being pasted into a service you don’t control, and “shadow AI” spreading with no oversight. Using AI safely means a clear, sensible policy on what can and can’t go into these tools, choosing business-grade versions where the data is protected, and a bit of awareness — not a ban, which just drives it underground.",
    sections: [
      {
        heading: "The real risk: your data walking out through a chatbot",
        paragraphs: [
          "The problem isn’t that AI is dangerous; it’s that a well-meaning employee pastes a client contract, a patient list or your financials into a free consumer AI tool to “summarise” it — and that data is now on a third party’s servers, possibly used to train future models, and out of your control. Multiply that across a team quietly adopting whatever tools they like, and you have “shadow AI”: real business data flowing into services nobody signed off.",
        ],
      },
      {
        heading: "Using it safely, without banning it",
        bullets: [
          {
            title: "A clear AI acceptable-use policy",
            text: "— plain rules on what may and may not be entered into AI tools, and which tools are approved.",
          },
          {
            title: "Business-grade tools",
            text: "— paid, enterprise versions of AI services keep your data out of training and under contract, unlike the free consumer ones.",
          },
          {
            title: "Awareness",
            text: "— help staff understand that “the AI can see it” means “someone else might too.”",
          },
          {
            title: "Visibility",
            text: "— know which AI tools are actually in use, the same way you’d track any other SaaS.",
          },
        ],
      },
    ],
    howWeHelp: {
      heading: "We help you get the benefit of AI without the exposure",
      body: "We help you put a practical AI acceptable-use policy in place, steer staff towards business-grade tools that protect your data, bring shadow AI into view alongside your other SaaS, and brief your team so they use these tools without handing your confidential information to a stranger. Enablement, not prohibition.",
    },
    obligations:
      "Putting client or personal data into an uncontrolled AI tool can itself be a **UK GDPR / DPDP Act** breach; an AI acceptable-use policy and oversight are fast becoming expected under **ISO 27001** and in client due-diligence questionnaires.",
    faqs: [
      {
        question: "Should we just block AI tools entirely?",
        answer:
          "Rarely the right call — staff find workarounds, and you lose real productivity. A clear policy plus approved, business-grade tools is safer and more realistic than a ban.",
      },
      {
        question: "Is it safe to use ChatGPT for work?",
        answer:
          "For non-sensitive tasks, with the right (business) version and clear rules, yes. The line is data: never paste confidential client, personal or financial information into a tool you don’t control.",
      },
    ],
    ctaHeading: "Do you know what your staff are feeding into AI?",
    ctaText:
      "We’ll help you see which AI tools are in use and put sensible guardrails around them.",
    readNext: [
      {
        label: "Data security: classify, encrypt and protect what matters",
        href: "/resources/data-security",
      },
      { label: "Cloud and SaaS security: shadow IT", href: "/resources/cloud-security" },
    ],
    description:
      "Use AI tools like ChatGPT and Copilot safely at work with a clear acceptable-use policy, business-grade tools and staff awareness — not a ban.",
    keywords: "AI security, shadow AI, ChatGPT at work, AI acceptable use policy",
  },
  {
    slug: "supply-chain-risk",
    kind: "pillar",
    eyebrow: "THIRD-PARTY & SUPPLY-CHAIN RISK",
    navLabel: "Supply-chain risk",
    title: "Supply-chain and third-party risk: the security you inherit from others",
    readTime: "6 min read",
    shortAnswer:
      "Your security is only as strong as the suppliers and software you rely on — and increasingly, your own clients judge you the same way. Supply-chain risk cuts both ways: vetting the vendors and tools that can reach your data, and being able to prove to your customers that you’re a safe supplier. In practice that means knowing who has access to what, answering security questionnaires credibly, and holding a recognised certification like Cyber Essentials that settles the question quickly.",
    sections: [
      {
        heading: "Two directions of the same problem",
        paragraphs: [
          "Looking outward, the tools and suppliers you connect to your systems can be the way an attacker reaches you — a compromised software update or an over-privileged vendor account. Looking inward, your own clients — especially larger and regulated ones — now ask hard questions before they’ll work with you, because you are part of their supply chain. Both sides come down to the same discipline: knowing and controlling access, and being able to show it.",
        ],
      },
      {
        heading: "What to actually do",
        bullets: [
          {
            title: "Know your third parties",
            text: "— which suppliers and tools can reach your data, and cut access that isn’t needed.",
          },
          {
            title: "Vet before you connect",
            text: "— a light due-diligence check on suppliers who’ll touch sensitive systems.",
          },
          {
            title: "Answer questionnaires well",
            text: "— client security questionnaires are a sales gate now; a credible, consistent response wins work.",
          },
          {
            title: "Become a demonstrably safe supplier",
            text: "— a recognised certification (Cyber Essentials, ISO 27001) answers most questions before they’re asked.",
          },
        ],
      },
    ],
    howWeHelp: {
      heading: "We help you manage the risk you inherit — and prove you’re safe to work with",
      body: "We help you map and control third-party access, apply sensible vendor checks, and — the part that wins you business — get you ready to answer client security questionnaires and achieve the certifications that mark you as a safe supplier. You reduce the risk coming in, and remove the friction going out.",
    },
    obligations:
      "Supply-chain security is an explicit domain of the **NCSC 10 Steps** and the **CIS Controls**, and a growing expectation under **UK GDPR / the DPDP Act** (you’re accountable for processors you use). Client due-diligence and Cyber Essentials are where this becomes a commercial issue.",
    faqs: [
      {
        question:
          "Clients keep sending us long security questionnaires — how do we handle them?",
        answer:
          "Build a consistent, honest baseline of answers once, keep it current, and back it with a recognised certification. It turns a painful, repeated scramble into a quick, credible response that helps you win the work.",
      },
    ],
    ctaHeading:
      "Struggling with client security questionnaires — or worried about your suppliers?",
    ctaText:
      "We’ll help you control third-party access and get questionnaire- and certification-ready.",
    readNext: [
      {
        label: "Governance and compliance: audits, evidence and staying insurable",
        href: "/resources/governance-and-compliance",
      },
      {
        label: "Identity and access: privileged access",
        href: "/resources/identity-and-access/privileged-access",
      },
    ],
    description:
      "Manage supply-chain and third-party risk: vet suppliers, control vendor access, and answer client security questionnaires with confidence.",
    keywords:
      "supply chain security, third-party risk, vendor risk management, security questionnaires",
  },
  {
    slug: "governance-and-compliance",
    kind: "pillar",
    eyebrow: "GOVERNANCE, RISK & COMPLIANCE",
    navLabel: "Governance & compliance",
    title: "Governance and compliance: audits, evidence and staying audit-ready",
    readTime: "7 min read",
    shortAnswer:
      "Compliance isn’t a separate project you do once a year — it’s the natural by-product of running your IT properly and keeping the evidence as you go. Whether it’s Cyber Essentials, ISO 27001, UK GDPR or the DPDP Act, the same foundations apply: understand your risks, put sensible controls in place, and be able to prove they’re working. Get the security right and being “audit-ready” stops being a scramble and becomes a state you’re simply in.",
    sections: [
      {
        heading: "Start with Cyber Essentials",
        paragraphs: [
          "For most UK businesses, Cyber Essentials is the right first step and often the one a client or contract is demanding. It’s a government-backed scheme covering five basic controls — firewalls, secure configuration, user access control, malware protection and security update management — and certifying proves you have the fundamentals in place. Cyber Essentials Plus adds a hands-on technical audit. It’s achievable quickly with the right help, and it answers a lot of supply-chain questions on its own. (Infodot helps you get ready and certified; certification itself is issued through an accredited body.)",
        ],
      },
      {
        heading: "The frameworks you may meet",
        bullets: [
          {
            title: "Cyber Essentials / CE+",
            text: "— the UK baseline; the usual starting point and a common contract requirement.",
          },
          {
            title: "ISO 27001",
            text: "— a full information-security management system; the recognised standard for larger or more security-conscious clients.",
          },
          {
            title: "UK GDPR (and the DPDP Act in India)",
            text: "— the law on protecting personal data.",
          },
          { title: "SOC 2", text: "— often asked for by US clients." },
          {
            title: "Sector rules",
            text: "— NIS/NIS2, NHS DSPT, PCI DSS, FCA operational resilience, and others depending on what you do.",
          },
        ],
      },
      {
        heading: "The thread through all of them: evidence",
        paragraphs: [
          "Every one of these frameworks ultimately asks the same thing — show me. Show me your access is controlled, your data is backed up, your staff are trained, your patches are current. If that evidence is produced automatically as part of how your IT is run, audits are calm. If it has to be assembled from scratch each time, they’re painful and expensive. “Always audit-ready” simply means the evidence is a by-product, not a project.",
        ],
      },
    ],
    howWeHelp: {
      heading: "We make compliance the outcome of good IT, not a separate burden",
      body: "We run your IT so the controls these frameworks require are in place by default, get you ready for and through Cyber Essentials, ISO 27001 and the rest, help you meet UK GDPR or DPDP obligations, and keep the evidence flowing so an audit, an insurer or a client question is answered from records you already hold — not a last-minute scramble. Compliance by design, always audit-ready.",
    },
    obligations:
      "This pillar is the obligations — it ties the whole estate together. The controls in every other guide are what these frameworks require; this is where they’re evidenced and certified. (UK: **Cyber Essentials**, **UK GDPR**, **ISO 27001**, **NIS**, **NHS DSPT**, **FCA**. India: **DPDP Act**, **CERT-In**, **ISO 27001**.)",
    faqs: [
      {
        question: "Where should we start — Cyber Essentials or ISO 27001?",
        answer:
          "Almost always Cyber Essentials. It’s faster, cheaper, covers the fundamentals, and satisfies many client requirements. ISO 27001 is the bigger commitment you grow into when clients or scale call for it.",
      },
      {
        question: "Does Infodot issue the certification?",
        answer:
          "No — certification is awarded by accredited certification bodies. We get you ready, run the controls, prepare the evidence and support you through the assessment, which is where most of the effort actually is.",
      },
    ],
    ctaHeading: "Need to be audit-ready — or certified — without the scramble?",
    ctaText:
      "We’ll assess where you stand against Cyber Essentials, ISO 27001 or your target framework and map the path.",
    readNext: [
      { label: "Supply-chain and third-party risk", href: "/resources/supply-chain-risk" },
      {
        label: "Incident response: your reporting obligations",
        href: "/resources/incident-response",
      },
    ],
    description:
      "Compliance as a by-product of good IT: Cyber Essentials, ISO 27001, UK GDPR and DPDP Act, with evidence always ready for audit.",
    keywords:
      "governance and compliance, Cyber Essentials, ISO 27001, UK GDPR, DPDP Act, audit-ready",
  },
];
