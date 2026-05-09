import PageShell, { Section, SectionHeading, GlassCard } from "@/components/PageShell";
import {
  Banknote,
  HeartPulse,
  ShoppingBag,
  Truck,
  GraduationCap,
  Factory,
  Plane,
  Building2,
} from "lucide-react";

const industries = [
  {
    icon: Banknote,
    name: "Banking & Financial Services",
    desc: "Core modernization, payments, fraud, and regulatory engineering for global banks and fintechs.",
    proof: "12+ Tier-1 banks served",
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Life Sciences",
    desc: "HIPAA-grade platforms, EHR integrations, clinical data, and patient experience.",
    proof: "HIPAA & HL7/FHIR ready",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    desc: "Headless commerce, omnichannel, search & recommendations, and unified loyalty.",
    proof: "300M+ customer interactions",
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    desc: "Visibility platforms, route optimization, and warehouse automation.",
    proof: "Global 3PL deployments",
  },
  {
    icon: GraduationCap,
    name: "EdTech & Learning",
    desc: "Learning platforms, assessments, and AI tutors at classroom and enterprise scale.",
    proof: "Millions of learners",
  },
  {
    icon: Factory,
    name: "Manufacturing & Industrial",
    desc: "IIoT, MES integrations, predictive maintenance, and digital twins.",
    proof: "Smart-factory rollouts",
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    desc: "Booking engines, loyalty, and revenue management with real-time personalization.",
    proof: "Sub-200ms search SLAs",
  },
  {
    icon: Building2,
    name: "Public Sector & GovTech",
    desc: "Citizen services, identity, and secure data exchange platforms.",
    proof: "Compliance-first delivery",
  },
];

export default function Industries() {
  return (
    <PageShell
      eyebrow="Industries"
      title="Domain depth across regulated, scaled industries"
      description="We pair senior engineers with industry specialists so your teams move faster without re-learning your domain."
      ctas={[
        { label: "Discuss Your Industry", href: "/contact" },
        { label: "See Case Studies", href: "/case-studies", variant: "ghost" },
      ]}
    >
      <Section>
        <SectionHeading
          eyebrow="Where we deliver"
          title="Eight industries, one delivery standard"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ icon: Icon, name, desc, proof }, i) => (
            <GlassCard key={name} index={i}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">{name}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                {proof}
              </p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
