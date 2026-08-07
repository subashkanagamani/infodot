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
      className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 animate-slide-up"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="flex items-start justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary">
          <Icon className="h-5 w-5 text-primary" />
        </span>
        <span className="font-display text-[10px] font-bold tracking-[0.18em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-8 font-display text-4xl md:text-5xl font-bold tracking-tight leading-none tabular-nums">
        {count}
      </div>
      <div className="mt-3 h-px w-8 bg-primary" aria-hidden />
      <div className="mt-3 text-xs md:text-sm font-medium leading-snug text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

export const AnimatedStats = () => {
  const stats = [
    { number: "1996", label: "Running UK IT Since", Icon: CalendarClock },
    { number: "27001", label: "ISO 27001:2022 Certified", Icon: ShieldCheck },
    { number: "30min", label: "First Response Time", Icon: Timer },
    { number: "48hr", label: "Exact Quote Turnaround", Icon: FileClock },
    { number: "10day", label: "Exit Pack & Handover", Icon: LogOut },
    { number: "82%", label: "Denied Cyber Claims Lacked Full MFA", Icon: AlertTriangle },
  ];

  return (
    <section className="section-spacing bg-secondary">
      <div className="container-custom">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 animate-slide-up">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">By the numbers</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold leading-[1.1]">
              Standards we <span className="text-primary">hold ourselves to.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Commitments we publish, measure and report on — not aspirations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
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
    </section>
  );
};
