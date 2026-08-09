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
import { serviceGroups, industryLinks, solutionLinks, companyLinks } from "@/data/siteNav";

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
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation menu">
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
            <AccordionItem value="services" className="border-border/60">
              <AccordionTrigger className="px-3 text-sm">Services</AccordionTrigger>
              <AccordionContent className="pb-2">
                {item("All services", "/services")}
                {serviceGroups.map((g) => (
                  <div key={g.title} className="mt-3">
                    <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">{g.title}</p>
                    {g.links.map((l) => item(l.label, l.href))}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="industries" className="border-border/60">
              <AccordionTrigger className="px-3 text-sm">Industries</AccordionTrigger>
              <AccordionContent className="pb-2">
                {item("All industries", "/industries")}
                {industryLinks.map((l) => item(l.label, l.href))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="solutions" className="border-border/60">
              <AccordionTrigger className="px-3 text-sm">Solutions</AccordionTrigger>
              <AccordionContent className="pb-2">
                {solutionLinks.map((l) => item(l.label, l.href))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="company" className="border-border/60">
              <AccordionTrigger className="px-3 text-sm">Company</AccordionTrigger>
              <AccordionContent className="pb-2">
                {companyLinks.map((l) => item(l.label, l.href))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button className="mt-6 w-full" asChild>
            <Link to="/contact" onClick={close}>Talk to Us</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
