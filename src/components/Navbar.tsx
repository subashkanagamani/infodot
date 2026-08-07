import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { SearchDialog } from "@/components/SearchDialog";
import { useSection } from "@/hooks/usePageContent";
import logoLight from "@/assets/infodot-logo-light.png";

interface NavItem { label: string; href: string }
interface NavContent { items: NavItem[]; ctaLabel: string; ctaHref: string }

const NAV_DEFAULTS: NavContent = {
  items: [
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Powered by Z360", href: "/z360" },
    { label: "Small Office", href: "/small-office" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
  ],
  ctaLabel: "Talk to Us",
  ctaHref: "/contact",
};

export const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const nav = useSection<NavContent>("nav", "main", NAV_DEFAULTS);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 animate-slide-up">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center group cursor-pointer">
            <img
              src={logoLight}
              alt="Infodot Technologies logo"
              className="h-9 w-auto group-hover:scale-105 transition-transform"
            />
            <span className="ml-2 text-[10px] font-semibold text-muted-foreground align-super">UK</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {(nav.items?.length ? nav.items : NAV_DEFAULTS.items).map((item) => (
              <Link key={item.href + item.label} to={item.href} className="text-sm hover:text-primary transition-all relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
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
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </nav>
  );
};
