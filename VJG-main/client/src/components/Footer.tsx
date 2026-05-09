import { Link } from "wouter";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
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
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-white/10">
      <div className="container-wrapper">
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
              Engineering talent and product solutions for modern enterprises. We help global teams
              ship secure, scalable software with senior engineers and proven delivery models.
            </p>
            <div className="flex gap-3">
              <SocialIcon icon={<Linkedin size={16} />} />
              <SocialIcon icon={<Twitter size={16} />} />
              <SocialIcon icon={<Facebook size={16} />} />
              <SocialIcon icon={<Instagram size={16} />} />
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-white mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      href={l.href}
                      className="hover:text-cyan-300 transition-colors"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-white/10 text-sm text-slate-300">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
            <span>K R Puram, Bangalore 560049, India</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-cyan-400 shrink-0" />
            <a href="tel:+916360134569" className="hover:text-white">
              +91 6360 134 569
            </a>
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

function SocialIcon({ icon }: { icon: ReactNode }) {
  return (
    <div className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 transition-all cursor-pointer">
      {icon}
    </div>
  );
}
