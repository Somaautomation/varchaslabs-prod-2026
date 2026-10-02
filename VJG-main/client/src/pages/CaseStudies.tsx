import PageShell, { Section, SectionHeading, GlassCard } from "@/components/PageShell";

const studies = [
  {
    industry: "Banking & FinTech",
    title: "Payment platform and API modernization",
    summary: "An illustrative scope could combine backend, integration, data, and QA engineers to support payment or digital banking platform requirements.",
    capabilities: ["Backend and APIs", "System integration", "Data engineering", "QA"],
  },
  {
    industry: "Retail & E-Commerce",
    title: "Commerce and customer platform development",
    summary: "A potential team could support web and mobile commerce, inventory services, customer experience, integrations, and analytics.",
    capabilities: ["Web and mobile", "APIs", "QA automation", "Analytics"],
  },
  {
    industry: "Healthcare",
    title: "Health platform and integration engineering",
    summary: "An illustrative engagement could staff application, integration, cloud, and quality roles for health platforms and digital services.",
    capabilities: ["Application development", "Integrations", "Cloud", "Quality engineering"],
  },
  {
    industry: "Energy & Utilities",
    title: "Smart metering and digital utility systems",
    summary: "An illustrative project scope could include smart metering, AMI / AMR, utility applications, data management, and integration work.",
    capabilities: ["AMI / AMR", "Utility applications", "Data", "Integration"],
  },
  {
    industry: "Manufacturing & Logistics",
    title: "Connected operations and supply chain systems",
    summary: "A potential team could provide software, cloud, data, and automation skills for connected operations and supply chain workflows.",
    capabilities: ["IoT integration", "Cloud and DevOps", "Data", "Automation"],
  },
  {
    industry: "Technology & SaaS",
    title: "Cloud software and AI-enabled applications",
    summary: "An example engagement could combine application, AI, QA, and cloud engineering for enterprise or SaaS platform requirements.",
    capabilities: ["Full-stack development", "AI applications", "QA", "Cloud"],
  },
];

export default function CaseStudies() {
  return (
    <PageShell
      eyebrow="Illustrative project scopes"
      title="Engineering talent across industries"
      description="Examples of project requirements our technology professionals may support. These are not client case studies or claims of completed work or results."
      ctas={[
        { label: "Discuss Your Initiative", href: "/contact" },
        { label: "See How We Work", href: "/process", variant: "ghost" },
      ]}
    >
      <Section>
        <SectionHeading
          eyebrow="Potential engagements"
          title="Example technology project scopes"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {studies.map((s, i) => (
            <GlassCard key={s.title} index={i}>
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                  {s.industry}
                </span>
              </div>
              <h3 className="mt-1 font-display text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{s.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.capabilities.map((capability) => (
                  <span key={capability} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200">
                    {capability}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
