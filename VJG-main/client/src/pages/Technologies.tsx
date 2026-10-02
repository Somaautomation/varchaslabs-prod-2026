import PageShell, { Section, SectionHeading, GlassCard } from "@/components/PageShell";

const groups = [
  {
    name: "Frontend & Mobile",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "Flutter",
      "Tailwind CSS",
      "Vue",
      "Angular",
    ],
  },
  {
    name: "Backend & APIs",
    items: [
      "Node.js",
      "Python (FastAPI / Django)",
      "Java (Spring Boot)",
      ".NET",
      "Go",
      "GraphQL",
      "gRPC",
      "Kafka",
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Kubernetes",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "ArgoCD",
    ],
  },
  {
    name: "Data & AI",
    items: [
      "Snowflake",
      "Databricks",
      "PostgreSQL",
      "MongoDB",
      "Airflow",
      "dbt",
      "OpenAI / Anthropic",
      "LangChain",
      "Pinecone",
    ],
  },
  {
    name: "Security & Identity",
    items: [
      "Okta",
      "Auth0",
      "Azure AD",
      "HashiCorp Vault",
      "OWASP ZAP",
      "Snyk",
      "Cloudflare",
    ],
  },
  {
    name: "Observability & Quality",
    items: [
      "Datadog",
      "New Relic",
      "Grafana",
      "Prometheus",
      "Sentry",
      "Playwright",
      "Cypress",
    ],
  },
];

export default function Technologies() {
  return (
    <PageShell
      eyebrow="Technologies"
      title="Modern engineering skills for technology teams"
      description="VarchasLabs engineers work across modern software technologies and industry platforms, matched to your existing systems, team, and roadmap."
      ctas={[
        { label: "See How We Build", href: "/process" },
        { label: "Engage Our Team", href: "/contact", variant: "ghost" },
      ]}
    >
      <Section>
        <SectionHeading
          eyebrow="Engineering talent"
          title="Skills across the modern technology stack"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <GlassCard key={g.name} index={i}>
              <h3 className="font-display text-lg font-semibold text-white">{g.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeading
            eyebrow="Industry-specific context"
            title="Energy, power, oil & gas, and water utility systems"
            description="Utilities and energy are one area our multi-industry teams can support with engineering resources for metering, data, devices, operations, and digital platforms."
        />
        <div className="flex flex-wrap gap-3">
            {["Smart Metering", "Advanced Metering Infrastructure (AMI)", "Meter Data Management (MDM)", "Head-End Systems (HES)", "Utility Billing Systems", "Energy Data Platforms", "IoT", "Device Communication", "Gateway Management", "Remote Monitoring", "Asset Monitoring", "Grid Monitoring", "Energy Analytics", "Demand & Consumption Analytics", "Alerts & Notifications", "Utility Dashboards", "Digital Transformation", "Integration Platforms", "API Integration"].map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              {item}
            </span>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
