import { useEffect, useMemo, useRef, type ReactNode } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";

export type PageHeaderCrumb = { label: string; href?: string };

export type PageHeaderProps = {
  title: string;
  description?: string;
  /** Small uppercase label above the title. */
  eyebrow?: string;
  /** Optional breadcrumb trail. */
  breadcrumbs?: PageHeaderCrumb[];
  /** Right-aligned slot (e.g., CTA button, stats card). */
  actions?: ReactNode;
  /** Visual density. */
  size?: "sm" | "md" | "lg";
  /** Force left alignment. Defaults to centered on md+ for backward compat. */
  align?: "left" | "center";
  /** Disable the animated particle layer (for very long pages). */
  particles?: boolean;
};

/**
 * Premium animated page header.
 *
 * Tech stack:
 * - Framer Motion: per-word reveal, scroll-driven parallax, springy CTA hover.
 * - useScroll + useTransform: parallax aurora & subtle title-Y on scroll.
 * - Mouse-tracked radial spotlight (CSS variables, no re-render storm).
 * - Floating SVG particle field with deterministic seed for SSR safety.
 * - CSS conic-gradient + mask = animated gradient underline.
 * - Respects `prefers-reduced-motion`.
 */
export function PageHeader({
  title,
  description,
  eyebrow,
  breadcrumbs,
  actions,
  size = "md",
  align,
  particles = true,
}: PageHeaderProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.9], [1, 0.4]);

  // Mouse-tracked spotlight (uses CSS vars to avoid re-renders)
  useEffect(() => {
    if (reduce) return;
    const el = spotlightRef.current;
    const host = ref.current;
    if (!el || !host) return;
    const onMove = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    host.addEventListener("mousemove", onMove);
    return () => host.removeEventListener("mousemove", onMove);
  }, [reduce]);

  const padY = size === "sm" ? "pt-[110px] pb-12" : size === "lg" ? "pt-[140px] pb-24" : "pt-[120px] pb-16";
  const titleSize =
    size === "sm"
      ? "text-2xl md:text-3xl"
      : size === "lg"
      ? "text-4xl md:text-5xl lg:text-6xl"
      : "text-3xl md:text-4xl lg:text-5xl";

  // Backward-compat: when no `align` and no actions/breadcrumbs/eyebrow, keep
  // the historical centered-on-md layout.
  const resolvedAlign: "left" | "center" =
    align ?? (actions || breadcrumbs?.length ? "left" : "center");
  const isCentered = resolvedAlign === "center";

  return (
    <header
      ref={ref}
      className={`relative isolate overflow-hidden bg-[#050816] text-white ${padY}`}
    >
      {/* Parallax aurora layer */}
      <motion.div
        aria-hidden
        style={{ y: bgY, opacity: fadeOut }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(40%_40%_at_85%_30%,rgba(139,92,246,0.18),transparent_55%),linear-gradient(180deg,#06101f_0%,#050816_55%,#071326_100%)]" />
        {!reduce && (
          <>
            <motion.div
              className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-3xl"
              animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-20 right-1/5 h-[360px] w-[360px] rounded-full bg-violet-500/20 blur-3xl"
              animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
        {/* Grid */}
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(80%_60%_at_50%_30%,#000,transparent_85%)]" />
      </motion.div>

      {/* Mouse spotlight */}
      <div
        ref={spotlightRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 transition-[background] duration-200"
        style={{
          background:
            "radial-gradient(520px circle at var(--mx, 50%) var(--my, 30%), rgba(56,189,248,0.10), transparent 45%)",
        }}
      />

      {/* Subtle particle field */}
      {particles && !reduce && <ParticleField />}

      <div className="container-wrapper relative z-10">
        <div
          className={`flex flex-col gap-6 ${
            isCentered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
          }`}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
            }}
            style={{ y: titleY }}
            className={`max-w-3xl ${isCentered ? "mx-auto" : ""}`}
          >
            {breadcrumbs && breadcrumbs.length > 0 && (
              <motion.nav
                aria-label="Breadcrumb"
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className={`mb-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-400 ${
                  isCentered ? "justify-center" : ""
                }`}
              >
                {breadcrumbs.map((c, i) => (
                  <span key={`${c.label}-${i}`} className="flex items-center gap-1.5">
                    {c.href ? (
                      <Link
                        href={c.href}
                        className="hover:text-cyan-300 transition-colors"
                      >
                        {c.label}
                      </Link>
                    ) : (
                      <span className="text-slate-200">{c.label}</span>
                    )}
                    {i < breadcrumbs.length - 1 && (
                      <ChevronRight className="h-3 w-3 text-slate-600" />
                    )}
                  </span>
                ))}
              </motion.nav>
            )}

            {eyebrow && (
              <motion.span
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </span>
                {eyebrow}
              </motion.span>
            )}

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className={`mt-4 font-display font-bold leading-[1.05] ${titleSize}`}
            >
              <AnimatedHeadline text={title} />
            </motion.h1>

            {/* Animated gradient underline */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className={`mt-5 h-[2px] w-24 rounded-full bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.9),rgba(139,92,246,0.9),transparent)] bg-[length:200%_100%] ${
                isCentered ? "mx-auto" : ""
              } ${reduce ? "" : "animate-[ph-shimmer_3s_linear_infinite]"}`}
            />

            {description && (
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className={`mt-5 text-base leading-7 text-slate-300 md:text-lg ${
                  isCentered ? "mx-auto max-w-2xl" : "max-w-2xl"
                }`}
              >
                {description}
              </motion.p>
            )}
          </motion.div>

          {actions && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="shrink-0"
            >
              {actions}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom hairline accent */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
      />

      {/* Local keyframes */}
      <style>{`
        @keyframes ph-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        @keyframes ph-float-y { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
      `}</style>
    </header>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedHeadline({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  if (reduce) {
    return <span>{text}</span>;
  }
  return (
    <span className="inline-block">
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          className="mr-[0.25em] inline-block bg-gradient-to-b from-white via-white to-slate-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: "easeOut" }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}

function ParticleField() {
  // Deterministic pseudo-random so SSR & client match.
  const dots = useMemo(() => {
    const out: { x: number; y: number; r: number; d: number; o: number }[] = [];
    let seed = 9301;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (let i = 0; i < 22; i++) {
      out.push({
        x: rand() * 100,
        y: rand() * 100,
        r: 1 + rand() * 1.6,
        d: 6 + rand() * 8,
        o: 0.25 + rand() * 0.45,
      });
    }
    return out;
  }, []);

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r * 0.18}
          fill="rgb(125, 211, 252)"
          opacity={d.o}
          style={{
            animation: `ph-float-y ${d.d}s ease-in-out ${i * 0.2}s infinite`,
            transformBox: "fill-box",
            transformOrigin: "center",
          }}
        />
      ))}
    </svg>
  );
}

export default PageHeader;
