import { Check } from "lucide-react";

const points = [
  "Experienced, certified engineers — CISSP, CEH, CISA, Microsoft, Sophos, Fortinet",
  "Predictable monthly cost and scalable support",
  "Centralised expertise across IT, security, cloud and compliance",
  "Full UK business-hours coverage with overnight monitoring",
  "Lower IT operating overheads than an equivalent local team",
];

const sideCards = [
  {
    question: "“But what if we need someone on-site?”",
    answer:
      "Over 95% of managed IT needs no site visit. For physical tasks we coordinate your local hardware vendor or smart-hands provider under our work order — so you keep one point of accountability.",
  },
  {
    question: "“Who actually works on our systems?”",
    answer:
      "A named, background-checked team in our ISO 27001-certified Bangalore centre, working UK business hours — not an anonymous rotating pool. You'll know your engineers by name from onboarding.",
  },
];

export const RemoteDelivery = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-10 animate-slide-up">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
              Why remote delivery works for you
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-[1.1]">
              Enterprise-grade IT, without the enterprise overhead
            </h2>
            <p className="text-muted-foreground mb-8">
              You get experienced people, predictable costs and capacity that scales — without building a large in-house function.
            </p>
            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-lg bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm font-medium leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            {sideCards.map((card, index) => (
              <div
                key={card.question}
                className="flex-1 bg-accent text-accent-foreground rounded-3xl p-8 md:p-10 animate-slide-up"
                style={{ animationDelay: `${0.1 + index * 0.08}s` }}
              >
                <h3 className="font-display text-xl md:text-2xl font-bold mb-4 leading-snug">
                  {card.question}
                </h3>
                <p className="text-accent-foreground/80 leading-relaxed">{card.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
