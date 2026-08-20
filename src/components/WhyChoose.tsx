import { LayoutGrid, ShieldCheck, FileCheck2 } from "lucide-react";

const benefits = [
  {
    icon: LayoutGrid,
    title: "Managed",
    description: "One team runs the whole stack — endpoints, M365 and Workspace, patching, backup, security and the desk — and coordinates your vendors. Nobody to ping-pong to."
  },
  {
    icon: ShieldCheck,
    title: "Secure by default",
    description: "MFA, EDR, hardening and tested backup are standard from day one — not a premium tier. It's the gap clients name most; we close it by default."
  },
  {
    icon: FileCheck2,
    title: "Always audit-ready",
    description: "The controls we run produce the evidence auditors and insurers ask for — packaged monthly, kept current. Readiness in-house; certification via accredited partners."
  }
];

export const WhyChoose = () => {
  return (
    <section id="about" className="section-spacing bg-background relative overflow-hidden">
      <div className="container-custom relative">
        <div className="max-w-3xl mb-12 animate-slide-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Our promise</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-[1.1]">
            What we <span className="text-primary">stand on</span>
          </h2>
          <p className="text-muted-foreground">Four pillars. One promise.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`flex gap-4 group p-8 rounded-3xl border transition-all duration-500 hover-lift animate-slide-up ${
                index === 0
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-secondary border-border"
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex-shrink-0 w-11 h-11 bg-card rounded-xl flex items-center justify-center border border-border">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
                <p className={index === 0 ? "text-sm text-accent-foreground/75" : "text-sm text-muted-foreground"}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-3xl border border-border bg-card p-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground">
            Most providers quietly make themselves impossible to leave. We do the opposite, in writing. Your domains, tenancy, licences and admin rights stay yours, in your name, throughout — we operate them, we never own them. Notice is 1–3 months by agreement; the exit stays clean either way, for businesses of 25–300 users, without a rip-and-replace of the tools you already run.
          </p>
        </div>
      </div>
    </section>
  );
};
