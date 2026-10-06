import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

const SITE_ORIGIN = "https://infodot.consultwithprofessionals.com";
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-image.png`;

export const SEOHead = ({
  title = "Infodot — Managed IT for Regulated Industries",
  description = "Managed IT for the regulated industries we serve — accountancy, legal and financial services — run remotely from an ISO 27001:2022-certified team since 1996. We run your IT. You own your IT.",
  keywords = "managed IT, IT support for accountants, IT support for law firms, IT support for financial services, Cyber Essentials, ISO 27001, cyber insurance readiness, co-managed IT",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  canonicalUrl,
}: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    // Resolve canonical: explicit prop > current pathname against canonical origin.
    const resolvedCanonical =
      canonicalUrl ||
      (typeof window !== "undefined"
        ? `${SITE_ORIGIN}${window.location.pathname}`
        : SITE_ORIGIN);

    // Ensure ogImage is absolute.
    const resolvedOgImage = ogImage.startsWith("http")
      ? ogImage
      : `${SITE_ORIGIN}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;

    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", resolvedOgImage, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:url", resolvedCanonical, true);

    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", resolvedOgImage);
    updateMetaTag("twitter:url", resolvedCanonical);

    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement("link");
      canonicalElement.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute("href", resolvedCanonical);
  }, [title, description, keywords, ogImage, ogType, canonicalUrl]);

  return null;
};
