import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Situation {
  id: string;
  tag: string;
  quote: string;
  description: string;
}

const situations: Situation[] = [
  {
    id: "1",
    tag: "Situation 1 · The capability gap",
    quote: "Our IT team only does the basics.",
    description:
      "People stretched thin keeping the lights on — but secure-by-default operations, patching discipline and audit evidence never quite happen. We add that layer, alongside your team."
  },
  {
    id: "2",
    tag: "Situation 2 · The operational gap",
    quote: "We bought the tools. Nobody runs them.",
    description:
      "Good technology you can't fully operate. We bring the expertise to run what you already own — your tools or ours — no rip-and-replace."
  }
];

export const Testimonials = () => {
  return (
    <section className="section-spacing bg-secondary/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sound <span className="text-gradient-primary relative">
              familiar?
              <span className="absolute -inset-2 bg-primary/10 blur-2xl -z-10" />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Most clients arrive in one of two situations.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {situations.map((situation) => (
            <Card
              key={situation.id}
              className="p-8 h-full bg-card border-border/50 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-neon-cyan/0 group-hover:from-primary/5 group-hover:to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  {situation.tag}
                </div>
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                <p className="text-2xl font-bold mb-6 leading-snug group-hover:text-primary-glow transition-colors">
                  "{situation.quote}"
                </p>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {situation.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
