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
  {
    title: "Software Development Intern",
    location: "Remote / Hybrid",
    type: "Internship · 1 Year",
    team: "Internship Program",
  },
  {
    title: "Frontend Developer Intern",
    location: "Remote / Hybrid",
    type: "Internship · 1 Year",
    team: "Internship Program",
  },
  {
    title: "Backend Developer Intern",
    location: "Remote / Hybrid",
    type: "Internship · 1 Year",
    team: "Internship Program",
  },
  {
    title: "QA Testing Intern",
    location: "Remote / Hybrid",
    type: "Internship · 1 Year",
    team: "Internship Program",
  },
  {
    title: "UI/UX Design Intern",
    location: "Remote / Hybrid",
    type: "Internship · 1 Year",
    team: "Internship Program",
  },
  {
    title: "HR & Recruitment Intern",
    location: "Remote / Hybrid",
    type: "Internship · 1 Year",
    team: "Internship Program",
  },
  {
    title: "Scrum Master Intern",
    location: "Remote / Hybrid",
    type: "Internship · 1 Year",
    team: "Internship Program",
  },
  {
    title: "Digital Marketing Intern",
    location: "Remote / Hybrid",
    type: "Internship · 1 Year",
    team: "Internship Program",
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

        <GlassCard className="!p-6 mb-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="font-display text-xl font-semibold text-white">
                🚀 1-Year Internship Program
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Kickstart your career with hands-on, live-project experience and mentorship from industry professionals.
              </p>
              <ul className="mt-3 grid gap-1.5 text-sm text-slate-400 sm:grid-cols-2">
                <li>✅ Real-time project experience</li>
                <li>✅ Mentorship from industry pros</li>
                <li>✅ Internship Certificate</li>
                <li>✅ Modern tech stack exposure</li>
                <li>✅ Path to full-time employment</li>
                <li>📍 Remote / Hybrid · 📅 1 Year</li>
              </ul>
              <p className="mt-3 text-xs text-slate-400">
                Apply by emailing your resume to{" "}
                <a
                  href="mailto:info@varchaslabs.com?subject=Application for Internship"
                  className="text-cyan-400 hover:underline"
                >
                  info@varchaslabs.com
                </a>
                {" "}with subject line: <em>Application for Internship – &lt;Role&gt;</em>
              </p>
            </div>
            <a href="mailto:info@varchaslabs.com?subject=Application for Internship">
              <Button className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:from-cyan-400 hover:to-violet-400">
                Apply via Email <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </GlassCard>

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
