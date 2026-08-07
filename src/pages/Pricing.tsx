import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useSiteSettings } from "@/hooks/useSiteSettings";

export default function Pricing() {
  const { settings } = useSiteSettings();
  const plans = [
    {
      name: "Co-Managed IT",
      price: "Custom quote",
      period: "",
      description: "For firms with an internal IT team that needs a layer of security-by-default discipline, patching and audit evidence alongside them.",
      features: [
        "Works alongside your existing IT team",
        "MFA, EDR and hardening applied as standard",
        "Patch management and tested backup",
        "Audit-ready evidence, packaged monthly",
        "No rip-and-replace of your existing tools",
        "UK business-hours desk, delivered remotely"
      ],
      popular: false
    },
    {
      name: "Fully Managed IT",
      price: "Custom quote",
      period: "",
      description: "One team runs your entire IT stack end to end — endpoints, M365/Workspace, patching, backup, security and the desk.",
      features: [
        "One accountable team for your whole stack",
        "Secure by default from day one — not a premium tier",
        "Vendor coordination handled for you",
        "Audit and insurer-ready evidence, kept current",
        "ISO 27001:2022 certified delivery team",
        "Exit pack and reverse KT within 10 working days if you ever leave"
      ],
      popular: true
    },
    {
      name: "Fully Remote",
      price: "Custom quote",
      period: "",
      description: "For firms that operate entirely remotely and need IT run end to end with no on-site presence required.",
      features: [
        "Fully remote delivery from an ISO 27001:2022 team",
        "Same security-by-default standards as our other models",
        "Delivered via our Z360 delivery platform",
        "UK & EU coverage during business hours",
        "Audit-ready evidence produced as a matter of course",
        "You always own your accounts, data and documentation"
      ],
      popular: false
    }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Pricing" }
  ];

  const handleBookCall = () => {
    const calendlyLink = settings.integrations.calendlyLink;
    if (calendlyLink) {
      window.open(calendlyLink, "_blank");
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />
      <BackToTop />
      
      <SEOHead 
        title="Pricing — Infodot UK Managed IT Engagement Models"
        description="Co-Managed IT, Fully Managed IT and Fully Remote engagement models from Infodot UK. Exact quotes within 48 hours of a discovery call — no invented numbers, just the model that fits."
        keywords="managed IT pricing UK, co-managed IT, fully managed IT, IT support quote, Infodot UK pricing"
        canonicalUrl="https://infodot.co.uk/pricing"
      />

      {/* Hero Section */}
      <section className="section-spacing pt-32">
        <div className="container-custom">
          <Breadcrumbs />
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Engagement Models, Not Guesswork
            </h1>
            <p className="text-xl text-muted-foreground">
              Every firm's IT estate is different, so we don't publish invented numbers. Choose the model that fits, book a discovery call, and get an exact quote within 48 hours.
            </p>
          </div>

          {/* Pricing Cards */}
          <h2 className="sr-only">Engagement Models</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`p-8 relative ${plan.popular ? 'border-primary border-2 shadow-lg' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Common
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={handleBookCall}
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Book a Discovery Call
                </Button>
              </Card>
            ))}
          </div>

          {/* FAQ Note */}
          <div className="text-center mt-16 p-8 bg-muted/30 rounded-2xl max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Not sure which model fits your firm?</h2>
            <p className="text-muted-foreground mb-6">
              Book a 30-minute discovery call — no cost, no obligation — and we'll recommend the right engagement model with an exact quote within 48 hours.
            </p>
            <Button size="lg" onClick={handleBookCall}>
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
