import PageShell, { Section, SectionHeading, GlassCard } from "@/components/PageShell";
import { ArrowUpRight } from "lucide-react";

const studies = [
  {
    industry: "Banking",
    client: "A top-5 Indian private bank",
    title: "Cut payment failures by 38% with an event-driven core",
    summary:
      "Replaced a brittle monolithic payments switch with a Kafka-backed event-driven core, cutting failure rates and accelerating new product launches.",
    metrics: [
      { label: "Payment failures", value: "-38%" },
      { label: "Time-to-launch", value: "4x faster" },
      { label: "Infra cost", value: "-22%" },
    ],
  },
  {
    industry: "Retail",
    client: "Global omnichannel retailer",
    title: "300M+ shoppers, sub-second search and personalization",
    summary:
      "Re-architected commerce search with vector + lexical hybrid retrieval, lifting conversion and cutting search latency under heavy load.",
    metrics: [
      { label: "Search latency p95", value: "180ms" },
      { label: "Conversion lift", value: "+14%" },
      { label: "Catalog scale", value: "20M SKUs" },
    ],
  },
  {
    industry: "Healthcare",
    client: "US-based digital health platform",
    title: "HIPAA-grade patient platform shipped in 90 days",
    summary:
      "Stood up a full HIPAA-compliant patient engagement platform with EHR integration, telehealth, and consent management.",
    metrics: [
      { label: "Time to MVP", value: "90 days" },
      { label: "EHR integrations", value: "6" },
      { label: "Uptime", value: "99.98%" },
    ],
  },
  {
    industry: "AI / SaaS",
    client: "Enterprise knowledge platform",
    title: "Production RAG copilot grounded in 12M docs",
    summary:
      "Built a secure RAG-based copilot with role-aware retrieval, citation-first answers, and an evaluation harness for regression-free shipping.",
    metrics: [
      { label: "Answer accuracy", value: "92%" },
      { label: "Hallucination rate", value: "<3%" },
      { label: "Doc corpus", value: "12M" },
    ],
  },
  {
    industry: "Logistics",
    client: "Global 3PL operator",
    title: "Real-time visibility for 50K+ daily shipments",
    summary:
      "Designed an event-streaming visibility platform unifying carriers, warehouses, and customer portals into a single source of truth.",
    metrics: [
      { label: "Exception alerts", value: "<30s" },
      { label: "Manual ops", value: "-45%" },
      { label: "NPS", value: "+22" },
    ],
  },
  {
    industry: "EdTech",
    client: "K-12 learning platform",
    title: "Personalized learning for millions of students",
    summary:
      "Migrated a legacy LMS to a modular, AI-augmented platform with adaptive assessments and teacher dashboards.",
    metrics: [
      { label: "Engagement", value: "+31%" },
      { label: "Page TTI", value: "-58%" },
      { label: "Active learners", value: "3.2M" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <PageShell
      eyebrow="Case Studies"
      title="Outcomes our customers can measure"
      description="Selected engagements across banking, retail, healthcare, AI, and logistics — each with measurable business impact."
      ctas={[
        { label: "Discuss Your Initiative", href: "/contact" },
        { label: "See How We Work", href: "/process", variant: "ghost" },
      ]}
    >
      <Section>
        <SectionHeading
          eyebrow="Selected work"
          title="Six stories. Six measurable wins."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {studies.map((s, i) => (
            <GlassCard key={s.title} index={i}>
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                  {s.industry}
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </div>
              <p className="text-xs text-slate-400">{s.client}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{s.summary}</p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {s.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center"
                  >
                    <div className="font-display text-lg font-bold text-cyan-300">
                      {m.value}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
