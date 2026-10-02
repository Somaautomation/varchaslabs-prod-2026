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
  Zap,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const industries = [
  {
    icon: Zap,
    name: "Utilities & Energy",
    desc: "Potential engineering scope: energy data platforms, smart metering, energy management, renewable energy, and utility software.",
  },
  {
    icon: Zap,
    name: "Power",
    desc: "Potential engineering scope: power generation, distribution, grid monitoring, asset monitoring, and energy analytics.",
  },
  {
    icon: Factory,
    name: "Oil & Gas",
    desc: "Potential engineering scope: operations software, IoT, asset monitoring, data platforms, and automation.",
  },
  {
    icon: Building2,
    name: "Water & Wastewater",
    desc: "Potential engineering scope: water distribution, treatment utilities, monitoring, billing, and analytics platforms.",
  },
  {
    icon: Banknote,
    name: "Banking & Financial Services",
    desc: "Potential engineering scope: banking platforms, fintech, payments, digital banking, and financial analytics.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Life Sciences",
    desc: "Potential engineering scope: healthcare technology, health platforms, clinical data, and healthcare analytics.",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    desc: "Potential engineering scope: retail, e-commerce, digital commerce, customer platforms, and supply chain.",
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    desc: "Potential engineering scope: logistics, transportation, fleet management, and supply chain technology.",
  },
  {
    icon: GraduationCap,
    name: "EdTech & Learning",
    desc: "Potential engineering scope: EdTech, learning platforms, and education technology.",
  },
  {
    icon: Factory,
    name: "Manufacturing & Industrial",
    desc: "Potential engineering scope: industrial software, IoT, automation, and manufacturing systems.",
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    desc: "Potential engineering scope: booking platforms, customer applications, loyalty, and revenue systems.",
  },
  {
    icon: Building2,
    name: "Public Sector & GovTech",
    desc: "Potential engineering scope: digital government, citizen services, and public technology platforms.",
  },
  {
    icon: Building2,
    name: "Infrastructure",
    desc: "Digital platforms, system integrations, and data capabilities for connected infrastructure and essential services.",
  },
  {
    icon: Cloud,
    name: "Telecommunications",
    desc: "Potential engineering scope: telecom networks, communications platforms, and OSS/BSS systems.",
  },
  {
    icon: ShieldCheck,
    name: "Insurance",
    desc: "Potential engineering scope: digital insurance, claims platforms, and insurance analytics.",
  },
  {
    icon: Building2,
    name: "Technology & SaaS",
    desc: "Potential engineering scope: enterprise software, cloud applications, and digital platforms.",
  },
];

export default function Industries() {
  return (
    <PageShell
      eyebrow="Industries"
      title="Engineering for complex, connected industries"
      description="Our technology professionals can support projects across utilities, financial services, retail, healthcare, manufacturing, telecom, logistics, insurance, education, SaaS, infrastructure, and public-sector technology."
      ctas={[
        { label: "Discuss Your Industry", href: "/contact" },
        { label: "See Case Studies", href: "/case-studies", variant: "ghost" },
      ]}
    >
      <Section>
        <SectionHeading
          eyebrow="Where we deliver"
          title="Industries our technology talent can support"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ icon: Icon, name, desc }, i) => (
            <GlassCard key={name} index={i}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">{name}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
