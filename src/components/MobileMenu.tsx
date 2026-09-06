import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { managedItLinks, cybersecurityLinks, complianceLinks, industryLinks, resourceLinks, aboutLinks, topLevelLinks } from "@/data/siteNav";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const item = (label: string, href: string) => (
    <Link
      key={href + label}
      to={href}
      onClick={close}
      className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
    >
      {label}
    </Link>
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation menu">
          <Menu className="w-5 h-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left text-base">Menu</SheetTitle>
        </SheetHeader>

        <nav className="mt-6 pb-10">
          {item("Home", "/")}
          <Accordion type="multiple" className="w-full">
            {[
              { value: "managed-it", label: "Managed IT", links: managedItLinks, all: { label: "All services", href: "/services" } },
              { value: "cybersecurity", label: "Cybersecurity", links: cybersecurityLinks, all: { label: "All services", href: "/services" } },
              { value: "compliance", label: "Compliance", links: complianceLinks, all: { label: "All services", href: "/services" } },
              { value: "industries", label: "Who We Serve", links: industryLinks, all: { label: "All sectors we serve", href: "/industries" } },
              { value: "resources", label: "Resources", links: resourceLinks },
              { value: "about", label: "About", links: aboutLinks },
            ].map((group) => (
              <AccordionItem key={group.value} value={group.value} className="border-border/60">
                <AccordionTrigger className="px-3 text-sm">{group.label}</AccordionTrigger>
                <AccordionContent className="pb-2">
                  {group.all && item(group.all.label, group.all.href)}
                  {group.links.map((l) => item(l.label, l.href))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {topLevelLinks.map((l) => item(l.label, l.href))}


          <Button className="mt-6 w-full" asChild>
            <Link to="/contact" onClick={close}>Book Free IT Assessment</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
