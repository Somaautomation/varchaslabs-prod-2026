import PageShell, { Section, SectionHeading, GlassCard } from "@/components/PageShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LifeBuoy, Mail, MessageSquare, Phone } from "lucide-react";

const channels = [
  {
    icon: Mail,
    title: "Email Support",
    desc: "Average response in under 4 business hours.",
    value: "support@varchaslabs.com",
  },
  {
    icon: Phone,
    title: "Priority Hotline",
    desc: "For active engagements and production incidents.",
    value: "+91 6360 134 569",
  },
  {
    icon: MessageSquare,
    title: "Customer Slack",
    desc: "Shared channels for active customers — request access from your account lead.",
    value: "On request",
  },
  {
    icon: LifeBuoy,
    title: "On-call Engineering",
    desc: "24×7 on-call coverage available on enterprise plans.",
    value: "Enterprise tier",
  },
];

const faqs = [
  {
    q: "What's the fastest way to get a response?",
    a: "Email support@varchaslabs.com for general queries. For active customers with priority SLAs, use your dedicated Slack or hotline.",
  },
  {
    q: "Do you offer 24×7 production support?",
    a: "Yes — enterprise engagements include named on-call engineers, runbooks, and an incident commander rotation.",
  },
  {
    q: "How are SLAs structured?",
    a: "We tier SLAs by severity (Sev-1 to Sev-4) with clear response and resolution targets defined in your MSA.",
  },
  {
    q: "Can I escalate an issue?",
    a: "Absolutely. Every engagement has an escalation matrix that includes your account lead, delivery manager, and engineering leadership.",
  },
];

export default function Support() {
  return (
    <PageShell
      eyebrow="Support"
      title="We're here when it matters most"
      description="Talk to a human, fast. Whether you're scoping a new project or running a production system on us, we have a channel for you."
      ctas={[
        { label: "Email Support", href: "mailto:support@varchaslabs.com" },
        { label: "Open a Conversation", href: "/contact", variant: "ghost" },
      ]}
    >
      <Section>
        <SectionHeading
          eyebrow="Channels"
          title="Choose how you want to reach us"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ icon: Icon, title, desc, value }) => (
            <GlassCard key={title}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
              <p className="mt-4 text-sm font-semibold text-cyan-300 break-all">{value}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Common support questions" />
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-white/10"
              >
                <AccordionTrigger className="text-left text-white hover:text-cyan-300">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </PageShell>
  );
}
