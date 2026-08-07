import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Powered by Z360", href: "/z360" },
    { label: "Small Office", href: "/small-office" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation menu">
          <Menu className="w-5 h-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-1">
            <span className="text-lg font-bold">
              <span className="text-primary">i</span>nfodot
            </span>
            <span className="ml-1 text-[10px] font-semibold text-muted-foreground align-super">UK</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="text-left py-3 px-4 rounded-lg hover:bg-secondary transition-colors text-lg"
            >
              {item.label}
            </Link>
          ))}
          <Button className="mt-4" asChild>
            <Link to="/contact" onClick={() => setOpen(false)}>Talk to Us</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
