import { MessageSquare, Headset, Wrench, ArrowUpRight, FileCheck2 } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "UK user raises a request" },
  { icon: Headset, title: "Infodot remote service desk" },
  { icon: Wrench, title: "Diagnosis & resolution" },
  { icon: ArrowUpRight, title: "Escalation / specialist support" },
  { icon: FileCheck2, title: "Closure & reporting" },
];

export const Process = () => {
  return (
    <section id="process" className="section-spacing relative overflow-hidden bg-secondary/40">
      <div className="container-custom relative">
        <div className="max-w-3xl mb-12 animate-slide-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">How we support you</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-[1.1]">
            Remote — but <span className="text-primary">never informal</span>
          </h2>
          <p className="text-muted-foreground">
            A structured path for every request, with a named engineer owning it through to resolution — and reporting you can show your board.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-3xl p-6 flex flex-col gap-4 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 bg-accent text-accent-foreground rounded-xl flex items-center justify-center">
                  <step.icon className="w-5 h-5" />
                </span>
                <span className="font-display text-xs font-bold text-primary tracking-[0.2em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display font-bold leading-snug">{step.title}</h3>
              {index < steps.length - 1 && (
                <span aria-hidden className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-primary font-bold z-10">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
