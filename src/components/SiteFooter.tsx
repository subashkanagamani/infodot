import { useLocation } from "react-router-dom";
import { Footer } from "@/components/Footer";

/**
 * Renders the marketing footer on every public page.
 * Admin screens keep their own chrome, so they are excluded.
 */
export const SiteFooter = () => {
  const { pathname } = useLocation();

  if (pathname === "/admin" || pathname.startsWith("/admin/")) return null;

  return <Footer />;
};
