export interface GuideSection {
  heading: string;
  intro?: string;
  points?: string[];
  dos?: string[];
  donts?: string[];
}

export interface Guide {
  slug: string;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  keywords: string;
  sections: GuideSection[];
  cta: { text: string; label: string; href: string };
}

export const guides: Guide[] = [
  {
    slug: "security-awareness-guide",
    type: "Guide",
    title: "Security Awareness: A Guide for Any Organisation, Any Size",
    subtitle:
      "These habits apply everywhere — to a solo practice, a 300-person firm, or anyone reading this on their own. Size and role don’t change the risk.",
    description:
      "Practical security awareness habits for any organisation — phishing, passwords, devices, ransomware, social engineering, remote working and reporting culture.",
    keywords:
      "security awareness guide, phishing awareness, MFA, ransomware awareness, social engineering, reporting culture",
    sections: [
      {
        heading: "1. Phishing & Email Threats",
        points: [
          "Check the sender's actual email address, not just the display name — lookalike domains are the most common trick.",
          "Be suspicious of urgency — “act now” or “your account will be suspended” are pressure tactics designed to stop you thinking.",
          "Don't click links in unexpected emails — hover to preview the destination, or type the address directly.",
          "Never open unexpected attachments, even from someone you know — their account may be compromised.",
          "Watch for business email compromise — a message that looks like it's from a colleague or supplier asking for an urgent payment. Verify by phone.",
        ],
      },
      {
        heading: "2. Passwords & Access",
        points: [
          "Use a unique password for every account — reused passwords mean one breach compromises everything.",
          "Turn on MFA everywhere it's offered, and never approve a prompt you didn't request.",
          "Use a password manager rather than memorising or writing passwords down.",
          "Watch for fake login pages — check the web address before entering credentials.",
          "Never share your password with “IT support,” even if the caller sounds legitimate.",
        ],
      },
      {
        heading: "3. Device & Data Handling",
        points: [
          "Lock your screen every time you step away, even for a minute.",
          "Don't plug in USB drives or devices you don't recognise.",
          "Report a lost or stolen device immediately.",
          "Don't install software yourself — unauthorised software can bypass security controls without you realising it.",
          "Only store data in approved systems — not personal cloud drives, email, or USB drives.",
          "Check sharing settings before sending a cloud file link — know who it's actually visible to.",
        ],
      },
      {
        heading: "4. Ransomware Awareness",
        points: [
          "Know the warning signs — files suddenly renamed or inaccessible, a ransom note appearing on screen.",
          "Disconnect the device from the network immediately and report it — don't restart it or try to fix it yourself.",
          "Never pay a ransom or negotiate on your own.",
          "Remember a backup only helps if it was working before the incident — this is why tested backups matter as much as prevention.",
        ],
      },
      {
        heading: "5. Social Engineering",
        points: [
          "Be cautious of unexpected calls asking for passwords, remote access, or sensitive information — even from someone claiming to be IT or a senior colleague.",
          "Verify unusual requests through a second channel — call back on a known number, not the one they called from.",
          "Watch for impersonation of leadership, especially payment requests sent under time pressure.",
          "Don't let someone follow you through a secure door without their own access — it's fine to ask them to badge in themselves.",
        ],
      },
      {
        heading: "6. Remote Access & Wi-Fi Hygiene",
        points: [
          "Avoid public Wi-Fi for sensitive work where possible.",
          "Always connect through an approved secure or remote access method.",
          "Keep home routers and Wi-Fi passwords updated, not left on manufacturer defaults.",
          "Be as careful on a home network as you would be in an office.",
        ],
      },
      {
        heading: "7. Reporting Culture",
        points: [
          "Report anything suspicious immediately, even if you're not sure — a false alarm costs nothing; a missed one can cost a lot.",
          "Report your own mistakes too — fast reporting turns a near-miss into a non-event.",
          "There's no blame for reporting — the goal is catching problems early.",
          "Know your reporting channel in advance, before you need it.",
        ],
      },
      {
        heading: "8. Make It Stick — Testing and Tracking",
        points: [
          "Reading a guide once isn't training — habits form through repetition.",
          "Periodic simulated phishing tests reveal what's actually sinking in.",
          "Track completion and click-rates over time — a trend tells you more than a snapshot.",
          "Revisit this guide periodically — threats evolve, and so should awareness.",
        ],
      },
    ],
    cta: {
      text: "Run by a business that manages IT day to day? See how we deliver this as an ongoing service.",
      label: "Security Awareness Training",
      href: "/services/security-awareness",
    },
  },
  {
    slug: "security-dos-and-donts",
    type: "Checklist",
    title: "Security Do's and Don'ts",
    subtitle: "Quick reference for anyone, in any organisation.",
    description:
      "A one-page security do's and don'ts checklist covering phishing, passwords, devices, ransomware, social engineering, remote working and reporting.",
    keywords:
      "security dos and donts, security checklist, phishing checklist, password hygiene, ransomware response",
    sections: [
      {
        heading: "Phishing & Email",
        dos: ["Check the sender's actual address", "Verify urgent requests by phone"],
        donts: ["Don't click unexpected links/attachments", "Don't act on urgency alone"],
      },
      {
        heading: "Passwords & Access",
        dos: ["Unique password per account", "Turn on MFA everywhere"],
        donts: ["Don't reuse passwords", "Don't share passwords, ever"],
      },
      {
        heading: "Devices & Data",
        dos: ["Lock your screen when away", "Store data in approved systems"],
        donts: ["Don't plug in unknown USBs", "Don't install software yourself"],
      },
      {
        heading: "Ransomware",
        dos: ["Disconnect the device immediately", "Report it straight away"],
        donts: ["Don't restart or self-fix", "Don't pay or negotiate alone"],
      },
      {
        heading: "Social Engineering",
        dos: ["Verify requests via a second channel", "Ask visitors to badge in themselves"],
        donts: ["Don't act on caller urgency/seniority", "Don't hold the door for strangers"],
      },
      {
        heading: "Remote & Wi-Fi",
        dos: ["Use approved secure/remote access", "Keep home Wi-Fi updated"],
        donts: ["Don't use public Wi-Fi for sensitive work", "Don't assume home = automatically safe"],
      },
      {
        heading: "Reporting",
        dos: ["Report anything suspicious, even if unsure", "Report your own mistakes immediately"],
        donts: ["Don't stay quiet from fear of blame", "Don't wait for a “better time”"],
      },
    ],
    cta: {
      text: "Want your team trained on this, tracked and reported?",
      label: "Security Awareness Training",
      href: "/services/security-awareness",
    },
  },
];

export const getGuide = (slug?: string) => guides.find((g) => g.slug === slug);
