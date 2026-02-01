import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Job Openings", href: "/#jobs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-gradient-to-r from-slate-50 via-white to-slate-100 shadow-md py-2"
  : "bg-transparent py-2"
      )}
    >
      {/* Top Bar for Contact Info - Hidden on mobile */}

      <div
        className={cn(
          "container-wrapper flex items-center justify-between transition-all duration-300",
          scrolled ? "mt-0" : "lg:mt-2"
        )}
      >
        {/* Logo */}
        <Link href="/">
          <motion.div
            className="flex items-center gap-5 cursor-pointer select-none"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            {/* LOGO CONTAINER */}
            <motion.div
              className="
        relative
        flex items-center justify-center
        w-[50px] h-[50px]
        rounded-3xl
        bg-gradient-to-br from-slate-100 via-slate-500 to-slate-800
        shadow-2xl
        ring-2 ring-cyan-400/40
      "
              whileHover={{
                boxShadow: "0 0 60px rgba(16, 185, 129, 0.6)",
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 0.4 },
              }}
            >
              {/* LOGO */}
              <motion.img
                src="/images/logo.svg"
                alt="VJG Logo"
                className="
          w-[155px] h-[155px]
          object-contain
          drop-shadow-[0_0_18px_rgba(34,211,238,0.65)]
        "
                animate={{ scale: [1, 1.06, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* TEXT */}
            <div
              className={cn(
                "font-display font-extrabold leading-tight tracking-wide",
                scrolled ? "text-slate-900" : "text-white"
              )}
            >
              {/* MAIN BRAND */}
              <span
                className={cn(
                  "text-4xl bg-clip-text text-transparent tracking-tight",
                  scrolled
                    ? "bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-500"
                    : "bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300"
                )}
              >
                VarchasLabs
              </span>

              {/* TAGLINE */}
              <span
                className={cn(
                  "relative block text-xs font-medium uppercase tracking-[0.25em] mt-2",
                  scrolled ? "text-slate-600" : "text-slate-400"
                )}
              >
                {/* Micro brand divider */}
                <span
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 -top-2 w-8 h-px",
                    scrolled
                      ? "bg-gradient-to-r from-transparent via-sky-600 to-transparent"
                      : "bg-gradient-to-r from-transparent via-sky-400 to-transparent"
                  )}
                />
                Engineering Talent Solutions
              </span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <div
                className={cn(
                  "text-sm font-medium cursor-pointer relative group transition-colors",
                  scrolled ? "text-primary" : "text-white",
                  "hover:text-accent"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                    location === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </div>
            </Link>
          ))}
          <Link href="/contact">
            <Button
              size="sm"
              className={cn(
                "font-semibold shadow-lg transition-all hover:-translate-y-0.5",
                scrolled
                  ? "bg-primary text-white"
                  : "bg-white text-primary hover:bg-white/90"
              )}
            >
              Get Started
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg animate-in slide-in-from-top-5">
          <div className="container-wrapper py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <div
                  className={cn(
                    "text-lg font-medium p-2 rounded-md transition-colors cursor-pointer",
                    location === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </div>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full mt-4" onClick={() => setIsOpen(false)}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
