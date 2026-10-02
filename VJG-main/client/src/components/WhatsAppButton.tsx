import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export type WhatsAppButtonProps = {
  /** Phone in international format, digits only (no +, spaces, or dashes). */
  phone?: string;
  /** Pre-filled message. */
  message?: string;
  /** Show a small expandable greeting bubble. */
  showGreeting?: boolean;
  /** Greeting text. */
  greetingText?: string;
  /** ms to delay first appearance after page load. */
  delayMs?: number;
};

/**
 * Floating WhatsApp chat button — premium, animated, accessible.
 *
 * - Pulsing online indicator + ambient ring
 * - Auto-pop greeting bubble after a configurable delay
 * - Dismissible bubble (state persisted to sessionStorage)
 * - Opens wa.me in a new tab with prefilled message
 */
export default function WhatsAppButton({
  phone = "916360134569",
  message = "Hi VarchasLabs, I'd like to discuss a project.",
  showGreeting = true,
  greetingText = "Hi 👋 Need help? Chat with us on WhatsApp.",
  delayMs = 1800,
}: WhatsAppButtonProps) {
  const [mounted, setMounted] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [contactFormVisible, setContactFormVisible] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), delayMs);
    return () => window.clearTimeout(t);
  }, [delayMs]);

  useEffect(() => {
    if (!mounted || !showGreeting) return;
    const dismissed = sessionStorage.getItem("vl_wa_greeting_dismissed");
    if (dismissed === "1") return;
    const t = window.setTimeout(() => setBubbleOpen(true), 600);
    return () => window.clearTimeout(t);
  }, [mounted, showGreeting]);

  useEffect(() => {
    const contactForm = document.getElementById("contact-form");
    if (!contactForm) return;

    const observer = new IntersectionObserver(([entry]) => {
      setContactFormVisible(entry.isIntersecting);
    });
    observer.observe(contactForm);
    return () => observer.disconnect();
  }, []);

  const dismissBubble = () => {
    setBubbleOpen(false);
    sessionStorage.setItem("vl_wa_greeting_dismissed", "1");
  };

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  if (contactFormVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {mounted && bubbleOpen && (
          <motion.div
            key="bubble"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="relative max-w-[16rem] rounded-2xl border border-emerald-500/20 bg-white/95 p-4 pr-9 text-sm text-slate-800 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.55)] backdrop-blur"
          >
            <p className="leading-snug">{greetingText}</p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
              onClick={dismissBubble}
            >
              Start a chat →
            </a>
            <button
              type="button"
              aria-label="Dismiss"
              onClick={dismissBubble}
              className="absolute right-2 top-2 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            {/* Tail */}
            <span className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-b border-r border-emerald-500/20 bg-white/95" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mounted && (
          <motion.a
            key="btn"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.7)] ring-1 ring-emerald-300/40 transition-shadow hover:shadow-[0_15px_45px_-5px_rgba(37,211,102,0.9)]"
          >
            {/* Pulsing rings */}
            <span className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-ping" />
            <span className="pointer-events-none absolute -inset-1 rounded-full border border-emerald-300/40" />

            <WhatsAppIcon className="relative h-7 w-7" />

            {/* Online dot */}
            <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400">
              <span className="absolute inset-0 rounded-full bg-emerald-400 motion-safe:animate-ping" />
            </span>

            {/* Tooltip */}
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900/95 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              Chat on WhatsApp
            </span>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.508 3.41 4.534 4.337.616.287 2.063.888 2.736.888.345 0 1.318-.43 1.633-.916.2-.302.3-.602.3-.945 0-.788-1.59-1.147-1.913-1.147zM16.117 27.243a11.107 11.107 0 0 1-5.748-1.59l-4.122 1.32 1.343-4.022a11.176 11.176 0 0 1-1.74-5.99c0-6.155 5.014-11.17 11.17-11.17S28.18 10.806 28.18 16.96s-5.014 11.17-11.17 11.17m9.49-20.59a13.376 13.376 0 0 0-9.535-3.95C8.77 2.704 2.85 8.62 2.85 15.92c0 2.336.6 4.587 1.74 6.567L2.45 28.762l6.45-2.078a13.27 13.27 0 0 0 6.345 1.62h.005c7.348 0 13.343-5.926 13.343-13.275 0-3.522-1.42-6.836-3.92-9.323"/>
    </svg>
  );
}
