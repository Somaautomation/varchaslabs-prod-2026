import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type NavChild = { name: string; href: string; description?: string };
type NavItem = { name: string; href?: string; children?: NavChild[] };

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Solutions",
    children: [
      { name: "All Solutions", href: "/solutions", description: "Utility engineering capabilities" },
      { name: "Services", href: "/services", description: "Utility engineering & outsourcing" },
      { name: "Technologies", href: "/technologies", description: "Stack & toolbox" },
      { name: "Process", href: "/process", description: "How we deliver" },
    ],
  },
  { name: "Industries", href: "/industries" },
  {
    name: "Work",
    children: [
      { name: "Case Studies", href: "/case-studies", description: "Outcomes we've shipped" },
      { name: "About Us", href: "/about", description: "Our story & team" },
    ],
  },
  {
    name: "Resources",
    children: [
      { name: "Blog", href: "/blog", description: "Insights from the field" },
      { name: "Support", href: "/support", description: "Get help fast" },
    ],
  },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href?: string) =>
    !!href && (href === "/" ? location === "/" : location.startsWith(href));

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-gradient-to-r from-slate-50 via-white to-slate-100 shadow-md py-2"
          : "bg-transparent py-2"
      )}
    >
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
            <motion.div
              className="relative flex items-center justify-center w-[50px] h-[50px] rounded-3xl bg-gradient-to-br from-slate-100 via-slate-500 to-slate-800 shadow-2xl ring-2 ring-cyan-400/40"
              whileHover={{ boxShadow: "0 0 60px rgba(16, 185, 129, 0.6)" }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 0.4 },
              }}
            >
              <motion.img
                src="/images/logo.png"
                alt="V Logo"
                className="w-[155px] h-[155px] object-contain drop-shadow-[0_0_18px_rgba(34,211,238,0.65)]"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <div
              className={cn(
                "font-display font-extrabold leading-tight tracking-wide",
                scrolled ? "text-slate-900" : "text-white"
              )}
            >
              <span
                className={cn(
                  "text-3xl bg-clip-text text-transparent tracking-tight",
                  scrolled
                    ? "bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-500"
                    : "bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300"
                )}
              >
                VarchasLabs
              </span>
              <span
                className={cn(
                  "relative block text-[10px] font-medium uppercase tracking-[0.25em] mt-1.5",
                  scrolled ? "text-slate-600" : "text-slate-400"
                )}
              >
                <span
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 -top-2 w-8 h-px",
                    scrolled
                      ? "bg-gradient-to-r from-transparent via-sky-600 to-transparent"
                      : "bg-gradient-to-r from-transparent via-sky-400 to-transparent"
                  )}
                />
                Utility Engineering
              </span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name} className="relative group">
                <button
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors",
                    scrolled ? "text-slate-700 hover:text-primary" : "text-white hover:text-cyan-300"
                  )}
                >
                  {item.name}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 translate-y-2 rounded-2xl border border-slate-200 bg-white/95 p-2 opacity-0 shadow-2xl backdrop-blur-md transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="pointer-events-none absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-slate-200 bg-white/95" />
                  {item.children.map((c, ci) => (
                    <Link key={c.name} href={c.href}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 320, damping: 20 }}
                        className="cursor-pointer rounded-xl px-3 py-2.5 transition hover:bg-gradient-to-r hover:from-cyan-50 hover:to-violet-50"
                        style={{ animationDelay: `${ci * 40}ms` }}
                      >
                        <div className="text-sm font-semibold text-slate-900">{c.name}</div>
                        {c.description && (
                          <div className="text-xs text-slate-500">{c.description}</div>
                        )}
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.name} href={item.href!}>
                <div
                  className={cn(
                    "text-sm font-medium cursor-pointer relative group transition-colors",
                    scrolled ? "text-slate-700 hover:text-primary" : "text-white hover:text-cyan-300"
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-300",
                      isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </div>
              </Link>
            )
          )}
          <Link href="/contact">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
              <Button
                size="sm"
                className={cn(
                  "group relative overflow-hidden font-semibold shadow-lg transition-all",
                  scrolled
                    ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-cyan-500/20"
                    : "bg-white text-slate-900 hover:bg-white/90"
                )}
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Get Started</span>
              </Button>
            </motion.div>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className={cn("lg:hidden p-2", scrolled ? "text-slate-900" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-2xl max-h-[80vh] overflow-y-auto"
          >
            <div className="container-wrapper py-6 flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name} className="border-b border-slate-100 last:border-0">
                  <button
                    className="flex w-full items-center justify-between p-3 text-left text-base font-medium text-slate-700"
                    onClick={() =>
                      setOpenMobileGroup(openMobileGroup === item.name ? null : item.name)
                    }
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        openMobileGroup === item.name && "rotate-180"
                      )}
                    />
                  </button>
                  {openMobileGroup === item.name && (
                    <div className="pb-2 pl-4">
                      {item.children.map((c) => (
                        <Link key={c.name} href={c.href}>
                          <div
                            className="rounded-md p-2 text-sm text-slate-600 hover:bg-slate-50"
                            onClick={() => setIsOpen(false)}
                          >
                            {c.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.name} href={item.href!}>
                  <div
                    className={cn(
                      "p-3 text-base font-medium rounded-md transition-colors cursor-pointer",
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-slate-700 hover:bg-slate-50"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </div>
                </Link>
              )
            )}
            <Link href="/contact">
              <Button
                className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Button>
            </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
