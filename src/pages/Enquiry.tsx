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

      <div className="min-h-screen bg-background text-foreground">
        {/* Minimal top bar */}
        <header className="border-b border-border bg-background sticky top-0 z-40">
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
        <section className="bg-secondary pt-12 pb-10 md:pt-16 md:pb-14">
          <div className="container-custom grid lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] gap-4 items-start">
            {/* LEFT COPY */}
            <div className="order-2 lg:order-1 bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)] flex flex-col justify-between h-full animate-slide-up">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em]">Free IT Discovery Session — limited slots</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08]">
                  Is Your IT Setup{" "}
                  <span className="text-primary">Slowing Your Firm Down?</span>
                </h1>

                <p className="text-muted-foreground text-base md:text-lg max-w-xl font-medium">
                  We run IT completely for regulated UK firms — <span className="text-foreground font-bold">secure by default, always audit-ready, and delivered remotely</span>.
                </p>

                <ul className="space-y-3">
                  {socialProof.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center border border-border shrink-0">
                        <Icon className="h-4 w-4 text-primary" />
                      </span>
                      <span className="text-foreground/90 text-sm md:text-base font-medium">{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid sm:grid-cols-2 gap-3">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-secondary border border-border">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground/90 font-medium">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={scrollToForm}
                  className="gap-2 text-base px-6 py-6 rounded-xl press bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Get a FREE IT Discovery Session
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base px-6 py-6 rounded-xl press border-2 border-accent text-accent hover:bg-secondary" onClick={scrollToForm}>
                  Get an Exact Quote
                </Button>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div
              id="lead-form"
              className="order-1 lg:order-2 lg:sticky lg:top-24 animate-scale-in"
              style={{ animationDelay: "0.08s" }}
            >
              <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-[var(--shadow-card)]">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Free Discovery Session</span>
                    </div>
                    <h2 className="font-display text-2xl font-bold mb-1">Book your free IT discovery call.</h2>
                    <p className="text-sm text-muted-foreground mb-6">No obligation. We respond within 24 hours.</p>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        <honeypot.HoneypotField />
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Name</FormLabel>
                            <FormControl><Input placeholder="Jane Doe" {...field} className="bg-secondary/50 border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Business Email</FormLabel>
                            <FormControl><Input type="email" placeholder="jane@firm.co.uk" {...field} className="bg-secondary/50 border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all" /></FormControl>
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
                                  className="bg-secondary/50 border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="company" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Company</FormLabel>
                              <FormControl><Input placeholder="Your firm" {...field} className="bg-secondary/50 border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all" /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>
                        <FormField control={form.control} name="message" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Tell us about your IT setup</FormLabel>
                            <FormControl>
                              <Textarea placeholder="What are your current IT challenges? Share your firm size, tools and any compliance requirements..." {...field} className="min-h-[100px] resize-y bg-secondary/50 border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <Button
                          type="submit"
                          disabled={submitting}
                          size="lg"
                          className="w-full gap-2 rounded-xl press mt-2 bg-accent text-accent-foreground hover:bg-accent/90"
                        >
                          {submitting ? (
                            <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                          ) : (
                            <>
                              Get My Free IT Discovery
                              <ArrowRight className="h-4 w-4" />
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
        <section className="py-16 md:py-20 bg-background">
          <div className="container-custom">
            <div className="max-w-2xl mb-12 text-center mx-auto animate-slide-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">Trusted by</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Built for the regulated industries we <span className="text-primary">serve</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {trustIndustries.map((industry, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-3 h-28 px-4 py-4 rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] hover:border-primary/40 transition-colors animate-slide-up"
                  style={{ animationDelay: `${Math.min(index, 6) * 0.06}s` }}
                >
                  <industry.icon className="w-7 h-7 text-primary" />
                  <span className="text-sm font-bold text-center">{industry.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS — Before vs After */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container-custom">
            <div className="max-w-2xl mb-12 text-center mx-auto animate-slide-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">Real Results</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Before vs. <span className="text-primary">After</span>
              </h2>
              <p className="text-muted-foreground mt-3">A snapshot of how we transform IT for regulated UK firms.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {results.map((r, i) => (
                <div key={r.brand} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover-lift transition-all animate-slide-up" style={{ animationDelay: `${i * 0.08}s` }}>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-bold">{r.brand}</p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-muted-foreground mb-1">Before</div>
                      <div className="text-lg font-semibold break-words text-foreground/70 line-through decoration-muted-foreground/50">{r.before}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                    <div className="min-w-0 flex-1 text-right">
                      <div className="text-xs text-primary mb-1">After</div>
                      <div className="text-lg font-bold break-words text-foreground">{r.after}</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">{r.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES SERVED */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container-custom">
            <div className="max-w-2xl mb-10 text-center mx-auto animate-slide-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">Industries Served</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                IT services for <span className="text-primary">regulated industries</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="px-4 py-2 rounded-xl bg-card border border-border text-sm font-bold text-foreground/90 hover:border-primary/40 transition-colors"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container-custom">
            <div className="max-w-2xl mb-14 text-center mx-auto animate-slide-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">What we do</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Managed IT, <span className="text-primary">end to end.</span>
              </h2>
              <p className="text-muted-foreground">
                Six connected capabilities, run by one accountable team that treats your firm like a long-term partner.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover-lift transition-all animate-slide-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-secondary border border-border flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-custom">
            <div className="max-w-2xl mb-14 mx-auto text-center animate-slide-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">Why Infodot</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold">
                Not just another provider. A <span className="text-primary">managed IT partner.</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {why.map((w, i) => (
                <div
                  key={w.t}
                  className={`rounded-3xl p-6 border transition-all hover-lift animate-slide-up ${
                    i === 0 ? "bg-accent text-accent-foreground border-accent" : "bg-card border-border shadow-[var(--shadow-card)]"
                  }`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold mb-2">{w.t}</h3>
                      <p className={`text-sm leading-relaxed ${i === 0 ? "text-accent-foreground/75" : "text-muted-foreground"}`}>{w.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-12 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">FAQ</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold">
                Common <span className="text-primary">questions</span>
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-3xl border border-border bg-card p-5 open:border-primary/40 shadow-[var(--shadow-card)] transition-colors"
                >
                  <summary className="cursor-pointer font-semibold flex items-center justify-between gap-4 list-none">
                    <span>{f.q}</span>
                    <span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-custom">
            <div className="rounded-3xl bg-accent text-accent-foreground p-10 md:p-16 text-center max-w-3xl mx-auto animate-scale-in">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Ready to <span className="text-primary">run your IT properly?</span>
              </h2>
              <p className="text-accent-foreground/70 mb-8">
                Book a free 30-minute discovery call — we'll review your current setup and share three specific ways to make your IT secure, evidenced and out of your way.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  size="lg"
                  onClick={scrollToForm}
                  className="gap-2 text-base px-8 py-6 rounded-xl press bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Get my free discovery call
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-xl press border-2 border-accent-foreground/40 text-accent-foreground hover:bg-accent-foreground/10" asChild>
                  <a href="tel:+918610986622"><Phone className="mr-2 h-4 w-4" /> Call us</a>
                </Button>
              </div>
              <div className="mt-10 text-sm text-accent-foreground/70 flex items-center justify-center gap-6 flex-wrap">
                <a href="mailto:hello@infodot.co.uk" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="h-4 w-4" /> hello@infodot.co.uk
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Infodot UK. All rights reserved. ·{" "}
          <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link>
        </footer>
      </div>
    </>
  );
};

export default Enquiry;
