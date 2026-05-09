import { motion, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { Link } from "wouter";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
};

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctas?: CTA[];
  children: ReactNode;
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const stagger: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export default function PageShell({
  eyebrow,
  title,
  description,
  ctas,
  children,
}: PageShellProps) {
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <Navbar />

      {/* Smooth scroll progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
        style={{ scaleX: progressX, width: "100%" }}
      />

      <main className="overflow-hidden">
        {/* Hero with parallax + animated aurora */}
        <section
          ref={heroRef}
          className="relative isolate border-b border-white/10 pt-32 pb-24"
        >
          <motion.div
            className="absolute inset-0"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(99,102,241,0.22),_transparent_24%),linear-gradient(180deg,#06101f_0%,#050816_52%,#071326_100%)]" />
            <motion.div
              className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-3xl"
              animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-10 right-0 h-[480px] w-[480px] rounded-full bg-violet-500/20 blur-3xl"
              animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
          </motion.div>

          {/* Mouse-tracked spotlight */}
          <div
            className="pointer-events-none absolute inset-0 transition-[background] duration-200"
            style={{
              background: `radial-gradient(600px circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(56,189,248,0.10), transparent 40%)`,
            }}
          />

          <div className="container-wrapper relative z-10 max-w-4xl">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {eyebrow && (
                <motion.span
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300"
                >
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                    animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {eyebrow}
                </motion.span>
              )}
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              >
                <AnimatedHeadline text={title} />
              </motion.h1>
              {description && (
                <motion.p
                  variants={fadeUp}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="mt-6 max-w-2xl text-lg text-slate-300"
                >
                  {description}
                </motion.p>
              )}
              {ctas && ctas.length > 0 && (
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  {ctas.map((cta) => (
                    <Link key={cta.label} href={cta.href}>
                      {cta.variant === "ghost" ? (
                        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                          <Button
                            variant="outline"
                            className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                          >
                            {cta.label}
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                          <Button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-violet-400">
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                            <span className="relative flex items-center">
                              {cta.label}
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                          </Button>
                        </motion.div>
                      )}
                    </Link>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {children}

        {/* Universal closing CTA */}
        <section className="relative isolate border-t border-white/10 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(99,102,241,0.18),_transparent_55%)]" />
          <motion.div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.2 }}
          />
          <motion.div
            className="container-wrapper relative z-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="font-display text-3xl font-bold md:text-4xl"
            >
              Let's build what's next, together.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mx-auto mt-4 max-w-xl text-slate-300"
            >
              Talk to our engineering leadership about your roadmap, hiring needs, or platform goals.
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Link href="/contact">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-violet-400">
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative flex items-center">
                      Talk to an Expert
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </motion.div>
              </Link>
              <Link href="/case-studies">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                  >
                    Explore Case Studies
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function AnimatedHeadline({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <span className="inline-block">
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          className="mr-[0.25em] inline-block"
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

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative border-b border-white/5 py-24 ${className}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container-wrapper relative z-10">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      className="mx-auto mb-14 max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={stagger}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mt-4 font-display text-3xl font-bold md:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-4 text-slate-300"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

export function GlassCard({
  children,
  className = "",
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    setTilt({
      rx: (0.5 - y) * 6,
      ry: (x - 0.5) * 6,
      gx: x * 100,
      gy: y * 100,
    });
  };
  const reset = () => setTilt({ rx: 0, ry: 0, gx: 50, gy: 50 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transformStyle: "preserve-3d",
      }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-[border-color,background] duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07] ${className}`}
    >
      {/* Mouse-following glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${tilt.gx}% ${tilt.gy}%, rgba(56,189,248,0.15), transparent 45%)`,
        }}
      />
      {/* Subtle conic shimmer border on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl [background:conic-gradient(from_var(--a,0deg),transparent_70%,rgba(56,189,248,0.45)_85%,transparent_100%)] [mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] [mask-composite:exclude] p-px" />
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
}

export function StaggerGrid({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}
