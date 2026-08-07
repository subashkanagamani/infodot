import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const sections = [
  {
    h: "1. Introduction",
    body: (
      <p className="text-muted-foreground">
        This Privacy Policy explains how Infodot Technologies Pvt Ltd ("Infodot UK", "we", "us", "our"), the data controller for personal data collected through this website, processes your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Infodot UK provides managed IT services to regulated UK industries and serves clients across the UK and EU remotely from our delivery centre in Bangalore, India.
      </p>
    ),
  },
  {
    h: "2. Information We Collect",
    body: (
      <>
        <p className="text-muted-foreground mb-4">
          We collect several different types of information for various purposes to provide and improve our service to you:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
          <li>Personal identification information (Name, email address, phone number)</li>
          <li>Company information</li>
          <li>Usage data and analytics</li>
          <li>Cookies and tracking technologies</li>
        </ul>
      </>
    ),
  },
  {
    h: "3. How We Use Your Information",
    body: (
      <>
        <p className="text-muted-foreground mb-4">
          We use the collected data for various purposes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information to improve our service</li>
          <li>To monitor the usage of our service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>
      </>
    ),
  },
  {
    h: "4. Data Security",
    body: (
      <p className="text-muted-foreground">
        The security of your data is important to us. We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
      </p>
    ),
  },
  {
    h: "5. Third-Party Services",
    body: (
      <p className="text-muted-foreground mb-4">
        We may employ third-party companies and individuals to facilitate our service. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
      </p>
    ),
  },
  {
    h: "6. Cookies",
    body: (
      <p className="text-muted-foreground">
        We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
      </p>
    ),
  },
  {
    h: "7. Your Rights",
    body: (
      <>
        <p className="text-muted-foreground mb-4">
          You have the right to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Request transfer of your data (data portability)</li>
          <li>Withdraw consent</li>
          <li>Lodge a complaint with the UK Information Commissioner's Office (ICO) at ico.org.uk if you believe your data protection rights have been infringed</li>
        </ul>
      </>
    ),
  },
  {
    h: "8. Children's Privacy",
    body: (
      <p className="text-muted-foreground">
        Our service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from children under 18.
      </p>
    ),
  },
  {
    h: "9. Changes to This Privacy Policy",
    body: (
      <p className="text-muted-foreground">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
      </p>
    ),
  },
  {
    h: "10. Contact Us",
    body: (
      <>
        <p className="text-muted-foreground">
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
          <li>By email: hello@infodot.uk</li>
          <li>By visiting this page on our website: Contact Us</li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />
      <BackToTop />

      <SEOHead
        title="Privacy Policy | Infodot UK"
        description="Read Infodot UK's privacy policy to understand how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, personal information"
      />

      <section className="bg-secondary pb-10 pt-28 md:pt-32 md:pb-14">
        <div className="container-custom">
          <Breadcrumbs />
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)] animate-slide-up">
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Legal</span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-[1.08]">Privacy Policy</h1>
            <p className="mt-4 text-muted-foreground">Last updated: December 2, 2025</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-12 gap-4">
            {sections.map((s, i) => (
              <div
                key={s.h}
                className="col-span-12 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] animate-slide-up"
                style={{ animationDelay: `${Math.min(i * 0.04, 0.4)}s` }}
              >
                <h2 className="font-display text-2xl font-bold mb-4">{s.h}</h2>
                {s.body}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
