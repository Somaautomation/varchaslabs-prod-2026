import { useMemo } from "react";
import { motion } from "framer-motion";

export type MarqueeLogo = {
  name: string;
  logo: string;
};

export type LogoMarqueeProps = {
  logos: MarqueeLogo[];
  /** Seconds for one full loop. Lower = faster. */
  speed?: number;
  direction?: "left" | "right";
  /** Number of rows to render (each row uses the same logo set, offset). */
  rows?: 1 | 2;
  /** Optional CSS gap between logos. */
  gap?: string;
  className?: string;
};

/**
 * Premium enterprise-style infinite logo marquee.
 *
 * Implementation notes:
 * - The track is rendered twice and translated by exactly -50%, producing a
 *   perfectly seamless loop with no visible jump.
 * - Animation uses a CSS keyframe + `transform` (GPU-accelerated, jitter-free).
 * - Pause-on-hover is handled by toggling `animation-play-state` via the
 *   `group-hover/marquee:[animation-play-state:paused]` arbitrary variant.
 * - Edge fade is achieved with a CSS mask gradient — works in dark mode out of
 *   the box and avoids stacking-context issues.
 * - Direction is controlled per-row via `animation-direction`.
 */
export default function LogoMarquee({
  logos,
  speed = 38,
  direction = "left",
  rows = 1,
  gap = "3rem",
  className = "",
}: LogoMarqueeProps) {
  // Duplicate logos so the translateX(-50%) trick produces a seamless loop.
  const doubled = useMemo(() => [...logos, ...logos], [logos]);

  return (
    <div
      className={`group/marquee relative w-full overflow-hidden ${className}`}
      style={{
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
        maskImage:
          "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
      }}
      aria-label="Organization logos"
      role="region"
    >
      {[...Array(rows)].map((_, rowIndex) => {
        const rowDirection: "left" | "right" =
          rows === 2 ? (rowIndex === 0 ? "left" : "right") : direction;
        return (
          <div
            key={rowIndex}
            className="flex w-max will-change-transform [animation:marquee_var(--marquee-duration)_linear_infinite] motion-reduce:[animation:none] group-hover/marquee:[animation-play-state:paused]"
            style={{
              // Inline custom properties consumed by the keyframe & direction
              ["--marquee-duration" as any]: `${speed}s`,
              animationDirection: rowDirection === "right" ? "reverse" : "normal",
              gap,
              paddingTop: rowIndex === 1 ? "1.25rem" : 0,
            }}
          >
            {doubled.map((logo, i) => (
              <LogoCell key={`${rowIndex}-${logo.name}-${i}`} logo={logo} gap={gap} />
            ))}
          </div>
        );
      })}

      {/* Inject the keyframe once, scoped to this component. */}
      <style>{`
        @keyframes marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </div>
  );
}

function LogoCell({ logo, gap }: { logo: MarqueeLogo; gap: string }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
      className="group/logo relative flex h-16 w-40 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/40 hover:bg-white/[0.08] sm:h-20 sm:w-48"
      style={{ marginRight: 0, scrollMarginRight: gap }}
    >
      {/* Soft hover glow */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover/logo:opacity-100 [background:radial-gradient(120%_100%_at_50%_50%,rgba(56,189,248,0.25),transparent_60%)]" />

      <img
        src={logo.logo}
        alt={`${logo.name} logo`}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="relative max-h-8 w-auto max-w-[7rem] select-none object-contain opacity-70 brightness-0 invert grayscale transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:brightness-100 group-hover/logo:grayscale-0 group-hover/logo:invert-0 sm:max-h-10 sm:max-w-[8.5rem]"
        onError={(e) => {
          // Replace broken images with a textual fallback so the row stays clean.
          const target = e.currentTarget;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent && !parent.querySelector("[data-logo-fallback]")) {
            const span = document.createElement("span");
            span.setAttribute("data-logo-fallback", "true");
            span.className =
              "relative font-display text-sm font-semibold tracking-wide text-slate-200/80";
            span.textContent = logo.name;
            parent.appendChild(span);
          }
        }}
      />
    </motion.div>
  );
}
