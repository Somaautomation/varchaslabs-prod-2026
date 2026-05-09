import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * AI Loaders — premium, GPU-friendly loading animations themed around AI.
 *
 * All loaders:
 * - Respect `prefers-reduced-motion` (downgrade to static)
 * - Accept `size` (px) and `className`
 * - Use `aria-label` and `role="status"` for accessibility
 *
 * Variants:
 *   1. NeuralPulse  — concentric pulsing rings around a glowing core
 *   2. OrbitNodes   — three planets orbiting a central node
 *   3. ThinkingDots — three "typing" dots with scale + opacity wave
 *   4. ScanlineCore — vertical scanning line over an AI core
 *   5. GradientRing — conic-gradient spinner with smooth easing
 *   6. WaveBars     — equalizer-style bars (good for "processing audio")
 *   7. AILoader     — composite default: glowing brain-like orbit + caption
 */

type LoaderProps = {
  size?: number;
  className?: string;
  label?: string;
};

const a11y = (label: string) => ({
  role: "status" as const,
  "aria-live": "polite" as const,
  "aria-label": label,
});

/* -------------------------------------------------------------- NeuralPulse */
export function NeuralPulse({ size = 64, className = "", label = "Loading" }: LoaderProps) {
  const reduce = useReducedMotion();
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      {...a11y(label)}
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute inset-0 rounded-full border border-cyan-400/40"
          initial={{ scale: 0.4, opacity: 0.7 }}
          animate={reduce ? {} : { scale: [0.4, 1, 1], opacity: [0.7, 0, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
        />
      ))}
      <span
        className="relative h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]"
        style={{ width: size * 0.18, height: size * 0.18 }}
      />
    </div>
  );
}

/* --------------------------------------------------------------- OrbitNodes */
export function OrbitNodes({ size = 72, className = "", label = "Computing" }: LoaderProps) {
  const reduce = useReducedMotion();
  const orbit = size * 0.42;
  const dot = Math.max(6, size * 0.12);
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      {...a11y(label)}
    >
      <span
        className="absolute rounded-full border border-white/10"
        style={{ width: orbit * 2, height: orbit * 2 }}
      />
      <span
        className="absolute rounded-full bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.9)]"
        style={{ width: dot * 0.6, height: dot * 0.6 }}
      />
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute"
          style={{ width: orbit * 2, height: orbit * 2 }}
          animate={reduce ? {} : { rotate: 360 }}
          transition={{ duration: 2.6 + i * 0.4, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
        >
          <span
            className={`absolute left-1/2 top-0 -translate-x-1/2 rounded-full ${
              i === 0 ? "bg-cyan-400" : i === 1 ? "bg-violet-400" : "bg-fuchsia-400"
            } shadow-[0_0_14px_currentColor]`}
            style={{ width: dot, height: dot }}
          />
        </motion.span>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------- ThinkingDots */
export function ThinkingDots({ size = 8, className = "", label = "Thinking" }: LoaderProps) {
  const reduce = useReducedMotion();
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`} {...a11y(label)}>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="rounded-full bg-cyan-300"
          style={{ width: size, height: size }}
          animate={reduce ? {} : { y: [0, -size * 0.7, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------- ScanlineCore */
export function ScanlineCore({ size = 72, className = "", label = "Analyzing" }: LoaderProps) {
  const reduce = useReducedMotion();
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${className}`}
      style={{ width: size, height: size }}
      {...a11y(label)}
    >
      {/* Core */}
      <span
        className="rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 shadow-[0_0_24px_rgba(56,189,248,0.7)]"
        style={{ width: size * 0.32, height: size * 0.32 }}
      />
      {/* Scanline */}
      <motion.span
        className="pointer-events-none absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
        animate={reduce ? {} : { y: [-size / 2, size / 2, -size / 2] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(2px)" }}
      />
      {/* Grid sheen */}
      <span className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:10px_10px]" />
    </div>
  );
}

/* -------------------------------------------------------------- GradientRing */
export function GradientRing({ size = 56, className = "", label = "Loading" }: LoaderProps) {
  const reduce = useReducedMotion();
  const stroke = Math.max(3, size * 0.08);
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
      {...a11y(label)}
    >
      <motion.div
        className="h-full w-full rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(56,189,248,0) 0deg, rgba(56,189,248,1) 240deg, rgba(167,139,250,1) 320deg, rgba(56,189,248,0) 360deg)",
          mask: `radial-gradient(farthest-side, transparent calc(100% - ${stroke}px), #000 calc(100% - ${stroke}px))`,
          WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - ${stroke}px), #000 calc(100% - ${stroke}px))`,
        }}
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
      />
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]"
        style={{ width: size * 0.16, height: size * 0.16 }}
      />
    </div>
  );
}

/* ----------------------------------------------------------------- WaveBars */
export function WaveBars({ size = 40, className = "", label = "Processing" }: LoaderProps) {
  const reduce = useReducedMotion();
  const bars = 5;
  return (
    <div
      className={`inline-flex items-end gap-1 ${className}`}
      style={{ height: size }}
      {...a11y(label)}
    >
      {Array.from({ length: bars }).map((_, i) => (
        <motion.span
          key={i}
          className="w-1 rounded-full bg-gradient-to-t from-cyan-400 to-violet-400"
          animate={reduce ? { height: size * 0.4 } : { height: [size * 0.25, size, size * 0.4] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ AILoader */
export function AILoader({
  size = 96,
  className = "",
  label = "AI is thinking",
  caption,
}: LoaderProps & { caption?: string }) {
  const reduce = useReducedMotion();
  const [dots, setDots] = useState("");
  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(
      () => setDots((d) => (d.length >= 3 ? "" : d + ".")),
      400
    );
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <div className={`inline-flex flex-col items-center gap-3 ${className}`} {...a11y(label)}>
      <div className="relative" style={{ width: size, height: size }}>
        {/* Halo */}
        <motion.span
          className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/30 blur-xl"
          animate={reduce ? {} : { scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Ring */}
        <GradientRing size={size} />
        {/* Orbiting dots */}
        <div className="absolute inset-0 flex items-center justify-center">
          <OrbitNodes size={size * 0.62} />
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-slate-300">
        <span>{caption ?? label}</span>
        <span className="inline-block w-4 text-cyan-300">{dots}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- TopProgressBar */
/**
 * Slim top progress bar — useful for route changes.
 * `active` controls visibility; when set false, it animates to 100% then hides.
 */
export function TopProgressBar({ active }: { active: boolean }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    let timeout: number | undefined;
    if (active) {
      setVisible(true);
      setProgress(8);
      interval = window.setInterval(() => {
        setProgress((p) => (p < 90 ? p + (90 - p) * 0.08 : p));
      }, 180);
    } else if (visible) {
      setProgress(100);
      timeout = window.setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300);
    }
    return () => {
      if (interval) window.clearInterval(interval);
      if (timeout) window.clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  if (!visible) return null;
  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[80] h-[2px] w-full bg-transparent"
      role="progressbar"
      aria-label="Loading page"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
    >
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 shadow-[0_0_12px_rgba(56,189,248,0.7)] transition-[width] duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* --------------------------------------------------------------- AIOverlay */
/**
 * Full-screen, glassmorphic loading overlay used during route transitions.
 */
export function AIOverlay({ active, label = "Loading workspace" }: { active: boolean; label?: string }) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: active ? 1 : 0, pointerEvents: active ? "auto" : "none" }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[75] flex items-center justify-center bg-[#050816]/70 backdrop-blur-md"
      aria-hidden={!active}
    >
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-10 py-8 shadow-2xl">
        <AILoader size={88} caption={label} />
      </div>
    </motion.div>
  );
}

export default AILoader;
