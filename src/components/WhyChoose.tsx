import { Wrench, ShieldCheck, FileCheck2, Zap } from "lucide-react";

const benefits = [
  {
    icon: Wrench,
    title: "Managed",
    description: "Your day-to-day IT run properly — helpdesk, endpoints, cloud and users — by a named team."
  },
  {
    icon: ShieldCheck,
    title: "Secure by Default",
    description: "Hardening and security are standard in everything we run, never a premium add-on."
  },
  {
    icon: FileCheck2,
    title: "Always Audit-Ready",
    description: "The proof auditors, insurers and clients ask for is produced as a matter of course."
  },
  {
    icon: Zap,
    title: "Powered by Z360",
    description: "Automation and operational intelligence keep the service consistent and improving."
  }
];

export const WhyChoose = () => {
  return (
    <section id="about" className="section-spacing bg-background relative overflow-hidden">
      <div className="container-custom relative">
        <div className="max-w-3xl mb-12 animate-slide-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">What we stand on</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-[1.1]">
            Four pillars behind <span className="text-primary">every engagement</span>
          </h2>
          <p className="text-muted-foreground">
            One team, one SLA, one point of accountability — with security and evidence built in, not bolted on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-4 group p-8 rounded-3xl border transition-all duration-500 hover-lift animate-slide-up ${
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
      </div>
    </section>
  );
};
