import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

export const ContactInfo = () => {
  const { settings } = useSiteSettings();

  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Sat from 9am to 7pm",
      value: settings.company.phone,
      href: `tel:${settings.company.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "We'll respond within 24 hours",
      value: settings.company.email,
      href: `mailto:${settings.company.email}`,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick responses via chat",
      value: "Chat with us",
      href: `https://wa.me/${settings.integrations.whatsappNumber.replace(/[^0-9]/g, "")}`,
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office location",
      value: "Bangalore, India — serving clients remotely",
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(settings.company.address)}`,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mb-12 animate-slide-up">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Get in touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1]">
            Multiple Ways to <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Choose the most convenient way to reach out. We deliver remotely across business hours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactCards.map((card, index) => (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover-lift transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 border border-border group-hover:bg-accent transition-colors">
                <card.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {card.description}
              </p>
              <p className="font-medium text-foreground text-sm break-all leading-snug">
                {card.value}
              </p>
            </a>
          ))}
        </div>

        {/* Business Hours */}
        <div className="mt-4 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: "0.32s" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center border border-border">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Business Hours</h3>
                <p className="text-muted-foreground">We're here when you need us</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 text-center md:text-left">
              <div>
                <p className="font-semibold">Monday - Friday</p>
                <p className="text-muted-foreground">9:00 AM - 7:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Saturday</p>
                <p className="text-muted-foreground">10:00 AM - 4:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Sunday</p>
                <p className="text-muted-foreground">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
