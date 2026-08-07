interface AmbientBackdropProps {
  /** How strong the effect reads. */
  intensity?: "subtle" | "bold";
  className?: string;
}

/**
 * Calm, CSS-only ambient motion: drifting diagonal ribbons, a slow dot-field
 * pan and a soft light sheen. No canvas, no particles, no mouse tracking.
 */
export const AmbientBackdrop = ({ intensity = "subtle", className = "" }: AmbientBackdropProps) => {
  const strong = intensity === "bold";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Drifting dot field */}
      <div
        className="absolute -inset-x-24 -inset-y-24 animate-dot-drift"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--foreground) / 0.10) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          opacity: strong ? 0.5 : 0.32,
        }}
      />

      {/* Diagonal ribbons */}
      <div className="absolute inset-0 -skew-y-12">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute left-[-30%] right-[-30%] animate-ribbon-drift"
            style={{
              top: `${18 + i * 26}%`,
              height: strong ? "10rem" : "7rem",
              background:
                i % 2 === 0
                  ? "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.10), transparent)"
                  : "linear-gradient(90deg, transparent, hsl(var(--neon-purple) / 0.10), transparent)",
              filter: "blur(28px)",
              animationDelay: `${i * 4}s`,
              animationDuration: `${18 + i * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Slow sheen sweep */}
      <div
        className="absolute inset-y-0 w-1/3 animate-sheen-sweep"
        style={{
          background:
            "linear-gradient(100deg, transparent, hsl(var(--primary) / 0.06), transparent)",
        }}
      />

      {/* Edge fade so it never fights the content */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
    </div>
  );
};