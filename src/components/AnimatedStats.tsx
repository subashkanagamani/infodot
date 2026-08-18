import { useEffect, useRef, useState } from "react";
import { CalendarClock, ShieldCheck, Timer, FileClock, LogOut, AlertTriangle } from "lucide-react";

interface StatProps {
  end: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  index: number;
}

const AnimatedStat = ({ end, label, Icon, index }: StatProps) => {
  const [count, setCount] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const match = end.match(/^(\d+)(.*)$/);
    if (!match) {
      setCount(end);
      return;
    }
    const targetNumber = parseInt(match[1]);
    const suffix = match[2];
    const duration = 1800;
    const steps = 60;
    const increment = targetNumber / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current) + suffix);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col gap-3 px-6 py-7 transition-colors duration-300 hover:bg-accent-foreground/[0.04]"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="flex items-center gap-2 text-accent-foreground/45">
        <Icon className="h-4 w-4 text-primary" />
        <span className="font-display text-[10px] font-bold tracking-[0.2em]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="font-display text-[clamp(1.6rem,2.2vw,2.25rem)] font-bold tracking-tight leading-none tabular-nums text-accent-foreground whitespace-nowrap">
        {count}
      </div>
      <div className="text-[11px] md:text-xs font-medium uppercase tracking-[0.08em] leading-relaxed text-accent-foreground/60">
        {label}
      </div>
    </div>
  );
};

export const AnimatedStats = () => {
  const stats = [
    { number: "1996", label: "Running IT Since", Icon: CalendarClock },
    { number: "27001", label: "ISO 27001:2022 Certified", Icon: ShieldCheck },
    { number: "30min", label: "First Response Time", Icon: Timer },
    { number: "48hr", label: "Exact Quote Turnaround", Icon: FileClock },
    { number: "10day", label: "Exit Pack & Handover", Icon: LogOut },
    { number: "82%", label: "Denied Cyber Claims Lacked Full MFA", Icon: AlertTriangle },
  ];

  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="overflow-hidden rounded-3xl bg-accent text-accent-foreground animate-slide-up">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-accent-foreground/10 px-6 py-5">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
              By the numbers
            </p>
            <p className="text-xs text-accent-foreground/50">
              Commitments we publish and measure — not aspirations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-accent-foreground/10">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                end={stat.number}
                label={stat.label}
                Icon={stat.Icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
