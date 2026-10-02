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
      title="Modern engineering skills for utility technology teams"
      description="VarchasLabs engineers work across modern software technologies and utility platforms, matched to your existing systems, team, and roadmap."
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
          eyebrow="Utility-domain systems"
          title="Technology experience shaped around utility platforms"
          description="Engineering support for the systems, data, and integrations used across utility technology environments."
        />
        <div className="flex flex-wrap gap-3">
          {["Smart Metering", "AMI / AMR", "Head-End Systems (HES)", "Meter Data Management (MDM)", "Utility Billing", "Energy Management", "IoT", "Utility Analytics", "API Integration", "System Integration", "Digital Utility Platforms", "Cloud Utility Applications"].map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              {item}
            </span>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
