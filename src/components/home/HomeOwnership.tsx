import { KeyRound, LogOut } from "lucide-react";

export const HomeOwnership = () => {
  return (
    <section className="section-spacing bg-secondary/40">
      <div className="container-custom">
        <div className="max-w-3xl mb-12 animate-slide-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">You own your IT</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-10 animate-slide-up">
            <span className="w-11 h-11 bg-accent text-accent-foreground rounded-xl flex items-center justify-center mb-6">
              <KeyRound className="w-5 h-5" />
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 leading-snug">
              We operate your IT. We never hold it hostage.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Your domains, tenancies, licences and admin rights stay in your name throughout — so switching to us, and one day away from us, is never a hostage situation.
            </p>
          </div>
          <div className="bg-accent text-accent-foreground rounded-3xl p-8 md:p-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="w-11 h-11 bg-card rounded-xl flex items-center justify-center border border-border mb-6">
              <LogOut className="w-5 h-5 text-primary" />
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 leading-snug">
              Exit is simple and fully documented
            </h2>
            <p className="text-accent-foreground/80 leading-relaxed">
              You give 60 days' notice, and within 10 working days of that notice we hand over a complete exit pack — configurations, credentials, licence and asset records, and full documentation — so your next provider can take over cleanly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
