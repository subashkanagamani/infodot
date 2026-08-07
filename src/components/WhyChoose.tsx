import { LayoutGrid, ShieldCheck, FileCheck2, KeyRound } from "lucide-react";

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
  },
  {
    icon: KeyRound,
    title: "We run your IT. You own your IT.",
    description: "Your domains, tenancy, licences and admin rights stay yours, in your name, throughout. Whenever you leave, you get a documented exit pack and full reverse knowledge-transfer within 10 working days."
  }
];

export const WhyChoose = () => {
  return (
    <section id="about" className="section-spacing bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      
      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What we <span className="text-gradient-primary relative">
              stand on
              <span className="absolute -inset-2 bg-primary/10 blur-2xl -z-10 animate-pulse-glow" />
            </span>
          </h2>
          <p className="text-muted-foreground">Three pillars. One promise.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex gap-4 group p-6 rounded-lg bg-card/30 border border-border/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-500 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-glow transition-colors">{benefit.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Most providers quietly make themselves impossible to leave. We do the opposite, in writing. Your domains, tenancy, licences and admin rights stay yours, in your name, throughout — we operate them, we never own them. Notice is 1–3 months by agreement; the exit stays clean either way, for businesses of 25–300 users, without a rip-and-replace of the tools you already run.
          </p>
        </div>
      </div>
    </section>
  );
};
