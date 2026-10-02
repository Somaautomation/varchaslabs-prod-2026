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
                  Technology engineering and talent outsourcing
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <h1 className="max-w-4xl text-5xl font-display font-bold leading-[1.02] text-white md:text-6xl lg:text-7xl">
                  Skilled Technology Engineers. Ready for Your Projects.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                  VarchasLabs provides trained, project-ready technology professionals to companies across industries through staff augmentation, dedicated engineers, technology teams, and software development outsourcing.
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
                    <div className="text-sm uppercase tracking-[0.22em] text-cyan-300">Technology talent</div>
                    <div className="mt-1 text-xl font-semibold text-white">Engineering support, shaped around your project</div>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-300">
                    Flexible engagement model
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-3xl border border-white/10 bg-[#081224] p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-400">Talent coverage</div>
                        <div className="mt-1 text-2xl font-display font-bold text-white">Project-ready</div>
                      </div>
                      <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                        <Gauge className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3">
                      {deliveryCapabilities.map((item) => (
                        <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm text-slate-200">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                          {item}
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
                Industries our technology talent can support
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[2.75rem]">
                Technology talent across industries
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                Build domain-aware teams for energy, financial services, retail, healthcare, manufacturing, telecom, logistics, insurance, education, SaaS, and public-sector technology.
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
                {organizationsSupported.map(({ title, copy, icon: Icon }) => (
                  <div
                    key={title}
                    className="min-h-28 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-left"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                      <Icon className="h-4 w-4 shrink-0 text-cyan-300" />
                      {title}
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-400">{copy}</p>
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
              eyebrow="Engineering outsourcing"
              title="Outsource technology requirements to VarchasLabs."
                description="VarchasLabs provides trained, project-ready software professionals across industries. Add engineers to your existing team, build a dedicated team, or outsource a defined software project."
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
              description="Bring in a specialist, extend an existing engineering team, or outsource a complete technology project."
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
            <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-2">
              <div>
                <h3 className="font-display text-xl font-semibold text-white">Scale your existing engineering team</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">Add trained professionals based on the roles, technologies, and capacity your project needs.</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {staffingExamples.map((example) => (
                    <div key={example} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200">{example}</div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">Build your dedicated technology team</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">Select a role mix around your project. Team composition can scale with your requirements.</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {dedicatedTeamRoles.map((role) => (
                    <span key={role} className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 text-xs text-slate-200">{role}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-xl font-semibold text-white">Outsource your software project</h3>
              <p className="mt-2 text-sm text-slate-300">Engage individual engineers or a complete team for delivery from requirements through support.</p>
              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
                {outsourcingLifecycle.map((stage, index) => (
                  <div key={stage} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-cyan-300">0{index + 1}</div>
                    <div className="mt-1 text-xs font-medium text-slate-100">{stage}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-[#071326] py-24">
          <div className="container-wrapper grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-8">
              <SectionIntro
                eyebrow="Why Varchas Labs"
                title="Built for teams that care about outcomes, not just output."
                description="Match technical skills, domain context, and team structure to your project needs across industries."
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
                eyebrow="Software engineering"
                title="Build and evolve dependable digital platforms."
                description="Bring software development, QA, integration, and operations together for projects across industries."
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
                description="Apply data and AI engineering to business workflows, analytics, quality automation, and digital services where they fit your requirements."
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
              eyebrow="Our technology talent"
              title="Engineering skills across the modern technology ecosystem."
              description="Build the right mix of software development, QA, cloud, DevOps, data, AI, mobile, design, and security skills for your project."
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
                <Layers className="h-3.5 w-3.5" /> Domain-aware engineering
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold text-white md:text-4xl">
                Technology teams aligned to your domain.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                Our technology professionals can adapt to industry workflows, platforms, and integrations. Energy and utilities is one of several domains our teams can support.
              </p>
              <Link href="/contact">
                <Button className="mt-8 rounded-full bg-cyan-400 px-6 font-semibold text-slate-950 hover:bg-cyan-300">
                  Discuss Your Requirements <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {domainCapabilities.map(({ title, copy, icon: Icon }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                    <Icon className="h-4 w-4 shrink-0 text-cyan-300" />
                    {title}
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#050816] py-24">
          <div className="container-wrapper">
            <SectionIntro
              eyebrow="Industries we support"
              title="Technology talent across industries."
              description="Our engineering teams can support domain-focused software and platform projects across energy, finance, retail, healthcare, manufacturing, and other sectors."
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
              eyebrow="Illustrative project scopes"
              title="Technology projects our teams can support."
              description="These are examples of project requirements, not client case studies, testimonials, or claims of completed work."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projectScopes.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-white/10 bg-[#091120] p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{item.industry}</div>
                  <h3 className="mt-3 text-xl font-display font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.capabilities.map((capability) => (
                      <span key={capability} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200">
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#050816] py-24">
          <div className="container-wrapper">
            <SectionIntro
              eyebrow="Partnership approach"
              title="Flexible capacity. Clear expectations. Shared delivery."
              description="Our engagement model is shaped around role requirements, technical fit, and the way your teams work."
            />

            <div className="mt-12 grid gap-5 xl:grid-cols-3">
              {partnershipPrinciples.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <item.icon className="h-8 w-8 text-cyan-300" />
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
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
              title="Questions teams ask when sourcing engineering support."
              description="Understand how skills, team structures, and outsourcing models can fit your project requirements."
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
                    Flexible engineering support
                  </div>
                  <h2 className="text-4xl font-display font-bold text-white md:text-5xl">
                    Looking for skilled technology engineers?
                  </h2>
                  <p className="max-w-2xl text-lg leading-8 text-slate-200">
                    From a single developer to a complete delivery team, access trained professionals across software development, QA, automation, cloud, DevOps, data, AI, mobile, UI/UX, and cybersecurity.
                  </p>
                  <div className="text-sm text-slate-300">Individual engineers | Dedicated teams | Project outsourcing</div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Link href="/contact">
                    <Button className="h-14 rounded-full bg-cyan-400 px-8 text-base font-semibold text-slate-950 hover:bg-cyan-300">
                      Request a Team
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
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="h-14 rounded-full border-white/15 bg-white/5 px-8 text-base text-white hover:bg-white/10 hover:text-white"
                    >
                      Contact VarchasLabs
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

type ProjectScope = {
  industry: string;
  title: string;
  summary: string;
  capabilities: string[];
};

const heroMetrics = [
  { value: "Software", label: "Development and engineering" },
  { value: "Quality", label: "QA and automation" },
  { value: "Platform", label: "Cloud, DevOps, and data" },
  { value: "Flexible", label: "Individual to full team" },
];

const heroPills = [
  "Full-stack development",
  "QA and automation",
  "Cloud and DevOps",
  "Data and AI",
  "Mobile and UI/UX",
  "Cybersecurity",
];

const deliveryCapabilities = [
  "Full-stack and software development",
  "QA, automation, and release support",
  "Cloud, DevOps, data, and AI",
];

const systemPillars = [
  { title: "Product clarity", copy: "Structured discovery, roadmap alignment, and scoped delivery windows." },
  { title: "Engineering quality", copy: "Reusable systems, maintainable architecture, and review discipline." },
  { title: "Operational trust", copy: "Transparent reporting, QA gates, and launch readiness visibility." },
];

const podLabels = ["Discovery", "Design", "Engineering", "QA", "DevOps", "Growth"];

const trustIndicators: IconCopy[] = [
  {
    title: "Industry-aware engineering",
    copy: "Match technology skills to the workflows, integrations, and domain context your project requires.",
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
  { title: "Energy & Utilities", copy: "Power, smart metering, energy management, and utility software.", icon: Zap },
  { title: "Banking & Financial Services", copy: "Payments, digital banking, and financial platforms.", icon: Landmark },
  { title: "Retail & E-Commerce", copy: "Digital commerce, customer platforms, and supply chain.", icon: ShoppingCart },
  { title: "Healthcare", copy: "Health platforms, digital health, and healthcare analytics.", icon: HeartPulse },
  { title: "Manufacturing", copy: "Industrial technology, IoT, automation, and supply chain.", icon: Cpu },
  { title: "Telecommunications", copy: "Network technology, communications, and OSS/BSS platforms.", icon: Cloud },
  { title: "Logistics & Transportation", copy: "Transportation, fleet management, and supply chain technology.", icon: Workflow },
  { title: "Insurance", copy: "Digital insurance, claims platforms, and insurance analytics.", icon: ShieldCheck },
  { title: "Education", copy: "EdTech, learning platforms, and education technology.", icon: GraduationCap },
  { title: "Technology & SaaS", copy: "Enterprise software, cloud applications, and digital platforms.", icon: Code2 },
  { title: "Government & Public Sector", copy: "Digital government, citizen services, and public platforms.", icon: Building2 },
  { title: "Infrastructure", copy: "Connected infrastructure, integrations, and essential digital services.", icon: Layers },
];

const services: ServiceCardData[] = [
  {
    title: "Full-Stack Development",
    copy: "Build and extend web applications, APIs, integrations, and digital platforms with engineers across the modern software stack.",
    tags: ["React", "Node.js", "Java", "Python"],
    icon: Code2,
    iconWrap: "bg-cyan-400/10 text-cyan-300",
    layout: "wide",
  },
  {
    title: "QA & Automation",
    copy: "Strengthen software quality with engineers for API, end-to-end, regression, and performance testing.",
    tags: ["Playwright", "Selenium", "Cypress", "Performance"],
    icon: CheckCircle2,
    iconWrap: "bg-emerald-500/10 text-emerald-300",
    layout: "tall",
  },
  {
    title: "Cloud & DevOps",
    copy: "Automate infrastructure, delivery pipelines, and cloud operations with experienced engineers.",
    tags: ["AWS", "Azure", "Kubernetes", "Terraform"],
    icon: Cloud,
    iconWrap: "bg-sky-500/10 text-sky-300",
  },
  {
    title: "Data & AI",
    copy: "Turn business and operational data into reliable pipelines, analytics, and practical AI capabilities.",
    tags: ["Data engineering", "Analytics", "Machine learning"],
    icon: Database,
    iconWrap: "bg-violet-500/10 text-violet-300",
  },
  {
    title: "Mobile Development",
    copy: "Deliver mobile applications for customer, employee, and field experiences.",
    tags: ["Android", "iOS", "Flutter", "React Native"],
    icon: Smartphone,
    iconWrap: "bg-blue-500/10 text-blue-300",
  },
  {
    title: "UI/UX & Product Design",
    copy: "Create clear, accessible digital experiences for products, portals, and operational tools.",
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
    copy: "Engage engineers selected for your technical stack, project goals, and domain requirements.",
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
    title: "Train, Assess & Deploy",
    copy: "Develop technical skills, assess practical readiness, provide project exposure, and deploy qualified professionals.",
    icon: GraduationCap,
  },
];

const staffingExamples = [
  "Need 1 React developer?",
  "Need 3 full-stack developers?",
  "Need a QA automation team?",
  "Need DevOps or cloud engineers?",
  "Need a data or AI team?",
  "Need a complete product team?",
];

const dedicatedTeamRoles = [
  "Project Managers", "Tech Leads", "Frontend Developers", "Backend Developers",
  "Full-Stack Developers", "QA Engineers", "Automation Engineers", "DevOps Engineers",
  "Cloud Engineers", "Data Engineers", "AI Engineers", "UI/UX Designers",
];

const outsourcingLifecycle = ["Requirement", "Design", "Development", "QA", "Automation", "DevOps", "Deployment", "Support"];

const whyChoose: IconCopy[] = [
  {
    title: "Engineering matched to your project",
    copy: "Align technical skills and relevant domain context with your systems, requirements, and delivery priorities.",
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
  "Apply machine learning and generative AI to practical business workflows and digital services.",
  "Automate testing and operational processes to improve consistency across project delivery.",
  "Build analytics and decision-support capabilities around data generated by industry platforms.",
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
  { title: "Full-Stack Development", items: ["React", "Angular", "Vue.js", "Next.js", "JavaScript", "TypeScript", "Node.js", "Java", "Spring Boot", "Python", ".NET", "C#", "REST APIs", "Microservices", "PostgreSQL", "MySQL", "MongoDB", "Redis"], icon: Code2 },
  { title: "QA & Quality Engineering", items: ["Manual Testing", "Automation Testing", "Playwright", "Selenium", "Cypress", "Appium", "API Testing", "Postman", "Performance Testing", "JMeter", "k6", "Test Automation Frameworks", "CI/CD Testing"], icon: CheckCircle2 },
  { title: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "GitHub Actions", "Terraform", "Ansible", "Linux", "Monitoring", "Observability"], icon: Cloud },
  { title: "Data & Analytics", items: ["Python", "SQL", "PostgreSQL", "MySQL", "Data Analytics", "Data Engineering", "ETL", "Power BI", "Pandas", "NumPy", "Business Intelligence", "Data Visualization"], icon: Database },
  { title: "AI & Machine Learning", items: ["Machine Learning", "Deep Learning", "Generative AI", "LLM Applications", "NLP", "Computer Vision", "AI Automation", "Predictive Analytics"], icon: Cpu },
  { title: "Mobile Development", items: ["Android", "iOS", "Flutter", "React Native", "Kotlin", "Swift"], icon: Smartphone },
  { title: "UI/UX & Product Design", items: ["UI Design", "UX Design", "Product Design", "Figma", "Wireframing", "Prototyping", "Design Systems"], icon: Palette },
  { title: "Cybersecurity", items: ["Application Security", "API Security", "Security Testing", "Identity & Access Management", "Vulnerability Assessment"], icon: Lock },
];

const domainCapabilities: IconCopy[] = [
  {
    title: "Energy & Utilities",
    copy: "Smart metering, AMI / AMR, utility billing, energy management, and digital utility platforms.",
    icon: Zap,
  },
  {
    title: "Banking & FinTech",
    copy: "Payments, digital banking, financial platforms, integrations, and analytics.",
    icon: Landmark,
  },
  {
    title: "Retail & Commerce",
    copy: "E-commerce, customer platforms, inventory, supply chain, and omnichannel systems.",
    icon: ShoppingCart,
  },
  {
    title: "Healthcare & Industry",
    copy: "Digital health, connected products, manufacturing systems, IoT, and automation.",
    icon: Building2,
  },
];

const industries: IconCopy[] = [
  {
    title: "Energy & Utilities",
    copy: "Power, electricity, smart metering, energy management, renewable energy, and utility software.",
    icon: Zap,
  },
  {
    title: "Banking & Financial Services",
    copy: "Banking, fintech, payments, digital banking, and financial platforms.",
    icon: Landmark,
  },
  {
    title: "Retail & E-Commerce",
    copy: "Digital commerce, customer platforms, retail operations, and supply chain technology.",
    icon: ShoppingCart,
  },
  {
    title: "Healthcare",
    copy: "Healthcare technology, health platforms, digital health, and healthcare analytics.",
    icon: HeartPulse,
  },
  {
    title: "Manufacturing & Industrial",
    copy: "Manufacturing systems, industrial technology, IoT, automation, and supply chain.",
    icon: Cpu,
  },
  {
    title: "Telecommunications",
    copy: "Telecom, network technology, communication platforms, and OSS/BSS.",
    icon: Cloud,
  },
  {
    title: "Logistics & Transportation",
    copy: "Logistics, fleet management, transportation, and supply chain technology.",
    icon: Workflow,
  },
  {
    title: "Insurance",
    copy: "Insurance technology, digital insurance, claims platforms, and analytics.",
    icon: ShieldCheck,
  },
  {
    title: "Education & EdTech",
    copy: "Education technology, EdTech, and learning platforms.",
    icon: GraduationCap,
  },
  {
    title: "Technology & SaaS",
    copy: "SaaS, enterprise software, cloud applications, and digital platforms.",
    icon: Layers,
  },
  {
    title: "Government & Public Sector",
    copy: "Digital government, citizen services, and public technology platforms.",
    icon: Building2,
  },
  {
    title: "Infrastructure",
    copy: "Connected infrastructure, system integration, and essential digital services.",
    icon: Building2,
  },
];

const projectScopes: ProjectScope[] = [
  {
    industry: "Banking & FinTech",
    title: "Payment and financial platform engineering",
    summary: "A potential project could combine application development, APIs, data workflows, QA, and cloud engineering for payment or digital banking platforms.",
    capabilities: ["Backend and APIs", "Data engineering", "QA automation", "Cloud"],
  },
  {
    industry: "Retail & E-Commerce",
    title: "Commerce and customer platform development",
    summary: "A potential engagement could staff frontend, backend, mobile, QA, and data roles for commerce, customer, inventory, or supply-chain platforms.",
    capabilities: ["Web and mobile", "API integration", "QA", "Analytics"],
  },
  {
    industry: "Energy & Utilities",
    title: "Smart metering and utility platform support",
    summary: "A potential project could add engineers for smart metering, AMI / AMR integrations, utility applications, data workflows, and platform quality.",
    capabilities: ["AMI / AMR", "System integration", "Data", "QA automation"],
  },
];

const partnershipPrinciples: IconCopy[] = [
  {
    title: "Skills matched to requirements",
    copy: "Define roles, technologies, experience, and relevant domain context for the engagement.",
    icon: Code2,
  },
  {
    title: "Flexible team composition",
    copy: "Engage an individual engineer, a specialist group, or a cross-functional delivery team.",
    icon: Users,
  },
  {
    title: "Transparent collaboration",
    copy: "Align on responsibilities, communication, and delivery expectations with your organization.",
    icon: Workflow,
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
