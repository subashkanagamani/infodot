import { MapPin, Globe2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const DELIVERY_CENTRE = "Infodot Technologies Pvt Ltd, Bangalore, India";

export const ContactMap = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container-custom">
        <div className="max-w-3xl mb-12 animate-slide-up">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Delivery</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1]">
            <span className="text-primary">Remote-First</span>, Wherever You Are
          </h2>
          <p className="text-muted-foreground mt-4">
            We work remote-first remotely, backed by our delivery centre in Bangalore, India.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Coverage */}
          <div className="col-span-12 lg:col-span-8 relative rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] min-h-[400px] flex items-center justify-center p-8 animate-slide-up">
            <div className="text-center max-w-md">
              <div className="w-16 h-16 rounded-2xl bg-secondary border border-border flex items-center justify-center mx-auto mb-6">
                <Globe2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Remote-first delivery</h3>
              <p className="text-muted-foreground">
                Our managed IT and support teams work remotely to serve clients remotely, with secure, ISO 27001:2022-certified processes.
              </p>
            </div>

            {/* Overlay with delivery centre */}
            <div className="absolute bottom-4 left-4 right-4 bg-secondary/90 backdrop-blur-sm rounded-2xl p-4 border border-border">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center flex-shrink-0 border border-border">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold mb-1">Delivery Centre</p>
                  <p className="text-sm text-muted-foreground break-words">
                    {DELIVERY_CENTRE}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="col-span-12 lg:col-span-4 grid grid-cols-1 gap-4">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: "0.08s" }}>
              <h3 className="font-display font-bold text-lg mb-4">Get in Touch</h3>
              <Button className="w-full gap-2 rounded-xl press" asChild>
                <a href="mailto:sales@infodot.co.in">
                  <Mail className="w-4 h-4" />
                  sales@infodot.co.in
                </a>
              </Button>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: "0.16s" }}>
              <h3 className="font-display font-bold text-lg mb-4">Who We Serve</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Regulated industries
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Clients served remotely
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Delivered remotely, backed by our Bangalore team
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-accent text-accent-foreground p-6 animate-slide-up" style={{ animationDelay: "0.24s" }}>
              <h3 className="font-display font-bold text-lg mb-2">ISO 27001:2022 Certified</h3>
              <p className="text-sm text-accent-foreground/70">
                Trusted managed IT services since 1996, with security and processes certified to ISO 27001:2022.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
