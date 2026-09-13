import { ResourceDoc } from "./types";

export const foundationDocs: ResourceDoc[] = [
  {
    slug: "network-security",
    kind: "pillar",
    eyebrow: "NETWORK & PERIMETER",
    navLabel: "Network & perimeter",
    title: "Network security: firewalls, remote access and safe Wi-Fi",
    readTime: "7 min read",
    shortAnswer:
      "Your network is no longer a tidy box with an office at the centre — it's staff working from home, data in the cloud, and devices connecting from anywhere. Good network security today means a properly configured firewall, remote access that verifies who and what is connecting rather than trusting the office wall, segmented Wi-Fi that keeps guests away from your systems, and filtering that blocks known-bad destinations. The old idea of a hard shell around a soft inside no longer protects you.",
    sections: [
      {
        heading: "Why \"the firewall\" isn't the whole answer any more",
        paragraphs: [
          "For years, network security meant one thing: a firewall at the office door. It still matters, but most of your business now happens outside that door — in Microsoft 365 or Google Workspace, on laptops at kitchen tables, over home broadband. A firewall guarding an office that half your team rarely visits protects less than it used to. The job now is to secure the connections and the destinations, wherever people actually work.",
        ],
      },
      {
        heading: "The pieces that matter",
        bullets: [
          {
            title: "A configured firewall, not just a firewall.",
            text: "A capable firewall matters, but out of the box it does little — the value is in how it's set up, kept patched and monitored.",
          },
          {
            title: "Modern remote access.",
            text: "A traditional VPN drops a remote user straight onto your internal network. Newer \"Zero Trust\" access instead checks the user and the device every time and grants only the specific app they need.",
          },
          {
            title: "Segmented, separate Wi-Fi.",
            text: "Guests, personal phones and smart devices should never share the network your business systems sit on.",
          },
          {
            title: "Web filtering / secure web gateway.",
            text: "Sitting between staff and the internet to block malicious sites and downloads before they load — and, delivered from the cloud, protecting laptops on and off the network (see the dedicated guide).",
          },
        ],
      },
    ],
    howWeHelp: {
      heading: "We secure the network your people actually use",
      body: "We configure, patch and monitor your firewall properly, move you from open-door VPNs towards access that verifies device and user, separate your Wi-Fi so guests and smart devices can't reach your systems, and add DNS filtering that protects laptops on and off the network. It's part of how we run your IT, with an audit trail behind it.",
    },
    obligations:
      "Firewalls are one of the five controls of **Cyber Essentials** outright, and secure network configuration supports **UK GDPR / the DPDP Act**. How you handle remote access and Wi-Fi is exactly what an assessor and a cyber-insurer will ask about.",
    faqs: [
      {
        question: "Isn't the firewall in our broadband router enough?",
        answer:
          "For the smallest setups it's a start, but a consumer router offers little control, visibility or protection for business systems. A properly configured business firewall, kept patched, is a different level.",
      },
      {
        question: "Is a VPN still the right way to work remotely?",
        answer:
          "It still works, but a VPN trusts anyone who connects. Zero-Trust access is the safer direction because it checks the device and grants only what's needed rather than the whole network.",
      },
    ],
    ctaHeading: "Want to know how exposed your network is?",
    ctaText:
      "We'll review your firewall, remote access and Wi-Fi setup and show you the gaps plainly.",
    readNext: [
      {
        label: "Web filtering and gateway security: controlling what staff can reach",
        href: "/resources/network-security/web-filtering-and-gateway-security",
      },
      {
        label: "Servers and Active Directory: securing your infrastructure",
        href: "/resources/servers-and-infrastructure",
      },
    ],
    description:
      "Good network security means a configured firewall, Zero-Trust remote access, segmented Wi-Fi and filtering that blocks known-bad destinations.",
    keywords: "network security, firewall, VPN, Zero Trust, Wi-Fi segmentation",
  },
  {
    slug: "secure-remote-working",
    parent: "network-security",
    kind: "article",
    eyebrow: "NETWORK & PERIMETER",
    navLabel: "Secure remote working",
    title: "How do I let staff work remotely without opening a hole in our security?",
    readTime: "4 min read",
    shortAnswer:
      "Secure remote working comes down to three things: verify the person with multi-factor authentication, make sure the device connecting is managed and healthy, and give people access only to the specific systems they need rather than the whole network. A traditional VPN does part of this but trusts too much; modern Zero-Trust access does it properly.",
    sections: [
      {
        heading: "The problem with the old VPN habit",
        paragraphs: [
          "A VPN builds a tunnel from a remote laptop straight onto your internal network — and then largely trusts it. If that laptop is a personal, unpatched machine, or the login was phished, the attacker is now inside, treated like any other office computer. It solved a connectivity problem, not a security one.",
        ],
      },
      {
        heading: "What good looks like",
        paragraphs: [
          "Verify the user with MFA every time. Check the device is one you manage and that it's patched and protected before it's allowed in. Grant access to named applications, not the entire network, so a compromised session reaches far less. This is the essence of Zero Trust, and for cloud-first businesses it's often simpler than the VPN it replaces.",
        ],
      },
    ],
    howWeHelp: {
      heading: "We give your team safe access from anywhere",
      body: "We set up remote access that checks the person and the device and grants only what each role needs — so home and travel working is easy for staff and safe for you, with none of the blanket trust an old VPN hands out.",
    },
    obligations:
      "Controlled remote access supports the secure-configuration and access-control expectations of **Cyber Essentials** and **UK GDPR / the DPDP Act**, and is a standard cyber-insurance question.",
    ctaHeading: "Is your remote access a tunnel or a front door?",
    ctaText:
      "We'll review how your team connects from outside the office and where the risk sits.",
    readNext: [
      { label: "Network security: the complete guide", href: "/resources/network-security" },
      {
        label: "Why is multi-factor authentication the most important control?",
        href: "/resources/identity-and-access/multi-factor-authentication",
      },
    ],
    description:
      "Secure remote working needs MFA, managed and healthy devices, and access limited to what each person needs — the essence of Zero Trust.",
    keywords: "remote working, Zero Trust, VPN, MFA, secure access",
  },
  {
    slug: "web-filtering-and-gateway-security",
    parent: "network-security",
    kind: "article",
    eyebrow: "NETWORK & PERIMETER",
    navLabel: "Web filtering & gateway security",
    title:
      "Web filtering and gateway security: controlling what your staff can reach online",
    readTime: "5 min read",
    shortAnswer:
      "Web filtering — also called a secure web gateway or content filtering — sits between your staff and the internet and decides what they're allowed to reach, blocking known-malicious sites, malware downloads and risky content before anything loads. It's one of the most effective, lowest-friction protections you can add, and modern versions follow the user everywhere through DNS filtering or a cloud gateway — not just when they're sat in the office.",
    sections: [
      {
        heading: "Why it earns its place",
        paragraphs: [
          "A great deal of trouble arrives through the browser: the link in a phishing email that gets clicked, a compromised website quietly serving malware, a lookalike login page harvesting passwords, or someone wandering somewhere they shouldn't at work. Web filtering is the layer that steps in at that moment — when a device tries to reach a bad destination, the connection simply doesn't complete. It's the natural partner to email security (which stops the message) and endpoint protection (which handles what lands): this stops the click from ever reaching the dangerous place.",
        ],
      },
      {
        heading: "How it works today",
        bullets: [
          {
            title: "DNS filtering",
            text: "— the simplest and often most cost-effective form: when a device tries to look up a known-bad or newly-registered malicious domain, the lookup is blocked. Light-touch, and it travels with the device.",
          },
          {
            title: "Secure web gateway (SWG)",
            text: "— a cloud gateway that inspects web traffic more deeply, blocks malware and enforces policy, and can inspect encrypted traffic where appropriate. Increasingly part of the wider \"SASE / SSE\" approach to securing access.",
          },
          {
            title: "Category & acceptable-use policy",
            text: "— sensible rules on what categories of site are allowed, aligned to your acceptable-use policy rather than heavy-handed blocking.",
          },
        ],
      },
      {
        heading: "The part that matters most now: it has to follow the laptop",
        paragraphs: [
          "Old-style web filtering lived on the office firewall and protected you only while you were in the building. With staff working from home and on the move, that leaves most of the week uncovered. Modern web filtering is delivered from the cloud, so the same protection applies whether the laptop is in the office, at home or in a café — which is exactly where it's needed.",
        ],
      },
    ],
    howWeHelp: {
      heading: "We put filtering in front of every device, everywhere",
      body: "We deploy cloud-delivered web filtering that blocks malicious and newly-registered sites and risky downloads, set category policy to match your acceptable-use rules without being heavy-handed, make sure it protects laptops on and off the network, and give you the reporting behind it. It's a quiet, high-value layer that stops a lot before it starts.",
    },
    obligations:
      "Web filtering supports the malware protection and secure configuration controls of **Cyber Essentials**, helps enforce your acceptable-use policy, and reduces the risk of data being sent to malicious destinations under **UK GDPR / the DPDP Act**. Cloud web/DNS filtering is a control cyber-insurers increasingly like to see.",
    faqs: [
      {
        question: "Isn't this just about blocking social media at work?",
        answer:
          "That's a minor side-benefit. The real value is security — blocking malware, phishing pages and malicious domains at the moment of connection. Category control of non-work sites is optional and yours to set.",
      },
      {
        question: "Does it still work when staff are at home?",
        answer:
          "Yes, if it's cloud-delivered — which is how we set it up. The protection travels with the device rather than living on the office firewall, so home and travel working is covered too.",
      },
    ],
    ctaHeading: "Want protection that blocks the bad click wherever your team is?",
    ctaText:
      "We'll review your web and DNS filtering — on and off the network — and show you the gaps.",
    readNext: [
      { label: "Network security: the complete guide", href: "/resources/network-security" },
      {
        label: "How do I stop phishing emails reaching my staff?",
        href: "/resources/email-security/stop-phishing",
      },
    ],
    description:
      "Web filtering blocks malicious sites and downloads before they load, and modern cloud-delivered versions follow staff on and off the network.",
    keywords: "web filtering, secure web gateway, DNS filtering, SASE, content filtering",
  },
  {
    slug: "servers-and-infrastructure",
    kind: "pillar",
    eyebrow: "SERVERS & INFRASTRUCTURE",
    navLabel: "Servers & Active Directory",
    title: "Servers and Active Directory: securing the machinery behind everything",
    readTime: "7 min read",
    shortAnswer:
      "Your servers and your directory — Active Directory on-premises, or Microsoft Entra ID and Google's directory in the cloud — are the machinery everything else runs on, which makes them the prize attackers work towards. Securing them means keeping them patched and hardened, protecting the directory that controls every login, knowing exactly what you have (you can't secure what you can't see), and watching for the tell-tale signs of someone moving through them.",
    sections: [
      {
        heading: "Why the directory is the real target",
        paragraphs: [
          "Active Directory (and its cloud equivalent, Entra ID) is the master list of who exists and what they can do. An attacker who reaches an ordinary laptop has one foothold; one who takes control of your directory effectively owns the business — every account, every server, every file. It's why so many ransomware attacks are, underneath, attacks on the directory. Protecting it — tiered admin accounts, tight control of privileged groups, monitoring for suspicious changes — is some of the highest-value security work there is.",
        ],
      },
      {
        heading: "The rest of the estate",
        bullets: [
          {
            title: "Patch and harden servers",
            text: "— physical and virtual — so known holes are closed and unused services switched off.",
          },
          {
            title: "Secure your virtualization and storage",
            text: "(VMware/Hyper-V, your file server or NAS), because a weakness there exposes everything running on top.",
          },
          {
            title: "Keep an accurate asset inventory.",
            text: "The unglamorous foundation: a current list of every server, device and system. The forgotten box in the corner is the one that gets you breached.",
          },
        ],
      },
    ],
    howWeHelp: {
      heading: "We look after the machinery — and the directory that runs it",
      body: "We patch and harden your servers, protect and monitor your Active Directory or Entra ID, secure your virtual and storage layers, and keep a live inventory of what you actually have, so nothing important is left unwatched. It's the quiet, foundational work that keeps everything above it standing.",
    },
    obligations:
      "Asset management and secure configuration are explicit domains of the **NCSC 10 Steps** and support **Cyber Essentials**; a current asset inventory is one of the first things an **ISO 27001** assessor asks to see.",
    faqs: [
      {
        question: "We've moved to the cloud — do we still have a \"directory\" to worry about?",
        answer:
          "Yes. In Microsoft 365 it's Entra ID; in Google Workspace it's the directory behind your accounts. It's just as central a target as on-premises Active Directory, and just as important to protect.",
      },
      {
        question: "Why does an asset list matter so much?",
        answer:
          "Because every unpatched, forgotten machine is an open door. If you don't know it exists, nobody is securing it — and attackers actively look for exactly those.",
      },
    ],
    ctaHeading: "Confident your servers and directory are locked down?",
    ctaText:
      "We'll review your infrastructure and directory security and flag what's exposed.",
    readNext: [
      {
        label: "Secure configuration and system hardening",
        href: "/resources/servers-and-infrastructure/secure-configuration-and-hardening",
      },
      {
        label: "Privileged access: why admin accounts need special handling",
        href: "/resources/identity-and-access/privileged-access",
      },
    ],
    description:
      "Servers and your directory — Active Directory or Entra ID — are the machinery attackers target. Patch, harden, protect and inventory the estate.",
    keywords: "servers, Active Directory, Entra ID, hardening, asset inventory",
  },
  {
    slug: "secure-configuration-and-hardening",
    parent: "servers-and-infrastructure",
    kind: "article",
    eyebrow: "SERVERS & INFRASTRUCTURE",
    navLabel: "Secure configuration & hardening",
    title:
      "Secure configuration and system hardening: closing the doors you're not using",
    readTime: "6 min read",
    shortAnswer:
      "Hardening means setting your systems up to be secure by default rather than leaving them as they arrive out of the box — which is convenient for setup and wide open for attackers. It's changing default passwords, switching off features, accounts and services you don't use, closing unnecessary ports, and applying recognised secure baselines like the CIS Benchmarks. It applies to everything: laptops, servers, firewalls, and your cloud services. It's one of the five Cyber Essentials controls, and it's some of the cheapest, highest-value security work there is — you're removing risk you were never actually using.",
    sections: [
      {
        heading: "Why \"out of the box\" is the problem",
        paragraphs: [
          "Vendors ship devices and software to be easy to set up and broadly compatible, not to be secure — so they arrive with default administrator passwords, sample accounts, extra services running and features enabled that most businesses never touch. Every one of those is a door, and attackers know the defaults for every common product by heart. The classic example is a shiny new firewall installed to protect the business while still on admin / admin. Hardening is simply shutting the doors you were never going to use.",
        ],
      },
      {
        heading: "What hardening covers across the estate",
        bullets: [
          {
            title: "Endpoints",
            text: "— Windows and macOS configured to a secure baseline, unnecessary features off, standard users rather than local admins.",
          },
          {
            title: "Servers",
            text: "— only the roles and services you need running; everything else disabled or removed.",
          },
          {
            title: "Network devices",
            text: "— firewalls, switches and routers with default credentials changed and management locked down.",
          },
          {
            title: "Cloud and Microsoft 365 / Google Workspace",
            text: "— the security settings tuned away from their permissive defaults.",
          },
          {
            title: "Applications and browsers",
            text: "— sensible, consistent settings rather than whatever came pre-set.",
          },
        ],
      },
      {
        heading: "You don't have to invent it: use a baseline",
        paragraphs: [
          "Hardening sounds like it needs deep expertise for every system, but you can stand on recognised, published baselines — the CIS Benchmarks, Microsoft's security baselines, vendor hardening guides. They tell you exactly which settings to change and why. The work is applying them consistently across your estate and keeping them applied.",
        ],
      },
      {
        heading: "The part people miss: configuration drifts",
        paragraphs: [
          "Hardening isn't a one-off. Every change, fix and new bit of kit nudges settings back towards convenient-but-open — a port reopened to troubleshoot and never closed, a new server built from an old template. That \"configuration drift\" quietly undoes your baseline over time, which is why hardening needs occasional review and monitoring, not a single pass at setup.",
        ],
      },
    ],
    howWeHelp: {
      heading: "We set your estate to secure-by-default — and keep it there",
      body: "We apply recognised hardening baselines across your laptops, servers, network devices and cloud services, strip out default credentials and unused features, and then watch for configuration drift so the estate doesn't quietly loosen over time. It's exactly the \"secure by default\" our name is built on — and it's the Cyber Essentials control most businesses partly miss.",
    },
    obligations:
      "Secure configuration is one of the five controls of **Cyber Essentials** by name, sits in the architecture-and-configuration domain of the **NCSC 10 Steps**, and is a core **ISO 27001** control. Consistent hardening is also strong evidence for insurers and client due-diligence.",
    faqs: [
      {
        question: "Isn't hardening just something you do to servers?",
        answer:
          "No — it applies to everything with settings: laptops, phones, that new firewall on its default password, and your Microsoft 365 or Google Workspace tenant. Anything shipped \"for convenience\" needs tightening.",
      },
      {
        question: "We hardened everything when we set it up — are we done?",
        answer:
          "Not permanently. Settings drift as changes are made and new kit is added, so a baseline needs periodic review and monitoring to stay true. Hardening is a state to maintain, not a task to finish.",
      },
    ],
    ctaHeading: "Want to know what's still on its default settings?",
    ctaText:
      "We'll review your configuration across devices, servers, network and cloud against a recognised baseline.",
    readNext: [
      {
        label: "Servers and Active Directory: securing your infrastructure",
        href: "/resources/servers-and-infrastructure",
      },
      {
        label: "Endpoint security: every laptop, desktop and phone",
        href: "/resources/endpoint-security",
      },
    ],
    description:
      "Hardening sets systems secure-by-default: changing default passwords, disabling unused features, and applying baselines like the CIS Benchmarks.",
    keywords: "secure configuration, hardening, CIS Benchmarks, Cyber Essentials, configuration drift",
  },
  {
    slug: "endpoint-security",
    kind: "pillar",
    eyebrow: "ENDPOINT SECURITY",
    navLabel: "Endpoint security",
    title: "Endpoint security: protecting every laptop, desktop and phone",
    readTime: "7 min read",
    shortAnswer:
      "Every device your staff use is a way into your business, and they're now scattered well beyond the office. Endpoint security is four habits done consistently: keep everything patched, protect each device with modern endpoint protection (EDR, not just antivirus), encrypt the disks so a lost laptop isn't a data breach, and manage devices centrally so you can enforce all of that and wipe a device that goes missing. Patching alone prevents more incidents than any single tool.",
    sections: [
      {
        heading: "Patch management: the boring control that matters most",
        paragraphs: [
          "The majority of breaches exploit a known weakness for which a fix already existed. Attackers don't need a clever new trick when so many businesses are weeks or months behind on updates. Reliable, tested patching — across operating systems, applications and firmware, on endpoints and servers alike — is the single highest-value thing most businesses can tighten. It's unglamorous, which is exactly why it slips.",
        ],
      },
      {
        heading: "The rest of the endpoint picture",
        bullets: [
          {
            title: "EDR over plain antivirus.",
            text: "Traditional antivirus spots known bad files; endpoint detection and response watches behaviour and catches the novel attacks antivirus misses.",
          },
          {
            title: "Disk encryption.",
            text: "BitLocker (Windows) and FileVault (Mac) mean a lost or stolen laptop is an inconvenience, not a reportable data breach.",
          },
          {
            title: "Device management and lifecycle.",
            text: "Central management (MDM) lets you enforce settings, push updates, separate work from personal on phones, and wipe a device that's lost — from setup on day one through to secure wiping at retirement.",
          },
        ],
      },
    ],
    howWeHelp: {
      heading: "We keep every device patched, protected and accounted for",
      body: "We run automated, tested patching across your devices and servers, deploy and monitor EDR, enforce disk encryption everywhere, and manage the whole device lifecycle — provisioning starters, applying security policy, and wiping and retiring kit cleanly at the end. Lost laptops become a shrug, not a crisis.",
    },
    obligations:
      "Patching (security update management), malware protection and secure configuration are three of the five **Cyber Essentials** controls, and device encryption is a standard **UK GDPR / DPDP Act** safeguard against loss. Patch and encryption status is exactly what insurers and auditors check.",
    faqs: [
      {
        question: "Windows updates itself — isn't that enough?",
        answer:
          "Automatic updates help, but they miss third-party software (the common way in), can't confirm every device actually applied them, and need managing so a bad update doesn't break things. Managed patching closes those gaps.",
      },
      {
        question: "Do we really need EDR as well as antivirus?",
        answer:
          "EDR is the modern successor to antivirus, not an extra on top. It catches the behaviour-based attacks that signature antivirus alone doesn't.",
      },
    ],
    ctaHeading: "Want to know if every device is patched and encrypted?",
    ctaText:
      "We'll check patch status, encryption and endpoint protection across your fleet.",
    readNext: [
      {
        label: "Getting starters and leavers right: onboarding and offboarding",
        href: "/resources/identity-and-access/onboarding-offboarding",
      },
      {
        label: "Data security: classify, encrypt and protect what matters",
        href: "/resources/data-security",
      },
    ],
    description:
      "Endpoint security means consistent patching, EDR instead of plain antivirus, disk encryption, and central device management across the fleet.",
    keywords: "endpoint security, EDR, patch management, disk encryption, MDM",
  },
  {
    slug: "mobile-device-management-and-byod",
    parent: "endpoint-security",
    kind: "article",
    eyebrow: "ENDPOINT SECURITY",
    navLabel: "MDM & BYOD",
    title:
      "Mobile device management and BYOD: securing phones and personal devices",
    readTime: "5 min read",
    shortAnswer:
      "Every phone and laptop your staff use — company-owned or their own — carries access to your email, files and systems, and it leaves the building every day. Mobile device management (MDM) is how you apply security to those devices centrally: enforce a passcode and encryption, push updates, keep work data separate from personal, and wipe a device that's lost or stolen. Letting people use their own devices (BYOD) is fine and often sensible — but only with MDM and a clear policy drawing the line between company data and someone's private life.",
    sections: [
      {
        heading: "Why devices are the loose end",
        paragraphs: [
          "Your carefully secured systems are reached, in practice, from a scatter of phones and laptops you may never physically see — a personal iPhone checking work email on the train, a home laptop opening a shared file. Each is a small door into your business, and without central management you have no way to insist any of them is even passcode-locked, let alone encrypted or up to date. MDM is what turns \"we hope their phone is secure\" into \"we know it is.\"",
        ],
      },
      {
        heading: "What MDM actually does",
        bullets: [
          {
            title: "Enforces the basics",
            text: "— a passcode or biometric lock and device encryption, so a lost device isn't an open door.",
          },
          {
            title: "Keeps devices current",
            text: "— pushes operating-system and app updates and security settings, rather than trusting each person to.",
          },
          {
            title: "Separates work from personal",
            text: "— a managed \"work container\" holds company email and files apart from someone's own photos and apps.",
          },
          {
            title: "Lets you act remotely",
            text: "— lock or wipe a lost device, and remove company data when someone leaves.",
          },
        ],
        paragraphs: [
          "In practice this is Microsoft Intune for a Microsoft 365 business, or Google's endpoint management for Google Workspace — both do the job well once set up properly.",
        ],
      },
      {
        heading: "BYOD, done so it's fair to everyone",
        paragraphs: [
          "Bring-your-own-device is appealing — less kit to buy, people using phones they like — but it raises a real worry on both sides: you don't want company data sitting unprotected on a device you don't control, and staff don't want their employer able to see their personal messages or wipe their family photos. Done properly, MDM resolves both. It manages only the work container, so the company can enforce security on and later remove its data without ever touching personal content — and a plain-English BYOD policy sets out exactly what's managed, what isn't, and what happens when someone leaves. Transparency here is what makes BYOD work.",
        ],
      },
    ],
    howWeHelp: {
      heading: "We bring every device — yours and theirs — under sensible control",
      body: "We enrol your phones and laptops into Intune or Google endpoint management, enforce passcodes, encryption and updates, set up a work/personal split so BYOD is safe and fair, and give you a clear BYOD policy staff can actually sign up to. A lost phone becomes a remote wipe of company data, not a data breach — and when someone leaves, their personal device is cleared of your data without touching the rest.",
    },
    obligations:
      "Managed, encrypted, passcode-locked devices satisfy the secure-configuration and malware-protection controls of **Cyber Essentials**, and being able to protect and selectively wipe personal data on mobiles is a direct **UK GDPR / DPDP Act** safeguard. Mobile and BYOD handling is a common cyber-insurance and client-questionnaire item.",
    faqs: [
      {
        question: "If we manage a personal phone, can we see the employee's private data?",
        answer:
          "No — properly configured MDM manages only the work container (company email, files and apps). Personal messages, photos and apps stay private and out of the company's view, and the policy should say so plainly.",
      },
      {
        question: "What happens to a personal phone if it's lost, or the person leaves?",
        answer:
          "We perform a selective wipe — company data is removed, the person's own content is untouched. That's the whole point of separating the two.",
      },
    ],
    ctaHeading: "Do you actually control the devices reaching your data?",
    ctaText:
      "We'll review your phones and laptops — company and personal — and show you what's unmanaged.",
    readNext: [
      { label: "Endpoint security: the complete guide", href: "/resources/endpoint-security" },
      {
        label: "The IT and security policies every business actually needs",
        href: "/resources/security-awareness/it-and-security-policies",
      },
    ],
    description:
      "MDM applies security centrally to phones and laptops — passcodes, encryption, updates and remote wipe — and makes BYOD safe and fair.",
    keywords: "MDM, BYOD, mobile device management, Intune, device encryption",
  },
  {
    slug: "domain-and-dns-security",
    kind: "pillar",
    eyebrow: "DOMAIN & DNS",
    navLabel: "Domain & DNS",
    title: "Domain and DNS security: protecting the foundation of your online presence",
    readTime: "5 min read",
    shortAnswer:
      "Your domain name is the foundation your website, email and identity all sit on — and it's often the least protected thing you own. Domain and DNS security means locking the domain against being stolen or altered, keeping its DNS records correct and protected, managing your SSL/TLS certificates so they never lapse, and — importantly — making sure the domain is registered in your company's name, not your web designer's.",
    sections: [
      {
        heading: "Why the domain is a soft target",
        paragraphs: [
          "Control of your domain is control of your online identity. If an attacker changes your DNS, they can redirect your website, intercept your email, and impersonate you convincingly — and because domains are often set up once years ago and forgotten, they're frequently guarded by a weak, shared password on an account nobody remembers. Locking it down is cheap and rarely done.",
        ],
      },
      {
        heading: "What to get right",
        bullets: [
          {
            title: "Protect the registrar account",
            text: "with strong, unique credentials and MFA, and turn on the registrar's domain-lock to prevent unauthorised transfers.",
          },
          {
            title: "Manage DNS carefully",
            text: "— including the SPF, DKIM and DMARC records that stop email spoofing (see the Email guides).",
          },
          {
            title: "Track SSL/TLS certificates",
            text: "so they renew before they expire — a lapsed certificate takes your site offline and spooks visitors.",
          },
          {
            title: "Own your own domain.",
            text: "It should be registered to your business, with you holding the account — not left in a supplier's name where it becomes a hostage.",
          },
        ],
      },
    ],
    howWeHelp: {
      heading: "We lock down and look after your domain",
      body: "We secure your registrar account, switch on domain-lock, keep your DNS and email-authentication records correct, and manage certificate renewals so nothing lapses — with the domain properly in your name. The foundation everything else sits on stops being the weak link.",
    },
    obligations:
      "Domain and DNS integrity underpins the secure-configuration expectations of **Cyber Essentials** and the email-security controls insurers and clients check; a hijacked domain is a serious **UK GDPR / DPDP Act** incident in its own right.",
    faqs: [
      {
        question: "Who owns our domain — us or our web company?",
        answer:
          "Worth checking today. It should be registered to your business with you holding the account. If it's in a supplier's name, moving or protecting it later can be painful — we help put ownership back where it belongs.",
      },
    ],
    ctaHeading: "Not sure who controls your domain?",
    ctaText:
      "We'll check your domain lock, DNS, certificates and ownership, and tell you what to fix.",
    readNext: [
      {
        label: "What is DMARC — and does my business actually need it?",
        href: "/resources/email-security/what-is-dmarc",
      },
      { label: "Network security: the complete guide", href: "/resources/network-security" },
    ],
    description:
      "Domain and DNS security means locking your registrar account, protecting DNS records, managing certificates, and owning your own domain.",
    keywords: "domain security, DNS, domain lock, SSL/TLS certificates, DMARC",
  },
];
