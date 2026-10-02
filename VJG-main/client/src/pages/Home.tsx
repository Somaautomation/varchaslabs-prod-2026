import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Bot,
  Briefcase,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  Gauge,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers,
  LineChart,
  Lock,
  Quote,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Users,
  Workflow,
  Zap,
  Smartphone,
  Palette,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (documentHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      setScrollProgress((window.scrollY / documentHeight) * 100);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <Navbar />
      <div
        className="fixed left-0 top-0 z-[60] h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
        style={{ width: `${scrollProgress}%` }}
      />

      <main className="overflow-hidden">
        <section className="relative isolate border-b border-white/10 pt-32 pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(99,102,241,0.22),_transparent_24%),linear-gradient(180deg,#06101f_0%,#050816_52%,#071326_100%)]" />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

          <div className="container-wrapper relative z-10 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.12 }}
              className="max-w-3xl space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-slate-200 backdrop-blur">
                  <Sparkles className="h-4 w-4 text-cyan-300" />
                  Utility-domain engineering and outsourcing
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <h1 className="max-w-4xl text-5xl font-display font-bold leading-[1.02] text-white md:text-6xl lg:text-7xl">
                  Skilled Software Engineers for the Utility Industry
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                  VarchasLabs provides trained software engineers and technology professionals to utility-domain companies through flexible outsourcing, staff augmentation, and dedicated engineering teams.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button className="h-14 rounded-full bg-cyan-400 px-8 text-base font-semibold text-slate-950 hover:bg-cyan-300">
                    Hire Our Engineers
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="h-14 rounded-full border-white/15 bg-white/5 px-8 text-base text-white hover:bg-white/10 hover:text-white"
                  >
                    Contact Us
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {heroMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur"
                  >
                    <div className="text-2xl font-display font-bold text-white">{metric.value}</div>
                    <div className="mt-1 text-sm text-slate-300">{metric.label}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
                {heroPills.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-[0_30px_120px_-40px_rgba(37,99,235,0.65)] backdrop-blur-2xl">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/55 px-5 py-4">
                  <div>
                    <div className="text-sm uppercase tracking-[0.22em] text-cyan-300">Delivery cockpit</div>
                    <div className="mt-1 text-xl font-semibold text-white">Product execution visibility</div>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-300">
                    Weekly operating cadence
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-3xl border border-white/10 bg-[#081224] p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-400">Release readiness</div>
                        <div className="mt-1 text-3xl font-display font-bold text-white">92%</div>
                      </div>
                      <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                        <Gauge className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {releaseChecks.map((item) => (
                        <div key={item.label} className="space-y-2">
                          <div className="flex items-center justify-between text-sm text-slate-300">
                            <span>{item.label}</span>
                            <span>{item.value}</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-white/8">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
                              style={{ width: item.value }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-3xl border border-white/10 bg-[#0b162c] p-5">
                      <div className="text-sm text-slate-400">Delivery system</div>
                      <div className="mt-4 grid gap-3">
                        {systemPillars.map((item) => (
                          <div
                            key={item.title}
                            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                          >
                            <div className="text-sm font-semibold text-white">{item.title}</div>
                            <div className="mt-1 text-sm text-slate-400">{item.copy}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-[#0d1a33] p-5">
                      <div className="flex items-center justify-between text-sm text-slate-400">
                        <span>Cross-functional pods</span>
                        <span>Always-on reporting</span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {podLabels.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#0B0F19] py-24">
          {/* Ambient gradient backdrop */}
          <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.10),transparent_60%),radial-gradient(40%_40%_at_80%_100%,rgba(139,92,246,0.10),transparent_60%)]" />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
            animate={{ opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="container-wrapper relative z-10 space-y-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </span>
                Utility ecosystem
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[2.75rem]">
                Organizations we support
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                We support electricity, energy, gas, water, smart metering, and utility software organizations with engineering talent matched to their technology needs.
              </p>
            </motion.div>

            {/* Premium logo marquee */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {organizationsSupported.map((organization) => (
                  <div
                    key={organization}
                    className="flex min-h-16 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-200"
                  >
                    <Zap className="h-4 w-4 shrink-0 text-cyan-300" />
                    {organization}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Three enterprise content blocks */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              className="grid gap-5 md:grid-cols-3"
            >
              {trustBlocks.map((block) => (
                <motion.div
                  key={block.title}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-colors hover:border-cyan-400/40 hover:bg-white/[0.06]"
                >
                  <div className="pointer-events-none absolute -inset-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(280px_circle_at_var(--x,50%)_var(--y,50%),rgba(56,189,248,0.18),transparent_60%)]" />
                  <div className="relative">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 to-violet-500/15 text-cyan-300">
                      <block.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-white">
                      {block.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{block.copy}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="services" className="bg-[#050816] py-24">
          <div className="container-wrapper">
            <SectionIntro
              eyebrow="Utility engineering and outsourcing"
              title="Accelerate utility technology projects with trained engineers."
              description="VarchasLabs provides project-ready software professionals to electricity, energy, gas, water, smart metering, and utility software organizations. Our engineers can extend your existing team or work as dedicated project teams."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceBentoCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-[#071326] py-24">
          <div className="container-wrapper">
            <SectionIntro
              eyebrow="Flexible delivery models"
              title="Engineering support that fits the work ahead."
              description="Bring in a specialist, extend an existing team, or outsource a complete utility technology project."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              {engagementModels.map((model) => (
                <motion.div
                  key={model.title}
                  whileHover={{ y: -5 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <model.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{model.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{model.copy}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link href="/contact">
                <Button className="rounded-full bg-cyan-400 px-6 font-semibold text-slate-950 hover:bg-cyan-300">
                  Hire Our Engineers <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-[#071326] py-24">
          <div className="container-wrapper grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-8">
              <SectionIntro
                eyebrow="Why Varchas Labs"
                title="Built for teams that care about outcomes, not just output."
                description="Utility projects need reliable engineering, domain context, and clear collaboration. VarchasLabs teams can support your existing delivery organization at the level you need."
              />

              <div className="grid gap-4 sm:grid-cols-2">
                {whyChoose.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-display font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">Delivery guarantees</div>
                  <div className="mt-2 text-3xl font-display font-semibold text-white">Enterprise-grade execution without enterprise drag</div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {deliveryGuarantees.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-slate-950/35 p-5 text-sm text-slate-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-300" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#050816] py-24">
          <div className="container-wrapper grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <SectionIntro
                eyebrow="Utility software engineering"
                title="From utility requirements to dependable digital platforms."
                description="Bring software development, QA, integration, and operational capabilities together to advance utility technology projects."
              />

              <div className="grid gap-4 sm:grid-cols-2">
                {engineeringHighlights.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <h3 className="text-lg font-display font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#09111f] to-[#0f1d37] p-6 shadow-[0_30px_90px_-40px_rgba(76,201,240,0.5)]">
              <div className="grid gap-4">
                {architectureFlow.map((item, index) => (
                  <div key={item.title} className="relative rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400">Step 0{index + 1}</div>
                        <div className="text-lg font-display font-semibold text-white">{item.title}</div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/6 bg-[#081224] py-24">
          <div className="container-wrapper grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/8 via-blue-500/6 to-violet-500/8 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {automationCapabilities.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-[#07101d] p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-display font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <SectionIntro
                eyebrow="AI and automation"
                title="AI-enabled execution that creates leverage, not noise."
                description="Apply data and AI engineering to utility workflows, analytics, quality automation, and digital services where they fit your requirements."
              />

              <div className="grid gap-4">
                {automationPoints.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200">
                    <div className="flex items-start gap-3">
                      <Bot className="mt-1 h-5 w-5 text-cyan-300" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#050816] py-24">
          <div className="container-wrapper">
            <SectionIntro
              eyebrow="Process"
              title="Delivery built for clarity, speed, and quality."
              description="We align on requirements, build the right engineering capability, validate the work, and support delivery through deployment and scale."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-6">
              {processSteps.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">0{index + 1}</div>
                  <h3 className="mt-4 text-lg font-display font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-[#071326] py-24">
          <div className="container-wrapper">
            <SectionIntro
              eyebrow="Our engineering talent"
              title="Modern engineering skills for utility technology teams."
              description="Build the right mix of software, automation, cloud, data, AI, mobile, and product design skills for your project."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {technologyGroups.map((group) => (
                <div key={group.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                    <group.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-display font-semibold text-white">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 text-sm text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden border-y border-cyan-300/15 bg-[#081624] py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_10%,rgba(34,211,238,.12),transparent_65%),radial-gradient(ellipse_45%_55%_at_95%_90%,rgba(59,130,246,.12),transparent_65%)]" />
          <div className="container-wrapper relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                <Zap className="h-3.5 w-3.5" /> Utility domain expertise
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold text-white md:text-4xl">
                Built for utility technology.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                Our engineers support technology projects across the utility ecosystem, from smart metering and AMI platforms to cloud applications and system integration.
              </p>
              <Link href="/contact">
                <Button className="mt-8 rounded-full bg-cyan-400 px-6 font-semibold text-slate-950 hover:bg-cyan-300">
                  Discuss Your Utility Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {utilityExpertise.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-4 text-sm text-slate-100">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#050816] py-24">
          <div className="container-wrapper">
            <SectionIntro
              eyebrow="Industries we support"
              title="Utility engineering capability across digital industries."
              description="Our focus is utility technology. We also support engineering teams across other digital industries with software, QA, cloud, and data expertise."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {industries.map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/6 to-white/3 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-display font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="case-studies" className="border-y border-white/8 bg-[#071121] py-24">
          <div className="container-wrapper">
            <SectionIntro
              eyebrow="Case studies"
              title="Metrics-driven proof that connects engineering quality to business impact."
              description="Case study cards now focus on client context, what changed, and the measurable result rather than generic portfolio summaries."
            />

            <div className="mt-12 grid gap-5 xl:grid-cols-3">
              {caseStudies.map((item) => (
                <div key={item.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#091120]">
                  <div className="border-b border-white/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/6 to-violet-500/10 p-6">
                    <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">{item.category}</div>
                    <h3 className="mt-3 text-2xl font-display font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.summary}</p>
                  </div>
                  <div className="grid gap-4 p-6">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Before</div>
                      <div className="mt-2 text-sm leading-7 text-slate-200">{item.before}</div>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-slate-400">After</div>
                      <div className="mt-2 text-sm leading-7 text-slate-200">{item.after}</div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {item.metrics.map((metric) => (
                        <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                          <div className="text-2xl font-display font-bold text-white">{metric.value}</div>
                          <div className="mt-1 text-xs text-slate-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#050816] py-24">
          <div className="container-wrapper">
            <SectionIntro
              eyebrow="Testimonials"
              title="Feedback designed to sound like product leadership, not filler marketing."
              description="Engineering partnerships work best with direct communication, shared expectations, and clear ownership throughout delivery."
            />

            <div className="mt-12 grid gap-5 xl:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <Quote className="h-8 w-8 text-cyan-300" />
                  <p className="mt-6 text-base leading-8 text-slate-200">{item.quote}</p>
                  <div className="mt-8 border-t border-white/10 pt-5">
                    <div className="font-display text-lg font-semibold text-white">{item.name}</div>
                    <div className="text-sm text-slate-400">{item.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-[#071326] py-24">
          <div className="container-wrapper grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-8">
              <SectionIntro
                eyebrow="Security and performance"
                title="Quality, accessibility, and performance are part of the build, not the cleanup."
                description="Integrate engineers into your existing standards for security, quality assurance, performance, and operations."
              />

              <div className="grid gap-4 sm:grid-cols-2">
                {securityPillars.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-display font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/7 to-white/3 p-6">
              <div className="rounded-[1.75rem] border border-cyan-400/20 bg-[#08111f] p-6">
                <div className="text-sm uppercase tracking-[0.22em] text-cyan-300">Operational standards</div>
                <div className="mt-3 text-3xl font-display font-semibold text-white">
                  Secure delivery practices for products that need to scale cleanly.
                </div>
                <div className="mt-6 grid gap-3">
                  {standardsChecklist.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="mt-0.5 h-5 w-5 text-cyan-300" />
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#050816] py-24">
          <div className="container-wrapper grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionIntro
              eyebrow="FAQ"
              title="Questions utility teams ask when sourcing engineering support."
              description="Understand how skills, team structures, and outsourcing models can fit your utility technology projects."
            />

            <Accordion type="single" collapsible className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-4">
              {faqs.map((item) => (
                <AccordionItem key={item.question} value={item.question} className="border-white/10">
                  <AccordionTrigger className="text-left text-base text-white hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-slate-300">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="jobs" className="border-y border-white/8 bg-[#071121] py-24">
          <div className="container-wrapper">
            <SectionIntro
              eyebrow="Careers"
              title="Build your career in technology engineering."
              description="Explore current opportunities to develop software, cloud, data, QA, and AI skills with VarchasLabs."
            />

            <div className="mt-12 grid gap-5 xl:grid-cols-3">
              {jobs.map((job) => (
                <div key={job.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-display font-semibold text-white">{job.title}</h3>
                  <div className="mt-2 text-sm text-slate-400">{job.location}</div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{job.description}</p>
                  <div className="mt-6">
                    <Link href="/contact">
                      <Button variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#050816] py-24">
          <div className="container-wrapper">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-violet-500/10 px-8 py-12 md:px-12">
              <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl" />
              <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-slate-200">
                    <Rocket className="h-4 w-4 text-cyan-300" />
                    Strategy session available
                  </div>
                  <h2 className="text-4xl font-display font-bold text-white md:text-5xl">
                    Need skilled software engineers for your utility project?
                  </h2>
                  <p className="max-w-2xl text-lg leading-8 text-slate-200">
                    Scale your technology team with trained engineers across modern development, QA, cloud, DevOps, data, AI, and utility technology.
                  </p>
                  <div className="text-sm text-slate-300">Individual engineers | Dedicated teams | Project outsourcing</div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Link href="/contact">
                    <Button className="h-14 rounded-full bg-cyan-400 px-8 text-base font-semibold text-slate-950 hover:bg-cyan-300">
                      Tell Us Your Requirement
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="h-14 rounded-full border-white/15 bg-white/5 px-8 text-base text-white hover:bg-white/10 hover:text-white"
                    >
                      Hire Our Engineers
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl space-y-4"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.22em] text-cyan-300">
        {eyebrow}
      </div>
      <h2 className="text-4xl font-display font-bold text-white md:text-5xl">{title}</h2>
      <p className="text-lg leading-8 text-slate-300">{description}</p>
    </motion.div>
  );
}

function ServiceBentoCard({ service }: { service: ServiceCardData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={[
        "rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1.5",
        service.layout === "wide" ? "lg:col-span-2" : "",
        service.layout === "tall" ? "lg:row-span-2" : "",
      ].join(" ")}
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${service.iconWrap}`}>
        <service.icon className="h-5 w-5" />
      </div>
      <h3 className="mt-6 text-2xl font-display font-semibold text-white">{service.title}</h3>
      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">{service.copy}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function LogoTile({ company }: { company: Company }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex min-h-[96px] items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      {failed ? (
        <span className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
          {company.name}
        </span>
      ) : (
        <img
          src={company.logo}
          alt={company.name}
          className="max-h-10 w-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

type Company = {
  name: string;
  logo: string;
};

type ServiceCardData = {
  title: string;
  copy: string;
  tags: string[];
  icon: LucideIcon;
  iconWrap: string;
  layout?: "default" | "wide" | "tall";
};

type IconCopy = {
  title: string;
  copy: string;
  icon: LucideIcon;
};

type CaseStudy = {
  category: string;
  title: string;
  summary: string;
  before: string;
  after: string;
  metrics: { label: string; value: string }[];
};

const heroMetrics = [
  { value: "6", label: "Engineering skill groups" },
  { value: "5", label: "Flexible engagement models" },
  { value: "12", label: "Utility technology areas" },
  { value: "Utility", label: "Domain-focused engineering" },
];

const heroPills = [
  "Full-stack development",
  "QA and automation",
  "Cloud and DevOps",
  "Data and AI",
  "Utility platforms",
];

const releaseChecks = [
  { label: "Execution tracking", value: "96%" },
  { label: "QA automation coverage", value: "89%" },
  { label: "Release governance", value: "91%" },
];

const systemPillars = [
  { title: "Product clarity", copy: "Structured discovery, roadmap alignment, and scoped delivery windows." },
  { title: "Engineering quality", copy: "Reusable systems, maintainable architecture, and review discipline." },
  { title: "Operational trust", copy: "Transparent reporting, QA gates, and launch readiness visibility." },
];

const podLabels = ["Discovery", "Design", "Engineering", "QA", "DevOps", "Growth"];

const trustIndicators: IconCopy[] = [
  {
    title: "Utility-aware engineering",
    copy: "Engineers can support smart metering, utility platforms, integrations, and modern digital services.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible team integration",
    copy: "Add individual engineers or dedicated teams as an extension of your existing technology organization.",
    icon: Workflow,
  },
  {
    title: "Skills matched to your stack",
    copy: "Source software development, QA, cloud, DevOps, data, AI, mobile, and design expertise for your project.",
    icon: Layers,
  },
];

const trustBlocks = trustIndicators;

const organizationsSupported = [
  "Electricity utilities",
  "Power distribution companies",
  "Energy companies",
  "Smart metering companies",
  "AMI providers",
  "HES providers",
  "MDM providers",
  "Utility software companies",
  "Energy technology companies",
  "Gas utilities",
  "Water utilities",
  "Renewable energy companies",
  "Utility digital transformation teams",
];

const services: ServiceCardData[] = [
  {
    title: "Full-Stack Development",
    copy: "Build and extend utility applications, APIs, and platforms with engineers across the modern software stack.",
    tags: ["React", "Node.js", "Java", "Python"],
    icon: Code2,
    iconWrap: "bg-cyan-400/10 text-cyan-300",
    layout: "wide",
  },
  {
    title: "QA & Automation",
    copy: "Strengthen utility releases with automation engineers for API, end-to-end, regression, and performance testing.",
    tags: ["Playwright", "Selenium", "Cypress", "Performance"],
    icon: CheckCircle2,
    iconWrap: "bg-emerald-500/10 text-emerald-300",
    layout: "tall",
  },
  {
    title: "Cloud & DevOps",
    copy: "Automate utility platform infrastructure, delivery pipelines, and cloud operations with experienced engineers.",
    tags: ["AWS", "Azure", "Kubernetes", "Terraform"],
    icon: Cloud,
    iconWrap: "bg-sky-500/10 text-sky-300",
  },
  {
    title: "Data & AI",
    copy: "Turn operational and meter data into reliable pipelines, analytics, and practical AI capabilities.",
    tags: ["Data engineering", "Analytics", "Machine learning"],
    icon: Database,
    iconWrap: "bg-violet-500/10 text-violet-300",
  },
  {
    title: "Mobile Development",
    copy: "Deliver mobile applications and field experiences for utility customers and operations teams.",
    tags: ["Android", "iOS", "Flutter", "React Native"],
    icon: Smartphone,
    iconWrap: "bg-blue-500/10 text-blue-300",
  },
  {
    title: "UI/UX & Product Design",
    copy: "Create clear, accessible digital experiences for utility platforms, portals, and operational tools.",
    tags: ["UI design", "UX design", "Figma"],
    icon: Palette,
    iconWrap: "bg-amber-500/10 text-amber-300",
    layout: "wide",
  },
];

const engagementModels: IconCopy[] = [
  {
    title: "Staff Augmentation",
    copy: "Add skilled VarchasLabs engineers to your existing development or QA team.",
    icon: Users,
  },
  {
    title: "Dedicated Engineers",
    copy: "Engage engineers selected for your technical and utility-domain requirements.",
    icon: Code2,
  },
  {
    title: "Dedicated Teams",
    copy: "Build development, QA, DevOps, data, or cloud teams around your project.",
    icon: Building2,
  },
  {
    title: "Project Outsourcing",
    copy: "Outsource a defined software development or technology project to VarchasLabs.",
    icon: Workflow,
  },
  {
    title: "Build, Train & Deploy",
    copy: "Prepare engineers around your technology and domain needs, then deploy them to your project.",
    icon: GraduationCap,
  },
];

const whyChoose: IconCopy[] = [
  {
    title: "Engineering matched to your utility work",
    copy: "Align technical skills and utility-domain context with your systems, project needs, and delivery priorities.",
    icon: LineChart,
  },
  {
    title: "Clear delivery governance",
    copy: "Milestones, reporting, review rhythms, and release readiness checkpoints create predictability.",
    icon: Workflow,
  },
  {
    title: "Quality built in",
    copy: "Accessibility, testing, performance, and maintainability are treated as defaults rather than post-launch fixes.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible engagement models",
    copy: "Choose staff augmentation, dedicated engineers, full teams, or project outsourcing to fit your requirements.",
    icon: Users,
  },
];

const deliveryGuarantees = [
  "Design, engineering, QA, and release planning work as one system.",
  "Technical decisions are tied to business goals and product priorities.",
  "Dashboards, check-ins, and risk visibility are part of the operating model.",
  "Architecture quality supports long-term scaling and team handoff readiness.",
];

const engineeringHighlights = [
  {
    title: "Discovery and product shaping",
    copy: "Clarify user problems, priorities, risks, and delivery scope before engineering ramps.",
  },
  {
    title: "Design systems and interface architecture",
    copy: "Create reusable UI patterns that support consistency across marketing sites, portals, and product surfaces.",
  },
  {
    title: "Modern software delivery",
    copy: "Ship frontends, APIs, internal tools, and platform capabilities with maintainable foundations.",
  },
  {
    title: "Quality and launch readiness",
    copy: "Combine automation, review standards, and performance checks so releases feel controlled and safe.",
  },
];

const architectureFlow: IconCopy[] = [
  {
    title: "Product strategy",
    copy: "Research, prioritization, and roadmap framing for confident scope decisions.",
    icon: Workflow,
  },
  {
    title: "Experience design",
    copy: "User journeys, information architecture, and scalable interface systems.",
    icon: Sparkles,
  },
  {
    title: "Engineering system",
    copy: "Frontend, backend, integrations, and platform patterns designed to scale.",
    icon: Code2,
  },
  {
    title: "Quality and operations",
    copy: "QA automation, release governance, observability, and iteration loops.",
    icon: Gauge,
  },
];

const automationCapabilities: IconCopy[] = [
  {
    title: "Workflow automation",
    copy: "Reduce manual operational overhead with systems that move tasks and data automatically.",
    icon: Bot,
  },
  {
    title: "Support copilots",
    copy: "Create assisted support experiences for customers, teams, and internal operations.",
    icon: Users,
  },
  {
    title: "Intelligent QA",
    copy: "Use automation and signal-based testing to strengthen release confidence.",
    icon: CheckCircle2,
  },
  {
    title: "Data-driven reporting",
    copy: "Turn operational activity into clearer visibility and decision support.",
    icon: LineChart,
  },
];

const automationPoints = [
  "Apply machine learning and generative AI to practical utility workflows and digital services.",
  "Automate testing and operational processes to improve consistency across project delivery.",
  "Build analytics and decision-support capabilities around data generated by utility platforms.",
];

const processSteps = [
  { title: "Discovery", copy: "Align on business goals, user needs, risks, and delivery priorities." },
  { title: "Design", copy: "Define UX architecture, interface systems, and the product story." },
  { title: "Development", copy: "Build modular software with delivery milestones and technical clarity." },
  { title: "QA", copy: "Validate functionality, usability, performance, and release readiness." },
  { title: "Deployment", copy: "Launch with monitoring, rollback awareness, and operational confidence." },
  { title: "Scaling", copy: "Optimize the system, extend features, and improve product maturity over time." },
];

const technologyGroups = [
  { title: "Full-Stack Development", items: ["React", "Angular", "Vue.js", "Next.js", "JavaScript", "TypeScript", "Node.js", "Java", "Spring Boot", "Python", ".NET", "REST APIs", "Microservices"], icon: Code2 },
  { title: "QA & Automation", items: ["Playwright", "Selenium", "Cypress", "API Testing", "Postman", "Automation Frameworks", "Performance Testing", "JMeter", "k6"], icon: CheckCircle2 },
  { title: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "GitHub Actions", "Terraform"], icon: Cloud },
  { title: "Data & AI", items: ["Python", "SQL", "PostgreSQL", "MySQL", "MongoDB", "Power BI", "Data Analytics", "Machine Learning", "Generative AI", "AI Automation"], icon: Cpu },
  { title: "Mobile Development", items: ["Android", "iOS", "Flutter", "React Native"], icon: Smartphone },
  { title: "UI/UX", items: ["UI Design", "UX Design", "Product Design", "Figma"], icon: Palette },
];

const utilityExpertise = [
  "Smart Metering",
  "AMI / AMR",
  "Head-End Systems (HES)",
  "Meter Data Management (MDM)",
  "Utility Billing",
  "Energy Management",
  "IoT",
  "Utility Analytics",
  "API Integration",
  "System Integration",
  "Digital Utility Platforms",
  "Cloud-Based Utility Applications",
];

const industries: IconCopy[] = [
  {
    title: "Utilities & Energy",
    copy: "Software engineering support for electricity, energy, gas, water, smart metering, and utility technology platforms.",
    icon: Zap,
  },
  {
    title: "Healthcare",
    copy: "Secure, workflow-aware digital experiences where trust, usability, and operational clarity matter.",
    icon: HeartPulse,
  },
  {
    title: "Fintech",
    copy: "Reliable product experiences where precision, confidence, and system quality are critical.",
    icon: Landmark,
  },
  {
    title: "Ecommerce",
    copy: "Conversion-focused storefronts, platforms, and internal workflows built for growth.",
    icon: ShoppingCart,
  },
  {
    title: "Education",
    copy: "Scalable digital learning experiences with clear information architecture and user-first design.",
    icon: GraduationCap,
  },
  {
    title: "SaaS",
    copy: "Dashboards, subscription journeys, internal tools, and product-led experiences designed to scale.",
    icon: Layers,
  },
  {
    title: "Enterprise",
    copy: "Modernization, internal systems, automation, and delivery models that fit larger organizations.",
    icon: Building2,
  },
];

const caseStudies: CaseStudy[] = [
  {
    category: "Banking · Payments core",
    title: "Cut payment failures by 38% with an event-driven core",
    summary:
      "A top-5 Indian private bank needed to launch new products faster without destabilizing an aging payments switch. We rebuilt the core around Kafka and a domain-driven service mesh, then migrated traffic incrementally behind feature flags.",
    before:
      "A monolithic payment switch caused recurring failures during peak load, blocked product launches, and required weeks of release coordination across 6 teams.",
    after:
      "An event-driven payments core processes traffic with sub-second latency, deploys multiple times per day, and ships new schemes in weeks instead of quarters.",
    metrics: [
      { label: "Payment failures", value: "-38%" },
      { label: "Time-to-launch", value: "4x faster" },
      { label: "Infra cost", value: "-22%" },
    ],
  },
  {
    category: "Retail · Search & personalization",
    title: "300M+ shoppers, sub-200ms search at peak",
    summary:
      "A global omnichannel retailer's catalog had outgrown its legacy search. We designed a hybrid lexical + vector retrieval platform with personalized re-ranking, hardened it for Black-Friday traffic, and instrumented it end-to-end.",
    before:
      "Search latency spiked above 1.2s during peak hours, conversion dropped on long-tail queries, and the merchandising team had no levers to tune ranking.",
    after:
      "p95 search latency held under 200ms at peak, conversion lifted on long-tail queries, and merchandisers gained a self-serve ranking studio.",
    metrics: [
      { label: "Search p95", value: "180ms" },
      { label: "Conversion lift", value: "+14%" },
      { label: "Catalog scale", value: "20M SKUs" },
    ],
  },
  {
    category: "Healthcare · AI copilot",
    title: "HIPAA-grade RAG copilot grounded in 12M docs",
    summary:
      "A US digital health platform needed a clinician-facing copilot that could answer with citations across 12M internal documents. We built a role-aware RAG pipeline with an evaluation harness and a guardrail layer for PHI.",
    before:
      "Clinicians spent 20+ minutes per case searching across siloed knowledge bases, with no audit trail and inconsistent answer quality.",
    after:
      "A production copilot delivers citation-backed answers in seconds, with PHI redaction, role-aware retrieval, and a regression-tested evaluation suite.",
    metrics: [
      { label: "Answer accuracy", value: "92%" },
      { label: "Hallucination rate", value: "<3%" },
      { label: "Time-to-answer", value: "-87%" },
    ],
  },
];

const testimonials = [
  {
    quote:
      "VarchasLabs felt like an extension of our platform team from week one. They unblocked our payments modernization in a quarter — work that had been stuck for over a year.",
    name: "SVP, Engineering",
    role: "Top-5 Indian private bank",
  },
  {
    quote:
      "Their senior engineers don't just write code — they raise the bar on design, security, and observability across the team. Our internal review velocity has visibly improved.",
    name: "VP Product",
    role: "Global omnichannel retailer",
  },
  {
    quote:
      "Shipping a HIPAA-grade RAG copilot in 90 days sounded impossible. VarchasLabs delivered it with an evaluation harness we still use to ship safely every week.",
    name: "CTO",
    role: "US digital health platform",
  },
];

const securityPillars: IconCopy[] = [
  {
    title: "Secure development practices",
    copy: "Delivery conversations now include governance, release process, and standards instead of only feature capability.",
    icon: Lock,
  },
  {
    title: "Performance awareness",
    copy: "Architecture and frontend decisions are framed around responsiveness, reliability, and scale-readiness.",
    icon: Gauge,
  },
  {
    title: "Accessibility mindset",
    copy: "Interface quality is presented as inclusive, compliant, and measurable rather than cosmetic polish alone.",
    icon: ShieldCheck,
  },
  {
    title: "QA discipline",
    copy: "Automation and review processes reinforce trust with enterprise buyers who need confidence before launch.",
    icon: CheckCircle2,
  },
];

const standardsChecklist = [
  "Performance budgets and technical quality reviews during delivery",
  "Accessibility-aware implementation and quality checks",
  "QA automation, regression coverage, and launch readiness gates",
  "Scalable architecture decisions designed for maintainability and growth",
];

const faqs = [
  {
    question: "What types of products do you build?",
    answer: "We build marketing platforms, SaaS products, internal tools, enterprise systems, and customer-facing digital experiences with design, engineering, QA, and release support.",
  },
  {
    question: "Can you work with an existing codebase?",
    answer: "Yes. We can audit, modernize, improve, and scale existing products as well as lead new builds from discovery to launch.",
  },
  {
    question: "Do you provide dedicated teams or only project work?",
    answer: "Both. We can deliver fixed-scope initiatives, embedded product pods, or longer-term engineering support depending on roadmap needs.",
  },
  {
    question: "How do you handle QA and release quality?",
    answer: "QA is part of the delivery system through automation, regression planning, performance checks, structured reviews, and launch readiness validation.",
  },
];

const jobs = [
  {
    title: "Frontend Engineer",
    type: "Full Time",
    location: "Bangalore / Hybrid",
    description: "Build product-grade React interfaces, reusable systems, and high-quality experiences for modern digital products.",
  },
  {
    title: "QA Automation Engineer",
    type: "Permanent",
    location: "Hyderabad / Remote",
    description: "Own automation quality, regression confidence, and performance-aware testing across fast-moving product releases.",
  },
  {
    title: "Product Design Intern",
    type: "Internship",
    location: "Bangalore / Remote",
    description: "Support UX research, interface systems, and product storytelling across SaaS and enterprise product engagements.",
  },
];

const companies: Company[] = [
  { name: "Microsoft", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg" },
  { name: "Google", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Amazon", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/TCS_Logo.svg" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
  { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
  { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Cognizant_logo_2022.svg" },
  { name: "HCL Technologies", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/HCL_Tech_Bee_Logo.svg" },
  { name: "Tech Mahindra", logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Tech_Mahindra_New_Logo.svg" },
  { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Capgemini_201x_logo.svg" },
  { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" },
  { name: "VMware", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg" },
  { name: "ServiceNow", logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg" },
  { name: "Zoho", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/ZOHO_logo_2023.svg" },
  { name: "DXC Technology", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/DXC_Technology_logo.svg" },
  { name: "EPAM", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/EPAM_logo.svg" },
  { name: "LTIMindtree", logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/LTIMindtree_logo.svg" },
  { name: "Mphasis", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Mphasis_Logo.svg" },
  { name: "Kroger", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Kroger_logo.svg" },
  { name: "Tesco", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Tesco_Logo.svg" },
  { name: "Walmart", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg" },
  { name: "Target", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg" },
  { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flipkart_logo.svg" },
  { name: "eBay", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg" },
  { name: "JPMorgan Chase", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/J.P._Morgan_Logo_2008_1.svg" },
  { name: "Goldman Sachs", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg" },
  { name: "HSBC", logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/HSBC_logo_%282018%29.svg" },
  { name: "Citibank", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Citi.svg" },
  { name: "HDFC Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" },
  { name: "ICICI Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg" },
];
