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
                  Product engineering for startups, scaleups, and enterprise teams
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <h1 className="max-w-4xl text-5xl font-display font-bold leading-[1.02] text-white md:text-6xl lg:text-7xl">
                  Design, build, and scale software products that move your business forward.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                  Varchas Labs helps startups, scaleups, and enterprise teams turn ambitious ideas into production-ready digital products through UX strategy, modern engineering, QA automation, and scalable delivery systems.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button className="h-14 rounded-full bg-cyan-400 px-8 text-base font-semibold text-slate-950 hover:bg-cyan-300">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="#case-studies">
                  <Button
                    variant="outline"
                    className="h-14 rounded-full border-white/15 bg-white/5 px-8 text-base text-white hover:bg-white/10 hover:text-white"
                  >
                    View Case Studies
                  </Button>
                </a>
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

        <section className="border-b border-white/6 bg-[#071121] py-20">
          <div className="container-wrapper space-y-10">
            <SectionIntro
              eyebrow="Trusted by"
              title="Built for companies that need software to perform."
              description="The brand is shifting from generic services to accountable product delivery. The homepage now leads with proof, systems, and enterprise readiness."
            />

            <div className="grid gap-4 md:grid-cols-3">
              {trustIndicators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-display font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.copy}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {companies.slice(0, 16).map((company) => (
                <LogoTile key={company.name} company={company} />
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#050816] py-24">
          <div className="container-wrapper">
            <SectionIntro
              eyebrow="Services"
              title="A bento-style capability system built for modern product teams."
              description="Each offer is framed as a business capability rather than a generic service line so buyers can understand scope, outcomes, and fit faster."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceBentoCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-[#071326] py-24">
          <div className="container-wrapper grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-8">
              <SectionIntro
                eyebrow="Why Varchas Labs"
                title="Built for teams that care about outcomes, not just output."
                description="The redesigned narrative focuses on product accountability, measurable quality, and delivery confidence instead of broad staffing claims."
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
                eyebrow="Product engineering showcase"
                title="From strategy to shipped software, engineered as one connected system."
                description="This section replaces generic feature selling with a structured delivery map that shows how design, engineering, QA, and scale fit together."
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
                description="The new site positions AI as an operational capability layer: workflow automation, intelligent QA, internal tooling, support copilots, and decision-support systems."
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
              description="The homepage now surfaces a process timeline that reduces buying risk and shows how Varchas Labs runs discovery, design, build, QA, launch, and scale."
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
              eyebrow="Technologies"
              title="A modern stack for products that need to perform under pressure."
              description="Technology proof is organized by capability area instead of one long list so technical buyers can understand how the stack supports delivery outcomes."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-4">
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

        <section className="bg-[#050816] py-24">
          <div className="container-wrapper">
            <SectionIntro
              eyebrow="Industries"
              title="Domain-aware delivery for complex business environments."
              description="Industry framing adds relevance, helps SEO, and shows buyers that the company understands operating context, not just implementation tasks."
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
              description="The testimonial area is structured to support founder, product, and enterprise buyer trust with concise, credible quotes."
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
                description="A stronger trust section makes the company feel more procurement-ready and reduces enterprise hesitation around governance, QA, and operational standards."
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
              title="Questions enterprise buyers and startup teams actually ask before they reach out."
              description="The FAQ section removes friction, clarifies scope, and reinforces confidence in delivery breadth without overwhelming the page with long-form copy."
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
              title="A focused careers snapshot for candidates without overpowering the buyer journey."
              description="The jobs anchor remains in place so the existing navigation continues to work, but careers now sits later in the page where it supports rather than leads the narrative."
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
                    Need a software partner that can move from strategy to shipped product?
                  </h2>
                  <p className="max-w-2xl text-lg leading-8 text-slate-200">
                    Let us talk about your roadmap, technical constraints, and what it will take to launch with more clarity, confidence, and delivery velocity.
                  </p>
                  <div className="text-sm text-slate-300">Typical response within one business day.</div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Link href="/contact">
                    <Button className="h-14 rounded-full bg-cyan-400 px-8 text-base font-semibold text-slate-950 hover:bg-cyan-300">
                      Book a Strategy Call
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="h-14 rounded-full border-white/15 bg-white/5 px-8 text-base text-white hover:bg-white/10 hover:text-white"
                    >
                      Explore Services
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
  { value: "50+", label: "Product and platform engagements" },
  { value: "200+", label: "Client and partner relationships" },
  { value: "15+", label: "Years of delivery experience" },
  { value: "24/7", label: "Delivery visibility and response cadence" },
];

const heroPills = [
  "Product strategy",
  "UX and design systems",
  "React and full-stack engineering",
  "QA automation",
  "Cloud readiness",
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
    title: "Enterprise-ready delivery",
    copy: "A clearer value proposition, stronger architecture language, and a proof-led homepage build more trust with serious buyers.",
    icon: ShieldCheck,
  },
  {
    title: "Product-led execution",
    copy: "Messaging now centers on business goals, system quality, and release outcomes instead of generic staffing language.",
    icon: Workflow,
  },
  {
    title: "Scalable design system thinking",
    copy: "The redesign introduces reusable section patterns that can scale across services, industries, case studies, and future content.",
    icon: Layers,
  },
];

const services: ServiceCardData[] = [
  {
    title: "Product Engineering",
    copy: "Move from roadmap to release with one delivery partner across discovery, system design, engineering, QA, and launch support.",
    tags: ["MVPs", "Platforms", "Modernization"],
    icon: Rocket,
    iconWrap: "bg-cyan-400/10 text-cyan-300",
    layout: "wide",
  },
  {
    title: "UX/UI Design",
    copy: "Design systems, user flows, and interfaces built for clarity, adoption, and conversion.",
    tags: ["Research", "Flows", "Design systems"],
    icon: Sparkles,
    iconWrap: "bg-violet-500/10 text-violet-300",
  },
  {
    title: "React Development",
    copy: "Modern frontend delivery with reusable components, performance discipline, and maintainable foundations.",
    tags: ["React", "Next.js", "TypeScript"],
    icon: Code2,
    iconWrap: "bg-blue-500/10 text-blue-300",
  },
  {
    title: "Software Testing",
    copy: "QA automation, regression coverage, performance checks, and release confidence built into the delivery lifecycle.",
    tags: ["Automation", "Performance", "Quality gates"],
    icon: CheckCircle2,
    iconWrap: "bg-emerald-500/10 text-emerald-300",
    layout: "tall",
  },
  {
    title: "Web Development",
    copy: "Fast, modern web experiences that balance product storytelling, scalability, and operational clarity.",
    tags: ["Marketing sites", "Platforms", "CMS"],
    icon: Database,
    iconWrap: "bg-sky-500/10 text-sky-300",
  },
  {
    title: "WordPress Development",
    copy: "Content-driven sites with stronger structure, better editorial control, and higher brand quality.",
    tags: ["CMS", "Content ops", "SEO"],
    icon: Building2,
    iconWrap: "bg-amber-500/10 text-amber-300",
  },
  {
    title: "AI and Automation",
    copy: "Workflow automation, support copilots, internal tools, and intelligent QA designed for operational leverage.",
    tags: ["Automation", "AI assistants", "Ops tooling"],
    icon: Bot,
    iconWrap: "bg-fuchsia-500/10 text-fuchsia-300",
    layout: "wide",
  },
];

const whyChoose: IconCopy[] = [
  {
    title: "Product-first execution",
    copy: "Teams are aligned around user experience, roadmap priorities, and measurable business impact instead of disconnected task delivery.",
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
    copy: "Scale from workshops to dedicated pods and long-term product delivery partnerships without changing standards.",
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
  "AI should appear where it accelerates delivery or operations, not as decorative positioning.",
  "Workflow automation and internal tools create leverage for teams that need speed without chaos.",
  "Support assistants, reporting automation, and QA intelligence are positioned as practical, high-trust capabilities.",
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
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Design systems"], icon: Code2 },
  { title: "Backend", items: ["Node.js", "APIs", "Integrations", "Platform services"], icon: Database },
  { title: "Cloud and DevOps", items: ["Cloudflare", "Vercel", "CI/CD", "Observability"], icon: Cloud },
  { title: "Automation and AI", items: ["QA automation", "Workflow automation", "Assistants", "Analytics"], icon: Cpu },
];

const industries: IconCopy[] = [
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
    category: "SaaS platform",
    title: "Scaled a product experience for faster release velocity",
    summary: "The new case-study style emphasizes business context, delivery intervention, and measurable outcomes instead of generic project summaries.",
    before: "Product updates were slowed by inconsistent UI patterns, brittle frontend flows, and limited QA coverage.",
    after: "Reusable design and engineering systems improved velocity, reduced regressions, and gave the team clearer release confidence.",
    metrics: [
      { label: "Release cycle improvement", value: "35%" },
      { label: "QA regression time saved", value: "42%" },
      { label: "UX consistency score", value: "2.4x" },
    ],
  },
  {
    category: "Enterprise workflow",
    title: "Modernized an internal operations platform",
    summary: "The redesign introduces more enterprise-style proof blocks that explain how system work improves efficiency and decision-making.",
    before: "Manual reporting, disconnected internal tools, and unclear process ownership created daily operational friction.",
    after: "A streamlined workflow platform improved visibility, reduced admin effort, and created room for future automation.",
    metrics: [
      { label: "Manual ops reduced", value: "48%" },
      { label: "Reporting speed", value: "3x" },
      { label: "Stakeholder visibility", value: "Always-on" },
    ],
  },
  {
    category: "Customer experience",
    title: "Improved performance and trust in a customer-facing product",
    summary: "The page now supports storytelling around performance, quality, and measurable UX improvements that buyers can evaluate quickly.",
    before: "Slow experiences, weak hierarchy, and inconsistent quality lowered confidence in the product journey.",
    after: "Sharper UX, performance-focused delivery, and QA discipline improved usability and stakeholder confidence.",
    metrics: [
      { label: "Page speed gain", value: "38%" },
      { label: "Conversion lift", value: "21%" },
      { label: "Support issues", value: "-29%" },
    ],
  },
];

const testimonials = [
  {
    quote: "Varchas Labs brought structure, speed, and delivery confidence to a product initiative that had previously stalled.",
    name: "Founder, SaaS company",
    role: "Product-led growth team",
  },
  {
    quote: "Their combination of UX clarity, engineering quality, and QA discipline made them feel like a true product partner.",
    name: "VP Product, enterprise client",
    role: "Platform transformation program",
  },
  {
    quote: "They did not just build screens. They helped us make stronger product decisions and ship with less uncertainty.",
    name: "CTO, digital platform",
    role: "Modernization initiative",
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
