import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface SiteSettings {
  company: {
    name: string;
    tagline: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    logo: string;
  };
  social: {
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
    youtube: string;
  };
  integrations: {
    whatsappNumber: string;
    calendlyLink: string;
    googleAnalyticsId: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    ogImage: string;
  };
}

const defaultSettings: SiteSettings = {
  company: {
    name: "Infodot",
    tagline: "We run your IT. You own your IT.",
    description: "Managed IT for the regulated industries we serve — accountancy, legal and financial services. Secure by default, always audit-ready, delivered remotely since 1996.",
    email: "hello@infodot.uk",
    phone: "",
    address: "Infodot Technologies Pvt Ltd, Bangalore, India — serving clients remotely",
    logo: "",
  },
  social: {
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
    youtube: "",
  },
  integrations: {
    whatsappNumber: "",
    calendlyLink: "",
    googleAnalyticsId: "",
  },
  seo: {
    metaTitle: "Infodot — Managed IT for Regulated Industries",
    metaDescription: "Managed IT, secure by default and always audit-ready, for accountancy, legal and financial services firms.",
    keywords: "managed IT, IT support for accountants, IT support for law firms, Cyber Essentials, ISO 27001, co-managed IT",
    ogImage: "",
  },
};

export const useSiteSettings = () => {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const { data, error } = await supabase
          .from("site_settings")
          .select("value")
          .eq("key", "main_settings")
          .maybeSingle();

        if (!error && data?.value) {
          const dbSettings = data.value as Record<string, unknown>;
          setSettings({
            company: {
              ...defaultSettings.company,
              ...(dbSettings.company as object || {}),
            },
            social: {
              ...defaultSettings.social,
              ...(dbSettings.social as object || {}),
            },
            integrations: {
              ...defaultSettings.integrations,
              ...(dbSettings.integrations as object || {}),
            },
            seo: {
              ...defaultSettings.seo,
              ...(dbSettings.seo as object || {}),
            },
          });
        }
      } catch (error) {
        console.error("Failed to fetch site settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return { settings, loading };
};

export type { SiteSettings };
