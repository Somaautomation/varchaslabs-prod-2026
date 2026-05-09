import PageShell, { Section, SectionHeading, GlassCard } from "@/components/PageShell";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    tag: "AI Engineering",
    title: "Building production-grade RAG: lessons from 12M documents",
    excerpt:
      "What actually breaks when your retrieval-augmented generation system meets real enterprise data — and how to engineer around it.",
    date: "Apr 22, 2026",
    readTime: "8 min read",
  },
  {
    tag: "Platform",
    title: "From monolith to event-driven core in 9 months",
    excerpt:
      "A field guide to incrementally extracting payment flows from a legacy core without freezing the business.",
    date: "Apr 02, 2026",
    readTime: "11 min read",
  },
  {
    tag: "Cloud",
    title: "FinOps for engineering leaders: a 30-60-90 plan",
    excerpt:
      "How to ship a credible cloud cost program in your first quarter — without slowing delivery.",
    date: "Mar 18, 2026",
    readTime: "6 min read",
  },
  {
    tag: "Security",
    title: "Threat modelling without the slowdown",
    excerpt:
      "A lightweight, repeatable threat-modelling cadence we run on every product engagement.",
    date: "Mar 04, 2026",
    readTime: "7 min read",
  },
  {
    tag: "Hiring",
    title: "How we vet senior engineers in 5 hours",
    excerpt:
      "Inside the interview loop that powers our staffing engagements — fast, fair, and signal-rich.",
    date: "Feb 19, 2026",
    readTime: "5 min read",
  },
  {
    tag: "Product Engineering",
    title: "The team-of-teams model for outcome-driven delivery",
    excerpt:
      "Why we organize delivery around outcomes, not features, and how it changes the operating model.",
    date: "Feb 05, 2026",
    readTime: "9 min read",
  },
];

export default function Blog() {
  return (
    <PageShell
      eyebrow="Insights"
      title="Field notes from senior engineering teams"
      description="Practical writing on AI, platform, cloud, and the operating model behind durable software organizations."
    >
      <Section>
        <SectionHeading
          eyebrow="Latest"
          title="Recent posts"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <GlassCard key={p.title} index={i}>
              <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                {p.tag}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.excerpt}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {p.date} · {p.readTime}
                </span>
                <span className="flex items-center gap-1 text-cyan-300">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
