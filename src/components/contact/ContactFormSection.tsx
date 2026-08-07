import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Loader2, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { useHoneypot } from "@/hooks/useHoneypot";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone must be at least 10 digits").max(15),
  company: z.string().trim().min(2, "Company name required").max(100),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const services = [
  "Co-Managed IT",
  "Fully Managed IT",
  "Fully Remote IT",
  "Cyber Insurance Readiness",
  "Audit & Compliance Evidence",
  "Small Office IT",
  "Other",
];

const budgetRanges = [
  "Not sure yet — need a quote",
  "Under 50 seats",
  "50 - 150 seats",
  "150+ seats",
  "Let's Discuss",
];

export const ContactFormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { settings } = useSiteSettings();
  const honeypot = useHoneypot();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      if (honeypot.isBot()) {
        setIsSuccess(true);
        toast({ title: "Message Sent Successfully!", description: "We'll get back to you within 24 hours." });
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
        return;
      }
      const { supabase } = await import("@/integrations/supabase/client");


      const { error } = await supabase.from("contact_submissions").insert({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        company: values.company.trim(),
        message: `Service: ${values.service}\nBudget: ${values.budget || 'Not specified'}\n\n${values.message.trim()}`,
        source: "contact_page",
      });

      if (error) throw error;

      // Also send via WhatsApp
      const whatsappNumber = settings.integrations.whatsappNumber.replace(/[^0-9]/g, "");
      const message = `New Contact Form:\n\nName: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nCompany: ${values.company}\nService: ${values.service}\nBudget: ${values.budget || 'Not specified'}\n\nMessage:\n${values.message}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");

      setIsSuccess(true);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      form.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.14em]">No Cost, No Obligation</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4 leading-[1.1]">
              Book Your <span className="text-primary">Discovery Call</span>
            </h2>
            <p className="text-muted-foreground">
              Tell us about your firm and we'll book a 30-minute discovery call — no cost, no obligation — and follow up with an exact quote within 48 hours.
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-[var(--shadow-card)] animate-slide-up" style={{ animationDelay: "0.08s" }}>
            {isSuccess ? (
              <div className="text-center py-12 animate-scale-in">
                <div className="w-20 h-20 bg-secondary border border-border rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">Thank You!</h3>
                <p className="text-muted-foreground">
                  Your message has been sent. We'll be in touch to book your discovery call and follow up with an exact quote within 48 hours.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                  <honeypot.HoneypotField />
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              className="h-12 bg-secondary/50 rounded-xl"
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              className="h-12 bg-secondary/50 rounded-xl"
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+91 98765 43210"
                              className="h-12 bg-secondary/50 rounded-xl"
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Company"
                              className="h-12 bg-secondary/50 rounded-xl"
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>IT Engagement Interested In *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 bg-secondary/50 rounded-xl">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Approximate Team Size</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 bg-secondary/50 rounded-xl">
                                <SelectValue placeholder="Select team size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Details *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your firm, current IT setup, and any specific requirements..."
                            className="min-h-[150px] bg-secondary/50 rounded-xl resize-none"
                            {...field}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg gap-2 rounded-xl press bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
