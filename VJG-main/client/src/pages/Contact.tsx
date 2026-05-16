<<<<<<< Updated upstream
import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
=======
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
>>>>>>> Stashed changes
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Lock,
  Check,
  Send,
  Code2,
  Palette,
  BrainCircuit,
  Layers,
  Globe2,
  Cloud,
  TestTube2,
  Building2,
  CalendarClock,
  Compass,
  ClipboardList,
  Rocket,
  LineChart,
  CircleDot,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AILoader } from "@/components/AILoaders";

/* ────────────────────────────────────────────────────────────────────────── */
/*  Types & constants                                                          */
/* ────────────────────────────────────────────────────────────────────────── */

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  services: string[];
  description: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  timeline: "",
  services: [],
  description: "",
};

const PROJECT_TYPES = [
  "New Product Build",
  "Modernize Existing Product",
  "AI / Automation Initiative",
  "Design System / UX Overhaul",
  "Staff Augmentation",
  "Other",
];

const BUDGETS = [
  "< $25k",
  "$25k – $75k",
  "$75k – $200k",
  "$200k – $500k",
  "$500k+",
];

const TIMELINES = [
  "ASAP / < 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "6+ months",
  "Just exploring",
];

const SERVICES = [
  { id: "product",  label: "Product Engineering", Icon: Code2 },
  { id: "design",   label: "UI / UX Design",      Icon: Palette },
  { id: "ai",       label: "AI Solutions",        Icon: BrainCircuit },
  { id: "saas",     label: "SaaS Development",    Icon: Layers },
  { id: "web",      label: "Web Applications",    Icon: Globe2 },
  { id: "cloud",    label: "Cloud & DevOps",      Icon: Cloud },
  { id: "qa",       label: "QA Automation",       Icon: TestTube2 },
  { id: "ent",      label: "Enterprise Software", Icon: Building2 },
];

const PROCESS = [
  { Icon: Compass,       title: "Discovery Call",      desc: "30-min consultation to understand goals, constraints & success metrics." },
  { Icon: ClipboardList, title: "Technical Planning",  desc: "Architecture blueprint, tech-stack picks, scope & delivery roadmap." },
  { Icon: Palette,       title: "Product Design",      desc: "User flows, wireframes & a high-fidelity design system." },
  { Icon: Code2,         title: "Development Sprint",  desc: "Bi-weekly sprints, demos, and continuous feedback loops." },
  { Icon: ShieldCheck,   title: "QA & Deployment",     desc: "Automated tests, security review, and zero-downtime release." },
  { Icon: LineChart,     title: "Scaling & Support",   desc: "Observability, SLOs, and ongoing product evolution." },
];

const METRICS = [
  { value: "50+",    label: "Projects delivered" },
  { value: "99.9%",  label: "Deployment stability" },
  { value: "<24h",   label: "Response time" },
  { value: "12+",    label: "Industries served" },
];

const TRUST_BADGES = [
  { Icon: ShieldCheck, label: "NDA-friendly" },
  { Icon: Lock,        label: "SOC2-aligned process" },
  { Icon: Sparkles,    label: "Senior engineers only" },
];

/* ────────────────────────────────────────────────────────────────────────── */
/*  Motion variants                                                            */
/* ────────────────────────────────────────────────────────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

/* ────────────────────────────────────────────────────────────────────────── */
/*  Main page                                                                  */
/* ────────────────────────────────────────────────────────────────────────── */

export default function Contact() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  return (
    <div className="min-h-screen bg-[#05070D] text-white selection:bg-cyan-400/30">
      <Navbar />

      {/* Smooth top scroll progress */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400"
      />

      {/* Sticky floating CTA */}
      <FloatingCTA />

      <Hero reduced={!!prefersReduced} />

      <main className="relative">
        <BackgroundMesh />

        {/* Form + side trust panel */}
        <section className="relative py-20 md:py-28">
          <div className="container-wrapper grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
            <ContactForm />
            <TrustPanel />
          </div>
        </section>

        <ServiceSelectorSection />
        <ProcessTimeline />
        <PremiumCTA />
      </main>

      <Footer />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Background mesh + animated grid                                            */
/* ────────────────────────────────────────────────────────────────────────── */

function BackgroundMesh() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 75%)",
        }}
      />
      <motion.div
        className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-0 h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-[140px]"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  HERO                                                                       */
/* ────────────────────────────────────────────────────────────────────────── */

function Hero({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  const spotlightX = useTransform(mx, (v) => `${v * 100}%`);
  const spotlightY = useTransform(my, (v) => `${v * 100}%`);

  const headline = "Let's build software that performs.".split(" ");

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
    >
      {/* Aurora */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(34,211,238,.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(139,92,246,.18),transparent_60%)]" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: useTransform(
              [spotlightX, spotlightY] as any,
              ([x, y]: any) =>
                `radial-gradient(380px circle at ${x} ${y}, rgba(56,189,248,.18), transparent 60%)`
            ),
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 30%, black 40%, transparent 80%)",
          }}
        />
        {/* Floating particles */}
        {!reduced && <ParticleField />}
      </div>

      <div className="container-wrapper relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-200 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Now booking Q3 engagements
          </motion.span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {headline.map((w, i) => (
              <motion.span
                key={i}
                variants={fadeUp}
                className="mr-2 inline-block bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
          >
            Partner with Varchas Labs for product engineering, AI systems, scalable
            applications and enterprise-ready digital experiences. Talk to engineers
            who ship — not account managers.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton primary>
              Book a strategy call
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton>
              <a href="#contact-form" className="inline-flex items-center gap-2">
                Send a brief
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/50"
          >
            {TRUST_BADGES.map(({ Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2">
                <Icon className="h-4 w-4 text-cyan-300" />
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ParticleField() {
  const dots = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: (i * 53) % 100,
        y: (i * 37) % 100,
        d: 6 + ((i * 7) % 10),
        s: 0.6 + ((i % 5) * 0.15),
      })),
    []
  );
  return (
    <svg className="absolute inset-0 h-full w-full" aria-hidden>
      {dots.map((p) => (
        <motion.circle
          key={p.id}
          cx={`${p.x}%`}
          cy={`${p.y}%`}
          r={p.s}
          fill="rgba(125,211,252,.55)"
          animate={{ cy: [`${p.y}%`, `${(p.y + 6) % 100}%`, `${p.y}%`], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Magnetic button                                                            */
/* ────────────────────────────────────────────────────────────────────────── */

function MagneticButton({
  children,
  primary,
  type = "button",
  onClick,
  disabled,
  className = "",
}: {
  children: React.ReactNode;
  primary?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 16 });
  const sy = useSpring(y, { stiffness: 200, damping: 16 });
  const reduced = useReducedMotion();

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={(e) => {
        if (reduced || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      className={[
        "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-60",
        primary
          ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 shadow-[0_10px_40px_-10px_rgba(34,211,238,.6)] hover:shadow-[0_18px_60px_-10px_rgba(139,92,246,.6)]"
          : "border border-white/15 bg-white/5 text-white backdrop-blur hover:bg-white/10",
        className,
      ].join(" ")}
    >
      {primary && (
        <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
      )}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </motion.button>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Floating sticky CTA                                                        */
/* ────────────────────────────────────────────────────────────────────────── */

function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#contact-form"
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
          className="fixed bottom-24 right-6 z-40 hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium text-white shadow-2xl backdrop-blur md:inline-flex"
        >
          <Sparkles className="h-4 w-4 text-cyan-300" />
          Start a project
        </motion.a>
      )}
    </AnimatePresence>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  CONTACT FORM                                                               */
/* ────────────────────────────────────────────────────────────────────────── */

function ContactForm() {
  const [data, setData] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-grow textarea
  useEffect(() => {
    const t = textareaRef.current;
    if (!t) return;
    t.style.height = "0px";
    t.style.height = Math.min(t.scrollHeight, 360) + "px";
  }, [data.description]);

  const filledCount = useMemo(() => {
    let n = 0;
    if (data.name) n++;
    if (data.company) n++;
    if (data.email) n++;
    if (data.phone) n++;
    if (data.projectType) n++;
    if (data.budget) n++;
    if (data.timeline) n++;
    if (data.services.length) n++;
    if (data.description) n++;
    return n;
  }, [data]);

  const progressPct = Math.round((filledCount / 9) * 100);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const toggleService = (id: string) => {
    setData((d) => {
      const has = d.services.includes(id);
      return {
        ...d,
        services: has ? d.services.filter((s) => s !== id) : [...d.services, id],
      };
    });
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!data.name.trim()) e.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = "Enter a valid work email";
    if (!data.phone.trim()) e.phone = "Phone helps us reach you faster";
    if (!data.description.trim()) e.description = "Tell us a little about the project";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    const composed = [
      `Company: ${data.company || "—"}`,
      `Project Type: ${data.projectType || "—"}`,
      `Budget: ${data.budget || "—"}`,
      `Timeline: ${data.timeline || "—"}`,
      `Services: ${
        data.services.length
          ? data.services
              .map((id) => SERVICES.find((s) => s.id === id)?.label || id)
              .join(", ")
          : "—"
      }`,
      "",
      data.description,
    ].join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: composed,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setData(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.section
      id="contact-form"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative"
    >
      <motion.div
        variants={fadeUp}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl"
      >
        {/* Animated gradient border */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-60 [mask:linear-gradient(black,black)_content-box,linear-gradient(black,black)] [mask-composite:exclude]"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(34,211,238,.4), rgba(139,92,246,.4), rgba(236,72,153,.4), rgba(34,211,238,.4))",
          }}
        />
        <div className="relative rounded-[calc(1.5rem-2px)] bg-[#0A0E1A]/80 p-6 md:p-10">
          {/* Header + progress */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/80">
                Send Information
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
                Tell us about your product
              </h2>
              <p className="mt-2 text-sm text-white/55">
                We'll reply within one business day with next steps & a tailored plan.
              </p>
            </div>
            <div className="w-full max-w-[220px]">
              <div className="mb-1.5 flex items-center justify-between text-xs text-white/55">
                <span>Brief completeness</span>
                <span className="text-white/80">{progressPct}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                  animate={{ width: `${progressPct}%` }}
                  transition={{ type: "spring", stiffness: 120, damping: 22 }}
                />
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <SuccessState onReset={() => setStatus("idle")} />
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
                noValidate
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <FloatingInput
                    label="Full name"
                    value={data.name}
                    onChange={(v) => set("name", v)}
                    error={errors.name}
                    autoComplete="name"
                  />
                  <FloatingInput
                    label="Company"
                    value={data.company}
                    onChange={(v) => set("company", v)}
                    autoComplete="organization"
                  />
                  <FloatingInput
                    label="Work email"
                    type="email"
                    value={data.email}
                    onChange={(v) => set("email", v)}
                    error={errors.email}
                    autoComplete="email"
                  />
                  <FloatingInput
                    label="Phone"
                    type="tel"
                    value={data.phone}
                    onChange={(v) => set("phone", v)}
                    error={errors.phone}
                    autoComplete="tel"
                  />
                  <FloatingSelect
                    label="Project type"
                    value={data.projectType}
                    onChange={(v) => set("projectType", v)}
                    options={PROJECT_TYPES}
                  />
                  <FloatingSelect
                    label="Budget range"
                    value={data.budget}
                    onChange={(v) => set("budget", v)}
                    options={BUDGETS}
                  />
                  <div className="md:col-span-2">
                    <FloatingSelect
                      label="Timeline"
                      value={data.timeline}
                      onChange={(v) => set("timeline", v)}
                      options={TIMELINES}
                    />
                  </div>
                </div>

                {/* Services chips */}
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                    Services interested in
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map(({ id, label, Icon }) => {
                      const active = data.services.includes(id);
                      return (
                        <motion.button
                          key={id}
                          type="button"
                          whileTap={{ scale: 0.96 }}
                          onClick={() => toggleService(id)}
                          className={[
                            "group inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition",
                            active
                              ? "border-cyan-300/50 bg-cyan-400/15 text-cyan-100 shadow-[0_0_30px_-8px_rgba(34,211,238,.6)]"
                              : "border-white/10 bg-white/[0.04] text-white/70 hover:border-white/25 hover:text-white",
                          ].join(" ")}
                          aria-pressed={active}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {label}
                          {active && <Check className="h-3.5 w-3.5" />}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                <FloatingTextarea
                  label="Project description"
                  value={data.description}
                  onChange={(v) => set("description", v)}
                  error={errors.description}
                  textareaRef={textareaRef}
                />

                <div className="flex flex-col-reverse items-stretch justify-between gap-4 pt-2 md:flex-row md:items-center">
                  <p className="inline-flex items-center gap-2 text-xs text-white/50">
                    <Lock className="h-3.5 w-3.5 text-cyan-300" />
                    Your information is confidential. We're happy to sign an NDA first.
                  </p>
                  <MagneticButton primary type="submit" disabled={status === "loading"}>
                    {status === "loading" ? (
                      <>
                        <span className="inline-block h-4 w-4">
                          <AILoader size={16} label="Sending" />
                        </span>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send information
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </MagneticButton>
                </div>

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200"
                  >
                    Something went wrong sending your message. Please try again, or
                    email us directly at{" "}
                    <a className="underline" href="mailto:info@varchaslabs.com">
                      info@varchaslabs.com
                    </a>
                    .
                  </motion.p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.section>
  );
}

/* ── Floating-label inputs ───────────────────────────────────────────────── */

function FloatingInput({
  label,
  value,
  onChange,
  type = "text",
  error,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
  autoComplete?: string;
}) {
  const id = useMemo(() => `f-${Math.random().toString(36).slice(2, 9)}`, []);
  const [focus, setFocus] = useState(false);
  const lifted = focus || value.length > 0;
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={[
          "peer w-full rounded-xl border bg-white/[0.03] px-4 pt-5 pb-2 text-sm text-white outline-none transition",
          "backdrop-blur placeholder:text-transparent",
          error
            ? "border-rose-400/60 focus:border-rose-400"
            : "border-white/10 focus:border-cyan-300/60",
        ].join(" ")}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={[
          "pointer-events-none absolute left-4 transition-all",
          lifted ? "top-1.5 text-[11px] text-cyan-200/80" : "top-3.5 text-sm text-white/45",
        ].join(" ")}
      >
        {label}
      </label>
      {/* animated focus ring */}
      <span
        aria-hidden
        className={[
          "pointer-events-none absolute inset-0 rounded-xl transition",
          focus
            ? "shadow-[0_0_0_3px_rgba(34,211,238,.18),0_0_40px_-10px_rgba(34,211,238,.55)]"
            : "shadow-none",
        ].join(" ")}
      />
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-xs text-rose-300">
          {error}
        </p>
      )}
    </div>
  );
}

function FloatingSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  const id = useMemo(() => `s-${Math.random().toString(36).slice(2, 9)}`, []);
  const [focus, setFocus] = useState(false);
  const lifted = focus || value.length > 0;
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={[
          "peer w-full appearance-none rounded-xl border bg-white/[0.03] px-4 pt-5 pb-2 text-sm text-white outline-none transition",
          "backdrop-blur",
          focus ? "border-cyan-300/60" : "border-white/10",
        ].join(" ")}
      >
        <option value="" disabled hidden></option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#0A0E1A] text-white">
            {o}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className={[
          "pointer-events-none absolute left-4 transition-all",
          lifted ? "top-1.5 text-[11px] text-cyan-200/80" : "top-3.5 text-sm text-white/45",
        ].join(" ")}
      >
        {label}
      </label>
      <CircleDot className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-white/40" />
    </div>
  );
}

function FloatingTextarea({
  label,
  value,
  onChange,
  error,
  textareaRef,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
}) {
  const id = useMemo(() => `t-${Math.random().toString(36).slice(2, 9)}`, []);
  const [focus, setFocus] = useState(false);
  const lifted = focus || value.length > 0;
  return (
    <div className="relative">
      <textarea
        id={id}
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        rows={4}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        placeholder="What problem are you solving? Goals, users, constraints, links to references…"
        className={[
          "w-full resize-none rounded-xl border bg-white/[0.03] px-4 pt-6 pb-3 text-sm text-white outline-none transition",
          "backdrop-blur placeholder:text-white/25",
          error
            ? "border-rose-400/60 focus:border-rose-400"
            : "border-white/10 focus:border-cyan-300/60",
        ].join(" ")}
      />
      <label
        htmlFor={id}
        className={[
          "pointer-events-none absolute left-4 transition-all",
          lifted ? "top-1.5 text-[11px] text-cyan-200/80" : "top-4 text-sm text-white/45",
        ].join(" ")}
      >
        {label}
      </label>
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-xs text-rose-300">
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      className="flex flex-col items-center gap-5 py-10 text-center"
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
        className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/20 ring-1 ring-cyan-300/40"
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-cyan-400/20"
          animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
        />
        <Check className="h-9 w-9 text-cyan-200" />
      </motion.div>
      <div>
        <h3 className="font-display text-2xl font-semibold">Brief received</h3>
        <p className="mt-2 max-w-md text-sm text-white/60">
          Thanks — a senior engineer will reach out within one business day with
          next steps and a tailored plan.
        </p>
      </div>
      <MagneticButton onClick={onReset}>Send another</MagneticButton>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  TRUST PANEL                                                                */
/* ────────────────────────────────────────────────────────────────────────── */

function TrustPanel() {
  return (
    <motion.aside
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-6"
    >
      <motion.div
        variants={fadeUp}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur"
      >
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/80">
          Why teams pick Varchas
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold">
          Built like a product team. Priced like a partner.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          You get senior engineers, designers and PMs from day one — no juniors
          shadow-billed, no waterfall surprises.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {METRICS.map((m) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
            >
              <div className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text font-display text-xl font-semibold text-transparent">
                {m.value}
              </div>
              <div className="mt-0.5 text-[11px] text-white/55">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
      >
        <h4 className="text-sm font-semibold text-white/85">Direct lines</h4>
        <ul className="mt-4 space-y-4 text-sm">
          <ContactLine Icon={Mail}  label="Email"   value="info@varchaslabs.com" href="mailto:info@varchaslabs.com" />
          <ContactLine Icon={Phone} label="Call"    value="+91 63601 34569"      href="tel:+916360134569" />
          <ContactLine Icon={MapPin} label="Visit"  value="K R Puram, Bengaluru" />
          <ContactLine Icon={Clock} label="Hours"   value="Mon–Sat · 9am – 7pm IST" />
        </ul>
        <div className="mt-6 flex items-center gap-3">
          <Social Icon={Linkedin}  href="https://linkedin.com" />
          <Social Icon={Github}    href="https://github.com" />
          <Social Icon={Twitter}   href="https://twitter.com" />
          <Social Icon={Instagram} href="https://instagram.com" />
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-6"
      >
        <div className="flex items-center gap-3">
          <CalendarClock className="h-5 w-5 text-cyan-200" />
          <h4 className="text-sm font-semibold text-white/90">
            Prefer to talk first?
          </h4>
        </div>
        <p className="mt-2 text-sm text-white/60">
          Book a free 30-minute strategy call with our engineering lead.
        </p>
        <MagneticButton primary className="mt-5">
          Schedule a call
          <ArrowRight className="h-4 w-4" />
        </MagneticButton>
      </motion.div>
    </motion.aside>
  );
}

function ContactLine({
  Icon,
  label,
  value,
  href,
}: {
  Icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-cyan-300 ring-1 ring-white/10">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-[11px] uppercase tracking-wider text-white/45">{label}</div>
        <div className="text-sm text-white/85">{value}</div>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="group block transition hover:translate-x-0.5">
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}

function Social({ Icon, href }: { Icon: typeof Linkedin; href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -2 }}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/75 transition hover:border-cyan-300/40 hover:text-cyan-200 hover:shadow-[0_0_24px_-6px_rgba(34,211,238,.6)]"
    >
      <Icon className="h-4 w-4" />
    </motion.a>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  SERVICE SELECTOR                                                           */
/* ────────────────────────────────────────────────────────────────────────── */

function ServiceSelectorSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-wrapper">
        <SectionHeading
          eyebrow="What can we build for you?"
          title="Pick the engagements that fit"
          desc="Multi-select what you need — your selections flow straight into the brief above."
        />
        <ServiceGrid />
      </div>
    </section>
  );
}

function ServiceGrid() {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {SERVICES.map(({ id, label, Icon }, i) => (
        <ServiceCard
          key={id}
          index={i}
          active={selected.includes(id)}
          onClick={() => toggle(id)}
          label={label}
          Icon={Icon}
        />
      ))}
    </motion.div>
  );
}

function ServiceCard({
  index,
  active,
  onClick,
  label,
  Icon,
}: {
  index: number;
  active: boolean;
  onClick: () => void;
  label: string;
  Icon: typeof Code2;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const reduced = useReducedMotion();
  return (
    <motion.button
      ref={ref}
      type="button"
      variants={fadeUp}
      onClick={onClick}
      onMouseMove={(e) => {
        if (reduced || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry.set(px * 12);
        rx.set(-py * 12);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      className={[
        "group relative overflow-hidden rounded-2xl border p-6 text-left transition",
        active
          ? "border-cyan-300/40 bg-cyan-400/[0.06] shadow-[0_20px_60px_-25px_rgba(34,211,238,.6)]"
          : "border-white/10 bg-white/[0.03] hover:border-white/25",
      ].join(" ")}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--mx,50%) var(--my,50%), rgba(34,211,238,.18), transparent 60%)",
        }}
      />
      <div className="relative flex items-center justify-between">
        <span
          className={[
            "inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 transition",
            active
              ? "bg-cyan-400/15 text-cyan-200 ring-cyan-300/40"
              : "bg-white/[0.05] text-white/80 ring-white/10 group-hover:text-cyan-200",
          ].join(" ")}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={[
            "inline-flex h-6 w-6 items-center justify-center rounded-full border text-[10px] transition",
            active
              ? "border-cyan-300/60 bg-cyan-400/20 text-cyan-100"
              : "border-white/15 text-white/50",
          ].join(" ")}
        >
          {active ? <Check className="h-3.5 w-3.5" /> : index + 1}
        </span>
      </div>
      <div className="relative mt-6 font-display text-lg font-semibold">{label}</div>
      <div className="relative mt-1 inline-flex items-center gap-1 text-xs text-white/50 transition group-hover:text-cyan-200">
        Learn more <ArrowUpRight className="h-3.5 w-3.5" />
      </div>
    </motion.button>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  PROCESS TIMELINE                                                           */
/* ────────────────────────────────────────────────────────────────────────── */

function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <section className="relative py-20 md:py-28">
      <div className="container-wrapper">
        <SectionHeading
          eyebrow="How we engage"
          title="From discovery to scaled product"
          desc="A predictable, transparent six-step rhythm — adapted to your team's ways of working."
        />

        <div ref={ref} className="relative mt-14">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-cyan-400 via-violet-400 to-fuchsia-400 md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-10">
            {PROCESS.map((p, i) => (
              <ProcessRow key={p.title} step={i + 1} {...p} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ProcessRow({
  step,
  Icon,
  title,
  desc,
}: {
  step: number;
  Icon: typeof Compass;
  title: string;
  desc: string;
}) {
  const isLeft = step % 2 === 1;
  return (
    <motion.li
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid grid-cols-[2.5rem_1fr] gap-4 md:grid-cols-2 md:gap-12"
    >
      {/* dot */}
      <span className="absolute left-4 top-3 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_18px_2px_rgba(34,211,238,.5)] md:left-1/2" />

      <div className={isLeft ? "md:order-1 md:pr-8 md:text-right" : "md:order-2 md:pl-8"}>
        <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-300/80">
          Step {step.toString().padStart(2, "0")}
        </div>
        <h3 className="mt-1 font-display text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
      </div>
      <div
        className={
          (isLeft ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8") +
          " hidden md:flex md:items-start"
        }
      >
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-200 backdrop-blur">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </motion.li>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  PREMIUM CTA                                                                */
/* ────────────────────────────────────────────────────────────────────────── */

function PremiumCTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0A0E1A] via-[#0d1226] to-[#0A0E1A] p-10 md:p-16"
        >
          <motion.div
            aria-hidden
            className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl"
            animate={{ x: [0, 20, 0], y: [0, 14, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-violet-600/30 blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, -14, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative grid items-center gap-10 md:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/80">
                Let's get started
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">
                Start your product journey{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
                  today.
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
                Whether it's a fresh idea or a complex modernization, our team is
                ready to scope, plan and build with you.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <MagneticButton primary>
                <Rocket className="h-4 w-4" />
                Schedule consultation
              </MagneticButton>
              <MagneticButton>
                <a href="#contact-form" className="inline-flex items-center gap-2">
                  Get a project estimate
                  <ArrowRight className="h-4 w-4" />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="mailto:info@varchaslabs.com" className="inline-flex items-center gap-2">
                  Talk to engineering team
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Section heading                                                            */
/* ────────────────────────────────────────────────────────────────────────── */

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-2xl text-center"
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-3 text-sm text-white/60 md:text-base">{desc}</p>}
    </motion.div>
  );
}
