"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);
  const [scrolled, setScrolled] =
    useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 20
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Portfolio",
      href: "/portfolio",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6 pt-6">
      {/* Premium Background Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#cf5c36]/10 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{
          opacity: 0,
          y: -30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className={`relative max-w-7xl mx-auto transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl bg-white/[0.04] border border-white/10 rounded-[28px] shadow-[0_8px_32px_rgba(0,0,0,0.25)] py-4 px-6"
            : "py-4 px-2"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            

            <span className="hidden sm:block text-lg font-bold text-white tracking-tight">
              MEHAK
              <span className="text-[#cf5c36]">
                AKRAM
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 bg-white/[0.03] border border-white/10 rounded-2xl p-2 backdrop-blur-xl">
            {navLinks.map(
              (link) => {
                const isActive =
                  pathname ===
                  link.href;

                return (
                  <Link
                    key={link.name}
                    href={
                      link.href
                    }
                    className="relative"
                  >
                    <motion.div
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className={`relative px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="navbar-pill"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#cf5c36]/20 to-[#d97652]/10 border border-[#cf5c36]/20"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}

                      <span className="relative z-10">
                        {
                          link.name
                        }
                      </span>
                    </motion.div>
                  </Link>
                );
              }
            )}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:block"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="px-6 py-3 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#cf5c36] to-[#d97652] shadow-lg shadow-[#cf5c36]/20 hover:shadow-[#cf5c36]/40 transition-all duration-300"
              >
                Let's Talk
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() =>
                setIsMenuOpen(
                  !isMenuOpen
                )
              }
              className="md:hidden relative z-[120] w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex flex-col items-center justify-center gap-1.5"
            >
              <motion.span
                animate={{
                  rotate:
                    isMenuOpen
                      ? 45
                      : 0,
                  y:
                    isMenuOpen
                      ? 8
                      : 0,
                }}
                className="w-6 h-0.5 bg-white rounded-full"
              />

              <motion.span
                animate={{
                  opacity:
                    isMenuOpen
                      ? 0
                      : 1,
                }}
                className="w-6 h-0.5 bg-white rounded-full"
              />

              <motion.span
                animate={{
                  rotate:
                    isMenuOpen
                      ? -45
                      : 0,
                  y:
                    isMenuOpen
                      ? -8
                      : 0,
                }}
                className="w-6 h-0.5 bg-white rounded-full"
              />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 bg-black/70 backdrop-blur-2xl z-[110] md:hidden px-6 pt-32"
          >
            <div className="space-y-4">
              {navLinks.map(
                (link) => {
                  const isActive =
                    pathname ===
                    link.href;

                  return (
                    <Link
                      key={
                        link.name
                      }
                      href={
                        link.href
                      }
                      onClick={() =>
                        setIsMenuOpen(
                          false
                        )
                      }
                    >
                      <motion.div
                        whileTap={{
                          scale: 0.97,
                        }}
                        className={`rounded-3xl p-5 border backdrop-blur-xl transition-all duration-300 ${
                          isActive
                            ? "bg-white/10 border-[#cf5c36]/20 text-white"
                            : "bg-white/[0.03] border-white/10 text-slate-400 hover:text-white"
                        }`}
                      >
                        <span className="text-xl font-semibold">
                          {
                            link.name
                          }
                        </span>
                      </motion.div>
                    </Link>
                  );
                }
              )}

              <Link
                href="/contact"
                onClick={() =>
                  setIsMenuOpen(
                    false
                  )
                }
              >
                <motion.button
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="w-full mt-6 py-4 rounded-3xl bg-gradient-to-r from-[#cf5c36] to-[#d97652] text-white text-lg font-semibold shadow-xl shadow-[#cf5c36]/20"
                >
                  Let's Talk
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}