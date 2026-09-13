import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HomeCta = () => {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-accent text-accent-foreground px-8 py-14 md:px-14 md:py-20 text-center animate-slide-up">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-16 w-[26rem] h-[26rem] rounded-full opacity-[0.08] blur-3xl bg-primary"
          />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-[1.1] text-balance">
              Find out what your IT should cost.
            </h2>
            <p className="text-accent-foreground/75 mb-10 text-lg">
              A 30-minute discovery call. No cost, no obligation — and an exact quote within 48 hours.
            </p>
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-[15px] font-bold rounded-2xl transition-all hover:-translate-y-0.5 press"
              asChild
            >
              <Link to="/contact">
                Book a Free IT & Security Assessment
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
