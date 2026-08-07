import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Loader2,
  CheckCircle2,
  ShieldCheck,
  Server,
  Lock,
  FileCheck2,
  Phone,
  Mail,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useHoneypot } from "@/hooks/useHoneypot";
import { SEOHead } from "@/components/SEOHead";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { ParallaxSection } from "@/components/ParallaxSection";
import { AmbientBackdrop } from "@/components/AmbientBackdrop";
import { industries as trustIndustries } from "@/components/ClientLogos";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/infodot-logo.png";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid business email").max(255),
  phone: z.string().trim().regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),
  company: z.string().trim().min(2, "Company name required").max(100),
  message: z.string().trim().max(2000).optional(),
});
type FormValues = z.infer<typeof schema>;

const benefits = [
  "Secure by Default from Day One",
  "Audit-Ready Evidence Monthly",
  "Named Engineers, No Rotating Queue",
  "Exact Quote Within 48 Hours",
];

const socialProof = [
  { icon: Award, text: "ISO 27001:2022 Certified Team" },
  { icon: Clock, text: "Running IT for Clients Since 1996" },
  { icon: Users, text: "One Accountable Team for Your Whole Stack" },
];

const services = [
  { icon: ShieldCheck, title: "Secure by Default", desc: "MFA, EDR, hardening and tested backup applied as standard — not a premium tier." },
  { icon: Server, title: "Fully Managed IT", desc: "One team runs endpoints, M365/Workspace, patching, backup, security and the desk." },
  { icon: Lock, title: "Co-Managed IT", desc: "We add the security and audit discipline alongside your existing in-house team." },
  { icon: FileCheck2, title: "Audit & Compliance Evidence", desc: "Monthly evidence packs for auditors, insurers and boards — kept current." },
  { icon: TrendingUp, title: "Cyber Insurance Readiness", desc: "Meet and evidence the controls insurers increasingly require at renewal." },
  { icon: CheckCircle2, title: "IT Transition & Exit", desc: "A clean switch from your incumbent, with an honest exit pack whenever you need it." },
];

const industries = ["Accountancy", "Legal", "Financial Services", "Fintech", "Professional Services", "Funded Startups"];

const results = [
  { brand: "Accountancy practice", before: "No EDR", after: "EDR + MFA live", note: "in 30 days" },
  { brand: "Law firm", before: "No audit evidence", after: "Monthly evidence pack", note: "in 60 days" },
  { brand: "Financial services firm", before: "Underperforming MSP", after: "Fully managed IT", note: "in 90 days" },
];

const why = [
  { t: "Secure by default", d: "MFA, EDR, hardening and tested backup are standard — not paid extras." },
  { t: "Always audit-ready", d: "Controls are packaged into monthly evidence packs for auditors and insurers." },
  { t: "You own your IT", d: "Your domains, tenancy, licences and admin rights stay yours throughout." },
  { t: "Remote delivery, UK hours", d: "ISO 27001:2022-certified team working UK business hours from Bangalore." },
];

const faqs = [
  { q: "How quickly can we get started?", a: "Discovery call this week, exact quote within 48 hours, and onboarding typically starts within 2–3 weeks." },
  { q: "What's your minimum engagement?", a: "We typically work with regulated firms of 25–300 users. There's no long-term lock-in — notice is 1–3 months by agreement." },
  { q: "Do you work with international firms?", a: "We serve UK and EU regulated firms remotely from our Bangalore delivery centre." },
  { q: "What industries do you specialise in?", a: "Accountancy, legal, financial services, fintech and professional services — the regulated industries we know best." },
];

const Enquiry = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const honeypot = useHoneypot();

  useEffect(() => {
    const existing = document.querySelector('script[src*="AW-18303056513"]');
    if (existing) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-18303056513";
    document.head.appendChild(script);

    const inline = document.createElement("script");
    inline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18303056513');
    `;
    document.head.appendChild(inline);
  }, []);

  useEffect(() => {
    const existing = document.querySelector('script[src*="clarity.ms/tag/xlp1trzywp"]');
    if (existing) return;

    const clarityScript = document.createElement("script");
    clarityScript.type = "text/javascript";
    clarityScript.async = true;
    clarityScript.src = "https://www.clarity.ms/tag/xlp1trzywp";

    const inline = document.createElement("script");
    inline.type = "text/javascript";
    inline.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "xlp1trzywp");
    `;

    document.head.appendChild(clarityScript);
    document.head.appendChild(inline);
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", phone: "", company: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      if (honeypot.isBot()) { navigate("/thank-you"); return; }
      const { supabase } = await import("@/integrations/supabase/client");
      const composedMessage = values.message?.trim() || "No additional requirements provided.";
      const { error } = await supabase.from("contact_submissions").insert({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        company: values.company.trim(),
        message: composedMessage,
        source: "enquiry_landing",
      });
      if (error) throw error;

      // Fire-and-forget team notification email
      supabase.functions
        .invoke("send-transactional-email", {
          body: {
            templateName: "enquiry-notification",
            idempotencyKey: `enquiry-${values.email.trim().toLowerCase()}-${Date.now()}`,
            templateData: {
              name: values.name.trim(),
              email: values.email.trim(),
              phone: values.phone.trim(),
              company: values.company.trim(),
              service: "Not specified",
              message: composedMessage,
              submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
            },
          },
        })
        .catch((err) => console.error("Team notification failed", err));

      // Fire-and-forget append to Google Sheet
      supabase.functions
        .invoke("append-lead-to-sheet", {
          body: {
            name: values.name.trim(),
            email: values.email.trim(),
            phone: values.phone.trim(),
            company: values.company.trim(),
            message: composedMessage,
            source: "enquiry_landing",
          },
        })
        .catch((err) => console.error("Sheet append failed", err));

      form.reset();
      navigate("/thank-you");
    } catch (e) {
      console.error(e);
      toast({ variant: "destructive", title: "Something went wrong", description: "Please try again or call us directly." });
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToForm = () =>
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <>
      <SEOHead
        title="Get a Free IT Discovery Call — Infodot UK"
        description="Book a free 30-minute IT discovery call with Infodot UK. Managed IT, security by default and audit readiness for regulated UK firms."
        canonicalUrl="https://infodot.co.uk/enquiry"
      />

      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <AmbientBackdrop />

        <div className="relative z-10">
          {/* Minimal top bar */}
          <header className="border-b border-border/50 bg-background/70 backdrop-blur-lg sticky top-0 z-40 animate-slide-up">
            <div className="container-custom flex items-center justify-between h-16">
              <Link to="/" className="flex items-center group">
                <img src={logo} alt="Infodot" className="h-9 w-auto group-hover:scale-110 transition-transform" />
              </Link>
              <a href="tel:+918610986622" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Phone className="h-4 w-4" /> <span className="hidden sm:inline">+91 86109 86622</span>
              </a>
            </div>
          </header>

          {/* HERO */}
          <section className="relative overflow-hidden py-16 md:py-24">
            {/* Animated background — matches home hero */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
              <div className="absolute inset-0 opacity-10">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                    style={{ top: `${20 + i * 15}%`, left: "-10%", right: "-10%", transform: "rotate(-15deg)" }}
                  />
                ))}
              </div>
              {/* Floating shapes */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${5 + Math.random() * 5}s`,
                    }}
                  >
                    {i % 3 === 0 ? (
                      <div className="w-2 h-2 bg-primary/30 rounded-full" />
                    ) : i % 3 === 1 ? (
                      <div className="w-3 h-3 border border-neon-purple/30 rotate-45" />
                    ) : (
                      <div className="w-2 h-2 bg-primary/30" style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="container-custom relative z-10 grid lg:grid-cols-[1fr_460px] gap-12 items-start">
              {/* LEFT COPY */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-primary/30 backdrop-blur-sm animate-slide-up hover:border-primary/50 transition-colors mb-6">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
                  <span className="text-sm text-muted-foreground">Free IT Discovery Session — limited slots</span>
                </div>

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  Is Your IT Setup{" "}
                  <span className="text-gradient-primary">Slowing Your Firm Down?</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  We run IT completely for regulated UK firms — <span className="text-foreground font-medium">secure by default, always audit-ready, and delivered remotely</span>.
                </p>

                <ul className="space-y-3 mb-8 animate-slide-up" style={{ animationDelay: "0.25s" }}>
                  {socialProof.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center shrink-0">
                        <Icon className="h-3.5 w-3.5 text-primary" />
                      </span>
                      <span className="text-foreground/90 text-sm md:text-base">{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid sm:grid-cols-2 gap-3 mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                  {benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-card/40 border border-border/50">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground/90">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                  <Button
                    size="lg"
                    onClick={scrollToForm}
                    className="gap-2 text-base px-6 py-6 hover-lift hover-glow group relative overflow-hidden"
                  >
                    <span className="relative z-10">Get a FREE IT Discovery Session</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-base px-6 py-6 hover-lift glow-border" onClick={scrollToForm}>
                    Get an Exact Quote
                  </Button>
                </div>
              </div>

              {/* RIGHT FORM */}
              <div
                id="lead-form"
                className="relative order-1 lg:order-2 lg:sticky lg:top-24 animate-scale-in"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/60 via-neon-purple/40 to-primary/60 rounded-2xl blur-2xl opacity-60 animate-pulse-glow" />
                <div className="absolute -inset-[2px] bg-gradient-to-br from-primary via-neon-purple to-primary rounded-2xl opacity-70" />
                <div className="relative bg-card/95 backdrop-blur-xl border-2 border-primary/40 rounded-2xl p-6 md:p-8 shadow-[0_0_60px_hsl(358_84%_53%_/_0.12)]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />

                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-xs font-semibold tracking-wider text-primary uppercase">Free Discovery Session</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-1">Book your free IT discovery call.</h2>
                      <p className="text-sm text-muted-foreground mb-6">No obligation. We respond within 24 hours.</p>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                          <honeypot.HoneypotField />
                          <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Name</FormLabel>
                              <FormControl><Input placeholder="Jane Doe" {...field} className="bg-background/70 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:bg-background shadow-inner transition-all" /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Business Email</FormLabel>
                              <FormControl><Input type="email" placeholder="jane@firm.co.uk" {...field} className="bg-background/70 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:bg-background shadow-inner transition-all" /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <FormField control={form.control} name="phone" render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Phone</FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    inputMode="numeric"
                                    maxLength={10}
                                    placeholder="98765 43210"
                                    {...field}
                                    onChange={(e) => {
                                      const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                                      field.onChange(digits);
                                    }}
                                    className="bg-background/70 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:bg-background shadow-inner transition-all"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )} />
                            <FormField control={form.control} name="company" render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Company</FormLabel>
                                <FormControl><Input placeholder="Your firm" {...field} className="bg-background/70 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:bg-background shadow-inner transition-all" /></FormControl>
                                <FormMessage />
                              </FormItem>
                            )} />
                          </div>
                          <FormField control={form.control} name="message" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Tell us about your IT setup</FormLabel>
                              <FormControl>
                                <Textarea placeholder="What are your current IT challenges? Share your firm size, tools and any compliance requirements..." {...field} className="min-h-[100px] resize-y bg-background/70 border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:bg-background shadow-inner transition-all" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <Button
                            type="submit"
                            disabled={submitting}
                            size="lg"
                            className="w-full gap-2 hover-lift hover-glow group relative overflow-hidden mt-2"
                          >
                            {submitting ? (
                              <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                            ) : (
                              <>
                                <span className="relative z-10">Get My Free IT Discovery</span>
                                <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                              </>
                            )}
                          </Button>
                          <p className="text-xs text-muted-foreground text-center pt-1">
                            By submitting, you agree to be contacted about your enquiry.
                          </p>
                        </form>
                      </Form>
                </div>
              </div>
            </div>
          </section>

          {/* BRANDS */}
          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <ParallaxSection speed={0.3} direction="up">
              <section className="relative py-16 md:py-20 border-t border-border/50 overflow-hidden">
                <div className="container-custom">
                  <div className="max-w-2xl mb-12 text-center mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-4">
                      <span className="text-xs font-semibold tracking-widest uppercase text-primary">Trusted by</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Built for the regulated industries we <span className="text-gradient-primary">serve</span>
                    </h2>
                  </div>
                </div>

                <div className="container-custom">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {trustIndustries.map((industry, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-3 h-28 px-4 py-4 rounded-xl border bg-card/60 backdrop-blur-sm border-border/60 hover:border-primary/50 transition-colors"
                      >
                        <industry.icon className="w-7 h-7 text-primary" />
                        <span className="text-sm font-medium text-center">{industry.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </ParallaxSection>
          </ScrollAnimationWrapper>

          {/* RESULTS — Before vs After */}
          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <section className="relative py-16 md:py-20 border-t border-border/50">
              <div className="container-custom">
                <div className="max-w-2xl mb-12 text-center mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-4">
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary">Real Results</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Before vs. <span className="text-gradient-primary">After</span>
                  </h2>
                  <p className="text-muted-foreground mt-3">A snapshot of how we transform IT for regulated UK firms.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  {results.map((r) => (
                    <div key={r.brand} className="relative bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-6 hover-lift transition-all">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">{r.brand}</p>
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-1">
                          <div className="text-xs text-muted-foreground mb-1">Before</div>
                          <div className="text-lg font-semibold text-foreground/70 line-through decoration-muted-foreground/50">{r.before}</div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                        <div className="flex-1 text-right">
                          <div className="text-xs text-primary mb-1">After</div>
                          <div className="text-lg font-bold text-gradient-primary">{r.after}</div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-4">{r.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </ScrollAnimationWrapper>

          {/* INDUSTRIES SERVED */}
          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <section className="relative py-16 md:py-20 border-t border-border/50">
              <div className="container-custom">
                <div className="max-w-2xl mb-10 text-center mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-4">
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary">Industries Served</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    IT services for <span className="text-gradient-primary">regulated industries</span>
                  </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {industries.map((ind) => (
                    <span
                      key={ind}
                      className="px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/60 text-sm text-foreground/90 hover:border-primary/50 transition-colors"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </ScrollAnimationWrapper>

          {/* SERVICES */}
          <ScrollAnimationWrapper animation="slide-up" threshold={0.1}>
            <ParallaxSection speed={0.3} direction="up">
              <section className="relative py-20 border-t border-border/50">
                <div className="container-custom">
                  <div className="max-w-2xl mb-14 text-center mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-4">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-semibold tracking-widest uppercase text-primary">What we do</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                      Managed IT, <span className="text-gradient-primary">end to end.</span>
                    </h2>
                    <p className="text-muted-foreground">
                      Six connected capabilities, run by one accountable team that treats your firm like a long-term partner.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map(({ icon: Icon, title, desc }, i) => (
                      <div
                        key={title}
                        className="group relative bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-6 hover-lift hover:border-primary/40 transition-all animate-slide-up"
                        style={{ animationDelay: `${i * 0.08}s` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                        <div className="relative w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2 relative">{title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed relative">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </ParallaxSection>
          </ScrollAnimationWrapper>

          {/* WHY US */}
          <ScrollAnimationWrapper animation="slide-in-left" threshold={0.15}>
            <section className="relative py-20 border-t border-border/50 overflow-hidden">
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="container-custom relative">
                <div className="max-w-2xl mb-14 mx-auto text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-4">
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary">Why Infodot</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold">
                    Not just another provider. A <span className="text-gradient-primary">managed IT partner.</span>
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  {why.map((w, i) => (
                    <div
                      key={w.t}
                      className="group relative bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-6 hover-lift transition-all"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:animate-pulse-glow">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{w.t}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{w.d}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </ScrollAnimationWrapper>

          {/* FAQ */}
          <ScrollAnimationWrapper animation="slide-up" threshold={0.15}>
            <section className="py-20 border-t border-border/50">
              <div className="container-custom max-w-3xl">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-4">
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary">FAQ</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold">
                    Common <span className="text-gradient-primary">questions</span>
                  </h2>
                </div>
                <div className="space-y-3">
                  {faqs.map((f) => (
                    <details
                      key={f.q}
                      className="group bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-5 open:border-primary/40 transition-colors"
                    >
                      <summary className="cursor-pointer font-medium flex items-center justify-between gap-4 list-none">
                        <span>{f.q}</span>
                        <span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </section>
          </ScrollAnimationWrapper>

          {/* FINAL CTA */}
          <ScrollAnimationWrapper animation="scale-in" threshold={0.2}>
            <section className="relative py-24 border-t border-border/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/15 blur-3xl animate-pulse-glow" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-neon-purple/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
              </div>
              <div className="container-custom relative z-10 text-center max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Ready to <span className="text-gradient-primary">run your IT properly?</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Book a free 30-minute discovery call — we'll review your current setup and share three specific ways to make your IT secure, evidenced and out of your way.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    size="lg"
                    onClick={scrollToForm}
                    className="gap-2 text-base px-8 py-6 hover-lift hover-glow group relative overflow-hidden"
                  >
                    <span className="relative z-10">Get my free discovery call</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-base px-8 py-6 hover-lift glow-border" asChild>
                    <a href="tel:+918610986622"><Phone className="mr-2 h-4 w-4" /> Call us</a>
                  </Button>
                </div>
                <div className="mt-10 text-sm text-muted-foreground flex items-center justify-center gap-6 flex-wrap">
                  <a href="mailto:hello@infodot.co.uk" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Mail className="h-4 w-4" /> hello@infodot.co.uk
                  </a>
                </div>
              </div>
            </section>
          </ScrollAnimationWrapper>

          <footer className="py-6 border-t border-border/50 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Infodot UK. All rights reserved. ·{" "}
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Enquiry;
