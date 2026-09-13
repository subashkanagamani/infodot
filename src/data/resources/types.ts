export interface ResourceBullet {
  /** Optional lead-in phrase, rendered bold. */
  title?: string;
  text: string;
}

export interface ResourceSection {
  heading: string;
  paragraphs?: string[];
  bullets?: ResourceBullet[];
}

export interface ResourceFaq {
  question: string;
  answer: string;
}

export interface ResourceLink {
  label: string;
  href: string;
}

export interface ResourceDoc {
  /** URL segment, e.g. "network-security" or "secure-remote-working". */
  slug: string;
  /** Pillar slug for cluster articles; omitted for pillars. */
  parent?: string;
  kind: "pillar" | "article";
  /** Section eyebrow, e.g. "NETWORK & PERIMETER". */
  eyebrow: string;
  /** Short label for breadcrumbs and cross-links. */
  navLabel: string;
  title: string;
  readTime: string;
  shortAnswer: string;
  sections: ResourceSection[];
  howWeHelp: { heading: string; body: string };
  /** "How this maps to your obligations" — **bold** markers supported. */
  obligations: string;
  faqs?: ResourceFaq[];
  ctaHeading: string;
  ctaText: string;
  readNext: ResourceLink[];
  /** SEO meta description, under 160 characters. */
  description: string;
  keywords?: string;
}

export const resourcePath = (doc: ResourceDoc) =>
  doc.parent ? `/resources/${doc.parent}/${doc.slug}` : `/resources/${doc.slug}`;
