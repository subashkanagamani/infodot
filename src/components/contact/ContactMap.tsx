import { MapPin, Globe2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const DELIVERY_CENTRE = "Infodot Technologies Pvt Ltd, Bangalore, India";

export const ContactMap = () => {
  return (
    <section className="section-spacing bg-card/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-primary">Remote-First</span>, Wherever You Are
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We work remote-first across the UK & EU, backed by our delivery centre in Bangalore, India.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coverage */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-border/50 bg-card min-h-[400px] flex items-center justify-center p-8">
            <div className="text-center max-w-md">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Globe2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Remote-first across the UK & EU</h3>
              <p className="text-muted-foreground">
                Our managed IT and support teams work remotely to serve clients throughout the UK and EU, with secure, ISO 27001:2022-certified processes.
              </p>
            </div>

            {/* Overlay with delivery centre */}
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-border/50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
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
          <div className="space-y-6">
            <div className="bg-card border border-border/50 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <Button className="w-full gap-2" asChild>
                  <a href="mailto:hello@infodot.uk">
                    <Mail className="w-4 h-4" />
                    hello@infodot.uk
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4">Who We Serve</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Regulated UK industries
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Clients across the UK & EU
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Delivered remotely, backed by our Bangalore team
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">ISO 27001:2022 Certified</h3>
              <p className="text-sm text-muted-foreground">
                Trusted managed IT services since 1996, with security and processes certified to ISO 27001:2022.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
