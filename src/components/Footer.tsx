import { Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Newsletter } from "@/components/Newsletter";
import logo from "@/assets/infodot-logo.png";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { useSection } from "@/hooks/usePageContent";

interface FooterLink { label: string; href: string }
interface FooterColumns {
  brandBlurb: string;
  certsLine: string;
  poweredByLine: string;
  industriesTitle: string;
  industriesLinks: FooterLink[];
  servicesTitle: string;
  serviceLinks: FooterLink[];
  solutionsTitle: string;
  solutionsLinks: FooterLink[];
  companyTitle: string;
  companyLinks: FooterLink[];
  quickMessageTitle: string;
  copyright: string;
  sinceLine: string;
}

const FOOTER_DEFAULTS: FooterColumns = {
  brandBlurb: "You run your business. We run your IT.",
  certsLine: "ISO 27001:2022 certified · GDPR-aligned data processing · SOC 2 attestation in progress",
  poweredByLine: "Managed · Secure by Default · Always Audit-Ready · Powered by Z360",
  industriesTitle: "WHO WE SERVE",
  industriesLinks: [
    { label: "Small & Growing Firms", href: "/small-office" },
    { label: "Accountants", href: "/industries/accountants" },
    { label: "Law firms", href: "/industries/law-firms" },
    { label: "Financial services", href: "/industries/financial-services" },
    { label: "Healthcare / NHS suppliers", href: "/industries/healthcare-nhs" },
  ],
  servicesTitle: "SERVICES",
  serviceLinks: [
    { label: "Managed IT", href: "/services" },
    { label: "Secure by Default", href: "/services" },
    { label: "Always Audit-Ready", href: "/services" },
    { label: "Transition & Exit", href: "/services/it-transition-exit" },
  ],
  solutionsTitle: "SOLUTIONS",
  solutionsLinks: [
    { label: "Small & Growing Firms", href: "/small-office" },
    { label: "Z360", href: "/z360" },
    { label: "Cyber Insurance", href: "/cyber-insurance-readiness" },
    { label: "Cyber Essentials", href: "/cyber-essentials-readiness" },
  ],
  companyTitle: "COMPANY",
  companyLinks: [
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
    { label: "Partners", href: "/about#partners" },
    { label: "Legal & Privacy", href: "/legal" },
  ],
  quickMessageTitle: "QUICK MESSAGE",
  copyright: "© {year} Infodot Technologies Pvt Ltd · Bangalore, India · serving UK businesses remotely",
  sinceLine: "hello@infodot.co.uk · Since 1996",
};

export const Footer = () => {
  const { settings } = useSiteSettings();
  const f = useSection<FooterColumns>("footer", "main", FOOTER_DEFAULTS);

  const socialLinks = [
    { icon: Linkedin, url: settings.social.linkedin, label: "LinkedIn" },
    { icon: Twitter, url: settings.social.twitter, label: "Twitter" },
    { icon: Facebook, url: settings.social.facebook, label: "Facebook" },
    { icon: Instagram, url: settings.social.instagram, label: "Instagram" },
    { icon: Youtube, url: settings.social.youtube, label: "YouTube" },
  ].filter(link => link.url && link.url.trim() !== "");

  return (
    <footer className="bg-card/80 border-t border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom py-16 relative">
        {/* Newsletter Section */}
        <div className="mb-16">
          <Newsletter />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4 group">
              <img src={logo} alt="Infodot Technologies logo" className="h-10 w-auto group-hover:scale-105 transition-transform" />
            </Link>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              {settings.company.description || f.brandBlurb || FOOTER_DEFAULTS.brandBlurb}
            </p>
            <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
              {f.certsLine || FOOTER_DEFAULTS.certsLine}
            </p>
            <p className="text-xs font-semibold text-primary mb-6">
              {f.poweredByLine || FOOTER_DEFAULTS.poweredByLine}
            </p>
            {socialLinks.length > 0 && (
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold mb-6 text-primary">{f.industriesTitle || FOOTER_DEFAULTS.industriesTitle}</h4>
            <ul className="space-y-3">
              {(f.industriesLinks?.length ? f.industriesLinks : FOOTER_DEFAULTS.industriesLinks).map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-primary">{f.servicesTitle || FOOTER_DEFAULTS.servicesTitle}</h4>
            <ul className="space-y-3">
              {(f.serviceLinks?.length ? f.serviceLinks : FOOTER_DEFAULTS.serviceLinks).map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold mb-6 text-primary">{f.solutionsTitle || FOOTER_DEFAULTS.solutionsTitle}</h4>
            <ul className="space-y-3">
              {(f.solutionsLinks?.length ? f.solutionsLinks : FOOTER_DEFAULTS.solutionsLinks).map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6 text-primary">{f.companyTitle || FOOTER_DEFAULTS.companyTitle}</h4>
            <ul className="space-y-3 mb-8">
              {(f.companyLinks?.length ? f.companyLinks : FOOTER_DEFAULTS.companyLinks).map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              {(f.copyright || FOOTER_DEFAULTS.copyright).replace("{year}", String(new Date().getFullYear()))}
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              {f.sinceLine || FOOTER_DEFAULTS.sinceLine}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 md:justify-end">
            <span className="text-sm text-muted-foreground">Marketing by</span>
            <a
              href="https://www.essenzimedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-base font-bold tracking-tight text-primary hover:underline"
            >
              Essenzi Media Ltd
            </a>
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              United Kingdom
            </span>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Also serving India — <a href="https://infodot.co.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Infodot.co.in</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
