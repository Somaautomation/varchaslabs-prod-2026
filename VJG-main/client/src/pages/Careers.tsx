import PageShell, { Section, SectionHeading, GlassCard } from "@/components/PageShell";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react";

const openings = [
  {
    title: "Senior Full-Stack Engineer (React + Node)",
    location: "Bangalore / Remote",
    type: "Full-time",
    team: "Product Engineering",
  },
  {
    title: "Cloud / DevOps Engineer (AWS, Kubernetes)",
    location: "Bangalore / Hybrid",
    type: "Full-time",
    team: "Cloud & Platform",
  },
  {
    title: "Data Engineer (Snowflake, dbt, Airflow)",
    location: "Remote, India",
    type: "Full-time",
    team: "Data & AI",
  },
  {
    title: "AI / ML Engineer (LLM, RAG)",
    location: "Bangalore / Remote",
    type: "Full-time",
    team: "Data & AI",
  },
  {
    title: "QA Automation Engineer (Playwright, CI/CD)",
    location: "Bangalore",
    type: "Full-time",
    team: "Quality Engineering",
  },
  {
    title: "Engineering Manager",
    location: "Bangalore",
    type: "Full-time",
    team: "Leadership",
  },
];

const values = [
  {
    title: "Engineers first",
    desc: "Real engineering ownership, not body-shopping. You build, you own, you grow.",
  },
  {
    title: "Outcomes over output",
    desc: "We celebrate impact and learning, not lines of code or hours logged.",
  },
  {
    title: "Stay sharp",
    desc: "Dedicated learning budget, paid certifications, internal guilds and demo days.",
  },
  {
    title: "Built to last",
    desc: "Long-term thinking — sustainable pace, fair compensation, transparent growth paths.",
  },
];

export default function Careers() {
  return (
    <PageShell
      eyebrow="Careers"
      title="Build the platforms behind tomorrow's products"
      description="Join a senior engineering culture that values craft, ownership, and measurable outcomes — across product, cloud, data, and AI."
      ctas={[
        { label: "See Open Roles", href: "#openings" },
        { label: "Email Recruiting", href: "/contact", variant: "ghost" },
      ]}
    >
      <Section>
        <SectionHeading
          eyebrow="Why VarchasLabs"
          title="A workplace built by engineers, for engineers"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <GlassCard key={v.title} index={i}>
              <h3 className="font-display text-lg font-semibold text-white">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{v.desc}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section className="scroll-mt-24" >
        <div id="openings" />
        <SectionHeading
          eyebrow="Open Roles"
          title="Currently hiring"
          description="Don't see your role? We're always interested in talking to senior engineers."
        />
        <div className="grid gap-4">
          {openings.map((o, i) => (
            <GlassCard key={o.title} index={i} className="!p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{o.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" /> {o.team}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" /> {o.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {o.type}
                    </span>
                  </div>
                </div>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:from-cyan-400 hover:to-violet-400">
                    Apply <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
