import { Landmark, Scale, BadgePoundSterling, Rocket, Building2, Banknote } from "lucide-react";
import { Link } from "react-router-dom";

import aadicuraLogo from "@/assets/logos/aadicura.png";
import zeoniusLogo from "@/assets/logos/zeonius.png";
import cognisLogo from "@/assets/logos/cognis.png";
import bdsoftLogo from "@/assets/logos/bdsoft.png";
import iqonicLogo from "@/assets/logos/iqonic.png";
import godeskLogo from "@/assets/logos/godesk.svg";
import amanstraLogo from "@/assets/logos/amanstra.png";
import leadratLogo from "@/assets/logos/leadrat.png";
import healthassLogo from "@/assets/logos/healthass.png";
import groupLogo from "@/assets/logos/group.png";
import rocketnewsLogo from "@/assets/logos/rocketnews.png";
import reinventLogo from "@/assets/logos/reinvent.png";
import eaglyticsLogo from "@/assets/logos/eaglytics.png";
import web3tixLogo from "@/assets/logos/web3tix.png";
import ustigersLogo from "@/assets/logos/ustigers.png";
import ifutureLogo from "@/assets/logos/ifuture.png";
import kingswayLogo from "@/assets/logos/kingsway.png";
import swiftcheckLogo from "@/assets/logos/swiftcheck.png";
import xorecLogo from "@/assets/logos/xorec.png";
import leonstrideLogo from "@/assets/logos/leonstride.png";
import wellversedLogo from "@/assets/logos/wellversed.png";
import infodotLogo from "@/assets/logos/infodot.webp";
import yoloLogo from "@/assets/logos/yolo.png";
import icrederityLogo from "@/assets/logos/icrederity.webp";
import worcoorLogo from "@/assets/logos/worcoor.png";
import privueLogo from "@/assets/logos/privue.webp";
import settlrsLogo from "@/assets/logos/settlrs.png";
import bokaapLogo from "@/assets/logos/bokaap.svg";
import revassureLogo from "@/assets/logos/revassure.png";
import qblueLogo from "@/assets/logos/qblue.webp";

// NOTE: These logo rows are retained only for backwards compatibility with
// other pages (e.g. Enquiry) that still import them. They are no longer
// rendered by the ClientLogos section itself, which now shows the
// industries we serve instead of third-party marketing-client logos.
export const row1Logos = [
  { src: zeoniusLogo, alt: "Zeonius IT Services logo" },
  { src: aadicuraLogo, alt: "Aadicura logo" },
  { src: godeskLogo, alt: "Godesk logo" },
  { src: cognisLogo, alt: "Cognis logo", dark: true },
  { src: bdsoftLogo, alt: "BD Software logo" },
  { src: leadratLogo, alt: "Leadrat logo", dark: true },
  { src: healthassLogo, alt: "Healthass logo", dark: true },
  { src: infodotLogo, alt: "Infodot Technologies logo" },
  { src: yoloLogo, alt: "Yolo logo" },
  { src: icrederityLogo, alt: "iCrederity logo" },
];

export const row2Logos = [
  { src: ustigersLogo, alt: "US Tigers logo" },
  { src: ifutureLogo, alt: "iFuture logo" },
  { src: iqonicLogo, alt: "IQONIC Design logo" },
  { src: amanstraLogo, alt: "Amanstra Consulting logo" },
  { src: groupLogo, alt: "Group logo", dark: true },
  { src: rocketnewsLogo, alt: "Rocket News logo" },
  { src: reinventLogo, alt: "Reinvent logo" },
  { src: worcoorLogo, alt: "WorCoor logo" },
  { src: privueLogo, alt: "Privue logo" },
  { src: settlrsLogo, alt: "Settlrs logo" },
];

export const row3Logos = [
  { src: kingswayLogo, alt: "Kingsway logo" },
  { src: swiftcheckLogo, alt: "Swift Check AI logo" },
  { src: eaglyticsLogo, alt: "Eaglytics Co logo" },
  { src: web3tixLogo, alt: "Web3Tix logo" },
  { src: xorecLogo, alt: "Xorec logo" },
  { src: leonstrideLogo, alt: "Leonstride Technologies logo" },
  { src: wellversedLogo, alt: "Wellversed logo", dark: true },
  { src: bokaapLogo, alt: "Bokaap logo" },
  { src: revassureLogo, alt: "ReAssure logo" },
  { src: qblueLogo, alt: "QBlue logo", dark: true },
];

export const industries = [
  { icon: Landmark, label: "Accountants", href: "/industries/accountants" },
  { icon: Scale, label: "Law firms", href: "/industries/law-firms" },
  { icon: Banknote, label: "Financial services", href: "/industries/financial-services" },
  { icon: BadgePoundSterling, label: "Fintech", href: "/industries/financial-services" },
  { icon: Building2, label: "Professional services", href: "/industries" },
  { icon: Rocket, label: "Funded startups", href: "/industries/financial-services" },
];

export const ClientLogos = () => {
  return (
    <section className="section-spacing overflow-hidden" aria-labelledby="client-logos-heading">
      <div className="mb-10 md:mb-12 text-center px-4">
        <h3 id="client-logos-heading" className="text-2xl md:text-3xl font-bold">
          Built for regulated UK industries
        </h3>
        <p className="text-muted-foreground mt-2">
          25–300 user businesses that need security, evidence and accountability built in
        </p>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <Link
              to={industry.href}
              key={index}
              className="group flex flex-col items-center justify-center gap-3 h-28 md:h-32 px-4 py-4 rounded-xl border bg-card border-border/60 hover:border-primary/50 transition-colors"
            >
              <industry.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              <span className="text-sm md:text-base font-medium text-center group-hover:text-primary transition-colors">
                {industry.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
