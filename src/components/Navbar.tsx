import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { SearchDialog } from "@/components/SearchDialog";
import { useSection } from "@/hooks/usePageContent";
import { cn } from "@/lib/utils";
import logo from "@/assets/infodot-logo.png";
import { managedItLinks, cybersecurityLinks, complianceLinks, industryLinks, resourceLinks, aboutLinks, topLevelLinks, NavLinkItem } from "@/data/siteNav";

interface NavContent { ctaLabel: string; ctaHref: string }
const NAV_DEFAULTS: NavContent = { ctaLabel: "Book Free IT Assessment", ctaHref: "/contact" };

type MenuKey = "managed-it" | "cybersecurity" | "compliance" | "industries" | "resources" | "about";

const MenuLink = ({ link, onClick }: { link: NavLinkItem; onClick: () => void }) => (
  <Link
    to={link.href}
    onClick={onClick}
    className="block rounded-lg px-3 py-2 transition-colors hover:bg-secondary"
  >
    <span className="block text-sm font-medium leading-snug">{link.label}</span>
    {link.description && (
      <span className="mt-0.5 block text-xs leading-snug text-muted-foreground line-clamp-1">
        {link.description}
      </span>
    )}
  </Link>
);

export const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();
  const nav = useSection<NavContent>("nav", "main", NAV_DEFAULTS);

  useEffect(() => { setOpenMenu(null); }, [location.pathname]);

  const open = (key: MenuKey) => { clearTimeout(closeTimer.current); setOpenMenu(key); };
  const scheduleClose = () => { clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setOpenMenu(null), 120); };
  const close = () => { clearTimeout(closeTimer.current); setOpenMenu(null); };

  const triggers: { key: MenuKey; label: string; href: string }[] = [
    { key: "managed-it", label: "Managed IT", href: "/services" },
    { key: "cybersecurity", label: "Cybersecurity", href: "/services" },
    { key: "compliance", label: "Compliance", href: "/services" },
    { key: "industries", label: "Industries", href: "/industries" },
    { key: "resources", label: "Resources", href: "/resources" },
    { key: "about", label: "About", href: "/about" },
  ];

  const columns: Record<MenuKey, { links: NavLinkItem[]; footer?: { label: string; href: string } }> = {
    "managed-it": { links: managedItLinks, footer: { label: "View all services", href: "/services" } },
    cybersecurity: { links: cybersecurityLinks, footer: { label: "View all services", href: "/services" } },
    compliance: { links: complianceLinks, footer: { label: "View all services", href: "/services" } },
    industries: { links: industryLinks, footer: { label: "All industries", href: "/industries" } },
    resources: { links: resourceLinks },
    about: { links: aboutLinks },
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-lg border-b border-border/60"
      onMouseLeave={scheduleClose}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center group cursor-pointer" onClick={close}>
            <img src={logo} alt="Infodot Technologies logo" className="h-9 w-auto group-hover:scale-105 transition-transform" />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {triggers.map((t) => (
              <button
                key={t.key}
                onMouseEnter={() => open(t.key)}
                onFocus={() => open(t.key)}
                onClick={() => setOpenMenu(openMenu === t.key ? null : t.key)}
                aria-expanded={openMenu === t.key}
                className={cn(
                  "flex items-center gap-1 rounded-lg px-2.5 py-2 text-sm whitespace-nowrap transition-colors",
                  openMenu === t.key ? "text-primary bg-secondary" : "hover:text-primary"
                )}
              >
                {t.label}
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", openMenu === t.key && "rotate-180")} />
              </button>
            ))}
            {topLevelLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={close}
                onMouseEnter={close}
                className="rounded-lg px-2.5 py-2 text-sm whitespace-nowrap transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>


          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)} className="hidden lg:inline-flex" aria-label="Open search">
              <Search className="h-5 w-5" />
            </Button>
            <Button className="hidden lg:inline-flex" asChild>
              <Link to={nav.ctaHref || "/contact"}>{nav.ctaLabel || "Book Free IT Assessment"}</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* Mega menu panel */}
      {openMenu && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border bg-background shadow-lg animate-fade-in"
          onMouseEnter={() => open(openMenu)}
          onMouseLeave={scheduleClose}
        >
          <div className="container-custom py-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1">
              {columns[openMenu].links.map((l) => (
                <MenuLink key={l.href} link={l} onClick={close} />
              ))}
            </div>
            {columns[openMenu].footer && (
              <div className="mt-4 border-t border-border pt-4">
                <Link to={columns[openMenu].footer!.href} onClick={close} className="text-sm font-medium text-primary hover:underline">
                  {columns[openMenu].footer!.label} →
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </nav>
  );
};
