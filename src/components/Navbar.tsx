import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { SearchDialog } from "@/components/SearchDialog";
import { useSection } from "@/hooks/usePageContent";
import { cn } from "@/lib/utils";
import logo from "@/assets/infodot-logo.png";
import { serviceGroups, industryLinks, solutionLinks, companyLinks, NavLinkItem } from "@/data/siteNav";

interface NavContent { ctaLabel: string; ctaHref: string }
const NAV_DEFAULTS: NavContent = { ctaLabel: "Talk to Us", ctaHref: "/contact" };

type MenuKey = "services" | "industries" | "solutions" | "company";

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
    { key: "services", label: "Services", href: "/services" },
    { key: "industries", label: "Industries", href: "/industries" },
    { key: "solutions", label: "Solutions", href: "/how-it-works" },
    { key: "company", label: "Company", href: "/about" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-lg border-b border-border/60"
      onMouseLeave={scheduleClose}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center group cursor-pointer" onClick={close}>
            <img src={logo} alt="Infodot Technologies logo" className="h-9 w-auto group-hover:scale-105 transition-transform" />
            <span className="ml-2 text-[10px] font-semibold text-muted-foreground align-super">UK</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {triggers.map((t) => (
              <button
                key={t.key}
                onMouseEnter={() => open(t.key)}
                onFocus={() => open(t.key)}
                onClick={() => setOpenMenu(openMenu === t.key ? null : t.key)}
                aria-expanded={openMenu === t.key}
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3 py-2 text-sm transition-colors",
                  openMenu === t.key ? "text-primary bg-secondary" : "hover:text-primary"
                )}
              >
                {t.label}
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", openMenu === t.key && "rotate-180")} />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)} className="hidden md:inline-flex" aria-label="Open search">
              <Search className="h-5 w-5" />
            </Button>
            <Button className="hidden md:inline-flex" asChild>
              <Link to={nav.ctaHref || "/contact"}>{nav.ctaLabel || "Talk to Us"}</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>

      {/* Mega menu panel */}
      {openMenu && (
        <div
          className="hidden md:block absolute left-0 right-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border bg-background shadow-lg animate-fade-in"
          onMouseEnter={() => open(openMenu)}
          onMouseLeave={scheduleClose}
        >
          <div className="container-custom py-6">
            {openMenu === "services" && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                {serviceGroups.map((group) => (
                  <div key={group.title}>
                    <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                      {group.title}
                    </p>
                    <ul className="space-y-0.5">
                      {group.links.map((l) => (
                        <li key={l.href}><MenuLink link={{ label: l.label, href: l.href }} onClick={close} /></li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="col-span-2 lg:col-span-4 mt-2 border-t border-border pt-4">
                  <Link to="/services" onClick={close} className="text-sm font-medium text-primary hover:underline">
                    View all services →
                  </Link>
                </div>
              </div>
            )}

            {openMenu === "industries" && (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                {industryLinks.map((l) => (
                  <MenuLink key={l.href} link={l} onClick={close} />
                ))}
                <div className="col-span-2 lg:col-span-3 border-t border-border pt-4">
                  <Link to="/industries" onClick={close} className="text-sm font-medium text-primary hover:underline">
                    All industries →
                  </Link>
                </div>
              </div>
            )}

            {openMenu === "solutions" && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-2">
                {solutionLinks.map((l) => (
                  <MenuLink key={l.href} link={l} onClick={close} />
                ))}
              </div>
            )}

            {openMenu === "company" && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-1">
                {companyLinks.map((l) => (
                  <MenuLink key={l.href} link={l} onClick={close} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </nav>
  );
};
