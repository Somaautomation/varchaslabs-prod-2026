import { Link } from "wouter";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const columns: { title: string; links: { name: string; href: string }[] }[] = [
  {
    title: "Solutions",
    links: [
      { name: "All Solutions", href: "/solutions" },
      { name: "Services", href: "/services" },
      { name: "Technologies", href: "/technologies" },
      { name: "Process", href: "/process" },
      { name: "Industries", href: "/industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Support", href: "/support" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white pt-16 pb-8 border-t border-white/10 overflow-hidden">
      {/* Animated ambient glow */}
      <motion.div
        className="pointer-events-none absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -top-20 right-1/4 h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2 }}
      />

      <div className="container-wrapper relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center text-white font-bold font-display">
                VL
              </div>
              <span className="font-display font-bold text-xl">VarchasLabs</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Trained technology professionals for organizations across industries through staff augmentation, dedicated teams, software development, and technology outsourcing.
            </p>
            <div className="flex gap-3">
              <SocialIcon icon={<Linkedin size={16} />} href="https://www.linkedin.com/in/varchaslabs-pvt-ltd-5101773b1/" label="LinkedIn" />
              <SocialIcon icon={<Twitter size={16} />} />
              <SocialIcon icon={<Facebook size={16} />} />
              <SocialIcon icon={<Instagram size={16} />} />
            </div>
          </div>

          {columns.map((col, ci) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
            >
              <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-white mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-1 hover:text-cyan-300 transition-colors"
                    >
                      <span className="relative">
                        {l.name}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                      </span>
                      <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-white/10 text-sm text-slate-300">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-wider text-cyan-300/80">Head Office</div>
              <div>North Austin Tech Area, Austin, TX 78758, USA</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-wider text-cyan-300/80">India Office</div>
              <div>Bangalore, India</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-cyan-400 shrink-0" />
            <a href="mailto:info@varchaslabs.com" className="hover:text-white">
              info@varchaslabs.com
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} VarchasLabs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/support" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href, label }: { icon: ReactNode; href?: string; label?: string }) {
  const inner = (
    <motion.div
      whileHover={{ y: -3, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.45)] transition-colors cursor-pointer"
    >
      {icon}
    </motion.div>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        {inner}
      </a>
    );
  }
  return inner;
}
