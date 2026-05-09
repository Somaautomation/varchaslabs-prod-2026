import PageShell, { Section, SectionHeading, GlassCard } from "@/components/PageShell";
import {
  Compass,
  PenTool,
  Code2,
  Rocket,
  ShieldCheck,
  LineChart,
} from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "1. Discover",
    desc: "We align on outcomes, constraints, and success metrics with your stakeholders. No engagement starts without a measurable goal.",
    deliverables: ["Outcome map", "Risk register", "Success KPIs"],
  },
  {
    icon: PenTool,
    title: "2. Design",
    desc: "Senior architects shape the solution: domain model, system design, UX flows, and a delivery plan that fits your team.",
    deliverables: ["Architecture decision record", "UX prototypes", "Sprint zero plan"],
  },
  {
    icon: Code2,
    title: "3. Build",
    desc: "Cross-functional pods ship in two-week increments with trunk-based development and continuous review.",
    deliverables: ["Production-ready increments", "Test automation", "Live demos"],
  },
  {
    icon: ShieldCheck,
    title: "4. Harden",
    desc: "Security, performance, accessibility, and observability are non-negotiable gates before every release.",
    deliverables: ["Threat model", "Perf budget", "SOC 2 / ISO evidence"],
  },
  {
    icon: Rocket,
    title: "5. Launch",
    desc: "Progressive rollouts with feature flags, canary deploys, and on-call coverage to protect the customer experience.",
    deliverables: ["Go-live plan", "Runbooks", "On-call rota"],
  },
  {
    icon: LineChart,
    title: "6. Evolve",
    desc: "We instrument, measure, and iterate — closing the loop between business outcomes and engineering investment.",
    deliverables: ["KPI dashboards", "Quarterly reviews", "Roadmap refresh"],
  },
];

export default function Process() {
  return (
    <PageShell
      eyebrow="How We Work"
      title="A predictable delivery model — engineered for outcomes"
      description="Six stages, two-week cadences, weekly demos, and outcome-linked metrics. No surprises, no opaque consultancy theatre."
      ctas={[
        { label: "Run a Discovery Sprint", href: "/contact" },
        { label: "Meet the Team", href: "/about", variant: "ghost" },
      ]}
    >
      <Section>
        <SectionHeading
          eyebrow="Our delivery model"
          title="Six stages, one outcome contract"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc, deliverables }, i) => (
            <GlassCard key={title} index={i}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                    {d}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
