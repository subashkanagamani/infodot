import { CalendarClock, ShieldCheck, MapPin, KeyRound } from "lucide-react";

const tiles = [
  {
    icon: CalendarClock,
    title: "Since 1996",
    description: "Nearly three decades running real production IT for hundreds of organisations.",
  },
  {
    icon: ShieldCheck,
    title: "ISO 27001:2022",
    description: "Certified organisation. GDPR-aligned data processing. SOC 2 attestation in progress.",
  },
  {
    icon: MapPin,
    title: "Already in the UK",
    description: "We run day-to-day IT, security and compliance for Briconomics in London — delivered entirely remotely.",
  },
  {
    icon: KeyRound,
    title: "Accountable by design",
    description: "Role-based, scoped, revocable access. Every engineer action logged and auditable.",
  },
];

export const HomeTrust = () => {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="overflow-hidden rounded-3xl bg-accent text-accent-foreground animate-slide-up">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-accent-foreground/10 px-6 py-5">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
              Why UK businesses trust us
            </p>
            <p className="text-xs text-accent-foreground/50">
              Three decades of running IT — not talking about it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-accent-foreground/10">
            {tiles.map((tile, index) => (
              <div key={tile.title} className="flex flex-col gap-3 px-6 py-8">
                <div className="flex items-center gap-2 text-accent-foreground/45">
                  <tile.icon className="h-4 w-4 text-primary" />
                  <span className="font-display text-[10px] font-bold tracking-[0.2em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight text-accent-foreground">
                  {tile.title}
                </h3>
                <p className="text-sm leading-relaxed text-accent-foreground/65">
                  {tile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
