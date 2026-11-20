"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-[100] w-full px-4 pt-5 sm:px-6 sm:pt-7">
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-white/[0.08] bg-[#141515]/95 px-4 py-3 shadow-[0_16px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-6 sm:py-3.5"
      >
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5 text-white"
          aria-label="Mehak Akram home"
        >
          <span className="text-sm font-semibold tracking-[-0.02em] sm:text-base">
            MEHAK <span className="text-[#5DEBE2]">AKRAM</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.035] p-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link key={link.name} href={link.href} className="relative">
                <motion.span
                  whileHover={{ color: "#FFFFFF" }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative block rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 lg:px-5 ${
                    isActive ? "text-white" : "text-white/65 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.08]"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </motion.span>
              </Link>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link href="/contact" className="hidden md:block">
            <motion.span
              whileHover={{ y: -1, backgroundColor: "#5DEBE2" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#111827] transition-colors duration-200 lg:px-6"
            >
              Let&apos;s Talk
              <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-0.5" />
            </motion.span>
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 text-white transition-colors hover:border-[#5DEBE2]/50 hover:bg-white/[0.06] md:hidden"
          >
            <motion.span
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 4 : 0 }}
              className="h-0.5 w-4 rounded-full bg-white"
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="h-0.5 w-4 rounded-full bg-white"
            />
            <motion.span
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -4 : 0 }}
              className="h-0.5 w-4 rounded-full bg-white"
            />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-5xl rounded-3xl border border-white/10 bg-[#141515]/[0.98] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl md:hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/[0.06] hover:text-[#5DEBE2]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#111827] transition-colors hover:bg-[#5DEBE2]"
            >
              Let&apos;s Talk <FaArrowRight className="text-[10px]" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
