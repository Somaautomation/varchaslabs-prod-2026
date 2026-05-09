import PageShell, { Section, SectionHeading, GlassCard } from "@/components/PageShell";
import {
  Bot,
  Cloud,
  Code2,
  Cpu,
  Database,
  ShieldCheck,
  Workflow,
  LineChart,
} from "lucide-react";

const solutions = [
  {
    icon: Code2,
    title: "Product Engineering",
    desc: "From discovery to launch, we ship secure, scalable products with cross-functional pods.",
    bullets: ["Web & mobile apps", "API & micro-services", "Design systems"],
  },
  {
    icon: Bot,
    title: "AI & Automation",
    desc: "LLM-powered copilots, RAG pipelines, and agentic workflows tailored to your data.",
    bullets: ["GenAI assistants", "RAG & vector search", "Workflow automation"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "AWS, Azure, GCP foundations with IaC, observability, and FinOps baked in.",
    bullets: ["Landing zones", "Kubernetes", "CI/CD platforms"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    desc: "Modern data stacks that turn raw events into trustworthy decisions.",
    bullets: ["Lakehouse & ELT", "BI & dashboards", "ML platforms"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Zero-trust, identity, and compliance engineered into every layer.",
    bullets: ["IAM & SSO", "AppSec & SAST", "SOC 2 / ISO readiness"],
  },
  {
    icon: Workflow,
    title: "Enterprise Modernization",
    desc: "Replatform legacy systems with measured, low-risk migration paths.",
    bullets: ["Mainframe to cloud", "Monolith to services", "API-first re-architecture"],
  },
  {
    icon: Cpu,
    title: "Talent & Staffing",
    desc: "Pre-vetted engineering talent embedded in your teams in days, not months.",
    bullets: ["Contract & C2H", "Dedicated pods", "Executive search"],
  },
  {
    icon: LineChart,
    title: "Digital Transformation",
    desc: "End-to-end programs that align strategy, technology, and operating model.",
    bullets: ["Operating models", "Change management", "KPI frameworks"],
  },
];

export default function Solutions() {
  return (
    <PageShell
      eyebrow="Solutions"
      title="End-to-end solutions for modern enterprises"
      description="From product engineering to AI, cloud, data, and security — we deliver outcomes that move the business, not just the backlog."
      ctas={[
        { label: "Talk to an Expert", href: "/contact" },
        { label: "View Case Studies", href: "/case-studies", variant: "ghost" },
      ]}
    >
      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Eight practices, one delivery model"
          description="Composable engagements you can mix and match — staffed with senior engineers, governed by measurable outcomes."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map(({ icon: Icon, title, desc, bullets }, i) => (
            <GlassCard key={title} index={i}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {b}
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
