import { motion } from "framer-motion";
import { Link } from "wouter";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
};

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctas?: CTA[];
  children: ReactNode;
};

export default function PageShell({
  eyebrow,
  title,
  description,
  ctas,
  children,
}: PageShellProps) {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <Navbar />

      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative isolate border-b border-white/10 pt-32 pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(99,102,241,0.22),_transparent_24%),linear-gradient(180deg,#06101f_0%,#050816_52%,#071326_100%)]" />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

          <div className="container-wrapper relative z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {eyebrow && (
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {eyebrow}
                </span>
              )}
              <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                {title}
              </h1>
              {description && (
                <p className="mt-6 max-w-2xl text-lg text-slate-300">
                  {description}
                </p>
              )}
              {ctas && ctas.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-4">
                  {ctas.map((cta) => (
                    <Link key={cta.label} href={cta.href}>
                      {cta.variant === "ghost" ? (
                        <Button
                          variant="outline"
                          className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                        >
                          {cta.label}
                        </Button>
                      ) : (
                        <Button className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg hover:from-cyan-400 hover:to-violet-400">
                          {cta.label}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {children}

        {/* Universal closing CTA */}
        <section className="relative isolate border-t border-white/10 py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(99,102,241,0.18),_transparent_55%)]" />
          <div className="container-wrapper relative z-10 text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Let's build what's next, together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Talk to our engineering leadership about your roadmap, hiring needs, or platform goals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg hover:from-cyan-400 hover:to-violet-400">
                  Talk to an Expert
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  Explore Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative border-b border-white/5 py-20 ${className}`}>
      <div className="container-wrapper relative z-10">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <span className="inline-block rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-300">{description}</p>
      )}
    </div>
  );
}

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-cyan-400/40 hover:bg-white/[0.07] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-violet-500/0 opacity-0 transition group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  );
}
